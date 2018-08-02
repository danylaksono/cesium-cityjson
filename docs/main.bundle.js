webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "html,body {\r\n  font-family: 'Open Sans', sans-serif;\r\n  margin: 0px !important;\r\n  padding: 0px !important;\r\n  border: 0px !important;\r\n  outline:0px !important;\r\n  overflow: hidden;\r\n  font-size: 14px;\r\n}\r\n\r\n#loadfile{\r\n  position: absolute;\r\n  width: 300px; \r\n  left: calc(50% - 150px);\r\n  top: 15px;\r\n  z-index: 100;\r\n  font-family:sans-serif;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex; \r\n  -webkit-box-orient: horizontal; \r\n  -webkit-box-direction: normal; \r\n      -ms-flex-direction: row; \r\n          flex-direction: row; \r\n  -webkit-box-pack: justify; \r\n      -ms-flex-pack: justify; \r\n          justify-content: space-between;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 100%\">\r\n\t<div id=\"loadfile\">\r\n      <div class=\"version\" style=\"font-family:sans-serif;color:white;\">v0.0.14&nbsp;&nbsp;</div>\r\n      <input type=\"file\" id=\"files\" name=\"files[]\" style=\"font-family:sans-serif;color:white;\" (change)=\"handleFileSelect($event)\" />\r\n  </div>\r\n\t<mobius-cesium [data]=\"gs_dummy_data\" [mode]=\"'editor'\"></mobius-cesium>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mobius_cesium_data_data_service__ = __webpack_require__("./src/app/mobius-cesium/data/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.gs_dummy_data = undefined;
        // this.dataService.setGsModel(this.gs_dummy_data);
    }
    AppComponent.prototype.handleFileSelect = function (evt) {
        var files = evt.target.files; // FileList object
        var fr = new FileReader();
        var self = this;
        fr.onload = function (text) {
            var js_data = JSON.parse(text.target["result"]);
            self.gs_dummy_data = js_data;
            // self.dataService.setGsModel(self.gs_dummy_data);
        };
        fr.readAsText(files[0]);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "app-root",
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__mobius_cesium_data_data_service__["a" /* DataService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mobius_cesium_mobius_cesium_module__ = __webpack_require__("./src/app/mobius-cesium/mobius-cesium.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__mobius_cesium_mobius_cesium_module__["a" /* MobiusCesium */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/mobius-cesium/data/DataSubscriber.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataSubscriber; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("./src/app/mobius-cesium/data/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__genmodel_service__ = __webpack_require__("./src/app/mobius-cesium/data/genmodel.service.ts");


var DataSubscriber = /** @class */ (function () {
    function DataSubscriber(injector) {
        var _this = this;
        this.dataService = injector.get(__WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]);
        this._subscription = this.dataService.getMessage().subscribe(function (message) {
            _this._message = message;
            _this.notify(message.text);
        });
        this.genModelService = injector.get(__WEBPACK_IMPORTED_MODULE_1__genmodel_service__["a" /* GenModelService */]);
        this._subscription = this.genModelService.getMessage().subscribe(function (message) {
            _this._message = message;
            _this.notify(message.text);
        });
    }
    DataSubscriber.prototype.notify = function (message) {
        console.warn("Notify function not Implemented");
    };
    return DataSubscriber;
}());



/***/ }),

