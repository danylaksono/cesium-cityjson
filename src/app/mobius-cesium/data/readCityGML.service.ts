import { Injectable } from "@angular/core";
import {Observable} from "rxjs";
import {Subject} from "rxjs/Subject";
import * as chroma from "chroma-js";
import proj4 from "proj4";
import * as earcut from "earcut";
import { CesiumGeomService } from "./cesiumGeom.service";
import { DataService } from "./data.service";

@Injectable()
export class CityGMLService {
  private subject = new Subject<any>();
  private epsg: any;
  private currProps: object;
  private objCount: object;
  private rules: any;
  private keys: string[];
  private crs = {id: undefined, anchor: [0,0,0], xyz: {x:1, y:1, z:1}};

  constructor(private cesiumGeomService: CesiumGeomService, private dataService: DataService) {}
 
  public sendMessage(message?: string) {
    this.subject.next({text: message});
  }
  public clearMessage() {
    this.subject.next();
  }
  public getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  /* Reads and sets EPSG value for Proj4 projection
     - looks up epsg.io if EPSG code is found
     - defaults to EPSG:3414 if undefined

     ** TODO: reads crs from citymodel envelope, need to confirm if this is intended behaviour */
  public setEPSG(crs): void {
    this.epsg = new Promise(function(resolve) {
      let val = "";
      if (crs === undefined) {
      // if undefined, default is EPSG 3414 sweats (WGS84 causes our models to go crazy, with EPSG 3414 they at least show up)
        val = "+proj=tmerc +ellps=WGS84 +units=m +no_defs"
        // val = "+proj=tmerc +lat_0=1.366666666666667 +lon_0=103.8333333333333 +k=1 +x_0=28001.642 +y_0=38744.572 +ellps=WGS84 +units=m +no_defs";
        resolve(val);
      } else {
        // search EPSG.io
        const url = "https://epsg.io/"+crs+".proj4";

        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
          if (xhttp.readyState === 4 && xhttp.status === 200) {
            val = xhttp.responseText;
            if (val === undefined) {
              val = "+proj=tmerc +lat_0=1.366666666666667 +lon_0=103.8333333333333 +k=1 +x_0=28001.642 +y_0=38744.572 +ellps=WGS84 +units=m +no_defs";
            }
            resolve(val);
          }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
      }
    });
  }

  public clearEPSG(): void {
    this.epsg = undefined;
    this.crs = {id: undefined, anchor: [0,0,0], xyz: {x:1, y:1, z:1}};
  }

  /* Projects input point to WGS84
     Params: Array of coordinates for 1 point as obtained from file
     Returns: Array of coordinates for point in WGS84 + height

     ** TODO: SG's height datum? */
  public projectPtsToWGS84(coords): number[] {
    const projcoords = proj4(this.epsg,"WGS84",[(coords[0]/this.crs["xyz"]["x"]),(coords[1]/this.crs["xyz"]["y"])]);
    const newcoords = [(projcoords[0])+this.crs["anchor"][0],
                       (projcoords[1])+this.crs["anchor"][1],
                       (coords[2]/this.crs["xyz"]["z"])+this.crs["anchor"][2]
                      ];
    return newcoords;
  }

  /* Generates surfaces from an element as a group
     - Obtains coordinates and properties for all "Triangle" and "Polygon" surfaces in the element
     - Calls cesiumGeomService to generate entities
     Params: XML node for an element that contains surfaces to generate (eg. WallSurface / Room)
             Name of node (to be used as surface type for properties)
     Uses: - nextElement
           - getCoords
           - cesiumGeomService.genSolidGrouped */
  public genPoly(srf,props,srf_type): void {
    while (srf !== null && srf.nodeName.split(":")[1] !== "surfaceMember") {
      srf = this.nextElement(srf.firstChild);
    }
    const solid = [];
    // loop through all surfaces in element
    while (srf !== null) {
      // get first Triangle or Polygon (depends on what the CityGML is using)
      let firstSrf = srf;
      while (firstSrf !== null && (firstSrf.nodeName.split(":")[1] !== "Triangle") && (firstSrf.nodeName.split(":")[1] !== "Polygon"))  {
        firstSrf = this.nextElement(firstSrf.firstChild);
      }
      if (firstSrf === null) {
        srf = this.nextElement(srf.nextSibling);
        break;
      }
      // if Triangle, step into first child (exterior linear ring) and get coords
      // loop through all other triangles in surface
      if (firstSrf.nodeName.split(":")[1] === "Triangle") {
        while (firstSrf !== null) {
          const poly = this.nextElement(firstSrf.firstChild);
          solid.push(this.getCoords(poly));
          firstSrf = this.nextElement(firstSrf.nextSibling);
        }
      }
      // if Polygon, step into first child (exterior linear ring) and get coords
      else if (firstSrf.nodeName.split(":")[1] === "Polygon") {
        firstSrf = this.nextElement(firstSrf.firstChild);
        solid.push(this.getCoords(firstSrf));
      }
      // extract and convert all coordinates for surface and push to solid
      srf = this.nextElement(srf.nextSibling);
    }
    // console.log(solid);
    this.cesiumGeomService.genSolidGrouped(solid,undefined,props,srf_type);
  }

