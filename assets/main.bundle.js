webpackJsonp([1,4],{

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 147;


/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__ = __webpack_require__(164);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_sails__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_sails___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_sails__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(_sailsService) {
        this._sailsService = _sailsService;
        var opts = {
            url: "http://localhost:1337",
            transports: ['polling', 'websocket']
        };
        this._sailsService.connect(opts);
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(228),
        styles: [__webpack_require__(221)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_sails__["SailsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_sails__["SailsService"]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_sails__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_sails___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_sails__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_datatable__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_data_filter_pipe__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_header_header_component__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_footer_footer_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_side_bar_side_bar_component__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_aside_bar_aside_bar_component__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_user_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_user_user_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_home_home_component__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_side_bar_side_bar_component__["a" /* SideBarComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_aside_bar_aside_bar_component__["a" /* AsideBarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__pipes_data_filter_pipe__["a" /* DataFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_14__pages_user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_15__pages_home_home_component__["a" /* HomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_4_angular2_sails__["SailsModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_13__services_user_service__["a" /* UserService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_user_user_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home_home_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(154);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });



var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__pages_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'user',
        component: __WEBPACK_IMPORTED_MODULE_0__pages_user_user_component__["a" /* UserComponent */]
    }
];
var Routing = __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsideBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AsideBarComponent = (function () {
    function AsideBarComponent() {
    }
    AsideBarComponent.prototype.ngOnInit = function () {
    };
    return AsideBarComponent;
}());
AsideBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-aside-bar',
        template: __webpack_require__(229),
        styles: [__webpack_require__(222)]
    }),
    __metadata("design:paramtypes", [])
], AsideBarComponent);

//# sourceMappingURL=aside-bar.component.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(230),
        styles: [__webpack_require__(223)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(231),
        styles: [__webpack_require__(224)]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SideBarComponent = (function () {
    function SideBarComponent() {
    }
    SideBarComponent.prototype.ngOnInit = function () {
    };
    return SideBarComponent;
}());
SideBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-side-bar',
        template: __webpack_require__(232),
        styles: [__webpack_require__(225)]
    }),
    __metadata("design:paramtypes", [])
], SideBarComponent);

//# sourceMappingURL=side-bar.component.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DataFilterPipe = (function () {
    function DataFilterPipe() {
    }
    DataFilterPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) { return row.firstname.indexOf(query) > -1 || row.lastname.indexOf(query) > -1; });
        }
        return array;
    };
    return DataFilterPipe;
}());
DataFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: 'dataFilter'
    })
], DataFilterPipe);

//# sourceMappingURL=data-filter.pipe.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.prod.js.map

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 228:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"app-body\">\n  <app-side-bar></app-side-bar>\n  <main class=\"main\">\n    <router-outlet  id=\"router-outlet\"></router-outlet>\n  </main>\n  <app-aside-bar></app-aside-bar>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

