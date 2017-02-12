webpackJsonp([1,4],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(256);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestService = (function () {
    function RequestService(_http) {
        this._http = _http;
    }
    RequestService.prototype.get = function (url) {
        return this._http.get(url);
    };
    RequestService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], RequestService);
    return RequestService;
    var _a;
}());
//# sourceMappingURL=C:/dev/test/mango-test/src/request.service.js.map

/***/ }),

/***/ 290:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 290;


/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(399);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/dev/test/mango-test/src/main.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* ViewEncapsulation */].None,
            template: __webpack_require__(465),
            styles: [__webpack_require__(464)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/dev/test/mango-test/src/app.component.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_index__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_index__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_index__ = __webpack_require__(403);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_index__["a" /* AppComponents */],
                __WEBPACK_IMPORTED_MODULE_7__pipes_index__["a" /* APP_PIPES */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__services_index__["a" /* Services */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/dev/test/mango-test/src/app.module.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tables_index__ = __webpack_require__(401);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponents; });

var AppComponents = [
    __WEBPACK_IMPORTED_MODULE_0__tables_index__["a" /* TABLES */]
];
//# sourceMappingURL=C:/dev/test/mango-test/src/index.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__t_users_t_users_component__ = __webpack_require__(402);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TABLES; });

var TABLES = [
    __WEBPACK_IMPORTED_MODULE_0__t_users_t_users_component__["a" /* TUsersComponent */]
];
//# sourceMappingURL=C:/dev/test/mango-test/src/index.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_request_service_request_service__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TUsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TUsersComponent = (function () {
    function TUsersComponent(_RequestService) {
        this._RequestService = _RequestService;
        this.local = {
            users: [],
            sortBy: 'name',
            sortDirection: true,
            search: null,
            excludePropsArr: ['_id', 'index']
        };
    }
    TUsersComponent.prototype.sortBy = function (prop) {
        if (this.local.sortBy === prop) {
            this.local.sortDirection = !this.local.sortDirection;
        }
        this.local.sortBy = prop;
    };
    TUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._RequestService.get('http://test.front-devs.com/fakedata/fake.json')
            .map(function (res) {
            return res.json();
        })
            .subscribe(function (data) {
            _this.local.users = data;
        });
    };
    TUsersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 't-users',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* ViewEncapsulation */].None,
            template: __webpack_require__(466),
            styles: [__webpack_require__(463)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_request_service_request_service__["a" /* RequestService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_request_service_request_service__["a" /* RequestService */]) === 'function' && _a) || Object])
    ], TUsersComponent);
    return TUsersComponent;
    var _a;
}());
//# sourceMappingURL=C:/dev/test/mango-test/src/t-users.component.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__order_by_pipe__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_pipe__ = __webpack_require__(405);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_PIPES; });


var APP_PIPES = [
    __WEBPACK_IMPORTED_MODULE_0__order_by_pipe__["a" /* OrderByPipe */],
    __WEBPACK_IMPORTED_MODULE_1__search_pipe__["a" /* SearchPipe */]
];
//# sourceMappingURL=C:/dev/test/mango-test/src/index.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderByPipe = (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (array, prop, direction) {
        array.sort(function (a, b) {
            if (a[prop] < b[prop]) {
                return direction ? -1 : 1;
            }
            else if (a[prop] > b[prop]) {
                return direction ? 1 : -1;
            }
            else {
                return 0;
            }
        });
        return array;
    };
    OrderByPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Pipe */])({ name: 'orderBy' }), 
        __metadata('design:paramtypes', [])
    ], OrderByPipe);
    return OrderByPipe;
}());
//# sourceMappingURL=C:/dev/test/mango-test/src/order-by.pipe.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (array, searchStr, excludeProps) {
        var excludeArr = excludeProps && excludeProps.length ? excludeProps : [];
        return searchStr
            ? array.filter(function (item) {
                for (var prop in item) {
                    if (item.hasOwnProperty(prop) && excludeArr.indexOf(prop) === -1) {
                        if (item[prop].toString().toLowerCase().indexOf(searchStr) !== -1) {
                            return true;
                        }
                    }
                }
            })
            : array;
    };
    SearchPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Pipe */])({ name: 'search' }), 
        __metadata('design:paramtypes', [])
    ], SearchPipe);
    return SearchPipe;
}());
//# sourceMappingURL=C:/dev/test/mango-test/src/search.pipe.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request_service_request_service__ = __webpack_require__(274);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Services; });

var Services = [
    __WEBPACK_IMPORTED_MODULE_0__request_service_request_service__["a" /* RequestService */]
];
//# sourceMappingURL=C:/dev/test/mango-test/src/index.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/dev/test/mango-test/src/environment.js.map

/***/ }),