  /* Obtains and prepares coordinates from the linear rings that make up ONE Triangle or Polygon
     - Also handles holes in polygons
     - First linear ring is exterior ring, subsequent are holes
     - Coordinates should be in "pos" or "posList" with dimension "3"
     Params: XML node for an element that contains coordinates
     Returns: Array of linear rings (eg. [ [[0,0,0],[0,0,1],[0,1,1],[0,0,0]] , [[0,0.2,0.2],[0,0.2,0.8],[0,0.8,0.8],[0,0.2,0.2]])
     Uses: - nextElement
           - projectPtsToWGS84 */
  public getCoords(node): any {
    const polygon = [];
    let dimension: string;
    let coordinates: string;
    let coordsplit: string[];
    // Loop through Linear rings
    while (node !== null) {
      // get coordinates
      let coords = this.nextElement(node.firstChild);
      while ((coords.nodeName.split(":")[1] !== "LinearRing"))  {
        coords = this.nextElement(coords.firstChild);
      }
      coords = this.nextElement(coords.firstChild);
      // if positions are in posList, split and project to wgs84 in threes, then push to polygon
      if (coords.nodeName.split(":")[1] === "posList") {
        // get dimension if present, else default to "3"
        if (coords.getAttribute("srsDimension") !== null) {
          dimension = coords.getAttribute("srsDimension");
        } else {
          dimension = "3";
        }
        coordinates = coords.textContent;
        // replace linebreaks with spaces if any
        coordinates = coordinates.replace(/\n/g, " ");
        // split coordinates by " ", convert to number from string and project to wgs84
        coordsplit = coordinates.split(" ");
        const coord_arr: number[][] = [];
        if (dimension === "3") {
          for (let i = 0 ; i < coordsplit.length ; i = i + 3) {
            const arr = this.projectPtsToWGS84([(Number(coordsplit[i])),(Number(coordsplit[i+1])),(Number(coordsplit[i+2]))]);
            coord_arr.push(arr);
          }
        }
        // else if (dimension === "2") {
        //   for (let i = 0 ; i < coordsplit.length ; i = i + 2) {
        //     const arr = this.projectPtsToWGS84([(Number(coordsplit[i])),(Number(coordsplit[i+1])),0]);
        //     coord_arr.push(arr);
        //   }
        // }
        polygon.push(coord_arr);
        // if positions are in pos, loop through, split and project each one to wgs84, then push to polygon
      } else if (coords.nodeName.split(":")[1] === "pos") {
        const coord_arr: number[][] = [];
        while (coords !== null) {
          coordinates = coords.textContent;
          // split coordinates by " ", convert to number from string and project to wgs84
          coordsplit = coordinates.split(" ");
          const arr = this.projectPtsToWGS84([(Number(coordsplit[0])),(Number(coordsplit[1])),(Number(coordsplit[2]))]);
          coord_arr.push(arr);
          coords = this.nextElement(coords.nextSibling);
        }
        polygon.push(coord_arr);
      }
      node = this.nextElement(node.nextSibling);
    }
    return polygon;
  }

  /* Finds the next sibling node that is an element
     Params: XML node to check
     Returns: XML node for next element if found, null if not found */
  public nextElement(node): any {
    // if node is null, return null.
    if (node === null) {
      return null;
    }
    // Loops through siblings untill an element is found
    // If siblings end up returning null, return null.
    while (node.nodeType !== 1) {
      node = node.nextSibling;
      if (node === null) {
        return null;
      }
    }
    return node;
  }

