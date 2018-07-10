import { Injectable } from "@angular/core";
import {Observable} from "rxjs";
import {Subject} from "rxjs/Subject";
import * as chroma from "chroma-js";
import proj4 from "proj4";

@Injectable()
export class DataService {
  private _jsonModel: JSON;
  private subject = new Subject<any>();
  private viewer: any;
  private _SelectedEntity: any;
  private cesiumpromise: any;
  private hideElementArr: any[];
  private _HideNum: any[];
  private mode: string;
  private _ViData: object;
  private _PuData: object;
  private _index: number;
  private _Filter: any[];
  private _imageryViewModels: any[] = [];
  // private _indexArr: number[] = [];

  public sendMessage(message?: string) {
    this.subject.next({text: message});
  }
  public clearMessage() {
    this.subject.next();
  }

  public getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  public getGsModel(): any {
    return this._jsonModel;
  }
  public setMode(mode: string) {
    this.mode = mode;
  }

  public setGsModel(model: JSON) {
    delete this._jsonModel;
    const json = this._jsonModel;
    this._jsonModel = model;
    if(this._jsonModel !== undefined){this.clearAll();}
    this.sendMessage("model_update");
    
  }
  public clearAll(){
    delete this.hideElementArr;
    delete this._HideNum;
    delete this._ViData;
    delete this._PuData;
    delete this._index;
    delete this._Filter;

  }
  public getViewer(): any {
    return this.viewer;
  }
  public setViewer(_viewer): void {
    this.viewer = _viewer;
  }
  public get_SelectedEntity(): any {
    return this._SelectedEntity;
  }
  public set_SelectedEntity(_SelectedEntity): void {
    this._SelectedEntity = _SelectedEntity;
  }
  public getcesiumpromise(): any {
    return this.cesiumpromise;
  }
  public setcesiumpromise(cesiumpromise): void {
    delete this.cesiumpromise;
    this.cesiumpromise = cesiumpromise;
  }
  public gethideElementArr(): any {
    return this.hideElementArr;
  }
  public get_HideNum(): any[] {
    return this._HideNum;
  }
  public getmode(): string {
    return this.mode;
  }
  public get_index(): number {
    return this._index;
  }
  public set_index(_index): void {
    this._index = _index;
  }
  public set_imageryViewModels() :void{
    this._imageryViewModels.push(new Cesium.ProviderViewModel({
     name : "Stamen Toner",
     iconUrl : Cesium.buildModuleUrl("Widgets/Images/ImageryProviders/stamenToner.png"),
     tooltip : "A high contrast black and white map.\nhttp://www.maps.stamen.com/",
     creationFunction : function() {
         return Cesium.createOpenStreetMapImageryProvider({
             url : "https://stamen-tiles.a.ssl.fastly.net/toner/",
         });
     },
    }));
    this._imageryViewModels.push(new Cesium.ProviderViewModel({
     name : "Stamen Toner(Lite)",
     iconUrl : Cesium.buildModuleUrl("Widgets/Images/ImageryProviders/stamenToner.png"),
     tooltip : "A high contrast black and white map(Lite).\nhttp://www.maps.stamen.com/",
     creationFunction : function() {
         return Cesium.createOpenStreetMapImageryProvider({
             url : "https://stamen-tiles.a.ssl.fastly.net/toner-lite/",
         });
     },
    }));
    this._imageryViewModels.push(new Cesium.ProviderViewModel({
     name : "Terrain(Standard)",
     iconUrl : Cesium.buildModuleUrl("Widgets/Images/TerrainProviders/CesiumWorldTerrain.png"),
     tooltip : "A high contrast black and white map(Standard).\nhttp://www.maps.stamen.com/",
     creationFunction : function() {
         return Cesium.createOpenStreetMapImageryProvider({
             url : "https://stamen-tiles.a.ssl.fastly.net/terrain/",
         });
     },
    }));
    this._imageryViewModels.push(new Cesium.ProviderViewModel({
     name : "Terrain(Background)",
     iconUrl : Cesium.buildModuleUrl("Widgets/Images/TerrainProviders/CesiumWorldTerrain.png"),
     tooltip : "A high contrast black and white map(Background).\nhttp://www.maps.stamen.com/",
     creationFunction : function() {
         return Cesium.createOpenStreetMapImageryProvider({
             url : "https://stamen-tiles.a.ssl.fastly.net/terrain-background/",
         });
     },
    }));
    this._imageryViewModels.push(new Cesium.ProviderViewModel({
     name : "Open\u00adStreet\u00adMap",
     iconUrl : Cesium.buildModuleUrl("Widgets/Images/ImageryProviders/openStreetMap.png"),
     tooltip : "OpenStreetMap (OSM) is a collaborative project to create a free editable \
             map of the world.\nhttp://www.openstreetmap.org",
     creationFunction : function() {
         return Cesium.createOpenStreetMapImageryProvider({
             url : "https://a.tile.openstreetmap.org/",
         });
     },
    }));

    this._imageryViewModels.push(new Cesium.ProviderViewModel({
     name : "Earth at Night",
     iconUrl : Cesium.buildModuleUrl("Widgets/Images/ImageryProviders/earthAtNight.png"),
     tooltip : "The lights of cities and villages trace the outlines of civilization \
                 in this global view of the Earth at night as seen by NASA/NOAA\'s Suomi NPP satellite.",
     creationFunction : function() {
         return new Cesium.IonImageryProvider({ assetId: 3812 });
     },
    }));

    this._imageryViewModels.push(new Cesium.ProviderViewModel({
     name : "Natural Earth\u00a0II",
     iconUrl : Cesium.buildModuleUrl("Widgets/Images/ImageryProviders/naturalEarthII.png"),
     tooltip : "Natural Earth II, darkened for contrast.\nhttp://www.naturalearthdata.com/",
     creationFunction : function() {
         return Cesium.createTileMapServiceImageryProvider({
             url : Cesium.buildModuleUrl("Assets/Textures/NaturalEarthII"),
         });
     },
    }));

    this._imageryViewModels.push(new Cesium.ProviderViewModel({
     name : "Blue Marble",
     iconUrl : Cesium.buildModuleUrl("Widgets/Images/ImageryProviders/blueMarble.png"),
     tooltip : "Blue Marble Next Generation July, 2004 imagery from NASA.",
     creationFunction : function() {
         return new Cesium.IonImageryProvider({ assetId: 3845 });
     },
    }));
  }
  public get_imageryViewModels(): any[] {
    return this._imageryViewModels;
  }