/***/ "./src/app/mobius-cesium/data/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DataService = /** @class */ (function () {
    function DataService() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    DataService.prototype.sendMessage = function (message) {
        this.subject.next({ text: message });
    };
    DataService.prototype.clearMessage = function () {
        this.subject.next();
    };
    DataService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    //get geojson
    DataService.prototype.getGsModel = function () {
        return this._jsonModel;
    };
    //set mode 
    DataService.prototype.setMode = function (mode) {
        this.mode = mode;
    };
    //set new json file
    DataService.prototype.setGsModel = function (model) {
        delete this._jsonModel;
        var json = this._jsonModel;
        this._jsonModel = model;
        if (this._jsonModel !== undefined) {
            this.clearAll();
        }
        this.sendMessage("model_update");
    };
    //before loading geojson, clear all for last geojson
    DataService.prototype.clearAll = function () {
        delete this.hideElementArr;
        delete this._HideNum;
        delete this._ViData;
        delete this._PuData;
        delete this._index;
        delete this._Filter;
    };
    //get viewer
    DataService.prototype.getViewer = function () {
        return this.viewer;
    };
    //set viewer
    DataService.prototype.setViewer = function (_viewer) {
        this.viewer = _viewer;
    };
    //get selected entity
    DataService.prototype.get_SelectedEntity = function () {
        return this._SelectedEntity;
    };
    //set selected entity
    DataService.prototype.set_SelectedEntity = function (_SelectedEntity) {
        this._SelectedEntity = _SelectedEntity;
    };
    //get promise
    DataService.prototype.getcesiumpromise = function () {
        return this.cesiumpromise;
    };
    //set promise
    DataService.prototype.setcesiumpromise = function (cesiumpromise) {
        delete this.cesiumpromise;
        this.cesiumpromise = cesiumpromise;
    };
    // get filter array
    DataService.prototype.gethideElementArr = function () {
        return this.hideElementArr;
    };
    //get filter number
    DataService.prototype.get_HideNum = function () {
        return this._HideNum;
    };
    //get mode
    DataService.prototype.getmode = function () {
        return this.mode;
    };
    //get index after changing select, data, display, publish
    DataService.prototype.get_index = function () {
        return this._index;
    };
    //set index after changing select, data, display, publish
    DataService.prototype.set_index = function (_index) {
        this._index = _index;
    };
    //set sun true/false in Display
    DataService.prototype.set_Sun = function (_Sun) {
        this._Sun = _Sun;
    };
    //get sun true/false in Display
    DataService.prototype.get_Sun = function () {
        return this._Sun;
    };
    //set shadow true/false in Display
    DataService.prototype.set_Shadow = function (_Shadow) {
        this._Shadow = _Shadow;
    };
    //get shadow true/false in Display
    DataService.prototype.get_Shadow = function () {
        return this._Shadow;
    };
    //set date in Display
    DataService.prototype.set_Date = function (_Date) {
        this._Date = _Date;
    };
    //get date in Display
    DataService.prototype.get_Date = function () {
        return this._Date;
    };
    //set UTC in Display
    DataService.prototype.set_UTC = function (_UTC) {
        this._UTC = _UTC;
    };
    //get UTC in Display
    DataService.prototype.get_UTC = function () {
        return this._UTC;
    };
    //set imagery in Display
    DataService.prototype.set_Imagery = function (_Imagery) {
        this._Imagery = _Imagery;
    };
    //get imagery in Display
    DataService.prototype.get_Imagery = function () {
        return this._Imagery;
    };
    //convert json to ViData(editor version) to store every thing in setting
    DataService.prototype.getValue = function (model) {
        if (model !== undefined) {
            var propertyName = Object.keys(model["features"][0].properties);
            var feature_instance_1 = model["features"][0];
            var _HeightKeys = propertyName.filter(function (prop_name) {
                var value = feature_instance_1.properties[prop_name];
                return (typeof (value) === "number");
            });
            if (model["features"].length > 1) {
                for (var i = 1; i < model["features"].length; i++) {
                    for (var _i = 0, _a = Object.keys(model["features"][i].properties); _i < _a.length; _i++) {
                        var properties = _a[_i];
                        if (propertyName.indexOf(String(properties)) < 0) {
                            propertyName.push(properties);
                            if (typeof (model["features"][i].properties[properties]) === "number") {
                                _HeightKeys.push(properties);
                            }
                        }
                    }
                }
            }
            propertyName.sort();
            propertyName.unshift("None");
            var propertyNames = propertyName.filter(function (value) {
                return value != 'TYPE' && value != 'COLOR' && value != 'HEIGHT' && value != 'EXTRUDEDHEIGHT';
            });
            var _ColorValue_1 = propertyNames[0];
            var _HeightKey = _HeightKeys.filter(function (value) {
                return value != 'TYPE' && value != 'COLOR' && value != 'HEIGHT' && value != 'EXTRUDEDHEIGHT';
            });
            _HeightKey.sort();
            _HeightKey.unshift("None");
            var _HeightValue_1 = _HeightKey[0];
            var promise = this.cesiumpromise;
            var _Heighttexts_1 = [];
            var _Colortexts_1 = [];
            var _indexArr_1 = [];
            var self_1 = this;
            promise.then(function (dataSource) {
                var entities = dataSource.entities.values;
                for (var _i = 0, entities_1 = entities; _i < entities_1.length; _i++) {
                    var entity = entities_1[_i];
                    if (entity.properties["TYPE"] === undefined || entity.properties["TYPE"]._value !== "STATIC") {
                        if (entity.properties[_HeightValue_1] !== undefined) {
                            if (entity.properties[_HeightValue_1]._value !== " ") {
                                if (_Heighttexts_1.length === 0) {
                                    _Heighttexts_1[0] = entity.properties[_HeightValue_1]._value;
                                }
                                else {
                                    if (_Heighttexts_1.indexOf(entity.properties[_HeightValue_1]._value) === -1) {
                                        _Heighttexts_1.push(entity.properties[_HeightValue_1]._value);
                                    }
                                }
                            }
                        }
                        if (entity.properties[_ColorValue_1] !== undefined) {
                            if (entity.properties[_ColorValue_1]._value !== " ") {
                                if (_Colortexts_1.length === 0) {
                                    _Colortexts_1[0] = entity.properties[_ColorValue_1]._value;
                                }
                                else {
                                    if (_Colortexts_1.indexOf(entity.properties[_ColorValue_1]._value) === -1) {
                                        _Colortexts_1.push(entity.properties[_ColorValue_1]._value);
                                    }
                                }
                            }
                        }
                        _indexArr_1.push(entities.indexOf(entity));
                    }
                    else {
                        entity.polygon.height = entity.properties["HEIGHT"];
                        entity.polygon.extrudedHeight = entity.properties["EXTRUDEDHEIGHT"];
                        var ColorValue = entity.properties["COLOR"]._value;
                        entity.polygon.material = Cesium.Color.fromBytes(ColorValue[0], ColorValue[1], ColorValue[2], ColorValue[3]);
                    }
                    if (entity.polygon !== undefined) {
                        entity.polygon.outlineColor = Cesium.Color.Black;
                    }
                    if (entity.billboard !== undefined) {
                        entity.billboard = undefined;
                        entity.point = new Cesium.PointGraphics({
                            color: Cesium.Color.BLUE,
                            pixelSize: 10,
                        });
                    }
                }
            });
            var _MinColor = Math.min.apply(Math, _Colortexts_1);
            var _MaxColor = Math.max.apply(Math, _Colortexts_1);
            var _MinHeight = Math.min.apply(Math, _Heighttexts_1);
            var _MaxHeight = Math.max.apply(Math, _Heighttexts_1);
            var _Filter = [];
            var _HideNum = [];
            this.getViData(propertyNames, _Colortexts_1.sort(), _ColorValue_1, _MinColor, _MaxColor, false, _HeightKey, _Heighttexts_1.sort(), _HeightValue_1, _MinHeight, _MaxHeight, 1, false, false, _Filter, _HideNum, _indexArr_1);
        }
    };
    //get ViData(editor version)
    DataService.prototype.get_ViData = function () {
        return this._ViData;
    };
    //set ViData(editor version)
    DataService.prototype.set_ViData = function (_ViData) {
        this._ViData = _ViData;
    };
    //convert geojson to PuData(publish version)
    DataService.prototype.LoadJSONData = function () {
        if (this._jsonModel !== undefined && this._jsonModel["cesium"] !== undefined) {
            var cesiumData = this._jsonModel["cesium"];
            var _ColorDescr = void 0;
            var _ColorValue_2;
            var _MinColor = void 0;
            var _MaxColor = void 0;
            var _ColorInvert = void 0;
            var _HeightDescr = void 0;
            var _HeightKey = [];
            var _HeightValue_2;
            var _MinHeight = void 0;
            var _MaxHeight = void 0;
            var _HeightInvert = void 0;
            var _HeightScale = void 0;
            var _HeightLine = void 0;
            var _filters = void 0;
            var _ceisumData = [];
            var _propertyNames = [];
            var _HideNum = [];
            var _indexArr_2 = [];
            if (cesiumData["colour"] !== undefined) {
                if (cesiumData["colour"]["descr"] !== undefined) {
                    _ColorDescr = cesiumData["colour"]["descr"];
                }
                if (cesiumData["colour"]["attribs"] !== undefined) {
                    for (var _i = 0, _a = cesiumData["colour"]["attribs"]; _i < _a.length; _i++) {
                        var data = _a[_i];
                        _propertyNames.push(data["name"]);
                    }
                    _ColorValue_2 = _propertyNames[0];
                    _MinColor = cesiumData["colour"]["attribs"][0]["min"];
                    _MaxColor = cesiumData["colour"]["attribs"][0]["max"];
                    if (cesiumData["colour"]["attribs"][0]["invert"] === true) {
                        _ColorInvert = true;
                    }
                    else {
                        _ColorInvert = false;
                    }
                }
            }
            if (cesiumData["extrude"] !== undefined) {
                if (cesiumData["extrude"]["descr"] !== undefined) {
                    _HeightDescr = cesiumData["extrude"]["descr"];
                }
                if (cesiumData["extrude"]["attribs"] !== undefined) {
                    for (var _b = 0, _c = cesiumData["extrude"]["attribs"]; _b < _c.length; _b++) {
                        var data = _c[_b];
                        _HeightKey.push(data["name"]);
                    }
                    _HeightValue_2 = _HeightKey[0];
                    _MinHeight = cesiumData["extrude"]["attribs"][0]["min"];
                    _MaxHeight = cesiumData["extrude"]["attribs"][0]["max"];
                    if (cesiumData["extrude"]["attribs"][0]["invert"] === true) {
                        _HeightInvert = true;
                    }
                    else {
                        _HeightInvert = false;
                    }
                    if (cesiumData["extrude"]["attribs"][0]["line"] === true) {
                        _HeightLine = true;
                    }
                    else {
                        _HeightLine = false;
                    }
                    if (cesiumData["extrude"]["attribs"][0]["scale"] !== undefined) {
                        _HeightScale = cesiumData["extrude"]["attribs"][0]["scale"];
                    }
                    else {
                        _HeightScale = 1;
                    }
                }
            }
            var promise = this.cesiumpromise;
            var _Heighttexts_2 = [];
            var _Colortexts_2 = [];
            var self_2 = this;
            promise.then(function (dataSource) {
                var entities = dataSource.entities.values;
                for (var _i = 0, entities_2 = entities; _i < entities_2.length; _i++) {
                    var entity = entities_2[_i];
                    if (entity.properties[_HeightValue_2] !== undefined) {
                        if (entity.properties[_HeightValue_2]._value !== " ") {
                            if (_Heighttexts_2.length === 0) {
                                _Heighttexts_2[0] = entity.properties[_HeightValue_2]._value;
                            }
                            else {
                                if (_Heighttexts_2.indexOf(entity.properties[_HeightValue_2]._value) === -1) {
                                    _Heighttexts_2.push(entity.properties[_HeightValue_2]._value);
                                }
                            }
                        }
                    }
                    if (entity.properties[_ColorValue_2] !== undefined) {
                        if (entity.properties[_ColorValue_2]._value !== " ") {
                            if (_Colortexts_2.length === 0) {
                                _Colortexts_2[0] = entity.properties[_ColorValue_2]._value;
                            }
                            else {
                                if (_Colortexts_2.indexOf(entity.properties[_ColorValue_2]._value) === -1) {
                                    _Colortexts_2.push(entity.properties[_ColorValue_2]._value);
                                }
                            }
                        }
                    }
                    if (entity.polygon !== undefined) {
                        entity.polygon.outlineColor = Cesium.Color.Black;
                    }
                    if (entity.billboard !== undefined) {
                        entity.billboard = undefined;
                        entity.point = new Cesium.PointGraphics({
                            color: Cesium.Color.BLUE,
                            pixelSize: 10,
                        });
                    }
                    _indexArr_2.push(entities.indexOf(entity));
                }
            });
            if (cesiumData["filters"] !== undefined) {
                _filters = cesiumData["filters"];
                var lastnumber = void 0;
                this._Filter = [];
                this._HideNum = [];
                if (_filters !== undefined && _filters.length !== 0) {
                    for (var _d = 0, _filters_1 = _filters; _d < _filters_1.length; _d++) {
                        var _filter = _filters_1[_d];
                        if (this._HideNum.length === 0) {
                            this._HideNum[0] = "0";
                            lastnumber = this._HideNum[0];
                        }
                        else {
                            for (var j = 0; j < this._HideNum.length + 1; j++) {
                                if (this._HideNum.indexOf(String(j)) === -1) {
                                    this._HideNum.push(String(j));
                                    lastnumber = String(j);
                                    break;
                                }
                            }
                        }
                        if (_filter["name"] !== undefined) {
                            var _propertyname = _filter["name"];
                            var _relation = Number(_filter["relation"]);
                            var _text = _filter["value"];
                            var _descr = _filter["descr"];
                            var _HideType = void 0;
                            var _texts = void 0;
                            if (typeof (_text) === "number") {
                                _HideType = "number";
                                _texts = this.Initial(_propertyname);
                            }
                            else if (typeof (_text) === "string") {
                                _HideType = "category";
                                _texts = this.Initial(_propertyname);
                                _texts = ["None"].concat(_texts);
                            }
                            this._Filter.push({ divid: String("addHide".concat(String(lastnumber))), id: lastnumber,
                                HeightHide: _propertyname, type: _HideType, Category: _texts,
                                CategaryHide: _text, descr: _descr, RelaHide: _relation,
                                textHide: _text, HideMax: Math.ceil(Math.max.apply(Math, _texts)),
                                HideMin: Math.floor(Math.min.apply(Math, _texts) * 100) / 100, Disabletext: null });
                        }
                    }
                }
            }
            else {
                this._Filter = [];
                this._HideNum = [];
            }
            this.getPuData(_ColorDescr, _propertyNames, _Colortexts_2.sort(), _ColorValue_2, _MinColor, _MaxColor, _ColorInvert, _HeightDescr, _HeightKey, _Heighttexts_2.sort(), _HeightValue_2, _MinHeight, _MaxHeight, _HeightScale, _HeightInvert, _HeightLine, this._Filter, this._HideNum, _indexArr_2);
        }
    };
    //get text for the certain property
    DataService.prototype.Initial = function (_HideValue) {
        var texts = [];
        var promise = this.getcesiumpromise();
        var self = this;
        promise.then(function (dataSource) {
            var entities = dataSource.entities.values;
            for (var _i = 0, entities_3 = entities; _i < entities_3.length; _i++) {
                var entity = entities_3[_i];
                if (entity.properties[_HideValue] !== undefined) {
                    if (entity.properties[_HideValue]._value !== " ") {
                        if (texts.length === 0) {
                            texts[0] = entity.properties[_HideValue]._value;
                        }
                        else {
                            if (texts.indexOf(entity.properties[_HideValue]._value) === -1) {
                                texts.push(entity.properties[_HideValue]._value);
                            }
                        }
                    }
                }
            }
        });
        return texts;
    };
    //get PuData
    DataService.prototype.get_PuData = function () {
        return this._PuData;
    };
    //set PuData
    DataService.prototype.set_PuData = function (_PuData) {
        this._PuData = _PuData;
    };
    //create object of ViData
    DataService.prototype.getViData = function (_ColorProperty, _ColorText, _ColorKey, _ColorMin, _ColorMax, _ColorInvert, _ExtrudeProperty, _ExtrudeText, _ExturdeValue, _ExtrudeMin, _ExtrudeMax, _Scale, _Invert, _HeightChart, _Filter, _HideNum, _indexArr) {
        this._ViData = { ColorProperty: _ColorProperty, ColorText: _ColorText, ColorKey: _ColorKey,
            ColorMin: _ColorMin, ColorMax: _ColorMax, ColorInvert: _ColorInvert,
            ExtrudeProperty: _ExtrudeProperty, ExtrudeText: _ExtrudeText, ExtrudeKey: _ExturdeValue,
            ExtrudeMin: _ExtrudeMin, ExtrudeMax: _ExtrudeMax, Scale: _Scale, Invert: _Invert,
            HeightChart: _HeightChart, Filter: _Filter, HideNum: _HideNum, indexArr: _indexArr };
    };
    //create object of PuData
    DataService.prototype.getPuData = function (_ColorDescr, _ColorProperty, _ColorText, _ColorKey, _ColorMin, _ColorMax, _ColorInvert, _ExtrudeDescr, _ExtrudeProperty, _ExtrudeText, _ExturdeValue, _ExtrudeMin, _ExtrudeMax, _Scale, _Invert, _HeightChart, _Filter, _HideNum, _indexArr) {
        this._PuData = { ColorDescr: _ColorDescr, ColorProperty: _ColorProperty, ColorText: _ColorText,
            ColorKey: _ColorKey, ColorMin: _ColorMin, ColorMax: _ColorMax, ColorInvert: _ColorInvert,
            ExtrudeDescr: _ExtrudeDescr, ExtrudeProperty: _ExtrudeProperty, ExtrudeText: _ExtrudeText,
            ExtrudeKey: _ExturdeValue, ExtrudeMin: _ExtrudeMin, ExtrudeMax: _ExtrudeMax,
            Scale: _Scale, Invert: _Invert, HeightChart: _HeightChart, Filter: _Filter, HideNum: _HideNum, indexArr: _indexArr };
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])()
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/mobius-cesium/data/genmodel.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenModelService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_proj4__ = __webpack_require__("./node_modules/proj4/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_earcut__ = __webpack_require__("./node_modules/earcut/src/earcut.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_earcut___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_earcut__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var GenModelService = /** @class */ (function () {
    function GenModelService() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    GenModelService.prototype.sendMessage = function (message) {
        this.subject.next({ text: message });
    };
    GenModelService.prototype.clearMessage = function () {
        this.subject.next();
    };
    GenModelService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    GenModelService.prototype.clearData = function () {
        this.file = undefined;
        this.epsg = undefined;
        this.vertices = undefined;
        this.materials = undefined;
        this.templates = undefined;
        this.template_vertices = undefined;
        this.scale = undefined;
        this.translate = undefined;
    };
    GenModelService.prototype.initialiseSrftypeIds = function () {
        this.srftype_ids = { RoofSurface: [],
            GroundSurface: [],
            WallSurface: [],
            ClosureSurface: [],
            OuterCeilingSurface: [],
            OuterFloorSurface: [],
            Window: [],
            Door: [],
            WaterSurface: [],
            WaterGroundSurface: [],
            WaterClosureSurface: [],
            TrafficArea: [],
            AuxiliaryTrafficArea: [],
            None: [] };
    };
    GenModelService.prototype.setSrftypeIds = function (type, id) {
        // console.log(this.srftype_ids,type,id);
        if (type === undefined) {
            this.srftype_ids["None"].push(id);
        }
        else {
            this.srftype_ids[type].push(id);
        }
    };
    GenModelService.prototype.getSrftypeIds = function () {
        return this.srftype_ids;
    };
    GenModelService.prototype.setEPSG = function (file) {
        if (file["metadata"]["crs"] === undefined || file["metadata"]["crs"]["epsg"] === undefined) {
            // if undefined, default is EPSG 3414 sweats (WGS84 causes our models to go crazy, with EPSG 3414 they at least show up)
            this.epsg = "+proj=tmerc +lat_0=1.366666666666667 +lon_0=103.8333333333333 +k=1 +x_0=28001.642 +y_0=38744.572 +ellps=WGS84 +units=m +no_defs";
        }
        else {
            // search EPSG.io (TO-DO)
            var url = "http://epsg.io/" + file["metadata"]["crs"]["epsg"] + ".proj4";
            var val_1 = "";
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    val_1 = this.responseText;
                }
            };
            xhttp.open("GET", url, false);
            xhttp.send();
            this.epsg = val_1;
            if (this.epsg === undefined) {
                this.epsg = "+proj=tmerc +lat_0=1.366666666666667 +lon_0=103.8333333333333 +k=1 +x_0=28001.642 +y_0=38744.572 +ellps=WGS84 +units=m +no_defs";
            }
        }
        // console.log(this.epsg);
    };
    GenModelService.prototype.setDataSource = function (dataSource) {
        this.dataSource = dataSource;
    };
    GenModelService.prototype.getDataSource = function () {
        return this.dataSource;
    };
    GenModelService.prototype.setVertices = function (file) {
        if (file["vertices"] !== undefined) {
            this.vertices = file["vertices"];
        }
    };
    GenModelService.prototype.setMaterials = function (file) {
        var materials = [];
        if (file["appearance"] === undefined || file["appearance"]["materials"] == undefined) {
            this.materials = undefined;
        }
        else {
            file["appearance"]["materials"].forEach(function (mat) {
                var color = mat["diffuseColor"];
                color.push(mat["transparency"]);
                materials.push(new ((_a = Cesium.Color).bind.apply(_a, [void 0].concat(color)))());
                var _a;
            });
            this.materials = materials;
        }
    };
    GenModelService.prototype.setTemplates = function (file) {
        // Pull out array of template boundaries and vertices
        if (file["geometry-templates"] === undefined) {
            this.templates = undefined;
        }
        else {
            var templates_1 = [];
            if (file["geometry-templates"]["templates"] !== undefined) {
                file["geometry-templates"]["templates"].forEach(function (temp) {
                    if (temp.lod < 3) {
                        templates_1.push(undefined);
                    }
                    else {
                        templates_1.push(temp.boundaries);
                    }
                });
            }
            if (file["geometry-templates"]["vertices-templates"] !== undefined) {
                this.template_vertices = file["geometry-templates"]["vertices-templates"];
            }
            this.templates = templates_1;
        }
    };
    GenModelService.prototype.setTransform = function (file) {
        if (file["transform"] !== undefined) {
            this.scale = file["transform"].scale;
            this.translate = file["transform"].translate;
        }
        else {
            this.scale = undefined;
            this.translate = undefined;
        }
        // console.log(this.scale);
    };
    GenModelService.prototype.projectPtsToWGS84 = function (coords) {
        // console.log(coords);
        var projcoords = Object(__WEBPACK_IMPORTED_MODULE_2_proj4__["a" /* default */])(this.epsg, "WGS84", [coords[0], coords[1]]);
        var newcoords = [projcoords[0], projcoords[1], coords[2]];
        return newcoords;
    };
    GenModelService.prototype.maxDiff = function (values) {
        var maxval = values[0];
        var minval = values[0];
        for (var i = 1; i < values.length; i++) {
            if (values[i] > maxval) {
                maxval = values[i];
            }
            if (values[i] < minval) {
                minval = values[i];
            }
        }
        return (maxval - minval);
    };
    GenModelService.prototype.determineAxis = function (points) {
        var _this = this;
        // split coords and determine plane
        var x = [];
        var y = [];
        points.forEach(function (index) {
            var coords = _this.vertices[index];
            x.push(coords[0]);
            y.push(coords[1]);
        });
        if (this.maxDiff(x) > this.maxDiff(y)) {
            // x axis seems to be wider, use xz axis
            return 0;
        }
        else {
            // y axis seems to be wider, use yz axis
            return 1;
        }
    };
    GenModelService.prototype.transformTemplate = function (coord, transform) {
        var pt = Cesium.Cartesian3.fromArray(coord);
        var t = Cesium.Matrix4.multiplyByPoint(transform.temp_matrix, pt, new Cesium.Cartesian3());
        var coord2 = [(t["x"] + transform.refpt[0]), (t["y"] + transform.refpt[1]), (t["z"] + transform.refpt[2])];
        // console.log(coord,transform,coord2);
        return coord2;
    };
    GenModelService.prototype.transformCityJSON = function (coord) {
        var pt = [undefined, undefined, undefined];
        pt[0] = (coord[0] * this.scale[0]) + this.translate[0];
        pt[1] = (coord[1] * this.scale[1]) + this.translate[1];
        pt[2] = (coord[2] * this.scale[2]) + this.translate[2];
        return pt;
    };
    GenModelService.prototype.triangulatePoly = function (boundaries, vertex_arr, transform, color) {
        var _this = this;
        var vertices = this.vertices;
        if (vertex_arr === 1) {
            vertices = this.template_vertices;
        }
        // parent entity to contain triangulated polygons
        var temp_parent = this.dataSource.entities.add(new Cesium.Entity());
        if (typeof (boundaries[0][0]) !== "number") {
            boundaries = boundaries[0];
        }
        // determine axis
        var axis = this.determineAxis(boundaries[0]);
        var other_axis = 0;
        if (axis === 0) {
            other_axis = 1;
        }
        // get points and put into earcut format
        var poly_vertices = [];
        var holes = [];
        var other_coords = [];
        var count = 0;
        for (var i = 0; i < boundaries.length; i++) {
            boundaries[i].forEach(function (index) {
                var coords = vertices[index];
                // console.log(coords);
                poly_vertices.push(coords[axis], coords[2]);
                other_coords.push(coords[other_axis]);
                count++;
            });
            if (i !== (boundaries.length - 1)) {
                holes.push(count);
            }
        }
        // console.log(poly_vertices,holes);
        // throw into earcut
        var tri_index = __WEBPACK_IMPORTED_MODULE_3_earcut__(poly_vertices, holes);
        var _loop_1 = function (p) {
            var points = [];
            //get coordinates for each point
            [tri_index[p], tri_index[p + 1], tri_index[p + 2]].forEach(function (j) {
                var coord = [undefined, undefined, undefined];
                coord[other_axis] = other_coords[j];
                coord[axis] = poly_vertices[j * 2];
                coord[2] = poly_vertices[(j * 2) + 1];
                // console.log(coord);
                // if object is a geometry instance, multiply by transformation matrix and add reference point
                if (transform.refpt !== undefined) {
                    coord = _this.transformTemplate(coord, transform);
                }
                // transform coordinates if transform specification exists in file
                if (_this.scale !== undefined) {
                    coord = _this.transformCityJSON(coord);
                    // console.log(coord);
                }
                // project to wgs84
                coord = _this.projectPtsToWGS84(coord);
                // console.log(coord);
                points.push.apply(points, coord);
            });
            // console.log(points);
            // create and add polygon
            var poly = this_1.dataSource.entities.add({
                parent: temp_parent,
                // name : name,
                polygon: {
                    hierarchy: new Cesium.PolygonHierarchy(Cesium.Cartesian3.fromDegreesArrayHeights(points)),
                    perPositionHeight: true,
                    material: color,
                    outline: false,
                },
            });
            // console.log(poly);
        };
        var this_1 = this;
        // console.log(tri_index);
        // convert to cesium format
        for (var p = 0; p < tri_index.length; p = p + 3) {
            _loop_1(p);
        }
        return temp_parent;
    };
    GenModelService.prototype.cesiumPoly = function (boundaries, vertex_arr, transform, colour) {
        var _this = this;
        var vertices = this.vertices;
        if (vertex_arr === 1) {
            vertices = this.template_vertices;
        }
        var temp_parent = this.dataSource.entities.add(new Cesium.Entity());
        var extRing = boundaries[0];
        var extRing_points = [];
        extRing.forEach(function (pt_index) {
            var coord = vertices[pt_index];
            // if object is a geometry instance, multiply by transformation matrix and add reference point
            if (transform.refpt !== undefined) {
                coord = _this.transformTemplate(coord, transform);
            }
            // transform coordinates if transform specification exists in file
            if (_this.scale !== undefined) {
                coord = _this.transformCityJSON(coord);
            }
            // project to wgs84
            var pt3 = _this.projectPtsToWGS84(coord);
            // console.log (coord,pt3)
            extRing_points.push.apply(extRing_points, pt3);
        });
        // console.log(extRing_points);
        var ext_cartesian3 = Cesium.Cartesian3.fromDegreesArrayHeights(extRing_points);
        var p_hierarchy = new Cesium.PolygonHierarchy(ext_cartesian3);
        // If boundaries contain inner rings for holes, create p_hierarchy with holes
        var int_cartesian3 = [];
        if (boundaries.length > 0) {
            var _loop_2 = function (ring_index) {
                var temp_pts = [];
                boundaries[ring_index].forEach(function (pt_index) {
                    var coord = vertices[pt_index];
                    // if object is a geometry instance, multiply by transformation matrix and add reference point
                    if (transform.refpt !== undefined) {
                        coord = _this.transformTemplate(coord, transform);
                    }
                    // transform coordinates if transform specification exists in file
                    if (_this.scale !== undefined) {
                        coord = _this.transformCityJSON(coord);
                    }
                    // project to wgs84
                    var pt3 = _this.projectPtsToWGS84(coord);
                    temp_pts.push.apply(temp_pts, pt3);
                });
                // console.log(temp_pts);
                int_cartesian3.push(new Cesium.PolygonHierarchy(Cesium.Cartesian3.fromDegreesArrayHeights(temp_pts)));
            };
            // Create p_hierarchy for each hole and push to int_cartesian3
            for (var ring_index = 1; ring_index < boundaries.length; ring_index++) {
                _loop_2(ring_index);
            }
            // Create p_hierarchy with holes (as array of p_hierarchies)
            p_hierarchy = new Cesium.PolygonHierarchy(ext_cartesian3, int_cartesian3);
        }
        // console.log(p_hierarchy);
        // Create polygon
        var poly = this.dataSource.entities.add({
            parent: temp_parent,
            // name : city_object_keys[obj_index],
            polygon: {
                hierarchy: p_hierarchy,
                perPositionHeight: true,
                material: colour,
                outline: false,
            },
        });
        // console.log(poly);
        return temp_parent;
    };
    GenModelService.prototype.genCityJSONGeom = function (file) {
        var _this = this;
        // Initialise dataSource and surface type ID arrays
        this.setDataSource(new Cesium.CustomDataSource());
        this.initialiseSrftypeIds();
        var dataSource = this.dataSource;
        if (file !== undefined) {
            this.setEPSG(file);
            this.setVertices(file);
            this.setMaterials(file);
            this.setTemplates(file);
            this.setTransform(file);
            // Loop through CityObjects
            var city_object_keys = Object.keys(file["CityObjects"]);
            var _loop_3 = function (obj_index) {
                var obj = file["CityObjects"][city_object_keys[obj_index]];
                // console.log(city_object_keys[obj_index]);
                // Get object type (21 types)
                var cityobj_type = obj.type;
                if (cityobj_type === "BuildingPart") {
                    return "continue";
                }
                // Get object attributes
                var cityobj_attrib = obj.attributes;
                // if (cityobj_attrib === undefined) {
                //   continue;
                // }
                // console.log(cityobj_attrib);
                // console.log(Object.keys(cityobj_attrib))
                // Get object parts (TODO: Installations)
                var cityobj_parts_ID = obj.Parts;
                // console.log(cityobj_parts_ID);
                var cityobj_parts_geom = [];
                var cityobj_parts_attrib = [];
                var cityobj_parts_type = [];
                if (cityobj_parts_ID !== undefined) {
                    cityobj_parts_ID.forEach(function (ID) {
                        cityobj_parts_geom.push.apply(cityobj_parts_geom, file["CityObjects"][ID].geometry);
                        cityobj_parts_attrib.push(file["CityObjects"][ID].attributes);
                        cityobj_parts_type.push(file["CityObjects"][ID].type);
                    });
                }
                // console.log(obj.geometry);
                var all_geom = obj.geometry.concat(cityobj_parts_geom);
                // console.log(all_geom);
                var parts_start = obj.geometry.length;
                var parts_index = 0;
                // Loop through geometry (typically used for different LOD but not necessarily, may contain multiple)
                for (var geom_index = 0; geom_index < all_geom.length; geom_index++) {
                    var geom = all_geom[geom_index];
                    // console.log(geom);
                    if (geom == undefined) {
                        continue;
                    }
                    // Check LOD
                    var lod = geom.lod;
                    // if (lod !== undefined && lod < 3) {
                    //   continue;
                    // }
                    // Set values to use for polygon generation
                    // poly_vertices: array of vertices in the file to refer to (0 for vertices or 1 for template_vertices)
                    // boundaries: array of vertex position indexes to refer to (boundaries from geometry or template)
                    // transfrom: object containing transformation matrix (temp_matrix) and reference point (refpt) of the geometry instance
                    var vertex_arr = 0;
                    var boundaries = geom.boundaries;
                    var transform = { temp_matrix: undefined, refpt: undefined };
                    // Check geometry type
                    var geom_type = geom.type;
                    if (geom_type === "GeometryInstance") {
                        // console.log("GeometryInstance")
                        vertex_arr = 1;
                        boundaries = this_2.templates[geom.template];
                        transform.temp_matrix = Cesium.Matrix4.fromArray(geom.transformationMatrix);
                        transform.refpt = this_2.vertices[geom.boundaries[0]];
                    }
                    if (boundaries === undefined) {
                        continue;
                    }
                    // Pull out array of semantics values & surfaces
                    var values = void 0;
                    var surfaces = void 0;
                    if (geom["semantics"] !== undefined) {
                        values = geom["semantics"]["values"];
                        surfaces = geom["semantics"]["surfaces"];
                    }
                    // Pull out materials values
                    var mats = void 0;
                    if (geom["material"] !== undefined) {
                        mats = geom["material"][""]["values"];
                    }
                    var _loop_4 = function (srf_index) {
                        if (boundaries[srf_index][0] === undefined) {
                            return "continue";
                        }
                        // Extract surface type
                        var surface_type = "None";
                        if (values !== undefined && surfaces[values[srf_index]] !== undefined) {
                            surface_type = surfaces[values[srf_index]]["type"];
                        }
                        // Extract materials
                        var colour = Cesium.Color.WHITE;
                        if (mats !== undefined && mats[srf_index] !== null) {
                            colour = this_2.materials[mats[srf_index]];
                        }
                        else if (surface_type === "WallSurface") {
                            colour = Cesium.Color.SILVER;
                        }
                        else if (surface_type === "RoofSurface") {
                            colour = Cesium.Color.RED;
                        }
                        else if (surface_type === "Window") {
                            colour = Cesium.Color.LIGHTBLUE.withAlpha(0.5);
                        }
                        else if (surface_type === "Door") {
                            colour = Cesium.Color.TAN;
                        }
                        else if (obj.type === "SolitaryVegetationObject" || obj.type === "PlantCover") {
                            colour = Cesium.Color.YELLOWGREEN;
                        }
                        // Create property bag (with parent information if obj is building part)
                        // (TO-DO: building installation)
                        var props = { Object_ID: city_object_keys[obj_index],
                            Object_Type: cityobj_type,
                            Geom_Type: geom_type,
                            Surface_Type: surface_type,
                            LOD: lod,
                            Color: colour,
                            Parent_ID: "None",
                            Parent_Type: "None"
                        };
                        if (geom_index >= parts_start) {
                            props.Object_ID = cityobj_parts_ID[parts_index];
                            props.Object_Type = cityobj_parts_type[parts_index];
                            props.Parent_ID = city_object_keys[obj_index];
                            props.Parent_Type = cityobj_type;
                        }
                        // Add attributes from parent to properties
                        if (cityobj_attrib !== undefined) {
                            Object.keys(cityobj_attrib).forEach(function (name) {
                                props[name] = cityobj_attrib[name];
                            });
                        }
                        // console.log(props);
                        // Add attributes from parent to properties
                        if (cityobj_parts_attrib[parts_index] !== undefined) {
                            Object.keys(cityobj_parts_attrib[parts_index]).forEach(function (name) {
                                props[name] = cityobj_parts_attrib[parts_index][name];
                            });
                            // console.log(props);
                        }
                        var property_bag = new Cesium.PropertyBag(props);
                        // Check horizontal or not
                        var z = [];
                        var arr = boundaries[srf_index][0];
                        if (typeof (arr[0]) !== "number") {
                            arr = boundaries[0][srf_index][0];
                        }
                        if (vertex_arr === 0) {
                            arr.forEach(function (coords) {
                                // console.log(this.vertices[coords])
                                z.push(_this.vertices[coords][2]);
                            });
                        }
                        else {
                            arr.forEach(function (coords) {
                                z.push(_this.template_vertices[coords][2]);
                            });
                        }
                        if (this_2.maxDiff(z) < 0.01) {
                            // // horizontal, use Cesium's stuff
                            // console.log("Horizontal")
                            var poly = this_2.cesiumPoly(boundaries[srf_index], vertex_arr, transform, colour);
                            poly.properties = property_bag;
                            // poly.show = false;
                            this_2.setSrftypeIds(surface_type, poly.id);
                        }
                        else {
                            var poly = this_2.triangulatePoly(boundaries[srf_index], vertex_arr, transform, colour);
                            poly.properties = property_bag;
                            // poly.show = false;
                            this_2.setSrftypeIds(surface_type, poly.id);
                        }
                    };
                    // // Loop through surfaces
                    for (var srf_index = 0; srf_index < boundaries.length; srf_index++) {
                        _loop_4(srf_index);
                    }
                }
                if (parts_index >= parts_start) {
                    parts_index++;
                }
            };
            var this_2 = this;
            // for (let obj_index = 1 ; obj_index < 2 ; obj_index ++) {
            for (var obj_index = 0; obj_index < city_object_keys.length; obj_index++) {
                _loop_3(obj_index);
            }
        }
        // console.log (this.srftype_ids);
        this.clearData();
        return dataSource;
    };
    GenModelService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])()
    ], GenModelService);
    return GenModelService;
}());