  /* Gets the name of the given node, excluding namespace prefix if any
     Params: XML node to get name of
     Returns: Name of node without prefix */
  public getName(node): string {
    const split = node.nodeName.split(":");
    const nodename = split[split.length - 1];
    return nodename;
  }

  public getEnginCRS(node): object {
    const engincrs = {id: undefined, anchor: [0,0,0], xyz: {x:1, y:1, z:1}};
    while (node!== null) {
      const nodename = this.getName(node);
      // find EngineeringCRS
      if (nodename === "EngineeringCRS") {
        engincrs["id"] = node.getAttributeNS("http://www.opengis.net/gml","id");
        const axes = node.getElementsByTagNameNS("http://www.opengis.net/gml","CoordinateSystemAxis");
        for (const axis of axes) {
          const units = axis.getAttributeNS("http://www.opengis.net/gml","uom");
          let val = 1;
          if (units === "urn:ogc:def:uom:EPSG::9001") {
            val = 1;
          } else if (units === "urn:ogc:def:uom:EPSG::1033") {
            val = 100;
          } else if (units === "urn:ogc:def:uom:EPSG::1025") {
            val = 1000;
          }
          const direction = axis.getElementsByTagNameNS("http://www.opengis.net/gml","axisDirection")[0].textContent;
          if (direction === "X") {
            engincrs["xyz"]["x"] = val;
          } else if (direction === "Y") {
            engincrs["xyz"]["y"] = val;
          } else if (direction === "Z") {
            engincrs["xyz"]["z"] = val;
          }
        }
        const anchorPoint = node.getElementsByTagNameNS("http://www.opengis.net/gml","anchorPoint");
        const pt = anchorPoint[0].textContent.split(" ");
        engincrs["anchor"] = [Number(pt[1]),Number(pt[0]),Number(pt[2])];
      }
      node = this.nextElement(node.nextSibling);
    }
    return engincrs;
  }

  // Checks the cityModel and extracts EPSG if any and excludes appearanceMember
  public checkCityModel(node): any {
    const nodes = [];
    const citymodel_props = {};
    const citymodel_ade = {};
    const engincrs = {};
    while (node !== null) {
      const nodename = this.getName(node);
      // extract name
      if (nodename === "name") {
        const name = node.textContent;
        citymodel_props[nodename] = name;
      }
      // extract envelope
      else if (nodename === "boundedBy") {
        // extract crs
        const envelope = this.nextElement(node.firstChild);
        if (envelope != null) {
          citymodel_props["srsName"] = envelope.getAttribute("srsName");
          if (citymodel_props["srsName"].includes("EPSG")) {
            let srs : String[];
            srs = (envelope.getAttribute("srsName")).split(",");
            srs = srs[1].split(":");
            const epsg = srs[srs.length-1];
            this.setEPSG(epsg);
          }
        }
      }
      else if (nodename === "metaDataProperty") {
        const crs = this.getEnginCRS(this.nextElement(node.firstChild));
        engincrs[crs["id"]] = crs;
      }
      // extract list of cityobjectmember and featuremember
      else if (nodename === "cityObjectMember" ||
                 nodename === "featureMember") {
        nodes.push(this.nextElement(node.firstChild));
      }
      // skip appearanceMember
      else if (nodename === "appearanceMember"){}
      // extract everything else
      else {
        this.addProperties(node,citymodel_ade);
      }
      node = this.nextElement(node.nextSibling);
    }

    if (citymodel_props["srsName"]!== undefined && citymodel_props["srsName"].startsWith("#")) {
      const srs = citymodel_props["srsName"].slice(1,citymodel_props["srsName"].length);
      this.crs = engincrs[srs];
      citymodel_props["Longtitude"] = this.crs["anchor"][0];
      citymodel_props["Latitude"] = this.crs["anchor"][1];
      citymodel_props["Elevation"] = this.crs["anchor"][2];
    }
    // console.log(nodes,citymodel_props,citymodel_ade);
    return [nodes, {"cityModel properties":citymodel_props, "cityModel ADE properties":citymodel_ade}] ;
  }