  public getValue(model: JSON) {
    if(model !== undefined) {
      const propertyName = Object.keys(model["features"][0].properties);
      propertyName.sort();
      propertyName.unshift("None");
      const propertyNames = propertyName.filter(function(value) { 
        return value != 'TYPE'&& value != 'COLOR'&& value != 'HEIGHT'&&value != 'EXTRUHEIGHT'
      });
      const _ColorValue = propertyNames[0];

      const feature_instance = model["features"][0];
      const _HeightKey = propertyNames.filter(function(prop_name) {
        const value =  feature_instance.properties[prop_name];
        return (typeof(value) === "number");
      });

      _HeightKey.sort();
      _HeightKey.unshift("None");
      const _HeightValue = _HeightKey[0];

      const promise = this.cesiumpromise;
      const _Heighttexts: any[] = [];
      const _Colortexts: any[] = [];
      const _indexArr: number[] = [];
      const self = this;
      promise.then(function(dataSource) {
        const entities = dataSource.entities.values;
        for (const entity of entities) {
          if(entity.properties["TYPE"] === undefined||entity.properties["TYPE"]._value !== "STATIC"){
            if(entity.properties[_HeightValue] !== undefined) {
              if(entity.properties[_HeightValue]._value !== " ") {
                if(_Heighttexts.length === 0) {_Heighttexts[0]=entity.properties[_HeightValue]._value;
                } else { if(_Heighttexts.indexOf(entity.properties[_HeightValue]._value) === -1) {
                 _Heighttexts.push(entity.properties[_HeightValue]._value);}
                }
              }
            }
            if(entity.properties[_ColorValue] !== undefined) {
              if(entity.properties[_ColorValue]._value !== " ") {
                if(_Colortexts.length === 0) {_Colortexts[0] = entity.properties[_ColorValue]._value;
                } else { if(_Colortexts.indexOf(entity.properties[_ColorValue]._value) === -1) {
                  _Colortexts.push(entity.properties[_ColorValue]._value);}
                }
              }
            }
            _indexArr.push(entities.indexOf(entity));
          } else {
            entity.polygon.height =  entity.properties["HEIGHT"];
            entity.polygon.extrudedHeight = entity.properties["EXTRUHEIGHT"];
            const ColorValue = entity.properties["COLOR"]._value;
            entity.polygon.material = Cesium.Color.fromBytes(ColorValue[0], ColorValue[1], ColorValue[2], ColorValue[3]);
          }
          if(entity.polygon !== undefined) {
              entity.polygon.outlineColor = Cesium.Color.Black;
            }
          if(entity.billboard !== undefined) {
            entity.billboard = undefined;
            entity.point = new Cesium.PointGraphics({
              color: Cesium.Color.BLUE,
              pixelSize: 10,
            });
          }
        }
      });
      const _MinColor = Math.min.apply(Math, _Colortexts);
      const _MaxColor = Math.max.apply(Math, _Colortexts);
      const _MinHeight = Math.min.apply(Math, _Heighttexts);
      const _MaxHeight = Math.max.apply(Math, _Heighttexts);
      const _Filter: any[] = [];
      const _HideNum: any[] = [];
      this.getViData(propertyNames,_Colortexts.sort(),_ColorValue,_MinColor,_MaxColor,false,
                     _HeightKey,_Heighttexts.sort(),_HeightValue,_MinHeight,_MaxHeight,1,
                     false,false,_Filter,_HideNum,_indexArr);
    }
  }
  public get_ViData(): object {
    return this._ViData;
  }
  public set_ViData(_ViData): void {
    this._ViData=_ViData;
  }