/***/ }),

/***/ "./src/app/mobius-cesium/mobius-cesium.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"mobiuscesium\" style=\"height: 100%\">\r\n\t<cesium-viewer></cesium-viewer>\r\n\t<div id=\"Toggle\" (click)=\"toggleSlider()\" ><span style=\"vertical-align: middle;\">▹</span></div>\r\n\t<div id=\"slide-nav\"  [@slide_in_out]=\"slider_state\" style=\"position: absolute;z-index: 101;top:0px;height: 100%\">\r\n  \t\t<app-setting ></app-setting>\r\n\t</div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/mobius-cesium/mobius-cesium.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\");\n@font-face {\n  font-family: \"FontAwesome\"; }\n.font-awesome-hand {\n  font-family: FontAwesome; }\n.font-awesome-hand::after {\n  font-family: FontAwesome; }\n#mobiuscesium {\n  height: 101%;\n  font-family: sans-serif !important;\n  margin: 0px !important;\n  padding: 0px !important;\n  font-size: 14px; }\n#button {\n  position: absolute;\n  z-index: 99; }\n#Toggle {\n  position: absolute;\n  top: calc(50% - 30px);\n  z-index: 200;\n  width: 30px;\n  height: 70px;\n  border-top: 1px solid gray;\n  border-right: 1px solid gray;\n  border-bottom: 1px solid gray;\n  background-color: rgba(20, 20, 20, 0.5);\n  color: #ddd;\n  text-align: center;\n  font-size: 32px;\n  line-height: 70px;\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/mobius-cesium/mobius-cesium.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobiuscesiumComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_data_service__ = __webpack_require__("./src/app/mobius-cesium/data/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MobiuscesiumComponent = /** @class */ (function () {
    function MobiuscesiumComponent(dataService) {
        this.dataService = dataService;
        //create slider to switch setting
        this.slider_state = "slide_out";
    }
    ;
    //pass data to dataService
    MobiuscesiumComponent.prototype.setModel = function (data) {
        try {
            this.dataService.setGsModel(data);
        }
        catch (ex) {
            this.data = undefined;
        }
    };
    //pass data to dataService
    MobiuscesiumComponent.prototype.ngOnInit = function () {
        this.setModel(this.data);
        this.dataService.setMode(this.mode);
        // console.log(this.data);
    };
    MobiuscesiumComponent.prototype.ngDoCheck = function () {
        if (this.dataService.getGsModel() !== this.data) {
            this.setModel(this.data);
            // console.log("data changed");
            // console.log("mode:", this.mode);
        }
    };
    MobiuscesiumComponent.prototype.toggleSlider = function () {
        // do something to change the animation_state variable
        this.slider_state = this.slider_state === "slide_out" ? "slide_in" : "slide_out";
        var toggle = document.getElementById("Toggle");
        if (this.slider_state === "slide_out") {
            toggle.style.left = "0px";
            toggle.innerHTML = "▹";
        }
        else if (this.slider_state === "slide_in") {
            toggle.style.left = "280px";
            toggle.innerHTML = "◃";
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Object)
    ], MobiuscesiumComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", String)
    ], MobiuscesiumComponent.prototype, "mode", void 0);
    MobiuscesiumComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "mobius-cesium",
            template: __webpack_require__("./src/app/mobius-cesium/mobius-cesium.component.html"),
            styles: [__webpack_require__("./src/app/mobius-cesium/mobius-cesium.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])("slide_in_out", [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])("slide_in", Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        width: "280px",
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])("slide_out", Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        width: "0px"
                        // css styles when the element is in slide_out
                    })),
                    // animation effect when transitioning from one state to another
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])("slide_in <=> slide_out", Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(300))
                ]),
            ],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_data_service__["a" /* DataService */]])
    ], MobiuscesiumComponent);
    return MobiuscesiumComponent;
}());



/***/ }),

/***/ "./src/app/mobius-cesium/mobius-cesium.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobiusCesium; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mobius_cesium_component__ = __webpack_require__("./src/app/mobius-cesium/mobius-cesium.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viewer_viewer_component__ = __webpack_require__("./src/app/mobius-cesium/viewer/viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_data_service__ = __webpack_require__("./src/app/mobius-cesium/data/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_genmodel_service__ = __webpack_require__("./src/app/mobius-cesium/data/genmodel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_split__ = __webpack_require__("./node_modules/angular-split/esm5/angular-split.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_tabs__ = __webpack_require__("./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_tooltip__ = __webpack_require__("./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_slider__ = __webpack_require__("./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__setting_setting_component__ = __webpack_require__("./src/app/mobius-cesium/setting/setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__setting_visualise_component__ = __webpack_require__("./src/app/mobius-cesium/setting/visualise.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__setting_attributes_copmponent__ = __webpack_require__("./src/app/mobius-cesium/setting/attributes.copmponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__setting_publish_component__ = __webpack_require__("./src/app/mobius-cesium/setting/publish.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__setting_display_copmponent__ = __webpack_require__("./src/app/mobius-cesium/setting/display.copmponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__setting_cityjson_component__ = __webpack_require__("./src/app/mobius-cesium/setting/cityjson.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var MobiusCesium = /** @class */ (function () {
    function MobiusCesium() {
    }
    MobiusCesium_1 = MobiusCesium;
    MobiusCesium.forRoot = function () {
        return {
            ngModule: MobiusCesium_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__data_data_service__["a" /* DataService */],
            ],
        };
    };
    MobiusCesium = MobiusCesium_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular_split__["a" /* AngularSplitModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_tooltip__["a" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_slider__["a" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["a" /* FormsModule */],
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__mobius_cesium_component__["a" /* MobiuscesiumComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__mobius_cesium_component__["a" /* MobiuscesiumComponent */],
                __WEBPACK_IMPORTED_MODULE_3__viewer_viewer_component__["a" /* ViewerComponent */],
                __WEBPACK_IMPORTED_MODULE_13__setting_setting_component__["a" /* SettingComponent */],
                __WEBPACK_IMPORTED_MODULE_14__setting_visualise_component__["a" /* DataComponent */],
                __WEBPACK_IMPORTED_MODULE_15__setting_attributes_copmponent__["a" /* SelectComponent */],
                __WEBPACK_IMPORTED_MODULE_16__setting_publish_component__["a" /* PublishComponent */],
                __WEBPACK_IMPORTED_MODULE_17__setting_display_copmponent__["a" /* DisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_18__setting_cityjson_component__["a" /* CityJSONComponent */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__data_data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_5__data_genmodel_service__["a" /* GenModelService */],
            ],
        })
    ], MobiusCesium);
    return MobiusCesium;
    var MobiusCesium_1;
}());



/***/ }),

/***/ "./src/app/mobius-cesium/setting/attributes.component.css":
/***/ (function(module, exports) {

module.exports = "/deep/.mat-tab-label, /deep/.mat-tab-label-active{\r\n  min-width: 60px!important;\r\n  padding: 3px!important;\r\n  margin: 3px!important;\r\n  color:#D3D3D3 !important;\r\n  background-color: transparent !important;\r\n}\r\n/deep/.mat-tab-label{\r\n  height: 30px !important;\r\n  width: 60px !important;\r\n  background-color: transparent !important;\r\n}\r\n/deep/.mat-tab-labels{\r\n  background-color: rgba(20,20,20,0.9) !important;\r\n}\r\n/deep/.mat-tab-header{\r\n  width: 700px !important;\r\n}\r\n/deep/.mat-tab-header-pagination-controls-enabled{\r\n  display: none !important;\r\n}\r\n/deep/.mat-ink-bar{\r\n  background-color: #395d73 !important;\r\n}\r\n/deep/.mat-tab{\r\n  min-width: 30px !important;\r\n}\r\n/deep/.mat-tab-body-content{\r\n  overflow: hidden !important;\r\n}\r\n/deep/.mat-header{\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  margin-left: 0px;\r\n  color:#395d73;\r\n  border: 0;\r\n  height: 20px;\r\n  background-color: rgba(20,20,20,0.9) !important;\r\n}\r\n/deep/.mat-tab-body-wrapper{\r\n  height:100% !important;\r\n\r\n}\r\n/deep/split-gutter{\r\n  background-color:rgb(138, 168, 192) !important;\r\n}\r\n/deep/.mat-accent .mat-slider-thumb {\r\n    background-color: #8AA8C0 !important;\r\n    cursor: -webkit-grab;\r\n}\r\n/deep/.mat-slider-thumb{\r\n  width: 5px !important;\r\n  right: -5px !important;\r\n}\r\n/deep/.mat-slider-track-fill{\r\n  background-color: #F0BFA0 !important;\r\n}\r\n/deep/.mat-slider-thumb-label-text {\r\n    color: #395d73 !important;\r\n    font-size: 12px !important;\r\n}\r\n/deep/.mat-slider-thumb-label{\r\n    height: 15px !important;\r\n    width: 15px !important;\r\n    top: -20px !important;\r\n    right: -7px !important;\r\n    background-color: white !important;\r\n    border: 1px solid #395d73 !important;\r\n}\r\n/deep/.mat-slider-track-background{\r\n  background-color: #D3D3D3 !important;\r\n}\r\n.mat-slider{\r\n    width: 150px !important;\r\n}\r\n.cesium-button {\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid #8AA8C0;\r\n  color: #D3D3D3;\r\n  fill: #8AA8C0;\r\n  border-radius: 0px;\r\n  padding: 3px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 80px;\r\n  font-family:sans-serif !important;\r\n  background: transparent;\r\n}\r\n.cesium-button-select{\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid #8AA8C0;\r\n  fill: #8AA8C0;\r\n  border-radius: 0px;\r\n  padding: 3px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 80px;\r\n  font-family:sans-serif !important;\r\n  color: #D3D3D3;\r\n  background: transparent;\r\n}\r\n.cesium-option{\r\n  background-color: #F1F1F1;\r\n  /*opacity: 0.8;*/\r\n  color: #8AA8C0;\r\n  border: 1px solid #8AA8C0;\r\n}\r\nhr {\r\n  display: block;\r\n  height: 1px;\r\n  border: 0;\r\n  border-top: 1px solid #D3D3D3 !important;\r\n  padding: 0; \r\n  color:#D3D3D3 !important;\r\n  width: 100%;\r\n  background-color: #D3D3D3 !important;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/mobius-cesium/setting/attributes.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"AttribsView\"  style=\"background-color: rgba(20,20,20,0.9);height: 100%;overflow-y:overlay;\"  >\r\n\t<table border=\"1\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\">\r\n\t  <tr >\r\n\t    <th style=\"font-size: 10px;font-weight: normal;width: 135px;\"><div style=\"width: 135px;height:16px;background: #395D73;color:white;white-space: nowrap;display:block;overflow: hidden !important;text-overflow: ellipsis !important;cursor:pointer;\">ID</div></th>\r\n\t    <th style=\"font-size: 10px;font-weight: normal;width: 135px\"><div matTooltip={{ID}} style=\"width: 135px;height:16px;background: #395D73;color:white;white-space: nowrap;display:block;overflow: hidden !important;text-overflow: ellipsis !important;cursor:pointer;\">{{ID}}</div></th>\r\n\t  </tr>\r\n\t</table>\r\n\t<table border=\"1\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\">\r\n\t  <tr *ngFor=\"let Property of _Properties\">\r\n\t    <th style=\"font-size: 10px;font-weight: normal;color:#D3D3D3 ;width: 135px;height: 14px\"><div matTooltip={{Property.Name}} style=\"width: 135px;height:14px;text-align: left;white-space: nowrap;display:block;overflow: hidden !important;text-overflow: ellipsis !important;cursor:pointer;\">{{Property.Name}}</div></th>\r\n\t    <th style=\"font-size: 10px;font-weight: normal;color:#D3D3D3 ;width: 135px;height: 14px\"><div matTooltip={{Property.Value}} style=\"width: 135px;height:14px;text-align: left;white-space: nowrap;display:block;overflow: hidden !important;text-overflow: ellipsis !important;cursor:pointer;\">{{Property.Value}}</div></th>\r\n\t  </tr>\r\n\t</table>\r\n</div>\r\n  "

/***/ }),

/***/ "./src/app/mobius-cesium/setting/attributes.copmponent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__ = __webpack_require__("./src/app/mobius-cesium/data/DataSubscriber.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectComponent = /** @class */ (function (_super) {
    __extends(SelectComponent, _super);
    function SelectComponent(injector, myElement) {
        return _super.call(this, injector) || this;
    }
    SelectComponent.prototype.ngOnInit = function () {
        this.data = this.dataService.getGsModel();
        this.mode = this.dataService.getmode();
        this.viewer = this.dataService.getViewer();
        this.dataArr = this.dataService.get_ViData();
    };
    SelectComponent.prototype.notify = function (message) {
        if (message === "model_update") {
            this.data = this.dataService.getGsModel();
            this.mode = this.dataService.getmode();
            this.dataArr = this.dataService.get_ViData();
        }
    };
    //check whether ID is changed or not and show in  Select tab
    SelectComponent.prototype.ngDoCheck = function () {
        if (this.viewer !== undefined && this.dataService.get_SelectedEntity() !== undefined && this.mode === "editor") {
            var selected = this.dataService.get_SelectedEntity();
            if (this.ID !== selected._id) {
                var _Property = void 0;
                this.ID = selected._id;
                this._Properties = [];
                var prop_names = selected.properties.propertyNames;
                for (var _i = 0, prop_names_1 = prop_names; _i < prop_names_1.length; _i++) {
                    var name_1 = prop_names_1[_i];
                    if (name_1 !== "None") {
                        _Property = [];
                        _Property.Name = name_1;
                        _Property.Value = selected.properties[name_1]._value;
                        // _Property.Name = _ColorPro;
                        // if(this.dataService.get_SelectedEntity().properties[_Property.Name]!==undefined){
                        //   _Property.Value = this.dataService.get_SelectedEntity().properties[_Property.Name]._value;
                        // }else {_Property.Value = ' ';}
                        this._Properties.push(_Property);
                    }
                }
            }
        }
        else if (this.viewer !== undefined && this.dataService.get_SelectedEntity() === undefined) {
            this.ID = undefined;
            this._Properties = [];
        }
    };
    SelectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "app-select",
            template: __webpack_require__("./src/app/mobius-cesium/setting/attributes.component.html"),
            styles: [__webpack_require__("./src/app/mobius-cesium/setting/attributes.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], SelectComponent);
    return SelectComponent;
}(__WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__["a" /* DataSubscriber */]));



/***/ }),