module.exports = "<aside class=\"aside-menu\">\n  <ul class=\"nav nav-tabs\" role=\"tablist\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#timeline\" role=\"tab\"><i class=\"icon-list\"></i></a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" data-toggle=\"tab\" href=\"#messages\" role=\"tab\"><i class=\"icon-speech\"></i></a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" data-toggle=\"tab\" href=\"#settings\" role=\"tab\"><i class=\"icon-settings\"></i></a>\n    </li>\n  </ul>\n\n  <!-- Tab panes -->\n  <div class=\"tab-content\">\n    <div class=\"tab-pane active\" id=\"timeline\" role=\"tabpanel\">\n      <div class=\"callout m-0 py-h text-muted text-center bg-faded text-uppercase\">\n        <small><b>Today</b>\n                        </small>\n      </div>\n      <hr class=\"transparent mx-1 my-0\">\n      <div class=\"callout callout-warning m-0 py-1\">\n        <div class=\"avatar float-right\">\n          <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n        </div>\n        <div>Meeting with\n          <strong>Lucas</strong>\n        </div>\n        <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 1 - 3pm</small>\n        <small class=\"text-muted\"><i class=\"icon-location-pin\"></i>&nbsp; Palo Alto, CA</small>\n      </div>\n      <hr class=\"mx-1 my-0\">\n      <div class=\"callout callout-info m-0 py-1\">\n        <div class=\"avatar float-right\">\n          <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n        </div>\n        <div>Skype with\n          <strong>Megan</strong>\n        </div>\n        <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 4 - 5pm</small>\n        <small class=\"text-muted\"><i class=\"icon-social-skype\"></i>&nbsp; On-line</small>\n      </div>\n      <hr class=\"transparent mx-1 my-0\">\n      <div class=\"callout m-0 py-h text-muted text-center bg-faded text-uppercase\">\n        <small><b>Tomorrow</b>\n                        </small>\n      </div>\n      <hr class=\"transparent mx-1 my-0\">\n      <div class=\"callout callout-danger m-0 py-1\">\n        <div>New UI Project -\n          <strong>deadline</strong>\n        </div>\n        <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 10 - 11pm</small>\n        <small class=\"text-muted\"><i class=\"icon-home\"></i>&nbsp; creativeLabs HQ</small>\n        <div class=\"avatars-stack mt-h\">\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n        </div>\n      </div>\n      <hr class=\"mx-1 my-0\">\n      <div class=\"callout callout-success m-0 py-1\">\n        <div>\n          <strong>#10 Startups.Garden</strong>Meetup</div>\n        <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 1 - 3pm</small>\n        <small class=\"text-muted\"><i class=\"icon-location-pin\"></i>&nbsp; Palo Alto, CA</small>\n      </div>\n      <hr class=\"mx-1 my-0\">\n      <div class=\"callout callout-primary m-0 py-1\">\n        <div>\n          <strong>Team meeting</strong>\n        </div>\n        <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 4 - 6pm</small>\n        <small class=\"text-muted\"><i class=\"icon-home\"></i>&nbsp; creativeLabs HQ</small>\n        <div class=\"avatars-stack mt-h\">\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/8.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n        </div>\n      </div>\n      <hr class=\"mx-1 my-0\">\n    </div>\n    <div class=\"tab-pane p-1\" id=\"messages\" role=\"tabpanel\">\n      <div class=\"message\">\n        <div class=\"py-1 pb-3 mr-1 float-left\">\n          <div class=\"avatar\">\n            <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n            <span class=\"avatar-status badge-success\"></span>\n          </div>\n        </div>\n        <div>\n          <small class=\"text-muted\">Lukasz Holeczek</small>\n          <small class=\"text-muted float-right mt-q\">1:52 PM</small>\n        </div>\n        <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n        <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n      </div>\n      <hr>\n      <div class=\"message\">\n        <div class=\"py-1 pb-3 mr-1 float-left\">\n          <div class=\"avatar\">\n            <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n            <span class=\"avatar-status badge-success\"></span>\n          </div>\n        </div>\n        <div>\n          <small class=\"text-muted\">Lukasz Holeczek</small>\n          <small class=\"text-muted float-right mt-q\">1:52 PM</small>\n        </div>\n        <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n        <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n      </div>\n      <hr>\n      <div class=\"message\">\n        <div class=\"py-1 pb-3 mr-1 float-left\">\n          <div class=\"avatar\">\n            <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n            <span class=\"avatar-status badge-success\"></span>\n          </div>\n        </div>\n        <div>\n          <small class=\"text-muted\">Lukasz Holeczek</small>\n          <small class=\"text-muted float-right mt-q\">1:52 PM</small>\n        </div>\n        <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n        <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n      </div>\n      <hr>\n      <div class=\"message\">\n        <div class=\"py-1 pb-3 mr-1 float-left\">\n          <div class=\"avatar\">\n            <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n            <span class=\"avatar-status badge-success\"></span>\n          </div>\n        </div>\n        <div>\n          <small class=\"text-muted\">Lukasz Holeczek</small>\n          <small class=\"text-muted float-right mt-q\">1:52 PM</small>\n        </div>\n        <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n        <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n      </div>\n      <hr>\n      <div class=\"message\">\n        <div class=\"py-1 pb-3 mr-1 float-left\">\n          <div class=\"avatar\">\n            <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n            <span class=\"avatar-status badge-success\"></span>\n          </div>\n        </div>\n        <div>\n          <small class=\"text-muted\">Lukasz Holeczek</small>\n          <small class=\"text-muted float-right mt-q\">1:52 PM</small>\n        </div>\n        <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n        <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n      </div>\n    </div>\n    <div class=\"tab-pane p-1\" id=\"settings\" role=\"tabpanel\">\n      <h6>Settings</h6>\n\n      <div class=\"aside-options\">\n        <div class=\"clearfix mt-2\">\n          <small><b>Option 1</b>\n                            </small>\n          <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\n                                <input type=\"checkbox\" class=\"switch-input\" checked=\"\">\n                                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                                <span class=\"switch-handle\"></span>\n                            </label>\n        </div>\n        <div>\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\n        </div>\n      </div>\n\n      <div class=\"aside-options\">\n        <div class=\"clearfix mt-1\">\n          <small><b>Option 2</b>\n                            </small>\n          <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\n                                <input type=\"checkbox\" class=\"switch-input\">\n                                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                                <span class=\"switch-handle\"></span>\n                            </label>\n        </div>\n        <div>\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\n        </div>\n      </div>\n\n      <div class=\"aside-options\">\n        <div class=\"clearfix mt-1\">\n          <small><b>Option 3</b>\n                            </small>\n          <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\n                                <input type=\"checkbox\" class=\"switch-input\">\n                                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                                <span class=\"switch-handle\"></span>\n                            </label>\n        </div>\n      </div>\n\n      <div class=\"aside-options\">\n        <div class=\"clearfix mt-1\">\n          <small><b>Option 4</b>\n                            </small>\n          <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\n                                <input type=\"checkbox\" class=\"switch-input\" checked=\"\">\n                                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                                <span class=\"switch-handle\"></span>\n                            </label>\n        </div>\n      </div>\n\n      <hr>\n      <h6>System Utilization</h6>\n\n      <div class=\"text-uppercase mb-q mt-2\">\n        <small><b>CPU Usage</b>\n                        </small>\n      </div>\n      <div class=\"progress progress-xs\">\n        <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n      </div>\n      <small class=\"text-muted\">348 Processes. 1/4 Cores.</small>\n\n      <div class=\"text-uppercase mb-q mt-h\">\n        <small><b>Memory Usage</b>\n                        </small>\n      </div>\n      <div class=\"progress progress-xs\">\n        <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 70%\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n      </div>\n      <small class=\"text-muted\">11444GB/16384MB</small>\n\n      <div class=\"text-uppercase mb-q mt-h\">\n        <small><b>SSD 1 Usage</b>\n                        </small>\n      </div>\n      <div class=\"progress progress-xs\">\n        <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 95%\" aria-valuenow=\"95\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n      </div>\n      <small class=\"text-muted\">243GB/256GB</small>\n\n      <div class=\"text-uppercase mb-q mt-h\">\n        <small><b>SSD 2 Usage</b>\n                        </small>\n      </div>\n      <div class=\"progress progress-xs\">\n        <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 10%\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n      </div>\n      <small class=\"text-muted\">25GB/256GB</small>\n    </div>\n  </div>\n</aside>"