  public LoadJSONData() {
    if(this._jsonModel !== undefined&&this._jsonModel["cesium"] !== undefined) {
      const cesiumData=this._jsonModel["cesium"];
      let _ColorDescr: string;
      let _ColorValue: string;
      let _MinColor: number;
      let _MaxColor: number;
      let _ColorInvert: boolean;
      let _HeightDescr: string;
      const _HeightKey: any[] = [];
      let _HeightValue: string;
      let _MinHeight: number;
      let _MaxHeight: number;
      let _HeightInvert: boolean;
      let _HeightScale: number;
      let _HeightLine: boolean;
      let _filters: any[];
      const _ceisumData: any[] = [];
      const _propertyNames: any[] = [];
      const _HideNum: any[] = [];
      const _indexArr: number[] = [];
      if(cesiumData["colour"] !== undefined) {
        if(cesiumData["colour"]["descr"] !== undefined) {
          _ColorDescr = cesiumData["colour"]["descr"];
        }
        if(cesiumData["colour"]["attribs"] !== undefined) {
          for(const data of cesiumData["colour"]["attribs"]) {
            _propertyNames.push(data["name"]);
          }
          _ColorValue = _propertyNames[0];
          _MinColor = cesiumData["colour"]["attribs"][0]["min"];
          _MaxColor = cesiumData["colour"]["attribs"][0]["max"];
          if(cesiumData["colour"]["attribs"][0]["invert"] === true) {_ColorInvert = true;} else {_ColorInvert = false;}
        }

      }
      if(cesiumData["extrude"] !== undefined) {
        if(cesiumData["extrude"]["descr"] !== undefined) {
          _HeightDescr = cesiumData["extrude"]["descr"];
        }
        if(cesiumData["extrude"]["attribs"] !== undefined) {
          for(const data of cesiumData["extrude"]["attribs"]) {
            _HeightKey.push(data["name"]);
          }
          _HeightValue = _HeightKey[0];
          _MinHeight = cesiumData["extrude"]["attribs"][0]["min"];
          _MaxHeight = cesiumData["extrude"]["attribs"][0]["max"];
          if(cesiumData["extrude"]["attribs"][0]["invert"] === true) {
            _HeightInvert = true;} else {_HeightInvert = false;}
          if(cesiumData["extrude"]["attribs"][0]["line"] === true) {_HeightLine = true;} else {_HeightLine = false;}
          if(cesiumData["extrude"]["attribs"][0]["scale"] !== undefined) {
            _HeightScale = cesiumData["extrude"]["attribs"][0]["scale"];
          } else {_HeightScale = 1;}
        }
      }
      const promise = this.cesiumpromise;
      const _Heighttexts = [];
      const _Colortexts = [];
      const self = this;
      promise.then(function(dataSource) {
        const entities = dataSource.entities.values;
        for (const entity of entities) {
          if(entity.properties[_HeightValue] !== undefined) {
            if(entity.properties[_HeightValue]._value !== " ") {
              if(_Heighttexts.length === 0) {_Heighttexts[0] = entity.properties[_HeightValue]._value;
              } else { if(_Heighttexts.indexOf(entity.properties[_HeightValue]._value) === -1) {
                _Heighttexts.push(entity.properties[_HeightValue]._value);}
              }
            }
          }
          if(entity.properties[_ColorValue] !== undefined) {
            if(entity.properties[_ColorValue]._value !== " ") {
              if(_Colortexts.length === 0) {_Colortexts[0] = entity.properties[_ColorValue]._value;
              } else { if(_Colortexts.indexOf(entity.properties[_ColorValue]._value) === -1) {
                _Colortexts.push(entity.properties[_ColorValue]._value);}
              }
            }
          }
          if(entity.polygon !== undefined) {
            entity.polygon.outlineColor = Cesium.Color.Black;
          }
          if(entity.billboard !== undefined) {
            entity.billboard = undefined;
            entity.point = new Cesium.PointGraphics({
              color: Cesium.Color.BLUE,
              pixelSize: 10,
            });
          }
          _indexArr.push(entities.indexOf(entity));
        }
      });
      if(cesiumData["filters"] !== undefined) {
        _filters = cesiumData["filters"];
        let lastnumber: string;
        this._Filter = [];
        this._HideNum = [];
        if(_filters !== undefined&&_filters.length !== 0) {
          for(const _filter of _filters) {
            if(this._HideNum.length === 0) {
              this._HideNum[0] = "0";
              lastnumber = this._HideNum[0];
            } else {
              for(let j = 0;j < this._HideNum.length + 1;j++) {
                if(this._HideNum.indexOf(String(j)) === -1) {
                  this._HideNum.push(String(j));
                  lastnumber = String(j);
                  break;
                }
              }
            }
            if(_filter["name"] !== undefined) {
              const _propertyname = _filter["name"];
              const _relation = Number(_filter["relation"]);
              const _text = _filter["value"];
              const _descr = _filter["descr"];
              let _HideType: string;
              let _texts: any[];
              if(typeof(_text) === "number") {
                _HideType = "number";
                _texts = this.Initial(_propertyname);
              } else if(typeof(_text) === "string") {
                _HideType = "category";
                _texts = this.Initial(_propertyname);
                _texts = ["None"].concat(_texts);
              }
              this._Filter.push({ divid:String("addHide".concat(String(lastnumber))),id: lastnumber,
                                  HeightHide:_propertyname,type:_HideType,Category:_texts,
                                  CategaryHide:_text,descr:_descr,RelaHide:_relation,
                                  textHide: _text,HideMax:Math.ceil(Math.max.apply(Math, _texts)),
                                  HideMin:Math.floor(Math.min.apply(Math, _texts)*100)/100,Disabletext:null});
            }
          }
        }
      } else {this._Filter = [];this._HideNum = [];}
      this.getPuData(_ColorDescr,_propertyNames,_Colortexts.sort(),_ColorValue,_MinColor,_MaxColor,_ColorInvert,
                        _HeightDescr,_HeightKey,_Heighttexts.sort(),_HeightValue,_MinHeight,_MaxHeight,
                        _HeightScale,_HeightInvert,_HeightLine,this._Filter,this._HideNum,_indexArr);

    }

  }