/***/ "./src/app/mobius-cesium/setting/cityjson.component.css":
/***/ (function(module, exports) {

module.exports = "#CityJSONView{\r\n  position: relative;\r\n  padding:0px;\r\n  height: 100%;\r\n  width: 100%;\r\n  color:#D3D3D3 !important;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  font-size: 14px !important;\r\n  line-height: 14px;\r\n  overflow-x: hidden !important;\r\n  background-color: rgba(20,20,20,0.9);\r\n  overflow-y:overlay;\r\n}\r\n/deep/.mat-tab-label, /deep/.mat-tab-label-active{\r\n  min-width: 60px!important;\r\n  padding: 3px!important;\r\n  margin: 3px!important;\r\n  color:#D3D3D3 !important;\r\n  background-color: transparent !important;\r\n}\r\n/deep/.mat-tab-label{\r\n  height: 30px !important;\r\n  width: 60px !important;\r\n  background-color: transparent !important;\r\n}\r\n/deep/.mat-tab-labels{\r\n  background-color: rgba(20,20,20,0.9) !important;\r\n}\r\n/deep/.mat-tab-header{\r\n  width: 700px !important;\r\n}\r\n/deep/.mat-tab-header-pagination-controls-enabled{\r\n  display: none !important;\r\n}\r\n/deep/.mat-ink-bar{\r\n  background-color: #395d73 !important;\r\n}\r\n/deep/.mat-tab{\r\n  min-width: 30px !important;\r\n}\r\n/deep/.mat-tab-body-content{\r\n  overflow: hidden !important;\r\n}\r\n/deep/.mat-header{\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  margin-left: 0px;\r\n  color:#395d73;\r\n  border: 0;\r\n  height: 20px;\r\n  background-color: rgba(20,20,20,0.9) !important;\r\n}\r\n/deep/.mat-tab-body-wrapper{\r\n  height:100% !important;\r\n\r\n}\r\n/deep/split-gutter{\r\n  background-color:rgb(138, 168, 192) !important;\r\n}\r\n/deep/.mat-accent .mat-slider-thumb {\r\n    background-color: #8AA8C0 !important;\r\n    cursor: -webkit-grab;\r\n}\r\n/deep/.mat-slider-thumb{\r\n  width: 5px !important;\r\n  right: -5px !important;\r\n}\r\n/deep/.mat-slider-track-fill{\r\n  background-color: #F0BFA0 !important;\r\n}\r\n/deep/.mat-slider-thumb-label-text {\r\n    color: #8AA8C0 !important;\r\n    font-size: 12px !important;\r\n}\r\n/deep/.mat-slider-thumb-label{\r\n    height: 15px !important;\r\n    width: 15px !important;\r\n    top: -20px !important;\r\n    right: -7px !important;\r\n    background-color: white !important;\r\n    border: 1px solid #8AA8C0 !important;\r\n}\r\n/deep/.mat-slider-track-background{\r\n  background-color: #D3D3D3 !important;\r\n}\r\n.mat-slider{\r\n    width: 150px !important;\r\n}\r\n.cesium-button {\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid #8AA8C0;\r\n  color: #D3D3D3;\r\n  fill: #8AA8C0;\r\n  border-radius: 0px;\r\n  padding: 3px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 80px;\r\n  font-family:sans-serif !important;\r\n  background: transparent;\r\n}\r\n.cesium-button-select{\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid #8AA8C0;\r\n  fill: #8AA8C0;\r\n  border-radius: 0px;\r\n  padding: 3px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 80px;\r\n  font-family:sans-serif !important;\r\n  color: #D3D3D3;\r\n  background: transparent;\r\n}\r\n.cesium-option{\r\n  background-color: #F1F1F1;\r\n  /*opacity: 0.8;*/\r\n  color: #8AA8C0;\r\n  border: 1px solid #8AA8C0;\r\n}\r\nhr {\r\n  display: block;\r\n  height: 1px;\r\n  border: 0;\r\n  border-top: 1px solid #D3D3D3 !important;\r\n  padding: 0; \r\n  color:#D3D3D3 !important;\r\n  width: 100%;\r\n  background-color: #8AA8C0 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/mobius-cesium/setting/cityjson.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"CityJSONView\" >\r\n  <div class=\"srftype-container\" style=\"margin-top:5px;\">\r\n    Show geometry with surface property:\r\n    <div *ngFor=\"let item of srftype_keys;\" id={{item}}>\r\n  <table>\r\n    <tr ><th style=\"width:85px;height: 22px;\"><div style=\"width:85px;color:#D3D3D3 !important;text-align: left;vertical-align: middle;font-weight: normal;\">{{item}}</div></th>\r\n    <th style=\"width:40px;height: 22px;\"><div style=\"width:40px;height: 22px;\">\r\n      </div></th>\r\n    <th style=\"width:20px;height: 25px;\" id={{item}}><input type=\"checkbox\" id={{item}}_check checked=\"checked\" (click)=\"Show(item)\" tyle=\"width:20px;height: 25px;cursor:pointer;\"></th></tr>\r\n  </table>\r\n    </div>\r\n  </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/mobius-cesium/setting/cityjson.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityJSONComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__ = __webpack_require__("./src/app/mobius-cesium/data/DataSubscriber.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CityJSONComponent = /** @class */ (function (_super) {
    __extends(CityJSONComponent, _super);
    function CityJSONComponent(injector, myElement) {
        var _this = _super.call(this, injector) || this;
        _this._CheckDisable = true;
        return _this;
    }
    CityJSONComponent.prototype.ngOnInit = function () {
        this.srftype_ids = this.genModelService.getSrftypeIds();
        this.setSrftype_keys();
        // if(this.dataArr !== undefined) {this.LoadData();}
    };
    CityJSONComponent.prototype.notify = function (message) {
        if (message === "model_update") {
            try {
                this.srftype_ids = this.genModelService.getSrftypeIds();
                this.setSrftype_keys();
                // if(this.dataArr !== undefined) {this.LoadData();}
            }
            catch (ex) {
                console.log(ex);
            }
        }
    };
    CityJSONComponent.prototype.setSrftype_keys = function () {
        var keys = [];
        for (var key in this.srftype_ids) {
            if (this.srftype_ids[key] !== undefined) {
                keys.push(key);
            }
        }
        this.srftype_keys = keys;
    };
    CityJSONComponent.prototype.Show = function (event) {
        var eventCheckbox = document.getElementById(event + "_check");
        var ids = this.srftype_ids[event];
        var entities = this.genModelService.getDataSource().entities;
        if (eventCheckbox["checked"] === false) {
            ids.forEach(function (id) {
                entities.getById(id).show = false;
            });
        }
        else {
            ids.forEach(function (id) {
                entities.getById(id).show = true;
            });
        }
    };
    CityJSONComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "app-cityjson",
            template: __webpack_require__("./src/app/mobius-cesium/setting/cityjson.component.html"),
            styles: [__webpack_require__("./src/app/mobius-cesium/setting/cityjson.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], CityJSONComponent);
    return CityJSONComponent;
}(__WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__["a" /* DataSubscriber */]));



/***/ }),

/***/ "./src/app/mobius-cesium/setting/display.copmponent.css":
/***/ (function(module, exports) {

module.exports = "/*/deep/.mat-tab-label, /deep/.mat-tab-label-active{\r\n  min-width: 60px!important;\r\n  padding: 3px!important;\r\n  margin: 3px!important;\r\n  color:#D3D3D3 !important;\r\n  background-color: transparent !important;\r\n}\r\n/deep/.mat-tab-label{\r\n  height: 30px !important;\r\n  width: 60px !important;\r\n  background-color: transparent !important;\r\n}\r\n/deep/.mat-tab-labels{\r\n  background-color: rgba(20,20,20,0.9) !important;\r\n}\r\n/deep/.mat-tab-header{\r\n  width: 700px !important;\r\n}\r\n/deep/.mat-tab-header-pagination-controls-enabled{\r\n  display: none !important;\r\n}\r\n\r\n/deep/.mat-ink-bar{\r\n  background-color: #395d73 !important;\r\n}\r\n\r\n/deep/.mat-tab{\r\n  min-width: 30px !important;\r\n}\r\n/deep/.mat-tab-body-content{\r\n  overflow: hidden !important;\r\n}\r\n\r\n/deep/.mat-header{\r\n  flex-direction: row;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  margin-left: 0px;\r\n  color:#395d73;\r\n  border: 0;\r\n  height: 20px;\r\n  background-color: rgba(20,20,20,0.9) !important;\r\n}\r\n/deep/.mat-tab-body-wrapper{\r\n  height:100% !important;\r\n\r\n}\r\n\r\n\r\n/deep/split-gutter{\r\n  background-color:rgb(138, 168, 192) !important;\r\n}\r\n\r\n/deep/.mat-accent .mat-slider-thumb {\r\n    background-color: #8AA8C0 !important;\r\n    cursor: -webkit-grab;\r\n}\r\n/deep/.mat-slider-thumb{\r\n  width: 5px !important;\r\n  right: -5px !important;\r\n}\r\n\r\n/deep/.mat-slider-track-fill{\r\n  background-color: #F0BFA0 !important;\r\n}\r\n\r\n/deep/.mat-slider-thumb-label-text {\r\n    color: #395d73 !important;\r\n    font-size: 12px !important;\r\n}\r\n/deep/.mat-slider-thumb-label{\r\n    height: 15px !important;\r\n    width: 15px !important;\r\n    top: -20px !important;\r\n    right: -7px !important;\r\n    background-color: white !important;\r\n    border: 1px solid #395d73 !important;\r\n}\r\n/deep/.mat-slider-track-background{\r\n  background-color: #D3D3D3 !important;\r\n}\r\n.mat-slider{\r\n    width: 150px !important;\r\n}*/\r\n\r\n.cesium-button {\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid #8AA8C0;\r\n  color: #D3D3D3;\r\n  fill: #8AA8C0;\r\n  border-radius: 0px;\r\n  padding: 3px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 80px;\r\n  font-family:sans-serif !important;\r\n  background: transparent;\r\n}\r\n\r\n.cesium-button-select{\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid #8AA8C0;\r\n  fill: #8AA8C0;\r\n  border-radius: 0px;\r\n  padding: 3px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 80px;\r\n  font-family:sans-serif !important;\r\n  color: #D3D3D3;\r\n  background: transparent;\r\n}\r\n\r\n.cesium-option{\r\n  background-color: #F1F1F1;\r\n  /*opacity: 0.8;*/\r\n  color: #8AA8C0;\r\n  border: 1px solid #8AA8C0;\r\n}\r\n\r\nhr {\r\n  display: block;\r\n  height: 1px;\r\n  border: 0;\r\n  border-top: 1px solid #D3D3D3 !important;\r\n  padding: 0; \r\n  color:#D3D3D3 !important;\r\n  width: 100%;\r\n  background-color: #D3D3D3 !important;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/mobius-cesium/setting/display.copmponent.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"DisplayView\"  style=\"background-color: rgba(20,20,20,0.9);height: 100%;overflow-y:overlay;\"  >\r\n\t<table>\r\n      <tr>\r\n      <th class=\"colorkey\" style=\"width: 80px\"><div class=\"Hide\" style=\"width: 80px;color:#D3D3D3 !important;border:0;text-align: left;font-weight: normal;\">Imagery</div></th>\r\n      <th><div>\r\n        <select class=\"cesium-button\" (change)=\"onChangeImagery($event.target.value)\" [ngModel]=\"_Imagery\">\r\n          <option class=\"cesium-option\"  *ngFor=\"let Imagery of _ImageryList\" value={{Imagery}}>{{Imagery}}</option>\r\n        </select>\r\n      </div></th>\r\n      </tr>\r\n    </table>\r\n    <hr>\r\n    <table>\r\n      <tr ><th style=\"width:80px;height: 25px;\"><div style=\"width: 80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\">Sun</div></th>\r\n      <th style=\"width:80px;height: 25px;\"><div style=\"width:80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\"><input type=\"checkbox\" [checked]=\"_Sun\" (click)=\"changeSun()\"></div></th></tr>\r\n    </table>\r\n    <table>\r\n      <tr ><th style=\"width:80px;height: 25px;\"><div style=\"width: 80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\">Shadows</div></th>\r\n      <th style=\"width:80px;height: 25px;\"><div style=\"width:80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\"><input type=\"checkbox\" [checked]=\"_Shadow\" (click)=\"changeShadow()\"></div></th></tr>\r\n    </table>\r\n    <table>\r\n      <tr ><th style=\"width:80px;height: 25px;\"><div style=\"width: 80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\">Date</div></th>\r\n      <th style=\"width:80px;height: 18px;\"><input type=\"text\"  value={{_Date}} style=\"width:80px;height: 18px;background:transparent;color:#D3D3D3;border:1px solid #8AA8C0;font-weight: normal;text-align: left\" (change)=\"changeDate($event.target.value,_UTC)\"></th></tr>  \r\n    </table>\r\n    <table>\r\n      <tr ><th style=\"width:80px;height: 25px;\"><div style=\"width: 80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\">UTC</div></th>\r\n      <th style=\"width:80px;height: 18px;\"><input type=\"text\"  value={{_UTC}} style=\"width:80px;height: 18px;background:transparent;color:#D3D3D3;border:1px solid #8AA8C0;font-weight: normal;text-align: left\" (change)=\"changeDate(_Date,$event.target.value)\"></th></tr>  \r\n    </table>\r\n    \r\n</div>\r\n  "

/***/ }),

/***/ "./src/app/mobius-cesium/setting/display.copmponent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__ = __webpack_require__("./src/app/mobius-cesium/data/DataSubscriber.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DisplayComponent = /** @class */ (function (_super) {
    __extends(DisplayComponent, _super);
    function DisplayComponent(injector, myElement) {
        return _super.call(this, injector) || this;
    }
    DisplayComponent.prototype.ngOnInit = function () {
        this.data = this.dataService.getGsModel();
        this._ImageryList = ["Disable", "Stamen Toner", "Stamen Toner(Lite)", "Terrain(Standard)", "Terrain(Background)",
            "OpenStreetMap", "Earth at Night", "Natural Earth\u00a0II", "Blue Marble"];
        if (this._Imagery === undefined) {
            this._Imagery = this._ImageryList[0];
            this.onChangeImagery(this._Imagery);
        }
        else {
            this._Imagery = this.dataService.get_Imagery();
        }
        if (this._Sun === undefined) {
            this._Sun = false;
            this.dataService.set_Sun(this._Sun);
        }
        else {
            this._Sun = this.dataService.get_Sun();
        }
        if (this._Shadow === undefined) {
            this._Shadow = false;
            this.dataService.set_Shadow(this._Shadow);
        }
        else {
            this._Shadow = this.dataService.get_Shadow();
        }
        this._UTC = +8;
        this.dataService.set_UTC(this._UTC);
        if (this._Date === undefined) {
            var today = new Date();
            var year = today.getFullYear();
            var month = String(today.getMonth() + 1).padStart(2, "0");
            var day = String(today.getDate()).padStart(2, "0");
            this._Date = year + "-" + month + "-" + day;
        }
        else {
            this._Date = this.dataService.get_Date();
            this.changeDate(this._Date, this._UTC);
        }
        this.dataService.set_Date(this._Date);
    };
    DisplayComponent.prototype.notify = function (message) {
    };
    //chanage imagery in Display tab
    DisplayComponent.prototype.onChangeImagery = function (_Imagery) {
        this._Imagery = _Imagery;
        this.dataService.set_Imagery(_Imagery);
        var layers = this.dataService.getViewer().scene.imageryLayers;
        if (_Imagery === this._ImageryList[0]) {
            layers.removeAll();
            this.dataService.getViewer().scene.globe.baseColor = Cesium.Color.GRAY;
        }
        else if (_Imagery === this._ImageryList[1]) {
            layers.removeAll();
            var blackMarble = layers.addImageryProvider(Cesium.createOpenStreetMapImageryProvider({
                url: "https://stamen-tiles.a.ssl.fastly.net/toner/"
            }));
        }
        else if (_Imagery === this._ImageryList[2]) {
            layers.removeAll();
            var blackMarble = layers.addImageryProvider(Cesium.createOpenStreetMapImageryProvider({
                url: "https://stamen-tiles.a.ssl.fastly.net/toner-lite/"
            }));
        }
        else if (_Imagery === this._ImageryList[3]) {
            layers.removeAll();
            var blackMarble = layers.addImageryProvider(Cesium.createOpenStreetMapImageryProvider({
                url: "https://stamen-tiles.a.ssl.fastly.net/terrain/"
            }));
        }
        else if (_Imagery === this._ImageryList[4]) {
            layers.removeAll();
            var blackMarble = layers.addImageryProvider(Cesium.createOpenStreetMapImageryProvider({
                url: "https://stamen-tiles.a.ssl.fastly.net/terrain-background/"
            }));
        }
        else if (_Imagery === this._ImageryList[5]) {
            layers.removeAll();
            var blackMarble = layers.addImageryProvider(Cesium.createOpenStreetMapImageryProvider({
                url: "https://a.tile.openstreetmap.org/"
            }));
        }
        else if (_Imagery === this._ImageryList[6]) {
            layers.removeAll();
            var blackMarble = layers.addImageryProvider(new Cesium.IonImageryProvider({ assetId: 3812 }));
        }
        else if (_Imagery === this._ImageryList[7]) {
            layers.removeAll();
            var blackMarble = layers.addImageryProvider(Cesium.createTileMapServiceImageryProvider({
                url: Cesium.buildModuleUrl("Assets/Textures/NaturalEarthII"),
            }));
        }
        else if (_Imagery === this._ImageryList[8]) {
            layers.removeAll();
            var blackMarble = layers.addImageryProvider(new Cesium.IonImageryProvider({ assetId: 3845 }));
        }
    };
    //change sun
    DisplayComponent.prototype.changeSun = function () {
        var viewer = this.dataService.getViewer();
        this._Sun = !this._Sun;
        if (this._Sun === true) {
            viewer.terrainShadows = Cesium.ShadowMode.ENABLED;
            viewer.scene.globe.enableLighting = true;
            viewer.scene.sun.show = true;
        }
        else {
            viewer.terrainShadows = undefined;
            viewer.scene.globe.enableLighting = false;
            viewer.scene.sun.show = false;
        }
        this.dataService.set_Sun(this._Sun);
    };
    //change shadow
    DisplayComponent.prototype.changeShadow = function () {
        this._Shadow = !this._Shadow;
        var promise = this.dataService.getcesiumpromise();
        if (this._Shadow === true) {
            promise.then(function (dataSource) {
                var entities = dataSource.entities.values;
                for (var _i = 0, entities_1 = entities; _i < entities_1.length; _i++) {
                    var entity = entities_1[_i];
                    if (entity.polygon !== undefined) {
                        entity.polygon.shadows = Cesium.ShadowMode.ENABLED;
                    }
                }
            });
        }
        else {
            promise.then(function (dataSource) {
                var entities = dataSource.entities.values;
                for (var _i = 0, entities_2 = entities; _i < entities_2.length; _i++) {
                    var entity = entities_2[_i];
                    if (entity.polygon !== undefined) {
                        entity.polygon.shadows = undefined;
                    }
                }
            });
        }
        this.dataService.set_Shadow(this._Shadow);
    };
    //change date
    DisplayComponent.prototype.changeDate = function (_Date, _UTC) {
        this._Date = _Date;
        this._UTC = _UTC;
        var viewer = this.dataService.getViewer();
        var now = new Cesium.JulianDate.fromIso8601(this._Date);
        var tomorrow = now.clone();
        tomorrow.dayNumber = tomorrow.dayNumber + 1;
        viewer.clock.currentTime = Cesium.JulianDate.addHours(now, this._UTC, now);
        viewer.clock.startTime = now.clone();
        viewer.clock.stopTime = tomorrow.clone();
        viewer.timeline.zoomTo(viewer.clock.startTime, viewer.clock.stopTime);
        this.dataService.set_Date(this._Date);
        this.dataService.set_UTC(this._UTC);
        viewer.timeline.updateFromClock();
    };
    DisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "app-display",
            template: __webpack_require__("./src/app/mobius-cesium/setting/display.copmponent.html"),
            styles: [__webpack_require__("./src/app/mobius-cesium/setting/display.copmponent.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], DisplayComponent);
    return DisplayComponent;
}(__WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__["a" /* DataSubscriber */]));



/***/ }),

/***/ "./src/app/mobius-cesium/setting/publish.component.css":
/***/ (function(module, exports) {

module.exports = "#publishwindow{\r\n  position: relative;\r\n  height: 100%;\r\n  width: 100%;\r\n  color:#D3D3D3 !important;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  font-size: 14px !important;\r\n  line-height: 16px;\r\n  overflow-x: hidden !important;\r\n}\r\n\r\n/deep/split-gutter{\r\n  background-color:rgb(138, 168, 192) !important;\r\n}\r\n\r\n/deep/.mat-accent .mat-slider-thumb {\r\n    background-color: #8AA8C0 !important;\r\n    cursor: -webkit-grab;\r\n    padding: 0px;\r\n    height: 24px;\r\n    /*min-width: 50px;*/\r\n    -webkit-box-flex: 1;\r\n    -ms-flex-positive: 1;\r\n    flex-grow: 1;\r\n    -ms-touch-action: none;\r\n        touch-action: none;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    -webkit-user-drag: none;\r\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\n/deep/.mat-slider-thumb{\r\n  width: 5px !important;\r\n  right: -5px !important;\r\n}\r\n\r\n/deep/.mat-slider-track-fill{\r\n  background-color: #F0BFA0 !important;\r\n}\r\n\r\n/deep/.mat-slider-thumb-label-text {\r\n    color: #395d73 !important;\r\n    font-size: 12px !important;\r\n}\r\n\r\n/deep/.mat-slider-thumb-label{\r\n    height: 15px !important;\r\n    width: 15px !important;\r\n    top: -20px !important;\r\n    right: -7px !important;\r\n    background-color: white !important;\r\n    border: 1px solid #395d73 !important;\r\n}\r\n\r\n/deep/.mat-slider-track-background{\r\n  background-color: #D3D3D3 !important;\r\n}\r\n\r\n.mat-slider{\r\n    width: 100%;\r\n    display: inline-block;\r\n    position: relative;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    outline: 0;\r\n    vertical-align: middle;\r\n}\r\n\r\n.cesium-button {\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid #8AA8C0;\r\n  color: #D3D3D3;\r\n  fill: #8AA8C0;\r\n  border-radius: 0px;\r\n  padding: 3px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 80px;\r\n  font-family:sans-serif !important;\r\n  background: transparent;\r\n}\r\n\r\n.cesium-button-select{\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid #8AA8C0;\r\n  fill: #8AA8C0;\r\n  border-radius: 0px;\r\n  padding: 3px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 80px;\r\n  font-family:sans-serif !important;\r\n  color: #D3D3D3;\r\n  background: transparent;\r\n}\r\n\r\n.cesium-option{\r\n  background-color: #F1F1F1;\r\n  /*opacity: 0.8;*/\r\n  color: #8AA8C0;\r\n  border: 1px solid #8AA8C0;\r\n}\r\n\r\nhr {\r\n  display: block;\r\n  height: 1px;\r\n  border: 0;\r\n  border-top: 1px solid #D3D3D3 !important;\r\n  padding: 0; \r\n  color:#D3D3D3 !important;\r\n  width: 100%;\r\n  background-color: #D3D3D3 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/mobius-cesium/setting/publish.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"publish\" style=\"background-color: rgba(20,20,20,0.9);height: 100%;overflow-y:overlay;\"  >\r\n\r\n<div id=\"publishwindow\" *ngIf=\"dataArr!==undefined\">\r\n        <div *ngIf=\"_ColorKey!==undefined\">\r\n        <table >\r\n          <tr>\r\n          <th class=\"colorkey\" style=\"width: 280px\" *ngIf=\"_ColorDescr!==undefined\"><div style=\"color:#D3D3D3 !important;border:0;text-align: left;font-weight: normal;font-size:14px;line-height:16px;\">{{_ColorDescr}}</div></th></tr>\r\n        </table>\r\n        <table>\r\n          <tr>\r\n            <th class=\"colorkey\" style=\"width: 80px\"><div class=\"Hide\" style=\"width: 80px;color:#D3D3D3 !important;border:0;text-align: left;font-weight: normal;\">Color&nbsp;&nbsp;:</div></th>\r\n          <th><div>\r\n            <select class=\"cesium-button\" (change)=\"onChangeColor($event.target.value)\" [ngModel]=\"_ColorKey\">\r\n              <option class=\"cesium-option\"  *ngFor=\"let ColorName of _ColorProperty\" value={{ColorName}}>{{ColorName}}</option>\r\n            </select>\r\n          </div></th>\r\n          </tr>\r\n          </table>\r\n    </div>\r\n    <div *ngIf=\"_ExtrudeKey!==undefined\">\r\n        <hr>\r\n          <table >\r\n          <tr>\r\n          <th class=\"colorkey\" style=\"width: 280px\" *ngIf=\"_ExtrudeDescr!==undefined\"><div style=\"color:#D3D3D3 !important;border:0;text-align: left;font-weight: normal;font-size:14px;line-height:16px;\">{{_ExtrudeDescr}}</div></th></tr>\r\n        </table>\r\n        <table>\r\n          <tr>\r\n            <th class=\"colorkey\" style=\"width: 80px\"><div class=\"Hide\" style=\"width: 80px;color:#D3D3D3 !important;border:0;text-align: left;font-weight: normal;\">Extrude&nbsp;&nbsp;:</div></th>\r\n          <th><div>\r\n            <select class=\"cesium-button\" (change)=\"onChangeHeight($event.target.value)\" [ngModel]=\"_ExtrudeKey\">\r\n               <option class=\"cesium-option\"  *ngFor=\"let Height of _ExtrudeProperty\" value={{Height}}>{{Height}}</option>\r\n            </select>\r\n          </div></th>\r\n          </tr>\r\n        </table>\r\n        <table>\r\n          <tr ><th style=\"width:40px;height: 25px;\"><div style=\"width: 40px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\">Min&nbsp;&nbsp;:</div></th>\r\n          <th style=\"width:40px;\"><div style=\"width: 40px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\" *ngIf=\"_ExtrudeMin!==undefined\">{{_ExtrudeMin}}</div></th></tr>\r\n\r\n          <tr><th style=\"width:40px;\"><div style=\"width: 40px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\">Max&nbsp;&nbsp;:</div></th>\r\n          <th style=\"width:60px;\"><div style=\"width: 60px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\" *ngIf=\"_ExtrudeMax!==undefined\">{{_ExtrudeMax}}</div></th></tr>\r\n      </table>\r\n    </div>\r\n    <div *ngIf=\"_Filter!==undefined\">\r\n      <hr>\r\n      <div class=\"hide-container\" style=\"margin-top:5px;\">\r\n        <div *ngFor=\"let item of _Filter;\" id={{item.divid}}>\r\n      <table>\r\n        <tr >\r\n          <th style=\"width:280px;height: 25px;\"><div style=\"color:#D3D3D3 !important;text-align: left;vertical-align: middle;font-weight: normal;font-size:14px;line-height:16px;\">{{item.descr}}</div></th></tr>\r\n        </table>\r\n        <table>\r\n          <tr>\r\n            <th style=\"max-width: 80px;height: 25px;\"><div matTooltip={{item.HeightHide}} style=\"max-width: 80px;color:#D3D3D3 !important;text-align: left;vertical-align: middle;font-weight: normal;white-space: nowrap;display:block;overflow: hidden !important;text-overflow: ellipsis !important;cursor:pointer;\">{{item.HeightHide}}</div></th>\r\n        <th *ngIf=\"item.type === 'number'\" style=\"width:20px;height: 25px;\">\r\n          <div style=\"width:20px;height: 25px;color:#D3D3D3 !important;vertical-align: middle;font-weight: normal;margin-top: 10px;\" *ngIf=\"item.RelaHide === 0\">></div>\r\n          <div style=\"width:20px;height: 25px;color:#D3D3D3 !important;vertical-align: middle;font-weight: normal;margin-top: 10px;\" *ngIf=\"item.RelaHide === 1\"><</div>\r\n          <div style=\"width:20px;height: 25px;color:#D3D3D3 !important;vertical-align: middle;font-weight: normal;margin-top: 10px;\" *ngIf=\"item.RelaHide === 2\">=</div></th>\r\n          <th *ngIf=\"item.type === 'category'\" style=\"width:30px;height: 25px;\">\r\n          <div style=\"width:20px;height: 25px;color:#D3D3D3 !important;vertical-align: middle;font-weight: normal;margin-top: 10px;\" *ngIf=\"item.RelaHide === 0\">none</div>\r\n          <div style=\"width:20px;height: 25px;color:#D3D3D3 !important;vertical-align: middle;font-weight: normal;margin-top: 10px;\" *ngIf=\"item.RelaHide === 1\">=</div>\r\n          <div style=\"width:20px;height: 25px;color:#D3D3D3 !important;vertical-align: middle;font-weight: normal;margin-top: 10px;\" *ngIf=\"item.RelaHide === 2\">!=</div></th>\r\n          <th *ngIf=\"item.type === 'number'\" style=\"width:80px;color:#395D73 !important;\"><input type=\"text\" id={{item.id}} value={{item.textHide}} (change)=\"Changetext($event.target.value,item.id)\" style=\"width:80px;background:transparent;color:#D3D3D3;border:1px solid #8AA8C0;\"></th>\r\n          <th *ngIf=\"item.type === 'category'\" style=\"width:73px;height: 25px;\"><div style=\"width:73px;height: 25px;\">\r\n          <select class=\"cesium-button-select\" [ngModel]=\"item.CategaryHide\" (change)=\"ChangeCategory($event.target.value,item.id,1)\" style=\"width:73px;height: 25px;\">\r\n            <option class=\"cesium-option\" *ngFor=\"let caty of item.Category\" value={{caty}}>{{caty}}</option>\r\n          </select></div></th>\r\n        <th style=\"width:20px;height: 22px;\" id={{item.id}}><input type=\"checkbox\" id={{item.id}} checked=\"checked\" (click)=\"Disable(item.id)\" style=\"width:20px;height: 22px;cursor:pointer;\"></th></tr>\r\n      </table>\r\n      <table>\r\n        <tr>\r\n        <th *ngIf=\"item.type === 'number'\" style=\"max-width: 30px;height: 25px;vertical-align: top;padding-top: 10px;\"><div style=\"font-weight: normal;display: inline-block;color:#D3D3D3 !important;text-align: left;max-width: 30px;\">{{item.HideMin}}</div></th>\r\n        <th *ngIf=\"item.type === 'number'\" style=\"width:200px;height: 25px;\"><div style=\"font-weight: normal;display: inline-block;width:200px;\"><mat-slider class=\"slider\" name=\"range\" id=\"0\" min={{item.HideMin}} max={{item.HideMax}} step=0.01 thumbLabel=true value={{item.textHide}} #textscale (change)=\"Changetext(textscale.value.toPrecision(2),item.id)\" >\r\n        </mat-slider></div></th>\r\n        <th *ngIf=\"item.type === 'number'\" style=\"max-width: 30px;height: 25px;vertical-align: top;padding-top: 10px;\"><div style=\"font-weight: normal;display: inline-block;color:#D3D3D3 !important;max-width: 30px;text-align: left;\">{{item.HideMax}}</div></th></tr>\r\n      </table><hr>\r\n        </div>\r\n      </div>\r\n      <div>\r\n      <button style=\"color:#D3D3D3;border:2px solid #8AA8C0;background-color: transparent;cursor:pointer;\" (click)=\"reset()\">Reset</button></div>\r\n      </div>\r\n</div>\r\n\r\n  "

/***/ }),

/***/ "./src/app/mobius-cesium/setting/publish.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublishComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__ = __webpack_require__("./src/app/mobius-cesium/data/DataSubscriber.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PublishComponent = /** @class */ (function (_super) {
    __extends(PublishComponent, _super);
    function PublishComponent(injector, myElement) {
        var _this = _super.call(this, injector) || this;
        _this._CheckDisable = false;
        return _this;
    }
    PublishComponent.prototype.ngOnInit = function () {
        this.mode = this.dataService.getmode();
        this.dataArr = this.dataService.get_PuData();
        if (this.dataArr !== undefined) {
            this.LoadData();
        }
    };
    PublishComponent.prototype.notify = function (message) {
        if (message === "model_update") {
            try {
                this.dataArr = this.dataService.get_PuData();
                if (this.dataArr !== undefined) {
                    this.LoadData();
                }
            }
            catch (ex) {
                console.log(ex);
            }
        }
    };
    //load data in publish version
    PublishComponent.prototype.LoadData = function () {
        this._ColorDescr = this.dataArr["ColorDescr"];
        this._ColorProperty = this.dataArr["ColorProperty"];
        this._ColorKey = this.dataArr["ColorKey"];
        this._ColorMax = this.dataArr["ColorMax"];
        this._ColorMin = this.dataArr["ColorMin"];
        this._ColorInvert = this.dataArr["ColorInvert"];
        this._ExtrudeDescr = this.dataArr["ExtrudeDescr"];
        this._ExtrudeProperty = this.dataArr["ExtrudeProperty"];
        this._ExtrudeKey = this.dataArr["ExtrudeKey"];
        this._ExtrudeMax = this.dataArr["ExtrudeMax"];
        this._ExtrudeMin = this.dataArr["ExtrudeMin"];
        this._HeightChart = this.dataArr["HeightChart"];
        this._Invert = this.dataArr["Invert"];
        this._Scale = this.dataArr["Scale"];
        this._HideNum = this.dataArr["HideNum"];
        this._Filter = this.dataArr["Filter"];
    };
    //disable button in publish version
    PublishComponent.prototype.Disable = function (event) {
        var index = this._HideNum.indexOf(event);
        var divid = String("addHide".concat(String(event)));
        var addHide = document.getElementById(divid);
        if (this._Filter[index].Disabletext === null) {
            this._CheckDisable = false;
        }
        else {
            this._CheckDisable = true;
        }
        if (this._CheckDisable === false) {
            if (this._Filter[index].type === "number") {
                var textHide = this._Filter[index].textHide;
                this._Filter[index].Disabletext = Number(textHide);
                if (this._Filter[index].RelaHide === "0" || this._Filter[index].RelaHide === 0) {
                    this._Filter[index].textHide = this._Filter[index].HideMin;
                }
                if (this._Filter[index].RelaHide === "1" || this._Filter[index].RelaHide === 1) {
                    this._Filter[index].textHide = this._Filter[index].HideMax;
                }
            }
            else if (this._Filter[index].type === "category") {
                var textHide = this._Filter[index].RelaHide;
                this._Filter[index].Disabletext = Number(textHide);
                this._Filter[index].RelaHide = 0;
            }
        }
        else {
            if (this._Filter[index].type === "number") {
                this._Filter[index].textHide = this._Filter[index].Disabletext;
                this._Filter[index].Disabletext = null;
            }
            else if (this._Filter[index].type === "category") {
                this._Filter[index].RelaHide = this._Filter[index].Disabletext;
                this._Filter[index].Disabletext = null;
            }
        }
        this.dataArr["Filter"] = this._Filter;
        this.dataArr["HideNum"] = this._HideNum;
        this.dataService.set_PuData(this.dataArr);
    };
    //change category in filter
    PublishComponent.prototype.ChangeCategory = function (categary, id, type) {
        var _index = this._HideNum.indexOf(id);
        if (type === 1) {
            this._Filter[_index].CategaryHide = categary;
        }
        if (type === 0) {
            this._Filter[_index].RelaHide = Number(categary);
        }
    };
    //change text in filter
    PublishComponent.prototype.Changetext = function (value, id) {
        var _index = this._HideNum.indexOf(id);
        this._Filter[_index].textHide = value;
    };
    //change color property in publish version
    PublishComponent.prototype.onChangeColor = function (value) {
        var data = this.dataService.getGsModel()["cesium"]["colour"]["attribs"];
        this.dataArr["ColorKey"] = value;
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var _data = data_1[_i];
            if (_data["name"] === value) {
                this.dataArr["ColorMin"] = _data["min"];
                this.dataArr["ColorMax"] = _data["max"];
                this.dataArr["ColorInvert"] = _data["invert"];
            }
        }
        var promise = this.dataService.getcesiumpromise();
        var _Colortexts = [];
        var self = this;
        promise.then(function (dataSource) {
            var entities = dataSource.entities.values;
            for (var _i = 0, entities_1 = entities; _i < entities_1.length; _i++) {
                var entity = entities_1[_i];
                if (entity.properties[value] !== undefined) {
                    if (entity.properties[value]._value !== " ") {
                        if (_Colortexts.length === 0) {
                            _Colortexts[0] = entity.properties[value]._value;
                        }
                        else {
                            if (_Colortexts.indexOf(entity.properties[value]._value) === -1) {
                                _Colortexts.push(entity.properties[value]._value);
                            }
                        }
                    }
                }
            }
        });
        this.dataArr["ColorText"] = _Colortexts.sort();
        this.dataService.set_PuData(this.dataArr);
        this.LoadData();
    };
    //change extrudeheight property in publish version
    PublishComponent.prototype.onChangeHeight = function (value) {
        var data = this.dataService.getGsModel()["cesium"]["extrude"]["attribs"];
        this.dataArr["ExtrudeKey"] = value;
        for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
            var _data = data_2[_i];
            if (_data["name"] === value) {
                this.dataArr["ExtrudeMin"] = _data["min"];
                this.dataArr["ExtrudeMax"] = _data["max"];
                this.dataArr["HeightChart"] = _data["line"];
                this.dataArr["Invert"] = _data["invert"];
                this.dataArr["Scale"] = _data["scale"];
            }
        }
        var promise = this.dataService.getcesiumpromise();
        var _Heighttexts = [];
        var self = this;
        promise.then(function (dataSource) {
            var entities = dataSource.entities.values;
            for (var _i = 0, entities_2 = entities; _i < entities_2.length; _i++) {
                var entity = entities_2[_i];
                if (entity.properties[value] !== undefined) {
                    if (entity.properties[value]._value !== " ") {
                        if (_Heighttexts.length === 0) {
                            _Heighttexts[0] = entity.properties[value]._value;
                        }
                        else {
                            if (_Heighttexts.indexOf(entity.properties[value]._value) === -1) {
                                _Heighttexts.push(entity.properties[value]._value);
                            }
                        }
                    }
                }
            }
        });
        this.dataArr["ExtrudeText"] = _Heighttexts.sort();
        this.dataService.set_PuData(this.dataArr);
        this.LoadData();
    };
    //reset button to load again
    PublishComponent.prototype.reset = function () {
        this.dataService.LoadJSONData();
        this.dataArr = this.dataService.get_PuData();
        if (this.dataArr !== undefined) {
            this.LoadData();
        }
    };
    PublishComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "app-publish",
            template: __webpack_require__("./src/app/mobius-cesium/setting/publish.component.html"),
            styles: [__webpack_require__("./src/app/mobius-cesium/setting/publish.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], PublishComponent);
    return PublishComponent;
}(__WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__["a" /* DataSubscriber */]));



/***/ }),

