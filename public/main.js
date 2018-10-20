(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _notes_notes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notes/notes.component */ "./src/app/notes/notes.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _services_note_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/note.service */ "./src/app/services/note.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _router_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./router.module */ "./src/app/router.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pipes/trim.pipe */ "./src/app/pipes/trim.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _notes_notes_component__WEBPACK_IMPORTED_MODULE_4__["NotesComponent"],
                _form_form_component__WEBPACK_IMPORTED_MODULE_5__["FormComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                _pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_16__["TrimString"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _router_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            providers: [_services_note_service__WEBPACK_IMPORTED_MODULE_6__["NoteService"], _services_login_service__WEBPACK_IMPORTED_MODULE_13__["LoginService"], _services_register_service__WEBPACK_IMPORTED_MODULE_14__["RegisterService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/form/form.component.css":
/*!*****************************************!*\
  !*** ./src/app/form/form.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form{\r\n    padding: 20px;\r\n}"

/***/ }),

/***/ "./src/app/form/form.component.html":
/*!******************************************!*\
  !*** ./src/app/form/form.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"formNote\" (ngSubmit)=\"addNote()\">\n  <h3 class=\"text-header text-center\">Add note</h3>\n    <div class=\"form-group\">\n      <label>Title note</label>\n      <input type=\"text\"  name=\"title\" class=\"form-control\" formControlName=\"title\">\n    </div>\n    <div class=\"form-group\">\n      <label>Description</label>\n      <textarea class=\"form-control\"  name=\"description\" formControlName=\"description\">\n\n      </textarea>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\">Save</button>\n  </form>\n"

/***/ }),