  public projectPtsToWGS84(coords, proj_epsg): number[] {
    const projcoords = proj_epsg([coords[0],coords[1]]);
    const newcoords = [projcoords[0],projcoords[1],coords[2]];
    return newcoords;
  }

  public genCityJSONGeom(file: JSON): object {
    // Initialise arrays to contain primitives to display in viewer
    const inst_Filled = [];
    const inst_Outline = [];
    const dataSource = new Cesium.CustomDataSource();

    if (file !== undefined) {
      // TODO: Initialise epsg projector (proj4js) link to Spatial References
      const proj1 = "+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=3500000 +y_0=0 +ellps=bessel +datum=potsdam +units=m +no_defs";
      const WGS84 = "+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees";
      const proj_epsg = proj4(proj1,WGS84).forward;

      // Pull out array of vertices and project to WGS84
      const vertices = [];
      file["vertices"].forEach((point) => {
        const coords = this.projectPtsToWGS84(point,proj_epsg);
        vertices.push(coords);
      });

      // Loop through CityObjects and search for type "Building"
      const city_object_keys = Object.keys(file["CityObjects"]);
      for (let obj_index = 0 ; obj_index < city_object_keys.length ; obj_index ++) {
        const obj =  file["CityObjects"][city_object_keys[obj_index]];
        if (1) {

          // Loop through geometry
          for (let geom_index = 0 ; geom_index < obj["geometry"].length ; geom_index ++) {
            const geom = obj["geometry"][geom_index];

            if (geom == undefined) {
              continue;
            }

            // Pull out array of semantics values & surfaces
            let values = undefined;
            let surfaces = undefined;
            if (geom["semantics"] !== undefined) {
              values = geom["semantics"]["values"];
              surfaces = geom["semantics"]["surfaces"];
            }

            // Extract vertices
            const boundaries = geom["boundaries"];
            if (boundaries === undefined) {
              continue;
            }
            for (let srf_index = 0 ; srf_index < boundaries.length ; srf_index ++) {
              const rings = boundaries[srf_index];
              const extRing = rings[0];
              let extRing_points = [];

              // Obtain coordinates for each vertice and create p_hierarchy for outer ring
              if (extRing === undefined) {
                continue;
              }
              extRing.forEach((pt_index) => {
                extRing_points.push(vertices[pt_index][0],vertices[pt_index][1],vertices[pt_index][2]);
              });

              const ext_cartesian3 = Cesium.Cartesian3.fromDegreesArrayHeights(extRing_points);
              let p_hierarchy = new Cesium.PolygonHierarchy(ext_cartesian3);

              // If boundaries contain inner rings for holes, create p_hierarchy with holes
              if (rings.length > 0) {
                const int_cartesian3 = [];
                // Create p_hierarchy for each hole and push to int_cartesian3
                for (let ring_index = 1 ; ring_index < rings.length ; ring_index++) {
                  const temp_pts = [];
                  rings[ring_index].forEach((pt_index) => {
                    temp_pts.push(vertices[pt_index][0],vertices[pt_index][1],vertices[pt_index][2]);
                  });
                  int_cartesian3.push(new Cesium.PolygonHierarchy(Cesium.Cartesian3.fromDegreesArrayHeights(temp_pts)));
                }
                // Create p_hierarchy with holes (as array of p_hierarchies)
                p_hierarchy = new Cesium.PolygonHierarchy(ext_cartesian3, int_cartesian3);
              }

              // Extract surface type
              let surface_type = undefined;
              if (values !== undefined) {
                surface_type = surfaces[values[srf_index]]["type"];
              }
              
              console.log(srf_index,p_hierarchy,surface_type);

              // Set colour based on surface_type
              let colour = Cesium.Color.WHITE;
              if (surface_type === "Window") {
                colour = Cesium.Color.LIGHTBLUE;
              }
              if (surface_type === "RoofSurface") {
                colour = Cesium.Color.CRIMSON;
              }

              // Create property bag
              const property_bag = new Cesium.PropertyBag();
              property_bag.addProperty("Name", city_object_keys[obj_index]);
              property_bag.addProperty("Surface Type", surface_type);

              // Create polygon
              const poly = dataSource.entities.add({
                name : city_object_keys[obj_index],
                polygon : {
                  hierarchy : p_hierarchy,
                  perPositionHeight : true,
                  material : colour,
                  outline : false,
                  //outlineColor : Cesium.Color.BLACK,
                  properties : property_bag,
                },
              });
            }
          }
        }
      }

    }
    return dataSource;
  }