/***/ }),

/***/ 230:
/***/ (function(module, exports) {

module.exports = "<footer class=\"app-footer\">\n  <a href=\"https://genesisui.com/\">Clever</a> © 2017 creativeLabs.\n  <span class=\"float-right\">\n            Powered by <a href=\"https://genesisui.com/\">GenesisUI</a>\n        </span>\n</footer>"

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header navbar\">\n        <button class=\"navbar-toggler mobile-sidebar-toggler hidden-lg-up\" type=\"button\">☰</button>\n        <a class=\"navbar-brand\" href=\"#\"></a>\n        <ul class=\"nav navbar-nav hidden-md-down b-r-1\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link navbar-toggler sidebar-toggler\" href=\"#\">☰</a>\n            </li>\n\n        </ul>\n        <form class=\"form-inline float-left b-r-1 px-2 hidden-md-down\">\n            <i class=\"fa fa-search\"></i>\n            <input class=\"form-control\" type=\"text\" placeholder=\"Search...\">\n        </form>\n        <ul class=\"nav navbar-nav ml-auto\">\n            <li class=\"nav-item dropdown hidden-md-down pr-2\">\n                <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <img src=\"assets/img/flags/United-Kingdom.png\" class=\"img-flag\" alt=\"English\" height=\"24\">\n                </a>\n                <div class=\"dropdown-menu dropdown-menu-right\">\n                    <div class=\"dropdown-header text-center\">\n                        <strong>Choose language</strong>\n                    </div>\n                    <a class=\"dropdown-item\" href=\"#\">\n                        <img src=\"assets/img/flags/Poland.png\" class=\"img-flag\" alt=\"Polish\" height=\"24\">Polish</a>\n                    <a class=\"dropdown-item\" href=\"#\">\n                        <img src=\"assets/img/flags/United-Kingdom.png\" class=\"img-flag\" alt=\"English\" height=\"24\">English</a>\n                    <a class=\"dropdown-item\" href=\"#\">\n                        <img src=\"assets/img/flags/Spain.png\" class=\"img-flag\" alt=\"Español\" height=\"24\">Español</a>\n                </div>\n            </li>\n            <li class=\"nav-item dropdown hidden-md-down\">\n                <a class=\"nav-link nav-pill\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <i class=\"icon-bell\"></i>\n                    <span class=\"badge badge-pill badge-danger\">5</span>\n                </a>\n                <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-lg\">\n\n                    <div class=\"dropdown-header text-center\">\n                        <strong>You have 5 notifications</strong>\n                    </div>\n\n                    <a href=\"#\" class=\"dropdown-item\">\n                        <i class=\"icon-user-follow text-success\"></i> New user registered\n                    </a>\n                    <a href=\"#\" class=\"dropdown-item\">\n                        <i class=\"icon-user-unfollow text-danger\"></i> User deleted\n                    </a>\n                    <a href=\"#\" class=\"dropdown-item\">\n                        <i class=\"icon-chart text-info\"></i> Sales report is ready\n                    </a>\n                    <a href=\"#\" class=\"dropdown-item\">\n                        <i class=\"icon-basket-loaded text-primary\"></i> New client\n                    </a>\n                    <a href=\"#\" class=\"dropdown-item\">\n                        <i class=\"icon-speedometer text-warning\"></i> Server overloaded\n                    </a>\n\n                    <div class=\"dropdown-header text-center\">\n                        <strong>Server</strong>\n                    </div>\n\n                    <a href=\"#\" class=\"dropdown-item\">\n                        <div class=\"text-uppercase mb-q\">\n                            <small><b>CPU Usage</b>\n                            </small>\n                        </div>\n                        <span class=\"progress progress-xs\">\n                            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                        </span>\n                        <small class=\"text-muted\">348 Processes. 1/4 Cores.</small>\n                    </a>\n                    <a href=\"#\" class=\"dropdown-item\">\n                        <div class=\"text-uppercase mb-q\">\n                            <small><b>Memory Usage</b>\n                            </small>\n                        </div>\n                        <span class=\"progress progress-xs\">\n                            <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 70%\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                        </span>\n                        <small class=\"text-muted\">11444GB/16384MB</small>\n                    </a>\n                    <a href=\"#\" class=\"dropdown-item\">\n                        <div class=\"text-uppercase mb-q\">\n                            <small><b>SSD 1 Usage</b>\n                            </small>\n                        </div>\n                        <span class=\"progress progress-xs\">\n                            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 95%\" aria-valuenow=\"95\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                        </span>\n                        <small class=\"text-muted\">243GB/256GB</small>\n                    </a>\n                </div>\n            </li>\n            <li class=\"nav-item dropdown hidden-md-down\">\n                <a class=\"nav-link nav-pill\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <i class=\"icon-list\"></i>\n                    <span class=\"badge badge-pill badge-warning\">15</span>\n                </a>\n                <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-lg\">\n                    <div class=\"dropdown-header text-center\">\n                        <strong>You have 5 pending tasks</strong>\n                    </div>\n                    <a href=\"#\" class=\"dropdown-item\">\n                        <div class=\"small mb-q\">Upgrade NPM &amp; Bower\n                            <span class=\"float-right\">\n                                <strong>0%</strong>\n                            </span>\n                        </div>\n                        <span class=\"progress progress-xs\">\n                            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 0%\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                        </span>\n                    </a>\n                    <a href=\"#\" class=\"dropdown-item\">\n                        <div class=\"small mb-q\">ReactJS Version\n                            <span class=\"float-right\">\n                                <strong>25%</strong>\n                            </span>\n                        </div>\n                        <span class=\"progress progress-xs\">\n                            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                        </span>\n                    </a>\n                    <a href=\"#\" class=\"dropdown-item\">\n                        <div class=\"small mb-q\">VueJS Version\n                            <span class=\"float-right\">\n                                <strong>50%</strong>\n                            </span>\n                        </div>\n                        <span class=\"progress progress-xs\">\n                            <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                        </span>\n                    </a>\n                    <a href=\"#\" class=\"dropdown-item\">\n                        <div class=\"small mb-q\">Add new layouts\n                            <span class=\"float-right\">\n                                <strong>75%</strong>\n                            </span>\n                        </div>\n                        <span class=\"progress progress-xs\">\n                            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 75%\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                        </span>\n                    </a>\n                    <a href=\"#\" class=\"dropdown-item\">\n                        <div class=\"small mb-q\">Angular 2 Cli Version\n                            <span class=\"float-right\">\n                                <strong>100%</strong>\n                            </span>\n                        </div>\n                        <span class=\"progress progress-xs\">\n                            <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 100%\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                        </span>\n                    </a>\n                    <a href=\"#\" class=\"dropdown-item text-center\">\n                        <strong>View all tasks</strong>\n                    </a>\n                </div>\n            </li>\n            <li class=\"nav-item dropdown hidden-md-down\">\n                <a class=\"nav-link nav-pill\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <i class=\"icon-envelope-letter\"></i>\n                    <span class=\"badge badge-pill badge-info\">7</span>\n                </a>\n                <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-lg\">\n\n                    <div class=\"dropdown-header text-center\">\n                        <strong>You have 4 messages</strong>\n                    </div>\n\n                    <a href=\"#\" class=\"dropdown-item\">\n                        <div class=\"message\">\n                            <div class=\"py-1 mr-1 float-left\">\n                                <div class=\"avatar\">\n                                    <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                                    <span class=\"avatar-status badge-success\"></span>\n                                </div>\n                            </div>\n                            <div>\n                                <small class=\"text-muted\">John Doe</small>\n                                <small class=\"text-muted float-right mt-q\">Just now</small>\n                            </div>\n                            <div class=\"text-truncate font-weight-bold\">\n                                <span class=\"fa fa-exclamation text-danger\"></span>Important message</div>\n                            <div class=\"small text-muted text-truncate\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</div>\n                        </div>\n                    </a>\n                    <a href=\"#\" class=\"dropdown-item\">\n                        <div class=\"message\">\n                            <div class=\"py-1 mr-1 float-left\">\n                                <div class=\"avatar\">\n                                    <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                                    <span class=\"avatar-status badge-warning\"></span>\n                                </div>\n                            </div>\n                            <div>\n                                <small class=\"text-muted\">John Doe</small>\n                                <small class=\"text-muted float-right mt-q\">5 minutes ago</small>\n                            </div>\n                            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n                            <div class=\"small text-muted text-truncate\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</div>\n                        </div>\n                    </a>\n                    <a href=\"#\" class=\"dropdown-item\">\n                        <div class=\"message\">\n                            <div class=\"py-1 mr-1 float-left\">\n                                <div class=\"avatar\">\n                                    <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                                    <span class=\"avatar-status badge-danger\"></span>\n                                </div>\n                            </div>\n                            <div>\n                                <small class=\"text-muted\">John Doe</small>\n                                <small class=\"text-muted float-right mt-q\">1:52 PM</small>\n                            </div>\n                            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n                            <div class=\"small text-muted text-truncate\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</div>\n                        </div>\n                    </a>\n                    <a href=\"#\" class=\"dropdown-item\">\n                        <div class=\"message\">\n                            <div class=\"py-1 mr-1 float-left\">\n                                <div class=\"avatar\">\n                                    <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                                    <span class=\"avatar-status badge-info\"></span>\n                                </div>\n                            </div>\n                            <div>\n                                <small class=\"text-muted\">John Doe</small>\n                                <small class=\"text-muted float-right mt-q\">4:03 PM</small>\n                            </div>\n                            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n                            <div class=\"small text-muted text-truncate\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</div>\n                        </div>\n                    </a>\n\n                    <a href=\"#\" class=\"dropdown-item text-center\">\n                        <strong>View all messages</strong>\n                    </a>\n                </div>\n            </li>\n            <li class=\"nav-item hidden-md-down\">\n                <a class=\"nav-link nav-pill\" href=\"#\"><i class=\"icon-location-pin\"></i></a>\n            </li>\n            <li class=\"nav-item dropdown\">\n                <a class=\"nav-link nav-pill avatar\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                    <span class=\"badge badge-pill badge-danger\">9</span>\n                </a>\n                <div class=\"dropdown-menu dropdown-menu-right\">\n\n                    <div class=\"dropdown-header text-center\">\n                        <strong>Account</strong>\n                    </div>\n\n                    <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-bell-o\"></i> Updates<span class=\"badge badge-info\">42</span></a>\n                    <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-envelope-o\"></i> Messages<span class=\"badge badge-success\">42</span></a>\n                    <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-tasks\"></i> Tasks<span class=\"badge badge-danger\">42</span></a>\n                    <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-comments\"></i> Comments<span class=\"badge badge-warning\">42</span></a>\n\n                    <div class=\"dropdown-header text-center\">\n                        <strong>Settings</strong>\n                    </div>\n\n                    <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-user\"></i> Profile</a>\n                    <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-wrench\"></i> Settings</a>\n                    <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-usd\"></i> Payments<span class=\"badge badge-default\">42</span></a>\n                    <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-file\"></i> Projects<span class=\"badge badge-primary\">42</span></a>\n                    <div class=\"divider\"></div>\n                    <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-shield\"></i> Lock Account</a>\n                    <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-lock\"></i> Logout</a>\n                </div>\n            </li>\n            <li class=\"nav-item hidden-md-down\">\n                <a class=\"nav-link navbar-toggler aside-menu-toggler\" href=\"#\">☰</a>\n            </li>\n\n        </ul>\n    </header>"

/***/ }),

