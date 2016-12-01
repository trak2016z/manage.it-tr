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
	var LoginComponent = (function () {
	    function LoginComponent(formBuilder, accountService, utilityService) {
	        this.accountService = accountService;
	        this.utilityService = utilityService;
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
	        __metadata('design:paramtypes', [forms_1.FormBuilder, account_service_1.AccountService, utility_service_1.UtilityService])
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
	var ProjectComponent = (function () {
	    function ProjectComponent(accountService, utilityService, projectService, router, route) {
	        this.accountService = accountService;
	        this.utilityService = utilityService;
	        this.projectService = projectService;
	        this.router = router;
	        this.route = route;
	    }
	    ProjectComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.accountService.checkIfUserIsAuthenticated();
	        var projectId = +this.route.params['value'].id;
	        this.projectService.getProject(projectId).subscribe(function (result) {
	            _this.board = result.json();
	        }, function (error) {
	            _this.utilityService.handleApiError(error);
	        });
	    };
	    ProjectComponent = __decorate([
	        core_1.Component({
	            selector: 'project',
	            template: __webpack_require__(46),
	            styles: [__webpack_require__(47)],
	            providers: [utility_service_1.UtilityService, project_service_1.ProjectService]
	        }), 
	        __metadata('design:paramtypes', [account_service_1.AccountService, utility_service_1.UtilityService, project_service_1.ProjectService, router_1.Router, router_1.ActivatedRoute])
	    ], ProjectComponent);
	    return ProjectComponent;
	}());
	exports.ProjectComponent = ProjectComponent;


/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mi-project\">\r\n\r\n</div>"

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(48);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports
	
	
	// module
	exports.push([module.id, "\r\n\r\n/*# sourceMappingURL=project.component.css.map */\r\n", ""]);
	
	// exports


/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzY3NGM4MTg5YTlkMGIxMjBlYjgiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcz9kZGMzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3NlcnZpY2VzL2FjY291bnQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3NlcnZpY2VzL2h0dHBDbGllbnQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9zZXJ2aWNlcy91dGlsaXR5LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3M/OWY2NCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmV0Y2hkYXRhL2ZldGNoZGF0YS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzP2Y1YjkiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcz9lN2MzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ib2FyZC9ib2FyZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9zZXJ2aWNlcy9wcm9qZWN0LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ib2FyZC9ib2FyZC5jb21wb25lbnQuY3NzPzMxYWYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2JvYXJkL25ldy1wcm9qZWN0LmNvbXBvbmVudC9uZXctcHJvamVjdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2JvYXJkL25ldy1wcm9qZWN0LmNvbXBvbmVudC9uZXctcHJvamVjdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYm9hcmQvbmV3LXByb2plY3QuY29tcG9uZW50L25ldy1wcm9qZWN0LmNvbXBvbmVudC5jc3M/NDNiZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYm9hcmQvbmV3LXByb2plY3QuY29tcG9uZW50L25ldy1wcm9qZWN0LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9waXBlcy9yb3dzcGlwZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYm9hcmQvcHJvamVjdC5jb21wb25lbnQvcHJvamVjdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2JvYXJkL3Byb2plY3QuY29tcG9uZW50L3Byb2plY3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2JvYXJkL3Byb2plY3QuY29tcG9uZW50L3Byb2plY3QuY29tcG9uZW50LmNzcz82NmRjIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ib2FyZC9wcm9qZWN0LmNvbXBvbmVudC9wcm9qZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDdENBLHFCQUFPLENBQThCLENBQUM7QUFDdEMscUJBQU8sQ0FBUyxDQUFDO0FBQ2pCLGtDQUErQixDQUFlLENBQUM7QUFDL0MsZ0RBQW9DLENBQW9C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ZUFBSzthQUNKLEtBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzlDLENBQUMsQ0FBQyxDQUFDO0tBQ1AsQ0FBQztLQTlCTDtTQUFDLGdCQUFTLENBQUM7YUFDUCxRQUFRLEVBQUUsU0FBUzthQUNuQixRQUFRLEVBQUUsbUJBQU8sQ0FBQyxFQUEwQixDQUFDO2FBQzdDLE1BQU0sRUFBRSxDQUFDLG1CQUFPLENBQUMsRUFBeUIsQ0FBQyxDQUFDO2FBQzVDLFNBQVMsRUFBRSxDQUFDLGdDQUFjLEVBQUUsZ0NBQWMsQ0FBQztVQUM5QyxDQUFDOzt5QkFBQTtLQTBCRix1QkFBQztBQUFELEVBQUM7QUF6QlkseUJBQWdCLG1CQXlCNUI7Ozs7Ozs7QUNyQ0QsNEQ7Ozs7Ozs7QUNDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBIiwiZmlsZSI6Im1haW4tc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAzNjc0YzgxODlhOWQwYjEyMGViOFxuICoqLyIsImltcG9ydCAnYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscyc7XHJcbmltcG9ydCAnem9uZS5qcyc7XHJcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHBsYXRmb3JtTm9kZUR5bmFtaWMgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xyXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubW9kdWxlJztcclxuXHJcbmVuYWJsZVByb2RNb2RlKCk7XHJcbmNvbnN0IHBsYXRmb3JtID0gcGxhdGZvcm1Ob2RlRHluYW1pYygpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHBhcmFtczogYW55KSA6IFByb21pc2U8eyBodG1sOiBzdHJpbmcsIGdsb2JhbHM/OiBhbnkgfT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0Wm9uZSA9IFpvbmUuY3VycmVudC5mb3JrKHtcclxuICAgICAgICAgICAgbmFtZTogJ2FuZ3VsYXItdW5pdmVyc2FsIHJlcXVlc3QnLFxyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgICAgICBiYXNlVXJsOiAnLycsXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0VXJsOiBwYXJhbXMudXJsLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luVXJsOiBwYXJhbXMub3JpZ2luLFxyXG4gICAgICAgICAgICAgICAgcHJlYm9vdDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBSZW5kZXIganVzdCB0aGUgPGFwcD4gY29tcG9uZW50IGluc3RlYWQgb2Ygd3JhcHBpbmcgaXQgaW5zaWRlIGFuIGV4dHJhIEhUTUwgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgIC8vIFdhaXRpbmcgb24gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvdW5pdmVyc2FsL2lzc3Vlcy8zNDdcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50OiAnPCFET0NUWVBFIGh0bWw+PGh0bWw+PGhlYWQ+PC9oZWFkPjxib2R5PjxhcHA+PC9hcHA+PC9ib2R5PjwvaHRtbD4nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uSGFuZGxlRXJyb3I6IChwYXJlbnRab25lLCBjdXJyZW50Wm9uZSwgdGFyZ2V0Wm9uZSwgZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIElmIGFueSBlcnJvciBvY2N1cnMgd2hpbGUgcmVuZGVyaW5nIHRoZSBtb2R1bGUsIHJlamVjdCB0aGUgd2hvbGUgb3BlcmF0aW9uXHJcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlcXVlc3Rab25lLnJ1bjxQcm9taXNlPHN0cmluZz4+KCgpID0+IHBsYXRmb3JtLnNlcmlhbGl6ZU1vZHVsZShBcHBNb2R1bGUpKS50aGVuKGh0bWwgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKHsgaHRtbDogaHRtbCB9KTtcclxuICAgICAgICB9LCByZWplY3QpO1xyXG4gICAgfSk7XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9DbGllbnRBcHAvYm9vdC1zZXJ2ZXIudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCJcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ6b25lLmpzXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJ6b25lLmpzXCJcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWxcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVW5pdmVyc2FsTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50J1xyXG5pbXBvcnQgeyBOYXZNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGZXRjaERhdGFDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmV0Y2hkYXRhL2ZldGNoZGF0YS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb3VudGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQge1JlZ2lzdHJhdGlvbkNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0JvYXJkQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2JvYXJkL2JvYXJkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0FjY291bnRTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9hY2NvdW50LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tIFwiLi9zZXJ2aWNlcy9odHRwQ2xpZW50LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtVdGlsaXR5U2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvdXRpbGl0eS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7TmV3UHJvamVjdENvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9ib2FyZC9uZXctcHJvamVjdC5jb21wb25lbnQvbmV3LXByb2plY3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7UHJvamVjdFNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL3Byb2plY3Quc2VydmljZVwiO1xyXG5pbXBvcnQge1Jvd3NQaXBlfSBmcm9tICcuL3BpcGVzL3Jvd3NwaXBlJztcclxuaW1wb3J0IHtQcm9qZWN0Q29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2JvYXJkL3Byb2plY3QuY29tcG9uZW50L3Byb2plY3QuY29tcG9uZW50XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgYm9vdHN0cmFwOiBbIEFwcENvbXBvbmVudCBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50LFxyXG4gICAgICAgIE5hdk1lbnVDb21wb25lbnQsXHJcbiAgICAgICAgQ291bnRlckNvbXBvbmVudCxcclxuICAgICAgICBGZXRjaERhdGFDb21wb25lbnQsXHJcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcclxuICAgICAgICBSZWdpc3RyYXRpb25Db21wb25lbnQsXHJcbiAgICAgICAgTG9naW5Db21wb25lbnQsXHJcbiAgICAgICAgQm9hcmRDb21wb25lbnQsXHJcbiAgICAgICAgTmV3UHJvamVjdENvbXBvbmVudCxcclxuICAgICAgICBQcm9qZWN0Q29tcG9uZW50LFxyXG4gICAgICAgIFJvd3NQaXBlXHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIFVuaXZlcnNhbE1vZHVsZSwgLy8gTXVzdCBiZSBmaXJzdCBpbXBvcnQuIFRoaXMgYXV0b21hdGljYWxseSBpbXBvcnRzIEJyb3dzZXJNb2R1bGUsIEh0dHBNb2R1bGUsIGFuZCBKc29ucE1vZHVsZSB0b28uXHJcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvclJvb3QoW1xyXG4gICAgICAgICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnaG9tZScsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2hvbWUnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnY291bnRlcicsIGNvbXBvbmVudDogQ291bnRlckNvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdmZXRjaC1kYXRhJywgY29tcG9uZW50OiBGZXRjaERhdGFDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAncmVnaXN0cmF0aW9uJywgY29tcG9uZW50OiBSZWdpc3RyYXRpb25Db21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnbG9naW4nLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2JvYXJkJywgY29tcG9uZW50OiBCb2FyZENvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdib2FyZC9uZXctcHJvamVjdCcsIGNvbXBvbmVudDogTmV3UHJvamVjdENvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdib2FyZC9wcm9qZWN0LzppZCcsIGNvbXBvbmVudDogUHJvamVjdENvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICcqKicsIHJlZGlyZWN0VG86ICdob21lJyB9XHJcbiAgICAgICAgXSksXHJcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZVxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW0h0dHBDbGllbnQsIEFjY291bnRTZXJ2aWNlLCBVdGlsaXR5U2VydmljZSwgUHJvamVjdFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYWNjb3VudFNlcnZpY2U6IEFjY291bnRTZXJ2aWNlKXtcclxuICAgICAgICBhY2NvdW50U2VydmljZS5pc1VzZXJTaWduZWRJbigpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vQ2xpZW50QXBwL2FwcC9hcHAubW9kdWxlLnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIlxuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz0nY29udGFpbmVyLWZsdWlkJz5cXHJcXG4gICAgPGRpdiBjbGFzcz0ncm93Jz5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9J2NvbC1zbS0yJz5cXHJcXG4gICAgICAgICAgICA8bmF2LW1lbnU+PC9uYXYtbWVudT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz0nY29sLXNtLTEwIGJvZHktY29udGVudCc+XFxyXFxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vYXBwLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXHJcXG4gICAgLyogT24gc21hbGwgc2NyZWVucywgdGhlIG5hdiBtZW51IHNwYW5zIHRoZSBmdWxsIHdpZHRoIG9mIHRoZSBzY3JlZW4uIExlYXZlIGEgc3BhY2UgZm9yIGl0LiAqL1xcclxcbiAgICAuYm9keS1jb250ZW50IHtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtBY2NvdW50U2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2FjY291bnQuc2VydmljZVwiO1xyXG5pbXBvcnQge1V0aWxpdHlTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdXRpbGl0eS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmF2LW1lbnUnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbmF2bWVudS5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9uYXZtZW51LmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5hdk1lbnVDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhY2NvdW50U2VydmljZTogQWNjb3VudFNlcnZpY2UsIHByaXZhdGUgdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlKXtcclxuICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlID0gYWNjb3VudFNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy51dGlsaXR5U2VydmljZSA9IHV0aWxpdHlTZXJ2aWNlO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ09mZigpe1xyXG4gICAgICAgIHRoaXMuYWNjb3VudFNlcnZpY2UubG9nT2ZmKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudFNlcnZpY2UuZ2V0QW5kVXBkYXRlQW50aUZvcmdlcnlUb2tlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlLmlzVXNlclNpZ25lZEluKCk7XHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnV0aWxpdHlTZXJ2aWNlLmhhbmRsZUFwaUVycm9yKGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LnRzXG4gKiovIiwiaW1wb3J0IHtJbmplY3RhYmxlLCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZXNwb25zZX0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gXCIuL2h0dHBDbGllbnQuc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQWNjb3VudFNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50O1xyXG4gICAgcHVibGljIHVzZXJWaWV3TW9kZWw6IFVzZXJWaWV3TW9kZWw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoQEluamVjdChIdHRwQ2xpZW50KSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50KXtcclxuICAgICAgICB0aGlzLmh0dHBDbGllbnQgPSBodHRwQ2xpZW50O1xyXG4gICAgICAgIHRoaXMudXNlclZpZXdNb2RlbCA9IG5ldyBVc2VyVmlld01vZGVsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tJZlVzZXJJc0F1dGhlbnRpY2F0ZWQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUFudGlGb3JnZXJ5VG9rZW5BZnRlckxvZ2luT3JMb2dvdXQocmVzcG9uc2U6IFJlc3BvbnNlKXtcclxuICAgICAgICB2YXIgaW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaW5wdXRFbGVtZW50LmlubmVySFRNTCA9IHJlc3BvbnNlWydfYm9keSddO1xyXG4gICAgICAgIHZhciBuZXdUb2tlbiA9IGlucHV0RWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKVsnX19SZXF1ZXN0VmVyaWZpY2F0aW9uVG9rZW4nXS52YWx1ZTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJfX1JlcXVlc3RWZXJpZmljYXRpb25Ub2tlblwiKVswXVsndmFsdWUnXSA9IG5ld1Rva2VuO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU5ld0FjY291bnQoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcclxuICAgICAgICB2YXIgcmVxdWVzdE1vZGVsID0ge1xyXG4gICAgICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgICAgICAgICAgY29uZmlybVBhc3N3b3JkOiBwYXNzd29yZFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQucG9zdCgnL2FwaS9BY2NvdW50L1JlZ2lzdGVyJywgcmVxdWVzdE1vZGVsKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbihlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xyXG4gICAgICAgIHZhciByZXF1ZXN0TW9kZWwgPSB7XHJcbiAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQucG9zdCgnL2FwaS9BY2NvdW50L0xvZ2luJywgcmVxdWVzdE1vZGVsKTtcclxuICAgIH1cclxuXHJcbiAgICBpc1VzZXJTaWduZWRJbigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmh0dHBDbGllbnQuZ2V0KCcvYXBpL0FjY291bnQvSXNVc2VyU2lnbmVkSW4nKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGFKc29uID0gZGF0YS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJWaWV3TW9kZWwuaXNTaWduZWRJbiA9IGRhdGFKc29uLmlzU2lnbmVkSW47XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJWaWV3TW9kZWwudXNlck5hbWUgPSBkYXRhSnNvbi5uYW1lO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbmRVcGRhdGVBbnRpRm9yZ2VyeVRva2VuKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaHR0cENsaWVudC5nZXQoJy9hcGkvQWNjb3VudC9BbnRpRm9yZ2VyeVRva2VuJylcclxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUFudGlGb3JnZXJ5VG9rZW5BZnRlckxvZ2luT3JMb2dvdXQocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dPZmYoKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQucG9zdCgnL2FwaS9BY2NvdW50L0xvZ09mZicsIHt9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJWaWV3TW9kZWwge1xyXG4gICAgaXNTaWduZWRJbjogYm9vbGVhbjtcclxuICAgIHVzZXJOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmlzU2lnbmVkSW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVzZXJOYW1lID0gXCJcIjtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL0NsaWVudEFwcC9hcHAvc2VydmljZXMvYWNjb3VudC5zZXJ2aWNlLnRzXG4gKiovIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIdHRwQ2xpZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xyXG4gICAgICAgIHRoaXMuaHR0cCA9IGh0dHA7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQW50aUZvcmdlcnlUb2tlbkhlYWRlcihoZWFkZXJzOiBIZWFkZXJzKSB7XHJcbiAgICAgICAgdmFyIGFudGlGb3JnZXJ5VG9rZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcIl9fUmVxdWVzdFZlcmlmaWNhdGlvblRva2VuXCIpWzBdWyd2YWx1ZSddO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdSZXF1ZXN0VmVyaWZpY2F0aW9uVG9rZW4nLCBhbnRpRm9yZ2VyeVRva2VuKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQodXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBwb3N0KHVybCwgZGF0YSkge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUFudGlGb3JnZXJ5VG9rZW5IZWFkZXIoaGVhZGVycyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgZGF0YSwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL0NsaWVudEFwcC9hcHAvc2VydmljZXMvaHR0cENsaWVudC5zZXJ2aWNlLnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvaHR0cFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVdGlsaXR5U2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVBcGlFcnJvcihlcnJvcjogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IuX2JvZHkpO1xyXG4gICAgfVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9DbGllbnRBcHAvYXBwL3NlcnZpY2VzL3V0aWxpdHkuc2VydmljZS50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPSdtYWluLW5hdic+XFxyXFxuICAgIDxkaXYgY2xhc3M9J25hdmJhciBuYXZiYXItaW52ZXJzZSc+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPSduYXZiYXItaGVhZGVyJz5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J25hdmJhci10b2dnbGUnIGRhdGEtdG9nZ2xlPSdjb2xsYXBzZScgZGF0YS10YXJnZXQ9Jy5uYXZiYXItY29sbGFwc2UnPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nc3Itb25seSc+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0naWNvbi1iYXInPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9J25hdmJhci1icmFuZCcgW3JvdXRlckxpbmtdPVxcXCJbJy9ob21lJ11cXFwiPm1hbmFnZS5pdDwvYT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz0nY2xlYXJmaXgnPjwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz0nbmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlJz5cXHJcXG4gICAgICAgICAgICA8dWwgY2xhc3M9J25hdiBuYXZiYXItbmF2Jz5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvaG9tZSddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1ob21lJz48L3NwYW4+IFN0YXJ0XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCIgW3N0eWxlLmRpc3BsYXldPVxcXCJhY2NvdW50U2VydmljZS51c2VyVmlld01vZGVsLmlzU2lnbmVkSW4gPT09IHRydWUgPyAnYmxvY2snIDogJ25vbmUnXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvYm9hcmQnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tYWxpZ24tanVzdGlmeSc+PC9zcGFuPiBQcm9qZWt0eVxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8IS0tPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj4tLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwhLS08YSBbcm91dGVyTGlua109XFxcIlsnL2NvdW50ZXInXVxcXCI+LS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLWVkdWNhdGlvbic+PC9zcGFuPiBDb3VudGVyLS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8IS0tPC9hPi0tPlxcclxcbiAgICAgICAgICAgICAgICA8IS0tPC9saT4tLT5cXHJcXG4gICAgICAgICAgICAgICAgPCEtLTxsaSBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCI+LS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8IS0tPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9mZXRjaC1kYXRhJ11cXFwiPi0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi10aC1saXN0Jz48L3NwYW4+IEZldGNoIGRhdGEtLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwhLS08L2E+LS0+XFxyXFxuICAgICAgICAgICAgICAgIDwhLS08L2xpPi0tPlxcclxcbiAgICAgICAgICAgICAgICA8aHIgLz5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIiBbaGlkZGVuXT1cXFwiYWNjb3VudFNlcnZpY2UudXNlclZpZXdNb2RlbC5pc1NpZ25lZEluID09PSB0cnVlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvbG9naW4nXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tbG9nLWluJz48L3NwYW4+IExvZ293YW5pZVxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiIFtoaWRkZW5dPVxcXCJhY2NvdW50U2VydmljZS51c2VyVmlld01vZGVsLmlzU2lnbmVkSW4gPT09IHRydWVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9yZWdpc3RyYXRpb24nXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tZW52ZWxvcGUnPjwvc3Bhbj4gUmVqZXN0cmFjamFcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIFtzdHlsZS5kaXNwbGF5XT1cXFwiYWNjb3VudFNlcnZpY2UudXNlclZpZXdNb2RlbC5pc1NpZ25lZEluID09PSB0cnVlID8gJ2Jsb2NrJyA6ICdub25lJ1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBXaXRhaiB7e2FjY291bnRTZXJ2aWNlLnVzZXJWaWV3TW9kZWwudXNlck5hbWV9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgW3N0eWxlLmRpc3BsYXldPVxcXCJhY2NvdW50U2VydmljZS51c2VyVmlld01vZGVsLmlzU2lnbmVkSW4gPT09IHRydWUgPyAnYmxvY2snIDogJ25vbmUnXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcImxvZ09mZigpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1sb2ctb3V0Jz48L3NwYW4+IFd5bG9ndWpcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbmF2bWVudS5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwibGkgLmdseXBoaWNvbiB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogSGlnaGxpZ2h0aW5nIHJ1bGVzIGZvciBuYXYgbWVudSBpdGVtcyAqL1xcclxcbmxpLmxpbmstYWN0aXZlIGEsXFxyXFxubGkubGluay1hY3RpdmUgYTpob3ZlcixcXHJcXG5saS5saW5rLWFjdGl2ZSBhOmZvY3VzIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxODlDNztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBLZWVwIHRoZSBuYXYgbWVudSBpbmRlcGVuZGVudCBvZiBzY3JvbGxpbmcgYW5kIG9uIHRvcCBvZiBvdGhlciBpdGVtcyAqL1xcclxcbi5tYWluLW5hdiB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgIC8qIE9uIHNtYWxsIHNjcmVlbnMsIGNvbnZlcnQgdGhlIG5hdiBtZW51IHRvIGEgdmVydGljYWwgc2lkZWJhciAqL1xcclxcbiAgICAubWFpbi1uYXYge1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgd2lkdGg6IGNhbGMoMTUlIC0gMjBweCk7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5hdmJhciB7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxyXFxuICAgICAgICBib3JkZXItd2lkdGg6IDBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgfVxcclxcbiAgICAubmF2YmFyLWhlYWRlciB7XFxyXFxuICAgICAgICBmbG9hdDogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICAubmF2YmFyLWNvbGxhcHNlIHtcXHJcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDQ0O1xcclxcbiAgICAgICAgcGFkZGluZzogMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5uYXZiYXIgdWwge1xcclxcbiAgICAgICAgZmxvYXQ6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5hdmJhciBsaSB7XFxyXFxuICAgICAgICBmbG9hdDogbm9uZTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgICAgIG1hcmdpbjogNnB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5uYXZiYXIgbGkgYSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5hdmJhciBhIHtcXHJcXG4gICAgICAgIC8qIElmIGEgbWVudSBpdGVtJ3MgdGV4dCBpcyB0b28gbG9uZywgdHJ1bmNhdGUgaXQgKi9cXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5baGlkZGVuXSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3NcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaG9tZScsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9ob21lLmNvbXBvbmVudC5odG1sJylcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxPlN5c3RlbSB6YXJ6xIVkemFuaWEgcHJvamVrdGFtaTwvaDE+XFxyXFxuPHA+R2FicmllbCBOaWVtaWVjIC0gMTMyODE3IC0gUFJ6IDIwMTY8L3A+XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tIFwiLi4vLi4vc2VydmljZXMvaHR0cENsaWVudC5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZmV0Y2hkYXRhJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZldGNoZGF0YS5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgcHJvdmlkZXJzOiBbSHR0cENsaWVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZldGNoRGF0YUNvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgZm9yZWNhc3RzOiBXZWF0aGVyRm9yZWNhc3RbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihodHRwQ2xpZW50OiBIdHRwQ2xpZW50KSB7XHJcbiAgICAgICAgaHR0cENsaWVudC5nZXQoJy9hcGkvU2FtcGxlRGF0YS9XZWF0aGVyRm9yZWNhc3RzJykuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9yZWNhc3RzID0gcmVzdWx0Lmpzb24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIFdlYXRoZXJGb3JlY2FzdCB7XHJcbiAgICBkYXRlRm9ybWF0dGVkOiBzdHJpbmc7XHJcbiAgICB0ZW1wZXJhdHVyZUM6IG51bWJlcjtcclxuICAgIHRlbXBlcmF0dXJlRjogbnVtYmVyO1xyXG4gICAgc3VtbWFyeTogc3RyaW5nO1xyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50LnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMT5XZWF0aGVyIGZvcmVjYXN0PC9oMT5cXHJcXG5cXHJcXG48cD5UaGlzIGNvbXBvbmVudCBkZW1vbnN0cmF0ZXMgZmV0Y2hpbmcgZGF0YSBmcm9tIHRoZSBzZXJ2ZXIuPC9wPlxcclxcblxcclxcbjxwICpuZ0lmPVxcXCIhZm9yZWNhc3RzXFxcIj48ZW0+TG9hZGluZy4uLjwvZW0+PC9wPlxcclxcblxcclxcbjx0YWJsZSBjbGFzcz0ndGFibGUnICpuZ0lmPVxcXCJmb3JlY2FzdHNcXFwiPlxcclxcbiAgICA8dGhlYWQ+XFxyXFxuICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgPHRoPkRhdGU8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5UZW1wLiAoQyk8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5UZW1wLiAoRik8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5TdW1tYXJ5PC90aD5cXHJcXG4gICAgICAgIDwvdHI+XFxyXFxuICAgIDwvdGhlYWQ+XFxyXFxuICAgIDx0Ym9keT5cXHJcXG4gICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBmb3JlY2FzdCBvZiBmb3JlY2FzdHNcXFwiPlxcclxcbiAgICAgICAgICAgIDx0ZD57eyBmb3JlY2FzdC5kYXRlRm9ybWF0dGVkIH19PC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+e3sgZm9yZWNhc3QudGVtcGVyYXR1cmVDIH19PC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+e3sgZm9yZWNhc3QudGVtcGVyYXR1cmVGIH19PC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+e3sgZm9yZWNhc3Quc3VtbWFyeSB9fTwvdGQ+XFxyXFxuICAgICAgICA8L3RyPlxcclxcbiAgICA8L3Rib2R5PlxcclxcbjwvdGFibGU+XFxyXFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY291bnRlcicsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9jb3VudGVyLmNvbXBvbmVudC5odG1sJylcclxufSlcclxuZXhwb3J0IGNsYXNzIENvdW50ZXJDb21wb25lbnQge1xyXG4gICAgcHVibGljIGN1cnJlbnRDb3VudCA9IDA7XHJcblxyXG4gICAgcHVibGljIGluY3JlbWVudENvdW50ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Q291bnQrKztcclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuY29tcG9uZW50LnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMj5Db3VudGVyPC9oMj5cXHJcXG5cXHJcXG48cD5UaGlzIGlzIGEgc2ltcGxlIGV4YW1wbGUgb2YgYW4gQW5ndWxhciAyIGNvbXBvbmVudC48L3A+XFxyXFxuXFxyXFxuPHA+Q3VycmVudCBjb3VudDogPHN0cm9uZz57eyBjdXJyZW50Q291bnQgfX08L3N0cm9uZz48L3A+XFxyXFxuXFxyXFxuPGJ1dHRvbiAoY2xpY2spPVxcXCJpbmNyZW1lbnRDb3VudGVyKClcXFwiPkluY3JlbWVudDwvYnV0dG9uPlxcclxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9yc30gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7QWNjb3VudFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hY2NvdW50LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtVdGlsaXR5U2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3V0aWxpdHkuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3JlZ2lzdHJhdGlvbicsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9yZWdpc3RyYXRpb24uY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MnKV0sXHJcbiAgICBwcm92aWRlcnM6IFtVdGlsaXR5U2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJlZ2lzdHJhdGlvbkNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIHJlZ2lzdHJhdGlvbkZvcm06IEZvcm1Hcm91cDtcclxuICAgIHByaXZhdGUgYWNjb3VudFNlcnZpY2U6IEFjY291bnRTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSB1dGlsaXR5U2VydmljZTogVXRpbGl0eVNlcnZpY2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBhY2NvdW50U2VydmljZTogQWNjb3VudFNlcnZpY2UsIHV0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSl7XHJcbiAgICAgICAgdGhpcy5hY2NvdW50U2VydmljZSA9IGFjY291bnRTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMudXRpbGl0eVNlcnZpY2UgPSB1dGlsaXR5U2VydmljZTtcclxuXHJcbiAgICAgICAgdGhpcy5yZWdpc3RyYXRpb25Gb3JtID0gZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25TdWJtaXQoKTogdm9pZCB7XHJcbiAgICAgICAgIGlmKCF0aGlzLnJlZ2lzdHJhdGlvbkZvcm0udmFsaWQpe1xyXG4gICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlLmNyZWF0ZU5ld0FjY291bnQodGhpcy5yZWdpc3RyYXRpb25Gb3JtLnZhbHVlLmVtYWlsLCB0aGlzLnJlZ2lzdHJhdGlvbkZvcm0udmFsdWUucGFzc3dvcmQpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgYWxlcnQoJ0tvbnRvIHpvc3RhxYJvIHBvbXnFm2xuaWUgdXR3b3J6b25lLiBNb8W8ZXN6IHNpxJkgdGVyYXogemFsb2dvd2HEhy4nKVxyXG4gICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICB0aGlzLnV0aWxpdHlTZXJ2aWNlLmhhbmRsZUFwaUVycm9yKGVycm9yKTtcclxuICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIlxuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwibWktcmVnaXN0cmF0aW9uXFxcIj5cXHJcXG4gICAgPGgxPlJlamVzdHJhY2phPC9oMT5cXHJcXG4gICAgPGhyIC8+XFxyXFxuICAgIDxwPlBvZGFqIGVtYWlsIGkgaGFzxYJvIGFieSB1dHdvcnp5xIcgbm93ZSBrb250by48L3A+XFxyXFxuICAgIDxmb3JtIFtmb3JtR3JvdXBdPVxcXCJyZWdpc3RyYXRpb25Gb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJvblN1Ym1pdCgpXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkVtYWlsXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImVtYWlsXFxcIj5cXHJcXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cXFwicmVnaXN0cmF0aW9uRm9ybS5jb250cm9sc1snZW1haWwnXS50b3VjaGVkICYmIHJlZ2lzdHJhdGlvbkZvcm0uY29udHJvbHNbJ2VtYWlsJ10uaGFzRXJyb3IoJ3JlcXVpcmVkJylcXFwiIGNsYXNzPVxcXCJ0ZXh0LWRhbmdlclxcXCI+RW1haWwgamVzdCB3eW1hZ2FueS48L3NwYW4+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkhhc8WCb1xcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJwYXNzd29yZFxcXCI+XFxyXFxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcInJlZ2lzdHJhdGlvbkZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ10udG91Y2hlZCAmJiByZWdpc3RyYXRpb25Gb3JtLmNvbnRyb2xzWydwYXNzd29yZCddLmhhc0Vycm9yKCdyZXF1aXJlZCcpXFxcIiBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiPkhhc8WCbyBqZXN0IHd5bWFnYW5lLjwvc3Bhbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3MgcHVsbC1yaWdodFxcXCI+WmFyZWplc3RydWogc2nEmTwvYnV0dG9uPlxcclxcbiAgICA8L2Zvcm0+XFxyXFxuPC9kaXY+XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1pLXJlZ2lzdHJhdGlvbiBmb3JtIHtcXHJcXG4gIHdpZHRoOiAzMCU7IH1cXHJcXG5cXHJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcy5tYXAgKi9cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHtBY2NvdW50U2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2FjY291bnQuc2VydmljZVwiO1xyXG5pbXBvcnQge1V0aWxpdHlTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdXRpbGl0eS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbG9naW4nLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vbG9naW4uY29tcG9uZW50LmNzcycpXSxcclxuICAgIHByb3ZpZGVyczogW1V0aWxpdHlTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBsb2dpbkZvcm06IEZvcm1Hcm91cDtcclxuICAgIHByaXZhdGUgYWNjb3VudFNlcnZpY2U6IEFjY291bnRTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSB1dGlsaXR5U2VydmljZTogVXRpbGl0eVNlcnZpY2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBhY2NvdW50U2VydmljZTogQWNjb3VudFNlcnZpY2UsIHV0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSl7XHJcbiAgICAgICAgdGhpcy5hY2NvdW50U2VydmljZSA9IGFjY291bnRTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMudXRpbGl0eVNlcnZpY2UgPSB1dGlsaXR5U2VydmljZTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dpbkZvcm0gPSBmb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblN1Ym1pdCgpOiB2b2lkIHtcclxuICAgICAgICBpZighdGhpcy5sb2dpbkZvcm0udmFsaWQpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlLmxvZ2luKHRoaXMubG9naW5Gb3JtLnZhbHVlLmVtYWlsLCB0aGlzLmxvZ2luRm9ybS52YWx1ZS5wYXNzd29yZCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudFNlcnZpY2UuZ2V0QW5kVXBkYXRlQW50aUZvcmdlcnlUb2tlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlLmlzVXNlclNpZ25lZEluKCk7XHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnV0aWxpdHlTZXJ2aWNlLmhhbmRsZUFwaUVycm9yKGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwibWktbG9naW5cXFwiPlxcclxcbiAgICA8aDE+TG9nb3dhbmllPC9oMT5cXHJcXG4gICAgPGhyIC8+XFxyXFxuICAgIDxwPlBvZGFqIGVtYWlsIGkgaGFzxYJvIGFieSBzacSZIHphbG9nb3dhxIcuPC9wPlxcclxcbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cXFwibG9naW5Gb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJvblN1Ym1pdCgpXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkVtYWlsXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImVtYWlsXFxcIj5cXHJcXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cXFwibG9naW5Gb3JtLmNvbnRyb2xzWydlbWFpbCddLnRvdWNoZWQgJiYgbG9naW5Gb3JtLmNvbnRyb2xzWydlbWFpbCddLmhhc0Vycm9yKCdyZXF1aXJlZCcpXFxcIiBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiPkVtYWlsIGplc3Qgd3ltYWdhbnkuPC9zcGFuPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJIYXPFgm9cXFwiIGZvcm1Db250cm9sTmFtZT1cXFwicGFzc3dvcmRcXFwiPlxcclxcbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVxcXCJsb2dpbkZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ10udG91Y2hlZCAmJiBsb2dpbkZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ10uaGFzRXJyb3IoJ3JlcXVpcmVkJylcXFwiIGNsYXNzPVxcXCJ0ZXh0LWRhbmdlclxcXCI+SGFzxYJvIGplc3Qgd3ltYWdhbmUuPC9zcGFuPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2VzcyBwdWxsLXJpZ2h0XFxcIj5aYWxvZ3VqIHNpxJk8L2J1dHRvbj5cXHJcXG4gICAgPC9mb3JtPlxcclxcbjwvZGl2PlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9sb2dpbi5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3NcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubWktbG9naW4gZm9ybSB7XFxyXFxuICB3aWR0aDogMzAlOyB9XFxyXFxuXFxyXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9bG9naW4uY29tcG9uZW50LmNzcy5tYXAgKi9cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3NcbiAqKiBtb2R1bGUgaWQgPSAzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtBY2NvdW50U2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2FjY291bnQuc2VydmljZVwiO1xyXG5pbXBvcnQge1V0aWxpdHlTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdXRpbGl0eS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7UHJvamVjdFNlcnZpY2UsIEJvYXJkfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvcHJvamVjdC5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYm9hcmQnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYm9hcmQuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vYm9hcmQuY29tcG9uZW50LmNzcycpXSxcclxuICAgIHByb3ZpZGVyczogW1V0aWxpdHlTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICBwcml2YXRlIHByb2plY3RTZXJ2aWNlOiBQcm9qZWN0U2VydmljZTtcclxuICAgIHByaXZhdGUgYWNjb3VudFNlcnZpY2U6IEFjY291bnRTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSB1dGlsaXR5U2VydmljZTogVXRpbGl0eVNlcnZpY2U7XHJcbiAgICBwcml2YXRlIGJvYXJkczogQXJyYXk8Qm9hcmQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGFjY291bnRTZXJ2aWNlOiBBY2NvdW50U2VydmljZSwgdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlLCBwcm9qZWN0U2VydmljZTogUHJvamVjdFNlcnZpY2Upe1xyXG4gICAgICAgIHRoaXMuYWNjb3VudFNlcnZpY2UgPSBhY2NvdW50U2VydmljZTtcclxuICAgICAgICB0aGlzLnV0aWxpdHlTZXJ2aWNlID0gdXRpbGl0eVNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0U2VydmljZSA9IHByb2plY3RTZXJ2aWNlO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWNjb3VudFNlcnZpY2UuY2hlY2tJZlVzZXJJc0F1dGhlbnRpY2F0ZWQoKTtcclxuICAgICAgICB0aGlzLnByb2plY3RTZXJ2aWNlLmdldFByb2plY3RzRm9yVXNlcigpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkcyA9IHJlc3VsdC5qc29uKCk7XHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnV0aWxpdHlTZXJ2aWNlLmhhbmRsZUFwaUVycm9yKGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYm9hcmQvYm9hcmQuY29tcG9uZW50LnRzXG4gKiovIiwiaW1wb3J0IHtJbmplY3RhYmxlLCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZXNwb25zZX0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gXCIuL2h0dHBDbGllbnQuc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUHJvamVjdFNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoSHR0cENsaWVudCkgaHR0cENsaWVudDogSHR0cENsaWVudCl7XHJcbiAgICAgICAgdGhpcy5odHRwQ2xpZW50ID0gaHR0cENsaWVudDtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVOZXdQcm9qZWN0KG5hbWU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZyk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnBvc3QoJy9hcGkvQm9hcmQvQ3JlYXRlTmV3Qm9hcmQnLCB7XHJcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByb2plY3RzRm9yVXNlcigpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQoJy9hcGkvQm9hcmQvR2V0UHJvamVjdHNGb3JVc2VyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHJvamVjdChwcm9qZWN0SWQ6IG51bWJlcik6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldCgnL2FwaS9Cb2FyZC9HZXRQcm9qZWN0LycgKyBwcm9qZWN0SWQpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCb2FyZCB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIGNvbHVtbnM6IEFycmF5PENvbHVtbj47XHJcbiAgICB1c2VyQm9hcmRzOiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb2x1bW4ge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHNlcXVlbmNlOiBudW1iZXI7XHJcbiAgICB0YXNrczogQXJyYXk8VGFzaz47XHJcbiAgICBib2FyZElkOiBudW1iZXI7XHJcbiAgICBib2FyZDogQm9hcmQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYXNrIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgc2VxdWVuY2U6IG51bWJlcjtcclxuICAgIHVzZXJJZDogc3RyaW5nO1xyXG4gICAgdXNlcjogYW55O1xyXG4gICAgY29sdW1uSWQ6IG51bWJlcjtcclxuICAgIGNvbHVtbjogQ29sdW1uO1xyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vQ2xpZW50QXBwL2FwcC9zZXJ2aWNlcy9wcm9qZWN0LnNlcnZpY2UudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwibWktYm9hcmRcXFwiPlxcclxcbiAgICA8aDE+UHJvamVrdHk8L2gxPlxcclxcbiAgICA8aHIgLz5cXHJcXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiBbcm91dGVyTGlua109XFxcIlsnL2JvYXJkL25ldy1wcm9qZWN0J11cXFwiPlV0d8Ozcnogbm93eSBwcm9qZWt0PC9idXR0b24+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1pLWJvYXJkLXByb2plY3RzXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgKm5nRm9yPVxcXCJsZXQgYm9hcmRzUm93IG9mIGJvYXJkcyB8IHJvd3M6NDsgbGV0IGk9aW5kZXhcXFwiIGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgKm5nRm9yPVxcXCJsZXQgYm9hcmQgb2YgYm9hcmRzUm93XFxcIiBjbGFzcz1cXFwiY29sLXhzLTMgbWktYm9hcmQtcHJvamVjdHMtcHJvamVjdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvYm9hcmQvcHJvamVjdC8nICsgYm9hcmQuaWRdXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRodW1ibmFpbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FwdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57e2JvYXJkLm5hbWV9fTwvaDM+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt7Ym9hcmQuZGVzY3JpcHRpb259fTwvcD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2JvYXJkLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYm9hcmQvYm9hcmQuY29tcG9uZW50LmNzc1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5taS1ib2FyZCBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcclxcbi5taS1ib2FyZC1wcm9qZWN0cyB7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4OyB9XFxyXFxuICAubWktYm9hcmQtcHJvamVjdHMtcHJvamVjdCAudGh1bWJuYWlsOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxODlDNzsgfVxcclxcbiAgICAubWktYm9hcmQtcHJvamVjdHMtcHJvamVjdCAudGh1bWJuYWlsOmhvdmVyIC5jYXB0aW9uIHtcXHJcXG4gICAgICBjb2xvcjogd2hpdGU7IH1cXHJcXG5cXHJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1ib2FyZC5jb21wb25lbnQuY3NzLm1hcCAqL1xcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYm9hcmQvYm9hcmQuY29tcG9uZW50LmNzc1xuICoqIG1vZHVsZSBpZCA9IDM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtVdGlsaXR5U2VydmljZX0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL3V0aWxpdHkuc2VydmljZVwiO1xyXG5pbXBvcnQge0FjY291bnRTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvYWNjb3VudC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Rm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlcn0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7UHJvamVjdFNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9wcm9qZWN0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICduZXctcHJvamVjdCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9uZXctcHJvamVjdC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9uZXctcHJvamVjdC5jb21wb25lbnQuY3NzJyldLFxyXG4gICAgcHJvdmlkZXJzOiBbVXRpbGl0eVNlcnZpY2UsIFByb2plY3RTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmV3UHJvamVjdENvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIGFjY291bnRTZXJ2aWNlOiBBY2NvdW50U2VydmljZTtcclxuICAgIHByaXZhdGUgdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBwcm9qZWN0U2VydmljZTogUHJvamVjdFNlcnZpY2U7XHJcbiAgICBwcml2YXRlIG5ld1Byb2plY3RGb3JtOiBGb3JtR3JvdXA7XHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGFjY291bnRTZXJ2aWNlOiBBY2NvdW50U2VydmljZSwgdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlLCBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByb2plY3RTZXJ2aWNlOiBQcm9qZWN0U2VydmljZSwgcm91dGVyOiBSb3V0ZXIpe1xyXG4gICAgICAgIHRoaXMuYWNjb3VudFNlcnZpY2UgPSBhY2NvdW50U2VydmljZTtcclxuICAgICAgICB0aGlzLnV0aWxpdHlTZXJ2aWNlID0gdXRpbGl0eVNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0U2VydmljZSA9IHByb2plY3RTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG5cclxuICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlLmNoZWNrSWZVc2VySXNBdXRoZW50aWNhdGVkKCk7XHJcblxyXG4gICAgICAgIHRoaXMubmV3UHJvamVjdEZvcm0gPSBmb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgIG5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0U2VydmljZS5jcmVhdGVOZXdQcm9qZWN0KHRoaXMubmV3UHJvamVjdEZvcm0udmFsdWUubmFtZSwgdGhpcy5uZXdQcm9qZWN0Rm9ybS52YWx1ZS5kZXNjcmlwdGlvbikuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdOb3d5IHByb2pla3Qgem9zdGHFgiB1dHdvcnpvbnkuJyk7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2JvYXJkJ10pO1xyXG4gICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgdGhpcy51dGlsaXR5U2VydmljZS5oYW5kbGVBcGlFcnJvcihlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2JvYXJkL25ldy1wcm9qZWN0LmNvbXBvbmVudC9uZXctcHJvamVjdC5jb21wb25lbnQudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwibWktbmV3LXByb2plY3RcXFwiPlxcclxcbiAgICA8aDE+VXR3w7NyeiBub3d5IHByb2pla3Q8L2gxPlxcclxcbiAgICA8aHIgLz5cXHJcXG4gICAgPHA+UG9kYWogc3pjemVnw7PFgnkgbm93ZWdvIHByb2pla3R1PC9wPlxcclxcbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cXFwibmV3UHJvamVjdEZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcIm9uU3VibWl0KClcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJOYXp3YVxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJuYW1lXFxcIj5cXHJcXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cXFwibmV3UHJvamVjdEZvcm0uY29udHJvbHNbJ25hbWUnXS50b3VjaGVkICYmIG5ld1Byb2plY3RGb3JtLmNvbnRyb2xzWyduYW1lJ10uaGFzRXJyb3IoJ3JlcXVpcmVkJylcXFwiIGNsYXNzPVxcXCJ0ZXh0LWRhbmdlclxcXCI+TmF6d2EgamVzdCB3eW1hZ2FuYS48L3NwYW4+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiT3Bpc1xcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJkZXNjcmlwdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcIm5ld1Byb2plY3RGb3JtLmNvbnRyb2xzWydkZXNjcmlwdGlvbiddLnRvdWNoZWQgJiYgbmV3UHJvamVjdEZvcm0uY29udHJvbHNbJ2Rlc2NyaXB0aW9uJ10uaGFzRXJyb3IoJ3JlcXVpcmVkJylcXFwiIGNsYXNzPVxcXCJ0ZXh0LWRhbmdlclxcXCI+T3BpcyBqZXN0IHd5bWFnYW55Ljwvc3Bhbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgcHVsbC1sZWZ0XFxcIiBbcm91dGVyTGlua109XFxcIlsnL2JvYXJkJ11cXFwiPlBvd3LDs3QgZG8gd2lkb2t1IHByb2pla3TDs3c8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzIHB1bGwtcmlnaHRcXFwiPlV0d8Ozcnogbm93eSBwcm9qZWt0PC9idXR0b24+XFxyXFxuICAgIDwvZm9ybT5cXHJcXG48L2Rpdj5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYm9hcmQvbmV3LXByb2plY3QuY29tcG9uZW50L25ldy1wcm9qZWN0LmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gNDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25ldy1wcm9qZWN0LmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYm9hcmQvbmV3LXByb2plY3QuY29tcG9uZW50L25ldy1wcm9qZWN0LmNvbXBvbmVudC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubWktbmV3LXByb2plY3QgZm9ybSB7XFxyXFxuICB3aWR0aDogMzAlOyB9XFxyXFxuXFxyXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9bmV3LXByb2plY3QuY29tcG9uZW50LmNzcy5tYXAgKi9cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2JvYXJkL25ldy1wcm9qZWN0LmNvbXBvbmVudC9uZXctcHJvamVjdC5jb21wb25lbnQuY3NzXG4gKiogbW9kdWxlIGlkID0gNDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ3Jvd3MnIH0pXHJcbmV4cG9ydCBjbGFzcyBSb3dzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgdHJhbnNmb3JtKHZhbDogQXJyYXk8YW55PiwgY29sczpudW1iZXIpIHtcclxuICAgICAgICB2YXIgYXJyYXlPZkFycmF5cyA9IG5ldyBBcnJheTxhbnk+KCk7XHJcblxyXG4gICAgICAgIGlmKHZhbCl7XHJcbiAgICAgICAgICAgIHdoaWxlKHZhbC5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgYXJyYXlPZkFycmF5cy5wdXNoKHZhbC5zcGxpY2UoMCwgY29scyB8fCA0KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhcnJheU9mQXJyYXlzO1xyXG4gICAgfVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9DbGllbnRBcHAvYXBwL3BpcGVzL3Jvd3NwaXBlLnRzXG4gKiovIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtVdGlsaXR5U2VydmljZX0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL3V0aWxpdHkuc2VydmljZVwiO1xyXG5pbXBvcnQge0FjY291bnRTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvYWNjb3VudC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7UHJvamVjdFNlcnZpY2UsIEJvYXJkfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvcHJvamVjdC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Um91dGVyLCBBY3RpdmF0ZWRSb3V0ZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3Byb2plY3QnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vcHJvamVjdC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9wcm9qZWN0LmNvbXBvbmVudC5jc3MnKV0sXHJcbiAgICBwcm92aWRlcnM6IFtVdGlsaXR5U2VydmljZSwgUHJvamVjdFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgcHJpdmF0ZSBhY2NvdW50U2VydmljZTogQWNjb3VudFNlcnZpY2U7XHJcbiAgICBwcml2YXRlIHV0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZTtcclxuICAgIHByaXZhdGUgcHJvamVjdFNlcnZpY2U6IFByb2plY3RTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcjtcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlO1xyXG4gICAgcHJpdmF0ZSBib2FyZDogQm9hcmQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYWNjb3VudFNlcnZpY2U6IEFjY291bnRTZXJ2aWNlLCB1dGlsaXR5U2VydmljZTogVXRpbGl0eVNlcnZpY2UsIHByb2plY3RTZXJ2aWNlOiBQcm9qZWN0U2VydmljZSwgcm91dGVyOiBSb3V0ZXIsIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSl7XHJcbiAgICAgICAgdGhpcy5hY2NvdW50U2VydmljZSA9IGFjY291bnRTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMudXRpbGl0eVNlcnZpY2UgPSB1dGlsaXR5U2VydmljZTtcclxuICAgICAgICB0aGlzLnByb2plY3RTZXJ2aWNlID0gcHJvamVjdFNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWNjb3VudFNlcnZpY2UuY2hlY2tJZlVzZXJJc0F1dGhlbnRpY2F0ZWQoKTtcclxuICAgICAgICB2YXIgcHJvamVjdElkID0gK3RoaXMucm91dGUucGFyYW1zWyd2YWx1ZSddLmlkO1xyXG4gICAgICAgIHRoaXMucHJvamVjdFNlcnZpY2UuZ2V0UHJvamVjdChwcm9qZWN0SWQpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkID0gcmVzdWx0Lmpzb24oKTtcclxuICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXRpbGl0eVNlcnZpY2UuaGFuZGxlQXBpRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYm9hcmQvcHJvamVjdC5jb21wb25lbnQvcHJvamVjdC5jb21wb25lbnQudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwibWktcHJvamVjdFxcXCI+XFxyXFxuXFxyXFxuPC9kaXY+XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2JvYXJkL3Byb2plY3QuY29tcG9uZW50L3Byb2plY3QuY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA0NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vcHJvamVjdC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2JvYXJkL3Byb2plY3QuY29tcG9uZW50L3Byb2plY3QuY29tcG9uZW50LmNzc1xuICoqIG1vZHVsZSBpZCA9IDQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcblxcclxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXByb2plY3QuY29tcG9uZW50LmNzcy5tYXAgKi9cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2JvYXJkL3Byb2plY3QuY29tcG9uZW50L3Byb2plY3QuY29tcG9uZW50LmNzc1xuICoqIG1vZHVsZSBpZCA9IDQ4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9