  public  Initial(_HideValue: string): any[] {
    const texts=[];
    const promise = this.getcesiumpromise();
    const self = this;
    promise.then(function(dataSource) {
      const entities = dataSource.entities.values;
      for (const entity of entities) {
        if(entity.properties[_HideValue] !== undefined) {
          if(entity.properties[_HideValue]._value !== " ") {
            if(texts.length === 0) {texts[0] = entity.properties[_HideValue]._value;
            } else { if(texts.indexOf(entity.properties[_HideValue]._value) === -1) {
              texts.push(entity.properties[_HideValue]._value);}
            }
          }
        }
      }
    });
    return texts;
  }

  public get_PuData(): object {
    return this._PuData;
  }
  public set_PuData(_PuData): void {
    this._PuData = _PuData;
  }
  public getViData(_ColorProperty: any[],_ColorText: any[],_ColorKey: string,
                   _ColorMin: number,_ColorMax: number,_ColorInvert: boolean,
                   _ExtrudeProperty: any[],_ExtrudeText: any[],_ExturdeValue: string,
                   _ExtrudeMin: number,_ExtrudeMax: number,_Scale: number,_Invert: boolean,
                   _HeightChart: boolean,_Filter: any[],_HideNum: number[],_indexArr: number[]) {
    this._ViData = {ColorProperty:_ColorProperty,ColorText:_ColorText,ColorKey:_ColorKey,
                    ColorMin:_ColorMin,ColorMax:_ColorMax,ColorInvert:_ColorInvert,
                    ExtrudeProperty:_ExtrudeProperty,ExtrudeText:_ExtrudeText,ExtrudeKey:_ExturdeValue,
                    ExtrudeMin:_ExtrudeMin,ExtrudeMax:_ExtrudeMax,Scale:_Scale,Invert:_Invert,
                    HeightChart:_HeightChart,Filter:_Filter,HideNum:_HideNum,indexArr:_indexArr};
  }