  /* Checks each node in input array against arrays of node names (this.rules).
     Updates properties and performs additional checks or generates geometry according to rules
     Params: Array of nodes to check
             Object containing properties objects accumulated so far

      *** RECURSIVE *** */
  public check(nodes, props): void {
    let match = false;
    for (let node of nodes) {
      // create new variables
      const check_nodes = [];
      const gen_nodes = [];
      const new_props = [];
      const new_ade = [];
      const node_name = this.getName(node);
      let sibling_name = node_name;

      if (node_name === "Building") {
        this.objCount = {};
      }

      if (node_name === "Building" ||
          node_name === "BuildingPart" ||
          node_name === "Storey") {
        this.addObjCount(node_name);
        new_props[node_name] = this.objCount[node_name];
      }

      node = this.nextElement(node.firstChild);
      while (node !== null) {
        match = false;
        // update sibling_name
        sibling_name = this.getName(node);
        // check
        const action = this.rules[sibling_name];
        // console.log(sibling_name, action_arr);
        if (action === "check") {
          const child = this.nextElement(node.firstChild);
          if (child !== null) {
            check_nodes.push(child);
          }
          match = true;
        }
        else if (action === "prop") {
          this.addProperties(node,new_props);
          match = true;
        }
        else if (action === "geom") {
          const child = this.nextElement(node.firstChild);
          if (child !== null) {
            new_props["Surface_Type"] = node_name;
            gen_nodes.push(child);
          }
          match = true;
        }
        else if (match === false) {
          if (action === "skip") {
            match = true;
          }
        }
        // ADE
        if (match === false) {
          this.addProperties(node,new_ade);
        }
        node = this.nextElement(node.nextSibling);
      }

      // duplicate props and add properties from current node
      let updated_props = Object.assign({}, props);
      const add_props = {};
      add_props[node_name + " properties"] = new_props;
      add_props[node_name + " ADE properties"] = new_ade;
      updated_props = Object.assign(updated_props, add_props);

      // check and gengeom
      if (check_nodes.length > 0) {
        this.check(check_nodes, updated_props);
      }
      if (gen_nodes.length > 0) {
        for (let srf of gen_nodes) {;
          this.genPoly(srf,updated_props,node_name);
        }
      }
    }
  }

  /* Adds all leaf nodes of specified node as key:value pair in specified properties object
     Params: Node to check and add to properties
             Object to add key:value pairs to (alters input)

     *** RECURSIVE *** */
  public addProperties(node,prop): void {
    if (node === null) {
      return;
    }
    const name = this.getName(node);
    if (node.innerHTML === node.textContent) {
      prop[name] = node.textContent;
    }
    let child = this.nextElement(node.firstChild);
    while (child !== null) {
      this.addProperties(child,prop);
      child = this.nextElement(child.nextSibling);
    }
  }

  /* Updates counter for cityObjectMember/featureMember/Building/BuildingPart
     - adds new counter if not already present
     Params: name of counter to update (cityObjectMember/featureMember/Building/BuildingPart)*/
  private addObjCount(prop): void {
    // if prop doesn't exist, add it
    if (this.objCount[prop] === undefined) {
      this.objCount[prop] = 0;
    }
    // if it already exists then ++
    else {
      this.objCount[prop]++;
    }
  }


  /* Main function to read file and return datasource containing generated entities
     - Initialises, retrieves and clears data from cesiumGeomService
     Called in viewer.component LoadData
     Params: CityGML file
     Returns: Cesium datasource containing entities generated from input file */
  public genGeom(file): any {
    let data = undefined;
    if (file !== undefined) {
      // Initialise dataSource and surface type ID arrays
      this.cesiumGeomService.initialiseCesium();
      this.objCount = {};
      this.currProps = {};
      this.rules = this.dataService.getRules();
      // this.rules = {
      //               "check": ["consistsOfBuildingPart","buildingSubdivision","outerBuildingInstallation","boundedBy","boundary","interiorRoom","opening"],
      //               "property": ["name","creationDate","externalReference","function","measuredHeight","address"],
      //               "geom": ["lod2MultiSurface","lod3MultiSurface","lod4MultiSurface","lod1Geometry","lod2Geometry","lod3Geometry","lod4Geometry","lod1Solid"],
      //               "skip": []
      //             };

      // Get properties of CityModel
      const member = this.nextElement(this.nextElement(file.firstChild).firstChild);
      const nodes = this.checkCityModel(member);

      if (this.epsg === undefined) {
        this.setEPSG(undefined);
      }
      const context = this;
      data = this.epsg.then((epsg) => {
        context.epsg = epsg;
        context.check(nodes[0],nodes[1]);
        context.cesiumGeomService.resumeDataSource();
        context.clearEPSG();
        return context.cesiumGeomService.getDataSource();
      });
    }
    return data;
  }
}