/***/ "./src/app/form/form.component.ts":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_note_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/note.service */ "./src/app/services/note.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormComponent = /** @class */ (function () {
    function FormComponent(_noteService, _fb) {
        this._noteService = _noteService;
        this._fb = _fb;
        this.noteData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._noteService.getNotes();
    }
    FormComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    FormComponent.prototype.initForm = function () {
        this.formNote = this._fb.group({
            title: [null],
            description: [null]
        });
    };
    FormComponent.prototype.addNote = function () {
        var _this = this;
        if ((this.formNote.value.title != '') && (this.formNote.value.description != '')) {
            var note = {
                'title': this.formNote.value.title,
                'description': this.formNote.value.description,
                'userId': localStorage.getItem("user-id-notes")
            };
            this._noteService.addNote(note).subscribe(function (res) {
                console.log(res);
                _this.noteData.emit(res.Note);
                // reset form
                _this.formNote.reset();
            }, function (err) { return console.log(err); });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FormComponent.prototype, "noteData", void 0);
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/form/form.component.css")]
        }),
        __metadata("design:paramtypes", [_services_note_service__WEBPACK_IMPORTED_MODULE_2__["NoteService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"row\">\n    <div class=\"col col-md-3\">\n        <app-form (noteData)=\"getNoteFromForm($event)\"></app-form>\n    </div>\n\n\n    <div class=\"notes\">\n        <div class=\"row\">\n            <div *ngIf=\"listNotes.length!= 0\">\n                <div *ngFor=\"let note of listNotes;\">\n                    <app-notes  [note]=\"note\" (noteRemove)=\"removeNoteFromListHome($event)\"></app-notes>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_note_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/note.service */ "./src/app/services/note.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(_noteService, router) {
        this._noteService = _noteService;
        this.router = router;
        this.listNotes = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // check if token is founded
        if (localStorage.getItem("token")) {
            // get all notes from that user
            this._noteService.getNotes().subscribe(function (res) {
                _this.listNotes = res.notes;
                console.log(_this.listNotes);
            });
        }
        else {
            // redirect to the login page
            this.router.navigate(["login"]);
        }
    };
    HomeComponent.prototype.getNoteFromForm = function (event) {
        console.log("Note from form component");
        console.log(event);
        this.listNotes.splice(0, 0, event);
    };
    HomeComponent.prototype.removeNoteFromListHome = function (noteId) {
        this.listNotes.splice(this.listNotes.findIndex(function (e) { return e._id === noteId; }), 1);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_note_service__WEBPACK_IMPORTED_MODULE_1__["NoteService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control-lg{\r\n    height: 80px;\r\n}\r\n\r\n.login, .login:hover {\r\n    background: #6675df;\r\n    border-color: #6675df\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"limiter\">\n    <div class=\"container-login100\">\n        <div class=\"wrap-login100\">\n            <form class=\"login100-form validate-form\" #loginForm=\"ngForm\" (ngSubmit)=\"applyLogin(loginForm)\">\n                <span class=\"login100-form-title p-b-43\">\n                    Login to continue\n                </span>\n                \n                <div class=\"alert alert-danger\" *ngIf=\"loginError\">\n                    <p>{{ loginError }}</p>\n                </div>  \n                \n                <div class=\"wrap-input100 validate-input\">\n                    <input type=\"text\" class=\"form-control form-control-lg\" placeholder=\"Email\" [(ngModel)]=\"email\" name=\"email\">\n                </div>\n                \n                \n                <div class=\"wrap-input100\" >\n                    <input type=\"password\" class=\"form-control form-control-lg\" placeholder=\"Password\" [(ngModel)]=\"password\" name=\"password\">\n                </div>  \n                <br>\n                <div class=\"\">\n                    <input type=\"submit\" class=\"btn btn-primary btn-lg btn-block login\"  value=\"Login\">\n                        \n                </div>\n                \n                <div class=\"text-center p-t-46 p-b-20\">\n                    <span class=\"txt2\">\n                        or <a href=\"\" routerLink=\"/register\">sign up</a>\n                    </span>\n                </div>\n\n                <!-- <div class=\"login100-form-social flex-c-m\">\n                    <a href=\"#\" class=\"login100-form-social-item flex-c-m bg1 m-r-5\">\n                        <i class=\"fa fa-facebook-f\" aria-hidden=\"true\"></i>\n                    </a>\n\n                    <a href=\"#\" class=\"login100-form-social-item flex-c-m bg2 m-r-5\">\n                        <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\n                    </a>\n                </div> -->\n            </form>\n\n            <div class=\"login100-more\" style=\"background-image: url('assets/images/notes.png');\">\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(_loginService, router) {
        this._loginService = _loginService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // check if there is a token in the browser, ==> redirect him to myNotes component
        if (localStorage.getItem("token")) {
            this.router.navigate(["home", localStorage.getItem("user-id-notes")]);
        }
    };
    LoginComponent.prototype.applyLogin = function (formValue) {
        var _this = this;
        this._loginService.login(formValue.value).subscribe(function (res) {
            if (res.auth == true) {
                // store the token on the browser
                localStorage.setItem("token", res.token);
                localStorage.setItem("user-id-notes", res.user_id);
                _this.loginError = "";
                // navigate to the note component
                _this.router.navigate(["home", res.user_id]);
            }
        }, function (err) {
            _this.loginError = err.error.message;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">PlanNote</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\" (click)=\"logout()\">Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav> <br><br>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router) {
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logout = function () {
        localStorage.removeItem("token");
        localStorage.removeItem("user-id-notes");
        this.router.navigateByUrl("/login");
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/notes/notes.component.html":
/*!********************************************!*\
  !*** ./src/app/notes/notes.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm\">\n    <div class=\"note ui-draggable ui-draggable-handle\">\n        <a href=\"javascript:;\" \n        class=\"button edit\" \n        data-toggle=\"modal\" \n        data-target=\"#modal-update\"\n        (click)=\"getNoteId(note)\">E</a>\n\n\n        <a href=\"javascript:;\"  \n        id=\"{{note._id}}\" \n        class=\"button remove\" \n        data-toggle=\"modal\" \n        data-target=\"#modal-delete\" (click)=\"getNoteId(note)\">X</a>\n\n\n        <div class=\"note_cnt\">\n        <br>\n        <h5 class=\"text-center\">{{note.title}}</h5>\n        <br>\n        <p > {{ note.description}} </p>\n\n\n            <button class=\"btn btn-success\" *ngIf=\"modeEdit==true\" (click)=\"saveChanges(item)\">Save</button>\n            <button class=\"btn btn-info\" *ngIf=\"modeEdit==true\" (click)=\"changeMode()\">Exit</button>\n        </div> \n    </div>\n</div>\n\n\n\n\n<!-- Modal for remove note -->\n<div class=\"modal fade\" id=\"modal-delete\" data-backdrop=\"static\" data-keyboard=\"false\"  >\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\">Confirmation</h4>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <div class=\"modal-body\">\n            Are you sure to delete this note...??\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn\" data-dismiss=\"modal\" style=\"color:white\">No..!</button>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteNote()\" data-dismiss=\"modal\" style=\"color:white\">Do it..!</button>\n        </div>\n    \n        </div>\n    </div>\n</div>\n\n<!-- Modal for update note -->\n<div class=\"modal fade\" id=\"modal-update\" data-backdrop=\"static\" data-keyboard=\"false\"  >\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\">Update note</h4>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <div class=\"modal-body\">\n            <form action=\"\">\n                <div class=\"form-group\">\n                    <label>Title</label>\n                    <input type=\"text\" name=\"titleToUpdate\" class=\"form-control\" value=\"{{noteUI?.title}}\"\n                    [(ngModel)]=\"titleToUpdate\">\n                </div>\n                <div class=\"form-group\">\n                    <label>Description</label>\n                    <textarea name=\"descriptionToUpdate\" class=\"form-control\" \n                    [(ngModel)]=\"descriptionToUpdate\" value=\"{{noteUI?.description}}\"></textarea>\n                </div>\n            </form>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\" style=\"color:white\">I changed my mind..!</button>\n            <button type=\"button\" class=\"btn btn-primary\"   style=\"color:white\" \n            (click)=\"saveChanges(noteUI)\">Change it ..!</button>\n        </div>\n    \n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/notes/notes.component.scss":
/*!********************************************!*\
  !*** ./src/app/notes/notes.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  padding-left: 10px; }\n\n/* * Hide from both screenreaders and browsers: h5bp.com/u */\n\n.hidden {\n  display: none !important;\n  visibility: hidden; }\n\n/* * Hide only visually, but have it available for screenreaders: h5bp.com/v */\n\n.visuallyhidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n/* * Extends the .visuallyhidden class to allow the element to be focusable * when navigated to via the keyboard: h5bp.com/p */\n\n.visuallyhidden.focusable:active,\n.visuallyhidden.focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto; }\n\n/* * Hide visually and from screenreaders, but maintain layout */\n\n.invisible {\n  visibility: hidden; }\n\n.clearfix:before,\n.clearfix:after {\n  content: \" \";\n  /* 1 */\n  display: table;\n  /* 2 */ }\n\n.clearfix:after {\n  clear: both; }\n\n.noflick, #board, .note, .button {\n  -webkit-perspective: 1000;\n          perspective: 1000;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n\n/* ==========================================================================\r\n   Base styles: opinionated defaults\r\n   ========================================================================== */\n\n* {\n  box-sizing: border-box; }\n\nhtml,\nbutton,\ninput,\nselect,\ntextarea {\n  color: #000000; }\n\nbody {\n  font-size: 1em;\n  line-height: 1;\n  background-color: white;\n  background: linear-gradient(135deg, white 0%, #ebebeb 47%, #dedede 100%); }\n\n::-moz-selection {\n  background: #B3D4FC;\n  text-shadow: none; }\n\n::selection {\n  background: #B3D4FC;\n  text-shadow: none; }\n\na:focus {\n  outline: none; }\n\n::-webkit-input-placeholder {\n  color: rgba(0, 0, 0, 0.7); }\n\n:placeholder {\n  /* Firefox 18- */\n  color: rgba(0, 0, 0, 0.7); }\n\n/* ==========================================================================\r\n   Author's custom styles\r\n   ========================================================================== */\n\n#board {\n  padding: 100px 30px 30px;\n  margin-top: 40px;\n  overflow-y: visible; }\n\n.note {\n  float: left;\n  display: block;\n  position: relative;\n  padding: 2em;\n  width: 250px;\n  min-height: 250px;\n  margin: 0 30px 30px 0;\n  background: linear-gradient(top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.25));\n  background-color: #FFFD75;\n  box-shadow: 5px 5px 10px -2px rgba(33, 33, 33, 0.3);\n  -webkit-transform: rotate(2deg);\n          transform: rotate(2deg);\n  -webkit-transform: skew(-1deg, 1deg);\n          transform: skew(-1deg, 1deg);\n  transition: -webkit-transform .15s;\n  transition: transform .15s;\n  transition: transform .15s, -webkit-transform .15s;\n  z-index: 1; }\n\n.note.ui-draggable-dragging:nth-child(n) {\n    box-shadow: 5px 5px 15px 0 rgba(0, 0, 0, 0.3);\n    -webkit-transform: scale(1.125) !important;\n            transform: scale(1.125) !important;\n    z-index: 100;\n    cursor: move;\n    transition: -webkit-transform .150s;\n    transition: transform .150s;\n    transition: transform .150s, -webkit-transform .150s; }\n\n.note textarea {\n    background-color: transparent;\n    border: none;\n    resize: vertical;\n    font-family: \"Gloria Hallelujah\", cursive;\n    width: 100%;\n    padding: 5px; }\n\n.note textarea:focus {\n      outline: none;\n      border: none;\n      box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2) inset; }\n\n.note textarea.title {\n      font-size: 24px;\n      line-height: 1.2;\n      color: #000000;\n      height: 64px;\n      margin-top: 20px; }\n\n.note textarea.cnt {\n      min-height: 200px; }\n\n.note:nth-child(2n) {\n    background: #FAAACA; }\n\n.note:nth-child(3n) {\n    background: #69F098; }\n\n/* Button style  */\n\n.button {\n  font: bold 16px Helvetica, Arial, sans-serif;\n  color: #FFFFFF;\n  padding: 1em 2em;\n  background: linear-gradient(top, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.3));\n  background-color: #00CC00;\n  border-radius: 3px;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3), inset 0 -1px 2px -1px rgba(0, 0, 0, 0.5), inset 0 1px 2px 1px rgba(255, 255, 255, 0.3);\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.3);\n  text-decoration: none;\n  transition: background .01s, -webkit-transform .150s;\n  transition: transform .150s, background .01s;\n  transition: transform .150s, background .01s, -webkit-transform .150s; }\n\n.button:hover {\n    background-color: #00EE00;\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.3), inset 0 -1px 2px -1px rgba(0, 0, 0, 0.5), inset 0 1px 2px 1px rgba(255, 255, 255, 0.3); }\n\n.button:active {\n    background: linear-gradient(bottom, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.3));\n    background-color: #00CC00;\n    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3), 0 -1px 0 rgba(255, 255, 255, 0.3);\n    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3), inset 0 -1px 2px rgba(255, 255, 255, 0.3);\n    outline: none; }\n\n.button.remove {\n    position: absolute;\n    top: 5px;\n    right: 5px;\n    width: 36px;\n    height: 36px;\n    border-radius: 50%;\n    background-color: #E01C12;\n    text-align: center;\n    line-height: 16px;\n    padding: 10px;\n    border-color: #B30000;\n    font-style: 1.6em;\n    font-weight: bolder;\n    font-family: Helvetica, Arial, sans-serif; }\n\n.button.remove:hover {\n      background-color: #EF0005; }\n\n.button.edit {\n    position: absolute;\n    top: 5px;\n    left: 5px;\n    width: 36px;\n    height: 36px;\n    border-radius: 50%;\n    background-color: lightgreen;\n    text-align: center;\n    line-height: 16px;\n    padding: 10px;\n    border-color: lightgreen;\n    font-style: 1.6em;\n    font-weight: bolder;\n    font-family: Helvetica, Arial, sans-serif; }\n\n.button.edit:hover {\n      background-color: lightgreen; }\n"

/***/ }),

/***/ "./src/app/notes/notes.component.ts":
/*!******************************************!*\
  !*** ./src/app/notes/notes.component.ts ***!
  \******************************************/
/*! exports provided: NotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesComponent", function() { return NotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_note_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/note.service */ "./src/app/services/note.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotesComponent = /** @class */ (function () {
    function NotesComponent(_noteService) {
        this._noteService = _noteService;
        this.noteRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NotesComponent.prototype.ngOnInit = function () { };
    NotesComponent.prototype.getNoteId = function (noteID) {
        this.noteUI = noteID;
        console.log(this.noteUI);
    };
    NotesComponent.prototype.deleteNote = function () {
        var _this = this;
        this._noteService.deleteNote(this.noteUI._id).subscribe(function (res) {
            // emit event
            _this.noteRemove.emit(_this.noteUI._id);
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    NotesComponent.prototype.saveChanges = function (note) {
        var _this = this;
        this._noteService.updateNote(note._id, this.titleToUpdate, this.descriptionToUpdate)
            .subscribe(function (res) {
            console.log(res);
            _this.noteUI.title = _this.titleToUpdate;
            _this.noteUI.description = _this.descriptionToUpdate;
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NotesComponent.prototype, "note", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NotesComponent.prototype, "noteRemove", void 0);
    NotesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notes',
            template: __webpack_require__(/*! ./notes.component.html */ "./src/app/notes/notes.component.html"),
            styles: [__webpack_require__(/*! ./notes.component.scss */ "./src/app/notes/notes.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_note_service__WEBPACK_IMPORTED_MODULE_1__["NoteService"]])
    ], NotesComponent);
    return NotesComponent;
}());



/***/ }),

/***/ "./src/app/pipes/trim.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/trim.pipe.ts ***!
  \************************************/
/*! exports provided: TrimString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrimString", function() { return TrimString; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TrimString = /** @class */ (function () {
    function TrimString() {
    }
    TrimString.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!value) {
            return value;
        }
        return value.split(' ').join('');
    };
    TrimString = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'TrimString' })
    ], TrimString);
    return TrimString;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control-lg{\r\n  height: 80px;\r\n}\r\n\r\n.register{\r\n  background: #6675df;\r\n  border-color: #6675df\r\n}"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"limiter\">\n        <div class=\"container-login100\">\n            <div class=\"wrap-login100\">\n                <form class=\"login100-form validate-form\" [formGroup]=\"registerForm\" (ngSubmit)=\"doRegister()\">\n                    <span class=\"login100-form-title p-b-43\">\n                        Register here\n                    </span>\n                    \n                    <div class=\"alert alert-danger\" *ngIf=\"otherServerErrors.length!=0\">\n                        <p *ngFor=\"let error of otherServerErrors\">{{ error.msg }}</p>\n                    </div>  \n\n                    <div class=\"alert alert-success\" *ngIf=\"successMesg\">\n                        <p>{{ successMesg }}</p>\n                    </div>  \n\n                    \n                    <div class=\"wrap-input100 validate-input\">\n                        <input type=\"text\" class=\"form-control form-control-lg\" name=\"firstname\" placeholder=\"Firstname...\"  formControlName=\"firstname\">\n                        <div class=\"errors\" *ngIf=\"registerForm.controls['firstname'].touched && !registerForm.controls['firstname'].valid\">\n                            <span class=\"text-danger\" *ngIf=\"registerForm.controls['firstname'].errors.required\">Firstname field is required</span>\n                        </div>\n                    </div>\n                    <br>\n                    \n                    <div class=\"wrap-input100\" >\n                        <input type=\"text\" class=\"form-control form-control-lg\" name=\"lastname\" placeholder=\"Lastname...\"  formControlName=\"lastname\">\n                        <div class=\"errors\" *ngIf=\"registerForm.controls['lastname'].touched && !registerForm.controls['lastname'].valid\">\n                            <span class=\"text-danger\" *ngIf=\"registerForm.controls['lastname'].errors.required\">Lastname field is required</span>\n                        </div>\n                    </div>\n                    <br>\n\n                    <div class=\"wrap-input100\" >\n                        <input type=\"text\" class=\"form-control form-control-lg\" name=\"v\" placeholder=\"Email adresse...\"  formControlName=\"email_adresse\">\n                        <div class=\"errors\" *ngIf=\"registerForm.controls['email_adresse'].touched && !registerForm.controls['email_adresse'].valid\">\n                            <span class=\"text-danger\" *ngIf=\"registerForm.controls['email_adresse'].errors.required\">Email field is required</span>\n                            <span class=\"text-danger\" *ngIf=\"registerForm.controls['email_adresse'].errors.email\">Email is wrong, it should be like xzy@exemple.xyz</span>\n                        </div>\n\n                        <div *ngIf=\"registerForm.valid && customEmailError\">\n                            <span class=\"text-danger\">{{customEmailError}}</span>\n                        </div>\n                    </div>\n                    <br>\n\n                    <div class=\"wrap-input100\" >\n                        <input type=\"password\" class=\"form-control form-control-lg\"  name=\"password\" placeholder=\"Password....\"  formControlName=\"password\" minlength=\"5\">\n                        <div class=\"errors\" *ngIf=\"registerForm.controls['password'].touched && !registerForm.controls['password'].valid\">\n                            <span class=\"text-danger\" *ngIf=\"registerForm.controls['password'].errors.required\">Password field is required</span>\n                            <span class=\"text-danger\" *ngIf=\"registerForm.controls['password'].errors.minlength\">Password must be at least 5 characters long</span>\n\n                        </div>\n                    </div>\n\n                    <div class=\"\">\n                        <input type=\"submit\" class=\"btn btn-primary btn-lg btn-block register\" [disabled]=\"!registerForm.valid\" value=\"Register\">\n                            \n                    </div>\n                    \n                    <div class=\"text-center p-t-46 p-b-20\">\n                        <span class=\"txt2\">\n                            or <a href=\"\" routerLink=\"/login\">Login</a>\n                        </span>\n                    </div>\n\n                </form>\n    \n                <div class=\"login100-more\" style=\"background-image: url('assets/images/notes.png');\">\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_registerService, formBuilder, router) {
        this._registerService = _registerService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.otherServerErrors = [];
    }
    RegisterComponent.prototype.ngOnInit = function () {
        // check if there is a token in the browser, ==> redirect him to myNotes component
        if (localStorage.getItem("token")) {
            this.router.navigate(["notes", localStorage.getItem("user-id-notes")]);
        }
        this.createRegister();
    };
    RegisterComponent.prototype.createRegister = function () {
        this.registerForm = this.formBuilder.group({
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email_adresse: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)])]
        });
    };
    RegisterComponent.prototype.doRegister = function () {
        var _this = this;
        this._registerService.register(this.registerForm.value).subscribe(function (res) {
            _this.successMesg = "Register successed....";
            _this.otherServerErrors = [];
            _this.customEmailError = "";
            console.log(res);
            _this.registerForm.reset();
        }, function (err) {
            for (var i = 0; i < err.error.errors.length; i++) {
                if (err.error.errors[i].param == "email") {
                    _this.customEmailError = "E-mail already in use";
                }
                else {
                    _this.otherServerErrors.push(err.error.errors[i]);
                }
            }
            console.log(_this.otherServerErrors);
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/router.module.ts":
/*!**********************************!*\
  !*** ./src/app/router.module.ts ***!
  \**********************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'home/:id', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = /** @class */ (function () {
    function LoginService(_http) {
        this._http = _http;
    }
    LoginService.prototype.login = function (loginInformation) {
        // return this._http.post('http://localhost:3000/api/login', loginInformation);
        return this._http.post('/api/login', loginInformation);
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/note.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/note.service.ts ***!
  \******************************************/
/*! exports provided: NoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteService", function() { return NoteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoteService = /** @class */ (function () {
    function NoteService(_http) {
        this._http = _http;
        this.userId = localStorage.getItem("user-id-notes");
    }
    NoteService.prototype.getNotes = function () {
        // return this._http.get('http://localhost:3000/api/list/'+this.userId);
        return this._http.get('api/list/' + this.userId);
    };
    NoteService.prototype.addNote = function (note) {
        // return this._http.post('http://localhost:3000/api/add-note', note);
        return this._http.post('/api/add-note', note);
    };
    NoteService.prototype.deleteNote = function (noteId) {
        // return this._http.delete('http://localhost:3000/api/delete-note/'+noteId);
        return this._http.delete('/api/delete-note/' + noteId);
    };
    NoteService.prototype.updateNote = function (id, title, description) {
        var info = {
            noteId: id,
            title: title,
            description: description
        };
        // return this._http.put("http://localhost:3000/api/update-post",info)
        return this._http.put("/api/update-post", info);
    };
    NoteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NoteService);
    return NoteService;
}());



/***/ }),

/***/ "./src/app/services/register.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/register.service.ts ***!
  \**********************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterService = /** @class */ (function () {
    function RegisterService(_http) {
        this._http = _http;
    }
    RegisterService.prototype.register = function (userData) {
        console.log(userData);
        // return this._http.post("http://localhost:3000/api/register",userData);
        return this._http.post("/api/register", userData);
    };
    RegisterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\amine\Desktop\MEAN-NotePlan\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map