/***/ "./src/app/mobius-cesium/setting/setting.component.css":
/***/ (function(module, exports) {

module.exports = "#setting{\r\n  position: relative;\r\n  height: 100%;\r\n  width: 100%;\r\n  color:#D3D3D3 !important;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  font-size: 14px !important;\r\n  line-height: 14px;\r\n  overflow-x: hidden !important;\r\n  border-right: 1px solid gray;\r\n}\r\n\r\n/deep/.mat-tab-label, /deep/.mat-tab-label-active{\r\n  min-width: 60px!important;\r\n  padding: 3px!important;\r\n  margin: 3px!important;\r\n  color:#D3D3D3 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n/deep/.mat-tab-label{\r\n  height: 30px !important;\r\n  width: 60px !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n/deep/.mat-tab-labels{\r\n  background-color: rgba(20,20,20,0.9) !important;\r\n}\r\n\r\n/deep/.mat-tab-header{\r\n  width: 700px !important;\r\n}\r\n\r\n/deep/.mat-tab-header-pagination-controls-enabled{\r\n  display: none !important;\r\n}\r\n\r\n/deep/.mat-ink-bar{\r\n  background-color: #395d73 !important;\r\n}\r\n\r\n/deep/.mat-tab{\r\n  min-width: 30px !important;\r\n}\r\n\r\n/deep/.mat-tab-body-content{\r\n  overflow: hidden !important;\r\n}\r\n\r\n/deep/.mat-header{\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  margin-left: 0px;\r\n  color:#395d73;\r\n  border: 0;\r\n  height: 20px;\r\n  background-color: rgba(20,20,20,0.9) !important;\r\n}\r\n\r\n/deep/.mat-tab-body-wrapper{\r\n  height:100% !important;\r\n\r\n}\r\n\r\n/deep/split-gutter{\r\n  background-color:rgb(138, 168, 192) !important;\r\n}\r\n\r\n/deep/.mat-accent .mat-slider-thumb {\r\n    background-color: #8AA8C0 !important;\r\n    cursor: -webkit-grab;\r\n}\r\n\r\n/deep/.mat-slider-thumb{\r\n  width: 5px !important;\r\n  right: -5px !important;\r\n}\r\n\r\n/deep/.mat-slider-track-fill{\r\n  background-color: #F0BFA0 !important;\r\n}\r\n\r\n/deep/.mat-slider-thumb-label-text {\r\n    color: #395d73 !important;\r\n    font-size: 12px !important;\r\n}\r\n\r\n/deep/.mat-slider-thumb-label{\r\n    height: 15px !important;\r\n    width: 15px !important;\r\n    top: -20px !important;\r\n    right: -7px !important;\r\n    background-color: white !important;\r\n    border: 1px solid #395d73 !important;\r\n}\r\n\r\n/deep/.mat-slider-track-background{\r\n  background-color: #D3D3D3 !important;\r\n}\r\n\r\n.mat-slider{\r\n    width: 150px !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/mobius-cesium/setting/setting.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"setting\" >\r\n  <mat-tab-group class=\"mat-tab-group\" style=\"height: 100%;\" (selectedTabChange)=\"changedata($event.index)\" *ngIf=\"mode==='editor'\" >\r\n    <mat-tab label=\"&nbsp;Select&nbsp;\">\r\n      <app-select></app-select>\r\n    </mat-tab>\r\n<!--     <mat-tab label=\"&nbsp;Data&nbsp;\" >\r\n      <app-data (change)=\"LoadViewer()\" (click)=\"LoadViewer()\"></app-data>\r\n    </mat-tab> -->\r\n    <mat-tab label=\"&nbsp;Display&nbsp;\" >\r\n      <app-display></app-display>\r\n    </mat-tab>\r\n<!--     <mat-tab label=\"&nbsp;Publish&nbsp;\" >\r\n      <app-publish  (change)=\"LoadViewer()\" (click)=\"Reset();LoadViewer();\"></app-publish>\r\n    </mat-tab> -->\r\n    <mat-tab label=\"&nbsp;CityJSON&nbsp;\" >\r\n      <app-cityjson></app-cityjson>\r\n      <!-- <app-select></app-select> -->\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n    <app-publish *ngIf=\"mode==='viewer'\" (change)=\"LoadViewer()\" (click)=\"Reset();LoadViewer();\"></app-publish>\r\n</div>"

/***/ }),