/***/ 463:
/***/ (function(module, exports) {

module.exports = ".t-users__search {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-weight: 400;\n  font-size: 14px;\n  margin-bottom: 30px;\n}\n.t-users__field {\n  border: 1px solid #000;\n  padding: 0 10px;\n  height: 28px;\n  margin-left: 10px;\n}\n.t-users__table {\n  margin: 0 auto;\n  width: 100%;\n}\n.t-users td,\n.t-users th {\n  border: 1px solid #000;\n  padding: 5px;\n  font-size: 12px;\n}\n.t-users th {\n  cursor: pointer;\n  white-space: nowrap;\n}\n.t-users th._down:after {\n  content: '';\n  width: 6px;\n  height: 5px;\n  border-top: 5px solid #000;\n  border-left: 3px solid transparent;\n  border-right: 3px solid transparent;\n  display: inline-block;\n  vertical-align: middle;\n  margin-left: 10px;\n}\n.t-users th._up:after {\n  content: '';\n  width: 6px;\n  height: 5px;\n  border-bottom: 5px solid #000;\n  border-left: 3px solid transparent;\n  border-right: 3px solid transparent;\n  display: inline-block;\n  vertical-align: middle;\n  margin-left: 10px;\n}\n"

/***/ }),

/***/ 464:
/***/ (function(module, exports) {

module.exports = "html,body,h1,h2,h3,h4,h5,h6,p,em,strong,abbr,acronym,blockquote,q,cite,ins,del,dfn,a,div,span,pre,hr,address,br,b,i,sub,big,small,tt,table,tr,caption,thead,tbody,tfoot,col,colgroup,form,input,label,textarea,button,fieldset,legend,select,option,ul,ol,li,dl,dt,dd,code,var,samp,img,object,param,map,area {padding:0; margin:0; border:none;}\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, font, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub,  tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td, header, footer, section, aside, figure, figcaption, input {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  outline: 0;\r\n  font-size: 100%;\r\n  vertical-align: baseline;\r\n  background: transparent;\r\n}\r\nol,ul{list-style:none;}\r\ntable {border-collapse:collapse;border-spacing:0;}\r\ninput[type=button],input[type=submit], button {cursor:pointer;}\r\nbutton {border: 0;}\r\n\r\n:focus {outline: none; }\r\nbutton::-moz-focus-inner,\r\ninput[type=\"reset\"]::-moz-focus-inner,\r\ninput[type=\"button\"]::-moz-focus-inner,\r\ninput[type=\"submit\"]::-moz-focus-inner,\r\ninput[type=\"submit\"]::-moz-focus-inner,\r\ninput[type=\"file\"] > input[type=\"button\"]::-moz-focus-inner{border: none;outline: none;}\r\ninput::-ms-clear {\r\n  width : 0;\r\n  height: 0;\r\n}\r\n\r\n*,\r\n*:before,\r\n*:after {\r\n  box-sizing: border-box\r\n}\r\n\r\n\r\n.container {\r\n  max-width: 840px;\r\n  margin: 0 auto;\r\n  padding: 50px 20px;\r\n}\r\n"

/***/ }),

/***/ 465:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <t-users></t-users>\n</div>\n"

/***/ }),

/***/ 466:
/***/ (function(module, exports) {

module.exports = "<div class=\"t-users\">\r\n  <label class=\"t-users__search\">\r\n    <span class=\"t-users__search-text\">Search:</span>\r\n    <input type=\"text\"\r\n           [(ngModel)]=\"local.search\"\r\n           class=\"t-users__field\">\r\n  </label>\r\n  <table class=\"t-users__table\">\r\n    <thead>\r\n      <tr>\r\n        <th [ngClass]=\"{'_up': local.sortBy === 'name' && local.sortDirection,\r\n                        '_down': local.sortBy === 'name' && !local.sortDirection}\"\r\n            (click)=\"sortBy('name')\">Name</th>\r\n        <th [ngClass]=\"{'_up': local.sortBy === 'balance' && local.sortDirection,\r\n                        '_down': local.sortBy === 'balance' && !local.sortDirection}\"\r\n            (click)=\"sortBy('balance')\">Balance</th>\r\n        <th [ngClass]=\"{'_up': local.sortBy === 'company' && local.sortDirection,\r\n                        '_down': local.sortBy === 'company' && !local.sortDirection}\"\r\n            (click)=\"sortBy('company')\">Company</th>\r\n        <th [ngClass]=\"{'_up': local.sortBy === 'email' && local.sortDirection,\r\n                        '_down': local.sortBy === 'email' && !local.sortDirection}\"\r\n            (click)=\"sortBy('email')\">Email</th>\r\n        <th [ngClass]=\"{'_up': local.sortBy === 'address' && local.sortDirection,\r\n                        '_down': local.sortBy === 'address' && !local.sortDirection}\"\r\n            (click)=\"sortBy('address')\">Address</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let user of local.users | search:local.search:local.excludePropsArr | orderBy:local.sortBy:local.sortDirection;\">\r\n        <td>{{user.name}}</td>\r\n        <td>{{user.balance}}</td>\r\n        <td>{{user.company}}</td>\r\n        <td>{{user.email}}</td>\r\n        <td>{{user.address}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(291);


/***/ })

},[481]);
//# sourceMappingURL=main.bundle.map