  public getPuData(_ColorDescr: string,_ColorProperty: any[],_ColorText: any[],_ColorKey: string,
                   _ColorMin: number,_ColorMax: number,_ColorInvert: boolean,
                   _ExtrudeDescr: string,_ExtrudeProperty: any[],_ExtrudeText: any[],
                   _ExturdeValue: string,_ExtrudeMin: number,_ExtrudeMax: number,_Scale: number,_Invert: boolean,
                   _HeightChart: boolean,_Filter: any[],_HideNum: number[],_indexArr: number[]) {
    this._PuData = {ColorDescr:_ColorDescr,ColorProperty:_ColorProperty,ColorText:_ColorText,
                    ColorKey:_ColorKey,ColorMin:_ColorMin,ColorMax:_ColorMax,ColorInvert:_ColorInvert,
                    ExtrudeDescr:_ExtrudeDescr,ExtrudeProperty:_ExtrudeProperty,ExtrudeText:_ExtrudeText,
                    ExtrudeKey:_ExturdeValue,ExtrudeMin:_ExtrudeMin,ExtrudeMax:_ExtrudeMax,
                    Scale:_Scale,Invert:_Invert,HeightChart:_HeightChart,Filter:_Filter,HideNum:_HideNum,indexArr:_indexArr};
  }

}