/***/ "./src/app/mobius-cesium/setting/setting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__ = __webpack_require__("./src/app/mobius-cesium/data/DataSubscriber.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chroma_js__ = __webpack_require__("./node_modules/chroma-js/chroma.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chroma_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chroma_js__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingComponent = /** @class */ (function (_super) {
    __extends(SettingComponent, _super);
    function SettingComponent(injector, myElement) {
        return _super.call(this, injector) || this;
    }
    //get data and mode
    SettingComponent.prototype.ngOnInit = function () {
        this.data = this.dataService.getGsModel();
        this.mode = this.dataService.getmode();
        if (this.mode === "viewer") {
            this.changedata(3);
        }
        else if (this.mode === "editor") {
            this.changedata(1);
        }
    };
    //change data and load new data
    SettingComponent.prototype.notify = function (message) {
        if (message === "model_update") {
            this.data = this.dataService.getGsModel();
            this.mode = this.dataService.getmode();
            try {
                if (this.data !== undefined && this.data["features"] !== undefined) {
                    if (this.mode === "viewer") {
                        this.changedata(3);
                    }
                    else if (this.mode === "editor") {
                        this.changedata(1);
                    }
                }
            }
            catch (ex) {
                console.log(ex);
            }
        }
    };
    //change index from editor version to publish version
    SettingComponent.prototype.changedata = function (id) {
        this.dataService.set_index(id);
        if (id === 1) {
            this.dataArr = this.dataService.get_ViData();
        }
        else if (id === 3) {
            this.dataArr = this.dataService.get_PuData();
        }
        if (this.dataArr !== undefined) {
            this.LoadViewer();
        }
    };
    //reset button to reset everthing in publish version
    SettingComponent.prototype.Reset = function () {
        this.dataArr = this.dataService.get_PuData();
    };
    //change color and extrudeHeight of entity
    SettingComponent.prototype.LoadViewer = function () {
        var promise = this.dataService.getcesiumpromise();
        var _ColorKey = this.dataArr["ColorKey"];
        var _ColorMax = this.dataArr["ColorMax"];
        var _ColorMin = this.dataArr["ColorMin"];
        var _ColorText = this.dataArr["ColorText"];
        var _ColorInvert = this.dataArr["ColorInvert"];
        var _ExtrudeKey = this.dataArr["ExtrudeKey"];
        var _ExtrudeMax = this.dataArr["ExtrudeMax"];
        var _ExtrudeMin = this.dataArr["ExtrudeMin"];
        var _HeightChart = this.dataArr["HeightChart"];
        var _Invert = this.dataArr["Invert"];
        var _Scale = this.dataArr["Scale"];
        var _indexArr = this.dataArr["indexArr"];
        var _Filter;
        if (this.dataArr["Filter"] !== undefined && this.dataArr["Filter"].length !== 0) {
            _Filter = this.dataArr["Filter"];
        }
        else {
            _Filter = [];
        }
        var _ChromaScale = __WEBPACK_IMPORTED_MODULE_2_chroma_js__["scale"]("SPECTRAL");
        if (_ColorInvert === true) {
            _ChromaScale = __WEBPACK_IMPORTED_MODULE_2_chroma_js__["scale"]("SPECTRAL").domain([1, 0]);
        }
        var self = this;
        promise.then(function (dataSource) {
            var entities = dataSource.entities.values;
            for (var _i = 0, _indexArr_1 = _indexArr; _i < _indexArr_1.length; _i++) {
                var i = _indexArr_1[_i];
                var entity = entities[i];
                var _CheckHide = void 0;
                if (entity.polygon !== undefined) {
                    if (_Filter.length !== 0) {
                        _CheckHide = self.Hide(_Filter, entity, _HeightChart);
                        if (_CheckHide === true) {
                            if (entity.polygon !== undefined) {
                                entity.polygon.extrudedHeight = 0;
                                entity.polygon.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                                if (_HeightChart === true) {
                                    if (entity.polyline !== undefined) {
                                        entity.polyline.show = false;
                                    }
                                }
                            }
                            if (entity.polyline !== undefined) {
                                entity.polyline.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                            }
                        }
                    }
                    if (_Filter.length === 0 || _CheckHide === false) {
                        if (_ColorKey !== "None") {
                            if (typeof (_ColorText[0]) === "number") {
                                self.colorByNum(entity, _ColorMax, _ColorMin, _ColorKey, _ChromaScale);
                            }
                            else {
                                self.colorByCat(entity, _ColorText, _ColorKey, _ChromaScale);
                            }
                        }
                        else {
                            entity.polygon.material = Cesium.Color.DARKGREY;
                        }
                        if (_ExtrudeKey !== "None") {
                            if (_HeightChart === false) {
                                entity.polyline = undefined;
                                if (entity.properties[_ExtrudeKey] !== undefined) {
                                    entity.polygon.extrudedHeight = self.ExtrudeHeight(entity.properties[_ExtrudeKey]._value, _ExtrudeMax, _ExtrudeMin, _Invert) * _Scale;
                                }
                                else {
                                    entity.polygon.extrudedHeight = 0;
                                }
                            }
                            else {
                                entity.polygon.extrudedHeight = 0;
                                var center = Cesium.BoundingSphere.fromPoints(entity.polygon.hierarchy.getValue().positions).center;
                                var radius = Math.min(Math.round(Cesium.BoundingSphere.fromPoints(entity.polygon.hierarchy.getValue().positions).radius / 100), 10);
                                var longitudeString = Cesium.Math.toDegrees(Cesium.Ellipsoid.WGS84.
                                    cartesianToCartographic(center).longitude).toFixed(10);
                                var latitudeString = Cesium.Math.toDegrees(Cesium.Ellipsoid.WGS84.cartesianToCartographic(center).
                                    latitude).toFixed(10);
                                entity.polyline = new Cesium.PolylineGraphics({
                                    positions: new Cesium.Cartesian3.fromDegreesArrayHeights([longitudeString, latitudeString, 0, longitudeString,
                                        latitudeString, self.ExtrudeHeight(entity.properties[_ExtrudeKey]._value, _ExtrudeMax, _ExtrudeMin, _Invert) * _Scale]),
                                    width: radius,
                                    material: entity.polygon.material,
                                    show: true,
                                });
                            }
                        }
                        else {
                            entity.polyline = undefined;
                            entity.polygon.extrudedHeight = 0;
                        }
                    }
                }
                else if (entity.polyline !== undefined) {
                    if (_ColorKey !== "None") {
                        if (typeof (_ColorText[0]) === "number") {
                            self.colorByNum(entity, _ColorMax, _ColorMin, _ColorKey, _ChromaScale);
                        }
                        else {
                            self.colorByCat(entity, _ColorText, _ColorKey, _ChromaScale);
                        }
                    }
                    else {
                        entity.polyline.material = Cesium.Color.DARKGREY;
                    }
                }
                else if (entity.point !== undefined) {
                    if (_ColorKey !== "None") {
                        if (typeof (_ColorText[0]) === "number") {
                            self.colorByNum(entity, _ColorMax, _ColorMin, _ColorKey, _ChromaScale);
                        }
                        else {
                            self.colorByCat(entity, _ColorText, _ColorKey, _ChromaScale);
                        }
                    }
                    else {
                        entity.point.color = Cesium.Color.DARKGREY;
                    }
                }
            }
        });
    };
    //check whether entity should be hided or not
    SettingComponent.prototype.Hide = function (_Filter, entity, _HeightChart) {
        var _CheckHide = false;
        for (var _i = 0, _Filter_1 = _Filter; _i < _Filter_1.length; _i++) {
            var filter = _Filter_1[_i];
            var value = entity.properties[filter.HeightHide]._value;
            if (value !== undefined) {
                if (typeof (value) === "number") {
                    if (this._compare(value, Number(filter.textHide), Number(filter.RelaHide))) {
                        _CheckHide = true;
                    }
                }
                else if (typeof (value) === "string") {
                    if (this._compareCat(value, filter.CategaryHide, Number(filter.RelaHide))) {
                        _CheckHide = true;
                    }
                }
            }
        }
        return _CheckHide;
    };
    SettingComponent.prototype._compare = function (value, slider, relation) {
        switch (relation) {
            case 0:
                return value < slider;
            case 1:
                return value > slider;
            case 2:
                return value !== slider;
        }
    };
    SettingComponent.prototype._compareCat = function (value, _Categary, relation) {
        switch (relation) {
            case 0:
                return value === undefined;
            case 1:
                return value !== _Categary;
            case 2:
                return value === _Categary;
        }
    };
    //caculate the extrudeHeight of entity
    SettingComponent.prototype.ExtrudeHeight = function (value, _ExtrudeMax, _ExtrudeMin, _Invert) {
        var diff;
        if (_ExtrudeMin < 0) {
            diff = Math.abs(_ExtrudeMin);
        }
        else {
            diff = 0;
        }
        if (value > _ExtrudeMax) {
            value = _ExtrudeMax;
        }
        if (value < _ExtrudeMin) {
            value = _ExtrudeMin;
        }
        switch (_Invert) {
            case true:
                return _ExtrudeMax - value;
            case false:
                return value;
        }
    };
    SettingComponent.prototype.colorByNum = function (entity, max, min, _ColorKey, _ChromaScale) {
        if (entity.properties[_ColorKey] !== undefined) {
            var texts = entity.properties[_ColorKey]._value;
            var rgb = _ChromaScale(Number(((max - texts) / (max - min)).toFixed(2)))._rgb;
            if (entity.polygon !== undefined) {
                entity.polygon.material = Cesium.Color.fromBytes(rgb[0], rgb[1], rgb[2]);
            }
            if (entity.polyline !== undefined) {
                var newColor = new Cesium.Color.fromBytes(rgb[0], rgb[1], rgb[2]);
                entity.polyline.material.color.setValue(newColor);
            }
            if (entity.point !== undefined) {
                var newColor = new Cesium.Color.fromBytes(rgb[0], rgb[1], rgb[2]);
                entity.point.color = newColor;
            }
        }
        else {
            if (entity.polygon !== undefined) {
                entity.polygon.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
            }
            if (entity.polyline !== undefined) {
                entity.polyline.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
            }
            if (entity.point !== undefined) {
                entity.point.color = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
            }
        }
    };
    SettingComponent.prototype.colorByCat = function (entity, _ColorText, _ColorKey, _ChromaScale) {
        if (entity.properties[_ColorKey] !== undefined) {
            var initial = false;
            for (var j = 0; j < _ColorText.length; j++) {
                if (entity.properties[_ColorKey]._value === _ColorText[j]) {
                    var rgb = _ChromaScale(1 - (j / _ColorText.length));
                    if (entity.polygon !== undefined) {
                        entity.polygon.material = Cesium.Color.fromBytes(rgb._rgb[0], rgb._rgb[1], rgb._rgb[2]);
                    }
                    if (entity.polyline !== undefined) {
                        var newColor = new Cesium.Color.fromBytes(rgb[0], rgb[1], rgb[2]);
                        entity.polyline.material.color.setValue(newColor);
                    }
                    if (entity.point !== undefined) {
                        var newColor = new Cesium.Color.fromBytes(rgb[0], rgb[1], rgb[2]);
                        entity.point.color = newColor;
                    }
                    initial = true;
                }
            }
            if (initial === false) {
                if (entity.polygon !== undefined) {
                    entity.polygon.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                }
                if (entity.polyline !== undefined) {
                    entity.polyline.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                }
                if (entity.point !== undefined) {
                    entity.point.color = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                }
            }
        }
        else {
            if (entity.polygon !== undefined) {
                entity.polygon.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
            }
            if (entity.polyline !== undefined) {
                entity.polyline.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
            }
            if (entity.point !== undefined) {
                entity.point.color = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
            }
        }
    };
    SettingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "app-setting",
            template: __webpack_require__("./src/app/mobius-cesium/setting/setting.component.html"),
            styles: [__webpack_require__("./src/app/mobius-cesium/setting/setting.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], SettingComponent);
    return SettingComponent;
}(__WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__["a" /* DataSubscriber */]));



/***/ }),

