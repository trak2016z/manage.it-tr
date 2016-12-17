(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	__webpack_require__(2);
	var core_1 = __webpack_require__(3);
	var angular2_universal_1 = __webpack_require__(4);
	var app_module_1 = __webpack_require__(5);
	core_1.enableProdMode();
	var platform = angular2_universal_1.platformNodeDynamic();
	function default_1(params) {
	    return new Promise(function (resolve, reject) {
	        var requestZone = Zone.current.fork({
	            name: 'angular-universal request',
	            properties: {
	                baseUrl: '/',
	                requestUrl: params.url,
	                originUrl: params.origin,
	                preboot: false,
	                // TODO: Render just the <app> component instead of wrapping it inside an extra HTML document
	                // Waiting on https://github.com/angular/universal/issues/347
	                document: '<!DOCTYPE html><html><head></head><body><app></app></body></html>'
	            },
	            onHandleError: function (parentZone, currentZone, targetZone, error) {
	                // If any error occurs while rendering the module, reject the whole operation
	                reject(error);
	                return true;
	            }
	        });
	        return requestZone.run(function () { return platform.serializeModule(app_module_1.AppModule); }).then(function (html) {
	            resolve({ html: html });
	        }, reject);
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = default_1;


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal-polyfills");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("zone.js");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("@angular/core");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var angular2_universal_1 = __webpack_require__(4);
	var app_component_1 = __webpack_require__(7);
	var navmenu_component_1 = __webpack_require__(12);
	var home_component_1 = __webpack_require__(20);
	var fetchdata_component_1 = __webpack_require__(22);
	var counter_component_1 = __webpack_require__(24);
	var registration_component_1 = __webpack_require__(26);
	var forms_1 = __webpack_require__(27);
	var login_component_1 = __webpack_require__(31);
	var board_component_1 = __webpack_require__(35);
	var account_service_1 = __webpack_require__(13);
	var httpClient_service_1 = __webpack_require__(14);
	var utility_service_1 = __webpack_require__(16);
	var new_project_component_1 = __webpack_require__(40);
	var project_service_1 = __webpack_require__(36);
	var rowspipe_1 = __webpack_require__(44);
	var project_component_1 = __webpack_require__(45);
	var AppModule = (function () {
	    function AppModule(accountService) {
	        this.accountService = accountService;
	        accountService.isUserSignedIn();
	    }
	    AppModule = __decorate([
	        core_1.NgModule({
	            bootstrap: [app_component_1.AppComponent],
	            declarations: [
	                app_component_1.AppComponent,
	                navmenu_component_1.NavMenuComponent,
	                counter_component_1.CounterComponent,
	                fetchdata_component_1.FetchDataComponent,
	                home_component_1.HomeComponent,
	                registration_component_1.RegistrationComponent,
	                login_component_1.LoginComponent,
	                board_component_1.BoardComponent,
	                new_project_component_1.NewProjectComponent,
	                project_component_1.ProjectComponent,
	                rowspipe_1.RowsPipe
	            ],
	            imports: [
	                angular2_universal_1.UniversalModule,
	                router_1.RouterModule.forRoot([
	                    { path: '', redirectTo: 'home', pathMatch: 'full' },
	                    { path: 'home', component: home_component_1.HomeComponent },
	                    { path: 'counter', component: counter_component_1.CounterComponent },
	                    { path: 'fetch-data', component: fetchdata_component_1.FetchDataComponent },
	                    { path: 'registration', component: registration_component_1.RegistrationComponent },
	                    { path: 'login', component: login_component_1.LoginComponent },
	                    { path: 'board', component: board_component_1.BoardComponent },
	                    { path: 'board/new-project', component: new_project_component_1.NewProjectComponent },
	                    { path: 'board/project/:id', component: project_component_1.ProjectComponent },
	                    { path: '**', redirectTo: 'home' }
	                ]),
	                forms_1.ReactiveFormsModule
	            ],
	            providers: [httpClient_service_1.HttpClient, account_service_1.AccountService, utility_service_1.UtilityService, project_service_1.ProjectService]
	        }), 
	        __metadata('design:paramtypes', [account_service_1.AccountService])
	    ], AppModule);
	    return AppModule;
	}());
	exports.AppModule = AppModule;


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("@angular/router");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'app',
	            template: __webpack_require__(8),
	            styles: [__webpack_require__(9)]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<div class='container-fluid'>\r\n    <div class='row'>\r\n        <div class='col-sm-2'>\r\n            <nav-menu></nav-menu>\r\n        </div>\r\n        <div class='col-sm-10 body-content'>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(10);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports
	
	
	// module
	exports.push([module.id, "@media (max-width: 767px) {\r\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n    .body-content {\r\n        padding-top: 50px;\r\n    }\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 11 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var account_service_1 = __webpack_require__(13);
	var utility_service_1 = __webpack_require__(16);
	var NavMenuComponent = (function () {
	    function NavMenuComponent(accountService, utilityService) {
	        this.accountService = accountService;
	        this.utilityService = utilityService;
	        this.accountService = accountService;
	        this.utilityService = utilityService;
	    }
	    NavMenuComponent.prototype.logOff = function () {
	        var _this = this;
	        this.accountService.logOff().subscribe(function (result) {
	            _this.accountService.getAndUpdateAntiForgeryToken();
	            _this.accountService.isUserSignedIn();
	        }, function (error) {
	            _this.utilityService.handleApiError(error);
	        });
	    };
	    NavMenuComponent = __decorate([
	        core_1.Component({
	            selector: 'nav-menu',
	            template: __webpack_require__(17),
	            styles: [__webpack_require__(18)]
	        }), 
	        __metadata('design:paramtypes', [account_service_1.AccountService, utility_service_1.UtilityService])
	    ], NavMenuComponent);
	    return NavMenuComponent;
	}());
	exports.NavMenuComponent = NavMenuComponent;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(3);
	var httpClient_service_1 = __webpack_require__(14);
	var AccountService = (function () {
	    function AccountService(httpClient) {
	        this.httpClient = httpClient;
	        this.userViewModel = new UserViewModel();
	    }
	    AccountService.prototype.checkIfUserIsAuthenticated = function () {
	    };
	    AccountService.prototype.updateAntiForgeryTokenAfterLoginOrLogout = function (response) {
	        var inputElement = document.createElement('div');
	        inputElement.innerHTML = response['_body'];
	        var newToken = inputElement.getElementsByTagName('input')['__RequestVerificationToken'].value;
	        document.getElementsByName("__RequestVerificationToken")[0]['value'] = newToken;
	    };
	    AccountService.prototype.createNewAccount = function (email, password) {
	        var requestModel = {
	            email: email,
	            password: password,
	            confirmPassword: password
	        };
	        return this.httpClient.post('/api/Account/Register', requestModel);
	    };
	    AccountService.prototype.login = function (email, password) {
	        var requestModel = {
	            email: email,
	            password: password,
	        };
	        return this.httpClient.post('/api/Account/Login', requestModel);
	    };
	    AccountService.prototype.isUserSignedIn = function () {
	        var _this = this;
	        this.httpClient.get('/api/Account/IsUserSignedIn')
	            .subscribe(function (data) {
	            var dataJson = data.json();
	            _this.userViewModel.isSignedIn = dataJson.isSignedIn;
	            _this.userViewModel.userName = dataJson.name;
	        });
	    };
	    AccountService.prototype.getAndUpdateAntiForgeryToken = function () {
	        var _this = this;
	        this.httpClient.get('/api/Account/AntiForgeryToken')
	            .subscribe(function (response) {
	            _this.updateAntiForgeryTokenAfterLoginOrLogout(response);
	        });
	    };
	    AccountService.prototype.logOff = function () {
	        return this.httpClient.post('/api/Account/LogOff', {});
	    };
	    AccountService = __decorate([
	        core_1.Injectable(),
	        __param(0, core_1.Inject(httpClient_service_1.HttpClient)), 
	        __metadata('design:paramtypes', [httpClient_service_1.HttpClient])
	    ], AccountService);
	    return AccountService;
	}());
	exports.AccountService = AccountService;
	var UserViewModel = (function () {
	    function UserViewModel() {
	        this.isSignedIn = false;
	        this.userName = "";
	    }
	    return UserViewModel;
	}());
	exports.UserViewModel = UserViewModel;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(15);
	var HttpClient = (function () {
	    function HttpClient(http) {
	        this.http = http;
	        this.http = http;
	    }
	    HttpClient.prototype.createAntiForgeryTokenHeader = function (headers) {
	        var antiForgeryToken = document.getElementsByName("__RequestVerificationToken")[0]['value'];
	        headers.append('RequestVerificationToken', antiForgeryToken);
	    };
	    HttpClient.prototype.get = function (url) {
	        return this.http.get(url);
	    };
	    HttpClient.prototype.post = function (url, data) {
	        var headers = new http_1.Headers();
	        this.createAntiForgeryTokenHeader(headers);
	        return this.http.post(url, data, {
	            headers: headers
	        });
	    };
	    HttpClient = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], HttpClient);
	    return HttpClient;
	}());
	exports.HttpClient = HttpClient;


/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("@angular/http");

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var UtilityService = (function () {
	    function UtilityService() {
	    }
	    UtilityService.prototype.handleApiError = function (error) {
	        console.log(error._body);
	    };
	    UtilityService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], UtilityService);
	    return UtilityService;
	}());
	exports.UtilityService = UtilityService;


/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "<div class='main-nav'>\r\n    <div class='navbar navbar-inverse'>\r\n        <div class='navbar-header'>\r\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\r\n                <span class='sr-only'>Toggle navigation</span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n            </button>\r\n            <a class='navbar-brand' [routerLink]=\"['/home']\">manage.it</a>\r\n        </div>\r\n        <div class='clearfix'></div>\r\n        <div class='navbar-collapse collapse'>\r\n            <ul class='nav navbar-nav'>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/home']\">\r\n                        <span class='glyphicon glyphicon-home'></span> Start\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\" [style.display]=\"accountService.userViewModel.isSignedIn === true ? 'block' : 'none'\">\r\n                    <a [routerLink]=\"['/board']\">\r\n                        <span class='glyphicon glyphicon-align-justify'></span> Projekty\r\n                    </a>\r\n                </li>\r\n                <!--<li [routerLinkActive]=\"['link-active']\">-->\r\n                    <!--<a [routerLink]=\"['/counter']\">-->\r\n                        <!--<span class='glyphicon glyphicon-education'></span> Counter-->\r\n                    <!--</a>-->\r\n                <!--</li>-->\r\n                <!--<li [routerLinkActive]=\"['link-active']\">-->\r\n                    <!--<a [routerLink]=\"['/fetch-data']\">-->\r\n                        <!--<span class='glyphicon glyphicon-th-list'></span> Fetch data-->\r\n                    <!--</a>-->\r\n                <!--</li>-->\r\n                <hr />\r\n                <li [routerLinkActive]=\"['link-active']\" [hidden]=\"accountService.userViewModel.isSignedIn === true\">\r\n                    <a [routerLink]=\"['/login']\">\r\n                        <span class='glyphicon glyphicon-log-in'></span> Logowanie\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\" [hidden]=\"accountService.userViewModel.isSignedIn === true\">\r\n                    <a [routerLink]=\"['/registration']\">\r\n                        <span class='glyphicon glyphicon-envelope'></span> Rejestracja\r\n                    </a>\r\n                </li>\r\n                <li [style.display]=\"accountService.userViewModel.isSignedIn === true ? 'block' : 'none'\">\r\n                    <a>\r\n                        Witaj {{accountService.userViewModel.userName}}\r\n                    </a>\r\n                </li>\r\n                <li [style.display]=\"accountService.userViewModel.isSignedIn === true ? 'block' : 'none'\">\r\n                    <a (click)=\"logOff()\">\r\n                        <span class='glyphicon glyphicon-log-out'></span> Wyloguj\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(19);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports
	
	
	// module
	exports.push([module.id, "li .glyphicon {\r\n    margin-right: 10px;\r\n}\r\n\r\n/* Highlighting rules for nav menu items */\r\nli.link-active a,\r\nli.link-active a:hover,\r\nli.link-active a:focus {\r\n    background-color: #4189C7;\r\n    color: white;\r\n}\r\n\r\n/* Keep the nav menu independent of scrolling and on top of other items */\r\n.main-nav {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    /* On small screens, convert the nav menu to a vertical sidebar */\r\n    .main-nav {\r\n        height: 100%;\r\n        width: calc(15% - 20px);\r\n    }\r\n    .navbar {\r\n        border-radius: 0px;\r\n        border-width: 0px;\r\n        height: 100%;\r\n    }\r\n    .navbar-header {\r\n        float: none;\r\n    }\r\n    .navbar-collapse {\r\n        border-top: 1px solid #444;\r\n        padding: 0px;\r\n    }\r\n    .navbar ul {\r\n        float: none;\r\n    }\r\n    .navbar li {\r\n        float: none;\r\n        font-size: 15px;\r\n        margin: 6px;\r\n    }\r\n    .navbar li a {\r\n        padding: 10px 16px;\r\n        border-radius: 4px;\r\n    }\r\n    .navbar a {\r\n        /* If a menu item's text is too long, truncate it */\r\n        width: 100%;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n    }\r\n}\r\n\r\n[hidden] {\r\n    display: none;\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var HomeComponent = (function () {
	    function HomeComponent() {
	    }
	    HomeComponent = __decorate([
	        core_1.Component({
	            selector: 'home',
	            template: __webpack_require__(21)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], HomeComponent);
	    return HomeComponent;
	}());
	exports.HomeComponent = HomeComponent;


/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "<h1>System zarządzania projektami</h1>\r\n<p>Gabriel Niemiec - 132817 - PRz 2016</p>"

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var httpClient_service_1 = __webpack_require__(14);
	var FetchDataComponent = (function () {
	    function FetchDataComponent(httpClient) {
	        var _this = this;
	        httpClient.get('/api/SampleData/WeatherForecasts').subscribe(function (result) {
	            _this.forecasts = result.json();
	        });
	    }
	    FetchDataComponent = __decorate([
	        core_1.Component({
	            selector: 'fetchdata',
	            template: __webpack_require__(23),
	            providers: [httpClient_service_1.HttpClient]
	        }), 
	        __metadata('design:paramtypes', [httpClient_service_1.HttpClient])
	    ], FetchDataComponent);
	    return FetchDataComponent;
	}());
	exports.FetchDataComponent = FetchDataComponent;


/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "<h1>Weather forecast</h1>\r\n\r\n<p>This component demonstrates fetching data from the server.</p>\r\n\r\n<p *ngIf=\"!forecasts\"><em>Loading...</em></p>\r\n\r\n<table class='table' *ngIf=\"forecasts\">\r\n    <thead>\r\n        <tr>\r\n            <th>Date</th>\r\n            <th>Temp. (C)</th>\r\n            <th>Temp. (F)</th>\r\n            <th>Summary</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let forecast of forecasts\">\r\n            <td>{{ forecast.dateFormatted }}</td>\r\n            <td>{{ forecast.temperatureC }}</td>\r\n            <td>{{ forecast.temperatureF }}</td>\r\n            <td>{{ forecast.summary }}</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n"

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var CounterComponent = (function () {
	    function CounterComponent() {
	        this.currentCount = 0;
	    }
	    CounterComponent.prototype.incrementCounter = function () {
	        this.currentCount++;
	    };
	    CounterComponent = __decorate([
	        core_1.Component({
	            selector: 'counter',
	            template: __webpack_require__(25)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CounterComponent);
	    return CounterComponent;
	}());
	exports.CounterComponent = CounterComponent;


/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "<h2>Counter</h2>\r\n\r\n<p>This is a simple example of an Angular 2 component.</p>\r\n\r\n<p>Current count: <strong>{{ currentCount }}</strong></p>\r\n\r\n<button (click)=\"incrementCounter()\">Increment</button>\r\n"

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var forms_1 = __webpack_require__(27);
	var account_service_1 = __webpack_require__(13);
	var utility_service_1 = __webpack_require__(16);
	var RegistrationComponent = (function () {
	    function RegistrationComponent(formBuilder, accountService, utilityService) {
	        this.accountService = accountService;
	        this.utilityService = utilityService;
	        this.registrationForm = formBuilder.group({
	            email: ['', forms_1.Validators.required],
	            password: ['', forms_1.Validators.required]
	        });
	    }
	    RegistrationComponent.prototype.onSubmit = function () {
	        var _this = this;
	        if (!this.registrationForm.valid) {
	            return;
	        }
	        this.accountService.createNewAccount(this.registrationForm.value.email, this.registrationForm.value.password).subscribe(function (result) {
	            alert('Konto zostało pomyślnie utworzone. Możesz się teraz zalogować.');
	        }, function (error) {
	            _this.utilityService.handleApiError(error);
	        });
	    };
	    RegistrationComponent = __decorate([
	        core_1.Component({
	            selector: 'registration',
	            template: __webpack_require__(28),
	            styles: [__webpack_require__(29)],
	            providers: [utility_service_1.UtilityService]
	        }), 
	        __metadata('design:paramtypes', [forms_1.FormBuilder, account_service_1.AccountService, utility_service_1.UtilityService])
	    ], RegistrationComponent);
	    return RegistrationComponent;
	}());
	exports.RegistrationComponent = RegistrationComponent;


/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = require("@angular/forms");

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mi-registration\">\r\n    <h1>Rejestracja</h1>\r\n    <hr />\r\n    <p>Podaj email i hasło aby utworzyć nowe konto.</p>\r\n    <form [formGroup]=\"registrationForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-group\">\r\n            <input type=\"email\" class=\"form-control\" placeholder=\"Email\" formControlName=\"email\">\r\n            <span *ngIf=\"registrationForm.controls['email'].touched && registrationForm.controls['email'].hasError('required')\" class=\"text-danger\">Email jest wymagany.</span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <input type=\"password\" class=\"form-control\" placeholder=\"Hasło\" formControlName=\"password\">\r\n            <span *ngIf=\"registrationForm.controls['password'].touched && registrationForm.controls['password'].hasError('required')\" class=\"text-danger\">Hasło jest wymagane.</span>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-success pull-right\">Zarejestruj się</button>\r\n    </form>\r\n</div>"

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(30);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports
	
	
	// module
	exports.push([module.id, ".mi-registration form {\r\n  width: 30%; }\r\n\r\n/*# sourceMappingURL=registration.component.css.map */\r\n", ""]);
	
	// exports


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var forms_1 = __webpack_require__(27);
	var account_service_1 = __webpack_require__(13);
	var utility_service_1 = __webpack_require__(16);
	var router_1 = __webpack_require__(6);
	var LoginComponent = (function () {
	    function LoginComponent(formBuilder, accountService, utilityService, router) {
	        this.accountService = accountService;
	        this.utilityService = utilityService;
	        this.router = router;
	        this.loginForm = formBuilder.group({
	            email: ['', forms_1.Validators.required],
	            password: ['', forms_1.Validators.required]
	        });
	    }
	    LoginComponent.prototype.onSubmit = function () {
	        var _this = this;
	        if (!this.loginForm.valid) {
	            return;
	        }
	        this.accountService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(function (result) {
	            _this.accountService.getAndUpdateAntiForgeryToken();
	            _this.accountService.isUserSignedIn();
	            _this.router.navigate(['/board']);
	        }, function (error) {
	            _this.utilityService.handleApiError(error);
	        });
	    };
	    LoginComponent = __decorate([
	        core_1.Component({
	            selector: 'login',
	            template: __webpack_require__(32),
	            styles: [__webpack_require__(33)],
	            providers: [utility_service_1.UtilityService]
	        }), 
	        __metadata('design:paramtypes', [forms_1.FormBuilder, account_service_1.AccountService, utility_service_1.UtilityService, router_1.Router])
	    ], LoginComponent);
	    return LoginComponent;
	}());
	exports.LoginComponent = LoginComponent;


/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mi-login\">\r\n    <h1>Logowanie</h1>\r\n    <hr />\r\n    <p>Podaj email i hasło aby się zalogować.</p>\r\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-group\">\r\n            <input type=\"email\" class=\"form-control\" placeholder=\"Email\" formControlName=\"email\">\r\n            <span *ngIf=\"loginForm.controls['email'].touched && loginForm.controls['email'].hasError('required')\" class=\"text-danger\">Email jest wymagany.</span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <input type=\"password\" class=\"form-control\" placeholder=\"Hasło\" formControlName=\"password\">\r\n            <span *ngIf=\"loginForm.controls['password'].touched && loginForm.controls['password'].hasError('required')\" class=\"text-danger\">Hasło jest wymagane.</span>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-success pull-right\">Zaloguj się</button>\r\n    </form>\r\n</div>"

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(34);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports
	
	
	// module
	exports.push([module.id, ".mi-login form {\r\n  width: 30%; }\r\n\r\n/*# sourceMappingURL=login.component.css.map */\r\n", ""]);
	
	// exports


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var account_service_1 = __webpack_require__(13);
	var utility_service_1 = __webpack_require__(16);
	var project_service_1 = __webpack_require__(36);
	var BoardComponent = (function () {
	    function BoardComponent(accountService, utilityService, projectService) {
	        this.accountService = accountService;
	        this.utilityService = utilityService;
	        this.projectService = projectService;
	    }
	    BoardComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.accountService.checkIfUserIsAuthenticated();
	        this.projectService.getProjectsForUser().subscribe(function (result) {
	            _this.boards = result.json();
	        }, function (error) {
	            _this.utilityService.handleApiError(error);
	        });
	    };
	    BoardComponent = __decorate([
	        core_1.Component({
	            selector: 'board',
	            template: __webpack_require__(37),
	            styles: [__webpack_require__(38)],
	            providers: [utility_service_1.UtilityService]
	        }), 
	        __metadata('design:paramtypes', [account_service_1.AccountService, utility_service_1.UtilityService, project_service_1.ProjectService])
	    ], BoardComponent);
	    return BoardComponent;
	}());
	exports.BoardComponent = BoardComponent;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(3);
	var httpClient_service_1 = __webpack_require__(14);
	var ProjectService = (function () {
	    function ProjectService(httpClient) {
	        this.httpClient = httpClient;
	    }
	    ProjectService.prototype.createNewProject = function (name, description) {
	        return this.httpClient.post('/api/Board/CreateNewBoard', {
	            name: name,
	            description: description
	        });
	    };
	    ProjectService.prototype.createNewTask = function (name, description, projectId) {
	        return this.httpClient.post('/api/Board/CreateNewTask', {
	            name: name,
	            description: description,
	            projectId: projectId
	        });
	    };
	    ProjectService.prototype.getProjectsForUser = function () {
	        return this.httpClient.get('/api/Board/GetProjectsForUser');
	    };
	    ProjectService.prototype.getProject = function (projectId) {
	        return this.httpClient.get('/api/Board/GetProject/' + projectId);
	    };
	    ProjectService = __decorate([
	        core_1.Injectable(),
	        __param(0, core_1.Inject(httpClient_service_1.HttpClient)), 
	        __metadata('design:paramtypes', [httpClient_service_1.HttpClient])
	    ], ProjectService);
	    return ProjectService;
	}());
	exports.ProjectService = ProjectService;
	var Board = (function () {
	    function Board() {
	    }
	    return Board;
	}());
	exports.Board = Board;
	var Column = (function () {
	    function Column() {
	    }
	    return Column;
	}());
	exports.Column = Column;
	var Task = (function () {
	    function Task() {
	    }
	    return Task;
	}());
	exports.Task = Task;


/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mi-board\">\r\n    <h1>Projekty</h1>\r\n    <hr />\r\n    <button class=\"btn btn-success\" [routerLink]=\"['/board/new-project']\">Utwórz nowy projekt</button>\r\n    <div class=\"mi-board-projects\">\r\n        <div *ngFor=\"let boardsRow of boards | rows:4; let i=index\" class=\"row\">\r\n            <div *ngFor=\"let board of boardsRow\" class=\"col-xs-3 mi-board-projects-project\">\r\n                <a [routerLink]=\"['/board/project/' + board.id]\">\r\n                    <div class=\"thumbnail\">\r\n                        <div class=\"caption\">\r\n                            <h3>{{board.name}}</h3>\r\n                            <p>{{board.description}}</p>\r\n                        </div>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(39);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports
	
	
	// module
	exports.push([module.id, ".mi-board a {\r\n  text-decoration: none; }\r\n.mi-board-projects {\r\n  margin-top: 20px; }\r\n  .mi-board-projects-project .thumbnail:hover {\r\n    background-color: #4189C7; }\r\n    .mi-board-projects-project .thumbnail:hover .caption {\r\n      color: white; }\r\n\r\n/*# sourceMappingURL=board.component.css.map */\r\n", ""]);
	
	// exports


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var utility_service_1 = __webpack_require__(16);
	var account_service_1 = __webpack_require__(13);
	var forms_1 = __webpack_require__(27);
	var project_service_1 = __webpack_require__(36);
	var router_1 = __webpack_require__(6);
	var NewProjectComponent = (function () {
	    function NewProjectComponent(accountService, utilityService, formBuilder, projectService, router) {
	        this.accountService = accountService;
	        this.utilityService = utilityService;
	        this.projectService = projectService;
	        this.router = router;
	        this.accountService.checkIfUserIsAuthenticated();
	        this.newProjectForm = formBuilder.group({
	            name: ['', forms_1.Validators.required],
	            description: ['', forms_1.Validators.required]
	        });
	    }
	    NewProjectComponent.prototype.onSubmit = function () {
	        var _this = this;
	        this.projectService.createNewProject(this.newProjectForm.value.name, this.newProjectForm.value.description).subscribe(function (result) {
	            alert('Nowy projekt został utworzony.');
	            _this.router.navigate(['/board']);
	        }, function (error) {
	            _this.utilityService.handleApiError(error);
	        });
	    };
	    NewProjectComponent = __decorate([
	        core_1.Component({
	            selector: 'new-project',
	            template: __webpack_require__(41),
	            styles: [__webpack_require__(42)],
	            providers: [utility_service_1.UtilityService, project_service_1.ProjectService]
	        }), 
	        __metadata('design:paramtypes', [account_service_1.AccountService, utility_service_1.UtilityService, forms_1.FormBuilder, project_service_1.ProjectService, router_1.Router])
	    ], NewProjectComponent);
	    return NewProjectComponent;
	}());
	exports.NewProjectComponent = NewProjectComponent;


/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mi-new-project\">\r\n    <h1>Utwórz nowy projekt</h1>\r\n    <hr />\r\n    <p>Podaj szczegóły nowego projektu</p>\r\n    <form [formGroup]=\"newProjectForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Nazwa\" formControlName=\"name\">\r\n            <span *ngIf=\"newProjectForm.controls['name'].touched && newProjectForm.controls['name'].hasError('required')\" class=\"text-danger\">Nazwa jest wymagana.</span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Opis\" formControlName=\"description\">\r\n            <span *ngIf=\"newProjectForm.controls['description'].touched && newProjectForm.controls['description'].hasError('required')\" class=\"text-danger\">Opis jest wymagany.</span>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-default pull-left\" [routerLink]=\"['/board']\">Powrót do widoku projektów</button>\r\n        <button type=\"submit\" class=\"btn btn-success pull-right\">Utwórz nowy projekt</button>\r\n    </form>\r\n</div>"

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(43);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports
	
	
	// module
	exports.push([module.id, ".mi-new-project form {\r\n  width: 30%; }\r\n\r\n/*# sourceMappingURL=new-project.component.css.map */\r\n", ""]);
	
	// exports


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var RowsPipe = (function () {
	    function RowsPipe() {
	    }
	    RowsPipe.prototype.transform = function (val, cols) {
	        var arrayOfArrays = new Array();
	        if (val) {
	            while (val.length) {
	                arrayOfArrays.push(val.splice(0, cols || 4));
	            }
	        }
	        return arrayOfArrays;
	    };
	    RowsPipe = __decorate([
	        core_1.Pipe({ name: 'rows' }), 
	        __metadata('design:paramtypes', [])
	    ], RowsPipe);
	    return RowsPipe;
	}());
	exports.RowsPipe = RowsPipe;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var utility_service_1 = __webpack_require__(16);
	var account_service_1 = __webpack_require__(13);
	var project_service_1 = __webpack_require__(36);
	var router_1 = __webpack_require__(6);
	var forms_1 = __webpack_require__(27);
	var ProjectComponent = (function () {
	    function ProjectComponent(accountService, utilityService, projectService, router, route, formBuilder) {
	        this.accountService = accountService;
	        this.utilityService = utilityService;
	        this.projectService = projectService;
	        this.router = router;
	        this.route = route;
	        this.formBuilder = formBuilder;
	    }
	    ProjectComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.accountService.checkIfUserIsAuthenticated();
	        this.projectId = +this.route.params['value'].id;
	        this.projectService.getProject(this.projectId).subscribe(function (result) {
	            _this.board = result.json();
	        }, function (error) {
	            _this.utilityService.handleApiError(error);
	        });
	        this.newTaskForm = this.formBuilder.group({
	            name: ['', forms_1.Validators.required],
	            description: ['', forms_1.Validators.required]
	        });
	    };
	    ProjectComponent.prototype.createNewTask = function () {
	        var _this = this;
	        this.projectService.createNewTask(this.newTaskForm.value.name, this.newTaskForm.value.description, this.projectId).subscribe(function (result) {
	            _this.newTaskForm.value.name = "";
	            _this.newTaskForm.value.description = "";
	            //$('#mi-new-task-modal').modal('hide');
	            alert("Dodano zadanie :)");
	        }, function (error) {
	            _this.utilityService.handleApiError(error);
	        });
	    };
	    ProjectComponent = __decorate([
	        core_1.Component({
	            selector: 'project',
	            template: __webpack_require__(47),
	            styles: [__webpack_require__(48)],
	            providers: [utility_service_1.UtilityService, project_service_1.ProjectService]
	        }), 
	        __metadata('design:paramtypes', [account_service_1.AccountService, utility_service_1.UtilityService, project_service_1.ProjectService, router_1.Router, router_1.ActivatedRoute, forms_1.FormBuilder])
	    ], ProjectComponent);
	    return ProjectComponent;
	}());
	exports.ProjectComponent = ProjectComponent;


/***/ },
/* 46 */,
/* 47 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mi-project\">\r\n    <button class=\"btn btn-success\" type=\"button\" data-toggle=\"modal\" data-target=\"#mi-new-task-modal\" >Dodaj nowe zadanie</button>\r\n    <hr />\r\n    <div class=\"mi-project-column col-xs-4\" *ngFor=\"let column of board?.columns\">\r\n        <h3>{{column.name}}</h3>\r\n    </div>\r\n</div>\r\n\r\n<!-- NEW TASK MODAL -->\r\n<div id=\"mi-new-task-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <form [formGroup]=\"newTaskForm\" (ngSubmit)=\"createNewTask()\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                    <h4 class=\"modal-title\">Nowe zadanie</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Nazwa\" formControlName=\"name\">\r\n                            <span *ngIf=\"newTaskForm.controls['name'].touched && newTaskForm.controls['name'].hasError('required')\" class=\"text-danger\">Nazwa jest wymagana.</span>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Opis\" formControlName=\"description\">\r\n                            <span *ngIf=\"newTaskForm.controls['description'].touched && newTaskForm.controls['description'].hasError('required')\" class=\"text-danger\">Opis jest wymagany.</span>\r\n                        </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"submit\" class=\"btn btn-success pull-right\">Dodaj</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(49);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports
	
	
	// module
	exports.push([module.id, ".mi-project {\r\n  margin-top: 40px; }\r\n  .mi-project-column {\r\n    border-right: 1px solid lightgray; }\r\n    .mi-project-column:last-child {\r\n      border: none; }\r\n\r\n/*# sourceMappingURL=project.component.css.map */\r\n", ""]);
	
	// exports


/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGZlOGQ4MjZmZDdhYzY3MDcwNjUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcz9kZGMzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3NlcnZpY2VzL2FjY291bnQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3NlcnZpY2VzL2h0dHBDbGllbnQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9zZXJ2aWNlcy91dGlsaXR5LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3M/OWY2NCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmV0Y2hkYXRhL2ZldGNoZGF0YS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzP2Y1YjkiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcz9lN2MzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ib2FyZC9ib2FyZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9zZXJ2aWNlcy9wcm9qZWN0LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ib2FyZC9ib2FyZC5jb21wb25lbnQuY3NzPzMxYWYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2JvYXJkL25ldy1wcm9qZWN0LmNvbXBvbmVudC9uZXctcHJvamVjdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2JvYXJkL25ldy1wcm9qZWN0LmNvbXBvbmVudC9uZXctcHJvamVjdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYm9hcmQvbmV3LXByb2plY3QuY29tcG9uZW50L25ldy1wcm9qZWN0LmNvbXBvbmVudC5jc3M/NDNiZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYm9hcmQvbmV3LXByb2plY3QuY29tcG9uZW50L25ldy1wcm9qZWN0LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9waXBlcy9yb3dzcGlwZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYm9hcmQvcHJvamVjdC5jb21wb25lbnQvcHJvamVjdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2JvYXJkL3Byb2plY3QuY29tcG9uZW50L3Byb2plY3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2JvYXJkL3Byb2plY3QuY29tcG9uZW50L3Byb2plY3QuY29tcG9uZW50LmNzcz82NmRjIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ib2FyZC9wcm9qZWN0LmNvbXBvbmVudC9wcm9qZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDdENBLHFCQUFPLENBQThCLENBQUM7QUFDdEMscUJBQU8sQ0FBUyxDQUFDO0FBQ2pCLGtDQUErQixDQUFlLENBQUM7QUFDL0MsZ0RBQW9DLENBQW9C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QUFHLEVBQUUsQ0FBQzthQUNqQyxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO2FBQ3hDLHdDQUF3QzthQUN4QyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUMvQixDQUFDLEVBQUUsZUFBSzthQUNKLEtBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzlDLENBQUMsQ0FBQyxDQUFDO0tBQ1AsQ0FBQztLQXhETDtTQUFDLGdCQUFTLENBQUM7YUFDUCxRQUFRLEVBQUUsU0FBUzthQUNuQixRQUFRLEVBQUUsbUJBQU8sQ0FBQyxFQUEwQixDQUFDO2FBQzdDLE1BQU0sRUFBRSxDQUFDLG1CQUFPLENBQUMsRUFBeUIsQ0FBQyxDQUFDO2FBQzVDLFNBQVMsRUFBRSxDQUFDLGdDQUFjLEVBQUUsZ0NBQWMsQ0FBQztVQUM5QyxDQUFDOzt5QkFBQTtLQW9ERix1QkFBQztBQUFELEVBQUM7QUFuRFkseUJBQWdCLG1CQW1ENUI7Ozs7Ozs7O0FDaEVELHNUQUFxVCxhQUFhLGlnQkFBaWdCLHV0Qzs7Ozs7OztBQ0NuMEI7O0FBRUE7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOzs7Ozs7O0FDUEE7QUFDQTs7O0FBR0E7QUFDQSx3Q0FBdUMsdUJBQXVCLEVBQUUsMEJBQTBCLDBDQUEwQyxFQUFFLHVDQUF1Qyx1QkFBdUIsRUFBRTs7QUFFdE0iLCJmaWxlIjoibWFpbi1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDhmZThkODI2ZmQ3YWM2NzA3MDY1XG4gKiovIiwiaW1wb3J0ICdhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzJztcclxuaW1wb3J0ICd6b25lLmpzJztcclxuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgcGxhdGZvcm1Ob2RlRHluYW1pYyB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XHJcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwL2FwcC5tb2R1bGUnO1xyXG5cclxuZW5hYmxlUHJvZE1vZGUoKTtcclxuY29uc3QgcGxhdGZvcm0gPSBwbGF0Zm9ybU5vZGVEeW5hbWljKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocGFyYW1zOiBhbnkpIDogUHJvbWlzZTx7IGh0bWw6IHN0cmluZywgZ2xvYmFscz86IGFueSB9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3Rab25lID0gWm9uZS5jdXJyZW50LmZvcmsoe1xyXG4gICAgICAgICAgICBuYW1lOiAnYW5ndWxhci11bml2ZXJzYWwgcmVxdWVzdCcsXHJcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgIGJhc2VVcmw6ICcvJyxcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RVcmw6IHBhcmFtcy51cmwsXHJcbiAgICAgICAgICAgICAgICBvcmlnaW5Vcmw6IHBhcmFtcy5vcmlnaW4sXHJcbiAgICAgICAgICAgICAgICBwcmVib290OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIC8vIFRPRE86IFJlbmRlciBqdXN0IHRoZSA8YXBwPiBjb21wb25lbnQgaW5zdGVhZCBvZiB3cmFwcGluZyBpdCBpbnNpZGUgYW4gZXh0cmEgSFRNTCBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgLy8gV2FpdGluZyBvbiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci91bml2ZXJzYWwvaXNzdWVzLzM0N1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQ6ICc8IURPQ1RZUEUgaHRtbD48aHRtbD48aGVhZD48L2hlYWQ+PGJvZHk+PGFwcD48L2FwcD48L2JvZHk+PC9odG1sPidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25IYW5kbGVFcnJvcjogKHBhcmVudFpvbmUsIGN1cnJlbnRab25lLCB0YXJnZXRab25lLCBlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgYW55IGVycm9yIG9jY3VycyB3aGlsZSByZW5kZXJpbmcgdGhlIG1vZHVsZSwgcmVqZWN0IHRoZSB3aG9sZSBvcGVyYXRpb25cclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVxdWVzdFpvbmUucnVuPFByb21pc2U8c3RyaW5nPj4oKCkgPT4gcGxhdGZvcm0uc2VyaWFsaXplTW9kdWxlKEFwcE1vZHVsZSkpLnRoZW4oaHRtbCA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoeyBodG1sOiBodG1sIH0pO1xyXG4gICAgICAgIH0sIHJlamVjdCk7XHJcbiAgICB9KTtcclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL0NsaWVudEFwcC9ib290LXNlcnZlci50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIlxuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInpvbmUuanNcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInpvbmUuanNcIlxuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIlxuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsXCJcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBVbml2ZXJzYWxNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQnXHJcbmltcG9ydCB7IE5hdk1lbnVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZldGNoRGF0YUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mZXRjaGRhdGEvZmV0Y2hkYXRhLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvdW50ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY291bnRlci9jb3VudGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7UmVnaXN0cmF0aW9uQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7TG9naW5Db21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Qm9hcmRDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvYm9hcmQvYm9hcmQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7QWNjb3VudFNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL2FjY291bnQuc2VydmljZVwiO1xyXG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gXCIuL3NlcnZpY2VzL2h0dHBDbGllbnQuc2VydmljZVwiO1xyXG5pbXBvcnQge1V0aWxpdHlTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy91dGlsaXR5LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtOZXdQcm9qZWN0Q29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2JvYXJkL25ldy1wcm9qZWN0LmNvbXBvbmVudC9uZXctcHJvamVjdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtQcm9qZWN0U2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvcHJvamVjdC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Um93c1BpcGV9IGZyb20gJy4vcGlwZXMvcm93c3BpcGUnO1xyXG5pbXBvcnQge1Byb2plY3RDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvYm9hcmQvcHJvamVjdC5jb21wb25lbnQvcHJvamVjdC5jb21wb25lbnRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBib290c3RyYXA6IFsgQXBwQ29tcG9uZW50IF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBcHBDb21wb25lbnQsXHJcbiAgICAgICAgTmF2TWVudUNvbXBvbmVudCxcclxuICAgICAgICBDb3VudGVyQ29tcG9uZW50LFxyXG4gICAgICAgIEZldGNoRGF0YUNvbXBvbmVudCxcclxuICAgICAgICBIb21lQ29tcG9uZW50LFxyXG4gICAgICAgIFJlZ2lzdHJhdGlvbkNvbXBvbmVudCxcclxuICAgICAgICBMb2dpbkNvbXBvbmVudCxcclxuICAgICAgICBCb2FyZENvbXBvbmVudCxcclxuICAgICAgICBOZXdQcm9qZWN0Q29tcG9uZW50LFxyXG4gICAgICAgIFByb2plY3RDb21wb25lbnQsXHJcbiAgICAgICAgUm93c1BpcGVcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgVW5pdmVyc2FsTW9kdWxlLCAvLyBNdXN0IGJlIGZpcnN0IGltcG9ydC4gVGhpcyBhdXRvbWF0aWNhbGx5IGltcG9ydHMgQnJvd3Nlck1vZHVsZSwgSHR0cE1vZHVsZSwgYW5kIEpzb25wTW9kdWxlIHRvby5cclxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXHJcbiAgICAgICAgICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICdob21lJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnaG9tZScsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdjb3VudGVyJywgY29tcG9uZW50OiBDb3VudGVyQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2ZldGNoLWRhdGEnLCBjb21wb25lbnQ6IEZldGNoRGF0YUNvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdyZWdpc3RyYXRpb24nLCBjb21wb25lbnQ6IFJlZ2lzdHJhdGlvbkNvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdsb2dpbicsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnYm9hcmQnLCBjb21wb25lbnQ6IEJvYXJkQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2JvYXJkL25ldy1wcm9qZWN0JywgY29tcG9uZW50OiBOZXdQcm9qZWN0Q29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2JvYXJkL3Byb2plY3QvOmlkJywgY29tcG9uZW50OiBQcm9qZWN0Q29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJyoqJywgcmVkaXJlY3RUbzogJ2hvbWUnIH1cclxuICAgICAgICBdKSxcclxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbSHR0cENsaWVudCwgQWNjb3VudFNlcnZpY2UsIFV0aWxpdHlTZXJ2aWNlLCBQcm9qZWN0U2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhY2NvdW50U2VydmljZTogQWNjb3VudFNlcnZpY2Upe1xyXG4gICAgICAgIGFjY291bnRTZXJ2aWNlLmlzVXNlclNpZ25lZEluKCk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9DbGllbnRBcHAvYXBwL2FwcC5tb2R1bGUudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPSdjb250YWluZXItZmx1aWQnPlxcclxcbiAgICA8ZGl2IGNsYXNzPSdyb3cnPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz0nY29sLXNtLTInPlxcclxcbiAgICAgICAgICAgIDxuYXYtbWVudT48L25hdi1tZW51PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtc20tMTAgYm9keS1jb250ZW50Jz5cXHJcXG4gICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9hcHAuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcclxcbiAgICAvKiBPbiBzbWFsbCBzY3JlZW5zLCB0aGUgbmF2IG1lbnUgc3BhbnMgdGhlIGZ1bGwgd2lkdGggb2YgdGhlIHNjcmVlbi4gTGVhdmUgYSBzcGFjZSBmb3IgaXQuICovXFxyXFxuICAgIC5ib2R5LWNvbnRlbnQge1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3NcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0FjY291bnRTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYWNjb3VudC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7VXRpbGl0eVNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy91dGlsaXR5LnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICduYXYtbWVudScsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9uYXZtZW51LmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL25hdm1lbnUuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmF2TWVudUNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjY291bnRTZXJ2aWNlOiBBY2NvdW50U2VydmljZSwgcHJpdmF0ZSB1dGlsaXR5U2VydmljZTogVXRpbGl0eVNlcnZpY2Upe1xyXG4gICAgICAgIHRoaXMuYWNjb3VudFNlcnZpY2UgPSBhY2NvdW50U2VydmljZTtcclxuICAgICAgICB0aGlzLnV0aWxpdHlTZXJ2aWNlID0gdXRpbGl0eVNlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nT2ZmKCl7XHJcbiAgICAgICAgdGhpcy5hY2NvdW50U2VydmljZS5sb2dPZmYoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hY2NvdW50U2VydmljZS5nZXRBbmRVcGRhdGVBbnRpRm9yZ2VyeVRva2VuKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudFNlcnZpY2UuaXNVc2VyU2lnbmVkSW4oKTtcclxuICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXRpbGl0eVNlcnZpY2UuaGFuZGxlQXBpRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQudHNcbiAqKi8iLCJpbXBvcnQge0luamVjdGFibGUsIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJlc3BvbnNlfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSBcIi4vaHR0cENsaWVudC5zZXJ2aWNlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBY2NvdW50U2VydmljZSB7XHJcbiAgICBwcml2YXRlIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQ7XHJcbiAgICBwdWJsaWMgdXNlclZpZXdNb2RlbDogVXNlclZpZXdNb2RlbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KEh0dHBDbGllbnQpIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQpe1xyXG4gICAgICAgIHRoaXMuaHR0cENsaWVudCA9IGh0dHBDbGllbnQ7XHJcbiAgICAgICAgdGhpcy51c2VyVmlld01vZGVsID0gbmV3IFVzZXJWaWV3TW9kZWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0lmVXNlcklzQXV0aGVudGljYXRlZCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQW50aUZvcmdlcnlUb2tlbkFmdGVyTG9naW5PckxvZ291dChyZXNwb25zZTogUmVzcG9uc2Upe1xyXG4gICAgICAgIHZhciBpbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBpbnB1dEVsZW1lbnQuaW5uZXJIVE1MID0gcmVzcG9uc2VbJ19ib2R5J107XHJcbiAgICAgICAgdmFyIG5ld1Rva2VuID0gaW5wdXRFbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpWydfX1JlcXVlc3RWZXJpZmljYXRpb25Ub2tlbiddLnZhbHVlO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcIl9fUmVxdWVzdFZlcmlmaWNhdGlvblRva2VuXCIpWzBdWyd2YWx1ZSddID0gbmV3VG9rZW47XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTmV3QWNjb3VudChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xyXG4gICAgICAgIHZhciByZXF1ZXN0TW9kZWwgPSB7XHJcbiAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICAgICAgICBjb25maXJtUGFzc3dvcmQ6IHBhc3N3b3JkXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wb3N0KCcvYXBpL0FjY291bnQvUmVnaXN0ZXInLCByZXF1ZXN0TW9kZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XHJcbiAgICAgICAgdmFyIHJlcXVlc3RNb2RlbCA9IHtcclxuICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wb3N0KCcvYXBpL0FjY291bnQvTG9naW4nLCByZXF1ZXN0TW9kZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzVXNlclNpZ25lZEluKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaHR0cENsaWVudC5nZXQoJy9hcGkvQWNjb3VudC9Jc1VzZXJTaWduZWRJbicpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YUpzb24gPSBkYXRhLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlclZpZXdNb2RlbC5pc1NpZ25lZEluID0gZGF0YUpzb24uaXNTaWduZWRJbjtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlclZpZXdNb2RlbC51c2VyTmFtZSA9IGRhdGFKc29uLm5hbWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFuZFVwZGF0ZUFudGlGb3JnZXJ5VG9rZW4oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5odHRwQ2xpZW50LmdldCgnL2FwaS9BY2NvdW50L0FudGlGb3JnZXJ5VG9rZW4nKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQW50aUZvcmdlcnlUb2tlbkFmdGVyTG9naW5PckxvZ291dChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ09mZigpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wb3N0KCcvYXBpL0FjY291bnQvTG9nT2ZmJywge30pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXNlclZpZXdNb2RlbCB7XHJcbiAgICBpc1NpZ25lZEluOiBib29sZWFuO1xyXG4gICAgdXNlck5hbWU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuaXNTaWduZWRJbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudXNlck5hbWUgPSBcIlwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vQ2xpZW50QXBwL2FwcC9zZXJ2aWNlcy9hY2NvdW50LnNlcnZpY2UudHNcbiAqKi8iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SHR0cCwgSGVhZGVyc30gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEh0dHBDbGllbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XHJcbiAgICAgICAgdGhpcy5odHRwID0gaHR0cDtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVBbnRpRm9yZ2VyeVRva2VuSGVhZGVyKGhlYWRlcnM6IEhlYWRlcnMpIHtcclxuICAgICAgICB2YXIgYW50aUZvcmdlcnlUb2tlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwiX19SZXF1ZXN0VmVyaWZpY2F0aW9uVG9rZW5cIilbMF1bJ3ZhbHVlJ107XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ1JlcXVlc3RWZXJpZmljYXRpb25Ub2tlbicsIGFudGlGb3JnZXJ5VG9rZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCh1cmwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIHBvc3QodXJsLCBkYXRhKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQW50aUZvcmdlcnlUb2tlbkhlYWRlcihoZWFkZXJzKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBkYXRhLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vQ2xpZW50QXBwL2FwcC9zZXJ2aWNlcy9odHRwQ2xpZW50LnNlcnZpY2UudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCJcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFV0aWxpdHlTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUFwaUVycm9yKGVycm9yOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5fYm9keSk7XHJcbiAgICB9XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL0NsaWVudEFwcC9hcHAvc2VydmljZXMvdXRpbGl0eS5zZXJ2aWNlLnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9J21haW4tbmF2Jz5cXHJcXG4gICAgPGRpdiBjbGFzcz0nbmF2YmFyIG5hdmJhci1pbnZlcnNlJz5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9J25hdmJhci1oZWFkZXInPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nbmF2YmFyLXRvZ2dsZScgZGF0YS10b2dnbGU9J2NvbGxhcHNlJyBkYXRhLXRhcmdldD0nLm5hdmJhci1jb2xsYXBzZSc+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdzci1vbmx5Jz5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0naWNvbi1iYXInPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8YSBjbGFzcz0nbmF2YmFyLWJyYW5kJyBbcm91dGVyTGlua109XFxcIlsnL2hvbWUnXVxcXCI+bWFuYWdlLml0PC9hPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPSdjbGVhcmZpeCc+PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPSduYXZiYXItY29sbGFwc2UgY29sbGFwc2UnPlxcclxcbiAgICAgICAgICAgIDx1bCBjbGFzcz0nbmF2IG5hdmJhci1uYXYnPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9ob21lJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLWhvbWUnPjwvc3Bhbj4gU3RhcnRcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIiBbc3R5bGUuZGlzcGxheV09XFxcImFjY291bnRTZXJ2aWNlLnVzZXJWaWV3TW9kZWwuaXNTaWduZWRJbiA9PT0gdHJ1ZSA/ICdibG9jaycgOiAnbm9uZSdcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9ib2FyZCddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1hbGlnbi1qdXN0aWZ5Jz48L3NwYW4+IFByb2pla3R5XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDwhLS08bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPi0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPCEtLTxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvY291bnRlciddXFxcIj4tLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tZWR1Y2F0aW9uJz48L3NwYW4+IENvdW50ZXItLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwhLS08L2E+LS0+XFxyXFxuICAgICAgICAgICAgICAgIDwhLS08L2xpPi0tPlxcclxcbiAgICAgICAgICAgICAgICA8IS0tPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj4tLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwhLS08YSBbcm91dGVyTGlua109XFxcIlsnL2ZldGNoLWRhdGEnXVxcXCI+LS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXRoLWxpc3QnPjwvc3Bhbj4gRmV0Y2ggZGF0YS0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPCEtLTwvYT4tLT5cXHJcXG4gICAgICAgICAgICAgICAgPCEtLTwvbGk+LS0+XFxyXFxuICAgICAgICAgICAgICAgIDxociAvPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiIFtoaWRkZW5dPVxcXCJhY2NvdW50U2VydmljZS51c2VyVmlld01vZGVsLmlzU2lnbmVkSW4gPT09IHRydWVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9sb2dpbiddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1sb2ctaW4nPjwvc3Bhbj4gTG9nb3dhbmllXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCIgW2hpZGRlbl09XFxcImFjY291bnRTZXJ2aWNlLnVzZXJWaWV3TW9kZWwuaXNTaWduZWRJbiA9PT0gdHJ1ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL3JlZ2lzdHJhdGlvbiddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1lbnZlbG9wZSc+PC9zcGFuPiBSZWplc3RyYWNqYVxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgW3N0eWxlLmRpc3BsYXldPVxcXCJhY2NvdW50U2VydmljZS51c2VyVmlld01vZGVsLmlzU2lnbmVkSW4gPT09IHRydWUgPyAnYmxvY2snIDogJ25vbmUnXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFdpdGFqIHt7YWNjb3VudFNlcnZpY2UudXNlclZpZXdNb2RlbC51c2VyTmFtZX19XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSBbc3R5bGUuZGlzcGxheV09XFxcImFjY291bnRTZXJ2aWNlLnVzZXJWaWV3TW9kZWwuaXNTaWduZWRJbiA9PT0gdHJ1ZSA/ICdibG9jaycgOiAnbm9uZSdcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwibG9nT2ZmKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLWxvZy1vdXQnPjwvc3Bhbj4gV3lsb2d1alxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9uYXZtZW51LmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3NcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJsaSAuZ2x5cGhpY29uIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIaWdobGlnaHRpbmcgcnVsZXMgZm9yIG5hdiBtZW51IGl0ZW1zICovXFxyXFxubGkubGluay1hY3RpdmUgYSxcXHJcXG5saS5saW5rLWFjdGl2ZSBhOmhvdmVyLFxcclxcbmxpLmxpbmstYWN0aXZlIGE6Zm9jdXMge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE4OUM3O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi8qIEtlZXAgdGhlIG5hdiBtZW51IGluZGVwZW5kZW50IG9mIHNjcm9sbGluZyBhbmQgb24gdG9wIG9mIG90aGVyIGl0ZW1zICovXFxyXFxuLm1haW4tbmF2IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gICAgLyogT24gc21hbGwgc2NyZWVucywgY29udmVydCB0aGUgbmF2IG1lbnUgdG8gYSB2ZXJ0aWNhbCBzaWRlYmFyICovXFxyXFxuICAgIC5tYWluLW5hdiB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICB3aWR0aDogY2FsYygxNSUgLSAyMHB4KTtcXHJcXG4gICAgfVxcclxcbiAgICAubmF2YmFyIHtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXHJcXG4gICAgICAgIGJvcmRlci13aWR0aDogMHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICAgIC5uYXZiYXItaGVhZGVyIHtcXHJcXG4gICAgICAgIGZsb2F0OiBub25lO1xcclxcbiAgICB9XFxyXFxuICAgIC5uYXZiYXItY29sbGFwc2Uge1xcclxcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0NDQ7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5hdmJhciB1bCB7XFxyXFxuICAgICAgICBmbG9hdDogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICAubmF2YmFyIGxpIHtcXHJcXG4gICAgICAgIGZsb2F0OiBub25lO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICAgICAgbWFyZ2luOiA2cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5hdmJhciBsaSBhIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgfVxcclxcbiAgICAubmF2YmFyIGEge1xcclxcbiAgICAgICAgLyogSWYgYSBtZW51IGl0ZW0ncyB0ZXh0IGlzIHRvbyBsb25nLCB0cnVuY2F0ZSBpdCAqL1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbltoaWRkZW5dIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdob21lJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2hvbWUuY29tcG9uZW50Lmh0bWwnKVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDE+U3lzdGVtIHphcnrEhWR6YW5pYSBwcm9qZWt0YW1pPC9oMT5cXHJcXG48cD5HYWJyaWVsIE5pZW1pZWMgLSAxMzI4MTcgLSBQUnogMjAxNjwvcD5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9odHRwQ2xpZW50LnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdmZXRjaGRhdGEnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmV0Y2hkYXRhLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBwcm92aWRlcnM6IFtIdHRwQ2xpZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmV0Y2hEYXRhQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBmb3JlY2FzdHM6IFdlYXRoZXJGb3JlY2FzdFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGh0dHBDbGllbnQ6IEh0dHBDbGllbnQpIHtcclxuICAgICAgICBodHRwQ2xpZW50LmdldCgnL2FwaS9TYW1wbGVEYXRhL1dlYXRoZXJGb3JlY2FzdHMnKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5mb3JlY2FzdHMgPSByZXN1bHQuanNvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgV2VhdGhlckZvcmVjYXN0IHtcclxuICAgIGRhdGVGb3JtYXR0ZWQ6IHN0cmluZztcclxuICAgIHRlbXBlcmF0dXJlQzogbnVtYmVyO1xyXG4gICAgdGVtcGVyYXR1cmVGOiBudW1iZXI7XHJcbiAgICBzdW1tYXJ5OiBzdHJpbmc7XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmV0Y2hkYXRhL2ZldGNoZGF0YS5jb21wb25lbnQudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxPldlYXRoZXIgZm9yZWNhc3Q8L2gxPlxcclxcblxcclxcbjxwPlRoaXMgY29tcG9uZW50IGRlbW9uc3RyYXRlcyBmZXRjaGluZyBkYXRhIGZyb20gdGhlIHNlcnZlci48L3A+XFxyXFxuXFxyXFxuPHAgKm5nSWY9XFxcIiFmb3JlY2FzdHNcXFwiPjxlbT5Mb2FkaW5nLi4uPC9lbT48L3A+XFxyXFxuXFxyXFxuPHRhYmxlIGNsYXNzPSd0YWJsZScgKm5nSWY9XFxcImZvcmVjYXN0c1xcXCI+XFxyXFxuICAgIDx0aGVhZD5cXHJcXG4gICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICA8dGg+RGF0ZTwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPlRlbXAuIChDKTwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPlRlbXAuIChGKTwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPlN1bW1hcnk8L3RoPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgPC90aGVhZD5cXHJcXG4gICAgPHRib2R5PlxcclxcbiAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IGZvcmVjYXN0IG9mIGZvcmVjYXN0c1xcXCI+XFxyXFxuICAgICAgICAgICAgPHRkPnt7IGZvcmVjYXN0LmRhdGVGb3JtYXR0ZWQgfX08L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD57eyBmb3JlY2FzdC50ZW1wZXJhdHVyZUMgfX08L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD57eyBmb3JlY2FzdC50ZW1wZXJhdHVyZUYgfX08L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD57eyBmb3JlY2FzdC5zdW1tYXJ5IH19PC90ZD5cXHJcXG4gICAgICAgIDwvdHI+XFxyXFxuICAgIDwvdGJvZHk+XFxyXFxuPC90YWJsZT5cXHJcXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmV0Y2hkYXRhL2ZldGNoZGF0YS5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjb3VudGVyJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2NvdW50ZXIuY29tcG9uZW50Lmh0bWwnKVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ291bnRlckNvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgY3VycmVudENvdW50ID0gMDtcclxuXHJcbiAgICBwdWJsaWMgaW5jcmVtZW50Q291bnRlcigpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRDb3VudCsrO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgyPkNvdW50ZXI8L2gyPlxcclxcblxcclxcbjxwPlRoaXMgaXMgYSBzaW1wbGUgZXhhbXBsZSBvZiBhbiBBbmd1bGFyIDIgY29tcG9uZW50LjwvcD5cXHJcXG5cXHJcXG48cD5DdXJyZW50IGNvdW50OiA8c3Ryb25nPnt7IGN1cnJlbnRDb3VudCB9fTwvc3Ryb25nPjwvcD5cXHJcXG5cXHJcXG48YnV0dG9uIChjbGljayk9XFxcImluY3JlbWVudENvdW50ZXIoKVxcXCI+SW5jcmVtZW50PC9idXR0b24+XFxyXFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHtBY2NvdW50U2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2FjY291bnQuc2VydmljZVwiO1xyXG5pbXBvcnQge1V0aWxpdHlTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdXRpbGl0eS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncmVnaXN0cmF0aW9uJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcycpXSxcclxuICAgIHByb3ZpZGVyczogW1V0aWxpdHlTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVnaXN0cmF0aW9uQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgcmVnaXN0cmF0aW9uRm9ybTogRm9ybUdyb3VwO1xyXG4gICAgcHJpdmF0ZSBhY2NvdW50U2VydmljZTogQWNjb3VudFNlcnZpY2U7XHJcbiAgICBwcml2YXRlIHV0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIGFjY291bnRTZXJ2aWNlOiBBY2NvdW50U2VydmljZSwgdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlKXtcclxuICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlID0gYWNjb3VudFNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy51dGlsaXR5U2VydmljZSA9IHV0aWxpdHlTZXJ2aWNlO1xyXG5cclxuICAgICAgICB0aGlzLnJlZ2lzdHJhdGlvbkZvcm0gPSBmb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblN1Ym1pdCgpOiB2b2lkIHtcclxuICAgICAgICAgaWYoIXRoaXMucmVnaXN0cmF0aW9uRm9ybS52YWxpZCl7XHJcbiAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIHRoaXMuYWNjb3VudFNlcnZpY2UuY3JlYXRlTmV3QWNjb3VudCh0aGlzLnJlZ2lzdHJhdGlvbkZvcm0udmFsdWUuZW1haWwsIHRoaXMucmVnaXN0cmF0aW9uRm9ybS52YWx1ZS5wYXNzd29yZCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICBhbGVydCgnS29udG8gem9zdGHFgm8gcG9tecWbbG5pZSB1dHdvcnpvbmUuIE1vxbxlc3ogc2nEmSB0ZXJheiB6YWxvZ293YcSHLicpXHJcbiAgICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgIHRoaXMudXRpbGl0eVNlcnZpY2UuaGFuZGxlQXBpRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJtaS1yZWdpc3RyYXRpb25cXFwiPlxcclxcbiAgICA8aDE+UmVqZXN0cmFjamE8L2gxPlxcclxcbiAgICA8aHIgLz5cXHJcXG4gICAgPHA+UG9kYWogZW1haWwgaSBoYXPFgm8gYWJ5IHV0d29yennEhyBub3dlIGtvbnRvLjwvcD5cXHJcXG4gICAgPGZvcm0gW2Zvcm1Hcm91cF09XFxcInJlZ2lzdHJhdGlvbkZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcIm9uU3VibWl0KClcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW1haWxcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiZW1haWxcXFwiPlxcclxcbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVxcXCJyZWdpc3RyYXRpb25Gb3JtLmNvbnRyb2xzWydlbWFpbCddLnRvdWNoZWQgJiYgcmVnaXN0cmF0aW9uRm9ybS5jb250cm9sc1snZW1haWwnXS5oYXNFcnJvcigncmVxdWlyZWQnKVxcXCIgY2xhc3M9XFxcInRleHQtZGFuZ2VyXFxcIj5FbWFpbCBqZXN0IHd5bWFnYW55Ljwvc3Bhbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiSGFzxYJvXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcInBhc3N3b3JkXFxcIj5cXHJcXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cXFwicmVnaXN0cmF0aW9uRm9ybS5jb250cm9sc1sncGFzc3dvcmQnXS50b3VjaGVkICYmIHJlZ2lzdHJhdGlvbkZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ10uaGFzRXJyb3IoJ3JlcXVpcmVkJylcXFwiIGNsYXNzPVxcXCJ0ZXh0LWRhbmdlclxcXCI+SGFzxYJvIGplc3Qgd3ltYWdhbmUuPC9zcGFuPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2VzcyBwdWxsLXJpZ2h0XFxcIj5aYXJlamVzdHJ1aiBzacSZPC9idXR0b24+XFxyXFxuICAgIDwvZm9ybT5cXHJcXG48L2Rpdj5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubWktcmVnaXN0cmF0aW9uIGZvcm0ge1xcclxcbiAgd2lkdGg6IDMwJTsgfVxcclxcblxcclxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzLm1hcCAqL1xcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnN9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQge0FjY291bnRTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYWNjb3VudC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7VXRpbGl0eVNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy91dGlsaXR5LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdsb2dpbicsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9sb2dpbi5jb21wb25lbnQuY3NzJyldLFxyXG4gICAgcHJvdmlkZXJzOiBbVXRpbGl0eVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIGxvZ2luRm9ybTogRm9ybUdyb3VwO1xyXG4gICAgcHJpdmF0ZSBhY2NvdW50U2VydmljZTogQWNjb3VudFNlcnZpY2U7XHJcbiAgICBwcml2YXRlIHV0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZTtcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBhY2NvdW50U2VydmljZTogQWNjb3VudFNlcnZpY2UsIHV0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSwgcm91dGVyOiBSb3V0ZXIpe1xyXG4gICAgICAgIHRoaXMuYWNjb3VudFNlcnZpY2UgPSBhY2NvdW50U2VydmljZTtcclxuICAgICAgICB0aGlzLnV0aWxpdHlTZXJ2aWNlID0gdXRpbGl0eVNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcblxyXG4gICAgICAgIHRoaXMubG9naW5Gb3JtID0gZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25TdWJtaXQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYoIXRoaXMubG9naW5Gb3JtLnZhbGlkKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hY2NvdW50U2VydmljZS5sb2dpbih0aGlzLmxvZ2luRm9ybS52YWx1ZS5lbWFpbCwgdGhpcy5sb2dpbkZvcm0udmFsdWUucGFzc3dvcmQpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlLmdldEFuZFVwZGF0ZUFudGlGb3JnZXJ5VG9rZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5hY2NvdW50U2VydmljZS5pc1VzZXJTaWduZWRJbigpO1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ib2FyZCddKTtcclxuICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXRpbGl0eVNlcnZpY2UuaGFuZGxlQXBpRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJtaS1sb2dpblxcXCI+XFxyXFxuICAgIDxoMT5Mb2dvd2FuaWU8L2gxPlxcclxcbiAgICA8aHIgLz5cXHJcXG4gICAgPHA+UG9kYWogZW1haWwgaSBoYXPFgm8gYWJ5IHNpxJkgemFsb2dvd2HEhy48L3A+XFxyXFxuICAgIDxmb3JtIFtmb3JtR3JvdXBdPVxcXCJsb2dpbkZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcIm9uU3VibWl0KClcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW1haWxcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiZW1haWxcXFwiPlxcclxcbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVxcXCJsb2dpbkZvcm0uY29udHJvbHNbJ2VtYWlsJ10udG91Y2hlZCAmJiBsb2dpbkZvcm0uY29udHJvbHNbJ2VtYWlsJ10uaGFzRXJyb3IoJ3JlcXVpcmVkJylcXFwiIGNsYXNzPVxcXCJ0ZXh0LWRhbmdlclxcXCI+RW1haWwgamVzdCB3eW1hZ2FueS48L3NwYW4+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkhhc8WCb1xcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJwYXNzd29yZFxcXCI+XFxyXFxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcImxvZ2luRm9ybS5jb250cm9sc1sncGFzc3dvcmQnXS50b3VjaGVkICYmIGxvZ2luRm9ybS5jb250cm9sc1sncGFzc3dvcmQnXS5oYXNFcnJvcigncmVxdWlyZWQnKVxcXCIgY2xhc3M9XFxcInRleHQtZGFuZ2VyXFxcIj5IYXPFgm8gamVzdCB3eW1hZ2FuZS48L3NwYW4+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzIHB1bGwtcmlnaHRcXFwiPlphbG9ndWogc2nEmTwvYnV0dG9uPlxcclxcbiAgICA8L2Zvcm0+XFxyXFxuPC9kaXY+XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2xvZ2luLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzc1xuICoqIG1vZHVsZSBpZCA9IDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5taS1sb2dpbiBmb3JtIHtcXHJcXG4gIHdpZHRoOiAzMCU7IH1cXHJcXG5cXHJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1sb2dpbi5jb21wb25lbnQuY3NzLm1hcCAqL1xcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzc1xuICoqIG1vZHVsZSBpZCA9IDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0FjY291bnRTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYWNjb3VudC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7VXRpbGl0eVNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy91dGlsaXR5LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtQcm9qZWN0U2VydmljZSwgQm9hcmR9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9wcm9qZWN0LnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdib2FyZCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9ib2FyZC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9ib2FyZC5jb21wb25lbnQuY3NzJyldLFxyXG4gICAgcHJvdmlkZXJzOiBbVXRpbGl0eVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCb2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIHByaXZhdGUgcHJvamVjdFNlcnZpY2U6IFByb2plY3RTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBhY2NvdW50U2VydmljZTogQWNjb3VudFNlcnZpY2U7XHJcbiAgICBwcml2YXRlIHV0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZTtcclxuICAgIHByaXZhdGUgYm9hcmRzOiBBcnJheTxCb2FyZD47XHJcblxyXG4gICAgY29uc3RydWN0b3IoYWNjb3VudFNlcnZpY2U6IEFjY291bnRTZXJ2aWNlLCB1dGlsaXR5U2VydmljZTogVXRpbGl0eVNlcnZpY2UsIHByb2plY3RTZXJ2aWNlOiBQcm9qZWN0U2VydmljZSl7XHJcbiAgICAgICAgdGhpcy5hY2NvdW50U2VydmljZSA9IGFjY291bnRTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMudXRpbGl0eVNlcnZpY2UgPSB1dGlsaXR5U2VydmljZTtcclxuICAgICAgICB0aGlzLnByb2plY3RTZXJ2aWNlID0gcHJvamVjdFNlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hY2NvdW50U2VydmljZS5jaGVja0lmVXNlcklzQXV0aGVudGljYXRlZCgpO1xyXG4gICAgICAgIHRoaXMucHJvamVjdFNlcnZpY2UuZ2V0UHJvamVjdHNGb3JVc2VyKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmRzID0gcmVzdWx0Lmpzb24oKTtcclxuICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXRpbGl0eVNlcnZpY2UuaGFuZGxlQXBpRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ib2FyZC9ib2FyZC5jb21wb25lbnQudHNcbiAqKi8iLCJpbXBvcnQge0luamVjdGFibGUsIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJlc3BvbnNlfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSBcIi4vaHR0cENsaWVudC5zZXJ2aWNlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0U2VydmljZSB7XHJcbiAgICBwcml2YXRlIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoQEluamVjdChIdHRwQ2xpZW50KSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50KXtcclxuICAgICAgICB0aGlzLmh0dHBDbGllbnQgPSBodHRwQ2xpZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU5ld1Byb2plY3QobmFtZTogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQucG9zdCgnL2FwaS9Cb2FyZC9DcmVhdGVOZXdCb2FyZCcsIHtcclxuICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTmV3VGFzayhuYW1lOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcsIHByb2plY3RJZCkgOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wb3N0KCcvYXBpL0JvYXJkL0NyZWF0ZU5ld1Rhc2snLCB7XHJcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgcHJvamVjdElkOiBwcm9qZWN0SWRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm9qZWN0c0ZvclVzZXIoKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0KCcvYXBpL0JvYXJkL0dldFByb2plY3RzRm9yVXNlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByb2plY3QocHJvamVjdElkOiBudW1iZXIpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQoJy9hcGkvQm9hcmQvR2V0UHJvamVjdC8nICsgcHJvamVjdElkKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQm9hcmQge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBjb2x1bW5zOiBBcnJheTxDb2x1bW4+O1xyXG4gICAgdXNlckJvYXJkczogYW55O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sdW1uIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBzZXF1ZW5jZTogbnVtYmVyO1xyXG4gICAgdGFza3M6IEFycmF5PFRhc2s+O1xyXG4gICAgYm9hcmRJZDogbnVtYmVyO1xyXG4gICAgYm9hcmQ6IEJvYXJkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGFzayB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIHNlcXVlbmNlOiBudW1iZXI7XHJcbiAgICB1c2VySWQ6IHN0cmluZztcclxuICAgIHVzZXI6IGFueTtcclxuICAgIGNvbHVtbklkOiBudW1iZXI7XHJcbiAgICBjb2x1bW46IENvbHVtbjtcclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL0NsaWVudEFwcC9hcHAvc2VydmljZXMvcHJvamVjdC5zZXJ2aWNlLnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIm1pLWJvYXJkXFxcIj5cXHJcXG4gICAgPGgxPlByb2pla3R5PC9oMT5cXHJcXG4gICAgPGhyIC8+XFxyXFxuICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9ib2FyZC9uZXctcHJvamVjdCddXFxcIj5VdHfDs3J6IG5vd3kgcHJvamVrdDwvYnV0dG9uPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtaS1ib2FyZC1wcm9qZWN0c1xcXCI+XFxyXFxuICAgICAgICA8ZGl2ICpuZ0Zvcj1cXFwibGV0IGJvYXJkc1JvdyBvZiBib2FyZHMgfCByb3dzOjQ7IGxldCBpPWluZGV4XFxcIiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cXFwibGV0IGJvYXJkIG9mIGJvYXJkc1Jvd1xcXCIgY2xhc3M9XFxcImNvbC14cy0zIG1pLWJvYXJkLXByb2plY3RzLXByb2plY3RcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2JvYXJkL3Byb2plY3QvJyArIGJvYXJkLmlkXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0aHVtYm5haWxcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcHRpb25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3tib2FyZC5uYW1lfX08L2gzPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57e2JvYXJkLmRlc2NyaXB0aW9ufX08L3A+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ib2FyZC9ib2FyZC5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ib2FyZC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5jc3NcbiAqKiBtb2R1bGUgaWQgPSAzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubWktYm9hcmQgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXHJcXG4ubWktYm9hcmQtcHJvamVjdHMge1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDsgfVxcclxcbiAgLm1pLWJvYXJkLXByb2plY3RzLXByb2plY3QgLnRodW1ibmFpbDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTg5Qzc7IH1cXHJcXG4gICAgLm1pLWJvYXJkLXByb2plY3RzLXByb2plY3QgLnRodW1ibmFpbDpob3ZlciAuY2FwdGlvbiB7XFxyXFxuICAgICAgY29sb3I6IHdoaXRlOyB9XFxyXFxuXFxyXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9Ym9hcmQuY29tcG9uZW50LmNzcy5tYXAgKi9cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5jc3NcbiAqKiBtb2R1bGUgaWQgPSAzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7VXRpbGl0eVNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy91dGlsaXR5LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtBY2NvdW50U2VydmljZX0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL2FjY291bnQuc2VydmljZVwiO1xyXG5pbXBvcnQge0Zvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXJ9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQge1Byb2plY3RTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvcHJvamVjdC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmV3LXByb2plY3QnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbmV3LXByb2plY3QuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vbmV3LXByb2plY3QuY29tcG9uZW50LmNzcycpXSxcclxuICAgIHByb3ZpZGVyczogW1V0aWxpdHlTZXJ2aWNlLCBQcm9qZWN0U2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5ld1Byb2plY3RDb21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBhY2NvdW50U2VydmljZTogQWNjb3VudFNlcnZpY2U7XHJcbiAgICBwcml2YXRlIHV0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZTtcclxuICAgIHByaXZhdGUgcHJvamVjdFNlcnZpY2U6IFByb2plY3RTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBuZXdQcm9qZWN0Rm9ybTogRm9ybUdyb3VwO1xyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihhY2NvdW50U2VydmljZTogQWNjb3VudFNlcnZpY2UsIHV0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSwgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcm9qZWN0U2VydmljZTogUHJvamVjdFNlcnZpY2UsIHJvdXRlcjogUm91dGVyKXtcclxuICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlID0gYWNjb3VudFNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy51dGlsaXR5U2VydmljZSA9IHV0aWxpdHlTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMucHJvamVjdFNlcnZpY2UgPSBwcm9qZWN0U2VydmljZTtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuXHJcbiAgICAgICAgdGhpcy5hY2NvdW50U2VydmljZS5jaGVja0lmVXNlcklzQXV0aGVudGljYXRlZCgpO1xyXG5cclxuICAgICAgICB0aGlzLm5ld1Byb2plY3RGb3JtID0gZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBuYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KCkge1xyXG4gICAgICAgIHRoaXMucHJvamVjdFNlcnZpY2UuY3JlYXRlTmV3UHJvamVjdCh0aGlzLm5ld1Byb2plY3RGb3JtLnZhbHVlLm5hbWUsIHRoaXMubmV3UHJvamVjdEZvcm0udmFsdWUuZGVzY3JpcHRpb24pLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBhbGVydCgnTm93eSBwcm9qZWt0IHpvc3RhxYIgdXR3b3J6b255LicpO1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ib2FyZCddKTtcclxuICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXRpbGl0eVNlcnZpY2UuaGFuZGxlQXBpRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ib2FyZC9uZXctcHJvamVjdC5jb21wb25lbnQvbmV3LXByb2plY3QuY29tcG9uZW50LnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIm1pLW5ldy1wcm9qZWN0XFxcIj5cXHJcXG4gICAgPGgxPlV0d8Ozcnogbm93eSBwcm9qZWt0PC9oMT5cXHJcXG4gICAgPGhyIC8+XFxyXFxuICAgIDxwPlBvZGFqIHN6Y3plZ8OzxYJ5IG5vd2VnbyBwcm9qZWt0dTwvcD5cXHJcXG4gICAgPGZvcm0gW2Zvcm1Hcm91cF09XFxcIm5ld1Byb2plY3RGb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJvblN1Ym1pdCgpXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiTmF6d2FcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwibmFtZVxcXCI+XFxyXFxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcIm5ld1Byb2plY3RGb3JtLmNvbnRyb2xzWyduYW1lJ10udG91Y2hlZCAmJiBuZXdQcm9qZWN0Rm9ybS5jb250cm9sc1snbmFtZSddLmhhc0Vycm9yKCdyZXF1aXJlZCcpXFxcIiBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiPk5hendhIGplc3Qgd3ltYWdhbmEuPC9zcGFuPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIk9waXNcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiZGVzY3JpcHRpb25cXFwiPlxcclxcbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVxcXCJuZXdQcm9qZWN0Rm9ybS5jb250cm9sc1snZGVzY3JpcHRpb24nXS50b3VjaGVkICYmIG5ld1Byb2plY3RGb3JtLmNvbnRyb2xzWydkZXNjcmlwdGlvbiddLmhhc0Vycm9yKCdyZXF1aXJlZCcpXFxcIiBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiPk9waXMgamVzdCB3eW1hZ2FueS48L3NwYW4+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IHB1bGwtbGVmdFxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9ib2FyZCddXFxcIj5Qb3dyw7N0IGRvIHdpZG9rdSBwcm9qZWt0w7N3PC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2VzcyBwdWxsLXJpZ2h0XFxcIj5VdHfDs3J6IG5vd3kgcHJvamVrdDwvYnV0dG9uPlxcclxcbiAgICA8L2Zvcm0+XFxyXFxuPC9kaXY+XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2JvYXJkL25ldy1wcm9qZWN0LmNvbXBvbmVudC9uZXctcHJvamVjdC5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9uZXctcHJvamVjdC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2JvYXJkL25ldy1wcm9qZWN0LmNvbXBvbmVudC9uZXctcHJvamVjdC5jb21wb25lbnQuY3NzXG4gKiogbW9kdWxlIGlkID0gNDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1pLW5ldy1wcm9qZWN0IGZvcm0ge1xcclxcbiAgd2lkdGg6IDMwJTsgfVxcclxcblxcclxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPW5ldy1wcm9qZWN0LmNvbXBvbmVudC5jc3MubWFwICovXFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ib2FyZC9uZXctcHJvamVjdC5jb21wb25lbnQvbmV3LXByb2plY3QuY29tcG9uZW50LmNzc1xuICoqIG1vZHVsZSBpZCA9IDQzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdyb3dzJyB9KVxyXG5leHBvcnQgY2xhc3MgUm93c1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybSh2YWw6IEFycmF5PGFueT4sIGNvbHM6bnVtYmVyKSB7XHJcbiAgICAgICAgdmFyIGFycmF5T2ZBcnJheXMgPSBuZXcgQXJyYXk8YW55PigpO1xyXG5cclxuICAgICAgICBpZih2YWwpe1xyXG4gICAgICAgICAgICB3aGlsZSh2YWwubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIGFycmF5T2ZBcnJheXMucHVzaCh2YWwuc3BsaWNlKDAsIGNvbHMgfHwgNCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYXJyYXlPZkFycmF5cztcclxuICAgIH1cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vQ2xpZW50QXBwL2FwcC9waXBlcy9yb3dzcGlwZS50c1xuICoqLyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7VXRpbGl0eVNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy91dGlsaXR5LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtBY2NvdW50U2VydmljZX0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL2FjY291bnQuc2VydmljZVwiO1xyXG5pbXBvcnQge1Byb2plY3RTZXJ2aWNlLCBCb2FyZH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL3Byb2plY3Quc2VydmljZVwiO1xyXG5pbXBvcnQge1JvdXRlciwgQWN0aXZhdGVkUm91dGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwcm9qZWN0JyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3Byb2plY3QuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vcHJvamVjdC5jb21wb25lbnQuY3NzJyldLFxyXG4gICAgcHJvdmlkZXJzOiBbVXRpbGl0eVNlcnZpY2UsIFByb2plY3RTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvamVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIHByaXZhdGUgYWNjb3VudFNlcnZpY2U6IEFjY291bnRTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSB1dGlsaXR5U2VydmljZTogVXRpbGl0eVNlcnZpY2U7XHJcbiAgICBwcml2YXRlIHByb2plY3RTZXJ2aWNlOiBQcm9qZWN0U2VydmljZTtcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXI7XHJcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZTtcclxuICAgIHByaXZhdGUgYm9hcmQ6IEJvYXJkO1xyXG4gICAgcHJpdmF0ZSBuZXdUYXNrRm9ybTogRm9ybUdyb3VwO1xyXG4gICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXI7XHJcbiAgICBwcml2YXRlIHByb2plY3RJZDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGFjY291bnRTZXJ2aWNlOiBBY2NvdW50U2VydmljZSxcclxuICAgICAgICAgICAgICAgIHV0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByb2plY3RTZXJ2aWNlOiBQcm9qZWN0U2VydmljZSxcclxuICAgICAgICAgICAgICAgIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgICAgICAgICAgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgICAgICAgICAgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCl7XHJcbiAgICAgICAgdGhpcy5hY2NvdW50U2VydmljZSA9IGFjY291bnRTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMudXRpbGl0eVNlcnZpY2UgPSB1dGlsaXR5U2VydmljZTtcclxuICAgICAgICB0aGlzLnByb2plY3RTZXJ2aWNlID0gcHJvamVjdFNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xyXG4gICAgICAgIHRoaXMuZm9ybUJ1aWxkZXIgPSBmb3JtQnVpbGRlcjtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlLmNoZWNrSWZVc2VySXNBdXRoZW50aWNhdGVkKCk7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0SWQgPSArdGhpcy5yb3V0ZS5wYXJhbXNbJ3ZhbHVlJ10uaWQ7XHJcblxyXG4gICAgICAgIHRoaXMucHJvamVjdFNlcnZpY2UuZ2V0UHJvamVjdCh0aGlzLnByb2plY3RJZCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmQgPSByZXN1bHQuanNvbigpO1xyXG4gICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgdGhpcy51dGlsaXR5U2VydmljZS5oYW5kbGVBcGlFcnJvcihlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubmV3VGFza0Zvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgbmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVOZXdUYXNrKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucHJvamVjdFNlcnZpY2UuY3JlYXRlTmV3VGFzayh0aGlzLm5ld1Rhc2tGb3JtLnZhbHVlLm5hbWUsIHRoaXMubmV3VGFza0Zvcm0udmFsdWUuZGVzY3JpcHRpb24sIHRoaXMucHJvamVjdElkKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5uZXdUYXNrRm9ybS52YWx1ZS5uYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgdGhpcy5uZXdUYXNrRm9ybS52YWx1ZS5kZXNjcmlwdGlvbiA9IFwiXCI7XHJcbiAgICAgICAgICAgIC8vJCgnI21pLW5ldy10YXNrLW1vZGFsJykubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICAgICAgYWxlcnQoXCJEb2Rhbm8gemFkYW5pZSA6KVwiKTtcclxuICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXRpbGl0eVNlcnZpY2UuaGFuZGxlQXBpRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYm9hcmQvcHJvamVjdC5jb21wb25lbnQvcHJvamVjdC5jb21wb25lbnQudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwibWktcHJvamVjdFxcXCI+XFxyXFxuICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLXRvZ2dsZT1cXFwibW9kYWxcXFwiIGRhdGEtdGFyZ2V0PVxcXCIjbWktbmV3LXRhc2stbW9kYWxcXFwiID5Eb2RhaiBub3dlIHphZGFuaWU8L2J1dHRvbj5cXHJcXG4gICAgPGhyIC8+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1pLXByb2plY3QtY29sdW1uIGNvbC14cy00XFxcIiAqbmdGb3I9XFxcImxldCBjb2x1bW4gb2YgYm9hcmQ/LmNvbHVtbnNcXFwiPlxcclxcbiAgICAgICAgPGgzPnt7Y29sdW1uLm5hbWV9fTwvaDM+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjwhLS0gTkVXIFRBU0sgTU9EQUwgLS0+XFxyXFxuPGRpdiBpZD1cXFwibWktbmV3LXRhc2stbW9kYWxcXFwiIGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiIHJvbGU9XFxcImRpYWxvZ1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZ1xcXCIgcm9sZT1cXFwiZG9jdW1lbnRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XFxcIm5ld1Rhc2tGb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJjcmVhdGVOZXdUYXNrKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgYXJpYS1sYWJlbD1cXFwiQ2xvc2VcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+Tm93ZSB6YWRhbmllPC9oND5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIk5hendhXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIm5hbWVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cXFwibmV3VGFza0Zvcm0uY29udHJvbHNbJ25hbWUnXS50b3VjaGVkICYmIG5ld1Rhc2tGb3JtLmNvbnRyb2xzWyduYW1lJ10uaGFzRXJyb3IoJ3JlcXVpcmVkJylcXFwiIGNsYXNzPVxcXCJ0ZXh0LWRhbmdlclxcXCI+TmF6d2EgamVzdCB3eW1hZ2FuYS48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiT3Bpc1xcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJkZXNjcmlwdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVxcXCJuZXdUYXNrRm9ybS5jb250cm9sc1snZGVzY3JpcHRpb24nXS50b3VjaGVkICYmIG5ld1Rhc2tGb3JtLmNvbnRyb2xzWydkZXNjcmlwdGlvbiddLmhhc0Vycm9yKCdyZXF1aXJlZCcpXFxcIiBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiPk9waXMgamVzdCB3eW1hZ2FueS48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3MgcHVsbC1yaWdodFxcXCI+RG9kYWo8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9mb3JtPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ib2FyZC9wcm9qZWN0LmNvbXBvbmVudC9wcm9qZWN0LmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gNDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3Byb2plY3QuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ib2FyZC9wcm9qZWN0LmNvbXBvbmVudC9wcm9qZWN0LmNvbXBvbmVudC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA0OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubWktcHJvamVjdCB7XFxyXFxuICBtYXJnaW4tdG9wOiA0MHB4OyB9XFxyXFxuICAubWktcHJvamVjdC1jb2x1bW4ge1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBsaWdodGdyYXk7IH1cXHJcXG4gICAgLm1pLXByb2plY3QtY29sdW1uOmxhc3QtY2hpbGQge1xcclxcbiAgICAgIGJvcmRlcjogbm9uZTsgfVxcclxcblxcclxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXByb2plY3QuY29tcG9uZW50LmNzcy5tYXAgKi9cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2JvYXJkL3Byb2plY3QuY29tcG9uZW50L3Byb2plY3QuY29tcG9uZW50LmNzc1xuICoqIG1vZHVsZSBpZCA9IDQ5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9