/***/ 232:
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\">\n  <nav class=\"sidebar-nav\">\n    <ul class=\"nav\">\n      <li class=\"nav-title text-center\">\n        <span>Dashboard</span>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/']\" href=\"#\"><i class=\"icon-speedometer\"></i> Home <span class=\"badge badge-info\">Comming soon</span></a>\n      </li>\n\n      <li class=\"divider\"></li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/user']\" href=\"#\"><i class=\"icon-people\"></i> Users </a>\n      </li>\n      <li class=\"divider\"></li>\n    </ul>\n  </nav>\n</div>"

/***/ }),

/***/ 233:
/***/ (function(module, exports) {

module.exports = "<!-- Breadcrumb -->\n<ol class=\"breadcrumb mb-0\">\n  <li class=\"breadcrumb-item\">Admin</li>\n  <li class=\"breadcrumb-item\"><a href=\"#\" [routerLink]=\"['/']\">Dahboard</a>\n  </li>\n  <li class=\"breadcrumb-item active\">Home</li>\n</ol>\n<div class=\"container-fluid\">\n  <div class=\"animated fadeIn\">\n    <div class=\"row\">\n      <div class=\"card\" style=\"width: 100%;text-align: center;\">\n        <div class=\"card-block \">\n          <h3>This page is comming soon !!</h3>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-6 col-lg-3\">\n        <div class=\"card card-inverse card-primary\">\n          <div class=\"card-block\">\n            <div class=\"h4 m-0\">89.9%</div>\n            <div>Lorem ipsum...</div>\n            <div class=\"progress progress-white progress-xs my-1\">\n              <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n            </div>\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet enim.</small>\n          </div>\n        </div>\n      </div>\n      <!--/.col-->\n      <div class=\"col-sm-6 col-lg-3\">\n        <div class=\"card card-inverse card-warning\">\n          <div class=\"card-block\">\n            <div class=\"h4 m-0\">12.124</div>\n            <div>Lorem ipsum...</div>\n            <div class=\"progress progress-white progress-xs my-1\">\n              <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n            </div>\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet enim.</small>\n          </div>\n        </div>\n      </div>\n      <!--/.col-->\n      <div class=\"col-sm-6 col-lg-3\">\n        <div class=\"card card-inverse card-danger\">\n          <div class=\"card-block\">\n            <div class=\"h4 m-0\">$98.111,00</div>\n            <div>Lorem ipsum...</div>\n            <div class=\"progress progress-white progress-xs my-1\">\n              <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n            </div>\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet enim.</small>\n          </div>\n        </div>\n      </div>\n      <!--/.col-->\n      <div class=\"col-sm-6 col-lg-3\">\n        <div class=\"card card-inverse card-info\">\n          <div class=\"card-block\">\n            <div class=\"h4 m-0\">2 TB</div>\n            <div>Lorem ipsum...</div>\n            <div class=\"progress progress-white progress-xs my-1\">\n              <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n            </div>\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet enim.</small>\n          </div>\n        </div>\n      </div>\n      <!--/.col-->\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-6 col-lg-3\">\n        <div class=\"card\">\n          <div class=\"card-block p-1 clearfix\">\n            <i class=\"fa fa-cogs bg-primary p-1 font-2xl mr-1 float-left\"></i>\n            <div class=\"h5 text-primary mt-h mb-0\">$1.999,50</div>\n            <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\n          </div>\n        </div>\n      </div>\n      <!--/.col-->\n      <div class=\"col-sm-6 col-lg-3\">\n        <div class=\"card\">\n          <div class=\"card-block p-1 clearfix\">\n            <i class=\"fa fa-laptop bg-info p-1 font-2xl mr-1 float-left\"></i>\n            <div class=\"h5 text-primary mt-h mb-0\">$1.999,50</div>\n            <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\n          </div>\n        </div>\n      </div>\n      <!--/.col-->\n      <div class=\"col-sm-6 col-lg-3\">\n        <div class=\"card\">\n          <div class=\"card-block p-1 clearfix\">\n            <i class=\"fa fa-moon-o bg-warning p-1 font-2xl mr-1 float-left\"></i>\n            <div class=\"h5 text-primary mt-h mb-0\">$1.999,50</div>\n            <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\n          </div>\n        </div>\n      </div>\n      <!--/.col-->\n      <div class=\"col-sm-6 col-lg-3\">\n        <div class=\"card\">\n          <div class=\"card-block p-1 clearfix\">\n            <i class=\"fa fa-bell bg-danger p-1 font-2xl mr-1 float-left\"></i>\n            <div class=\"h5 text-primary mt-h mb-0\">$1.999,50</div>\n            <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\n          </div>\n        </div>\n      </div>\n      <!--/.col-->\n      <div class=\"col-sm-6 col-lg-3\">\n        <div class=\"card\">\n          <div class=\"card-block p-1 clearfix\">\n            <i class=\"fa fa-cogs bg-primary p-1 font-2xl mr-1 float-left\"></i>\n            <div class=\"h5 text-primary mt-h mb-0\">$1.999,50</div>\n            <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\n          </div>\n          <div class=\"card-footer px-1 py-h\">\n            <a class=\"font-weight-bold font-xs btn-block text-muted\" href=\"#\">View More <i class=\"fa fa-angle-right float-right font-lg\"></i></a>\n          </div>\n        </div>\n      </div>\n      <!--/.col-->\n      <div class=\"col-sm-6 col-lg-3\">\n        <div class=\"card\">\n          <div class=\"card-block p-1 clearfix\">\n            <i class=\"fa fa-laptop bg-info p-1 font-2xl mr-1 float-left\"></i>\n            <div class=\"h5 text-primary mt-h mb-0\">$1.999,50</div>\n            <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\n          </div>\n          <div class=\"card-footer px-1 py-h\">\n            <a class=\"font-weight-bold font-xs btn-block text-muted\" href=\"#\">View More <i class=\"fa fa-angle-right float-right font-lg\"></i></a>\n          </div>\n        </div>\n      </div>\n      <!--/.col-->\n      <div class=\"col-sm-6 col-lg-3\">\n        <div class=\"card\">\n          <div class=\"card-block p-1 clearfix\">\n            <i class=\"fa fa-moon-o bg-warning p-1 font-2xl mr-1 float-left\"></i>\n            <div class=\"h5 text-primary mt-h mb-0\">$1.999,50</div>\n            <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\n          </div>\n          <div class=\"card-footer px-1 py-h\">\n            <a class=\"font-weight-bold font-xs btn-block text-muted\" href=\"#\">View More <i class=\"fa fa-angle-right float-right font-lg\"></i></a>\n          </div>\n        </div>\n      </div>\n      <!--/.col-->\n      <div class=\"col-sm-6 col-lg-3\">\n        <div class=\"card\">\n          <div class=\"card-block p-1 clearfix\">\n            <i class=\"fa fa-bell bg-danger p-1 font-2xl mr-1 float-left\"></i>\n            <div class=\"h5 text-primary mt-h mb-0\">$1.999,50</div>\n            <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\n          </div>\n          <div class=\"card-footer px-1 py-h\">\n            <a class=\"font-weight-bold font-xs btn-block text-muted\" href=\"#\">View More <i class=\"fa fa-angle-right float-right font-lg\"></i></a>\n          </div>\n        </div>\n      </div>\n      <!--/.col-->\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 234:
/***/ (function(module, exports) {

module.exports = "<!-- Breadcrumb -->\n    <ol class=\"breadcrumb mb-0\">\n      <li class=\"breadcrumb-item\">Admin</li>\n      <li class=\"breadcrumb-item\"><a [routerLink]=\"['/']\" href=\"#\">Dahboard</a>\n      </li>\n      <li class=\"breadcrumb-item active\">Users</li>\n    </ol>\n    <div class=\"container-fluid\">\n      <div class=\"animated fadeIn\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <i class=\"fa fa-edit\"></i>Angular DataTables\n            <div class=\"card-actions\">\n              <a href=\"#\">\n                <small class=\"text-muted\">Users</small>\n              </a>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-block\">\n          <table class=\"table table-striped table-bordered datatable\" [mfData]=\"users | dataFilter : filterQuery\" #mf=\"mfDataTable\"\n            [mfRowsOnPage]=\"rowsOnPage\">\n            <thead>\n              <tr>\n                <th colspan=\"4\">\n                  Search by Name:\n                  <input class=\"form-control\" [(ngModel)]=\"filterQuery\" />\n                </th>\n                <th colspan=\"1\">\n                  <a class=\"btn btn-success\" style=\"float: right;\" href=\"#\" data-toggle=\"modal\" data-target=\"#createModal\">\n                    <i class=\"fa fa-plus \"></i>\n                  </a>\n                </th>\n              </tr>\n              <tr>\n                <th>FirstName</th>\n                <th>LastName</th>\n                <th>Email</th>\n                <th>Birthday</th>\n                <th>Actions</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let item of mf.data\">\n                <td>{{ item.firstname }}</td>\n                <td>{{ item.lastname }}</td>\n                <td>{{ item.email }}</td>\n                <td>{{ item.birthDate }}</td>\n                <td>\n                  <a class=\"btn btn-warning\" (click)=\"selectedUser=item\" data-toggle=\"modal\" data-target=\"#updateModal\" href=\"#\">\n                    <i class=\"fa fa-edit \"></i>\n                  </a>\n                  <a class=\"btn btn-danger\" (click)=\"selectedUser=item\" data-toggle=\"modal\" data-target=\"#deleteModal\" href=\"#\">\n                    <i class=\"fa fa-trash-o \"></i>\n                  </a>\n                </td>\n              </tr>\n            </tbody>\n\n            <tfoot>\n              <tr>\n                <td colspan=\"5\">\n\n                  <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\">\n\n                  </mfBootstrapPaginator>\n                  Max rows on one page*\n                </td>\n              </tr>\n            </tfoot>\n          </table>\n        </div>\n      </div>\n      <div class=\"modal fade\" id=\"createModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title\">New user</h4>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                                    <span aria-hidden=\"true\">×</span>\n                                </button>\n            </div>\n            <div class=\"modal-body\">\n              <div class=\"card\">\n                <div class=\"card-block\">\n\n                  <div class=\"form-group\">\n                    <label for=\"company\">FirstName</label>\n                    <input [(ngModel)]=\"newUser.firstname\" name=\"name\" type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Enter your user name\">\n                  </div>\n\n                  <div class=\"row\">\n\n                    <div class=\"form-group col-sm-8\">\n                      <label for=\"vat\">LastName</label>\n                    <input [(ngModel)]=\"newUser.lastname\" name=\"login\" type=\"text\" class=\"form-control\" id=\"login\" placeholder=\"Enter your user login\">\n                    </div>\n\n                    <div class=\"form-group col-sm-4\">\n                     <label for=\"street\">Email</label>\n                    <input [(ngModel)]=\"newUser.email\" name=\"email\" type=\"email\" class=\"form-control\" id=\"pass\" placeholder=\"Enter your user password\">\n                    </div>\n\n                  </div>\n                  <!--/.row-->\n                </div>\n              </div>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n              <button type=\"button\" (click)=\"saveUser()\" data-dismiss=\"modal\" class=\"btn btn-primary\">Save changes</button>\n            </div>\n          </div>\n          <!-- /.modal-content -->\n        </div>\n        <!-- /.modal-dialog -->\n      </div>\n      <div class=\"modal fade\" id=\"updateModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Edit user</h4>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                                    <span aria-hidden=\"true\">×</span>\n                                </button>\n            </div>\n            <div class=\"modal-body\">\n              <div class=\"card\">\n                <div class=\"card-block\">\n\n                  <div class=\"form-group\">\n                    <label for=\"company\">FirstName</label>\n                    <input [(ngModel)]=\"selectedUser.firstname\" name=\"name\" type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Enter your user name\">\n                  </div>\n\n                  <div class=\"row\">\n\n                    <div class=\"form-group col-sm-8\">\n                      <label for=\"vat\">LastName</label>\n                    <input [(ngModel)]=\"selectedUser.lastname\" name=\"login\" type=\"text\" class=\"form-control\" id=\"login\" placeholder=\"Enter your user login\">\n                    </div>\n\n                    <div class=\"form-group col-sm-4\">\n                     <label for=\"street\">Email</label>\n                    <input [(ngModel)]=\"selectedUser.email\" name=\"pass\" type=\"email\" class=\"form-control\" id=\"pass\" placeholder=\"Enter your user password\">\n                    </div>\n\n                  </div>\n                  <!--/.row-->\n                </div>\n              </div>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n              <button type=\"button\" (click)=\"editUser()\" data-dismiss=\"modal\" class=\"btn btn-primary\">Save changes</button>\n            </div>\n          </div>\n          <!-- /.modal-content -->\n        </div>\n        <!-- /.modal-dialog -->\n      </div>\n      <div class=\"modal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Destroy user</h4>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                                    <span aria-hidden=\"true\">×</span>\n                                </button>\n            </div>\n            <div class=\"modal-body\">\n              <div class=\"card\">\n                <div class=\"card-block\">\n                  <h6>Are you shoure of deleting user <strong>{{ selectedUser.email }} ??</strong></h6>\n                </div>\n              </div>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n              <button type=\"button\" (click)=\"deleteUser()\" data-dismiss=\"modal\" class=\"btn btn-danger\">Yes, delete</button>\n            </div>\n          </div>\n          <!-- /.modal-content -->\n        </div>\n        <!-- /.modal-dialog -->\n      </div>\n    </div>\n"

/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(148);


/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        };
        toastr["success"]("Welcom to your Dshboard Admin ... Enjoy it !!");
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(233),
        styles: [__webpack_require__(226)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_sails__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_sails___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_sails__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__(162);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserComponent = (function () {
    function UserComponent(_sailsService, _userService) {
        var _this = this;
        this._sailsService = _sailsService;
        this._userService = _userService;
        this.filterQuery = "";
        this.rowsOnPage = 3;
        this.title = 'app works!';
        this.users = [];
        this.newUser = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]();
        this.selectedUser = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]();
        this._sailsService.get("/user").subscribe(function (value) { _this.users = value.data.reverse(); }, function (error) { console.log(error); });
        this._sailsService.on("user").subscribe(function (event) { _this.handleUserEvent(event); }, function (error) { console.log(error); });
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.handleUserEvent = function (event) {
        var _this = this;
        //console.log(event);
        switch (event.verb) {
            case "created":
                this.users.unshift(event.data);
                break;
            case "updated":
                var index = this.users.findIndex(function (x) { return x.id === event.previous.id; });
                Object.keys(event.data).forEach(function (element) {
                    _this.users[index][element] = event.data[element];
                });
                break;
            case "destroyed":
                this.users = this.users.filter(function (u) { return u.id !== event.previous.id; });
                break;
            default:
                break;
        }
    };
    UserComponent.prototype.saveUser = function () {
        this._userService.addUser(this.newUser)
            .subscribe(function (data) { console.log(data); }, function (error) { console.log(error); });
        this.newUser = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]();
    };
    UserComponent.prototype.editUser = function () {
        var id = this.selectedUser.id;
        this._userService.editUser(id, this.selectedUser)
            .subscribe(function (data) { console.log(data); }, function (error) { console.log(error); });
    };
    UserComponent.prototype.deleteUser = function () {
        var id = this.selectedUser.id;
        this._userService.deleteUser(id)
            .subscribe(function (data) { console.log(data); }, function (error) { console.log(error); });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user',
        template: __webpack_require__(234),
        styles: [__webpack_require__(227)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_sails__["SailsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_sails__["SailsService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object])
], UserComponent);

var _a, _b;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.userApi = 'http://localhost:1337/user'; // URL to web API
    }
    UserService.prototype.addUser = function (user) {
        user.birthDate = Date.now().toString();
        return this.http.post(this.userApi, user)
            .map(this.extractObjectData)
            .catch(this.handleError);
    };
    UserService.prototype.editUser = function (id, update) {
        return this.http.put(this.userApi + "/" + id, update)
            .map(this.extractObjectData)
            .catch(this.handleError);
    };
    UserService.prototype.deleteUser = function (id) {
        return this.http.delete(this.userApi + "/" + id)
            .map(this.extractObjectData)
            .catch(this.handleError);
    };
    UserService.prototype.extractArrayData = function (res) {
        var body = res.json();
        return body || [];
    };
    UserService.prototype.extractObjectData = function (res) {
        var body = res.json();
        return body || {};
    };
    UserService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ })

},[500]);
//# sourceMappingURL=main.bundle.js.map