/***/ "./src/app/mobius-cesium/setting/visualise.component.css":
/***/ (function(module, exports) {

module.exports = "#SettingView{\r\n  position: relative;\r\n  padding:0px;\r\n  height: 100%;\r\n  width: 100%;\r\n  color:#D3D3D3 !important;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  font-size: 14px !important;\r\n  line-height: 14px;\r\n  overflow-x: hidden !important;\r\n  background-color: rgba(20,20,20,0.9);\r\n  overflow-y:overlay;\r\n}\r\n/deep/.mat-tab-label, /deep/.mat-tab-label-active{\r\n  min-width: 60px!important;\r\n  padding: 3px!important;\r\n  margin: 3px!important;\r\n  color:#D3D3D3 !important;\r\n  background-color: transparent !important;\r\n}\r\n/deep/.mat-tab-label{\r\n  height: 30px !important;\r\n  width: 60px !important;\r\n  background-color: transparent !important;\r\n}\r\n/deep/.mat-tab-labels{\r\n  background-color: rgba(20,20,20,0.9) !important;\r\n}\r\n/deep/.mat-tab-header{\r\n  width: 700px !important;\r\n}\r\n/deep/.mat-tab-header-pagination-controls-enabled{\r\n  display: none !important;\r\n}\r\n/deep/.mat-ink-bar{\r\n  background-color: #395d73 !important;\r\n}\r\n/deep/.mat-tab{\r\n  min-width: 30px !important;\r\n}\r\n/deep/.mat-tab-body-content{\r\n  overflow: hidden !important;\r\n}\r\n/deep/.mat-header{\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  margin-left: 0px;\r\n  color:#395d73;\r\n  border: 0;\r\n  height: 20px;\r\n  background-color: rgba(20,20,20,0.9) !important;\r\n}\r\n/deep/.mat-tab-body-wrapper{\r\n  height:100% !important;\r\n\r\n}\r\n/deep/split-gutter{\r\n  background-color:rgb(138, 168, 192) !important;\r\n}\r\n/deep/.mat-accent .mat-slider-thumb {\r\n    background-color: #8AA8C0 !important;\r\n    cursor: -webkit-grab;\r\n}\r\n/deep/.mat-slider-thumb{\r\n  width: 5px !important;\r\n  right: -5px !important;\r\n}\r\n/deep/.mat-slider-track-fill{\r\n  background-color: #F0BFA0 !important;\r\n}\r\n/deep/.mat-slider-thumb-label-text {\r\n    color: #8AA8C0 !important;\r\n    font-size: 12px !important;\r\n}\r\n/deep/.mat-slider-thumb-label{\r\n    height: 15px !important;\r\n    width: 15px !important;\r\n    top: -20px !important;\r\n    right: -7px !important;\r\n    background-color: white !important;\r\n    border: 1px solid #8AA8C0 !important;\r\n}\r\n/deep/.mat-slider-track-background{\r\n  background-color: #D3D3D3 !important;\r\n}\r\n.mat-slider{\r\n    width: 150px !important;\r\n}\r\n.cesium-button {\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid #8AA8C0;\r\n  color: #D3D3D3;\r\n  fill: #8AA8C0;\r\n  border-radius: 0px;\r\n  padding: 3px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 80px;\r\n  font-family:sans-serif !important;\r\n  background: transparent;\r\n}\r\n.cesium-button-select{\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid #8AA8C0;\r\n  fill: #8AA8C0;\r\n  border-radius: 0px;\r\n  padding: 3px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 80px;\r\n  font-family:sans-serif !important;\r\n  color: #D3D3D3;\r\n  background: transparent;\r\n}\r\n.cesium-option{\r\n  background-color: #F1F1F1;\r\n  /*opacity: 0.8;*/\r\n  color: #8AA8C0;\r\n  border: 1px solid #8AA8C0;\r\n}\r\nhr {\r\n  display: block;\r\n  height: 1px;\r\n  border: 0;\r\n  border-top: 1px solid #D3D3D3 !important;\r\n  padding: 0; \r\n  color:#D3D3D3 !important;\r\n  width: 100%;\r\n  background-color: #8AA8C0 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/mobius-cesium/setting/visualise.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"SettingView\" >\r\n    <table>\r\n      <tr>\r\n      <th class=\"colorkey\" style=\"width: 80px\"><div class=\"Hide\" style=\"width: 80px;color:#D3D3D3 !important;border:0;text-align: left;font-weight: normal;\">Color</div></th>\r\n      <th><div>\r\n        <select class=\"cesium-button\" (change)=\"onChangeColor($event.target.value)\" [ngModel]=\"_ColorKey\">\r\n          <option class=\"cesium-option\"  *ngFor=\"let ColorName of _ColorProperty\" value={{ColorName}}>{{ColorName}}</option>\r\n        </select>\r\n      </div></th>\r\n      </tr>\r\n      </table>\r\n      <table>\r\n      <tr ><th style=\"width:80px;height: 25px;\"><div style=\"width: 80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\">Min</div></th>\r\n      <th style=\"width:80px;height: 18px;\"><input type=\"text\"  value={{_ColorMin}} style=\"width:80px;height: 18px;background:transparent;color:#D3D3D3;border:1px solid #8AA8C0;font-weight: normal;text-align: left;\" (change)=\"changeColorMin($event.target.value)\"></th></tr>  \r\n      </table>\r\n      <table >\r\n      <tr ><th style=\"width:80px;\"><div style=\"width: 80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\">Max</div></th>\r\n      <th style=\"width:80px;height: 18px;\"><input type=\"text\" value={{_ColorMax}} style=\"width: 80px;height: 18px;background:transparent;color:#D3D3D3;border:1px solid #8AA8C0;font-weight: normal;text-align: left;\" (change)=\"changeColorMax($event.target.value)\"></th></tr>\r\n  </table>\r\n    <table>\r\n      <tr ><th style=\"width:80px;height: 25px;\"><div style=\"width: 80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\">Invert</div></th>\r\n      <th style=\"width:80px;height: 25px;\"><div style=\"width:80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\"><input type=\"checkbox\" [checked]=\"_ColorInvert\" (click)=\"changeColorInvert()\"></div></th></tr>\r\n    </table>\r\n    <hr>\r\n      <table>\r\n      <tr>\r\n      <th class=\"colorkey\" style=\"width: 80px\"><div class=\"Hide\" style=\"width: 80px;color:#D3D3D3 !important;border:0;text-align: left;font-weight: normal;\">Extrude</div></th>\r\n      <th><div>\r\n        <select class=\"cesium-button\" (change)=\"onChangeHeight($event.target.value)\" [ngModel]=\"_ExtrudeKey\">\r\n           <option class=\"cesium-option\"  *ngFor=\"let Height of _ExtrudeProperty\" value={{Height}}>{{Height}}</option>\r\n        </select>\r\n      </div></th>\r\n      </tr>\r\n    </table>\r\n    <table>\r\n      <tr ><th style=\"width:80px;height: 25px;\"><div style=\"width: 80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\">Min</div></th>\r\n      <th style=\"width:80px;height: 18px;\"><input type=\"text\"  value={{_ExtrudeMin}} style=\"width:80px;height: 18px;background:transparent;color:#D3D3D3;border:1px solid #8AA8C0;font-weight: normal;text-align: left\" (change)=\"changeHeightMin($event.target.value)\"></th></tr>  \r\n      </table>\r\n      <table >\r\n      <tr ><th style=\"width:80px;\"><div style=\"width: 80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\">Max</div></th>\r\n      <th style=\"width:80px;height: 18px;\"><input type=\"text\" value={{_ExtrudeMax}} style=\"width: 80px;height: 18px;background:transparent;color:#D3D3D3;border:1px solid #8AA8C0;font-weight: normal;text-align: left;\" (change)=\"changeHeightMax($event.target.value)\"></th></tr>\r\n  </table>\r\n   <table>\r\n      <tr ><th style=\"width:80px;height: 25px;\"><div style=\"width: 80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\">Scale</div></th>\r\n      <th style=\"width:80px;height: 18px;\"><input type=\"text\" value={{_Scale}} style=\"width:80px;height: 18px;background:transparent;color:#D3D3D3;border:1px solid #8AA8C0;font-weight: normal;text-align: left;\" (change)=\"changescale($event.target.value)\" ></th></tr>\r\n      <tr ><th style=\"width:80px;height: 25px;\"><div style=\"width: 80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\">Invert</div></th>\r\n      <th style=\"width:80px;height: 25px;\"><div style=\"width:80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\"><input type=\"checkbox\" [checked]=\"_Invert\" (click)=\"changeopp()\"></div></th></tr>\r\n      <tr ><th style=\"width:80px;height: 25px;\"><div style=\"width: 80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\">Height Chart</div></th>\r\n      <th style=\"width:80px;height: 25px;\"><div style=\"width:80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\"><input type=\"checkbox\" [checked]=\"_HeightChart\" (click)=\"changeExtrude();\"></div></th></tr>  \r\n  </table>\r\n  <hr>\r\n  <table>\r\n    <tr>\r\n    <th class=\"colorkey\" style=\"width: 75px;height: 25px;\"><div class=\"Hide\" style=\"width: 75px;height: 25;color:#D3D3D3 !important;border-color:#395d73;border:0;text-align: left;font-weight: normal;\"><input type=\"button\" value=\"Add Filter\" style=\"color:#D3D3D3;border:1px solid #8AA8C0;width: 75px;height: 25px;background-color: transparent;cursor:pointer;\" (click)=\"addHide()\"></div></th>\r\n    <th style=\"width:20px;height: 22px;\"><div style=\"width:20px;height: 22px;margin-left: 10px\">\r\n      <select class=\"cesium-button-select\"  (change)=\"ChangeHeight($event.target.value)\">\r\n         <option class=\"cesium-option\"  *ngFor=\"let ColorName of _ColorProperty\" value={{ColorName}}>{{ColorName}}</option>\r\n      </select></div></th>\r\n    </tr>\r\n  </table>\r\n  <div class=\"hide-container\" style=\"margin-top:5px;\">\r\n    <div *ngFor=\"let item of _Filter;\" id={{item.divid}}>\r\n  <table>\r\n    <tr ><th style=\"width:85px;height: 22px;\"><div style=\"width:85px;color:#D3D3D3 !important;text-align: left;vertical-align: middle;font-weight: normal;\">{{item.HeightHide}}</div></th>\r\n    <th *ngIf=\"item.type === 'number'\" style=\"width:40px;height: 22px;\"><div style=\"width:40px;height: 22px;\">\r\n      <select class=\"cesium-button-select\" [ngModel]=\"item.RelaHide\" (change)=\"Changerelation($event.target.value,item.id)\" style=\"width:40px;height: 22px;\">\r\n         <option class=\"cesium-option\" value=0>></option>\r\n         <option class=\"cesium-option\" value=1><</option>\r\n         <option class=\"cesium-option\" value=2>=</option>\r\n      </select></div></th>\r\n      <th *ngIf=\"item.type === 'category'\" style=\"width:40px;height: 22px;\"><div style=\"width:40px;height: 22px;\">\r\n      <select class=\"cesium-button-select\" [ngModel]=\"item.RelaHide\" (change)=\"ChangeCategory($event.target.value,item.id,0)\" style=\"width:40px;height: 22px;\">\r\n        <option class=\"cesium-option\" value=0>none</option>\r\n        <option class=\"cesium-option\" value=1>=</option>\r\n        <option class=\"cesium-option\" value=2>!=</option>\r\n      </select></div></th>\r\n      <th *ngIf=\"item.type === 'number'\" style=\"width:70px;height: 20px;\"><input type=\"text\" id={{item.id}} value={{item.textHide}} (change)=\"Changetext($event.target.value,item.id)\" style=\"width:70px;height: 20px;background:transparent;color:#D3D3D3;border:1px solid #8AA8C0;\"></th>\r\n      <th *ngIf=\"item.type === 'category'\" style=\"width:73px;height: 22px;\"><div style=\"width:73px;height: 22px;\">\r\n      <select class=\"cesium-button-select\" [ngModel]=\"item.CategaryHide\" (change)=\"ChangeCategory($event.target.value,item.id,1)\" style=\"width:73px;height: 22px;\">\r\n        <option class=\"cesium-option\" *ngFor=\"let caty of item.Category\" value={{caty}}>{{caty}}</option>\r\n      </select></div></th>\r\n    <th style=\"width:20px;height: 22px;\" id={{item.id}}><span id={{item.id}} (click)=\"deleteHide(item.id)\" style=\"width:20px;height: 22px;cursor:pointer;\"><i class=\"material-icons\" style=\"color:#D3D3D3;font-size:16px\">delete</i></span></th>\r\n    <th style=\"width:20px;height: 25px;\" id={{item.id}}><input type=\"checkbox\" id={{item.id}} checked=\"checked\" (click)=\"Disable(item.id)\" tyle=\"width:20px;height: 25px;cursor:pointer;\"></th></tr>\r\n  </table>\r\n  <table>\r\n    <tr>\r\n    <th *ngIf=\"item.type === 'number'\" style=\"width:50px;height: 25px;vertical-align: top;padding-top: 10px;\"><div style=\"font-weight: normal;display: inline-block;color:#D3D3D3 !important;width:30px;\">{{item.HideMin}}</div></th>\r\n    <th *ngIf=\"item.type === 'number'\" style=\"width:150px;height: 22px;\"><div style=\"font-weight: normal;display: inline-block;width:150px;\"><mat-slider class=\"slider\" name=\"range\" id=\"0\" min={{item.HideMin}} max={{item.HideMax}} step=0.01 thumbLabel=true value={{item.textHide}} #textscale (change)=\"Changetext(textscale.value.toPrecision(2),item.id)\" >\r\n    </mat-slider></div></th>\r\n    <th *ngIf=\"item.type === 'number'\" style=\"width:50px;height: 25px;vertical-align: top;padding-top: 10px;\"><div style=\"font-weight: normal;display: inline-block;color:#D3D3D3 !important;width:30px;text-align: left;\">{{item.HideMax}}</div></th></tr>\r\n  </table><hr>\r\n    </div>\r\n  </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/mobius-cesium/setting/visualise.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__ = __webpack_require__("./src/app/mobius-cesium/data/DataSubscriber.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataComponent = /** @class */ (function (_super) {
    __extends(DataComponent, _super);
    function DataComponent(injector, myElement) {
        var _this = _super.call(this, injector) || this;
        _this._CheckDisable = true;
        return _this;
    }
    DataComponent.prototype.ngOnInit = function () {
        this.dataArr = this.dataService.get_ViData();
        if (this.dataArr !== undefined) {
            this.LoadData();
        }
    };
    DataComponent.prototype.notify = function (message) {
        if (message === "model_update") {
            try {
                this.dataArr = this.dataService.get_ViData();
                if (this.dataArr !== undefined) {
                    this.LoadData();
                }
            }
            catch (ex) {
                console.log(ex);
            }
        }
    };
    //load data
    DataComponent.prototype.LoadData = function () {
        this._ColorProperty = this.dataArr["ColorProperty"];
        this._ColorKey = this.dataArr["ColorKey"];
        this._ColorMax = this.dataArr["ColorMax"];
        this._ColorMin = this.dataArr["ColorMin"];
        this._ColorInvert = this.dataArr["ColorInvert"];
        this._ExtrudeProperty = this.dataArr["ExtrudeProperty"];
        this._ExtrudeKey = this.dataArr["ExtrudeKey"];
        this._ExtrudeMax = this.dataArr["ExtrudeMax"];
        this._ExtrudeMin = this.dataArr["ExtrudeMin"];
        this._HeightChart = this.dataArr["HeightChart"];
        this._Invert = this.dataArr["Invert"];
        this._Scale = this.dataArr["Scale"];
        this._Filter = this.dataArr["Filter"];
        this._HideNum = this.dataArr["HideNum"];
    };
    //change color property in editor version
    DataComponent.prototype.onChangeColor = function (value) {
        this.dataArr["ColorKey"] = value;
        var promise = this.dataService.getcesiumpromise();
        var _Colortexts = [];
        var self = this;
        promise.then(function (dataSource) {
            var entities = dataSource.entities.values;
            for (var _i = 0, entities_1 = entities; _i < entities_1.length; _i++) {
                var entity = entities_1[_i];
                if (entity.properties[value] !== undefined) {
                    if (entity.properties[value]._value !== " ") {
                        if (_Colortexts.length === 0) {
                            _Colortexts[0] = entity.properties[value]._value;
                        }
                        else {
                            if (_Colortexts.indexOf(entity.properties[value]._value) === -1) {
                                _Colortexts.push(entity.properties[value]._value);
                            }
                        }
                    }
                }
            }
        });
        this.dataArr["ColorMin"] = Math.min.apply(Math, _Colortexts);
        this.dataArr["ColorMax"] = Math.max.apply(Math, _Colortexts);
        this.dataArr["ColorText"] = _Colortexts.sort();
        this.dataService.set_ViData(this.dataArr);
        this.LoadData();
    };
    //change color min in editor version
    DataComponent.prototype.changeColorMin = function (_Min) {
        this.dataArr["ColorMin"] = Number(_Min);
        this._ColorMin = this.dataArr["ColorMin"];
        this.dataService.set_ViData(this.dataArr);
    };
    //change color max in editor version
    DataComponent.prototype.changeColorMax = function (_Max) {
        this.dataArr["ColorMax"] = Number(_Max);
        this._ColorMax = this.dataArr["ColorMax"];
        this.dataService.set_ViData(this.dataArr);
    };
    //change color invert in editor version
    DataComponent.prototype.changeColorInvert = function () {
        this._ColorInvert = !this._ColorInvert;
        this.dataArr["ColorInvert"] = this._ColorInvert;
        this.dataService.set_ViData(this.dataArr);
    };
    //change extrudeheight property in editor version
    DataComponent.prototype.onChangeHeight = function (value) {
        this.dataArr["ExtrudeKey"] = value;
        var promise = this.dataService.getcesiumpromise();
        var _Heighttexts = [];
        var self = this;
        promise.then(function (dataSource) {
            var entities = dataSource.entities.values;
            for (var _i = 0, entities_2 = entities; _i < entities_2.length; _i++) {
                var entity = entities_2[_i];
                if (entity.properties[value] !== undefined) {
                    if (entity.properties[value]._value !== " ") {
                        if (_Heighttexts.length === 0) {
                            _Heighttexts[0] = entity.properties[value]._value;
                        }
                        else {
                            if (_Heighttexts.indexOf(entity.properties[value]._value) === -1) {
                                _Heighttexts.push(entity.properties[value]._value);
                            }
                        }
                    }
                }
            }
        });
        this.dataArr["ExtrudeMin"] = Math.min.apply(Math, _Heighttexts);
        this.dataArr["ExtrudeMax"] = Math.max.apply(Math, _Heighttexts);
        this.dataArr["ExtrudeText"] = _Heighttexts.sort();
        this.dataService.set_ViData(this.dataArr);
        this.LoadData();
    };
    //change extrudeheight min in editor version
    DataComponent.prototype.changeHeightMin = function (_Min) {
        this.dataArr["ExtrudeMin"] = Number(_Min);
        this._ExtrudeMin = this.dataArr["ExtrudeMin"];
        this.dataService.set_ViData(this.dataArr);
    };
    //change extrudeHeight max in editor version
    DataComponent.prototype.changeHeightMax = function (_Max) {
        this.dataArr["ExtrudeMax"] = Number(_Max);
        this._ExtrudeMax = this.dataArr["ExtrudeMax"];
        this.dataService.set_ViData(this.dataArr);
    };
    //change scale in editor version
    DataComponent.prototype.changescale = function (_ScaleValue) {
        this.dataArr["Scale"] = Number(_ScaleValue);
        this._Scale = this.dataArr["Scale"];
        this.dataService.set_ViData(this.dataArr);
    };
    //change extrudeheight invert in editor version
    DataComponent.prototype.changeopp = function () {
        this._Invert = !this._Invert;
        this.dataArr["Invert"] = this._Invert;
        this.dataService.set_ViData(this.dataArr);
    };
    //change heightChart in editor version
    DataComponent.prototype.changeExtrude = function () {
        this._HeightChart = !this._HeightChart;
        this.dataArr["HeightChart"] = this._HeightChart;
        this.dataService.set_ViData(this.dataArr);
    };
    //add filter in editor version
    DataComponent.prototype.addHide = function () {
        var lastnumber;
        if (this.dataArr["HideNum"] !== undefined) {
            this._HideNum = this.dataArr["HideNum"];
            this._Filter = this.dataArr["Filter"];
        }
        if (this._HideNum === null || this._HideNum.length === 0) {
            this._HideNum[0] = "0";
            lastnumber = this._HideNum[0];
        }
        else {
            for (var i = 0; i < this._HideNum.length + 1; i++) {
                if (this._HideNum.indexOf(String(i)) === -1) {
                    this._HideNum.push(String(i));
                    lastnumber = String(i);
                    break;
                }
            }
        }
        if (this._HideValue === undefined) {
            this._HideValue = this._ColorProperty[0];
        }
        var texts = this.Initial(this._HideValue);
        var _HideType;
        if (typeof (texts[0]) === "number") {
            _HideType = "number";
        }
        else if (typeof (texts[0]) === "string") {
            _HideType = "category";
        }
        this._Filter.push({ divid: String("addHide".concat(String(lastnumber))), id: lastnumber,
            HeightHide: this._HideValue, type: _HideType, Category: texts, CategaryHide: texts[0],
            RelaHide: 0, textHide: Math.round(Math.min.apply(Math, texts) * 100) / 100,
            HideMax: Math.ceil(Math.max.apply(Math, texts)),
            HideMin: Math.round(Math.min.apply(Math, texts) * 100) / 100, Disabletext: null });
        this.dataArr["Filter"] = this._Filter;
        this.dataArr["HideNum"] = this._HideNum;
        this.dataService.set_ViData(this.dataArr);
    };
    //delete filter in editor version
    DataComponent.prototype.deleteHide = function (event) {
        var index = this._HideNum.indexOf(event);
        var divid = String("addHide".concat(String(event)));
        var addHide = document.getElementById(divid);
        var hidecontainer = document.getElementsByClassName("hide-container")[0];
        hidecontainer.removeChild(addHide);
        if (this._Filter[index].type === "number") {
            if (this._Filter[index].RelaHide === "0" || this._Filter[index].RelaHide === 0) {
                this._Filter[index].textHide = this._Filter[index].HideMin;
            }
            if (this._Filter[index].RelaHide === "1" || this._Filter[index].RelaHide === 1) {
                this._Filter[index].textHide = this._Filter[index].HideMax;
            }
        }
        else if (this._Filter[index].type === "category") {
            this._Filter[index].RelaHide = 0;
        }
        this._Filter.splice(index, 1);
        this._HideNum.splice(index, 1);
        this.dataArr["Filter"] = this._Filter;
        this.dataArr["HideNum"] = this._HideNum;
        this.dataService.set_ViData(this.dataArr);
    };
    //change disable button in filter
    DataComponent.prototype.Disable = function (event) {
        var index = this._HideNum.indexOf(event);
        var divid = String("addHide".concat(String(event)));
        var addHide = document.getElementById(divid);
        if (this._Filter[index].Disabletext === null) {
            this._CheckDisable = false;
        }
        else {
            this._CheckDisable = true;
        }
        if (this._CheckDisable === false) {
            if (this._Filter[index].type === "number") {
                var textHide = this._Filter[index].textHide;
                this._Filter[index].Disabletext = Number(textHide);
                if (this._Filter[index].RelaHide === "0" || this._Filter[index].RelaHide === 0) {
                    this._Filter[index].textHide = this._Filter[index].HideMin;
                }
                if (this._Filter[index].RelaHide === "1" || this._Filter[index].RelaHide === 1) {
                    this._Filter[index].textHide = this._Filter[index].HideMax;
                }
            }
            else if (this._Filter[index].type === "category") {
                var textHide = this._Filter[index].RelaHide;
                this._Filter[index].Disabletext = Number(textHide);
                this._Filter[index].RelaHide = 0;
            }
        }
        else {
            if (this._Filter[index].type === "number") {
                this._Filter[index].textHide = this._Filter[index].Disabletext;
                this._Filter[index].Disabletext = null;
            }
            else if (this._Filter[index].type === "category") {
                this._Filter[index].RelaHide = this._Filter[index].Disabletext;
                this._Filter[index].Disabletext = null;
            }
        }
        this.dataArr["Filter"] = this._Filter;
        this.dataArr["HideNum"] = this._HideNum;
        this.dataService.set_ViData(this.dataArr);
    };
    //change height slider in filter
    DataComponent.prototype.ChangeHeight = function (_HeightHide) {
        this._HideValue = _HeightHide;
    };
    //change relation in filter
    DataComponent.prototype.Changerelation = function (_RelaHide, id) {
        var index = this._HideNum.indexOf(id);
        var HeightHide = this._Filter[index].HeightHide;
        this._Filter[index].RelaHide = _RelaHide;
        var texts = [];
        var promise = this.dataService.getcesiumpromise();
        var self = this;
        promise.then(function (dataSource) {
            var entities = dataSource.entities.values;
            for (var _i = 0, entities_3 = entities; _i < entities_3.length; _i++) {
                var entity = entities_3[_i];
                if (entity.properties[HeightHide] !== undefined) {
                    if (entity.properties[HeightHide]._value !== " ") {
                        if (texts.length === 0) {
                            texts[0] = entity.properties[HeightHide]._value;
                        }
                        else {
                            if (texts.indexOf(entity.properties[HeightHide]._value) === -1) {
                                texts.push(entity.properties[HeightHide]._value);
                            }
                        }
                    }
                }
            }
        });
        this._Filter[index].HideMax = Math.ceil(Math.max.apply(Math, texts));
        this._Filter[index].HideMin = Math.round(Math.min.apply(Math, texts) * 100) / 100;
        if (_RelaHide === "0" || _RelaHide === 0) {
            this._Filter[index].textHide = this._Filter[index].HideMin;
        }
        if (_RelaHide === "1" || _RelaHide === 1) {
            this._Filter[index].textHide = this._Filter[index].HideMax;
        }
    };
    //change category in filter
    DataComponent.prototype.ChangeCategory = function (categary, id, type) {
        var index = this._HideNum.indexOf(id);
        if (type === 1) {
            this._Filter[index].CategaryHide = categary;
        }
        if (type === 0) {
            this._Filter[index].RelaHide = Number(categary);
        }
    };
    //change text in filter
    DataComponent.prototype.Changetext = function (value, id) {
        var index = this._HideNum.indexOf(id);
        this._Filter[index].textHide = value;
    };
    //get text according to property
    DataComponent.prototype.Initial = function (_HideValue) {
        var texts = [];
        var promise = this.dataService.getcesiumpromise();
        var self = this;
        promise.then(function (dataSource) {
            var entities = dataSource.entities.values;
            for (var _i = 0, entities_4 = entities; _i < entities_4.length; _i++) {
                var entity = entities_4[_i];
                if (entity.properties[_HideValue] !== undefined) {
                    if (entity.properties[_HideValue]._value !== " ") {
                        if (texts.length === 0) {
                            texts[0] = entity.properties[_HideValue]._value;
                        }
                        else {
                            if (texts.indexOf(entity.properties[_HideValue]._value) === -1) {
                                texts.push(entity.properties[_HideValue]._value);
                            }
                        }
                    }
                }
            }
        });
        return texts;
    };
    DataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "app-data",
            template: __webpack_require__("./src/app/mobius-cesium/setting/visualise.component.html"),
            styles: [__webpack_require__("./src/app/mobius-cesium/setting/visualise.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], DataComponent);
    return DataComponent;
}(__WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__["a" /* DataSubscriber */]));



/***/ }),

/***/ "./src/app/mobius-cesium/viewer/viewer.component.css":
/***/ (function(module, exports) {

module.exports = "body{\r\n  background: red;\r\n}\r\n#cesiumContainer{\r\n height: 100%;\r\n width: 100%; \r\n font-family: sans-serif !important;\r\n margin: 0px !important;\r\n padding: 0px !important;\r\n font-size: 14px;\r\n}\r\n#ColorBar{\r\n  z-index:99;\r\n  margin: 5px;\r\n  width: 100%;\r\n  padding: 2px 5px;\r\n  position: absolute;\r\n  display:inline-block;\r\n  bottom: 7%;\r\n  overflow: hidden !important;\r\n  text-overflow: ellipsis !important;\r\n  table-layout:fixed !important;\r\n  white-space: nowrap !important;\r\n}\r\n#ColorKey{\r\n  z-index:99;\r\n  margin: 5px;\r\n  width: 100%;\r\n  padding: 2px 5px;\r\n  position: absolute;\r\n  display:inline-block;\r\n  bottom: 2%;\r\n  overflow: hidden !important;\r\n  text-overflow: ellipsis !important;\r\n  table-layout:fixed !important;\r\n  white-space: nowrap !important;\r\n}\r\n#Download{\r\n  z-index: 99;\r\n  top: 5px;\r\n  position: absolute;\r\n  right: 120px;\r\n  width: 32px;\r\n  height: 32px;\r\n  font-size: 16px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  border-radius: 14%;\r\n  padding: 0;\r\n  vertical-align: middle;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/mobius-cesium/viewer/viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"cesiumContainer\" (click)=\"select();showAttribs($event)\" (mousemove)=\"Colortext();\">\r\n  <button class=\"cesium-button cesium-button-toolbar\" (click)=\"save_geojson()\" id=\"Download\"><i class=\"fa fa-download\"></i></button>\r\n  <div id=\"ColorBar\" *ngIf=\"texts!==undefined\">\r\n  \t<table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\" style=\"width: 88%;margin-left: 9%\">\r\n       <tr >\r\n          <th *ngFor=\"let text of texts;\" style=\"text-align:right;width: 7%\"><div  style=\"width: 8%;vertical-align: text-top;color:white;text-shadow: 0px 0px 3px black;\">{{text}}</div></th>\r\n        </tr>\r\n    </table>\r\n\t<table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\" style=\"width: 80%;margin: 0 auto;\">\r\n       <tr>\r\n          <th  *ngFor=\"let color of _Colorbar;let indx=index\" style=\"width: 0.5px;\" ><div [ngStyle]=\"{ 'background-color': color}\" ><div *ngIf=\"indx%8===0\" style=\"border-left: #FFFFFF 1px solid;border-color: black\">&nbsp;</div><div *ngIf=\"indx%8!==0\">&nbsp;</div></div></th>\r\n        </tr>\r\n    </table>\r\n  </div>\r\n  <div id=\"ColorBar\" *ngIf=\"_Cattexts!==undefined\" style=\"width: 100%;text-align: center\">\r\n    <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\" *ngFor=\"let cattext of _Cattexts\" style=\"display:inline-block;overflow: hidden !important;text-overflow: ellipsis !important;table-layout:fixed !important;white-space: nowrap !important; \">\r\n          <tr >\r\n            <th  style=\"width:80px;display:inline-block;overflow: hidden !important;text-overflow: ellipsis !important;table-layout:fixed !important;white-space: nowrap !important; \"><div [ngStyle]=\"{ 'background-color': cattext.color}\" >&nbsp;&nbsp;&nbsp;</div></th>\r\n        </tr>\r\n        <tr>\r\n            <th><div matTooltip={{cattext.text}}  style=\"width:80px;text-align: left;white-space: nowrap;display:inline-block;overflow: hidden !important;text-overflow: ellipsis !important;cursor:pointer;color:white;text-shadow: 0px 0px 3px black;\">{{cattext.text}}</div></th>\r\n          </tr>\r\n        </table>\r\n  </div>\r\n  <div id=\"ColorBar\" *ngIf=\"_CatNumtexts!==undefined\" >\r\n    <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\" style=\"width: 82%;margin: 0 auto;\">\r\n      <tr >\r\n        <th *ngFor=\"let cattext of _CatNumtexts;\" style=\"text-align:left;max-width: 3%\"><div *ngIf=\"cattext.text!==null\" style=\"width: 0.5px;vertical-align: text-top;color:white;text-shadow: 0px 0px 3px black;\">{{cattext.text}}</div><div *ngIf=\"cattext.text===null\" style=\"width: 0.5px;vertical-align: text-top;color:white;text-shadow: 0px 0px 3px black;\">&nbsp;&nbsp;&nbsp;</div></th>\r\n      </tr>\r\n    </table>\r\n    <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\" style=\"width: 80%;margin: 0 auto;\">\r\n      <tr>\r\n        <th  *ngFor=\"let cattext of _CatNumtexts;let indx=index\" style=\"width: 0.5px;\" ><div [ngStyle]=\"{ 'background-color': cattext.color}\" ><div style=\"border-color: black\">&nbsp;</div></div></th>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <div *ngIf=\"mode==='viewer'\" id=\"ColorKey\">\r\n    <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\" style=\"width: 80%;margin: 0 auto;text-align:center;color:white;text-shadow: 0px 0px 3px black;\" >\r\n      <tr>\r\n        <th  style=\"width: 40%;\" ><div>Color:&nbsp;{{_ColorKey}}</div></th>\r\n        <th  style=\"width: 40%;\" ><div>Extrude:&nbsp;{{_ExtrudeKey}}</div></th>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <div>\r\n    <table id=\"cesium-infoBox-defaultTable\" style=\"width: 140px;position:absolute;padding:4px;background-color:white;display: none;\">\r\n       <tr *ngFor=\"let pickupArr of pickupArrs\"><th style=\"font-size: 10px;font-weight: normal;color:#395d73;width: 60px;height: 14px\"><div matTooltip={{pickupArr.name}} style=\"width: 60px;height:14px;text-align: left;white-space: nowrap;display:block;overflow: hidden !important;text-overflow: ellipsis !important;cursor:pointer;\">{{pickupArr.name}}</div></th><th style=\"font-size: 10px;font-weight: normal;color:#395d73;width: 80px;height: 14px\"><div matTooltip={{pickupArr.data}} style=\"width: 80px;height:14px;text-align: left;white-space: nowrap;display:block;overflow: hidden !important;text-overflow: ellipsis !important;cursor:pointer;\">{{pickupArr.data}}</div></th></tr>\r\n       </table>\r\n        \r\n     </div>\r\n</div>"

/***/ }),

/***/ "./src/app/mobius-cesium/viewer/viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__ = __webpack_require__("./src/app/mobius-cesium/data/DataSubscriber.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chroma_js__ = __webpack_require__("./node_modules/chroma-js/chroma.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chroma_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chroma_js__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import * as d3 from "d3-array";

var ViewerComponent = /** @class */ (function (_super) {
    __extends(ViewerComponent, _super);
    function ViewerComponent(injector, myElement) {
        var _this = _super.call(this, injector) || this;
        _this.selectEntity = null;
        _this.myElement = myElement;
        return _this;
    }
    ViewerComponent.prototype.ngOnInit = function () {
        //pass mode to dataService
        this.mode = this.dataService.getmode();
        if (this.dataService.getViewer() === undefined) {
            this.CreateViewer();
        }
        //pass data to dataService
        this.data = this.dataService.getGsModel();
        //load data
        this.LoadData(this.data);
    };
    ViewerComponent.prototype.notify = function (message) {
        if (message === "model_update") {
            this.data = this.dataService.getGsModel();
            try {
                if (this.dataService.getViewer() === undefined) {
                    this.CreateViewer();
                }
                this.LoadData(this.data);
            }
            catch (ex) {
                console.log(ex);
            }
        }
    };
    //create cesium viewer and change home button funciton
    ViewerComponent.prototype.CreateViewer = function () {
        var viewer = new Cesium.Viewer("cesiumContainer", {
            infoBox: false,
            showRenderLoopErrors: false,
            orderIndependentTranslucency: false,
            baseLayerPicker: false,
            fullscreenButton: false,
            automaticallyTrackDataSourceClocks: false,
            animation: false,
            shadows: true,
            scene3DOnly: true,
        });
        viewer.scene.imageryLayers.removeAll();
        viewer.scene.globe.baseColor = Cesium.Color.GRAY;
        document.getElementsByClassName("cesium-viewer-bottom")[0].remove();
        var self = this;
        viewer.homeButton.viewModel.command.beforeExecute.addEventListener(function (e) {
            e.cancel = true;
            viewer.zoomTo(self.dataService.getcesiumpromise());
        });
        this.dataService.setViewer(viewer);
    };
    //Cesium geoJson to load data and check mode
    ViewerComponent.prototype.LoadData = function (data) {
        if (this.data !== undefined) {
            /////// INITIALISING VIEWER ////////
            var viewer_1 = this.dataService.getViewer();
            viewer_1.dataSources.removeAll({ destroy: true });
            // console.log("cleared data", viewer);
            /////// OBTAINING DATA ////////
            this.data = data;
            var context_1 = this;
            var promise_1 = new Promise(function (resolve) {
                var datasource = context_1.genModelService.genCityJSONGeom(context_1.data);
                resolve(datasource);
            });
            this.dataService.setcesiumpromise(promise_1);
            viewer_1.dataSources.add(promise_1);
            var _HeightKey = [];
            // const promise = Cesium.GeoJsonDataSource.load(this.data);
            // viewer.dataSources.add(promise);
            this._ShowColorBar = false;
            /////// THIS IS FOR THE ZOOM TO HOME BUTTON ///////
            viewer_1.homeButton.viewModel.command.beforeExecute.addEventListener(function (e) {
                e.cancel = true;
                viewer_1.zoomTo(promise_1);
            });
            viewer_1.zoomTo(promise_1);
            // =======
            //       promise.then(function(dataSource) {
            //         const entities = dataSource.entities.values;
            //         const self = this;
            //         if(entities[0].polygon !== undefined) {self._ShowColorBar = true;} else {self._ShowColorBar = false;}
            //       });
            //       this.dataService.setcesiumpromise(promise);
            //       if(this.mode === "editor") {
            //         this.dataService.getValue(this.data);
            //         this.dataService.LoadJSONData();
            //         this.dataArr = this.dataService.get_ViData();
            //         this._index = 1;
            //       }
            //       if(this.mode === "viewer") {
            //         this.dataService.LoadJSONData();
            //         this.dataArr = this.dataService.get_PuData();
            //         this._index = 3;
            //       }
            //       viewer.zoomTo(promise);
            // >>>>>>> upstream/master
            this.Colortext();
        }
    };
    //create color bar and text at bottom of viewer
    ViewerComponent.prototype.Colortext = function () {
        if (this.dataArr !== undefined) {
            if (this._index !== this.dataService.get_index()) {
                this._index = this.dataService.get_index();
                if (this._index === 1) {
                    this.dataArr = this.dataService.get_ViData();
                }
                else if (this._index === 3) {
                    this.dataArr = this.dataService.get_PuData();
                }
            }
            var propertyname = this.dataArr["ColorKey"];
            var texts = this.dataArr["ColorText"].sort();
            var _Max = this.dataArr["ColorMax"];
            var _Min = this.dataArr["ColorMin"];
            if (this.mode === "viewer") {
                this._ColorKey = this.dataArr["ColorKey"];
                this._ExtrudeKey = this.dataArr["ExtrudeKey"];
            }
            this.texts = undefined;
            this._Cattexts = [];
            this._CatNumtexts = [];
            var _ColorKey = void 0;
            var _ChromaScale = __WEBPACK_IMPORTED_MODULE_2_chroma_js__["scale"]("SPECTRAL");
            if (this.dataArr["ColorInvert"] === true) {
                _ChromaScale = __WEBPACK_IMPORTED_MODULE_2_chroma_js__["scale"]("SPECTRAL").domain([1, 0]);
            }
            this._Colorbar = [];
            for (var i = 79; i > -1; i--) {
                this._Colorbar.push(_ChromaScale(i / 80));
            }
            if (typeof (texts[0]) === "number") {
                this.texts = [Number(_Min.toFixed(2))];
                for (var i = 1; i < 10; i++) {
                    this.texts.push(Number((_Min + (_Max - _Min) * (i / 10)).toFixed(2)));
                }
                this.texts.push(Number(_Max.toFixed(2)));
                for (var i = 0; i < this.texts.length; i++) {
                    if (this.texts[i] / 1000000000 > 1) {
                        this.texts[i] = String(Number((this.texts[i] / 1000000000).toFixed(3))).concat("B");
                    }
                    else if (this.texts[i] / 1000000 > 1) {
                        this.texts[i] = String(Number((this.texts[i] / 1000000).toFixed(3))).concat("M");
                    }
                    else if (this.texts[i] / 1000 > 1) {
                        this.texts[i] = String(Number(((this.texts[i] / 1000)).toFixed(3))).concat("K");
                    }
                }
            }
            if (typeof (texts[0]) === "string") {
                if (texts.length <= 12) {
                    for (var j = 0; j < texts.length; j++) {
                        _ColorKey = [];
                        _ColorKey.text = texts[j];
                        _ColorKey.color = _ChromaScale(1 - (j / texts.length)); //_ChromaScale(j/texts.length);
                        this._Cattexts.push(_ColorKey);
                    }
                }
                else {
                    for (var j = 0; j < this._Colorbar.length; j++) {
                        _ColorKey = [];
                        if (j === 0) {
                            _ColorKey.text = texts[j];
                        }
                        else if (j === this._Colorbar.length - 1) {
                            if (texts[texts.length - 1] !== null) {
                                _ColorKey.text = texts[texts.length - 1];
                            }
                            else {
                                _ColorKey.text = texts[texts.length - 2];
                            }
                        }
                        else {
                            _ColorKey.text = null;
                        }
                        _ColorKey.color = this._Colorbar[j];
                        this._CatNumtexts.push(_ColorKey);
                    }
                }
            }
        }
        if (this._ShowColorBar === false) {
            this._Cattexts = undefined;
            this._Colorbar = undefined;
        }
    };
    //click building to select and  pass whole entity to dataService
    ViewerComponent.prototype.select = function () {
        var _this = this;
        event.stopPropagation();
        var viewer = this.dataService.getViewer(); //this.viewer;
        // console.log("Triggered select");
        if (this.selectEntity !== undefined && this.selectEntity !== null) {
            for (var i = 0; i < this.selectEntity._children.length; i++) {
                this.selectEntity._children[i].polygon.material = this.material[i];
            }
            // this.selectEntity.polygon.material = this.material;
            // console.log("Triggered revert colour", this.selectEntity.polygon.material);
        }
        if (viewer.selectedEntity !== undefined && viewer.selectedEntity.polygon !== null) {
            // console.log(viewer.selectedEntity);
            this.dataService.set_SelectedEntity(viewer.selectedEntity._parent);
            this.selectEntity = viewer.selectedEntity._parent;
            this.material = [];
            // console.log("Stored material", this.material);
            this.selectEntity._children.forEach(function (child) {
                _this.material.push(child.polygon.material);
                child.polygon.material = Cesium.Color.BLUE;
            });
            // viewer.selectedEntity.polygon.material = Cesium.Color.BLUE;
            // console.log("Triggered change colour", viewer.selectedEntity.polygon.material);
            //get properties
        }
        else {
            this.dataService.set_SelectedEntity(undefined);
            this.selectEntity = undefined;
            this.material = undefined;
            // console.log("Triggered set everything to undefined");
        }
    };
    // =======
    //   }
    //   //if unselect the building, it will show the color before
    //   public ColorSelect(entity) {
    //     const promise = this.dataService.getcesiumpromise();
    //     const _ColorKey: string = this.dataArr["ColorKey"];
    //     const _ColorMax: number = this.dataArr["ColorMax"];
    //     const _ColorMin: number = this.dataArr["ColorMin"];
    //     const _ColorText: any[] = this.dataArr["ColorText"];
    //     const _ColorInvert: boolean = this.dataArr["ColorInvert"];
    //     const _ExtrudeKey: string = this.dataArr["ExtrudeKey"];
    //     const _ExtrudeMax: number = this.dataArr["ExtrudeMax"];
    //     const _ExtrudeMin: number = this.dataArr["ExtrudeMin"];
    //     const _HeightChart: boolean = this.dataArr["HeightChart"];
    //     const _Invert: boolean = this.dataArr["Invert"];
    //     const _Scale: number = this.dataArr["Scale"];
    //     const _Filter: any[] = this.dataArr["Filter"];
    //     let _ChromaScale = chroma.scale("SPECTRAL");
    //     if(_ColorInvert === true) {_ChromaScale = chroma.scale("SPECTRAL").domain([1,0]);}
    //     let _CheckHide: boolean;
    //     if(entity.properties["TYPE"] === undefined||entity.properties["TYPE"]._value !== "STATIC"){
    //       if(_Filter.length !== 0) {
    //         _CheckHide = this.Hide(_Filter,entity,_HeightChart);
    //         if(_CheckHide === true) {
    //           if(entity.polygon !== undefined) {
    //             entity.polygon.extrudedHeight = 0;
    //             entity.polygon.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
    //             if(_HeightChart === true) {
    //               if(entity.polyline !== undefined) {entity.polyline.show = false;}
    //             }
    //           }
    //           if(entity.polyline !== undefined)  {entity.polyline.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);}
    //         }
    //       }
    //       if(_Filter.length === 0||_CheckHide === false) {
    //         if(_ColorKey !== "None") {
    //           if(typeof(_ColorText[0]) === "number") {
    //             this.colorByNum(entity,_ColorMax,_ColorMin,_ColorKey,_ChromaScale);
    //           } else {this.colorByCat(entity,_ColorText,_ColorKey,_ChromaScale);}
    //         } else {entity.polygon.material = Cesium.Color.DARKGREY;}
    //       }
    //     }else {
    //       entity.polygon.height =  entity.properties["HEIGHT"];
    //       entity.polygon.extrudedHeight = entity.properties["EXTRUHEIGHT"];
    //       const ColorValue = entity.properties["COLOR"]._value;
    //       entity.polygon.material = Cesium.Color.fromBytes(ColorValue[0], ColorValue[1], ColorValue[2], ColorValue[3]);
    //     }
    //   }
    //   //check the selected building  color before
    //   public Hide(_Filter: any[], entity, _HeightChart: boolean): boolean {
    //     let _CheckHide: boolean=false;
    //     for(const filter of _Filter) {
    //       const value = entity.properties[filter.HeightHide]._value;
    //       if(value !== undefined) {
    //         if(typeof(value) === "number") {
    //           if (this._compare(value, Number(filter.textHide), Number(filter.RelaHide))) {
    //             _CheckHide = true;
    //           }
    //         } else if(typeof(value) === "string") {
    //           if (this._compareCat(value,filter.CategaryHide, Number(filter.RelaHide))) {
    //             _CheckHide = true;
    //           }
    //         }
    //       }
    //     }
    //     return _CheckHide;
    //   }
    //   public _compare(value: number, slider: number, relation: number): boolean {
    //     switch (relation) {
    //       case 0:
    //         return value < slider;
    //       case 1:
    //         return value > slider;
    //       case 2:
    //         return value !== slider;
    //     }
    //   }
    //   public _compareCat(value: string, _Categary: string,relation: number): boolean {
    //     switch (relation) {
    //       case 0:
    //         return value ===  undefined;
    //       case 1:
    //         return value !== _Categary;
    //       case 2:
    //         return value === _Categary;
    //     }
    //   }
    //   public colorByNum(entity, max: number, min: number, _ColorKey: string, _ChromaScale: any) {
    //     if(entity.properties[_ColorKey] !== undefined) {
    //       const texts = entity.properties[_ColorKey]._value;
    //       const rgb = _ChromaScale(Number(((max-texts)/(max-min)).toFixed(2)))._rgb;
    //       if(entity.polygon !== undefined) {entity.polygon.material = Cesium.Color.fromBytes(rgb[0],rgb[1],rgb[2]);}
    //       if(entity.polyline !== undefined) {
    //         const newColor = new Cesium.Color.fromBytes(rgb[0],rgb[1],rgb[2]);
    //         entity.polyline.material.color.setValue(newColor);
    //       }
    //       if(entity.point !==undefined){
    //         const newColor = new Cesium.Color.fromBytes(rgb[0],rgb[1],rgb[2]);
    //         entity.point.color = newColor;
    //       }
    //     }else{
    //       if(entity.polygon !== undefined) {entity.polygon.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);}
    //       if(entity.polyline !== undefined) {entity.polyline.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);}
    //       if(entity.point !== undefined) {entity.point.color = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);}
    //     }
    //   }
    //   public  colorByCat(entity, _ColorText: any[], _ColorKey: string, _ChromaScale: any) {
    //     if(entity.properties[_ColorKey] !== undefined) {
    //       let initial: boolean = false;
    //       for(let j = 0;j<_ColorText.length; j++) {
    //         if(entity.properties[_ColorKey]._value === _ColorText[j]) {
    //           const rgb = _ChromaScale(1 - (j / _ColorText.length)); // _ChromaScale((j/_ColorText.length).toFixed(2));
    //           if(entity.polygon !== undefined){entity.polygon.material = Cesium.Color.fromBytes(rgb._rgb[0],rgb._rgb[1],rgb._rgb[2]);}
    //           if(entity.polyline !== undefined) {
    //             const newColor = new Cesium.Color.fromBytes(rgb[0],rgb[1],rgb[2]);
    //             entity.polyline.material.color.setValue(newColor);
    //           }
    //           if(entity.point !== undefined) {
    //             const newColor = new Cesium.Color.fromBytes(rgb[0],rgb[1],rgb[2]);
    //             entity.point.color = newColor;
    //           }
    //           initial = true;
    //         }
    //       }
    //       if(initial === false) {
    //         if(entity.polygon !== undefined){entity.polygon.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);}
    //         if(entity.polyline !== undefined) {entity.polyline.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);}
    //         if(entity.point !== undefined) {entity.point.color = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);}
    //       }
    //     }else{
    //       if(entity.polygon !== undefined) {entity.polygon.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);}
    //       if(entity.polyline !== undefined) {entity.polyline.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);}
    //       if(entity.point !== undefined) {entity.point.color = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);}
    //     }
    //   }
    //   //in viewer mode,set some attibutes to show
    // >>>>>>> upstream/master
    ViewerComponent.prototype.showAttribs = function (event) {
        var viewer = this.dataService.getViewer();
        if (this.data !== undefined && this.mode === "viewer") {
            if (this.data["cesium"] !== undefined) {
                if (this.data["cesium"].select !== undefined) {
                    if (viewer.selectedEntity !== undefined) {
                        var pickup = viewer.scene.pick(new Cesium.Cartesian2(event.clientX, event.clientY));
                        this.pickupArrs = [];
                        this.pickupArrs.push({ name: "ID", data: pickup.id.id });
                        for (var _i = 0, _a = this.data["cesium"].select; _i < _a.length; _i++) {
                            var _propertyName = _a[_i];
                            this.pickupArrs.push({ name: _propertyName, data: this.dataService.get_SelectedEntity().properties[_propertyName]._value });
                        }
                        var nameOverlay = document.getElementById("cesium-infoBox-defaultTable");
                        viewer.container.appendChild(nameOverlay);
                        nameOverlay.style.bottom = viewer.canvas.clientHeight - event.clientY + "px";
                        nameOverlay.style.left = event.clientX + "px";
                        nameOverlay.style.display = "block";
                    }
                    else {
                        document.getElementById("cesium-infoBox-defaultTable").style.display = "none";
                    }
                }
            }
        }
    };
    // save the geojson
    ViewerComponent.prototype.save_geojson = function () {
        var fileString = JSON.stringify(this.data);
        var blob = new Blob([fileString], { type: 'application/json' });
        FileUtils.downloadContent(blob, "output.geojson");
    };
    ViewerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "cesium-viewer",
            template: __webpack_require__("./src/app/mobius-cesium/viewer/viewer.component.html"),
            styles: [__webpack_require__("./src/app/mobius-cesium/viewer/viewer.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], ViewerComponent);
    return ViewerComponent;
}(__WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__["a" /* DataSubscriber */]));

//download geojson
var FileUtils = /** @class */ (function () {
    function FileUtils() {
    }
    FileUtils.downloadContent = function (blob, filename) {
        if (window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(blob, filename);
        }
        else {
            var a_1 = document.createElement('a');
            document.body.appendChild(a_1);
            var url_1 = window.URL.createObjectURL(blob);
            a_1.href = url_1;
            a_1.download = filename;
            a_1.click();
            setTimeout(function () {
                window.URL.revokeObjectURL(url_1);
                document.body.removeChild(a_1);
            }, 0);
        }
    };
    return FileUtils;
}());


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* enableProdMode */])();
}
window['CESIUM_BASE_URL'] = 'assets/cesium';
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map