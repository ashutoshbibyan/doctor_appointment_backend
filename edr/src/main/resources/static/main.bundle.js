webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"main-container\">\n\n\t\t<router-outlet></router-outlet>\n\n</div>\n\t\n\t\t\n\t\n\t\t"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_material_module__ = __webpack_require__("../../../../../src/app/material/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_user_module__ = __webpack_require__("../../../../../src/app/user/user.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__patient_patient_module__ = __webpack_require__("../../../../../src/app/patient/patient_module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routes_config__ = __webpack_require__("../../../../../src/app/app_routes_config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home__ = __webpack_require__("../../../../../src/app/home.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__site_admin_site_admin_module__ = __webpack_require__("../../../../../src/app/site_admin/site_admin_module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_service_worker__ = __webpack_require__("../../../service-worker/esm5/service-worker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_9__home__["a" /* Home */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_routes_config__["a" /* AppRoutes */]),
                __WEBPACK_IMPORTED_MODULE_11__angular_service_worker__["a" /* ServiceWorkerModule */].register('/ngsw-worker.js', { enabled: __WEBPACK_IMPORTED_MODULE_12__environments_environment__["a" /* environment */].production }),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_6__user_user_module__["a" /* UserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__material_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_7__patient_patient_module__["a" /* PatientModule */], __WEBPACK_IMPORTED_MODULE_10__site_admin_site_admin_module__["a" /* SiteAdminModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app_routes_config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home__ = __webpack_require__("../../../../../src/app/home.ts");

var home = { path: "", component: __WEBPACK_IMPORTED_MODULE_0__home__["a" /* Home */] };
var AppRoutes = [home];


/***/ }),

/***/ "../../../../../src/app/common/address_form.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_service__ = __webpack_require__("../../../../../src/app/common/common_service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/** This component contains a address form which have following fields
 *  addressLineOne , addressLineTwo , state , city ,phoneNo
 *  It emmit an event changed which emit whenever the value of a
 *  form field is changed */



var AddressForm = /** @class */ (function () {
    function AddressForm(formBuilder, commonService) {
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        //event of the component 
        this.changed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.addressLineOne = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required
        ]);
        this.addressLineTwo = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', []);
        this.state = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required
        ]);
        this.city = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required
        ]);
        this.phoneNo = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required
        ]);
    }
    AddressForm.prototype.ngOnInit = function () {
        this.getAllState();
        // ititalization of the form group 
        this.addressForm = this.formBuilder.group({
            addressLineOne: this.addressLineOne,
            addressLineTwo: this.addressLineTwo,
            state: this.state,
            city: this.city,
            phoneNo: this.phoneNo
        });
    };
    // get all states form the database 
    AddressForm.prototype.getAllState = function () {
        var _this = this;
        this.commonService.getAllState().subscribe(function (data) {
            if (data != undefined) {
                _this.states = data.json();
                console.log(_this.states);
            }
        });
    };
    /** gets all the cities for the state selected by user */
    AddressForm.prototype.getAllCities = function () {
        var _this = this;
        this.change();
        this.commonService.getAllCities(this.addressForm.value.state).subscribe(function (data) {
            if (data != undefined) {
                _this.cities = data.json();
            }
        });
    };
    // this emit the changed event whenever the form field value is changed 
    AddressForm.prototype.change = function () {
        this.changed.emit(this.addressForm);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], AddressForm.prototype, "changed", void 0);
    AddressForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "address-form",
            template: __webpack_require__("../../../../../src/app/common/html/address_form.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__common_service__["a" /* CommonService */]])
    ], AddressForm);
    return AddressForm;
}());



/***/ }),

/***/ "../../../../../src/app/common/common_module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppCommonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__address_form__ = __webpack_require__("../../../../../src/app/common/address_form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_service__ = __webpack_require__("../../../../../src/app/common/common_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_material_module__ = __webpack_require__("../../../../../src/app/material/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_image_upload__ = __webpack_require__("../../../../../src/app/common/user_image_upload.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_image_gallery__ = __webpack_require__("../../../../../src/app/common/user_image_gallery.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_choose_profile_image__ = __webpack_require__("../../../../../src/app/common/user_choose_profile_image.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__confirmation_dialog__ = __webpack_require__("../../../../../src/app/common/confirmation_dialog.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppCommonModule = /** @class */ (function () {
    function AppCommonModule() {
    }
    AppCommonModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_4__material_material_module__["a" /* MaterialModule */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* ReactiveFormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__address_form__["a" /* AddressForm */], __WEBPACK_IMPORTED_MODULE_6__user_image_upload__["a" /* UserImageUpload */], __WEBPACK_IMPORTED_MODULE_7__user_image_gallery__["a" /* UserImageGallery */], __WEBPACK_IMPORTED_MODULE_8__user_choose_profile_image__["a" /* UserChooseProfileImage */],
                __WEBPACK_IMPORTED_MODULE_9__confirmation_dialog__["a" /* ConfirmationDialog */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__address_form__["a" /* AddressForm */], __WEBPACK_IMPORTED_MODULE_8__user_choose_profile_image__["a" /* UserChooseProfileImage */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__common_service__["a" /* CommonService */]]
        })
    ], AppCommonModule);
    return AppCommonModule;
}());



/***/ }),

/***/ "../../../../../src/app/common/common_service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_hourListOptions__ = __webpack_require__("../../../../../src/app/model/hourListOptions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommonService = /** @class */ (function () {
    function CommonService(http) {
        this.http = http;
        this.hourListOption = __WEBPACK_IMPORTED_MODULE_2__model_hourListOptions__["a" /* HourListOption */];
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.commOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    /** getAllState method get all the state list present in database */
    CommonService.prototype.getAllState = function () {
        var url = "/api/public/dr/state/all";
        return this.http.get(url, this.commOptions);
    };
    /** getAllCities method get all the cities for a perticular state */
    CommonService.prototype.getAllCities = function (stateId) {
        var url = "/api/public/dr/city/all";
        var param = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        param.set("stateId", stateId);
        this.commOptions.params = param;
        return this.http.get(url, this.commOptions);
    };
    /** getTimeLabel get the label value for a time the label value is for display only */
    CommonService.prototype.getTimeLabel = function (value) {
        for (var i = 0; i < this.hourListOption.length; i++) {
            if (this.hourListOption[i].value == value) {
                return this.hourListOption[i].label;
            }
        }
        return "";
    };
    CommonService.prototype.getAllDegree = function () {
        var url = "/api/public/dr/degree/all";
        return this.http.get(url, this.commOptions);
    };
    CommonService.prototype.getAllSpeciality = function () {
        var url = "/api/public/dr/speciality/all";
        return this.http.get(url, this.commOptions);
    };
    /** uploadImage upload the image in user database */
    CommonService.prototype.uploadImage = function (formData) {
        var url = "/api/private/upload/image";
        console.log(formData);
        return this.http.post(url, formData);
    };
    /** getUserImages get all the images from the current logged in user*/
    CommonService.prototype.getUserImages = function (pageNo, pageSize) {
        var url = "/api/private/user/get/images";
        var param = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        param.set("pageNo", pageNo.toString());
        param.set("pageSize", pageSize.toString());
        this.commOptions.params = param;
        return this.http.get(url, this.commOptions);
    };
    CommonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "../../../../../src/app/common/confirmation_dialog.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmationDialog = /** @class */ (function () {
    function ConfirmationDialog(matDialogRef) {
        this.matDialogRef = matDialogRef;
    }
    ConfirmationDialog.prototype.confirm = function () {
        this.matDialogRef.close(true);
    };
    ConfirmationDialog.prototype.cancel = function () {
        this.matDialogRef.close(false);
    };
    ConfirmationDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "confirmation-dialog",
            template: __webpack_require__("../../../../../src/app/common/html/confirmation_dialog.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialogRef */]])
    ], ConfirmationDialog);
    return ConfirmationDialog;
}());



/***/ }),

/***/ "../../../../../src/app/common/css/user_choose_profile_image.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-dialog-actions{\n\t-webkit-box-pack:end;\n\t    -ms-flex-pack:end;\n\t        justify-content:flex-end;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/css/user_image_gallery.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img{\n\tmargin: 10px;\n}\n\n#img-container{\n\tdisplay:-webkit-box;\n\tdisplay:-ms-flexbox;\n\tdisplay:flex;\n\t-webkit-box-orient:horizontal;\n\t-webkit-box-direction:normal;\n\t    -ms-flex-direction:row;\n\t        flex-direction:row;\n\t-ms-flex-wrap:wrap;\n\t    flex-wrap:wrap;\n\t-webkit-box-pack:space-evenly;\n\t    -ms-flex-pack:space-evenly;\n\t        justify-content:space-evenly;\n}\n\n.imgBox{\n\tdisplay:-webkit-box;\n\tdisplay:-ms-flexbox;\n\tdisplay:flex;\n\t-webkit-box-pack:center;\n\t    -ms-flex-pack:center;\n\t        justify-content:center;\n}\n\n.selected{\n\t\n\t-webkit-box-shadow: 3px 3px 5px 6px #409cd9;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */  /* Firefox 3.5 - 3.6 */\n     box-shadow:         3px 3px 5px 6px #409cd9;  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */\n}\n\n#toolbar{\n\t\n\theight:50px;\n\tdisplay:-webkit-box;\n\tdisplay:-ms-flexbox;\n\tdisplay:flex;\n\t-webkit-box-orient:vertical;\n\t-webkit-box-direction:normal;\n\t    -ms-flex-direction:column;\n\t        flex-direction:column;\n\t-webkit-box-align:end;\n\t    -ms-flex-align:end;\n\t        align-items:flex-end;\n\t-ms-flex-pack:distribute;\n\t    justify-content:space-around;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/css/user_image_upload.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#upload-btn{\n\tposition:absolute;\n\theight: 150px;\n\twidth:150px;\n\topacity:0;\n}\n\n\n#up-btn-box{\n\tmargin:20px;\n\tposition:relative;\n\tborder: dashed thin blue;\n\twidth:200px;\n\theight:200px;\n\tdisplay:-webkit-box;\n\tdisplay:-ms-flexbox;\n\tdisplay:flex;\n\t-webkit-box-align:center;\n\t    -ms-flex-align:center;\n\t        align-items:center;\n\t-webkit-box-pack:center;\n\t    -ms-flex-pack:center;\n\t        justify-content:center;\n\t\n}\n\n\n#up-btn-box label{\n\tposition:absolute;\n\t-ms-flex-item-align:center;\n\t    align-self:center;\n}\n\n\nimg{\n\tmargin:20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/html/address_form.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"addressForm\">\n\n\t<div class=\"form-group\">\n\t\t<mat-form-field>\n\t\t\t<input matInput type=\"text\" (change)=\"change()\" placeholder=\"Address Line One \" formControlName=\"addressLineOne\">\n\t\t\n\t\t\t<mat-error *ngIf=\"addressLineOne.hasError('required')\">Address Line is <strong>required</strong></mat-error>\n\t\t</mat-form-field>\n\t\n\t</div>\n\t\n\t\n\t\n\t<div class=\"form-group\">\n\t\t<mat-form-field>\n\t\t\t<input matInput type=\"text\" (change)=\"change()\" placeholder=\"Address Line two \" formControlName=\"addressLineTwo\">\n\t\t\t<mat-hint>Optional</mat-hint>\n\t\t</mat-form-field>\n\t\n\t</div>\n\t\n\t\n\t\n\t\t\t\n\t\t\t<div class=\"form-group\">\n\t\t<mat-form-field>\n\t\t\t<mat-select placeholder=\"Select State\" formControlName=\"state\" (change)=\"getAllCities()\">\n\t\t\t\n\t\t\t\t\t<mat-option *ngFor=\"let state of states\" [value]=\"state.stateId\">{{state.stateName}}</mat-option>\n\t\t\t<mat-error *ngIf=\"state.hasError('required')\"> Plesase Select A State</mat-error>\n\t\t\t</mat-select>\n\t\t\n\t\t</mat-form-field>\n\t\n\t</div>\n\t\n\n\t\n\t\n\t<div class=\"form-group\">\n\t\t<mat-form-field>\n\t\t\n\t\t\t<mat-select placeholder=\"Select City\" formControlName=\"city\" (change)=\"change()\">\n\t\t\t\n\t\t\t\t<mat-option *ngFor=\"let city of cities\" [value]=\"city.cityName\">{{city.cityName}}</mat-option>\n\t\t\t</mat-select>\n\t\t\t\n\t\t\t<mat-error *ngIf=\"city.hasError('required')\">Please Select A City</mat-error>\n\t\t</mat-form-field>\n\t\n\t</div>\n\t\n\t<div class=\"form-group\">\n\t\t\n\t\t<mat-form-field>\n\t\t\t\t\n\t\t\t\t<input type=\"text\" matInput (change)=\"change()\" placeholder=\"Enter Mobile No \" formControlName=\"phoneNo\">\n\t\t\t<mat-error *ngIf=\"phoneNo.hasError('required')\"> Please Enter The Mobile No</mat-error>\n\t\t</mat-form-field>\n\t\t\n\t</div>\n\t\n\t\n<!-- \t<div class=\"form-group\"> -->\n\t\t\n<!-- \t\t<button mat-raised-button color=\"primary\" type=\"button\" (click)=\"submit()\">Submit</button> -->\n\t\n<!-- \t</div> -->\n\n\n</form>"

/***/ }),

/***/ "../../../../../src/app/common/html/confirmation_dialog.html":
/***/ (function(module, exports) {

module.exports = "\n<h2>Are You Sure?</h2>\n\n\n<div class=\"flex-row\">\n\n<button mat-button color=\"primary\" (click)=\"confirm()\">Yes</button>\n\n<button mat-button color=\"accent\" (click)=\"cancel()\">Cancel</button>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/common/html/user_choose_profile_image.html":
/***/ (function(module, exports) {

module.exports = "\n\n<mat-dialog-content>\t\n\t\n\n<mat-tab-group [(selectedIndex)]=\"tabIndex\" (focusChange)=\"tabChanged($event)\">\n\n  <mat-tab  label=\"Upload\">\n  \n  <user-img-upload (uploaded)=\"uploaded($event)\"></user-img-upload>\n  \n  \n  \n  </mat-tab>\n  \n  \n  \n  <mat-tab    label=\"Gallery\">\n  \n \n <user-gallery [(reload)]=\"reloadGallery\"  (selected)=\"fileSelected($event)\"></user-gallery>\n  \n  \n  \n  \n  </mat-tab>\n  \n \n  \n</mat-tab-group>\n\n</mat-dialog-content>\n\n\n\n <mat-dialog-actions>\n \n  <button mat-button mat-dialog-close>Cancel</button>\n \n  <button mat-raised-button color=\"primary\" \n  [disabled]=\"btnDisable\" (click)=\"submit()\" [mat-dialog-close]=\"true\">Submit</button>\n  \n  \n</mat-dialog-actions>\n  \n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/common/html/user_image_gallery.html":
/***/ (function(module, exports) {

module.exports = "<div  id=\"img-container\">\n  \n\t\t  <div class=\"imgBox\" *ngFor=\"let image of images\">\n\t\t  \n\t\t  \t\t\t\t  \t\t\n\t\t<img [ngClass]=\"{'selected': image.fileId==selectedFile.fileId}\" src={{image.path}} alt=\"image\" \n\t\twidth=\"150px\" height=\"150px\" (click)=\"imgSelected(image)\">\n\t\t   \t\t\n\t\t   \t\t\n\t\t  </div>\n\t\t  \n\t\t <mat-paginator [length]=\"totalImages\"\n              [pageSize]=\"pageSize\"\n              [pageSizeOptions]=\"[5, 10, 25, 100]\"  (page)=\"getPage($event)\">\n        </mat-paginator>\n  \n  </div>\n \n \n "

/***/ }),

/***/ "../../../../../src/app/common/html/user_image_upload.html":
/***/ (function(module, exports) {

module.exports = "\n\n  \n  <div id=\"up-btn-box\">\n  \n   <mat-spinner *ngIf=\"progress\"></mat-spinner>\n \n  <label> Upload</label>\n  \n  <input type=\"file\"  id=\"upload-btn\" (change)=\"upload($event)\">\n  \n  </div>\n  \n  \n \n "

/***/ }),

/***/ "../../../../../src/app/common/user_choose_profile_image.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserChooseProfileImage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dr_doctor_service__ = __webpack_require__("../../../../../src/app/dr/doctor_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserChooseProfileImage = /** @class */ (function () {
    function UserChooseProfileImage(doctorService, matSnackBar) {
        this.doctorService = doctorService;
        this.matSnackBar = matSnackBar;
        this.reloadGallery = false;
        this.btnDisable = true;
    }
    /** uploaded method execute when userimageupload component emmit the upload event
     *  it means that file is uploaded so we change the tab to gallery tab and reloadGallery
     *  to true so the gallery is refreshed and have the uploaded  image */
    UserChooseProfileImage.prototype.uploaded = function (event) {
        if (event) {
            this.tabIndex = 1;
            this.reloadGallery = true;
        }
    };
    /** file selected execute userimagegallery component emmit the select event  it means that
     *  user selected a file so we enable the submit button and change the value of the
     *  selectedFile to the file selected by user*/
    UserChooseProfileImage.prototype.fileSelected = function (event) {
        if (event != undefined) {
            this.btnDisable = false;
            this.selectedFile = event;
        }
    };
    /** submit execute when user submit the profile image for the user it save it into the database*/
    UserChooseProfileImage.prototype.submit = function () {
        var _this = this;
        this.doctorService.saveDoctorProfileImage(this.selectedFile).subscribe(function (data) {
            if (data != undefined) {
                var formResult = data.json();
                if (formResult.result) {
                    _this.matSnackBar.open(formResult.message, "Image Changed", {
                        duration: 3000
                    });
                }
            }
        });
    };
    /**tabChanged execute whenever the tab is changed */
    UserChooseProfileImage.prototype.tabChanged = function (event) {
        if (event.index == 0) {
            /* we make reloadGallery false so when user upload another file it will get
             * true and ngOnChange in gallery component will detect and refresh the list
             * of all the images */
            this.reloadGallery = false;
            // disable the submit button 
            this.btnDisable = true;
        }
    };
    UserChooseProfileImage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "user-choose-profile-image",
            template: __webpack_require__("../../../../../src/app/common/html/user_choose_profile_image.html"),
            styles: [__webpack_require__("../../../../../src/app/common/css/user_choose_profile_image.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dr_doctor_service__["a" /* DoctorService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MatSnackBar */]])
    ], UserChooseProfileImage);
    return UserChooseProfileImage;
}());



/***/ }),

/***/ "../../../../../src/app/common/user_image_gallery.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserImageGallery; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_service__ = __webpack_require__("../../../../../src/app/common/common_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_userfile__ = __webpack_require__("../../../../../src/app/model/userfile.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserImageGallery = /** @class */ (function () {
    function UserImageGallery(commonService, matSnackBar) {
        this.commonService = commonService;
        this.matSnackBar = matSnackBar;
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.images = new Array();
        this.pageNo = 0;
        this.pageSize = 10;
        this.selectedFile = new __WEBPACK_IMPORTED_MODULE_3__model_userfile__["a" /* UserFile */]();
    }
    UserImageGallery.prototype.ngOnInit = function () {
        this.getAllImages(this.pageNo, this.pageSize);
    };
    UserImageGallery.prototype.ngOnChanges = function () {
        if (this.reload) {
            this.getAllImages(this.pageNo, this.pageSize);
        }
    };
    UserImageGallery.prototype.getAllImages = function (pageNo, pageSize) {
        var _this = this;
        this.commonService.getUserImages(pageNo, pageSize).subscribe(function (data) {
            if (data != undefined) {
                _this.images = data.json().content;
                _this.totalImages = data.json().totalElements;
            }
        });
    };
    UserImageGallery.prototype.imgSelected = function (image) {
        this.selectedFile = image;
        this.selected.emit(image);
    };
    UserImageGallery.prototype.getPage = function (event) {
        this.getAllImages(event.pageIndex, event.pageSize);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], UserImageGallery.prototype, "selected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], UserImageGallery.prototype, "reload", void 0);
    UserImageGallery = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "user-gallery",
            template: __webpack_require__("../../../../../src/app/common/html/user_image_gallery.html"),
            styles: [__webpack_require__("../../../../../src/app/common/css/user_image_gallery.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MatSnackBar */]])
    ], UserImageGallery);
    return UserImageGallery;
}());



/***/ }),

/***/ "../../../../../src/app/common/user_image_upload.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserImageUpload; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_service__ = __webpack_require__("../../../../../src/app/common/common_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserImageUpload = /** @class */ (function () {
    function UserImageUpload(commonService, matSnackBar) {
        this.commonService = commonService;
        this.matSnackBar = matSnackBar;
        this.progress = false;
        this.uploaded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    UserImageUpload.prototype.upload = function (event) {
        var _this = this;
        var fileList = event.target.files;
        if (fileList.length > 0) {
            this.progress = true;
            var file = fileList[0];
            var formData = new FormData();
            formData.append('img', file, file.name);
            this.commonService.uploadImage(formData).subscribe(function (data) {
                if (data != undefined) {
                    var result = data.json();
                    if (result.result) {
                        _this.progress = false;
                        _this.uploaded.emit(true);
                        _this.matSnackBar.open(result.message, "Saved", {
                            duration: 3000
                        });
                    }
                    else {
                        if (result.error) {
                            _this.progress = false;
                            _this.matSnackBar.open(result.message, "Error", {
                                duration: 3000
                            });
                        }
                    }
                }
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], UserImageUpload.prototype, "uploaded", void 0);
    UserImageUpload = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "user-img-upload",
            template: __webpack_require__("../../../../../src/app/common/html/user_image_upload.html"),
            styles: [__webpack_require__("../../../../../src/app/common/css/user_image_upload.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MatSnackBar */]])
    ], UserImageUpload);
    return UserImageUpload;
}());



/***/ }),

/***/ "../../../../../src/app/dr/css/add_hours.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "label{\n\tmargin-right: 20px;\n}\n\nlabel,mat-slide-toggle{border-top: .84375em solid transparent; padding: .4375em 0;}\n\n.time-list{\n\tdisplay:-webkit-box;\n\tdisplay:-ms-flexbox;\n\tdisplay:flex;\n\t-webkit-box-align:center;\n\t    -ms-flex-align:center;\n\t        align-items:center;\n\tmargin-left: 20px;\n\t\n\t}\n\n.add-hour-form{\n\tdisplay:-webkit-box;\n\tdisplay:-ms-flexbox;\n\tdisplay:flex;\n\t-webkit-box-orient:vertical;\n\t-webkit-box-direction:normal;\n\t    -ms-flex-direction:column;\n\t        flex-direction:column;\n\tmargin-left: 10px;\n}\n\n.mat-form-field{\n\twidth: 100%;\n}\n\n/* If screen size is smaller than 321px*/\n\n@media only screen and (max-width:321px){\n\t\n\t.time-list{\n\t\t-webkit-box-orient:vertical;\n\t\t-webkit-box-direction:normal;\n\t\t    -ms-flex-direction:column;\n\t\t        flex-direction:column;\n\t}\n\t\n}\n\n/* if screen is greater or equal to 1024px */\n\n@media only screen and (min-width: 1024px) {\n\nform{\n\tmin-width: -webkit-fit-content;\n\tmin-width: -moz-fit-content;\n\tmin-width: fit-content;\n}\n     \n     .add-hour-form{\n\tdisplay:-webkit-box;\n\tdisplay:-ms-flexbox;\n\tdisplay:flex;\n\t-webkit-box-orient:horizontal;\n\t-webkit-box-direction:normal;\n\t    -ms-flex-direction:row;\n\t        flex-direction:row;\n\t-webkit-box-align:center;\n\t    -ms-flex-align:center;\n\t        align-items:center;\n\t-webkit-box-pack:start;\n\t    -ms-flex-pack:start;\n\t        justify-content:start;\n}\n\n\n.mat-form-field{\n\twidth:80%;\n}\n\n.day-container{\n\tdisplay:-webkit-box;\n\tdisplay:-ms-flexbox;\n\tdisplay:flex;\n\t-webkit-box-orient:horizontal;\n\t-webkit-box-direction:normal;\n\t    -ms-flex-direction:row;\n\t        flex-direction:row;\n\tmargin-top: 30px;\n\t-webkit-box-align:baseline;\n\t    -ms-flex-align:baseline;\n\t        align-items:baseline;\n\t-webkit-box-pack:justify;\n\t    -ms-flex-pack:justify;\n\t        justify-content:space-between;\n}\n     \n    \n     \n     \n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dr/css/doctor_appointment_show.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#grid-container{\n\twidth:80%;\n\tmargin-left:auto;\n\tmargin-right:auto;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-wrap: wrap;\n\t    flex-wrap: wrap;\n\t-ms-flex-pack:distribute;\n\t    justify-content:space-around;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dr/css/doctor_holiday_show.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dr/css/doctor_home.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body, app-root, mat-sidenav-container, .my-content {\n  margin: 0;\n  width: 100%;\n  height: 100%;\n}\n\nmat-sidenav{\n\twidth: 70%;\n\t\n\t\n}\n\na{\n\twidth:100%;\n\theight:100%;\n\tdisplay: block;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dr/css/doctor_make_appointment.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\nmat-tab-group{\n\tmax-width:500px;\n\tmargin-left: auto;\n\tmargin-right: auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dr/css/doctor_panel.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#grid-container{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-wrap: wrap;\n\t    flex-wrap: wrap;\n\t-ms-flex-pack:distribute;\n\t    justify-content:space-around;\n}\n\n\nmat-card{\n\tmargin:10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dr/css/doctor_profile_edit.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#container{\n\twidth: 80%;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tdisplay:-webkit-box;\n\tdisplay:-ms-flexbox;\n\tdisplay:flex;\n\t-webkit-box-pack:space-evenly;\n\t    -ms-flex-pack:space-evenly;\n\t        justify-content:space-evenly;\n\t\n\tmargin-top: 50px;\n}\n\n#left-content{\n\tdisplay:-webkit-box;\n\tdisplay:-ms-flexbox;\n\tdisplay:flex;\n\t-webkit-box-orient:vertical;\n\t-webkit-box-direction:normal;\n\t    -ms-flex-direction:column;\n\t        flex-direction:column;\n\t-webkit-box-align:center;\n\t    -ms-flex-align:center;\n\t        align-items:center;\n}\n\n#right-content{\n\tmargin-left:50px;\n}\n\n#workingday-container{\n\tdisplay:-webkit-box;\n\tdisplay:-ms-flexbox;\n\tdisplay:flex;\n\t-webkit-box-orient:vertical;\n\t-webkit-box-direction:normal;\n\t    -ms-flex-direction:column;\n\t        flex-direction:column;\n\t\n}\n\n.workingday{\n\tdisplay:-webkit-box;\n\tdisplay:-ms-flexbox;\n\tdisplay:flex;\n\t-webkit-box-align:baseline;\n\t    -ms-flex-align:baseline;\n\t        align-items:baseline;\n\t-webkit-box-pack:space-evenly;\n\t    -ms-flex-pack:space-evenly;\n\t        justify-content:space-evenly;\n}\n\n.time{\n\tdisplay:-webkit-box;\n\tdisplay:-ms-flexbox;\n\tdisplay:flex;\n\t-webkit-box-orient:vertical;\n\t-webkit-box-direction:normal;\n\t    -ms-flex-direction:column;\n\t        flex-direction:column;\n\t\n\t\n}\n\np{\n\tmargin:5px;\n}\n\nul{\n\tdisplay: -webkit-inline-box;\n\tdisplay: -ms-inline-flexbox;\n\tdisplay: inline-flex;\n\tlist-style: none;\n\t\n}\n\nul li{\n\tmargin:10px;\n}\n\n@media only screen and (max-width:768px){\n\t#container{\n\tdisplay:-webkit-box;\n\tdisplay:-ms-flexbox;\n\tdisplay:flex;\n\t-webkit-box-orient:vertical;\n\t-webkit-box-direction:normal;\n\t    -ms-flex-direction:column;\n\t        flex-direction:column;\n\t}\n\t\n\t#right-content{\n\tmargin:0;}\n}\n\n.mat-list{\n\tpadding:0;\n}\n\n.mat-raised-button{\n\tmargin:5px;\n}\n\n.edit{\n\twidth:50px;\n}\n\n#profile-img-container{\n\tdisplay:-webkit-box;\n\tdisplay:-ms-flexbox;\n\tdisplay:flex;\n\t-webkit-box-orient:vertical;\n\t-webkit-box-direction:normal;\n\t    -ms-flex-direction:column;\n\t        flex-direction:column;\n\t-webkit-box-align:center;\n\t    -ms-flex-align:center;\n\t        align-items:center;\n\t-webkit-box-pack:center;\n\t    -ms-flex-pack:center;\n\t        justify-content:center;\n}\n\n#img-change-btn{\n\tz-index: 1;\n\tposition:absolute;\n}\n\n#profile-img-container img{\n\t\n\topacity:0.6;\n\tz-index: -1;\n\tmargin:10px;\n\t\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dr/css/doctor_public_profile.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#container{\n\tmargin-top:50px;\n\twidth: 80%;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tdisplay:-webkit-box;\n\tdisplay:-ms-flexbox;\n\tdisplay:flex;\n\t-webkit-box-pack:space-evenly;\n\t    -ms-flex-pack:space-evenly;\n\t        justify-content:space-evenly;\n}\n\n#left-content{\n\tdisplay:-webkit-box;\n\tdisplay:-ms-flexbox;\n\tdisplay:flex;\n\t-webkit-box-orient:vertical;\n\t-webkit-box-direction:normal;\n\t    -ms-flex-direction:column;\n\t        flex-direction:column;\n\t-webkit-box-align:center;\n\t    -ms-flex-align:center;\n\t        align-items:center;\n}\n\n#right-content{\n\tmargin-left:50px;\n}\n\n#img-container{\n\tdisplay:-webkit-box;\n\tdisplay:-ms-flexbox;\n\tdisplay:flex;\n\t-webkit-box-orient:vertical;\n\t-webkit-box-direction:normal;\n\t    -ms-flex-direction:column;\n\t        flex-direction:column;\n\t-webkit-box-align:center;\n\t    -ms-flex-align:center;\n\t        align-items:center;\n}\n\n#img-container img{\n\tmargin:10px;\n}\n\n#img-container button {\n\tmargin:5px;\n}\n\n#workingday-container{\n\tdisplay:-webkit-box;\n\tdisplay:-ms-flexbox;\n\tdisplay:flex;\n\t-webkit-box-orient:vertical;\n\t-webkit-box-direction:normal;\n\t    -ms-flex-direction:column;\n\t        flex-direction:column;\n\t\n}\n\n.workingday{\n\tdisplay:-webkit-box;\n\tdisplay:-ms-flexbox;\n\tdisplay:flex;\n\t-webkit-box-align:baseline;\n\t    -ms-flex-align:baseline;\n\t        align-items:baseline;\n\t-webkit-box-pack:space-evenly;\n\t    -ms-flex-pack:space-evenly;\n\t        justify-content:space-evenly;\n}\n\n.time{\n\tdisplay:-webkit-box;\n\tdisplay:-ms-flexbox;\n\tdisplay:flex;\n\t-webkit-box-orient:vertical;\n\t-webkit-box-direction:normal;\n\t    -ms-flex-direction:column;\n\t        flex-direction:column;\n\t\n\t\n}\n\np{\n\tmargin:5px;\n}\n\nul{\n\tdisplay: -webkit-inline-box;\n\tdisplay: -ms-inline-flexbox;\n\tdisplay: inline-flex;\n\tlist-style: none;\n\t\n}\n\nul li{\n\tmargin:10px;\n}\n\n@media only screen and (max-width:768px){\n\t#container{\n\tdisplay:-webkit-box;\n\tdisplay:-ms-flexbox;\n\tdisplay:flex;\n\t-webkit-box-orient:vertical;\n\t-webkit-box-direction:normal;\n\t    -ms-flex-direction:column;\n\t        flex-direction:column;\n\t}\n\t\n\t#right-content{\n\tmargin:0;}\n}\n\n.mat-list{\n\tpadding:0;\n}\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dr/css/doctor_signup.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#main-container{\n\twidth:50%;\n\tmargin-left: auto;\n\tmargin-right: auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dr/doctor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Doctor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_userfile__ = __webpack_require__("../../../../../src/app/model/userfile.ts");

var Doctor = /** @class */ (function () {
    function Doctor() {
        this.workingDays = new Array();
        this.timeSlots = new Array();
        this.profileImage = new __WEBPACK_IMPORTED_MODULE_0__model_userfile__["a" /* UserFile */]();
    }
    return Doctor;
}());



/***/ }),

/***/ "../../../../../src/app/dr/doctor_add_working_hours.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorAddWorkingHours; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__doctor_service__ = __webpack_require__("../../../../../src/app/dr/doctor_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_formresult__ = __webpack_require__("../../../../../src/app/model/formresult.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_day__ = __webpack_require__("../../../../../src/app/model/day.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_hourListOptions__ = __webpack_require__("../../../../../src/app/model/hourListOptions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__doctor__ = __webpack_require__("../../../../../src/app/dr/doctor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_hours__ = __webpack_require__("../../../../../src/app/model/hours.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var DoctorAddWorkingHours = /** @class */ (function () {
    function DoctorAddWorkingHours(formBuilder, doctorService, matSnackbar, router) {
        this.formBuilder = formBuilder;
        this.doctorService = doctorService;
        this.matSnackbar = matSnackbar;
        this.router = router;
        this.progress = true;
        this.workState = "closed";
        this.workingDays = new Array();
        this.formResult = new __WEBPACK_IMPORTED_MODULE_2__model_formresult__["a" /* FormResult */]();
        this.doctor = new __WEBPACK_IMPORTED_MODULE_6__doctor__["a" /* Doctor */]();
        this.mondayControl = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormControl */]("", []);
        this.mondayStartAt = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormControl */]("", []);
        this.mondayCloseAt = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormControl */]("", []);
        this.mondayAppointmentNo = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormControl */]("", []);
        this.tuesdayControl = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormControl */]("", []);
        this.tuesdayStartAt = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormControl */]("", []);
        this.tuesdayCloseAt = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormControl */]("", []);
        this.tuesdayAppointmentNo = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormControl */]("", []);
        this.wednesdayControl = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormControl */]("", []);
        this.wednesdayStartAt = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormControl */]("", []);
        this.wednesdayCloseAt = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormControl */]("", []);
        this.wednesdayAppointmentNo = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormControl */]("", []);
        this.thursdayControl = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormControl */]("", []);
        this.thursdayStartAt = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormControl */]("", []);
        this.thursdayCloseAt = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormControl */]("", []);
        this.thursdayAppointmentNo = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormControl */]("", []);
        this.fridayControl = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormControl */]("", []);
        this.fridayStartAt = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormControl */]("", []);
        this.fridayCloseAt = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormControl */]("", []);
        this.fridayAppointmentNo = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormControl */]("", []);
        this.saturdayControl = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormControl */]("", []);
        this.saturdayStartAt = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormControl */]("", []);
        this.saturdayCloseAt = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormControl */]("", []);
        this.saturdayAppointmentNo = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormControl */]("", []);
        this.sundayControl = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormControl */]("", []);
        this.sundayStartAt = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormControl */]("", []);
        this.sundayCloseAt = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormControl */]("", []);
        this.sundayAppointmentNo = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormControl */]("", []);
        this.mondayCode = 1;
        this.tuesdayCode = 2;
        this.wednesdayCode = 3;
        this.thursdayCode = 4;
        this.fridayCode = 5;
        this.saturdayCode = 6;
        this.sundayCode = 0;
        this.hourListOption = __WEBPACK_IMPORTED_MODULE_5__model_hourListOptions__["a" /* HourListOption */];
    }
    DoctorAddWorkingHours.prototype.ngOnInit = function () {
        this.workingHoursForm = this.formBuilder.group({
            "mondayControl": this.mondayControl,
            "mondayStartAt": this.mondayStartAt,
            "mondayCloseAt": this.mondayCloseAt,
            "mondayAppointmentNo": this.mondayAppointmentNo,
            "tuesdayControl": this.tuesdayControl,
            "tuesdayStartAt": this.tuesdayStartAt,
            "tuesdayCloseAt": this.tuesdayCloseAt,
            "tuesdayAppointmentNo": this.tuesdayAppointmentNo,
            "wednesdayControl": this.wednesdayControl,
            "wednesdayStartAt": this.wednesdayStartAt,
            "wednesdayCloseAt": this.wednesdayCloseAt,
            "wednesdayAppointmentNo": this.wednesdayAppointmentNo,
            "thursdayControl": this.thursdayControl,
            "thursdayStartAt": this.thursdayStartAt,
            "thursdayCloseAt": this.thursdayCloseAt,
            "thursdayAppointmentNo": this.thursdayAppointmentNo,
            "fridayControl": this.fridayControl,
            "fridayStartAt": this.fridayStartAt,
            "fridayCloseAt": this.fridayCloseAt,
            "fridayAppointmentNo": this.fridayAppointmentNo,
            "saturdayControl": this.saturdayControl,
            "saturdayStartAt": this.saturdayStartAt,
            "saturdayCloseAt": this.saturdayCloseAt,
            "saturdayAppointmentNo": this.saturdayAppointmentNo,
            "sundayControl": this.sundayControl,
            "sundayStartAt": this.sundayStartAt,
            "sundayCloseAt": this.sundayCloseAt,
            "sundayAppointmentNo": this.sundayAppointmentNo
        });
        this.getDoctorWorkingDays();
    };
    /** getDoctorWorkingdays Method */
    DoctorAddWorkingHours.prototype.getDoctorWorkingDays = function () {
        var _this = this;
        this.doctorService.getDoctorPublicInfo().subscribe(function (data) {
            if (data != undefined) {
                if (data["_body"] != "") {
                    var res = data.json();
                    if (res.workingDays != null) {
                        _this.workingDays = res.workingDays;
                        _this.progress = false;
                    }
                    else {
                        _this.progress = false;
                    }
                }
                else {
                    _this.router.navigateByUrl("/dr/home/dr/signup");
                }
            }
        });
    };
    DoctorAddWorkingHours.prototype.checked = function (event) {
        if (event.checked) {
            var day = new __WEBPACK_IMPORTED_MODULE_4__model_day__["a" /* Day */]();
            day.dayId = parseInt(event.source.id);
            day.dayName = event.source.name;
            day.dayStatus = "Open";
            day.checked = true;
            console.log(day);
            this.workingDays.push(day);
        }
        else {
            for (var i = 0; i < this.workingDays.length; i++) {
                if (this.workingDays[i].dayId == (parseInt(event.source.id))) {
                    this.workingDays.splice(i, 1);
                }
            }
        }
    };
    DoctorAddWorkingHours.prototype.submit = function () {
        var _this = this;
        this.addDayHour(this.mondayStartAt.value, this.mondayCloseAt.value, this.mondayAppointmentNo.value, this.mondayCode);
        this.addDayHour(this.tuesdayStartAt.value, this.tuesdayCloseAt.value, this.tuesdayAppointmentNo.value, this.tuesdayCode);
        this.addDayHour(this.wednesdayStartAt.value, this.wednesdayCloseAt.value, this.wednesdayAppointmentNo.value, this.wednesdayCode);
        this.addDayHour(this.thursdayStartAt.value, this.thursdayCloseAt.value, this.thursdayAppointmentNo.value, this.thursdayCode);
        this.addDayHour(this.fridayStartAt.value, this.fridayCloseAt.value, this.fridayAppointmentNo.value, this.fridayCode);
        this.addDayHour(this.saturdayStartAt.value, this.saturdayCloseAt.value, this.saturdayAppointmentNo.value, this.saturdayCode);
        this.addDayHour(this.sundayStartAt.value, this.sundayCloseAt.value, this.sundayAppointmentNo.value, this.sundayCode);
        console.log(this.workingDays);
        this.doctorService.saveWorkingDays(this.workingDays).subscribe(function (data) {
            if (data != undefined) {
                _this.formResult = data.json();
                if (_this.formResult.result) {
                    _this.matSnackbar.open(_this.formResult.message, "Done", {
                        duration: 3000
                    });
                }
                else {
                    if (_this.formResult.error) {
                        _this.matSnackbar.open(_this.formResult.message, "Error", {
                            duration: 3000
                        });
                    }
                }
            }
        });
    };
    /** addDayHour execute when user click on addhour button it takes three parameter
     *  startAt , closeAt ,maxpatientno,  dayid  and add the hour object to day with that dayid */
    DoctorAddWorkingHours.prototype.addDayHour = function (startAt, closeAt, maxPatientNo, dayId) {
        if (startAt != "" && closeAt != "") {
            if (maxPatientNo != 0) {
                var hours = new __WEBPACK_IMPORTED_MODULE_7__model_hours__["a" /* Hours */]();
                hours.startAt = startAt;
                hours.closeAt = closeAt;
                hours.maxPatientNo = maxPatientNo;
                for (var i = 0; i < this.workingDays.length; i++) {
                    if (this.workingDays[i].dayId == dayId) {
                        var hoursArr = this.workingDays[i].hours;
                        if (hoursArr.length == 0) {
                            hoursArr.push(hours);
                        }
                        else {
                            var isExist = false;
                            for (var j = 0; j < hoursArr.length; j++) {
                                if (hoursArr[j].startAt == hours.startAt && hoursArr[j].closeAt == hours.closeAt) {
                                    isExist = true;
                                }
                            }
                            if (!isExist) {
                                hoursArr.push(hours);
                            }
                        }
                        this.workingDays[i].hours = hoursArr;
                    }
                }
            }
        }
        else {
            if (maxPatientNo != 0) {
                var hours = new __WEBPACK_IMPORTED_MODULE_7__model_hours__["a" /* Hours */]();
                if (startAt == "24" || closeAt == "24") {
                    hours.startAt = '00:00';
                    hours.closeAt = '23:59';
                    hours.maxPatientNo = maxPatientNo;
                    var hourArr = new Array();
                    hourArr.push(hours);
                    this.workingDays[this.getADayIndex(dayId)].hours = hourArr;
                }
            }
        }
    };
    /** getADayIndex  method get the index value of the day in the workingday array
     *  it check by using the dayid */
    DoctorAddWorkingHours.prototype.getADayIndex = function (dayId) {
        var dayIndex;
        if (this.workingDays.length > 0) {
            for (var i = 0; i < this.workingDays.length; i++) {
                if (this.workingDays[i].dayId == dayId) {
                    dayIndex = i;
                }
            }
        }
        return dayIndex;
    };
    /** get a day method get the day object from workingday array using dayid */
    DoctorAddWorkingHours.prototype.getADay = function (dayid) {
        var day = this.workingDays[this.getADayIndex(dayid)];
        if (day == undefined) {
            day = new __WEBPACK_IMPORTED_MODULE_4__model_day__["a" /* Day */]();
        }
        return day;
    };
    /** getTimeLabel get the label value for a time the label value is for display only */
    DoctorAddWorkingHours.prototype.getTimeLabel = function (value) {
        for (var i = 0; i < this.hourListOption.length; i++) {
            if (this.hourListOption[i].value == value) {
                return this.hourListOption[i].label;
            }
        }
        return "";
    };
    /** hourDelete method remove a perticular hour value from a day present in the workingDays array
     *  it do so by  using the dayid and hour index value */
    DoctorAddWorkingHours.prototype.hourDelete = function (dayid, hourIndex) {
        this.workingDays[this.getADayIndex(dayid)].hours.splice(hourIndex, 1);
    };
    /** hourSelected method run whenever use select a hour value this method check if user
     *  is choose the 24 hour value if so then we remove all the previous value and add only
     *  one value for 24 hours */
    DoctorAddWorkingHours.prototype.hourSelected = function (value, dayid) {
        var hour = new __WEBPACK_IMPORTED_MODULE_7__model_hours__["a" /* Hours */]();
        hour.startAt = "00:00";
        hour.closeAt = "23:59";
        if (value != "24") {
            var oldHours = new Array();
            oldHours = this.getADay(dayid).hours;
            for (var i = 0; i < oldHours.length; i++) {
                if (hour.equal(oldHours[i])) {
                    this.workingDays[this.getADayIndex(dayid)].hours.splice(i, 1);
                }
            }
        }
    };
    DoctorAddWorkingHours = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "add-hours",
            template: __webpack_require__("../../../../../src/app/dr/html/add_hours.html"),
            styles: [__webpack_require__("../../../../../src/app/dr/css/add_hours.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1__doctor_service__["a" /* DoctorService */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["y" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], DoctorAddWorkingHours);
    return DoctorAddWorkingHours;
}());



/***/ }),

/***/ "../../../../../src/app/dr/doctor_appointment_setup.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorAppointmentSetup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doctor__ = __webpack_require__("../../../../../src/app/dr/doctor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_formresult__ = __webpack_require__("../../../../../src/app/model/formresult.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__doctor_service__ = __webpack_require__("../../../../../src/app/dr/doctor_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DoctorAppointmentSetup = /** @class */ (function () {
    function DoctorAppointmentSetup(formBuilder, doctorService, matSnackBar, router) {
        this.formBuilder = formBuilder;
        this.doctorService = doctorService;
        this.matSnackBar = matSnackBar;
        this.router = router;
        this.doctor = new __WEBPACK_IMPORTED_MODULE_2__doctor__["a" /* Doctor */]();
        this.result = new __WEBPACK_IMPORTED_MODULE_3__model_formresult__["a" /* FormResult */]();
        this.feeAmount = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', []);
        this.maxAppointments = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', []);
    }
    DoctorAppointmentSetup.prototype.ngOnInit = function () {
        this.getDoctor();
        this.appointmentForm = this.formBuilder.group({
            feeAmount: this.feeAmount
        });
    };
    DoctorAppointmentSetup.prototype.getDoctor = function () {
        var _this = this;
        this.doctorService.getDoctorPublicInfo().subscribe(function (data) {
            if (data != undefined) {
                if (data["_body"] != "") {
                    _this.doctor = data.json();
                    _this.feeAmount.setValue(_this.doctor.appointmentFee);
                }
                else {
                    _this.router.navigateByUrl("/dr/home/dr/signup");
                }
            }
        });
    };
    DoctorAppointmentSetup.prototype.submit = function () {
        var _this = this;
        var doctor = new __WEBPACK_IMPORTED_MODULE_2__doctor__["a" /* Doctor */]();
        doctor.appointmentFee = this.appointmentForm.value.feeAmount;
        this.doctorService.docAppointmentSetup(doctor).subscribe(function (data) {
            if (data != undefined) {
                _this.result = data.json();
                if (_this.result.result) {
                    _this.matSnackBar.open(_this.result.message, "Saved", {
                        duration: 3000
                    });
                }
                else if (_this.result.error) {
                    _this.matSnackBar.open(_this.result.message, "Error", {
                        duration: 3000
                    });
                }
            }
        });
    };
    DoctorAppointmentSetup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "doc-appoint-setup",
            template: __webpack_require__("../../../../../src/app/dr/html/doctor_appointment_setup.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__doctor_service__["a" /* DoctorService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["y" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
    ], DoctorAppointmentSetup);
    return DoctorAppointmentSetup;
}());



/***/ }),

/***/ "../../../../../src/app/dr/doctor_appointment_show.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorAppointmentShow; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__doctor_service__ = __webpack_require__("../../../../../src/app/dr/doctor_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_common_service__ = __webpack_require__("../../../../../src/app/common/common_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DoctorAppointmentShow = /** @class */ (function () {
    function DoctorAppointmentShow(doctorService, commonService, formBuilder, router) {
        this.doctorService = doctorService;
        this.commonService = commonService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.progress = false;
        this.from = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]("", [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required
        ]);
        this.to = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]("", [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required
        ]);
        this.pageSize = 10;
        this.totalElements = 0;
    }
    DoctorAppointmentShow.prototype.ngOnInit = function () {
        var _this = this;
        this.dateForm = this.formBuilder.group({
            from: this.from,
            to: this.to
        });
        this.doctorService.getDoctorPublicInfo().subscribe(function (data) {
            if (data != undefined) {
                if (data["_body"] == "") {
                    _this.router.navigateByUrl("/dr/home/dr/signup");
                }
            }
        });
    };
    // get appointments gets the appointment from the data base
    DoctorAppointmentShow.prototype.getAppointments = function (pageNo) {
        var _this = this;
        // start the progress bar 
        this.progress = true;
        var from = this.dateForm.value.from;
        var to = this.dateForm.value.to;
        this.doctorService.getAppointmentOfPeriod(from, to, pageNo, this.pageSize).subscribe(function (data) {
            if (data != undefined) {
                console.log(data.json());
                _this.appointments = data.json().content;
                _this.totalElements = data.json().totalElements;
                _this.progress = false; // close the progress bar 
            }
        });
    };
    DoctorAppointmentShow.prototype.submit = function () {
        this.getAppointments(0);
    };
    DoctorAppointmentShow.prototype.nextPage = function (event) {
        console.log(event);
        this.getAppointments(event.pageIndex);
    };
    DoctorAppointmentShow = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "doc-appointment-show",
            template: __webpack_require__("../../../../../src/app/dr/html/doctor_appointment_show.html"),
            styles: [__webpack_require__("../../../../../src/app/dr/css/doctor_appointment_show.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__doctor_service__["a" /* DoctorService */], __WEBPACK_IMPORTED_MODULE_3__common_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], DoctorAppointmentShow);
    return DoctorAppointmentShow;
}());



/***/ }),

/***/ "../../../../../src/app/dr/doctor_holiday.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorHoliday; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doctor_service__ = __webpack_require__("../../../../../src/app/dr/doctor_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__doctor__ = __webpack_require__("../../../../../src/app/dr/doctor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_formresult__ = __webpack_require__("../../../../../src/app/model/formresult.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DoctorHoliday = /** @class */ (function () {
    function DoctorHoliday(formBuilder, doctorService, router) {
        this.formBuilder = formBuilder;
        this.doctorService = doctorService;
        this.router = router;
        this.currentDate = new Date();
        this.result = new __WEBPACK_IMPORTED_MODULE_4__model_formresult__["a" /* FormResult */]();
        this.holidayDate = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', []);
        // holds the list of date to be added into  data base
        this.holidayDates = new Array();
    }
    DoctorHoliday.prototype.ngOnInit = function () {
        var _this = this;
        // form initiolization 
        this.holidayForm = this.formBuilder.group({
            holidayDate: this.holidayDate
        });
        this.doctorService.getDoctorPublicInfo().subscribe(function (data) {
            if (data != undefined) {
                if (data["_body"] == "") {
                    _this.router.navigateByUrl("/dr/home/dr/signup");
                }
            }
        });
    };
    DoctorHoliday.prototype.addHoliday = function () {
        var error = false;
        /*date selected by the user if empty its a string else date
          thats why we did not choose any data type for selectedDate */
        var selectedDate = this.holidayForm.value.holidayDate;
        // here we are checking if the date is less than min date which is current date 
        if (this.holidayDate.hasError("matDatepickerMin")) {
            error = true;
        }
        //here we are checking if the date is already in the array
        for (var i = 0; i < this.holidayDates.length; i++) {
            if (this.holidayDates[i] == selectedDate) {
                error = true;
            }
        }
        // if date is not empty and not in the array then we are adding it into array
        if (!error) {
            var date = new Date(selectedDate.toISOString());
            this.holidayDates.push(date);
        }
    };
    DoctorHoliday.prototype.submit = function () {
        var _this = this;
        var doctor = new __WEBPACK_IMPORTED_MODULE_3__doctor__["a" /* Doctor */]();
        doctor.holidays = this.holidayDates;
        console.log(doctor);
        this.doctorService.addHolidays(doctor).subscribe(function (data) {
            if (data != undefined) {
                _this.result = data.json();
            }
        });
    };
    // delete the date from the array using the index
    DoctorHoliday.prototype.deleteDate = function (i) {
        this.holidayDates.splice(i, 1);
    };
    DoctorHoliday = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "doc-holiday",
            template: __webpack_require__("../../../../../src/app/dr/html/doctor_holiday.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__doctor_service__["a" /* DoctorService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
    ], DoctorHoliday);
    return DoctorHoliday;
}());



/***/ }),

/***/ "../../../../../src/app/dr/doctor_holiday_show.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorHolidayShow; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__doctor_service__ = __webpack_require__("../../../../../src/app/dr/doctor_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DoctorHolidayShow = /** @class */ (function () {
    function DoctorHolidayShow(doctorService, formBuilder, router) {
        this.doctorService = doctorService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.holidayList = new Array();
        this.from = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]("", [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required
        ]);
        this.to = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]("", [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required
        ]);
    }
    DoctorHolidayShow.prototype.ngOnInit = function () {
        //this.getAllHoliday();
        var _this = this;
        this.dateForm = this.formBuilder.group({
            from: this.from,
            to: this.to
        });
        this.doctorService.getDoctorPublicInfo().subscribe(function (data) {
            if (data != undefined) {
                if (data["_body"] == "") {
                    _this.router.navigateByUrl("/dr/home/dr/signup");
                }
            }
        });
    };
    DoctorHolidayShow.prototype.getAllHoliday = function () {
        var _this = this;
        this.doctorService.getAllHoliday().subscribe(function (data) {
            if (data != undefined) {
                _this.holidayList = data.json();
            }
        });
    };
    DoctorHolidayShow.prototype.submit = function () {
        var from = this.dateForm.value.from;
        var to = this.dateForm.value.to;
        this.getHolidayOfPeriod(from, to);
    };
    /** getHolidayOfPeriod get the holiday between two period it takes two date parameter
     *  and return the list of holidays between them */
    DoctorHolidayShow.prototype.getHolidayOfPeriod = function (from, to) {
        var _this = this;
        this.doctorService.getHolidayOfPeriod(from, to).subscribe(function (data) {
            if (data != undefined) {
                _this.holidayList = data.json();
                console.log(data.json());
            }
        });
    };
    DoctorHolidayShow.prototype.deleteHoliday = function (date) {
        var _this = this;
        this.doctorService.deleteHoliday(date).subscribe(function (data) {
            if (data != undefined) {
                console.log(data.json());
                if (data.json().result) {
                    var from = _this.dateForm.value.from;
                    var to = _this.dateForm.value.to;
                    _this.getHolidayOfPeriod(from, to);
                }
            }
        });
    };
    DoctorHolidayShow = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "doc-holiday-show",
            template: __webpack_require__("../../../../../src/app/dr/html/doctor_holiday_show.html"),
            styles: [__webpack_require__("../../../../../src/app/dr/css/doctor_holiday_show.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__doctor_service__["a" /* DoctorService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], DoctorHolidayShow);
    return DoctorHolidayShow;
}());



/***/ }),

/***/ "../../../../../src/app/dr/doctor_home.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorHome; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_user_service__ = __webpack_require__("../../../../../src/app/user/user_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__doctor_service__ = __webpack_require__("../../../../../src/app/dr/doctor_service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DoctorHome = /** @class */ (function () {
    function DoctorHome(userService, router, doctorService) {
        this.userService = userService;
        this.router = router;
        this.doctorService = doctorService;
    }
    DoctorHome.prototype.ngOnInit = function () {
        var _this = this;
        this.doctorService.getDoctorPublicInfo().subscribe(function (data) {
            if (data["_body"] == "") {
                _this.router.navigateByUrl("/dr/home/dr/signup");
            }
        });
    };
    DoctorHome.prototype.signOut = function () {
        var _this = this;
        this.userService.userLogout().subscribe(function (data) {
            if (data != undefined) {
                if (data.status == 200) {
                    _this.router.navigateByUrl("/");
                }
            }
        });
    };
    DoctorHome = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'doctor-home',
            template: __webpack_require__("../../../../../src/app/dr/html/doctor_home.html"),
            styles: [__webpack_require__("../../../../../src/app/dr/css/doctor_home.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__doctor_service__["a" /* DoctorService */]])
    ], DoctorHome);
    return DoctorHome;
}());



/***/ }),

/***/ "../../../../../src/app/dr/doctor_make_appointment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorMakeAppointment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__doctor__ = __webpack_require__("../../../../../src/app/dr/doctor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__doctor_service__ = __webpack_require__("../../../../../src/app/dr/doctor_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_appointment__ = __webpack_require__("../../../../../src/app/model/appointment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_common_service__ = __webpack_require__("../../../../../src/app/common/common_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_formresult__ = __webpack_require__("../../../../../src/app/model/formresult.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DoctorMakeAppointment = /** @class */ (function () {
    function DoctorMakeAppointment(formBuilder, doctorService, commonService, matSnackBar, router) {
        this.formBuilder = formBuilder;
        this.doctorService = doctorService;
        this.commonService = commonService;
        this.matSnackBar = matSnackBar;
        this.router = router;
        this.doctor = new __WEBPACK_IMPORTED_MODULE_1__doctor__["a" /* Doctor */]();
        this.holidays = new Array();
        this.result = new __WEBPACK_IMPORTED_MODULE_6__model_formresult__["a" /* FormResult */]();
        this.hours = new Array();
        this.today = new Date();
        this.patientId = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]("", [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].email
        ]);
        this.date = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]("", [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required
        ]);
        this.timeSlot = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]("", [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required
        ]);
        this.patientName = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]("", [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required
        ]);
        this.patientPhoneNo = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]("", [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].minLength(10)
        ]);
        this.appointmentDate = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]("", [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required
        ]);
        this.appointmentTimeSlot = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]("", [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required
        ]);
    }
    ;
    DoctorMakeAppointment.prototype.ngOnInit = function () {
        this.appointmentForm = this.formBuilder.group({
            patientId: this.patientId,
            date: this.date,
            timeSlot: this.timeSlot
        });
        this.appointmentWithoutPatientId = this.formBuilder.group({
            patientName: this.patientName,
            patientPhoneNo: this.patientPhoneNo,
            appointmentDate: this.appointmentDate,
            appointmentTimeSlot: this.appointmentTimeSlot
        });
        this.getDoctor();
    };
    /** dateselected execute when user select a date and it change the hours value according
     *  to the day of the date */
    DoctorMakeAppointment.prototype.dateSelected = function (event) {
        var date = event.value;
        for (var i = 0; i < this.doctor.workingDays.length; i++) {
            if (this.doctor.workingDays[i].dayId == date.getDay()) {
                this.hours = this.doctor.workingDays[i].hours;
            }
        }
    };
    /** getDoctor method gets the details of the doctor and use it to get information like
     *  holidays , workingdays and hours */
    DoctorMakeAppointment.prototype.getDoctor = function () {
        var _this = this;
        this.doctorService.getDoctorPublicInfo().subscribe(function (data) {
            if (data != undefined) {
                console.log(data);
                if (data["_body"] != "") {
                    _this.doctor = data.json();
                    /* filter is dependent on the doctor object thats why
                     * it is set here */
                    _this.workingDayFilter = function (d) {
                        var day = d.getDay();
                        var workingDays = _this.doctor.workingDays;
                        var holidays = _this.doctor.holidays;
                        var result = false;
                        if (workingDays != null) {
                            for (var i = 0; i < workingDays.length; i++) {
                                if (day == workingDays[i].dayId) {
                                    result = true;
                                }
                            }
                        }
                        if (holidays != null) {
                            for (var i = 0; i < holidays.length; i++) {
                                var holiday = holidays[i];
                                if (d.getTime() == parseInt(holiday.toString()) * 1000) {
                                    result = false;
                                }
                            }
                        }
                        return result;
                    };
                }
                else {
                    _this.router.navigateByUrl("/dr/home/dr/signup");
                }
            }
        });
    };
    // open snackbar method takes two parameter message and action and open the matsnackbar
    DoctorMakeAppointment.prototype.openSnackBar = function (message, action) {
        this.matSnackBar.open(message, action, {
            duration: 3000,
        });
    };
    /** execute when user submit the form using patient id */
    DoctorMakeAppointment.prototype.submit = function () {
        var _this = this;
        var appointment = new __WEBPACK_IMPORTED_MODULE_4__model_appointment__["a" /* Appointment */]();
        appointment.patientId = this.appointmentForm.value.patientId;
        appointment.date = new Date(this.appointmentForm.value.date);
        appointment.dayId = appointment.date.getDay();
        appointment.hours = this.appointmentForm.value.timeSlot;
        console.log(appointment);
        this.doctorService.makeAppointment(appointment).subscribe(function (data) {
            if (data != undefined) {
                _this.result = data.json();
                if (_this.result.result) {
                    _this.openSnackBar(_this.result.message, "Done");
                }
                else {
                    if (_this.result.error) {
                        _this.openSnackBar(_this.result.message, "Error");
                    }
                }
            }
        });
    };
    /** execute when user submit the form without patient id */
    DoctorMakeAppointment.prototype.submitWithoutId = function () {
        var _this = this;
        var appointment = new __WEBPACK_IMPORTED_MODULE_4__model_appointment__["a" /* Appointment */]();
        appointment.patientName = this.appointmentWithoutPatientId.value.patientName;
        appointment.patientPhoneNo = this.appointmentWithoutPatientId.value.patientPhoneNo;
        appointment.date = this.appointmentWithoutPatientId.value.appointmentDate;
        appointment.dayId = appointment.date.getDay();
        appointment.hours = this.appointmentWithoutPatientId.value.appointmentTimeSlot;
        this.doctorService.makeAppointment(appointment).subscribe(function (data) {
            if (data != undefined) {
                _this.result = data.json();
                if (_this.result.result) {
                    _this.openSnackBar(_this.result.message, "Done");
                }
                else {
                    if (_this.result.error) {
                        _this.openSnackBar(_this.result.message, "Error");
                    }
                }
            }
        });
    };
    /** tabChanged execute when user choose any tab it reset all the field of previous tab
     *  so things won't mixed up in two tabs */
    DoctorMakeAppointment.prototype.tabChanged = function (event) {
        if (event.index == 0) {
            this.appointmentForm.reset();
        }
        else if (event.index == 1) {
            this.appointmentWithoutPatientId.reset();
        }
    };
    /** patientIdExist method check if the patient id exist in database or not
     *  it execute on change */
    DoctorMakeAppointment.prototype.patientIdExist = function () {
        var _this = this;
        this.doctorService.patientExist(this.patientId.value).subscribe(function (data) {
            if (data.json().error) {
                _this.patientId.setErrors({ "noPatient": true });
            }
        });
    };
    DoctorMakeAppointment = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "doc-make-appointment",
            template: __webpack_require__("../../../../../src/app/dr/html/doctor_make_appointment.html"),
            styles: [__webpack_require__("../../../../../src/app/dr/css/doctor_make_appointment.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__doctor_service__["a" /* DoctorService */],
            __WEBPACK_IMPORTED_MODULE_5__common_common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["y" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */]])
    ], DoctorMakeAppointment);
    return DoctorMakeAppointment;
}());



/***/ }),

/***/ "../../../../../src/app/dr/doctor_module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__doctor_signup__ = __webpack_require__("../../../../../src/app/dr/doctor_signup.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_material_module__ = __webpack_require__("../../../../../src/app/material/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__doctor_routing_module__ = __webpack_require__("../../../../../src/app/dr/doctor_routing_module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__doctor_home__ = __webpack_require__("../../../../../src/app/dr/doctor_home.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__doctor_appointment_setup__ = __webpack_require__("../../../../../src/app/dr/doctor_appointment_setup.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__doctor_holiday__ = __webpack_require__("../../../../../src/app/dr/doctor_holiday.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__doctor_panel__ = __webpack_require__("../../../../../src/app/dr/doctor_panel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__doctor_make_appointment__ = __webpack_require__("../../../../../src/app/dr/doctor_make_appointment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__doctor_appointment_show__ = __webpack_require__("../../../../../src/app/dr/doctor_appointment_show.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__doctor_holiday_show__ = __webpack_require__("../../../../../src/app/dr/doctor_holiday_show.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__doctor_service__ = __webpack_require__("../../../../../src/app/dr/doctor_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__doctor_public_profile__ = __webpack_require__("../../../../../src/app/dr/doctor_public_profile.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__doctor_profile_edit__ = __webpack_require__("../../../../../src/app/dr/doctor_profile_edit.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__common_common_module__ = __webpack_require__("../../../../../src/app/common/common_module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__doctor_add_working_hours__ = __webpack_require__("../../../../../src/app/dr/doctor_add_working_hours.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__common_user_choose_profile_image__ = __webpack_require__("../../../../../src/app/common/user_choose_profile_image.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__doctor_write_prescription__ = __webpack_require__("../../../../../src/app/dr/doctor_write_prescription.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var DoctorModule = /** @class */ (function () {
    function DoctorModule() {
    }
    DoctorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_4__material_material_module__["a" /* MaterialModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_5__doctor_routing_module__["a" /* DoctorRoutingModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_16__common_common_module__["a" /* AppCommonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__doctor_signup__["a" /* DoctorSignup */], __WEBPACK_IMPORTED_MODULE_6__doctor_home__["a" /* DoctorHome */], __WEBPACK_IMPORTED_MODULE_7__doctor_appointment_setup__["a" /* DoctorAppointmentSetup */], __WEBPACK_IMPORTED_MODULE_8__doctor_holiday__["a" /* DoctorHoliday */], __WEBPACK_IMPORTED_MODULE_9__doctor_panel__["a" /* DoctorPanel */],
                __WEBPACK_IMPORTED_MODULE_10__doctor_make_appointment__["a" /* DoctorMakeAppointment */], __WEBPACK_IMPORTED_MODULE_11__doctor_appointment_show__["a" /* DoctorAppointmentShow */], __WEBPACK_IMPORTED_MODULE_12__doctor_holiday_show__["a" /* DoctorHolidayShow */], __WEBPACK_IMPORTED_MODULE_17__doctor_add_working_hours__["a" /* DoctorAddWorkingHours */],
                __WEBPACK_IMPORTED_MODULE_14__doctor_public_profile__["a" /* DoctorPublicProfile */], __WEBPACK_IMPORTED_MODULE_15__doctor_profile_edit__["a" /* DoctorProfileEdit */], __WEBPACK_IMPORTED_MODULE_19__doctor_write_prescription__["a" /* DoctorWritePrescription */]],
            providers: [__WEBPACK_IMPORTED_MODULE_13__doctor_service__["a" /* DoctorService */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__doctor_signup__["a" /* DoctorSignup */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_18__common_user_choose_profile_image__["a" /* UserChooseProfileImage */], __WEBPACK_IMPORTED_MODULE_19__doctor_write_prescription__["a" /* DoctorWritePrescription */]]
        })
    ], DoctorModule);
    return DoctorModule;
}());



/***/ }),

/***/ "../../../../../src/app/dr/doctor_panel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorPanel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__doctor_service__ = __webpack_require__("../../../../../src/app/dr/doctor_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_common_service__ = __webpack_require__("../../../../../src/app/common/common_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__doctor_write_prescription__ = __webpack_require__("../../../../../src/app/dr/doctor_write_prescription.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DoctorPanel = /** @class */ (function () {
    function DoctorPanel(doctorService, commonService, matDialog, router) {
        this.doctorService = doctorService;
        this.commonService = commonService;
        this.matDialog = matDialog;
        this.router = router;
        this.progress = true;
        this.pageSize = 10;
        this.showAppointment = false;
    }
    DoctorPanel.prototype.ngOnInit = function () {
        var _this = this;
        this.getAppointments(0);
        this.matDialog.afterAllClosed.subscribe(function () {
            _this.getAppointments(0);
        });
        this.doctorService.getDoctorPublicInfo().subscribe(function (data) {
            if (data != undefined) {
                if (data["_body"] == "") {
                    _this.router.navigateByUrl("/dr/home/dr/signup");
                }
            }
        });
    };
    DoctorPanel.prototype.writePrescription = function (appointmentId) {
        this.matDialog.open(__WEBPACK_IMPORTED_MODULE_4__doctor_write_prescription__["a" /* DoctorWritePrescription */], {
            data: { appointmentId: appointmentId },
            height: '700px',
            width: '900px'
        });
    };
    DoctorPanel.prototype.getAppointments = function (page) {
        var _this = this;
        this.progress = true;
        this.pageNo = page;
        this.doctorService.getTodayAppointment(this.pageNo, this.pageSize).subscribe(function (data) {
            if (data != undefined) {
                console.log(data.json().content);
                _this.appointments = data.json().content;
                _this.totalElements = data.json().totalElements;
                console.log(_this.appointments);
                if (_this.appointments.length != 0) {
                    _this.showAppointment = true;
                    _this.progress = false;
                }
                else {
                    _this.progress = false;
                }
            }
        });
    };
    DoctorPanel.prototype.nextPage = function (event) {
        this.getAppointments(event.pageIndex);
    };
    DoctorPanel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "doc-panel",
            template: __webpack_require__("../../../../../src/app/dr/html/doctor_panel.html"),
            styles: [__webpack_require__("../../../../../src/app/dr/css/doctor_panel.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__doctor_service__["a" /* DoctorService */], __WEBPACK_IMPORTED_MODULE_3__common_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
    ], DoctorPanel);
    return DoctorPanel;
}());



/***/ }),

/***/ "../../../../../src/app/dr/doctor_profile_edit.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorProfileEdit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__doctor__ = __webpack_require__("../../../../../src/app/dr/doctor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_common_service__ = __webpack_require__("../../../../../src/app/common/common_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__doctor_service__ = __webpack_require__("../../../../../src/app/dr/doctor_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__doctor_add_working_hours__ = __webpack_require__("../../../../../src/app/dr/doctor_add_working_hours.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_user_choose_profile_image__ = __webpack_require__("../../../../../src/app/common/user_choose_profile_image.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DoctorProfileEdit = /** @class */ (function () {
    function DoctorProfileEdit(doctorService, matSnackBar, commonService, dialog, router) {
        this.doctorService = doctorService;
        this.matSnackBar = matSnackBar;
        this.commonService = commonService;
        this.dialog = dialog;
        this.router = router;
        this.progress = true;
        this.appointment = true;
        this.appointmentEdit = false;
        this.phoneNo = true;
        this.phoneNoEdit = false;
        this.address = true;
        this.addressEdit = false;
        this.name = true;
        this.nameEdit = false;
        this.about = true;
        this.aboutEdit = false;
        this.qualification = true;
        this.qualificationEdit = false;
        this.speciality = true;
        this.specialityEdit = false;
        this.doctor = new __WEBPACK_IMPORTED_MODULE_1__doctor__["a" /* Doctor */]();
    }
    DoctorProfileEdit.prototype.ngOnInit = function () {
        var _this = this;
        this.getState();
        this.getDoctor();
        this.getAllDegree();
        this.getAllSpeciality();
        // after upload dailog closed we get new doctor object
        this.dialog.afterAllClosed.subscribe(function () {
            _this.getDoctor();
        });
    };
    DoctorProfileEdit.prototype.getDoctor = function () {
        var _this = this;
        this.doctorService.getDoctorPublicInfo().subscribe(function (data) {
            if (data.status != 204) {
                if (data["_body"] != "") {
                    _this.doctor = data.json();
                    // hide the progres bar 
                    _this.progress = false;
                }
                else {
                    _this.router.navigateByUrl("/dr/home/dr/signup");
                }
            }
        });
    };
    /*getState method get all the state from the database and populate it into the
     *form select field */
    DoctorProfileEdit.prototype.getState = function () {
        var _this = this;
        this.doctorService.getAllState().subscribe(function (data) {
            if (data != undefined) {
                _this.states = data.json();
            }
        });
    };
    /* getCitites method get all the cityies for a particular state selected by the user it
     * takes one parameter which is stateid */
    DoctorProfileEdit.prototype.getCitites = function (stateId) {
        var _this = this;
        this.doctorService.getAllCities(stateId).subscribe(function (data) {
            if (data != undefined) {
                _this.cities = data.json();
            }
        });
    };
    /*     it execute when user select a state from the state list and change the list
     *     of cities to all the cities for that perticular state */
    DoctorProfileEdit.prototype.stateSelected = function () {
        var stateId = this.doctor.state;
        this.getCitites(stateId);
    };
    /* getAddDegree get list of the degress from the database and populate it into
     * the form select field */
    DoctorProfileEdit.prototype.getAllDegree = function () {
        var _this = this;
        this.doctorService.getAllDegree().subscribe(function (data) {
            if (data != undefined) {
                _this.qualificationOptions = data.json();
            }
        });
    };
    /*getAllSpeciality get list of all the speciality form the database and populate into
     * the form select field */
    DoctorProfileEdit.prototype.getAllSpeciality = function () {
        var _this = this;
        this.doctorService.getAllSpeciality().subscribe(function (data) {
            if (data != undefined) {
                _this.specialities = data.json();
            }
        });
    };
    DoctorProfileEdit.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__doctor_add_working_hours__["a" /* DoctorAddWorkingHours */], {
            width: "1000px",
            height: "700px"
        });
    };
    DoctorProfileEdit.prototype.save = function () {
        var _this = this;
        this.progress = true;
        this.doctorService.saveDoctorObject(this.doctor).subscribe(function (data) {
            if (data != undefined) {
                var formResult = data.json();
                if (formResult.result) {
                    _this.progress = false;
                    _this.matSnackBar.open(formResult.message, "Saved", {
                        duration: 3000
                    });
                }
                else {
                    _this.progress = false;
                    _this.matSnackBar.open(formResult.message, "Error", {
                        duration: 3000
                    });
                }
            }
        });
    };
    DoctorProfileEdit.prototype.refresh = function () {
        this.getDoctor();
    };
    DoctorProfileEdit.prototype.upload = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__common_user_choose_profile_image__["a" /* UserChooseProfileImage */], {
            width: "700px",
            height: "600px"
        });
    };
    DoctorProfileEdit = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "doctor-profile-edit",
            template: __webpack_require__("../../../../../src/app/dr/html/doctor_profile_edit.html"),
            styles: [__webpack_require__("../../../../../src/app/dr/css/doctor_profile_edit.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__doctor_service__["a" /* DoctorService */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["y" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_2__common_common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */]])
    ], DoctorProfileEdit);
    return DoctorProfileEdit;
}());



/***/ }),

/***/ "../../../../../src/app/dr/doctor_public_profile.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorPublicProfile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doctor_service__ = __webpack_require__("../../../../../src/app/dr/doctor_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__doctor__ = __webpack_require__("../../../../../src/app/dr/doctor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_common_service__ = __webpack_require__("../../../../../src/app/common/common_service.ts");
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






var DoctorPublicProfile = /** @class */ (function () {
    function DoctorPublicProfile(acroute, doctorService, commonService, data, router) {
        this.acroute = acroute;
        this.doctorService = doctorService;
        this.commonService = commonService;
        this.data = data;
        this.router = router;
        this.doctor = new __WEBPACK_IMPORTED_MODULE_3__doctor__["a" /* Doctor */]();
    }
    DoctorPublicProfile.prototype.ngOnInit = function () {
        this.docId = this.data.docId;
        this.getDoctor();
    };
    DoctorPublicProfile.prototype.getDoctor = function () {
        var _this = this;
        this.doctorService.getDocUsingId(this.docId).subscribe(function (data) {
            if (data.status != 204) {
                _this.doctor = data.json();
                _this.doctor.workingDays = _this.doctor.workingDays;
            }
        });
    };
    DoctorPublicProfile = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "doc-public-profile",
            template: __webpack_require__("../../../../../src/app/dr/html/doctor_public_profile.html"),
            styles: [__webpack_require__("../../../../../src/app/dr/css/doctor_public_profile.css")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__doctor_service__["a" /* DoctorService */],
            __WEBPACK_IMPORTED_MODULE_5__common_common_service__["a" /* CommonService */], Object, __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], DoctorPublicProfile);
    return DoctorPublicProfile;
}());



/***/ }),

/***/ "../../../../../src/app/dr/doctor_routing_config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__doctor_signup__ = __webpack_require__("../../../../../src/app/dr/doctor_signup.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__doctor_holiday__ = __webpack_require__("../../../../../src/app/dr/doctor_holiday.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doctor_home__ = __webpack_require__("../../../../../src/app/dr/doctor_home.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__doctor_appointment_setup__ = __webpack_require__("../../../../../src/app/dr/doctor_appointment_setup.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__doctor_panel__ = __webpack_require__("../../../../../src/app/dr/doctor_panel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__doctor_make_appointment__ = __webpack_require__("../../../../../src/app/dr/doctor_make_appointment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__doctor_appointment_show__ = __webpack_require__("../../../../../src/app/dr/doctor_appointment_show.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__doctor_holiday_show__ = __webpack_require__("../../../../../src/app/dr/doctor_holiday_show.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__doctor_add_working_hours__ = __webpack_require__("../../../../../src/app/dr/doctor_add_working_hours.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__doctor_public_profile__ = __webpack_require__("../../../../../src/app/dr/doctor_public_profile.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__doctor_profile_edit__ = __webpack_require__("../../../../../src/app/dr/doctor_profile_edit.ts");











var doctorAppointment = { path: "dr/appointment", component: __WEBPACK_IMPORTED_MODULE_3__doctor_appointment_setup__["a" /* DoctorAppointmentSetup */] };
var doctorProfileEdit = { path: "profile/edit", component: __WEBPACK_IMPORTED_MODULE_10__doctor_profile_edit__["a" /* DoctorProfileEdit */] };
var doctorHoliday = { path: "dr/holiday", component: __WEBPACK_IMPORTED_MODULE_1__doctor_holiday__["a" /* DoctorHoliday */] };
var doctorSignUp = { path: "dr/signup", component: __WEBPACK_IMPORTED_MODULE_0__doctor_signup__["a" /* DoctorSignup */] };
var doctorPanel = { path: "dr/panel", component: __WEBPACK_IMPORTED_MODULE_4__doctor_panel__["a" /* DoctorPanel */] };
var doctorMakeAppointment = { path: "dr/make/appointment", component: __WEBPACK_IMPORTED_MODULE_5__doctor_make_appointment__["a" /* DoctorMakeAppointment */] };
var doctorAppointmentShow = { path: "dr/show/appointment", component: __WEBPACK_IMPORTED_MODULE_6__doctor_appointment_show__["a" /* DoctorAppointmentShow */] };
var doctorHolidayShow = { path: "dr/show/holiday", component: __WEBPACK_IMPORTED_MODULE_7__doctor_holiday_show__["a" /* DoctorHolidayShow */] };
var doctorAddWorkingHours = { path: "dr/add/hours", component: __WEBPACK_IMPORTED_MODULE_8__doctor_add_working_hours__["a" /* DoctorAddWorkingHours */] };
var doctorPublicProfile = { path: "dr/public/profile/:docId", component: __WEBPACK_IMPORTED_MODULE_9__doctor_public_profile__["a" /* DoctorPublicProfile */] };
var doctorHome = {
    path: "dr/home", component: __WEBPACK_IMPORTED_MODULE_2__doctor_home__["a" /* DoctorHome */], children: [
        { path: "", component: __WEBPACK_IMPORTED_MODULE_4__doctor_panel__["a" /* DoctorPanel */] },
        doctorSignUp,
        doctorAppointment,
        doctorHoliday,
        doctorPanel,
        doctorMakeAppointment,
        doctorAppointmentShow,
        doctorHolidayShow,
        doctorAddWorkingHours,
        doctorProfileEdit
    ]
};
var DoctorRoutes = [doctorHome, doctorPublicProfile];


/***/ }),

/***/ "../../../../../src/app/dr/doctor_routing_module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doctor_routing_config__ = __webpack_require__("../../../../../src/app/dr/doctor_routing_config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DoctorRoutingModule = /** @class */ (function () {
    function DoctorRoutingModule() {
    }
    DoctorRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__doctor_routing_config__["a" /* DoctorRoutes */])],
            declarations: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], DoctorRoutingModule);
    return DoctorRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/dr/doctor_service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doctor__ = __webpack_require__("../../../../../src/app/dr/doctor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_common_service__ = __webpack_require__("../../../../../src/app/common/common_service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DoctorService = /** @class */ (function () {
    function DoctorService(http, commonService) {
        this.http = http;
        this.commonService = commonService;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.commOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    /* save doctor method save the new doctor object using the signup method
     * of the backend */
    DoctorService.prototype.saveDoctor = function (doctor) {
        var url = "/api/private/dr/signup";
        return this.http.post(url, doctor, this.commOptions);
    };
    /*savedoctorobject method save the existing doctor object in the database */
    DoctorService.prototype.saveDoctorObject = function (doctor) {
        var url = "/api/private/dr/save";
        return this.http.post(url, doctor, this.commOptions);
    };
    DoctorService.prototype.docAppointmentSetup = function (doctor) {
        var url = "/api/private/dr/appointment/setup";
        return this.http.post(url, doctor, this.commOptions);
    };
    DoctorService.prototype.getAllState = function () {
        var url = "/api/public/dr/state/all";
        return this.http.get(url, this.commOptions);
    };
    DoctorService.prototype.addHolidays = function (doctor) {
        var url = "/api/private/dr/holiday/add";
        return this.http.post(url, doctor, this.commOptions);
    };
    DoctorService.prototype.getAllCities = function (stateId) {
        var url = "/api/public/dr/city/all";
        var param = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        param.set("stateId", stateId);
        this.commOptions.params = param;
        return this.http.get(url, this.commOptions);
    };
    DoctorService.prototype.getAllDegree = function () {
        var url = "/api/public/dr/degree/all";
        return this.http.get(url, this.commOptions);
    };
    DoctorService.prototype.getAllSpeciality = function () {
        var url = "/api/public/dr/speciality/all";
        return this.http.get(url, this.commOptions);
    };
    DoctorService.prototype.getAllHoliday = function () {
        var url = "/api/public/dr/holiday/all";
        return this.http.get(url, this.commOptions);
    };
    DoctorService.prototype.getDoctorPublicInfo = function () {
        var url = "/api/public/dr/get/doctor";
        return this.http.get(url, this.commOptions);
    };
    DoctorService.prototype.makeAppointment = function (appointment) {
        var url = "/api/private/dr/appointment/make";
        return this.http.post(url, appointment, this.commOptions);
    };
    DoctorService.prototype.getDocAppointment = function () {
        var url = "/api/private/dr/get/appointment";
        return this.http.get(url, this.commOptions);
    };
    /**getAppointmentOfPeriod method gets the appointment between a period and it sends result in pages
     * format pageno and pagesize are get by parameter */
    DoctorService.prototype.getAppointmentOfPeriod = function (from, to, pageNo, pageSize) {
        var url = "/api/private/dr/get/appointment/period";
        var param = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        param.set("from", from.getTime().toString());
        param.set("to", to.getTime().toString());
        param.set("pageNo", pageNo.toString());
        param.set("pageSize", pageSize.toString());
        this.commOptions.params = param;
        return this.http.get(url, this.commOptions);
    };
    /** getholidayofperiod method get the list of holidays between a time period */
    DoctorService.prototype.getHolidayOfPeriod = function (from, to) {
        var url = "/api/private/dr/get/holiday/period";
        var param = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        param.set("from", from.getTime().toString());
        param.set("to", to.getTime().toString());
        this.commOptions.params = param;
        return this.http.get(url, this.commOptions);
    };
    /** getTodayAppointment get the appointment of today it takes two parameter pageno and pagesize
     *  and send that page full of today's appointment */
    DoctorService.prototype.getTodayAppointment = function (pageNo, pageSize) {
        var url = "/api/private/dr/get/appointment/today";
        var param = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        param.set("pageNo", pageNo.toString());
        param.set("pageSize", pageSize.toString());
        this.commOptions.params = param;
        return this.http.get(url, this.commOptions);
    };
    /** saveWorkingDays method save the workingDays value to doctor object in database*/
    DoctorService.prototype.saveWorkingDays = function (workingDays) {
        var url = "/api/private/dr/save/workingdays";
        var doctor = new __WEBPACK_IMPORTED_MODULE_2__doctor__["a" /* Doctor */]();
        doctor.workingDays = workingDays;
        return this.http.post(url, doctor, this.commOptions);
    };
    //    /** fromLocalTimeToString method takes array of string which contain two string value one is for hour 
    //     *  and another is for minute and resturn the combined string value of time where hour and minute are 
    //     *  seperated by :*/
    //    fromLocalTimeToString( time: string[] ) {
    //
    //        let result: string;
    //
    //        // if its less than 10 its single digit so we add 0 before it 
    //        if ( parseInt( time[0] ) < 10 ) {
    //
    //
    //
    //            if ( parseInt( time[1] ) == 0 ) {
    //                result = "0" + time[0] + ":" + "0" + time[1];
    //
    //            }
    //            else {
    //                result = "0" + time[0] + ":" + time[1];
    //
    //            }
    //
    //        }
    //        else {
    //            // if its 0 its single digit 0 so we add 0 so it become 00
    //            if ( parseInt( time[1] ) == 0 ) {
    //                result = time[0] + ":" + "0" + time[1];
    //            }
    //
    //            else {
    //                result = time[0] + ":" + time[1];
    //            }
    //
    //        }
    //
    //        return result;
    //    }
    /** getTimeLabel method takes the array of string which is got from database and convert it to
     *  time lable according to hourListOptions file */
    //    getTimeLabel( hour: string[] ) {
    //        return this.commonService.getTimeLabel( this.fromLocalTimeToString( hour ) );
    //    }
    /** patient exist method takes patient id as parameter and checks if the patient exist in
     *  database or not */
    DoctorService.prototype.patientExist = function (patientId) {
        var url = "/api/private/dr/patient/exist";
        var param = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        param.set("patientId", patientId);
        this.commOptions.params = param;
        return this.http.get(url, this.commOptions);
    };
    /** getPatientData method takes the patient id as a parameter and return the patient object
     *  as a result */
    DoctorService.prototype.getPatientData = function (patientId) {
        var url = "/api/public/get/patient";
        var param = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        param.set("patientId", patientId);
        this.commOptions.params = param;
        return this.http.get(url, this.commOptions);
    };
    /** getDocUsingId method takes the doctor id as the parameter and return the doctor object */
    DoctorService.prototype.getDocUsingId = function (docId) {
        var url = "/api/public/dr/get/profile";
        var param = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        param.set("docId", docId);
        this.commOptions.params = param;
        return this.http.get(url, this.commOptions);
    };
    /* deleteHoliday delete the holiday from the list of holidays it takes date as parameter
     *@param Date (date to be deleted)*/
    DoctorService.prototype.deleteHoliday = function (date) {
        var url = "/api/private/dr/delete/holiday";
        return this.http.post(url, date, this.commOptions);
    };
    /**saveDoctorProfileImage method takes the UserFile object and
     * save the image as profile image for the user */
    DoctorService.prototype.saveDoctorProfileImage = function (image) {
        var url = "/api/private/dr/change/profileimg";
        return this.http.post(url, image, this.commOptions);
    };
    /** getappointment method takes appointmentid as parameter and return the appointment
     *  object for that appointment if the doctor is authorised to get the information
     *  else return null*/
    DoctorService.prototype.getAppointment = function (appointmentId) {
        var url = "/api/private/dr/get/appointment/id";
        var param = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        param.set("appointmentId", appointmentId);
        this.commOptions.params = param;
        return this.http.get(url, this.commOptions);
    };
    /** savePrescription method takes the appointment object with prescription and save it
     *  into the database
     *  */
    DoctorService.prototype.savePrescription = function (appointment) {
        var url = "/api/private/dr/save/prescription";
        return this.http.post(url, appointment, this.commOptions);
    };
    DoctorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__common_common_service__["a" /* CommonService */]])
    ], DoctorService);
    return DoctorService;
}());



/***/ }),

/***/ "../../../../../src/app/dr/doctor_signup.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorSignup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doctor__ = __webpack_require__("../../../../../src/app/dr/doctor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__doctor_service__ = __webpack_require__("../../../../../src/app/dr/doctor_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_formresult__ = __webpack_require__("../../../../../src/app/model/formresult.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DoctorSignup = /** @class */ (function () {
    /* initialization of form control ends here */
    function DoctorSignup(_formBuilder, doctorService, matSnackBar, router) {
        this._formBuilder = _formBuilder;
        this.doctorService = doctorService;
        this.matSnackBar = matSnackBar;
        this.router = router;
        this.result = new __WEBPACK_IMPORTED_MODULE_4__model_formresult__["a" /* FormResult */]();
        // doctor objcet to be forward to save 
        this.doctor = new __WEBPACK_IMPORTED_MODULE_2__doctor__["a" /* Doctor */]();
        /* initialization of form controls start here */
        this.name = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required
        ]);
        this.about = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(256)
        ]);
        this.qualifications = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required
        ]);
        this.specialitiesControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", []);
        this.address = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required
        ]);
        this.address2 = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("");
        this.state = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required
        ]);
        this.city = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required
        ]);
        this.phoneno = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(10)
        ]);
    }
    DoctorSignup.prototype.ngOnInit = function () {
        this.getState();
        this.getAllDegree();
        this.getAllSpeciality();
        this.personalForm = this._formBuilder.group({
            name: this.name,
            about: this.about
        });
        this.qualificationForm = this._formBuilder.group({
            qualifications: this.qualifications,
            specialities: this.specialitiesControl
        });
        this.contactForm = this._formBuilder.group({
            address: this.address,
            address2: this.address2,
            state: this.state,
            city: this.city,
            phoneno: this.phoneno
        });
    };
    /* getAddDegree get list of the degress from the database and populate it into
     * the form select field */
    DoctorSignup.prototype.getAllDegree = function () {
        var _this = this;
        this.doctorService.getAllDegree().subscribe(function (data) {
            if (data != undefined) {
                _this.qualificationOptions = data.json();
            }
        });
    };
    /*getAllSpeciality get list of all the speciality form the database and populate into
     * the form select field */
    DoctorSignup.prototype.getAllSpeciality = function () {
        var _this = this;
        this.doctorService.getAllSpeciality().subscribe(function (data) {
            if (data != undefined) {
                _this.specialities = data.json();
            }
        });
    };
    /*getState method get all the state from the database and populate it into the
     *form select field */
    DoctorSignup.prototype.getState = function () {
        var _this = this;
        this.doctorService.getAllState().subscribe(function (data) {
            if (data != undefined) {
                _this.states = data.json();
            }
        });
    };
    /* getCitites method get all the cityies for a particular state selected by the user it
     * takes one parameter which is stateid */
    DoctorSignup.prototype.getCitites = function (stateId) {
        var _this = this;
        this.doctorService.getAllCities(stateId).subscribe(function (data) {
            if (data != undefined) {
                _this.cities = data.json();
            }
        });
    };
    /*     it execute when user select a state from the state list and change the list
     *     of cities to all the cities for that perticular state */
    DoctorSignup.prototype.stateSelected = function () {
        var stateId = this.contactForm.value.state;
        this.getCitites(stateId);
    };
    /* execute when user submit the form by clicking the save button in the last
     * step of the form */
    DoctorSignup.prototype.submit = function () {
        var _this = this;
        // put all the value in the doctor object 
        this.doctor.name = this.personalForm.value.name;
        this.doctor.about = this.personalForm.value.about;
        this.doctor.degrees = this.qualificationForm.value.qualifications;
        this.doctor.specialities = this.qualificationForm.value.specialities;
        this.doctor.addrLineOne = this.contactForm.value.address;
        this.doctor.addrLineTwo = this.contactForm.value.address2;
        this.doctor.state = this.contactForm.value.state;
        this.doctor.city = this.contactForm.value.city;
        this.doctor.phoneno = this.contactForm.value.phoneno;
        console.log(this.doctor);
        this.doctorService.saveDoctor(this.doctor).subscribe(function (data) {
            console.log(data);
            if (data != undefined) {
                _this.result = data.json();
                if (_this.result.result) {
                    _this.matSnackBar.open("SignUp Completed", "Done", {
                        duration: 3000
                    });
                    _this.router.navigateByUrl("/dr/home");
                }
                else if (_this.result.error) {
                    _this.matSnackBar.open(_this.result.message, "Error", {
                        duration: 3000
                    });
                }
            }
        });
    };
    DoctorSignup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "doc-signup",
            template: __webpack_require__("../../../../../src/app/dr/html/doctor_signup.html"),
            styles: [__webpack_require__("../../../../../src/app/dr/css/doctor_signup.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__doctor_service__["a" /* DoctorService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["y" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]])
    ], DoctorSignup);
    return DoctorSignup;
}());



/***/ }),

/***/ "../../../../../src/app/dr/doctor_write_prescription.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorWritePrescription; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doctor_service__ = __webpack_require__("../../../../../src/app/dr/doctor_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_appointment__ = __webpack_require__("../../../../../src/app/model/appointment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_prescription__ = __webpack_require__("../../../../../src/app/model/prescription.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
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






var DoctorWritePrescription = /** @class */ (function () {
    function DoctorWritePrescription(data, doctorService, formBuilder, matSnackBar) {
        this.data = data;
        this.doctorService = doctorService;
        this.formBuilder = formBuilder;
        this.matSnackBar = matSnackBar;
        this.appointment = new __WEBPACK_IMPORTED_MODULE_3__model_appointment__["a" /* Appointment */]();
        this.symptoms = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormControl */]("", []);
        this.prescription = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormControl */]("", []);
    }
    DoctorWritePrescription.prototype.ngOnInit = function () {
        this.appointmentId = this.data.appointmentId;
        this.getAppointment(this.appointmentId);
        this.prescriptionForm = this.formBuilder.group({
            "symptoms": this.symptoms,
            "prescription": this.prescription
        });
    };
    DoctorWritePrescription.prototype.setValue = function () {
        this.symptoms.setValue(this.appointment.prescription.symptoms);
        this.prescription.setValue(this.appointment.prescription.prescription);
    };
    DoctorWritePrescription.prototype.getAppointment = function (appointmentId) {
        var _this = this;
        this.doctorService.getAppointment(appointmentId).subscribe(function (data) {
            if (data != undefined) {
                _this.appointment = data.json();
                _this.setValue();
            }
        });
    };
    DoctorWritePrescription.prototype.save = function () {
        var _this = this;
        var prescription = new __WEBPACK_IMPORTED_MODULE_4__model_prescription__["a" /* Prescription */]();
        prescription.symptoms = this.prescriptionForm.value.symptoms;
        prescription.prescription = this.prescriptionForm.value.prescription;
        this.appointment.prescription = prescription;
        console.log(this.appointment);
        this.doctorService.savePrescription(this.appointment).subscribe(function (data) {
            if (data != undefined) {
                var formResult = data.json();
                if (formResult.result) {
                    _this.matSnackBar.open(formResult.message, "Saved", {
                        duration: 3000
                    });
                }
                else if (formResult.error) {
                    _this.matSnackBar.open(formResult.message, "Error", {
                        duration: 3000
                    });
                }
            }
        });
    };
    DoctorWritePrescription = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "doc-write-prescription",
            template: __webpack_require__("../../../../../src/app/dr/html/doctor_write_prescription.html")
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_2__doctor_service__["a" /* DoctorService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSnackBar */]])
    ], DoctorWritePrescription);
    return DoctorWritePrescription;
}());



/***/ }),

/***/ "../../../../../src/app/dr/html/add_hours.html":
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar *ngIf=\"progress\" mode=\"indeterminate\" color=\"accent\"></mat-progress-bar>\n\n<form [formGroup]=\"workingHoursForm\" >\n\n\n<!--  first row start here  -->\t\n\t<div class=\"day-container\">\n\t\n\t\n          <h4>Monday</h4>\t \n\t\n\n     \n     \t <mat-slide-toggle [checked]=\"getADay(mondayCode).checked\" color=\"primary\"  formControlName=\"mondayControl\" id={{mondayCode}} name=\"Monday\"  aria-labelledby=\"Close\"\n\n     \t  (change)=\"checked($event)\">{{getADay(mondayCode).dayStatus}}</mat-slide-toggle>\n     \n\t\n\t<div  *ngIf=\"getADay(mondayCode).checked\">\n\t\n\t\n\t<div  *ngIf=\"mondayStartAt.value!=24 && mondayCloseAt.value!=24\">\n\t\n\t\t\t<div class=\"time-list\"   *ngFor=\" let hour of getADay(mondayCode).hours;let x =index\">\n\t\n\t\n\t\t\t\t\n\t\t\n\t\t\t\t\t<label>{{getTimeLabel(hour.startAt)}}</label>\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t    <label>To</label>\n\t\t\t\t\n\t\t\t\t\t<label>{{getTimeLabel(hour.closeAt)}}</label>\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t<label>{{ hour.maxPatientNo}} Appointments</label>\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t<label><i  (click)=\"hourDelete(mondayCode,x)\" class=\"material-icons\">cancel</i></label>\n\t\t\t\t\n\t\t\t\t\n\t\n\t\t\t</div>\n\t\t\n\t</div>\n\t\t\n\t\t\n    <div class=\"add-hour-form\">\n    \n    \t\n    \t<div *ngIf=\"mondayCloseAt.value!=24\" >\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t<mat-form-field >\n\t\t\t\n\t\t\t\n\t\t\t\t\t\t\t<mat-select  formControlName=\"mondayStartAt\" placeholder=\"OpenAt\" (change)=\"hourSelected(mondayStartAt.value,mondayCode)\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let hour of hourListOption\" value={{hour.value}}>{{hour.label}}</mat-option>\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t\t\t\n\t\t\t\n\t\t\t   </mat-form-field>\n\t\t\n\t\t\n\t\t\n\t\t</div>\n\t\t\n\t\t\n\t\t<div  *ngIf=\"mondayStartAt.value!=24\"  >\n\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t<mat-form-field >\n\t\t\t\t\t\t\n\t\t\t\t\t\t<mat-select formControlName=\"mondayCloseAt\" placeholder=\"CloseAt\" (change)=\"hourSelected(mondayCloseAt.value,mondayCode)\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<mat-option *ngFor=\"let hour of hourListOption\" value={{hour.value}} >{{hour.label}}</mat-option>\t\t\t\t\n\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t</mat-form-field>\n\t\t\n\t\t</div>\n\t\t\n\t\t<div>\n\t\t\t\t<mat-form-field>\n\t\t\t\t\n\t\t\t\t<input formControlName=\"mondayAppointmentNo\" matInput type=\"text\" placeholder=\"No Of Appointments\">\n\t\t\t\t\n\t\t\t\t</mat-form-field>\n\t\t\n\t\t</div>\n\t\t\n\t\t<div *ngIf=\"mondayStartAt.value!=24 && mondayCloseAt.value!=24\" >\n\t\t\t\t\n\t\t\t      <button mat-raised-button color=\"primary\" (click)=\"addDayHour(mondayStartAt.value,mondayCloseAt.value,mondayAppointmentNo.value,mondayCode)\">Add Hours</button>\n\t\t\n\t\t</div>\n    \n    \n    </div>\n\t\n\t</div>\n\t\n\t\n\t</div>\n\t<!-- first row ends here  -->\n\t\n\t<!-- second row start here  -->\n\t<div class=\"day-container\"> \n\t\n\t\t\t\n          <h4>Tuesday</h4>\t \n\t\n\n     \n     \t <mat-slide-toggle [checked]=\"getADay(tuesdayCode).checked\" color=\"primary\"  formControlName=\"tuesdayControl\" id={{tuesdayCode}} name=\"Tuesday\" (change)=\"checked($event)\">\n     \t {{getADay(tuesdayCode).dayStatus}}\n     \t </mat-slide-toggle>\n     \n\t\n\t<div  *ngIf=\"getADay(tuesdayCode).checked\">\n\t\n\t\n\t<div   *ngIf=\"tuesdayStartAt.value!=24 && tuesdayCloseAt.value!=24\">\n\t\n\t\t\t<div  class=\"time-list\"  *ngFor=\" let hour of getADay(tuesdayCode).hours;let x =index\">\n\t\n\t\n\t\t\t\t \n\t\t\n\t\t\t\t\t<label>{{getTimeLabel(hour.startAt)}}</label>\n\t\t\t\t\n\t\t\t\t \n\t\t\t\t\n\t\t\t\t \n\t\t\t\t\t<label>{{getTimeLabel(hour.closeAt)}}</label>\n\t\t\t\t\n\t\t\t\t \n\t\t\t\t \t<label>{{ hour.maxPatientNo}} Appointments</label>\n\t\t\t\t\n\t\t\t\t \n\t\t\t\t\t<label><i class=\"material-icons\" (click)=\"hourDelete(tuesdayCode,x)\">cancel</i></label>\n\t\t\t\t\n\t\t\t\t \n\t\n\t\t\t</div>\n\t\t\n\t</div>\n\t\t\n\t\t\n    <div class=\"add-hour-form\">\n    \n    \t\t\t\t<div *ngIf=\"tuesdayCloseAt.value!=24\" class=\"col-lg-4\">\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t<mat-form-field >\n\t\t\t\n\t\t\t\t\t\t\t<mat-select  formControlName=\"tuesdayStartAt\" placeholder=\"OpenAt\" (change)=\"hourSelected(tuesdayStartAt.value,tuesdayCode)\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let hour of hourListOption\" value={{hour.value}}>{{hour.label}}</mat-option>\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</mat-select>\n\t\t\t\n\t\t\t   </mat-form-field>\n\t\t\n\t\t\n\t\t\n\t\t</div>\n\t\t\n\t\t\n\t\t<div  *ngIf=\"tuesdayStartAt.value!=24\"  class=\"col-lg-4\">\n\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t<mat-form-field >\n\t\t\t\t\t\t\n\t\t\t\t\t\t<mat-select formControlName=\"tuesdayCloseAt\" placeholder=\"CloseAt\" (change)=\"hourSelected(tuesdayCloseAt.value,tuesdayCode)\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<mat-option *ngFor=\"let hour of hourListOption\" value={{hour.value}} >{{hour.label}}</mat-option>\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t\t\n\t\t\t\t\t</mat-form-field>\n\t\t\n\t\t</div>\n\t\t\n\t\t\n\t\t<div>\n\t\t\t\t<mat-form-field>\n\t\t\t\t\n\t\t\t\t<input formControlName=\"tuesdayAppointmentNo\" matInput type=\"text\" placeholder=\"No Of Appointments\">\n\t\t\t\t\n\t\t\t\t</mat-form-field>\n\t\t\n\t\t</div>\n\t\t\n\t\t\n\t\t<div *ngIf=\"tuesdayStartAt.value!=24 && tuesdayCloseAt.value!=24\" class=\"col-lg-4\">\n\t\t\t\n\t\t\t      <button mat-raised-button color=\"primary\" (click)=\"addDayHour(tuesdayStartAt.value,tuesdayCloseAt.value,tuesdayAppointmentNo.value,tuesdayCode)\">Add Hours</button>\n\t\t\n\t\t</div>\n    \n    \n    </div>\n\t\n\t</div>\n\t\n\t\n\t</div>\n\t\n\t<!-- second row ends here  -->\n\t\n\t<!-- third row start here  -->\n\t\n\t<div class=\"day-container\">\n\t\n\t\t\t\n          <h4>Wednesday</h4>\t \n\t\n\n     \n     \t <mat-slide-toggle [checked]=\"getADay(wednesdayCode).checked\" color=\"primary\" formControlName=\"wednesdayControl\" id={{wednesdayCode}} name=\"Wednesday\" (change)=\"checked($event)\">\n     \t {{getADay(wednesdayCode).dayStatus}}\n     \t </mat-slide-toggle>\n    \n\t\n\t<div  *ngIf=\"getADay(wednesdayCode).checked\">\n\t\n\t\n\t<div   *ngIf=\"wednesdayStartAt.value!=24 && wednesdayCloseAt.value!=24\">\n\t\n\t\t\t<div  class=\"time-list\"  *ngFor=\" let hour of getADay(wednesdayCode).hours;let x =index\">\n\t\n\t\n\t\t\t\t \n\t\t\n\t\t\t\t\t<label>{{getTimeLabel(hour.startAt)}}</label>\n\t\t\t\t\n\t\t\t\t \n\t\t\t\t\n\t\t\t\t \n\t\t\t\t\t<label>{{getTimeLabel(hour.closeAt)}}</label>\n\t\t\t\t\n\t\t\t\t \n\t\t\t\t\t<label>{{ hour.maxPatientNo}} Appointments</label>\n\t\t\t\t \n\t\t\t\t\t<label><i class=\"material-icons\" (click)=\"hourDelete(wednesdayCode,x)\">cancel</i></label>\n\t\t\t\t\n\t\t\t\t \n\t\n\t\t\t</div>\n\t\t\n\t</div>\n\t\t\n\t\t\n    <div class=\"add-hour-form\">\n    \n    \t\t\t\t<div *ngIf=\"wednesdayCloseAt.value!=24\" class=\"col-lg-4\">\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t<mat-form-field >\n\t\t\t\n\t\t\t\t\t\t\t<mat-select  formControlName=\"wednesdayStartAt\" placeholder=\"OpenAt\" (change)=\"hourSelected(wednesdayStartAt.value,wednesdayCode)\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let hour of hourListOption\" value={{hour.value}}>{{hour.label}}</mat-option>\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</mat-select>\n\t\t\t\n\t\t\t   </mat-form-field>\n\t\t\n\t\t\n\t\t\n\t\t</div>\n\t\t\n\t\t\n\t\t<div  *ngIf=\"wednesdayStartAt.value!=24\"  class=\"col-lg-4\">\n\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t<mat-form-field >\n\t\t\t\t\t\t\n\t\t\t\t\t\t<mat-select formControlName=\"wednesdayCloseAt\" placeholder=\"CloseAt\" (change)=\"hourSelected(wednesdayCloseAt.value,wednesdayCode)\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<mat-option *ngFor=\"let hour of hourListOption\" value={{hour.value}} >{{hour.label}}</mat-option>\t\t\t\t\n\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t\t\n\t\t\t\t\t</mat-form-field>\n\t\t\n\t\t</div>\n\t\t\n\t\t<div>\n\t\t\t\t<mat-form-field>\n\t\t\t\t\n\t\t\t\t<input formControlName=\"wednesdayAppointmentNo\" matInput type=\"text\" placeholder=\"No Of Appointments\">\n\t\t\t\t\n\t\t\t\t</mat-form-field>\n\t\t\n\t\t</div>\n\t\t\n\t\t\n\t\t<div *ngIf=\"wednesdayStartAt.value!=24 && wednesdayCloseAt.value!=24\" class=\"col-lg-4\">\n\t\t\t\n\t\t\t      <button mat-raised-button color=\"primary\" (click)=\"addDayHour(wednesdayStartAt.value,wednesdayCloseAt.value,wednesdayAppointmentNo.value,wednesdayCode)\">Add Hours</button>\n\t\t\n\t\t</div>\n    \n    \n    </div>\n\t\n\t</div>\n\t\n\t\n\t\t\t\t\t\n\t\n\t</div>\n\t\n<!-- \tthird row ends here  -->\n\n<!-- fourth row start here  -->\n<div class=\"day-container\">\n\n\t\t\n          <h4>Thursday</h4>\t \n\t\n\n     \n     \t <mat-slide-toggle [checked]=\"getADay(thursdayCode).checked\" color=\"primary\" formControlName=\"thursdayControl\" id={{thursdayCode}} name=\"Thursday\" (change)=\"checked($event)\">\n     \t {{getADay(thursdayCode).dayStatus}}\n     \t </mat-slide-toggle>\n     \n\t<div  *ngIf=\"getADay(thursdayCode).checked\">\n\t\n\t\n\t<div   *ngIf=\"thursdayStartAt.value!=24 && thursdayCloseAt.value!=24\">\n\t\n\t\t\t<div class=\"time-list\"  *ngFor=\" let hour of getADay(thursdayCode).hours;let x =index\">\n\t\n\t\n\t\t\t\t\n\t\t\n\t\t\t\t\t<label>{{getTimeLabel(hour.startAt)}}</label>\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t<label>{{getTimeLabel(hour.closeAt)}}</label>\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t<label>{{ hour.maxPatientNo}} Appointments</label>\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t<label><i class=\"material-icons\" (click)=\"hourDelete(thursdayCode,x)\">cancel</i></label>\n\t\t\t\t\n\t\t\t\t\n\t\n\t\t\t</div>\n\t\t\n\t</div>\n\t\t\n\t\t\n    <div class=\"add-hour-form\">\n    \n    \t\t\t\t<div *ngIf=\"thursdayCloseAt.value!=24\" class=\"col-lg-4\">\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t<mat-form-field >\n\t\t\t\n\t\t\t\t\t\t\t<mat-select  formControlName=\"thursdayStartAt\" placeholder=\"OpenAt\" (change)=\"hourSelected(thursdayStartAt.value,thursdayCode)\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let hour of hourListOption\" value={{hour.value}}>{{hour.label}}</mat-option>\t\t\n\t\t\t\t\t\t\t</mat-select>\n\t\t\t\n\t\t\t   </mat-form-field>\n\t\t\n\t\t\n\t\t\n\t\t</div>\n\t\t\n\t\t\n\t\t<div  *ngIf=\"thursdayStartAt.value!=24\"  class=\"col-lg-4\">\n\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t<mat-form-field >\n\t\t\t\t\t\t\n\t\t\t\t\t\t<mat-select formControlName=\"thursdayCloseAt\" placeholder=\"CloseAt\" (change)=\"hourSelected(thursdayCloseAt.value,thursdayCode)\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<mat-option *ngFor=\"let hour of hourListOption\" value={{hour.value}} >{{hour.label}}</mat-option>\t\t\t\t\n\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t\t\n\t\t\t\t\t</mat-form-field>\n\t\t\n\t\t</div>\n\t\t\n\t\t\n\t\t<div>\n\t\t\t\t<mat-form-field>\n\t\t\t\t\n\t\t\t\t<input formControlName=\"thursdayAppointmentNo\" matInput type=\"text\" placeholder=\"No Of Appointments\">\n\t\t\t\t\n\t\t\t\t</mat-form-field>\n\t\t\n\t\t</div>\n\t\t\n\t\t<div *ngIf=\"thursdayStartAt.value!=24 && thursdayCloseAt.value!=24\" class=\"col-lg-4\">\n\t\t\t\n\t\t\t      <button mat-raised-button color=\"primary\" (click)=\"addDayHour(thursdayStartAt.value,thursdayCloseAt.value,thursdayAppointmentNo.value,thursdayCode)\">Add Hours</button>\n\t\t\n\t\t</div>\n    \n    \n    </div>\n\t\n\t</div>\n\t\n\t\n\n</div>\n<!-- fourth row ends here  -->\n\n\n<!-- fifth row start here  -->\n<div class=\"day-container\">\n\n\t\t\t\n          <h4>Friday</h4>\t \n\t\n\n     \n     \t <mat-slide-toggle [checked]=\"getADay(fridayCode).checked\" color=\"primary\" formControlName=\"fridayControl\" id={{fridayCode}} name=\"Friday\" (change)=\"checked($event)\">\n     \t {{getADay(fridayCode).dayStatus}}\n     \t </mat-slide-toggle>\n     \n\t\n\t<div  *ngIf=\"getADay(fridayCode).checked\">\n\t\n\t\n\t<div  *ngIf=\"fridayStartAt.value!=24 && fridayCloseAt.value!=24\">\n\t\n\t\t\t<div   class=\"time-list\"  *ngFor=\" let hour of getADay(fridayCode).hours;let x =index\">\n\t\n\t\n\t\t\t\t \n\t\t\n\t\t\t\t\t<label>{{getTimeLabel(hour.startAt)}}</label>\n\t\t\t\t\n\t\t\t\t \n\t\t\t\t\n\t\t\t\t \n\t\t\t\t\t<label>{{getTimeLabel(hour.closeAt)}}</label>\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t<label>{{ hour.maxPatientNo}} Appointments</label>\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t<label><i class=\"material-icons\" (click)=\"hourDelete(fridayCode,x)\">cancel</i></label>\n\t\t\t\t\n\t\t\t\t \n\t\t\t</div>\n\t\t\n\t</div>\n\t\t\n\t\t\n    <div class=\"add-hour-form\">\n    \n    \t\t\t\t<div *ngIf=\"fridayCloseAt.value!=24\" class=\"col-lg-4\">\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t<mat-form-field >\n\t\t\t\n\t\t\t\t\t\t\t<mat-select  formControlName=\"fridayStartAt\" placeholder=\"OpenAt\" (change)=\"hourSelected(fridayStartAt.value,fridayCode)\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let hour of hourListOption\" value={{hour.value}}>{{hour.label}}</mat-option>\t\t\n\t\t\t\t\t\t\t</mat-select>\n\t\t\t\n\t\t\t   </mat-form-field>\n\t\t\n\t\t\n\t\t\n\t\t</div>\n\t\t\n\t\t\n\t\t<div  *ngIf=\"fridayStartAt.value!=24\"  class=\"col-lg-4\">\n\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t<mat-form-field >\n\t\t\t\t\t\t\n\t\t\t\t\t\t<mat-select formControlName=\"fridayCloseAt\" placeholder=\"CloseAt\" (change)=\"hourSelected(fridayCloseAt.value,fridayCode)\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<mat-option *ngFor=\"let hour of hourListOption\" value={{hour.value}} >{{hour.label}}</mat-option>\t\t\t\t\n\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t\t\n\t\t\t\t\t</mat-form-field>\n\t\t\n\t\t</div>\n\t\t\n\t\t\n\t\t\n\t\t<div>\n\t\t\t\t<mat-form-field>\n\t\t\t\t\n\t\t\t\t<input formControlName=\"fridayAppointmentNo\" matInput type=\"text\" placeholder=\"No Of Appointments\">\n\t\t\t\t\n\t\t\t\t</mat-form-field>\n\t\t\n\t\t</div>\n\t\t\n\t\t<div *ngIf=\"fridayStartAt.value!=24 && fridayCloseAt.value!=24\" class=\"col-lg-4\">\n\t\t\t\n\t\t\t      <button mat-raised-button color=\"primary\" (click)=\"addDayHour(fridayStartAt.value,fridayCloseAt.value,fridayAppointmentNo.value,fridayCode)\">Add Hours</button>\n\t\t\n\t\t</div>\n    \n    \n    </div>\n\t\n\t</div>\n\n</div>\n<!-- fifth row ends here -->\n\n<!-- sixth row start here  -->\n<div class=\"day-container\">\n\n\n\t\t\t\n\t\t\t\n          <h4>Saturday</h4>\t \n\t\n\n    \n     \t <mat-slide-toggle [checked]=\"getADay(saturdayCode).checked\" color=\"primary\" formControlName=\"saturdayControl\" id={{saturdayCode}} name=\"Saturday\" (change)=\"checked($event)\">\n     \t {{getADay(saturdayCode).dayStatus}}\n     \t </mat-slide-toggle>\n     \n\t\n\t<div  *ngIf=\"getADay(saturdayCode).checked\">\n\t\n\t\n\t<div   *ngIf=\"saturdayStartAt.value!=24 && saturdayCloseAt.value!=24\">\n\t\n\t\t\t<div  class=\"time-list\" *ngFor=\" let hour of getADay(saturdayCode).hours;let x =index\">\n\t\n\t\n\t\t\t\t \n\t\t\n\t\t\t\t\t<label>{{getTimeLabel(hour.startAt)}}</label>\n\t\t\t\t\n\t\t\t\t \n\t\t\t\t\n\t\t\t\t \t<label>{{getTimeLabel(hour.closeAt)}}</label>\n\t\t\t\t\n\t\t\t\t \n\t\t\t\t \t<label>{{ hour.maxPatientNo}} Appointments</label>\n\t\t\t\t\n\t\t\t\t \t<label><i class=\"material-icons\" (click)=\"hourDelete(saturdayCode,x)\">cancel</i></label>\n\t\t\t\t\n\t\t\t\t \n\t\n\t\t\t</div>\n\t\t\n\t</div>\n\t\t\n\t\t\n    <div class=\"add-hour-form\">\n    \n    \t\t\t\t<div *ngIf=\"saturdayCloseAt.value!=24\" class=\"col-lg-4\">\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t<mat-form-field >\n\t\t\t\n\t\t\t\t\t\t\t<mat-select  formControlName=\"saturdayStartAt\" placeholder=\"OpenAt\" (change)=\"hourSelected(saturdayStartAt.value,saturdayCode)\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let hour of hourListOption\" value={{hour.value}}>{{hour.label}}</mat-option>\t\t\n\t\t\t\t\t\t\t</mat-select>\n\t\t\t\n\t\t\t   </mat-form-field>\n\t\t\n\t\t\n\t\t\n\t\t</div>\n\t\t\n\t\t\n\t\t<div  *ngIf=\"saturdayStartAt.value!=24\"  class=\"col-lg-4\">\n\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t<mat-form-field >\n\t\t\t\t\t\t\n\t\t\t\t\t\t<mat-select formControlName=\"saturdayCloseAt\" placeholder=\"CloseAt\" (change)=\"hourSelected(saturdayCloseAt.value,saturdayCode)\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<mat-option *ngFor=\"let hour of hourListOption\" value={{hour.value}} >{{hour.label}}</mat-option>\t\t\t\t\n\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t\t\n\t\t\t\t\t</mat-form-field>\n\t\t\n\t\t</div>\n\t\t\n\t\t<div>\n\t\t\t\t<mat-form-field>\n\t\t\t\t\n\t\t\t\t<input formControlName=\"saturdayAppointmentNo\" matInput type=\"text\" placeholder=\"No Of Appointments\">\n\t\t\t\t\n\t\t\t\t</mat-form-field>\n\t\t\n\t\t</div>\n\t\t\n\t\t<div *ngIf=\"saturdayStartAt.value!=24 && saturdayCloseAt.value!=24\" class=\"col-lg-4\">\n\t\t\t\n\t\t\t      <button mat-raised-button color=\"primary\" (click)=\"addDayHour(saturdayStartAt.value,saturdayCloseAt.value,saturdayAppointmentNo.value,saturdayCode)\">Add Hours</button>\n\t\t\n\t\t</div>\n    \n    \n    </div>\n\t\n\t</div>\n\t\t\t\n\t\t\n\n\n\n</div>\n<!-- sixth row ends here  -->\n\n<!-- seventh row start here  -->\n<div class=\"day-container\">\n\n\n\t\t\t\t\n\t\t\t\n          <h4>Sunday</h4>\t \n\t\n\t\n     \t <mat-slide-toggle [checked]=\"getADay(sundayCode).checked\" color=\"primary\" formControlName=\"sundayControl\" id={{sundayCode}} name=\"Sunday\" (change)=\"checked($event)\">\n     \t {{getADay(sundayCode).dayStatus}}\n     \t </mat-slide-toggle>\n     \n\t\n\t<div  *ngIf=\"getADay(sundayCode).checked\">\n\t\n\t\n\t<div   *ngIf=\"sundayStartAt.value!=24 && sundayCloseAt.value!=24\">\n\t\n\t\t\t<div class=\"time-list\"  *ngFor=\" let hour of getADay(sundayCode).hours;let x = index\">\n\t\n\t\n\t\t\t\t \n\t\t\n\t\t\t\t<label>{{getTimeLabel(hour.startAt)}}</label>\n\t\t\t\t \n\t\t\t\t\n\t\t\t\t \n\t\t\t\t<label>{{getTimeLabel(hour.closeAt)}}</label>\n\t\t\t\t\n\t\t\t\t \n\t\t\t\t <label>{{ hour.maxPatientNo}} Appointments</label>\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t<label><i class=\"material-icons\" (click)=\"hourDelete(sundayCode,x)\">cancel</i></label>\n\t\t\t\t\n\t\t\t\t\n\t\n\t\t\t</div>\n\t\t\n\t</div>\n\t\t\n\t\t\n    <div class=\"add-hour-form\">\n    \n    \t\t\t\t<div *ngIf=\"sundayCloseAt.value!=24\" class=\"col-lg-4\">\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t<mat-form-field >\n\t\t\t\n\t\t\t\t\t\t\t<mat-select  formControlName=\"sundayStartAt\" placeholder=\"OpenAt\" (change)=\"hourSelected(sundayStartAt.value,sundayCode)\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let hour of hourListOption\" value={{hour.value}}>{{hour.label}}</mat-option>\t\t\n\t\t\t\t\t\t\t</mat-select>\n\t\t\t\n\t\t\t   </mat-form-field>\n\t\t\n\t\t\n\t\t\n\t\t</div>\n\t\t\n\t\t\n\t\t<div  *ngIf=\"sundayStartAt.value!=24\"  class=\"col-lg-4\">\n\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t<mat-form-field >\n\t\t\t\t\t\t\n\t\t\t\t\t\t<mat-select formControlName=\"sundayCloseAt\" placeholder=\"CloseAt\" (change)=\"hourSelected(sundayCloseAt.value,sundayCode)\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<mat-option *ngFor=\"let hour of hourListOption\" value={{hour.value}} >{{hour.label}}</mat-option>\t\t\t\t\n\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t\t\n\t\t\t\t\t</mat-form-field>\n\t\t\n\t\t</div>\n\t\t\n\t\t<div>\n\t\t\t\t<mat-form-field>\n\t\t\t\t\n\t\t\t\t<input formControlName=\"sundayAppointmentNo\" matInput type=\"text\" placeholder=\"No Of Appointments\">\n\t\t\t\t\n\t\t\t\t</mat-form-field>\n\t\t\n\t\t</div>\n\t\t\n\t\t<div *ngIf=\"sundayStartAt.value!=24 && sundayCloseAt.value!=24\" class=\"col-lg-4\">\n\t\t\t\n\t\t\t      <button mat-raised-button color=\"primary\" (click)=\"addDayHour(sundayStartAt.value,sundayCloseAt.value,sundayAppointmentNo.value,sundayCode)\">Add Hours</button>\n\t\t\n\t\t</div>\n    \n    \n    </div>\n\t\n\t</div>\n\t\t\t\n\t\t\n\t\t\t\n\t\t\t\n\t\t\t\n\n\n</div>\n\n<!-- seventh row ends here  -->\n\n\n\n\n<br>\n\n<button mat-raised-button color=\"accent\" (click)=\"submit()\" >Save</button>\n\n</form>"

/***/ }),

/***/ "../../../../../src/app/dr/html/doctor_appointment_setup.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<h3 class=\"text-center\">Appointment Fee </h3>\n\n<form (ngSubmit)=\"submit()\" [formGroup]=\"appointmentForm\">\n\n\t\n\n\t<div class=\"form-group\">\n\t\n\t\t<mat-form-field>\n\t\t\t<input matInput   type=\"text\" formControlName=\"feeAmount\" placeholder=\"Enter Fee Amount\" >\n\t\t\t<p matSuffix>Rs</p>\n\t\t</mat-form-field>\n\t\n\t</div>\n\t\n<!-- \t<div class=\"form-group\"> -->\n<!-- \t\t<mat-form-field> -->\n<!-- \t\t<input matInput  type=\"text\" formControlName=\"maxAppointments\" placeholder=\"No Of Max Appointment In A Day\"> -->\n<!-- \t\t</mat-form-field> -->\n\t\n<!-- \t</div> -->\n\t\n\t<button mat-raised-button color=\"primary\" type=\"submit\" >Submit</button>\n\t\n\n\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/dr/html/doctor_appointment_show.html":
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar *ngIf=\"progress\" mode=\"indeterminate\" color=\"accent\"></mat-progress-bar>\n\n<h3 class=\"text-center\">Choose a Time interval</h3>\n<form [formGroup]=\"dateForm\" (ngSubmit)=\"submit()\">\n\n\t<div class=\"form-group\">\n\t\t<mat-form-field>\n\t       <input matInput formControlName=\"from\"  [matDatepicker]=\"pickerfrom\" placeholder=\"From\">\n\t\t\t\t\t  <mat-datepicker-toggle matSuffix [for]=\"pickerfrom\"></mat-datepicker-toggle>\n\t\t\t\t\t  <mat-datepicker touchUi=\"true\" #pickerfrom></mat-datepicker>\n\t\t\t\t\t  \n\t\t\t\t\t  \n\t   </mat-form-field>\n\t</div>\n\t\n\t<div class=\"form-group\">\n\t\t<mat-form-field>\n\t       <input matInput formControlName=\"to\" [matDatepicker]=\"pickerto\" placeholder=\"To\">\n\t\t\t\t\t  <mat-datepicker-toggle matSuffix [for]=\"pickerto\"></mat-datepicker-toggle>\n\t\t\t\t\t  <mat-datepicker touchUi=\"true\" #pickerto></mat-datepicker>\n\t\t\t\t\t  \n\t\t\t\t\t  \n\t   </mat-form-field>\n\t</div>\n\t\n\t\n\t<div class=\"form-group\">\n\t\n\t\t<button mat-raised-button color=\"primary\" type=\"submit\" >Show</button>\n\t</div>\n\n\n</form>\n\n\n\n<div id=\"grid-container\">\n\n<div  *ngFor=\"let appointment of appointments\">\n\n\n<mat-card>\n\n\t<mat-card-header>\n\t\n\t\t<mat-card-title> <h5>Date:{{appointment.date*1000|date:'mediumDate'}}</h5></mat-card-title>\n\t\t\n\t</mat-card-header>\n\n\t<mat-card-content>\n\t\n\t\t\t <h6>PatientId :{{appointment.patientId}}</h6>\n\t         <h6>Patient Name:{{appointment.patientName}}</h6>\n\t         <h6>Patient PhoneNo:{{appointment.patientPhoneNo}}</h6>\n\t         <h5>Time- {{commonService.getTimeLabel(appointment.hours.startAt)}} To \n      \t\t   {{commonService.getTimeLabel(appointment.hours.closeAt)}}\n      \t\t   \n      \t\t</h5>\n\t\n\t</mat-card-content>\n\t\n\t\n\n</mat-card>\n\n\n\t\n\t\n\t\n</div>\n\n</div>\n\n<mat-paginator [length]=\"totalElements\" [pageSize]=\"pageSize\" (page)=\"nextPage($event)\">\n\n\n\n</mat-paginator>\n"

/***/ }),

/***/ "../../../../../src/app/dr/html/doctor_holiday.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-center\">Add Holiday </h3>\n<form [formGroup]=\"holidayForm\" (ngSubmit)=\"submit()\">\n\n\t<h4 *ngIf=\"result.result\" class=\"text-capitalize text-success\">{{result.message}}</h4>\n\t<h4 *ngIf=\"result.error\" class=\"text-capitalize text-danger\">{{result.message}}</h4>\n\n\t<div class=\"form-group\">\n\t\n\t\t<mat-form-field>\n\t\t  <input matInput [min]=\"currentDate\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\" formControlName=\"holidayDate\">\n\t\t  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n\t\t  <mat-datepicker #picker></mat-datepicker>\n\t\t</mat-form-field>\n\t\t<mat-error *ngIf=\"holidayDate.hasError('matDatepickerMin')\">You Can't Add Holiday In Past</mat-error>\n\t</div>\n\t\n\t\n\t\n\t<div class=\"form-group\">\n\t\t<button mat-raised-button color=\"accent\" (click)=\"addHoliday()\" type=\"button\">Add Date</button>\n\t</div>\n\t\n\t\n\t<table class=\"table\">\n\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<th>Date</th>\n\t\t\t\t<th>Delete</th>\n\t\t\t</tr>\n\t\t\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor=\"let date of holidayDates;let i=index\">\n\t\t\t\t<td>{{date.getMonth()+1}}/{{date.getDate()}}/{{date.getFullYear()}}</td>\n\t\t\t\t<td><button mat-raised-button color=\"warn\" type=\"button\" (click)=\"deleteDate(i)\">\n\t\t\t\t<i class=\"material-icons\">delete</i></button></td>\n\t\t\t</tr>\n\t\t\n\t\t\n\t\t</tbody>\n\t</table>\n\t\n\t<button mat-raised-button color=\"primary\" type=\"submit\">Save</button>\n\n</form>\n\n"

/***/ }),

/***/ "../../../../../src/app/dr/html/doctor_holiday_show.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-center\">Choose A Time Interval</h3>\n<form [formGroup]=\"dateForm\" (ngSubmit)=\"submit()\">\n\n\t<div class=\"form-group\">\n\t\t<mat-form-field>\n\t       <input matInput formControlName=\"from\"  [matDatepicker]=\"pickerfrom\" placeholder=\"From\">\n\t\t\t\t\t  <mat-datepicker-toggle matSuffix [for]=\"pickerfrom\"></mat-datepicker-toggle>\n\t\t\t\t\t  <mat-datepicker #pickerfrom></mat-datepicker>\n\t\t\t\t\t  \n\t\t\t\t\t  \n\t   </mat-form-field>\n\t</div>\n\t\n\t<div class=\"form-group\">\n\t\t<mat-form-field>\n\t       <input matInput formControlName=\"to\" [matDatepicker]=\"pickerto\" placeholder=\"To\">\n\t\t\t\t\t  <mat-datepicker-toggle matSuffix [for]=\"pickerto\"></mat-datepicker-toggle>\n\t\t\t\t\t  <mat-datepicker #pickerto></mat-datepicker>\n\t\t\t\t\t  \n\t\t\t\t\t  \n\t   </mat-form-field>\n\t</div>\n\t\n\t\n\t<div class=\"form-group\">\n\t\n\t\t<button mat-raised-button color=\"primary\" type=\"submit\" >Show</button>\n\t</div>\n\n\n</form>\n\n\n\n\n<div class=\"content-center\">\n\n\n\t\n<h4 class=\"text-center\">List Of All Holidays</h4>\n\n<mat-list *ngFor=\"let date of holidayList\">\n\n\n\t<mat-list-item>{{date*1000|date:\"longDate\"}}<button mat-button (click)=\"deleteHoliday(date)\"> <i class=\"material-icons\">delete</i></button></mat-list-item>\n\n</mat-list>\n\t\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dr/html/doctor_home.html":
/***/ (function(module, exports) {

module.exports = "\n<mat-toolbar color=\"primary\">\n\n<button mat-icon-button (click)=\"sidenav.open()\">\n  <mat-icon>more_vert</mat-icon>\n</button>\n\n<button mat-button routerLink=\"/dr/home\"><span>Edr</span>\n</button>\n\n\n<button mat-button (click)=\"signOut()\">SignOut</button>\n\n\n</mat-toolbar>\n\n\n<mat-sidenav-container >\n\n  <mat-sidenav #sidenav>\n  \n  \t<mat-nav-list>\n  \t\n  \t\t<mat-list-item>\n  \t\t<a class=\"nav-link\" routerLink=\"dr/panel\">Information Panel</a>\n  \t\t\n  \t\t</mat-list-item>\n  \t\t\n  \t\t<mat-divider></mat-divider>\n  \t\n  \t\t<h3 mat-subheader>Appointment</h3>\n  \t\t\n  \t\t<mat-list-item>\n  \t\t <a class=\"list-group-item\"  routerLink=\"dr/appointment\">Appointment Fee</a>\n  \t\t</mat-list-item>\n  \t\t\n  \t\t\n  \t\t<mat-list-item>\n  \t\t <a class=\"list-group-item\" routerLink=\"dr/add/hours\">Add Hours</a>\n  \t\t\n  \t\t</mat-list-item>\n  \t\t\n  \t\t<mat-list-item>\n  \t\t<a class=\"list-group-item\"  routerLink=\"dr/make/appointment\" >Make An Appointment</a>\n  \t\t</mat-list-item>\n  \t\t\n  \t\t\n  \t\t<mat-list-item>\n  \t\t <a class=\"list-group-item\"  routerLink=\"dr/show/appointment\">Show All Appointment</a>\n  \t\t</mat-list-item>\n  \t\t\n  \t\t<mat-divider></mat-divider>\n  \t\t\n  \t\t<h3 mat-subheader>Holiday</h3>\n  \t\t\n  \t\t<mat-list-item>\n  \t\t\n  \t\t<a class=\"list-group-item\" routerLink=\"dr/holiday\">Add Holiday</a>\n  \t\t</mat-list-item>\n  \t\t\n  \t\t<mat-list-item>\n  \t\t\n  \t\t<a class=\"list-group-item\" routerLink=\"dr/show/holiday\" >Show All Holiday</a>\n  \t\t</mat-list-item>\n  \t\t\n  \t\t<mat-divider></mat-divider>\n  \t\t\n  \t\t<h3 mat-subheader>Profile</h3>\n  \t\t\n  \t\t<mat-list-item>\n  \t\t<a routerLink=\"profile/edit\">Edit Profile </a>\n  \t\t</mat-list-item>\n  \t\n  \t</mat-nav-list>\n  \n  \n<!--      <div class=\"col-md-4\"> -->\n\n<!-- \t<div class=\"list-group no-style\"> -->\n<!-- \t\t    <div> -->\n<!-- \t\t  \t<a class=\"list-group-item\" data-toggle=\"collapse\" href=\"#appointmentMenu\"> -->\n<!-- \t\t  \tAppointment <i class=\"caret\"></i></a> -->\n<!-- \t\t    <div class=\"collapse\" id=\"appointmentMenu\"> -->\n<!-- \t\t    \t <a class=\"list-group-item\"  routerLink=\"dr/appointment\">Appointment Setup</a> -->\n<!-- \t\t    \t  <a class=\"list-group-item\" routerLink=\"dr/add/hours\">Add Hours</a> -->\n<!-- \t\t    \t <a class=\"list-group-item\"  routerLink=\"dr/make/appointment\" >Make An Appointment</a> -->\n<!-- \t\t    \t <a class=\"list-group-item\"  routerLink=\"dr/show/appointment\">Show All Appointment</a> -->\n<!-- \t\t    </div> -->\n\t\t    \n<!-- \t\t  </div> -->\n\t\t  \n<!-- \t\t  <div> -->\n<!-- \t\t    <a class=\"list-group-item\" data-toggle=\"collapse\" href=\"#holidayMenu\"> -->\n<!-- \t\t    Holiday <i class=\"caret\"></i></a> -->\n\t\t    \n<!-- \t\t    <div class=\"collapse\" id=\"holidayMenu\"> -->\n<!-- \t\t    \t<a class=\"list-group-item\" routerLink=\"dr/holiday\">Add Holiday</a> -->\n<!-- \t\t    \t<a class=\"list-group-item\" routerLink=\"dr/show/holiday\" >Show All Holiday</a> -->\n<!-- \t\t    </div> -->\n<!-- \t\t  </div> -->\n\t\t  \n<!-- \t\t  <div class=\"list-group-item\"> -->\n<!-- \t\t    <a class=\"nav-link\" routerLink=\"dr/panel\">Information Panel</a> -->\n\t\t   \n<!-- \t\t  </div> -->\n\t\t  \n\t\t  \n\t\t  \n<!-- \t</div> -->\n\n<!-- </div> -->\n  </mat-sidenav>\n\n\n  <!-- primary content -->\n  \n  \n  \n\t\t\n\t<router-outlet class=\"my-content\"></router-outlet>\n\n</mat-sidenav-container>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/dr/html/doctor_make_appointment.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-center\">Make An Appointment</h3>\n\n\n\n\n<mat-tab-group (selectedTabChange)=\"tabChanged($event)\">\n  <mat-tab  label=\"Using Patient Id\">\n   \t\t\n   \t\t<form [formGroup]=\"appointmentForm\"  (ngSubmit)=\"submit()\">\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput (change)=\"patientIdExist()\" type=\"text\" formControlName=\"patientId\"  placeholder=\"Enter Patient Id\">\n\t\t<mat-error *ngIf=\"patientId.hasError('required')\" class=\"text-capitalize\">Patient Id is <strong>Required</strong></mat-error>\n\t\t\n\t\t<mat-error *ngIf=\"patientId.hasError('noPatient')\">No Patient Exist With This Id</mat-error>\n\t\t\n\t   <mat-error *ngIf=\"patientId.hasError('email')\"  class=\"text-capitalize\">Enter A Valid Email </mat-error>\n\t   \n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t<mat-form-field>\n\t       <input matInput (dateChange)=\"dateSelected($event)\" formControlName=\"date\" [min]=\"today\"  [matDatepickerFilter]=\"workingDayFilter\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n\t\t\t\t\t  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n\t\t\t\t\t  <mat-datepicker touchUi=\"true\" #picker></mat-datepicker>\n\t\t\t\t\t  \n\t\t\t\t\t   <mat-error  class=\"text-capitalize\" *ngIf=\"date.hasError('matDatepickerFilter')\" class=\"text-capitalize\" >\n\t\t\t\t\t Doctor is not available this day</mat-error>\n\t\t\t\t\t <mat-error  class=\"text-capitalize\" *ngIf=\"date.hasError('required')\">Date is <strong>Required</strong></mat-error>\n\t\t\t\t\t \n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\n\t\t\t\t\t \n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<mat-select formControlName=\"timeSlot\" placeholder=\"Choose A TimeSlot\">\n\t\t\t\t\t\t\t<mat-option *ngFor=\"let hour of hours\"  [value]=\"hour\">\n\t       \t\t\t\t\t\t{{commonService.getTimeLabel(hour.startAt)}}\n\t       \t\t\t\t\t\tto\n\t       \t\t\t\t\t\t{{commonService.getTimeLabel(hour.closeAt)}}\n\t\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t\t<mat-error  class=\"text-capitalize\" *ngIf=\"timeSlot.hasError('required')\">Select A TimeSlot</mat-error>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\n\t\t\t\t\t<button mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\n\t\t\t\t</div>\n\t\n\t\n\n\n        </form>\n   \t\t\n  </mat-tab>\n  <mat-tab label=\"Without Patient Id\">\n  \n  \n  <form [formGroup]=\"appointmentWithoutPatientId\" (ngSubmit)=\"submitWithoutId()\">\n  \t\n  \t\t<div class=\"form-group\">\n  \t\t\n  \t\t\t<mat-form-field>\n  \t\t\t\t<input type=\"text\" matInput placeholder=\"Patient Name\" formControlName=\"patientName\">\n  \t\t\t\t\n  \t<mat-error  class=\"text-capitalize\" *ngIf=\"patientName.hasError('required')\">Patient Name is <strong>Required</strong></mat-error>\n  \t\t\t\t\n  \t\t\t</mat-form-field>\n  \t\t\t\n  \t\t\t\n  \t\t</div>\n  \t\t\n  \t\t<div class=\"form-group\">\n  \t\t\t<mat-form-field>\n  \t\t\t\n  \t\t\t\t<input type=\"text\" matInput placeholder=\"Patient Phone No\" formControlName=\"patientPhoneNo\">\n  <mat-error  class=\"text-capitalize\" *ngIf=\"patientPhoneNo.hasError('required')\">Phone no is <strong>Required</strong></mat-error>\n  <mat-error class=\"text-capitalize\" *ngIf=\"patientPhoneNo.hasError('minlength')\">Phone No should be of 10 digit</mat-error>\t\t\t\n  \t\t\t</mat-form-field>\n  \t\t\n  \t\t</div>\n  \t\t\n  \t\t\n  \t\t<div class=\"form-group\">\n\t\t\t\t\n\t\t\t\t\t<mat-form-field>\n\t                  <input (dateChange)=\"dateSelected($event)\" matInput [min]=\"today\" [matDatepickerFilter]=\"workingDayFilter\" formControlName=\"appointmentDate\"   [matDatepicker]=\"pickertwo\" placeholder=\"Choose a date\">\n\t\t\t\t\t  <mat-datepicker-toggle matSuffix [for]=\"pickertwo\"></mat-datepicker-toggle>\n\t\t\t\t\t  <mat-datepicker touchUi=\"true\" #pickertwo></mat-datepicker>\n\t\t\t\t\t \n\t\t\t\t\t  <mat-error  class=\"text-capitalize\" *ngIf=\"date.hasError('matDatepickerFilter')\" class=\"text-capitalize\" >\n\t\t\t\t\t Doctor is not available this day</mat-error>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\n\t\t\t\t\t \n\t     </div>\n\t     \n\t     <div class=\"form-group\">\n\t\t\t\t\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<mat-select  placeholder=\"Choose A TimeSlot\" formControlName=\"appointmentTimeSlot\">\n\t\t\t\t\t\t\t<mat-option *ngFor=\"let hour of hours\"  [value]=\"hour\">\n\t       \t\t\t\t\t\t{{commonService.getTimeLabel(hour.startAt)}}\n\t       \t\t\t\t\t\tto\n\t       \t\t\t\t\t\t{{commonService.getTimeLabel(hour.closeAt)}}\n\t\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</mat-select>\n\t\t\t <mat-error  class=\"text-capitalize\" *ngIf=\"appointmentTimeSlot.hasError('required')\">Select A TimeSlot</mat-error>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\n\t\t </div>\n\t\t \n\t\t <div class=\"form-group\">\n\t\t \t\t\n\t\t \t\t<button mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\n\t\t \n\t\t </div>\n\t\t\t\t\n  \n  </form>\n  \n  </mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ "../../../../../src/app/dr/html/doctor_panel.html":
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar *ngIf=\"progress\" mode=\"indeterminate\" color=\"accent\"></mat-progress-bar>\n\n<h3 *ngIf=\"!showAppointment\">There are no appointment today</h3>\n\n<div  *ngIf=\"showAppointment\">\n\n\n\n<h3 class=\"text-center\">List of Today's Appointments</h3>\n\n\n\n\n<div id=\"grid-container\">\n\n\n<div   *ngFor=\"let appointment of appointments\">\n\n\n\n\t<mat-card>\n\t\n\t\t<div *ngIf=\"appointment.prescription.prescription!=null && appointment.prescription.prescription!=''\" class=\"flex-row\">\n\t   <mat-card-subtitle>Prescribed</mat-card-subtitle>\n\t   <mat-icon  color=\"warn\" class=\"material-icons\">done</mat-icon>\n\t\t</div>\n\t\t\n\t\t<mat-card-header>\n\t\t\n\t\t\t<mat-card-title> <h5>Date:{{appointment.date*1000|date:'mediumDate'}}</h5> </mat-card-title>\n\t\t\t\n\t\t\n\t\t</mat-card-header>\n\t\t\n\t\t\n\t\t<mat-card-content>\n\t\t <h6>PatientId {{appointment.patientId}}</h6>\n\t\t<h6>Patient Name:{{appointment.patientName}}</h6>\n\t    <h6>Patient PhoneNo:{{appointment.patientPhoneNo}}</h6>\n\t\t<h5>Time: {{commonService.getTimeLabel(appointment.hours.startAt)}} To \n\t\t      \t\t   {{commonService.getTimeLabel(appointment.hours.closeAt)}}</h5>\n\t\t</mat-card-content>\n\t\t\n\t\t<mat-card-actions>\n\t\n\t\t<button mat-button color=\"primary\"  (click)=\"writePrescription(appointment.appointmentId)\">\n\t\t<mat-icon>add</mat-icon> Prescription</button>\n\t\n\t\t</mat-card-actions>\n\t</mat-card>\n\n\t\n</div>\n\n\n\n\n\n</div>\n\n\n\n\n\n\n\n<mat-paginator [length]=\"totalElements\" [pageSize]=\"pageSize\" (page)=\"nextPage($event)\">\n\n\n\n</mat-paginator>\n\n\n\n\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/dr/html/doctor_profile_edit.html":
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar *ngIf=\"progress\" mode=\"indeterminate\" color=\"accent\"></mat-progress-bar>\n\n\n<div id=\"container\">\n\n<div id=\"left-content\">\n\n\t<div id=\"profile-img-container\" (click)=\"upload()\">\n\t\n\t<span id=\"img-change-btn\"><strong>Click To Change</strong> </span>\n\t\n\t<img src={{doctor.profileImage.path}} alt=\"profile image\" height=150px width=150px >\n\t\n\t</div>\n\n\t\n\t\n\t\n\t\n\t<div *ngIf=\"appointment\" class=\"flex-row\">\n\t\n\t\n\t\n\t<h4>AppointmentFee:</h4>\n\t\t\t<div>\n\t\t\t     <p>{{doctor.appointmentFee}}</p>\n\t\t\t</div>\n\t<button mat-button class=\"edit\" color=\"accent\" (click)=\"appointmentEdit=true; appointment=false\">Edit</button>\n\t</div>\n\t\n\t<!-- appointment fee form  start -->\n\t\n\t<div *ngIf=\"appointmentEdit\" class=\"flex-column\">\n\t\n\t<mat-form-field>\n\t\n\t\t<input [(ngModel)]=\"doctor.appointmentFee\" placeholder=\"New Appointment Fee \" type=\"text\" matInput>\n\t\t\n\t</mat-form-field>\n\t\n\t\n\t<div class=\"flex-row\">\n\t\n\t\t\t<button mat-button color=\"primary\" (click)=\"save()\">Save</button>\n\t\t\t<button mat-button color=\"warn\" (click)=\"appointmentEdit=false; appointment=true; refresh()\">Cancel</button>\n\t\t\t\n\t</div>\n\t\n\t\n\t</div>\n\t\n\t<!-- appointment fee form ends  -->\n\t\n\t<div *ngIf=\"phoneNo\" class=\"flex-row\">\n\t\n\t<h4>PhoneNo:</h4>\n\t\t\t<div>\n\t\t\t     <p>{{doctor.phoneno}}</p>\n\t\t\t</div>\n\t\t\t\n\t<button mat-button class=\"edit\" color=\"accent\" (click)=\"phoneNoEdit=true; phoneNo=false\">Edit</button>\n\t\n\t</div>\n\t\n\t\n\t<!-- phone no form start  -->\n\t<div *ngIf=\"phoneNoEdit\" class=\"flex-column\">\n\t\n\t\t<mat-form-field>\n\t\t\t\n\t\t\t<input [(ngModel)]=\"doctor.phoneno\" placeholder=\"New Phone No\" type=\"text\" matInput>\n\t\t\n\t\t</mat-form-field>\n\t\t\n\t\t<div class=\"flex-row\">\n\t\t\t<button mat-button color=\"primary\" (click)=\"save()\">Save</button>\n\t\t\t<button mat-button color=\"warn\" (click)=\"phoneNoEdit=false; phoneNo=true; refresh()\">Cancel</button>\n\t\t</div>\n\t\n\t</div>\n\t\n\t<!-- phone no form ends  -->\n\t<div *ngIf=\"address\" class=\"flex-row\">\n\t\n\t\t\n\t<h4>Address:</h4>\n\t<div>\n\t\n\t\t<p>{{doctor.addrLineOne}}</p>\n\t\t<p> {{doctor.city}}</p>\n\t\n\t</div>\n\t<button mat-button class=\"edit\" color=\"accent\" (click)=\"addressEdit=true; address=false\">Edit</button>\n\t\n\t</div>\n\t\n\t<!-- address form start here  -->\n\t\n\t<div *ngIf=\"addressEdit\" class=\"flex-column\">\n\t\n\t\t\n\t\t\t\t\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t<input matInput [(ngModel)]=\"doctor.addrLineOne\" type=\"text\" name=\"address\" placeholder=\"Address\" >\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t    \n\t\t\t\t    </mat-form-field>\n\t\t\t\t    \n\t\t\t\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t\t\t<mat-form-field>\n\t\t\t\t\t<input matInput [(ngModel)]=\"doctor.addrLineTwo\" type=\"text\" name=\"address2\" placeholder=\"Address Line Two\">\n\t\t\t\t\t\n\t\t\t\t    \n\t\t\t\t</mat-form-field>\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t\t<div class=\"form-group\">\n\t\t\t\n\t\t\t\t <mat-form-field>\n\t\t   \t\t\n\t\t   \t\t\t\t\t\n\t\t\t\t   \t<mat-select placeholder=\"State\" [(ngModel)]=\"doctor.state\" (change)=\"stateSelected()\">\n\t\t\t                           \n\t\t\t              <mat-option *ngFor=\"let state of states\" [value]=\"state.stateId\">\n\t\t\t                                                {{ state.stateName }}\n\t\t\t              </mat-option>\n\t\t            </mat-select>\n\t\t   \t\t\n\t\t   \t\t\t\n\t\t\t\t    \n\t\t      </mat-form-field>\n\t\t\t\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"form-group\">\n\t\t\t\n\t\t\t\t <mat-form-field>\n\t\t   \t\t\n\t\t   \t\t\t\t\t\n\t\t\t\t   \t<mat-select placeholder=\"City\" [(ngModel)]=\"doctor.city\">\n\t\t\t                           \n\t\t\t              <mat-option *ngFor=\"let city of cities\" [value]=\"city.cityName\">\n\t\t\t                                                {{ city.cityName}}\n\t\t\t              </mat-option>\n\t\t            </mat-select>\n\t\t            \n\t\t\t\t    \n\t\t   \t\t\n\t\t      </mat-form-field>\n\t\t\t\t\n\t\t\t\n\t\t\t</div>\n\t\t\t\n\t\t\t\n\t\t\t<div class=\"flex-row\">\n\t\t\t\n\t\t\t<button mat-button color=\"primary\" (click)=\"save()\">Save</button>\n\t\t\t<button mat-button color=\"warn\" (click)=\"addressEdit=false; address=true; refresh()\">Cancel</button>\n\t\t\t\n\t\t\t</div>\n\t\t\n\t\t\n\t\t\n\t\n\t</div>\n\t<!-- address form ends here  -->\n\t\n\t\n\n</div>\n\n\n\n\n<div id=\"right-content\">\n\n\n\t\n\t\t\n\t\t\n\t<div *ngIf=\"name\" class=\"flex-row\">\n\t\n\t<h3>Name : {{doctor.name}}</h3>\n\t\n\t<button mat-button color=\"accent\" class=\"edit\" (click)=\"nameEdit=true; name=false\">Edit</button>\n\t\n\t</div>\n\t\n\t<div *ngIf=\"nameEdit\" class=\"flex-column\">\n\t\n\t\t<mat-form-field>\n\t\t\n\t\t\t<input [(ngModel)]=\"doctor.name\" type=\"text\" placeholder=\"Enter Name \" matInput >\n\t\t\n\t\t</mat-form-field>\n\t\n\t\t<div class=\"flex-row\">\n\t\t\n\t\t\t<button mat-button color=\"primary\" (click)=\"save()\">Save</button>\n\t\t\t<button mat-button color=\"warn\" (click)=\"nameEdit=false; name=true; refresh()\">Cancel</button>\n\t\t</div>\n\t\n\t\n\t\n\t</div>\n\t\n\t<div *ngIf=\"about\" class=\"flex-column\">\n\t\n\t\n\t\n\t<div  class=\"flex-row\">\n\t\n\t<h4>About:</h4>\n\t\n\t<button mat-button color=\"accent\" (click)=\"aboutEdit=true; about=false\">Edit</button>\n\t\n\t</div>\n\t\n\t<p>{{doctor.about}}</p>\n\t\n\t</div>\n\t\n\t<!-- About form star here  -->\n\t<div *ngIf=\"aboutEdit\" class=\"flex-column\">\n\t\n\t\t<mat-form-field>\n\t\t\n\t\t\t<textarea matInput [(ngModel)]=\"doctor.about\" placeholder=\"About Information\"></textarea>\n\t\t\n\t\t</mat-form-field>\n\t\t\n\t\t<div class=\"flex-row\">\n\t\t\n\t\t\t<button mat-button color=\"primary\" (click)=\"save()\">Save</button>\n\t\t\t<button mat-button color=\"warn\" (click)=\"aboutEdit=false; about=true; refresh()\">Cancel</button>\n\t\t\n\t\t</div>\n\t\n\t</div>\n\t<!-- About form ends here  -->\t\n\t\n\t<div *ngIf=\"qualification\">\n\t\n\t<div  class=\"flex-row\">\n\t\n\t\t\t<h4>Qualification</h4>\n\t\t\t\n\t<ul>\n\t\n\t\n\t\t\t<div *ngFor=\"let degree of doctor.degrees\">\n\t\t\t\t<li><h5>{{degree.degreeName}} </h5></li>\n\t\t\t</div>\n\t\t\t\n\t\t\t\n    </ul>\n\t\n\t<button mat-button color=\"accent\" (click)=\"qualificationEdit=true; qualification=false\">Edit</button>\n\t\n\t</div>\n\t\n\t</div>\n\t\n\t<!-- qualification form start  -->\n    \n    <div *ngIf=\"qualificationEdit\" class=\"flex-column\">\n\t\t   <div class=\"form-group\">\n\t\t   \n\t\t  <mat-form-field>\n\t\t   \t\t\n\t\t   \t\t\t\t\t\n\t\t   \t<mat-select placeholder=\"Qualification\" [(ngModel)]=\"doctor.degrees\" multiple=\"true\">\n\t                           \n\t              <mat-option *ngFor=\"let degree of qualificationOptions\" [value]=\"degree\">\n\t              {{degree.degreeName}}\n\t              </mat-option>\n            </mat-select>\n            \n\t\t   \t\t\n\t\t</mat-form-field>\n\t\t   \t\t\t\n\t\t\t\t\t\n\t\t   \n\t\t   </div>\n\t\t   \n\t\t   <div class=\"flex-row\">\n\t\t\t\n\t\t\t\t<button mat-button color=\"primary\" (click)=\"save()\"> Save</button>\n\t\t\t\t<button mat-button color=\"warn\" (click)=\"qualificationEdit=false; qualification=true; refresh()\">Cancel</button>\n\t\t\t</div>\n\n\t</div>\n    \n    \n    <!-- qualificatin form ends  -->\n    \n    \n    <div *ngIf=\"speciality\" class=\"flex-row\">\n    \n    \n    <h4>Speciality:</h4>\n    \n\t\n\t<ul>\n\t\n\t<div *ngFor=\"let speciality of doctor.specialities\">\n\t\n\t\t<li><h5>{{speciality.specialityName}} </h5></li>\n\t\n\t</div>\n\t\n\t</ul>\n    \n    <button mat-button color=\"accent\" (click)=\"specialityEdit=true; speciality=false\" >Edit</button>\n    \n    \n    </div>\n    \n    <!-- speciality form start here  -->\n    \n    <div *ngIf=\"specialityEdit\" class=\"flex-column\">\n    \n    \t\t<div class=\"form-group\">\n\t\t\t\n\t\t\t\t\t\n\t\t\t\t<mat-form-field >\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t<mat-select placeholder=\"Specialities\" [(ngModel)]=\"doctor.specialities\" multiple=\"true\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<mat-option *ngFor=\"let speciality of specialities\" [value]=\"speciality\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t{{speciality.specialityName}}\n\t\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t</mat-select>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t</mat-form-field>\n\t\t\t\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"flex-row\">\n\t\t\t\n\t\t\t\t<button mat-button color=\"primary\" (click)=\"save()\"> Save</button>\n\t\t\t\t<button mat-button color=\"warn\" (click)=\"specialityEdit=false;speciality=true; refresh()\">Cancel</button>\n\t\t\t</div>\n    \n    \n    </div>\n    \n    \n    <!-- speciality form end here  -->\n    \n\t\n\t<div id=\"workingday-container\">\n\t\n\t<div class=\"flex-row\">\n\t<h4>Working Days:</h4>\n\t\n\t<button  mat-button class=\"edit\" color=\"accent\" (click)=\"openDialog()\">Edit</button>\n\t\n\t</div>\n\t<div *ngFor=\"let workingday of doctor.workingDays\">\n\t\n\t\n\t\t\n\t\t\n\t\t<mat-list>\n\t\t\n        <div *ngIf=\"workingday.checked\"  class=\"workingday\">\n\t\t\n\t\t<mat-list-item><h5>{{workingday.dayName}}</h5></mat-list-item>\n\t\t\n\t\t\n\t\t\n\t\t<div class=\"time\" >\n\t\t\t\t\t<div *ngFor=\"let hour of workingday.hours\" >\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t{{commonService.getTimeLabel(hour.startAt)}}\n\t\t\t\t\t\t\t\tTo\t\t\n\t\t\t\t\t\t\t\t{{commonService.getTimeLabel(hour.closeAt)}}\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t    </div>\n\t\t\n\t\t</div>\n\t\t\n\t\t\n\t\t\n\t\t\n\t\t</mat-list>\n\t\t\n\t\t\n\t\t<br>\n\t\t\n\t\t\n\t</div>\n\t\n\t\n\t</div>\n\t\n\t\n\t\t\n\n</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/dr/html/doctor_public_profile.html":
/***/ (function(module, exports) {

module.exports = "\n<div id=\"container\">\n\n<div id=\"left-content\">\n\n<div id=\"img-container\">\n\n\t<img src={{doctor.profileImage.path}} alt=\"profile image\" height=150px width=150px>\n\t\n</div>\n\t\n\t<div class=\"flex-row\">\n\t\n\t<h4>AppointmentFee:</h4>\n\t\t\t<div>\n\t\t\t     <p>{{doctor.appointmentFee}}</p>\n\t\t\t</div>\n\t</div>\n\t\n\t<div class=\"flex-row\">\n\t\n\t<h4>PhoneNo:</h4>\n\t\t\t<div>\n\t\t\t     <p>{{doctor.phoneno}}</p>\n\t\t\t</div>\n\t</div>\n\t\n\t<div class=\"flex-row\">\n\t\n\t\t\n\t<h4>Address:</h4>\n\t<div>\n\t\n\t\t<p>{{doctor.addrLineOne}}  {{doctor.city}}</p>\n\t\n\t</div>\n\t\n\t\n\t</div>\n\t\n\t\n\t\n\n</div>\n\n\n\n\n<div id=\"right-content\">\n\n\n\t\n\t\t\n\t\t\n\t\n\t\n\t<h3>Name : {{doctor.name}}</h3>\n\t\n\t<h4>About:</h4>\n\t<p>{{doctor.about}}</p>\n\t\n\t<div class=\"flex-row\">\n\t\n\t\t\t<h4>Qualification</h4>\n\t\n\t<ul>\n\t\n\t\n\t\t\t<div *ngFor=\"let degree of doctor.degrees\">\n\t\t\t\t<li><h5>{{degree.degreeName}} </h5></li>\n\t\t\t</div>\n\t\t\t\n\t\t\t\n    </ul>\n\t\n\t\n\t\n\t</div>\n    \n    \n    \n    <div class=\"flex-row\">\n    \n    \n    <h4>Speciality:</h4>\n\t\n\t<ul>\n\t\n\t<div *ngFor=\"let speciality of doctor.specialities\">\n\t\n\t\t<li><h5>{{speciality.specialityName}} </h5></li>\n\t\n\t</div>\n\t\n\t</ul>\n    \n    \n    \n    </div>\n    \n    \n\t\n\t<div id=\"workingday-container\">\n\t\n\t<h4>Working Days:</h4>\n\t<div *ngFor=\"let workingday of doctor.workingDays\">\n\t\n\t\t\n\t\t\n\t\t<mat-list>\n\t\t\n        <div class=\"workingday\">\n\t\t\n\t\t<mat-list-item><h5>{{workingday.dayName}}</h5></mat-list-item>\n\t\t\n\t\t\n\t\t\n\t\t<div class=\"time\" >\n\t\t\t\t\t<div *ngFor=\"let hour of workingday.hours\" >\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t{{commonService.getTimeLabel(hour.startAt)}}\n\t\t\t\t\t\t\t\tTo\t\t\n\t\t\t\t\t\t\t\t{{commonService.getTimeLabel(hour.closeAt)}}\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t    </div>\n\t\t\n\t\t</div>\n\t\t\n\t\t\n\t\t\n\t\t\n\t\t</mat-list>\n\t\t\n\t\t\n\t\t<br>\n\t\t\n\t\t\n\t</div>\n\t\n\t\n\t</div>\n\t\n\t\n\t\t\n\n</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/dr/html/doctor_signup.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"main-container\">\n\n<h2 class=\"text-center\">Signup Form </h2>\n \n<mat-vertical-stepper>\n\n\n<mat-step [stepControl]=\"personalForm\">\n\t\n\t<ng-template matStepLabel> Personal Information</ng-template>\n\t\n\t<form [formGroup]=\"personalForm\">\n\t\n\t\t<div class=\"form-group\">\n\t\t\t<mat-form-field>\n\t\t\t\t\n\t\t\t\t<input  matInput name=\"name\" type=\"text\" formControlName=\"name\" placeholder=\"Name\">\n\t\t\t\t<mat-error *ngIf=\"name.hasError('required')\">\n\t\t\t\t\tName is <strong>required</strong>\n\t\t\t\t</mat-error>\n\t\t\t\n\t\t\t</mat-form-field>\n\t\t\n\t\t</div>\n\t\t\n\t\t<div class=\"form-group\">\n\t\t<mat-form-field>\n\t\t\t<textarea  cols=\"5\" rows=\"6\" matInput name=\"about\" formControlName=\"about\" placeholder=\"Write About Yourself\"></textarea>\n\t\t\t<mat-hint align='start'>Write Detail About You Work</mat-hint>\n\t\t\t<mat-hint align=\"end\">{{about.value.length}}/256</mat-hint>\n\t\t\t\n\t\t\t<mat-error *ngIf=\"about.hasError('required')\">\n\t\t\t\n\t\t\t\tAbout is  <strong>requied</strong>\n\t\t\t</mat-error>\n\t\t\t<mat-error *ngIf=\"about.hasError('maxlength')\">\n\t\t\t\tMaximum no of character is 256\n\t\t\t</mat-error>\n\t\t</mat-form-field>\n\t\t</div>\n\t\t\n\t\t<div class=\"form-group\">\n\t\t\t<button mat-raised-button color=\"primary\" type=\"button\" matStepperNext >Next</button>\n\t\t</div>\n\t\n\t</form>\n\n\n\n</mat-step>\n\n\n\t<mat-step [stepControl]=\"qualificationForm\">\n\t\n  <ng-template matStepLabel>Add Your Qalification</ng-template>\t\n  \n\n\t<form [formGroup]=\"qualificationForm\">\n\n\t\t   <div class=\"form-group\">\n\t\t   \n\t\t  <mat-form-field>\n\t\t   \t\t\n\t\t   \t\t\t\t\t\n\t\t   \t<mat-select placeholder=\"Qualification\" formControlName=\"qualifications\" multiple=\"true\">\n\t                           \n\t              <mat-option *ngFor=\"let degree of qualificationOptions\" [value]=\"degree\">\n\t              {{degree.degreeName}}\n\t              </mat-option>\n            </mat-select>\n            \n            <mat-error *ngIf=\"qualifications.hasError('required')\">\n\t\t\t\t\tQualifications are<strong>required</strong>\n\t\t\t\t</mat-error>\n\t\t   \t\t\n\t\t</mat-form-field>\n\t\t   \t\t\t\n\t\t\t\t\t\n\t\t   \n\t\t   </div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\n\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\n\t\t\t\t<mat-form-field >\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t<mat-select placeholder=\"Specialities\" formControlName=\"specialities\" multiple=\"true\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<mat-option *ngFor=\"let speciality of specialities\" [value]=\"speciality\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t{{speciality.specialityName}}\n\t\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t</mat-select>\n\t\t\t\t\t<mat-error *ngIf=\"specialitiesControl.hasError('required')\">\n\t\t\t\t\tSpecialities are <strong>required</strong>\n\t\t\t\t</mat-error>\n\t\t\t\t\n\t\t\t\t</mat-form-field>\n\t\t\t\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"form-group\">\n\t\t\t\n\t\t\t<button mat-raised-button color=\"accent\" matStepperPrevious type=\"button\">Previous</button>\n\t\t\t\n\t\t\t <button mat-raised-button color=\"primary\"  matStepperNext type=\"button\">Next</button>\n\t\t\t</div>\n\t        \n\t       \n\t\t\t\t\n\t\t \n\t   </form>\t\n\t\t\t\t\n\n\t\t\t\n\t\t\n\t\t\n\t\t\n\t\t</mat-step >\n\t\t\n\t\t\n\t\t<mat-step [stepControl]=\"contactForm\">\n\t\t\n\t\t\t<ng-template matStepLabel>Add Contact Information</ng-template>\n\t\t\n\t\t\t<form [formGroup]=\"contactForm\" >\n\t\t\t\n\t\t\t<div class=\"form-group\">\n\t\t\t\t\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t<input matInput formControlName=\"address\" type=\"text\" name=\"address\" placeholder=\"Address\" >\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t    <mat-error *ngIf=\"address.hasError('required')\">\n\t\t\t\t\tAddress is <strong>required</strong>\n\t\t\t     \t</mat-error>\n\t\t\t\t    </mat-form-field>\n\t\t\t\t    \n\t\t\t\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"form-group\">\n\t\t\t\n\t\t\t\t<mat-form-field>\n\t\t\t\t\t<input matInput formControlName=\"address2\" type=\"text\" name=\"address2\" placeholder=\"Address Line Two\">\n\t\t\t\t\t\n\t\t\t\t    \n\t\t\t\t</mat-form-field>\n\t\t\t\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"form-group\">\n\t\t\t\n\t\t\t\t <mat-form-field>\n\t\t   \t\t\n\t\t   \t\t\t\t\t\n\t\t\t\t   \t<mat-select placeholder=\"State\" formControlName=\"state\" (change)=\"stateSelected()\">\n\t\t\t                           \n\t\t\t              <mat-option *ngFor=\"let state of states\" [value]=\"state.stateId\">\n\t\t\t                                                {{ state.stateName }}\n\t\t\t              </mat-option>\n\t\t            </mat-select>\n\t\t   \t\t\n\t\t   \t\t\t\n\t\t\t\t    <mat-error *ngIf=\"state.hasError('required')\">\n\t\t\t\t\tState is <strong>required</strong>\n\t\t\t\t</mat-error>\n\t\t      </mat-form-field>\n\t\t\t\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"form-group\">\n\t\t\t\n\t\t\t\t <mat-form-field>\n\t\t   \t\t\n\t\t   \t\t\t\t\t\n\t\t\t\t   \t<mat-select placeholder=\"City\" formControlName=\"city\">\n\t\t\t                           \n\t\t\t              <mat-option *ngFor=\"let city of cities\" [value]=\"city.cityName\">\n\t\t\t                                                {{ city.cityName}}\n\t\t\t              </mat-option>\n\t\t            </mat-select>\n\t\t            \n\t\t\t\t    <mat-error *ngIf=\"city.hasError('required')\">\n\t\t\t\t\tCity is <strong>required</strong>\n\t\t\t\t</mat-error>\n\t\t   \t\t\n\t\t      </mat-form-field>\n\t\t\t\t\n\t\t\t\n\t\t\t</div>\n\t\t\t\n\t\t\t\n\t\t\t<div class=\"form-group\">\n\t\t\t\n\t\t\t\t<mat-form-field>\n\t\t\t\t\t<span matPrefix>+91 &nbsp;</span>\n\t\t\t\t\t<input matInput formControlName=\"phoneno\" type=\"text\" name=\"phoneno\" placeholder=\"Phone No\">\n\t\t\t\t\t\n\t\t\t\t    <mat-error *ngIf=\"phoneno.hasError('required')\">\n\t\t\t\t\tPhone No  is <strong>required</strong>\n\t\t\t\t    </mat-error>\n\t\t\t\t    \n\t\t\t\t    <mat-error *ngIf=\"phoneno.hasError('minlength')\">\n\t\t\t\t    \tMinimum length should be 10 digit\n\t\t\t\t    </mat-error>\n\t\t\t\t</mat-form-field>\n\t\t\t\n\t\t\t\n\t\t\t</div>\n\t\t\t\t\n\t\t\t\n\t\t\t<div class=\"form-group\">\n\t\t\t\n\t\t\t\t\t<button matStepperPrevious mat-raised-button color=\"accent\" type=\"button\">Previous</button>\n\t\t\t\t    <button matStepperNext mat-raised-button color=\"primary\"  type=\"button\">Next</button>\n\t\t\t\n\t\t\t</div>\n\t\t\t\t\n\t\t\t\n\t\t\n\t\t\n\t\t</form>\n\t\t</mat-step>\n\n\t\t\n\t\t<mat-step>\n\t\t\n\t\t\t<ng-template matStepLabel >Review And Save </ng-template>\n\t\t\t\n\t\t\t<h4>Qualifications</h4>\n\t\t\t<p *ngFor=\"let qualification of qualificationForm.value.qualifications\">{{qualification.degreeName}}</p>\n\t\t\n\t\t\t<h4>Specialities</h4>\n\t\t\t<p *ngFor=\"let speciality of qualificationForm.value.specialities\">{{speciality.specialityName}}</p>\n\t\t\t\n\t\t\t\n\t\t\t<h4>Address:</h4>\n\t\t\t<p> {{contactForm.value.address}}  , {{contactForm.value.city}}</p>\n\t\t\t\n\t\t\t<h4>Phone no:</h4>\n\t\t\t<p>{{contactForm.value.phoneno}}</p>\n\t\t    \n\t\t    \n\t\t    <h4 *ngIf=\"result.result\" class=\"text-capitalize text-success\">{{result.message}}</h4>\n\t\t\t<h4 *ngIf=\"result.error\" class=\"text-capitalize text-danger\">{{result.message}}</h4>\n\t\t\t\n\t\t\t<div class=\"form-group\">\n\t\t\t\n\t\t\t\t<button mat-raised-button matStepperPrevious color=\"accent\" type=\"button\">Previous</button>\n\t\t\t\t<button mat-raised-button color=\"primary\" type=\"button\" (click)=\"submit()\" >Save</button>\n\t\t\t\n\t\t\t</div>\n\t\t\t\n\t\t\n\t\t</mat-step>\n\t\t\n\t\t\n\t\t\n\t\t\n\n\n</mat-vertical-stepper>\n\n\n\n\n\n\n\n\t\t\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/dr/html/doctor_write_prescription.html":
/***/ (function(module, exports) {

module.exports = "\n<h2> Write Prescription </h2>\n\n\n\n\n<form [formGroup]=\"prescriptionForm\">\n\n<h4>PatientName: {{appointment.patientName}}</h4>\n\n\n\n<mat-form-field>\n\n<textarea matInput placeholder=\"Enter The Symptoms\" matTextareaAutosize matAutosizeMinRows=\"6\"\n            matAutosizeMaxRows=\"2\" formControlName=\"symptoms\">\n    </textarea>\n\n</mat-form-field>\n\n\n<mat-form-field>\n\n\t<textarea matInput placeholder=\"Enter The Prescription\" matTextareaAutosize matAutosizeMinRows=\"6\"\n            matAutosizeMaxRows=\"5\" formControlName=\"prescription\">\n    </textarea>\n\n</mat-form-field>\n\n\t\n\t<button mat-raised-button color=\"primary\" (click)=\"save()\">Save</button>\n\t<button mat-raised-button color=\"accent\"  mat-dialog-close\t >Close</button>\n\t\n</form>"

/***/ }),

/***/ "../../../../../src/app/error.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error; });
var Error = /** @class */ (function () {
    function Error() {
    }
    return Error;
}());



/***/ }),

/***/ "../../../../../src/app/home.html":
/***/ (function(module, exports) {

module.exports = "<site-main-header class=\"header\"></site-main-header>\n\n\n\t\t\t<div class=\"content\">\n\t\t\t\t\n\t\t\t\t\t \n\t\t\t\t\t <search-using-city-speciality></search-using-city-speciality>\n\t\t\t\t\t \n\t\t\t\t\n\t\t\t</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/home.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_user_service__ = __webpack_require__("../../../../../src/app/user/user_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dr_doctor_service__ = __webpack_require__("../../../../../src/app/dr/doctor_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Home = /** @class */ (function () {
    function Home(userService, router, doctorService, http) {
        this.userService = userService;
        this.router = router;
        this.doctorService = doctorService;
        this.http = http;
    }
    Home.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getCurrentUser().subscribe(function (data) {
            if (data["_body"] != "") {
                var currentUser = data.json();
                if (currentUser.role == "ROLE_DOCTOR") {
                    _this.router.navigateByUrl("/dr/home");
                }
                else if (currentUser.role == "ROLE_PATIENT") {
                    _this.router.navigateByUrl("/patient/home");
                }
            }
        });
    };
    Home = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "home",
            template: __webpack_require__("../../../../../src/app/home.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__dr_doctor_service__["a" /* DoctorService */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
    ], Home);
    return Home;
}());



/***/ }),

/***/ "../../../../../src/app/layout/site_main_footer.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"navbar-fixed-bottom\">\n\n\t<mat-toolbar  color=\"accent\">\n\t\t\t\n\t\t\t<button mat-button >Privacy</button>\n\t\t\t\n\t\t\t \n\t\t\t\n   </mat-toolbar>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/layout/site_main_footer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteMainFooter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SiteMainFooter = /** @class */ (function () {
    function SiteMainFooter() {
    }
    SiteMainFooter = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "site-main-footer",
            template: __webpack_require__("../../../../../src/app/layout/site_main_footer.html")
        })
    ], SiteMainFooter);
    return SiteMainFooter;
}());



/***/ }),

/***/ "../../../../../src/app/layout/site_main_header.html":
/***/ (function(module, exports) {

module.exports = "\n<mat-toolbar color=\"primary\">\n\n<button mat-button routerLink=\"/\"><span>Edr</span>\n</button>\n\n<button mat-button routerLink=\"/user/signup\">SignUp</button>\n<button mat-button routerLink=\"/user/login\">Sign In</button>\n\n<button mat-icon-button [matMenuTriggerFor]=\"menu\">\n  <mat-icon>more_vert</mat-icon>\n</button>\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item>\n    \n    <span>About</span>\n  </button>\n  <button mat-menu-item >\n   \n    <span>How This Works ?</span>\n  </button>\n  <button mat-menu-item>\n   \n    <span>Contact</span>\n  </button>\n</mat-menu>\n\n</mat-toolbar>"

/***/ }),

/***/ "../../../../../src/app/layout/site_main_header.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteMainHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SiteMainHeader = /** @class */ (function () {
    function SiteMainHeader() {
    }
    SiteMainHeader = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "site-main-header",
            template: __webpack_require__("../../../../../src/app/layout/site_main_header.html")
        })
    ], SiteMainHeader);
    return SiteMainHeader;
}());



/***/ }),

/***/ "../../../../../src/app/material/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatGridListModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatSidenavModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatRadioModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatStepperModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDatepickerModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatNativeDateModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSlideToggleModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatTableModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatAutocompleteModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatPaginatorModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatProgressBarModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogModule */]
            ],
            declarations: [],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* DateAdapter */], useClass: __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* NativeDateAdapter */] }],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatGridListModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatSidenavModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatRadioModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatStepperModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDatepickerModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatNativeDateModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSlideToggleModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatTableModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatAutocompleteModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatPaginatorModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatProgressBarModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogModule */]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/model/address.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Address; });
var Address = /** @class */ (function () {
    function Address() {
    }
    return Address;
}());



/***/ }),

/***/ "../../../../../src/app/model/appointment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Appointment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__prescription__ = __webpack_require__("../../../../../src/app/model/prescription.ts");

var Appointment = /** @class */ (function () {
    function Appointment() {
        this.prescription = new __WEBPACK_IMPORTED_MODULE_0__prescription__["a" /* Prescription */]();
    }
    return Appointment;
}());



/***/ }),

/***/ "../../../../../src/app/model/city.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return City; });
var City = /** @class */ (function () {
    function City() {
    }
    return City;
}());



/***/ }),

/***/ "../../../../../src/app/model/day.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day; });
var Day = /** @class */ (function () {
    function Day() {
        this.dayStatus = "Closed";
        this.checked = false;
        this.hours = new Array();
    }
    Day.prototype.equals = function (dayid) {
        if (this.dayId == dayid) {
            return true;
        }
        return false;
    };
    Day.prototype.isChecked = function () {
        var result;
        if (this.dayStatus == "Open") {
            result = true;
        }
        else {
            result = false;
        }
        return result;
    };
    return Day;
}());



/***/ }),

/***/ "../../../../../src/app/model/degree.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Degree; });
var Degree = /** @class */ (function () {
    function Degree() {
    }
    return Degree;
}());



/***/ }),

/***/ "../../../../../src/app/model/disease.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Disease; });
var Disease = /** @class */ (function () {
    function Disease() {
    }
    return Disease;
}());



/***/ }),

/***/ "../../../../../src/app/model/doctorInPatient.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorInPatient; });
var DoctorInPatient = /** @class */ (function () {
    function DoctorInPatient() {
    }
    return DoctorInPatient;
}());



/***/ }),

/***/ "../../../../../src/app/model/formresult.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormResult; });
var FormResult = /** @class */ (function () {
    function FormResult() {
    }
    return FormResult;
}());



/***/ }),

/***/ "../../../../../src/app/model/hourListOptions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HourListOption; });
var HourListOption = [
    { label: "24 Hours", value: "24" },
    { label: "12:00 am", value: "00:00" },
    { label: "12:30 am", value: '00:30' },
    { label: "01:00 am", value: '01:00' },
    { label: "01:30 am", value: "01:30" },
    { label: "02:00 am", value: "02:00" },
    { label: "02:30 am", value: "02:30" },
    { label: "03:00 am", value: "03:00" },
    { label: "03:30 am", value: "03:30" },
    { label: "04:00 am", value: "04:00" },
    { label: "04:30 am", value: "04:30" },
    { label: "05:00 am", value: "05:00" },
    { label: "05:30 am", value: "05:30" },
    { label: "06:00 am", value: "06:00" },
    { label: "06:30 am", value: "06:30" },
    { label: "07:00 am", value: "07:00" },
    { label: "07:30 am", value: "07:30" },
    { label: "08:00 am", value: "08:00" },
    { label: "08:30 am", value: "08:30" },
    { label: "09:00 am", value: "09:00" },
    { label: "09:30 am", value: "09:30" },
    { label: "10:00 am", value: "10:00" },
    { label: "10:30 am", value: "10:30" },
    { label: "11:00 am", value: "11:00" },
    { label: "11:30 am", value: "11:30" },
    { label: "12:00 pm", value: "12:00" },
    { label: "12:30 pm", value: "12:30" },
    { label: "01:00 pm", value: "13:00" },
    { label: "01:30 pm", value: "13:30" },
    { label: "02:00 pm", value: "14:00" },
    { label: "02:30 pm", value: "14:30" },
    { label: "03:00 pm", value: "15:00" },
    { label: "03:30 pm", value: "15:30" },
    { label: "04:00 pm", value: "16:00" },
    { label: "04:30 pm", value: "16:30" },
    { label: "05:00 pm", value: "17:00" },
    { label: "05:30 pm", value: "17:30" },
    { label: "06:00 pm", value: "18:00" },
    { label: "06:30 pm", value: "18:30" },
    { label: "07:00 pm", value: "19:00" },
    { label: "07:30 pm", value: "19:30" },
    { label: "08:00 pm", value: "20:00" },
    { label: "08:30 pm", value: "20:30" },
    { label: "09:00 pm", value: "21:00" },
    { label: "09:30 pm", value: "21:30" },
    { label: "10:00 pm", value: "22:00" },
    { label: "10:30 pm", value: "22:30" },
    { label: "11:00 pm", value: "23:00" },
    { label: "11:30 pm", value: "23:30" },
    { label: "12:00 pm", value: "23:59" }
];


/***/ }),

/***/ "../../../../../src/app/model/hours.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hours; });
var Hours = /** @class */ (function () {
    function Hours() {
    }
    Hours.prototype.equal = function (hours) {
        var result = false;
        if (hours.startAt == this.startAt && hours.closeAt == this.closeAt) {
            if (this.maxPatientNo == hours.maxPatientNo) {
                result = true;
            }
        }
        return result;
    };
    return Hours;
}());



/***/ }),

/***/ "../../../../../src/app/model/prescription.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Prescription; });
var Prescription = /** @class */ (function () {
    function Prescription() {
    }
    return Prescription;
}());



/***/ }),

/***/ "../../../../../src/app/model/speciality.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Speciality; });
var Speciality = /** @class */ (function () {
    function Speciality() {
    }
    Speciality.prototype.toString = function () {
        return "{ specialityName :" + this.specialityName + "}";
    };
    return Speciality;
}());



/***/ }),

/***/ "../../../../../src/app/model/state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return State; });
var State = /** @class */ (function () {
    function State() {
    }
    return State;
}());



/***/ }),

/***/ "../../../../../src/app/model/userfile.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFile; });
var UserFile = /** @class */ (function () {
    function UserFile() {
    }
    return UserFile;
}());



/***/ }),

/***/ "../../../../../src/app/patient/add_doctor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDoctor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AddDoctor = /** @class */ (function () {
    function AddDoctor() {
    }
    AddDoctor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "add-doctor",
            template: __webpack_require__("../../../../../src/app/patient/html/add_doctor.html")
        })
    ], AddDoctor);
    return AddDoctor;
}());



/***/ }),

/***/ "../../../../../src/app/patient/appointment_with_added_doctor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentWithAddedDoctor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__patient__ = __webpack_require__("../../../../../src/app/patient/patient.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_common_service__ = __webpack_require__("../../../../../src/app/common/common_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__patient_service__ = __webpack_require__("../../../../../src/app/patient/patient_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppointmentWithAddedDoctor = /** @class */ (function () {
    function AppointmentWithAddedDoctor(formBuilder, patientService, commonService, matSnackBar, router) {
        this.formBuilder = formBuilder;
        this.patientService = patientService;
        this.commonService = commonService;
        this.matSnackBar = matSnackBar;
        this.router = router;
        this.patient = new __WEBPACK_IMPORTED_MODULE_3__patient__["a" /* Patient */]();
        this.showAppointmentForm = false;
        this.currentDate = new Date();
        this.hours = new Array();
        this.workingDays = new Array();
        this.doctors = new Array();
        this.timeSlots = new Array();
        this.holidays = new Array();
        // doctor form control field  
        this.selectedDoc = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required
        ]);
        // time slot for the appointment 
        this.appointmentTime = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required
        ]);
        //appointment date form control 
        this.appointmentDate = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required
        ]);
    }
    /* this function execute when user select a dr from the list and then
     * it populate the list of time slots for that perticular dr in the
     * timeSlots variable */
    AppointmentWithAddedDoctor.prototype.drSelected = function () {
        var _this = this;
        var doc = this.appointmentForm.value.selectedDoc;
        console.log("doctor value" + doc.docId);
        // Now we get the full details of doctor
        this.patientService.getDoctorUsingDocId(doc.docId).subscribe(function (data) {
            if (data != undefined) {
                doc = data.json();
                _this.holidays = doc.holidays;
                _this.workingDays = doc.workingDays;
                //filter value is changed whenever the doctor's value is changed
                _this.holidayFilter = function (selectedDate) {
                    var day = selectedDate.getDay();
                    var result = false;
                    if (_this.workingDays) {
                        for (var i = 0; i < _this.workingDays.length; i++) {
                            if (day == _this.workingDays[i].dayId) {
                                result = true;
                            }
                        }
                    }
                    else {
                        result = true;
                    }
                    if (_this.holidays) {
                        for (var i = 0; i < _this.holidays.length; i++) {
                            var holiday = _this.holidays[i];
                            if (selectedDate.getTime() == parseInt(holiday.toString()) * 1000) {
                                console.log(holiday);
                                console.log(selectedDate);
                                result = false;
                            }
                        }
                    }
                    return result;
                };
            }
        });
    };
    /** dateSelected method execute when user select the date and change the time slots available at that day*/
    AppointmentWithAddedDoctor.prototype.dateSelected = function (event) {
        for (var i = 0; i < this.workingDays.length; i++) {
            if (this.workingDays[i].dayId == event.value.getDay()) {
                this.hours = this.workingDays[i].hours;
            }
        }
    };
    AppointmentWithAddedDoctor.prototype.ngOnInit = function () {
        var _this = this;
        this.patientService.getPatient().subscribe(function (data) {
            if (data != undefined) {
                if (data["_body"] != "") {
                    _this.patient.name = data.json().name;
                }
                else {
                    _this.router.navigateByUrl("/patient/home/patient/signup");
                }
            }
        });
        if (window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(function (position) {
                console.log(position);
            });
        }
        this.getDocForPatient();
        this.appointmentForm = this.formBuilder.group({
            selectedDoc: this.selectedDoc,
            appointmentTime: this.appointmentTime,
            appointmentDate: this.appointmentDate
        });
    };
    AppointmentWithAddedDoctor.prototype.submit = function () {
        console.log(this.appointmentForm.value);
    };
    AppointmentWithAddedDoctor.prototype.getDocForPatient = function () {
        var _this = this;
        this.patientService.getPatientDoctors().subscribe(function (data) {
            if (data != undefined) {
                _this.doctors = data.json();
            }
        });
    };
    AppointmentWithAddedDoctor.prototype.docHover = function (dr) {
        console.log(dr);
    };
    AppointmentWithAddedDoctor.prototype.getDocDetail = function (i) {
        var doc = this.doctors[i];
        return doc.addrLineOne;
    };
    AppointmentWithAddedDoctor.prototype.getAppointmentLeft = function () {
        var _this = this;
        this.patientService.getAppointmentBooked(this.selectedDoc.value.docId, this.appointmentDate.value, this.appointmentTime.value)
            .subscribe(function (data) {
            if (data != undefined) {
                var appointment = data.json();
                console.log(data);
                var appointmentLeft = _this.appointmentTime.value.maxPatientNo - appointment;
                if (appointmentLeft > 0) {
                    _this.matSnackBar.open("Appointment Left " + appointmentLeft, "Hurry", {
                        duration: 3000
                    });
                }
                else {
                    _this.matSnackBar.open("Appointment Full Choose Another Time", "Sorry", {
                        duration: 3000
                    });
                }
            }
        });
    };
    AppointmentWithAddedDoctor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "appointment-with-added-doctor",
            template: __webpack_require__("../../../../../src/app/patient/html/appointment_with_added_doctor.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_6__patient_service__["a" /* PatientService */],
            __WEBPACK_IMPORTED_MODULE_4__common_common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["y" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AppointmentWithAddedDoctor);
    return AppointmentWithAddedDoctor;
}());



/***/ }),

/***/ "../../../../../src/app/patient/css/patient_home.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body, app-root, mat-sidenav-container, .my-content {\n  margin: 0;\n  width: 100%;\n  height: 100%;\n}\n\n\na{\n\twidth:100%;\n\theight:100%;\n\tdisplay: block;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/patient/css/patient_signup.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/patient/css/search_doc_using_city_speciality.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form{\n  max-width:none;\n}\n\nmat-form-field{\n  margin:15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/patient/html/add_doctor.html":
/***/ (function(module, exports) {

module.exports = "<h2>Add Doctor</h2>"

/***/ }),

/***/ "../../../../../src/app/patient/html/appointment_with_added_doctor.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-center\">\n\n\n<h4 class=\"text-center\">Make An Appointment With Added Doctor </h4>\n\n\n<mat-horizontal-stepper>\n \n \t<mat-step>\n \t\t<ng-template matStepLabel>Choose Doctor And Time</ng-template>\n \t\t\n \t\t\n<form [formGroup]=\"appointmentForm\" (ngSubmit)=\"submit()\">\n\n\t<div class=\"form-group\">\n\t\n\t\t<mat-form-field>\n\t\t\n\t\t\t\t\t<mat-select placeholder=\"Choose a Doctor\" formControlName=\"selectedDoc\" (change)=\"drSelected()\">\n\t\t\t\t\t\t\t<div *ngFor=\"let dr of doctors;let i = index\" [matTooltip]=\"getDocDetail(i)\" matTooltipPosition=\"right\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<mat-option  [value]=\"dr\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t{{dr.name}}\n\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t     </mat-option>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t</mat-select>\n\t\t\t\t\t<mat-hint>List Of Doctor In Your city</mat-hint>\n\t\t\t\t\t<mat-error *ngIf=\"selectedDoc.hasError('required')\">Please Select A Dr</mat-error>\n\t\t\t\t\n\t\t</mat-form-field>\n\t\t\n\t\t\n\t</div>\n\t\n\t<div class=\"form-group\">\n\t\n\t\t<mat-form-field>\n\t\t\n\t\t\t<input matInput  (dateChange)=\"dateSelected($event)\" [min]='currentDate'  [matDatepickerFilter]=\"holidayFilter\"  formControlName=\"appointmentDate\"  [matDatepicker]=\"picker\" placeholder=\"Select A day\">\n\t\t\t  \n\t\t\t  \n\t\t\t  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n\t\t\t  \n\t\t\t  <mat-datepicker touchUi='true' #picker></mat-datepicker>\n\t\t\n\t\t\t<mat-hint> Enter Date in (MM/DD/YYYY)</mat-hint>\n\t<mat-error *ngIf=\"appointmentDate.hasError('required')\">Please Select A Date</mat-error>\n\t<mat-error *ngIf=\"appointmentDate.hasError('matDatepickerFilter')\"> This day is a holiday </mat-error>\n\t\t</mat-form-field>\n   \n\t\n\t</div>\n\n\n\t<div class=\"form-group\">\n\t\n\t\t<mat-form-field>\n\t\t\n\t\t\t<mat-select placeholder=\"Choose a Time\" formControlName=\"appointmentTime\" (change)=\"getAppointmentLeft()\">\n\t\t\t\t\n\t\t\t<mat-option *ngFor=\"let hour of hours\" [value]=\"hour\" >\n\t\t\t\t{{commonService.getTimeLabel(hour.startAt)}} To \n\t\t\t\t{{commonService.getTimeLabel(hour.closeAt)}}\n\t\t\t</mat-option>\n\t\t\t\t\n\t\t\t</mat-select>\n\t\t\t<mat-error *ngIf=\"appointmentTime.hasError('required')\"> Please Select A Time</mat-error>\n\t\t\n\t\t</mat-form-field>\n\t</div>\t\n\t\n\t\n\t<div class=\"form-group\">\n \t\t\t<button mat-raised-button matStepperNext color=\"primary\">Next</button>\n \t\t</div>\n\n</form>\n \t\t\n \t\n \t\t\n \t</mat-step>\n \t\n \t<mat-step>\n \t\t<ng-template matStepLabel>Pay </ng-template>\n \t\n \t\t<div class=\"form-group\">\n \t\t\t<button mat-raised-button matStepperPrevious color=\"accent\">Previous</button>\n \t\t\t<button mat-raised-button matStepperNext color=\"primary\">Next</button>\n \t\t</div>\n \t</mat-step>\n \t\n \t<mat-step>\n \t\t<ng-template matStepLabel> Done </ng-template>\n \t\n \t\t<div class=\"form-group\">\n \t\t\n \t\t\t<button mat-raised-button matStepperPrevious color=\"accent\">Previous</button>\n \t\t\t<button mat-raised-button matStepperNext color=\"primary\">Next</button>\n \t\t</div>\n \t</mat-step>\n \n </mat-horizontal-stepper>\n      \n\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/patient/html/make_appointment.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-center\">\n\n\t\n\t<h4 class=\"text-center\">Make An Appointment With Dr {{doctor.name}}</h4>\n\n\n<mat-horizontal-stepper>\n \n \t<mat-step>\n \t\t<ng-template matStepLabel>Choose Doctor And Time</ng-template>\n \t\t\n \t\t\n<form [formGroup]=\"appointmentForm\" >\n\n\t<div class=\"form-group\">\n\t\n\t\t\n\t\t\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\n\t\t\t\t\t<input matInput  type=\"text\" formControlName=\"docName\" placeholder=\"\">\n\t\t\t\t\t\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\n\t\t\n\t\t\n\t\t\n\t</div>\n\t\n\t<div class=\"form-group\">\n\t\n\t\t<mat-form-field>\n\t\t\n\t\t\t<input matInput  (dateChange)=\"dateSelected($event)\" [min]='currentDate'  [matDatepickerFilter]=\"holidayFilter\"  formControlName=\"appointmentDate\"  [matDatepicker]=\"picker\" placeholder=\"Select A day\">\n\t\t\t  \n\t\t\t  \n\t\t\t  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n\t\t\t  \n\t\t\t  <mat-datepicker touchUi='true' #picker></mat-datepicker>\n\t\t\n\t\t\t<mat-hint> Enter Date in (MM/DD/YYYY)</mat-hint>\n\t<mat-error *ngIf=\"appointmentDate.hasError('required')\">Please Select A Date</mat-error>\n\t<mat-error *ngIf=\"appointmentDate.hasError('matDatepickerFilter')\"> This day is a holiday </mat-error>\n\t\t</mat-form-field>\n   \n\t\n\t</div>\n\n\n\t<div class=\"form-group\">\n\t\n\t\t<mat-form-field>\n\t\t\n\t\t\t<mat-select placeholder=\"Choose a Time\"  formControlName=\"appointmentTime\" (change)=\"getAppointmentLeft()\">\n\t\t\t\n\t\t\t\n\t\t\t <div *ngFor=\"let hour of hours\" >\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t<mat-option  [value]=\"hour\" >\n\t\t\t\t\t\t{{commonService.getTimeLabel(hour.startAt)}} To \n\t\t\t\t\t\t{{commonService.getTimeLabel(hour.closeAt)}}\n\t\t\t\t\t</mat-option>\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t</div>\t\t\n\t\t\t</mat-select>\n\t\t\t\n\t\t\t<mat-error *ngIf=\"appointmentTime.hasError('required')\"> Please Select A Time</mat-error>\n\t\t\n\t\t</mat-form-field>\n\t</div>\t\n\t\n\t\n\t<div class=\"form-group\">\n \t\t\t<button mat-raised-button matStepperNext color=\"primary\">Next</button>\n \t\t</div>\n\n</form>\n \t\t\n \t\n \t\t\n \t</mat-step>\n \t\n \t<mat-step>\n \t\t<ng-template matStepLabel>Pay </ng-template>\n\t \n\t\t \n\t\t \n\t\t \n \t\t<div class=\"form-group\">\n \t\t\t<button mat-raised-button matStepperPrevious color=\"accent\">Previous</button>\n \t\t\t<button mat-raised-button matStepperNext color=\"primary\">Next</button>\n \t\t</div>\n \t</mat-step>\n \t\n \t<mat-step>\n \t\t<ng-template matStepLabel> Done </ng-template>\n \t\n \t\t<div class=\"form-group\">\n \t\t\n \t\t\t<button mat-raised-button matStepperPrevious color=\"accent\">Previous</button>\n \t\t\t<button mat-raised-button matStepperNext color=\"primary\">Next</button>\n \t\t</div>\n \t</mat-step>\n \n </mat-horizontal-stepper>\n      \n\t\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/patient/html/patient_add_address.html":
/***/ (function(module, exports) {

module.exports = "<!-- <h3>Add address</h3> -->\n\n\n<!-- <form > -->\n\n<!-- \t<div class=\"form-group\"> -->\n\t\n<!-- \t<mat-form-field> -->\n<!-- \t\t<mat-select placeholder=\"Select the State\"> -->\n\t\t\n<!-- \t\t\t<mat-option>State</mat-option> -->\n\t\t\n<!-- \t\t</mat-select> -->\n<!-- \t</mat-form-field> -->\n<!-- \t</div> -->\n\t\n<!-- \t<div class=\"form-group\"> -->\n\t\n<!-- \t\t<mat-form-field> -->\n\t\t\n<!-- \t\t\t<mat-select placeholder=\"Select the city\"> -->\n\t\t\t\n<!-- \t\t\t\t<mat-option> city</mat-option> -->\n\t\t\t\n<!-- \t\t\t</mat-select> -->\n\t\t\t\n<!-- \t\t</mat-form-field> -->\n\t\n<!-- \t</div> -->\n\n\n<!-- </form> -->"

/***/ }),

/***/ "../../../../../src/app/patient/html/patient_home.html":
/***/ (function(module, exports) {

module.exports = "\n\n<mat-toolbar color=\"primary\">\n\n<button mat-icon-button (click)=\"sidenav.open()\">\n  <mat-icon>more_vert</mat-icon>\n</button>\n\n<button mat-button routerLink=\"/patient/home\"><span>Edr</span>\n</button>\n\n\n<button mat-button (click)=\"logOut()\">SignOut</button>\n\n\n</mat-toolbar>\n\n\n<mat-sidenav-container >\n\n  <mat-sidenav #sidenav>\n  \n  \t<mat-nav-list>\n  \t\n  \t\t\n  \t\n  \t\t<h3 mat-subheader>Appointment</h3>\n  \t\t\n  \t\t<mat-list-item>\n  \t\t <a class=\"list-group-item\" routerLink=\"appointment/with/added/doctor\">Added Doctor</a>\n  \t\t</mat-list-item>\n  \t\t\n  \t\t\n  \t\t<mat-list-item>\n  \t\t  <a class=\"list-group-item\" routerLink=\"patient/make/appointment\">Dr In Your City</a>\n  \t\t\n  \t\t</mat-list-item>\n  \t\t\n  \t\t\n  \t\t\n  \t\t<mat-divider></mat-divider>\n  \t\t\n  \t\t<h3 mat-subheader>Search</h3>\n  \t\t\n  \t\t<mat-list-item>\n  \t\t\n  \t\t<a class=\"list-group-item\" routerLink=\"search/using/docid\"> Using Doctor Id</a>\n  \t\t</mat-list-item>\n  \t\t\n  \t\t<mat-list-item>\n  \t\t\n  \t\t<a class=\"list-group-item\" routerLink=\"search/using/docname\"> Using Doctor Name</a>\n  \t\t</mat-list-item>\n  \t\t\n  \t\t<mat-list-item>\n  \t\t\n  \t\t\n  \t\t<a class=\"list-group-item\" routerLink=\"search/using/speciality\">Using Speciality</a>\n  \t\t\n  \t\t</mat-list-item>\n  \t\t\n  \t\t<mat-divider></mat-divider>\n  \t\t\n  \t\t<mat-list-item>\n  \t\t<a class=\"list-group-item\" routerLink=\"show/doc/added\" >Doctors Added</a>\n \t \t\n  \t\t</mat-list-item>\n  \t\t\n  \t\t<h3 class=\"mat-subheader\">Profile</h3>\n  \t\t<mat-divider></mat-divider>\n  \t\t\n  \t\t\n  \t\t<mat-list-item>\n  \t\t\n  \t\t<a routerLink=\"patient/signup\">Edit Profile</a>\n  \t\t</mat-list-item>\n  \t\t\n  \t\n  \t</mat-nav-list>\n  \n  \n\n  </mat-sidenav>\n\n\n  <!-- primary content -->\n  \n  \n  \n\t\t\n\t<router-outlet class=\"my-content\"></router-outlet>\n\n</mat-sidenav-container>\n\n\n<!--  <div class=\"col-sm-4\"> -->\n \n<!--  \t<div class=\"list-group\"> -->\n \t\n<!--  \t<a class=\"list-group-item\" data-toggle=\"collapse\" href=\"#appointmentMenu\"> -->\n<!-- \t\t  \tAppointment <i class=\"caret\"></i></a> -->\n<!--  \t  <div class=\"collapse\" id=\"appointmentMenu\"> -->\n \t  \n<!--  \t   <a class=\"list-group-item\" routerLink=\"appointment/with/added/doctor\">Added Doctor</a> -->\n<!--  \t   <a class=\"list-group-item\" routerLink=\"patient/make/appointment\">Dr In Your City</a> -->\n \t   \n \t  \n<!--  \t  </div> -->\n \t  \n<!--  \t<a class=\"list-group-item\" data-toggle=\"collapse\" href=\"#searchDocMenu\"> -->\n<!--  \tSearch <i class=\"caret\"></i></a> -->\n \t\n<!--  \t<div class=\"collapse\"  id=\"searchDocMenu\"> -->\n<!--  \t\t<a class=\"list-group-item\" routerLink=\"search/using/docid\"> Using Doctor Id</a> -->\n<!--  \t\t<a class=\"list-group-item\" routerLink=\"search/using/docname\"> Using Doctor Name</a> -->\n<!--  \t\t<a class=\"list-group-item\" routerLink=\"search/using/speciality\">Using Speciality</a> -->\n \t\t\n<!--  \t</div> -->\n \t\n \t\n<!--  \t \t<a class=\"list-group-item\" routerLink=\"show/doc/added\" >Doctors Added</a> -->\n \t \t\n<!--  \t</div> -->\n \t\n \t\n \t\t \n<!--  </div>   -->\n \n \n\t\t"

/***/ }),

/***/ "../../../../../src/app/patient/html/patient_make_appointment.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-center\">\n\n\t\n\t<h4 class=\"text-center\">Make An Appointment With Dr In Your City</h4>\n\n\n<mat-horizontal-stepper>\n \n \t<mat-step>\n \t\t<ng-template matStepLabel>Choose Doctor And Time</ng-template>\n \t\t\n \t\t\n<form [formGroup]=\"appointmentForm\" (ngSubmit)=\"submit()\">\n\n\t<div class=\"form-group\">\n\t\n\t\t<mat-form-field >\n\t\t\n\t\t\t\t\t<mat-select  #docSelect placeholder=\"Choose a Doctor\" formControlName=\"selectedDoc\" (change)=\"drSelected()\">\n\t\t\t\t\t\t\t<div  *ngFor=\"let dr of doctors;let i = index\" [matTooltip]=\"getDocDetail(i)\" matTooltipPosition=\"right\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<mat-option  [value]=\"dr\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t{{dr.name}}\n\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t     </mat-option>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t</mat-select>\n\t\t\t\t\t<mat-hint>List Of Doctor In Your city</mat-hint>\n\t\t\t\t\t<mat-error *ngIf=\"selectedDoc.hasError('required')\">Please Select A Dr</mat-error>\n\t\t\t\t\n\t\t</mat-form-field>\n\t\t\n\t\t\n\t</div>\n\t\n\t<div class=\"form-group\">\n\t\n\t\t<mat-form-field>\n\t\t\n\t\t\t<input matInput  (dateChange)=\"dateSelected($event)\" [min]='currentDate'  [matDatepickerFilter]=\"holidayFilter\"  formControlName=\"appointmentDate\"  [matDatepicker]=\"picker\" placeholder=\"Select A day\">\n\t\t\t  \n\t\t\t  \n\t\t\t  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n\t\t\t  \n\t\t\t  <mat-datepicker touchUi='true' #picker></mat-datepicker>\n\t\t\n\t\t\t<mat-hint> Enter Date in (MM/DD/YYYY)</mat-hint>\n\t<mat-error *ngIf=\"appointmentDate.hasError('required')\">Please Select A Date</mat-error>\n\t<mat-error *ngIf=\"appointmentDate.hasError('matDatepickerFilter')\"> This day is a holiday </mat-error>\n\t\t</mat-form-field>\n   \n\t\n\t</div>\n\n\n\t<div class=\"form-group\">\n\t\n\t\t<mat-form-field>\n\t\t\n\t\t\t<mat-select placeholder=\"Choose a Time\"  formControlName=\"appointmentTime\" (change)=\"getAppointmentLeft()\">\n\t\t\t\n\t\t\t\n\t\t\t <div *ngFor=\"let hour of hours\" >\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t<mat-option  [value]=\"hour\" >\n\t\t\t\t\t\t{{commonService.getTimeLabel(hour.startAt)}} To \n\t\t\t\t\t\t{{commonService.getTimeLabel(hour.closeAt)}}\n\t\t\t\t\t</mat-option>\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t</div>\t\t\n\t\t\t</mat-select>\n\t\t\t\n\t\t\t<mat-error *ngIf=\"appointmentTime.hasError('required')\"> Please Select A Time</mat-error>\n\t\t\n\t\t</mat-form-field>\n\t</div>\t\n\t\n\t\n\t<div class=\"form-group\">\n \t\t\t<button mat-raised-button matStepperNext color=\"primary\">Next</button>\n \t\t</div>\n\n</form>\n \t\t\n \t\n \t\t\n \t</mat-step>\n \t\n \t<mat-step>\n\t\t <ng-template matStepLabel>Pay </ng-template>\n\t\t \n\t\t <button mat-raised-button color=\"primary\" id=\"rzp-button1\" >Pay Now </button>\n\n\n \t\n \t\t<div class=\"form-group\">\n \t\t\t<button mat-raised-button matStepperPrevious color=\"accent\">Previous</button>\n \t\t\t<button mat-raised-button matStepperNext color=\"primary\">Next</button>\n \t\t</div>\n \t</mat-step>\n \t\n \t<mat-step>\n \t\t<ng-template matStepLabel> Done </ng-template>\n \t\n \t\t<div class=\"form-group\">\n \t\t\n \t\t\t<button mat-raised-button matStepperPrevious color=\"accent\">Previous</button>\n \t\t\t<button mat-raised-button matStepperNext color=\"primary\">Next</button>\n \t\t</div>\n \t</mat-step>\n \n </mat-horizontal-stepper>\n      \n\t\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/patient/html/patient_make_appointment_without_login.html":
/***/ (function(module, exports) {

module.exports = "\n\n<h2> Book Appointment</h2>\n\n<mat-horizontal-stepper>\n\n\n<mat-step>\n        <ng-template matStepLabel>Choose Date And Time</ng-template>\n<form [formGroup]=\"chooseDateTimeForm\">\n    \n    <div class=\"form-group\">\n\t\n\t\t<mat-form-field>\n\t\t\n\t\t\t<input matInput  (dateChange)=\"dateSelected($event)\" [min]='currentDate'  [matDatepickerFilter]=\"holidayFilter\"  formControlName=\"appointmentDate\"  [matDatepicker]=\"picker\" placeholder=\"Select A day\">\n\t\t\t  \n\t\t\t  \n\t\t\t  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n\t\t\t  \n\t\t\t  <mat-datepicker touchUi='true' #picker></mat-datepicker>\n\t\t\n\t\t\t<mat-hint> Enter Date in (MM/DD/YYYY)</mat-hint>\n\t<mat-error *ngIf=\"appointmentDate.hasError('required')\">Please Select A Date</mat-error>\n\t<mat-error *ngIf=\"appointmentDate.hasError('matDatepickerFilter')\"> This day is a holiday </mat-error>\n\t\t</mat-form-field>\n   \n\t\n\t</div>\n\n\n\t<div class=\"form-group\">\n\t\n\t\t<mat-form-field>\n\t\t\n\t\t\t<mat-select placeholder=\"Choose a Time\"  formControlName=\"appointmentTime\" (change)=\"getAppointmentLeft()\">\n\t\t\t\n\t\t\t\n\t\t\t <div *ngFor=\"let hour of hours\" >\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t<mat-option  [value]=\"hour\" >\n\t\t\t\t\t\t{{commonService.getTimeLabel(hour.startAt)}} To \n\t\t\t\t\t\t{{commonService.getTimeLabel(hour.closeAt)}}\n\t\t\t\t\t</mat-option>\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t</div>\t\t\n\t\t\t</mat-select>\n\t\t\t\n\t\t\t<mat-error *ngIf=\"appointmentTime.hasError('required')\"> Please Select A Time</mat-error>\n\t\t\n\t\t</mat-form-field>\n\t</div>\t\n\t\n\t\n\t<div class=\"form-group\">\n \t\t\t<button mat-raised-button  matStepperNext color=\"primary\">Next</button>\n \t\t</div>\n\n</form>\n\n</mat-step>\n\n\n<mat-step>\n\n        <ng-template matStepLabel>Enter Your Mobile No</ng-template>\n    \n        <form [formGroup]=\"mobileNoForm\">\n\n            <mat-form-field>\n\t\t\t\t<input matInput type=\"text\" placeholder=\"Enter Moblie No \" formControlName=\"mobileNo\">\n\t\t\t\t\n            </mat-form-field>\n\n        </form>\n\n    \n\n        <button mat-raised-button matStepperPrevious>Previous</button>\n        <button mat-raised-button matStepperNext (click)=\"showMobile()\" >Next</button>\n    \n\n</mat-step>\n\n<mat-step>\n\n\t<ng-template matStepLabel>Verify Mobile No</ng-template>\n\n\t<form [formGroup]=\"mobileNoForm\">\n\n\t\t<mat-form-field>\n\t\t\t<input matInput type=\"text\" placeholder=\"Enter Moblie No \" formControlName=\"mobileNo\">\n\t\t\t\n\t\t</mat-form-field>\n\n\t\t\n\t</form>\n\t\n\n</mat-step>\n\n<mat-step>\n        <ng-template matStepLabel>Pay </ng-template>\n        \n        <button mat-raised-button color=\"primary\" id=\"rzp-button1\" >Pay Now </button>\n\n\n    \n        <div class=\"form-group\">\n            <button mat-raised-button matStepperPrevious color=\"accent\">Previous</button>\n            <button mat-raised-button matStepperNext color=\"primary\">Next</button>\n        </div>\n    </mat-step>\n    \n    <mat-step>\n        <ng-template matStepLabel> Done </ng-template>\n    \n        <div class=\"form-group\">\n        \n            <button mat-raised-button matStepperPrevious color=\"accent\">Previous</button>\n            <button mat-raised-button matStepperNext color=\"primary\">Next</button>\n        </div>\n    </mat-step>\n\n\n<mat-horizontal-stepper>\n"

/***/ }),

/***/ "../../../../../src/app/patient/html/patient_profile.html":
/***/ (function(module, exports) {

module.exports = "<h2> this is the date </h2>\n\n"

/***/ }),

/***/ "../../../../../src/app/patient/html/patient_signup.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-center\">\n\n<h2> First Complete Your SignUp</h2>\n\t\t\n<mat-vertical-stepper >\n\n\n  <mat-step [stepControl]=\"patientSignupForm\">\n    \n    <ng-template matStepLabel> Personal Information:</ng-template>\n    \n    <form [formGroup]=\"patientSignupForm\" (ngSubmit)=\"submit()\">\n\t\n\t<div class=\"form-group\">\n\t\n\t\t<mat-form-field>\n\t\t\t\n\t\t\t<input matInput type=\"text\" name=\"name\" placeholder=\"Name\" formControlName=\"name\"> \n\t\t\t<mat-error *ngIf=\"name.hasError('required')\">Name is <strong>required</strong></mat-error>\n\t\t\n\t\t</mat-form-field>\n\t\n\t</div>\n\t\n<!-- \t<div class=\"form-group\"> -->\n<!-- \t\t<mat-form-field> -->\n<!-- \t\t\t<span matPrefix>+91 &nbsp;</span> -->\n<!-- \t\t\t<input matInput type=\"text\" name=\"phoneno\" placeholder=\"Phone No\" formControlName=\"phoneno\" > -->\n<!-- \t\t\t<mat-error *ngIf=\"phoneno.hasError('minlength')||phoneno.hasError('maxlength')\"> -->\n<!-- \t\t\tPhone No should be of 10 digit</mat-error> -->\n<!-- \t\t\t<mat-error *ngIf=\"phoneno.hasError('required')\">Phone No is <strong>required</strong></mat-error> -->\n\t\t\n<!-- \t\t</mat-form-field> -->\n\t\n<!-- \t</div> -->\n\t\n\t<div class=\"form-group\">\n\t\t\n\t\t<mat-form-field>\n\t\t\t  \n\t\t\t  <input matInput [min]='oldestDate' [max]=\"currentDate\" formControlName=\"dateOfBirth\"  [matDatepicker]=\"picker\" placeholder=\"Date Of Birth\">\n\t\t\t  \n\t\t\t  \n\t\t\t  <mat-datepicker-toggle matPrefix [for]=\"picker\"></mat-datepicker-toggle>\n\t\t\t  \n\t\t\t  <mat-datepicker touchUi=\"true\" #picker></mat-datepicker>\n\t\t\t  \n\t\t\t  <mat-hint align=\"start\">Enter Date in mm/dd/yyyy Format</mat-hint>\n\t\t\t  \n\t\t\t  \n\t\t\t  <mat-error *ngIf=\"dateOfBirth.hasError('matDatepickerMax')\">You Can't Born in Future</mat-error>\n\t\t\t  \n\t\t\t  <mat-error *ngIf=\"dateOfBirth.hasError('matDatepickerMin')\">You Are too Old</mat-error>\n\t\t\t  \n\t\t\t  <mat-error *ngIf=\"dateOfBirth.hasError('required')\">Date of Birth is <strong>required</strong>\n\t\t\t  And in (mm/dd/yyyy) format\n\t\t\t  </mat-error>\n\t\t\n\t\t</mat-form-field>\n\t\t\t\n\t</div>\n\t\n\t\n\t<div class=\"form-group\">\n\t\n\t\t<mat-form-field>\n\t\t\n\t\t\t\t<mat-select placeholder=\"If You Have any PreExisting Condition\" multiple=\"true\" formControlName=\"medcondition\">\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t<mat-option *ngFor=\"let condition of medConditions\" [value]=\"condition\">\n\t\t\t\t\t\n\t\t\t\t\t{{condition.diseaseName}}</mat-option>\n\t\t\t\t\t\n\t\t\t\t</mat-select>\n\t\t\t\t\n\t\t\t\t\n\t\t</mat-form-field>\n\t\n\t\n\t</div>\n\t\n\t\n\t\n\t\n\t<div class=\"form-group\">\n\t\n\t\t<button mat-raised-button color=\"primary\" type=\"button\" matStepperNext>Next</button>\n\t\n\t\n\t</div>\n\n</form>\n  </mat-step>\n  <mat-step [stepControl]=\"addressForm\">\n   \n   <ng-template matStepLabel>Contact Information</ng-template>\n\t<address-form (changed)=\"addressSubmited($event)\"></address-form>\n\t\n\t<button mat-raised-button color=\"accent\" matStepperPrevious>Previous</button>\n\t<button mat-raised-button color=\"primary\" matStepperNext>Next</button>\n  </mat-step>\n  \n  <mat-step>\n  \t<ng-template matStepLabel>Review And Submit</ng-template>\n  \t\n  \t<p class=\"text-capitalize\"><strong>Name:</strong>  {{patient.name}}</p>\n  \t<p><strong>Date Of Birth:</strong> {{patient.dateOfBirth|date:\"mediumDate\"}}</p>\n  \t<p><strong>PreExisting Conditions:</strong></p>\n  \t<p *ngFor=\"let disease of patient.diseases\"> {{disease.diseaseName}}</p>\n  \t<p><strong>Address:</strong></p>\n  \t\n  \t<p>{{patient.address.addressLineOne}}</p>\n  \t<p>{{patient.address.addressLineTwo}}</p>\n  \t<p>{{patient.address.city}}</p>\n  \t<p>{{patient.address.phoneNo}}</p>\n  \t\n  \t<h4 *ngIf=\"result.result\" class=\"text-capitalize text-success\">{{result.message}}</h4>\n\t<h4 *ngIf=\"result.error\"  class=\"text-capitalize text-danger\">{{result.message}}</h4>\n\t\n\t\n  \t<button mat-raised-button color=\"accent\" type=\"button\" matStepperPrevious>Previous</button>\n  \t<button mat-raised-button color=\"primary\" type=\"button\"  (click)=\"submit()\">Submit</button>\n  </mat-step>\n</mat-vertical-stepper>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/patient/html/search_doc_using_docid.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<h2 class=\"text-center\">Search Using DocId</h2>\n\n<form [formGroup]=\"searchDocForm\" (ngSubmit)=\"Submit()\">\n\n\t<h4 *ngIf=\"result.error\" class=\"text-capitalize text-danger\">{{result.message}}</h4>\n\t\n\t<div class=\"form-group\">\n\t\t<mat-form-field>\n\t\t<input matInput formControlName=\"docId\" placeholder=\"Enter The Doctor Id\" type=\"text\">\n\t\t</mat-form-field>\n\t\t\n\t</div>\n\t\n\t<button mat-raised-button color=\"primary\" type=\"submit\" >Search</button>\n\n</form>\n\n\n<div class=\"content-center\" *ngIf=\"showDoc\">\n\n\n\n\t\t<mat-card>\n\n\t<mat-card-header>\n\t\n\t\t<mat-card-title>\n\t\t\n\t\t<h4 class=\"panel-heading\">Name : {{doctor.name}}</h4>\n\t\t\n\t\t</mat-card-title>\n\t\n\t</mat-card-header>\n\t\n\t<mat-card-content>\n\t\n\t<h4>About:</h4>\n\t<p>{{doctor.about}}</p>\n\t\n\t\n\t</mat-card-content>\n\t\n\t<mat-card-actions>\n\t\n\t<button mat-button (click)=\"showDoctor(doctor.docId)\">Check Profile</button>\n\t\n\t\n\t</mat-card-actions>\n\n\n</mat-card>\n\n\n\n\n\t\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/patient/html/search_doc_using_docname.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<h2 class=\"text-center\">Search Using Doctor Name</h2>\n\n\n<form [formGroup]=\"searchUsingDocNameForm\" (ngSubmit)=\"submit()\">\n\n<div class=\"form-group\">\n\n\t<mat-form-field>\n\t\n\t\t<input matInput formControlName=\"docName\" placeholder=\"Enter the name \" type=\"text\">\n\t\t\n\t</mat-form-field>\n\n\t<mat-form-field>\n\t\n\t\t<mat-select formControlName=\"state\" placeholder=\"Select A State\" (change)=\"stateSelected()\">\n\t\t\n\t\t\t<mat-option *ngFor=\"let state of states\" [value]=\"state.stateId\">{{state.stateName}}</mat-option>\n\t\t\n\t\t</mat-select>\n\t\n\t</mat-form-field>\n\t\n\t<mat-form-field>\n\t\n\t\t<mat-select formControlName=\"city\" placeholder=\"Select A City\" >\n\t\t\t\t\n\t\t\t<mat-option *ngFor=\"let city of cities\" [value]=\"city.cityName\">{{city.cityName}}</mat-option>\n\t\t\t\n\t\t</mat-select>\n\t\n\t</mat-form-field>\n\t\n\t<div class=\"form-group\">\n\t\n\t\t<button mat-raised-button color=\"primary\" type=\"submit\"> Submit</button>\n\t</div>\n\n</div>\n\n\n</form>\n\n\n\n<div  class=\"grid-container\" *ngIf=\"showDoc\" >\n\n\n<div  *ngFor=\"let doctor of doctorList\">\n\n<mat-card>\n\n\t<mat-card-header>\n\t\n\t\t<mat-card-title>\n\t\t\n\t\t\t<h4>Name : {{doctor.name}}</h4>\n\t\t</mat-card-title>\n\t\n\t</mat-card-header>\n\t\n\t\n\t<mat-card-content>\n\t\n\t\n\t\t<h4>About:</h4>\n\t<p>{{doctor.about}}</p>\n\t\n\t\n\t</mat-card-content>\n\t\n\t\n\t<mat-card-actions>\n\t\n\t<button mat-button (click)=\"showDoctor(doctor.docId)\">Check Profile</button>\n\n\t<button mat-button color=\"accent\" (click)=\"addDoctor(doctor)\">Add Into List</button>\n\t\n\t<button mat-button (click)=\"makeAppointment(doctor.docId)\">Make Appointment</button>\n\t\n\t</mat-card-actions>\n\t\n</mat-card>\n\n</div>\n\t\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/patient/html/search_doc_using_speciality.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\">Search Doc Using Speciality</h2>\n\n\n<form  [formGroup]=\"searchDocUsingSpecialityForm\" (ngSubmit)=\"submit()\" >\n\n\n\n\t<div class=\"form-group\">\n\t\t\n\t\t<mat-form-field>\n\t\t\n\t\t\t<mat-select placeholder=\"Select Speciality\" formControlName=\"speciality\">\n\t\t\t\t\n\t\t\t\t<mat-option *ngFor=\"let speciality of specialities\" [value]=\"speciality.specialityName\">{{speciality.specialityName}}</mat-option>\n\t\t\t\n\t\t\t</mat-select>\n\t\t\t\n\t\t</mat-form-field>\n\t\n\t</div>\n\t\n\t<div class=\"form-group\">\n\t\t\n\t\t<mat-form-field>\n\t\t\n\t\t\t<mat-select placeholder=\"Select State\" formControlName=\"state\" (change)=\"stateSelected()\">\n\t\t\t\t\n\t\t\t\t<mat-option *ngFor=\"let state of states\" [value]=\"state.stateId\">{{state.stateName}}</mat-option>\n\t\t\t\n\t\t\t</mat-select>\n\t\t\t\n\t\t</mat-form-field>\n\n\t\n\t</div>\n\t\n\t<div class=\"form-group\">\n\t\t\n\t\t<mat-form-field>\n\t\t\n\t\t\t<mat-select placeholder=\"Select City\" formControlName=\"city\">\n\t\t\t\t\n\t\t\t\t<mat-option *ngFor=\"let city of cities\" [value]=\"city.cityName\">{{city.cityName}}</mat-option>\n\t\t\t\n\t\t\t</mat-select>\n\t\t\t\n\t\t</mat-form-field>\n\t\n\t</div>\n\t\n\t\n\t<div class=\"form-group\">\n\t\n\t\t<button mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\n\t</div>\n\n\n\n\n\n\n</form>\n\n\n\n<div *ngIf=\"showDoc\" >\n\n<div class=\"grid-container\">\n\n<div  *ngFor=\"let doctor of doctorList\">\n\n<mat-card>\n\n\t<mat-card-header>\n\t\n\t\t<mat-card-title>\n\t\t\n\t\t\t<h4>Name : {{doctor.name}}</h4>\n\t\t</mat-card-title>\n\t\n\t</mat-card-header>\n\t\n\t\n\t<mat-card-content>\n\t\n\t\n\t\t<h4>About:</h4>\n\t<p>{{doctor.about}}</p>\n\t\n\t\n\t</mat-card-content>\n\t\n\t\n\t<mat-card-actions>\n\t\n\t<button mat-button (click)=\"showDoctor(doctor.docId)\">Check Profile</button>\n\n\t<button mat-button color=\"accent\" (click)=\"addDoctor(doctor)\">Add Into List</button>\n\t\n\t<button mat-button (click)=\"makeAppointment(doctor.docId)\">Make Appointment</button>\n\t\n\t</mat-card-actions>\n\t\n\n\n\n</mat-card>\n\n\n\t\n\t\n\n</div>\n\n</div>\n\t\n\t\n\t\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/patient/html/search_using_city_speciality.html":
/***/ (function(module, exports) {

module.exports = "\n<h2 class=\"text-center\"> Search Doctor Around You </h2>\n\n<form [formGroup]=\"searchDocUsingCitySpeciality\" (ngSubmit)=\"submit()\">\n\n<mat-grid-list cols=\"4\" rowHeight=\"100px\">\n\n\n\n\n<mat-grid-tile colspan=\"2\">\n\n <mat-form-field >\n\n     <input matInput placeholder=\"City\" formControlName=\"city\" role=\"listitem\">\n\n </mat-form-field>\n\n\n </mat-grid-tile>\n\n\n<mat-grid-tile colspan=\"1\">\n\n<mat-form-field>\n    <mat-select placeholder=\"Doctor Type\" formControlName=\"speciality\">\n        <mat-option *ngFor=\"let speciality of specialities\" [value]=\"speciality.specialityName\">\n    \n            {{speciality.specialityName}}\n      </mat-option>\n      </mat-select>\n</mat-form-field>\n\n\n</mat-grid-tile>\n\n\n<mat-grid-tile colspan=\"1\"> <button mat-raised-button color=\"primary\" type=\"submit\">Submit</button></mat-grid-tile>\n\n\n\n\n\n</mat-grid-list>\n\n</form>\n\n\n\n<div  class=\"grid-container\" *ngIf=\"showDoc\" >\n\n\n    <div  *ngFor=\"let doctor of doctorList\">\n    \n    <mat-card>\n    \n        <mat-card-header>\n        \n            <mat-card-title>\n            \n                <h4>Name : {{doctor.name}}</h4>\n            </mat-card-title>\n        \n        </mat-card-header>\n        \n        \n        <mat-card-content>\n        \n        \n            <h4>About:</h4>\n        <p>{{doctor.about}}</p>\n        \n        \n        </mat-card-content>\n        \n        \n        <mat-card-actions>\n        \n        <button mat-button (click)=\"showDoctor(doctor.docId)\">Check Profile</button>\n\n        \n        <button mat-button (click)=\"makeAppointment(doctor.docId)\">Make Appointment</button>\n        \n        </mat-card-actions>\n        \n    </mat-card>\n    \n    </div>\n        \n    \n    \n    </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/patient/html/show_doctor_added.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\">Show Doctor Added List</h2>\n\n\n\n\n<div class=\"grid-container\">\n\n<div  *ngFor=\"let doctor of doctorList\">\n\n<mat-card>\n\n\n<mat-card-header>\n\n\n\n\n\n\t<mat-card-title>\n\t\n\t<h4>Name : {{doctor.name}}</h4>\n\t\n\t</mat-card-title>\n\n\n</mat-card-header>\n\n\n\t<mat-card-content>\n\t\n\t\n\t\n\t\t\t\t\t<h4>Phone No :</h4>\n\t\t\t\t\t<p>{{doctor.phoneno}}</p>\n\t\n\t\n\t\n\t\n\t</mat-card-content>\n\t\n\t\n\t<mat-card-actions>\n\t\n\t\n\t\t\t<button mat-button (click)=\"showDocProfile(doctor.docId)\">Check Profile</button>\n\t\t\t\n\t\t\n\t\t\t<button mat-button color=\"accent\" (click)=\"deleteDoctor(doctor)\">Delete</button>\n\t\n\t\n\t</mat-card-actions>\n\t\n\n\n\n\n\n\n\n</mat-card>\n\n</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/patient/make_appointment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakeAppointment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dr_doctor_service__ = __webpack_require__("../../../../../src/app/dr/doctor_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dr_doctor__ = __webpack_require__("../../../../../src/app/dr/doctor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_common_service__ = __webpack_require__("../../../../../src/app/common/common_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__patient_service__ = __webpack_require__("../../../../../src/app/patient/patient_service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MakeAppointment = /** @class */ (function () {
    function MakeAppointment(acRoute, doctorService, formBuilder, commonService, patientService, matSnackBar, router) {
        this.acRoute = acRoute;
        this.doctorService = doctorService;
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.patientService = patientService;
        this.matSnackBar = matSnackBar;
        this.router = router;
        this.doctor = new __WEBPACK_IMPORTED_MODULE_3__dr_doctor__["a" /* Doctor */]();
        this.docName = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]({ value: "test", disabled: true }, []);
        this.appointmentDate = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]('', []);
        this.appointmentTime = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]('', []);
        this.currentDate = new Date();
        this.hours = new Array();
        this.workingDays = new Array();
        this.holidays = new Array();
    }
    MakeAppointment.prototype.ngOnInit = function () {
        var _this = this;
        this.patientService.isSignupComplete();
        this.appointmentForm = this.formBuilder.group({
            "docName": this.docName,
            "appointmentDate": this.appointmentDate,
            "appointmentTime": this.appointmentTime
        });
        this.acRoute.params.subscribe(function (data) {
            if (data != undefined) {
                _this.getDoctor(data.docId);
            }
        });
    };
    MakeAppointment.prototype.getDoctor = function (docId) {
        var _this = this;
        this.doctorService.getDocUsingId(docId).subscribe(function (data) {
            if (data != undefined) {
                _this.doctor = data.json();
                _this.docName.setValue(_this.doctor.name);
                _this.workingDays = _this.doctor.workingDays;
                _this.holidays = _this.doctor.holidays;
                //filter value is changed whenever the doctor's value is changed
                _this.holidayFilter = function (selectedDate) {
                    var day = selectedDate.getDay();
                    var result = false;
                    if (_this.workingDays) {
                        for (var i = 0; i < _this.workingDays.length; i++) {
                            if (day == _this.workingDays[i].dayId) {
                                result = true;
                            }
                        }
                    }
                    if (_this.holidays) {
                        for (var i = 0; i < _this.holidays.length; i++) {
                            var holiday = _this.holidays[i];
                            if (selectedDate.getTime() == parseInt(holiday.toString()) * 1000) {
                                result = false;
                            }
                        }
                    }
                    return result;
                };
            }
        });
    };
    /** dateSelected method execute when user select the date and change the time slots available at that day*/
    MakeAppointment.prototype.dateSelected = function (event) {
        for (var i = 0; i < this.workingDays.length; i++) {
            if (this.workingDays[i].dayId == event.value.getDay()) {
                this.hours = this.workingDays[i].hours;
            }
        }
    };
    MakeAppointment.prototype.getAppointmentLeft = function () {
        var _this = this;
        this.patientService.getAppointmentBooked(this.doctor.docId, this.appointmentDate.value, this.appointmentTime.value)
            .subscribe(function (data) {
            if (data != undefined) {
                console.log(data.json());
                var appointment = data.json();
                var appointmentLeft = _this.appointmentTime.value.maxPatientNo - appointment;
                if (appointmentLeft > 0) {
                    _this.matSnackBar.open("Appointment Left " + appointmentLeft, "Hurry", {
                        duration: 3000
                    });
                }
                else {
                    _this.matSnackBar.open("Appointment Full Choose Another Date & Time", "Sorry", {
                        duration: 3000
                    });
                }
            }
        });
    };
    MakeAppointment = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/patient/html/make_appointment.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__dr_doctor_service__["a" /* DoctorService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_6__common_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_7__patient_service__["a" /* PatientService */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["y" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], MakeAppointment);
    return MakeAppointment;
}());



/***/ }),

/***/ "../../../../../src/app/patient/patient.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Patient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_address__ = __webpack_require__("../../../../../src/app/model/address.ts");

var Patient = /** @class */ (function () {
    function Patient() {
        this.diseases = new Array();
        this.dateOfBirth = new Date();
        this.address = new __WEBPACK_IMPORTED_MODULE_0__model_address__["a" /* Address */]();
    }
    return Patient;
}());



/***/ }),

/***/ "../../../../../src/app/patient/patient_add_address.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientAddAddress; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PatientAddAddress = /** @class */ (function () {
    function PatientAddAddress() {
    }
    PatientAddAddress = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "patient-add-address",
            template: __webpack_require__("../../../../../src/app/patient/html/patient_add_address.html")
        })
    ], PatientAddAddress);
    return PatientAddAddress;
}());



/***/ }),

/***/ "../../../../../src/app/patient/patient_home.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientHome; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_user_service__ = __webpack_require__("../../../../../src/app/user/user_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PatientHome = /** @class */ (function () {
    function PatientHome(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    PatientHome.prototype.logOut = function () {
        var _this = this;
        this.userService.userLogout().subscribe(function (data) {
            if (data != undefined) {
                if (data.status == 200) {
                    _this.router.navigateByUrl("/");
                }
            }
        });
    };
    PatientHome = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "patient-home",
            template: __webpack_require__("../../../../../src/app/patient/html/patient_home.html"),
            styles: [__webpack_require__("../../../../../src/app/patient/css/patient_home.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], PatientHome);
    return PatientHome;
}());



/***/ }),

/***/ "../../../../../src/app/patient/patient_make_appointment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientMakeAppointment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patient__ = __webpack_require__("../../../../../src/app/patient/patient.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_common_service__ = __webpack_require__("../../../../../src/app/common/common_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__patient_service__ = __webpack_require__("../../../../../src/app/patient/patient_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dr_doctor_service__ = __webpack_require__("../../../../../src/app/dr/doctor_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromEvent.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var PatientMakeAppointment = /** @class */ (function () {
    function PatientMakeAppointment(formBuilder, patientService, commonService, doctorService, matSnackBar, router) {
        this.formBuilder = formBuilder;
        this.patientService = patientService;
        this.commonService = commonService;
        this.doctorService = doctorService;
        this.matSnackBar = matSnackBar;
        this.router = router;
        this.RELOAD_TOP_SCROLL_POSITION = 6;
        this.pageNo = 0;
        this.pageSize = 10;
        this.patient = new __WEBPACK_IMPORTED_MODULE_2__patient__["a" /* Patient */]();
        this.showAppointmentForm = false;
        this.currentDate = new Date();
        this.hours = new Array();
        this.workingDays = new Array();
        this.doctors = new Array();
        this.timeSlots = new Array();
        this.holidays = new Array();
        // doctor form control field  
        this.selectedDoc = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required
        ]);
        // time slot for the appointment 
        this.appointmentTime = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required
        ]);
        //appointment date form control 
        this.appointmentDate = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required
        ]);
    }
    /* this function execute when user select a dr from the list and then
     * it populate the list of time slots for that perticular dr in the
     * timeSlots variable */
    PatientMakeAppointment.prototype.drSelected = function () {
        var _this = this;
        var doc = this.appointmentForm.value.selectedDoc;
        this.holidays = doc.holidays;
        this.workingDays = doc.workingDays;
        console.log(doc);
        //filter value is changed whenever the doctor's value is changed
        this.holidayFilter = function (selectedDate) {
            var day = selectedDate.getDay();
            var result = false;
            if (_this.workingDays) {
                for (var i = 0; i < _this.workingDays.length; i++) {
                    if (day == _this.workingDays[i].dayId) {
                        result = true;
                    }
                }
            }
            if (_this.holidays) {
                for (var i = 0; i < _this.holidays.length; i++) {
                    var holiday = _this.holidays[i];
                    if (selectedDate.getTime() == parseInt(holiday.toString()) * 1000) {
                        console.log(holiday);
                        console.log(selectedDate);
                        result = false;
                    }
                }
            }
            return result;
        };
        console.log(this.holidays);
    };
    /** dateSelected method execute when user select the date and change the time slots available at that day*/
    PatientMakeAppointment.prototype.dateSelected = function (event) {
        for (var i = 0; i < this.workingDays.length; i++) {
            if (this.workingDays[i].dayId == event.value.getDay()) {
                this.hours = this.workingDays[i].hours;
            }
        }
    };
    PatientMakeAppointment.prototype.ngOnInit = function () {
        var _this = this;
        this.patientService.getPatient().subscribe(function (data) {
            if (data != undefined) {
                if (data["_body"] == "") {
                    _this.router.navigateByUrl("/patient/home/patient/signup");
                }
                else {
                    _this.patient.name = data.json().name;
                }
            }
        });
        if (window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(function (position) {
                console.log(position);
            });
        }
        this.getDocForPatient(this.pageNo, this.pageSize);
        this.appointmentForm = this.formBuilder.group({
            selectedDoc: this.selectedDoc,
            appointmentTime: this.appointmentTime,
            appointmentDate: this.appointmentDate
        });
        this.docSelect.onOpen.subscribe(function () { return _this.registerPanelScrollEvent(); });
    };
    PatientMakeAppointment.prototype.submit = function () {
        console.log(this.appointmentForm.value);
    };
    PatientMakeAppointment.prototype.getDocForPatient = function (pageNo, pageSize) {
        var _this = this;
        this.patientService.getDocForPatient(pageNo, pageSize).subscribe(function (data) {
            if (data != undefined) {
                _this.doctors = _this.doctors.concat(data.json().content);
                _this.totalPages = data.json().totalPages;
                console.log(data.json().content);
                console.log(_this.doctors);
            }
        });
    };
    PatientMakeAppointment.prototype.docHover = function (dr) {
        console.log(dr);
    };
    PatientMakeAppointment.prototype.getDocDetail = function (i) {
        var doc = this.doctors[i];
        return doc.addrLineOne;
    };
    PatientMakeAppointment.prototype.getAppointmentLeft = function () {
        var _this = this;
        this.patientService.getAppointmentBooked(this.selectedDoc.value.docId, this.appointmentDate.value, this.appointmentTime.value)
            .subscribe(function (data) {
            if (data != undefined) {
                var appointment = data.json();
                console.log(data);
                var appointmentLeft = _this.appointmentTime.value.maxPatientNo - appointment;
                if (appointmentLeft > 0) {
                    _this.matSnackBar.open("Appointment Left " + appointmentLeft, "Hurry", {
                        duration: 3000
                    });
                }
                else {
                    _this.matSnackBar.open("Appointment Full Choose Another Time", "Sorry", {
                        duration: 3000
                    });
                }
            }
        });
    };
    PatientMakeAppointment.prototype.getNewDoc = function () {
        console.log(this.docSelect);
    };
    PatientMakeAppointment.prototype.registerPanelScrollEvent = function () {
        var _this = this;
        var panel = this.docSelect.panel.nativeElement;
        panel.addEventListener('scroll', function (event) { return _this.loadAllOnScroll(event); });
    };
    PatientMakeAppointment.prototype.loadAllOnScroll = function (event) {
        if (event.target.scrollTop > this.RELOAD_TOP_SCROLL_POSITION) {
            if (this.pageNo < this.totalPages) {
                this.pageNo = this.pageNo + 1;
                this.getDocForPatient(this.pageNo, this.pageSize);
            }
        }
    };
    /**  pay(){
         
              var options = {
                  "key": "rzp_test_NsNIDbh9MpTQTF",
                  "amount": "2000", // 2000 paise = INR 20
                  "name": "Edr",
                  "description": "Purchase Description",
                  "image": "/your_logo.png",
                  "handler": function (response){
                      console.log("test1");
                      this.paymentSucessfull(response);
                      console.log("test");
                  },
                  "prefill": {
                      "name": this.patient.name,
                      "contact": "9996200223"
                  },
                  "notes": {
                      "address": "Hello World"
                  },
                  "theme": {
                      "color": "#F37254"
                  }
              };
          var rzp1 = new Razorpay (options);
  
  
              rzp1.open();
          
  
      }
  
  */
    PatientMakeAppointment.prototype.paymentSucessfull = function (response) {
        console.log(response);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])("docSelect"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_material__["u" /* MatSelect */])
    ], PatientMakeAppointment.prototype, "docSelect", void 0);
    PatientMakeAppointment = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "patient-make-appointment",
            template: __webpack_require__("../../../../../src/app/patient/html/patient_make_appointment.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__patient_service__["a" /* PatientService */], __WEBPACK_IMPORTED_MODULE_3__common_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_9__dr_doctor_service__["a" /* DoctorService */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["y" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* Router */]])
    ], PatientMakeAppointment);
    return PatientMakeAppointment;
}());



/***/ }),

/***/ "../../../../../src/app/patient/patient_make_appointment_without_login.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientMakeAppointmentWithoutLogin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dr_doctor_service__ = __webpack_require__("../../../../../src/app/dr/doctor_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__patient_service__ = __webpack_require__("../../../../../src/app/patient/patient_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_common_service__ = __webpack_require__("../../../../../src/app/common/common_service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PatientMakeAppointmentWithoutLogin = /** @class */ (function () {
    function PatientMakeAppointmentWithoutLogin(/**@Inject( MAT_DIALOG_DATA ) public data: any ,*/ doctorService, formBuilder, matSnackBar, patientService, commonService) {
        var _this = this;
        this.doctorService = doctorService;
        this.formBuilder = formBuilder;
        this.matSnackBar = matSnackBar;
        this.patientService = patientService;
        this.commonService = commonService;
        this.mobileNo = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]("", []);
        this.appointmentDate = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]("", []);
        this.appointmentTime = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]("", []);
        this.docId = "lalitdoctor@gmail.com";
        this.hours = new Array();
        this.workingDays = new Array();
        this.holidays = new Array();
        this.currentDate = new Date();
        this.holidayFilter = function (selectedDate) {
            var day = selectedDate.getDay();
            var result = false;
            if (_this.workingDays) {
                for (var i = 0; i < _this.workingDays.length; i++) {
                    if (day == _this.workingDays[i].dayId) {
                        result = true;
                    }
                }
            }
            if (_this.holidays) {
                for (var i = 0; i < _this.holidays.length; i++) {
                    var holiday = _this.holidays[i];
                    if (selectedDate.getTime() == parseInt(holiday.toString()) * 1000) {
                        console.log(holiday);
                        console.log(selectedDate);
                        result = false;
                    }
                }
            }
            return result;
        };
    }
    PatientMakeAppointmentWithoutLogin.prototype.ngOnInit = function () {
        // this.docId=this.data.docId;
        var _this = this;
        this.doctorService.getDocUsingId(this.docId).subscribe(function (data) {
            if (data != undefined) {
                _this.doctor = data.json();
                _this.workingDays = _this.doctor.workingDays;
                _this.holidays = _this.doctor.holidays;
            }
        });
        this.chooseDateTimeForm = this.formBuilder.group({
            "appointmentDate": this.appointmentDate,
            "appointmentTime": this.appointmentTime
        });
        this.mobileNoForm = this.formBuilder.group({
            "mobileNo": this.mobileNo
        });
    };
    /** dateSelected method execute when user select the date and change the time slots available at that day*/
    PatientMakeAppointmentWithoutLogin.prototype.dateSelected = function (event) {
        for (var i = 0; i < this.workingDays.length; i++) {
            if (this.workingDays[i].dayId == event.value.getDay()) {
                this.hours = this.workingDays[i].hours;
            }
        }
    };
    PatientMakeAppointmentWithoutLogin.prototype.getAppointmentLeft = function () {
        var _this = this;
        this.patientService.getAppointmentBooked(this.doctor.docId, this.appointmentDate.value, this.appointmentTime.value)
            .subscribe(function (data) {
            if (data != undefined) {
                var appointment = data.json();
                console.log(data);
                var appointmentLeft = _this.appointmentTime.value.maxPatientNo - appointment;
                if (appointmentLeft > 0) {
                    _this.matSnackBar.open("Appointment Left " + appointmentLeft, "Hurry", {
                        duration: 3000
                    });
                }
                else {
                    _this.matSnackBar.open("Appointment Full Choose Another Time", "Sorry", {
                        duration: 3000
                    });
                }
            }
        });
    };
    PatientMakeAppointmentWithoutLogin.prototype.showMobile = function () {
        console.log(this.mobileNo.value);
    };
    PatientMakeAppointmentWithoutLogin = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "patient-make-free-appointment",
            template: __webpack_require__("../../../../../src/app/patient/html/patient_make_appointment_without_login.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dr_doctor_service__["a" /* DoctorService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["y" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_4__patient_service__["a" /* PatientService */], __WEBPACK_IMPORTED_MODULE_5__common_common_service__["a" /* CommonService */]])
    ], PatientMakeAppointmentWithoutLogin);
    return PatientMakeAppointmentWithoutLogin;
}());



/***/ }),

/***/ "../../../../../src/app/patient/patient_module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__patient_routing_module__ = __webpack_require__("../../../../../src/app/patient/patient_routing_module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patient_signup__ = __webpack_require__("../../../../../src/app/patient/patient_signup.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_material_module__ = __webpack_require__("../../../../../src/app/material/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__patient_home__ = __webpack_require__("../../../../../src/app/patient/patient_home.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__patient_service__ = __webpack_require__("../../../../../src/app/patient/patient_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__patient_profile__ = __webpack_require__("../../../../../src/app/patient/patient_profile.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__patient_make_appointment__ = __webpack_require__("../../../../../src/app/patient/patient_make_appointment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__patient_add_address__ = __webpack_require__("../../../../../src/app/patient/patient_add_address.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_common_module__ = __webpack_require__("../../../../../src/app/common/common_module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__search_doc_using_docid__ = __webpack_require__("../../../../../src/app/patient/search_doc_using_docid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__search_doc_using_docname__ = __webpack_require__("../../../../../src/app/patient/search_doc_using_docname.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__search_doc_using_speciality__ = __webpack_require__("../../../../../src/app/patient/search_doc_using_speciality.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__show_doctors_added__ = __webpack_require__("../../../../../src/app/patient/show_doctors_added.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__add_doctor__ = __webpack_require__("../../../../../src/app/patient/add_doctor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__appointment_with_added_doctor__ = __webpack_require__("../../../../../src/app/patient/appointment_with_added_doctor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_cdk_scrolling__ = __webpack_require__("../../../cdk/esm5/scrolling.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__make_appointment__ = __webpack_require__("../../../../../src/app/patient/make_appointment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__patient_search_doc_using_city_speciality__ = __webpack_require__("../../../../../src/app/patient/patient_search_doc_using_city_speciality.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__patient_make_appointment_without_login__ = __webpack_require__("../../../../../src/app/patient/patient_make_appointment_without_login.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var PatientModule = /** @class */ (function () {
    function PatientModule() {
    }
    PatientModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__patient_routing_module__["a" /* PatientRoutingModule */], __WEBPACK_IMPORTED_MODULE_3__material_material_module__["a" /* MaterialModule */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_11__common_common_module__["a" /* AppCommonModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_cdk_scrolling__["a" /* ScrollDispatchModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__patient_signup__["a" /* PatientSignup */], __WEBPACK_IMPORTED_MODULE_6__patient_home__["a" /* PatientHome */], __WEBPACK_IMPORTED_MODULE_8__patient_profile__["a" /* PatientProfile */], __WEBPACK_IMPORTED_MODULE_9__patient_make_appointment__["a" /* PatientMakeAppointment */],
                __WEBPACK_IMPORTED_MODULE_10__patient_add_address__["a" /* PatientAddAddress */], __WEBPACK_IMPORTED_MODULE_12__search_doc_using_docid__["a" /* SearchDocUsingDocid */], __WEBPACK_IMPORTED_MODULE_13__search_doc_using_docname__["a" /* SearchDocUsingDocName */], __WEBPACK_IMPORTED_MODULE_14__search_doc_using_speciality__["a" /* SearchDocUsingSpeciality */],
                __WEBPACK_IMPORTED_MODULE_15__show_doctors_added__["a" /* ShowDoctorAdded */], __WEBPACK_IMPORTED_MODULE_16__add_doctor__["a" /* AddDoctor */], __WEBPACK_IMPORTED_MODULE_17__appointment_with_added_doctor__["a" /* AppointmentWithAddedDoctor */], __WEBPACK_IMPORTED_MODULE_19__make_appointment__["a" /* MakeAppointment */], __WEBPACK_IMPORTED_MODULE_20__patient_search_doc_using_city_speciality__["a" /* SearchDocUsingCityAndSpeciality */],
                __WEBPACK_IMPORTED_MODULE_21__patient_make_appointment_without_login__["a" /* PatientMakeAppointmentWithoutLogin */]],
            providers: [__WEBPACK_IMPORTED_MODULE_7__patient_service__["a" /* PatientService */]],
            exports: [__WEBPACK_IMPORTED_MODULE_20__patient_search_doc_using_city_speciality__["a" /* SearchDocUsingCityAndSpeciality */]]
        })
    ], PatientModule);
    return PatientModule;
}());



/***/ }),

/***/ "../../../../../src/app/patient/patient_profile.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientProfile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__patient_service__ = __webpack_require__("../../../../../src/app/patient/patient_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patient__ = __webpack_require__("../../../../../src/app/patient/patient.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PatientProfile = /** @class */ (function () {
    function PatientProfile(patientService) {
        this.patientService = patientService;
        this.patient = new __WEBPACK_IMPORTED_MODULE_2__patient__["a" /* Patient */]();
    }
    PatientProfile.prototype.ngOnInit = function () {
        var _this = this;
        this.patientService.getPatient().subscribe(function (data) {
            if (data != undefined) {
                _this.patient = data.json();
            }
        });
        console.log(this.patient.dateOfBirth.toDateString());
    };
    PatientProfile = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "patient-profile",
            template: __webpack_require__("../../../../../src/app/patient/html/patient_profile.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__patient_service__["a" /* PatientService */]])
    ], PatientProfile);
    return PatientProfile;
}());



/***/ }),

/***/ "../../../../../src/app/patient/patient_routing_config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__patient_signup__ = __webpack_require__("../../../../../src/app/patient/patient_signup.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__patient_home__ = __webpack_require__("../../../../../src/app/patient/patient_home.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patient_profile__ = __webpack_require__("../../../../../src/app/patient/patient_profile.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__patient_make_appointment__ = __webpack_require__("../../../../../src/app/patient/patient_make_appointment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__patient_add_address__ = __webpack_require__("../../../../../src/app/patient/patient_add_address.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_doc_using_docid__ = __webpack_require__("../../../../../src/app/patient/search_doc_using_docid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_doc_using_docname__ = __webpack_require__("../../../../../src/app/patient/search_doc_using_docname.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_doc_using_speciality__ = __webpack_require__("../../../../../src/app/patient/search_doc_using_speciality.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__show_doctors_added__ = __webpack_require__("../../../../../src/app/patient/show_doctors_added.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__add_doctor__ = __webpack_require__("../../../../../src/app/patient/add_doctor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__appointment_with_added_doctor__ = __webpack_require__("../../../../../src/app/patient/appointment_with_added_doctor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__make_appointment__ = __webpack_require__("../../../../../src/app/patient/make_appointment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__patient_make_appointment_without_login__ = __webpack_require__("../../../../../src/app/patient/patient_make_appointment_without_login.ts");













var patientSignup = { path: 'patient/signup', component: __WEBPACK_IMPORTED_MODULE_0__patient_signup__["a" /* PatientSignup */] };
var patientAddAddress = { path: 'patient/add/address', component: __WEBPACK_IMPORTED_MODULE_4__patient_add_address__["a" /* PatientAddAddress */] };
var patientProfile = { path: 'patient/profile', component: __WEBPACK_IMPORTED_MODULE_2__patient_profile__["a" /* PatientProfile */] };
var searchDocUsingDocid = { path: "search/using/docid", component: __WEBPACK_IMPORTED_MODULE_5__search_doc_using_docid__["a" /* SearchDocUsingDocid */] };
var searchDocUsingDocName = { path: "search/using/docname", component: __WEBPACK_IMPORTED_MODULE_6__search_doc_using_docname__["a" /* SearchDocUsingDocName */] };
var searchDocUsingSpeciality = { path: "search/using/speciality", component: __WEBPACK_IMPORTED_MODULE_7__search_doc_using_speciality__["a" /* SearchDocUsingSpeciality */] };
var showDoctorAdded = { path: "show/doc/added", component: __WEBPACK_IMPORTED_MODULE_8__show_doctors_added__["a" /* ShowDoctorAdded */] };
var addDoctor = { path: "add/doctor", component: __WEBPACK_IMPORTED_MODULE_9__add_doctor__["a" /* AddDoctor */] };
var appointmentWithAddedDoctor = { path: "appointment/with/added/doctor", component: __WEBPACK_IMPORTED_MODULE_10__appointment_with_added_doctor__["a" /* AppointmentWithAddedDoctor */] };
var patientMakeAppointment = { path: "patient/make/appointment", component: __WEBPACK_IMPORTED_MODULE_3__patient_make_appointment__["a" /* PatientMakeAppointment */] };
var makeAppointment = { path: "make/appointment/:docId", component: __WEBPACK_IMPORTED_MODULE_11__make_appointment__["a" /* MakeAppointment */] };
var makeFreeAppointment = { path: "make/appointment/without/login", component: __WEBPACK_IMPORTED_MODULE_12__patient_make_appointment_without_login__["a" /* PatientMakeAppointmentWithoutLogin */] };
var patientHome = {
    path: "patient/home", component: __WEBPACK_IMPORTED_MODULE_1__patient_home__["a" /* PatientHome */], children: [
        { path: "", component: __WEBPACK_IMPORTED_MODULE_3__patient_make_appointment__["a" /* PatientMakeAppointment */] },
        patientSignup,
        patientMakeAppointment,
        patientAddAddress,
        searchDocUsingDocid,
        searchDocUsingDocName,
        searchDocUsingSpeciality,
        showDoctorAdded,
        addDoctor,
        appointmentWithAddedDoctor,
        makeAppointment,
        makeFreeAppointment
    ]
};
var PatientRoutes = [patientHome, patientProfile];


/***/ }),

/***/ "../../../../../src/app/patient/patient_routing_module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patient_routing_config__ = __webpack_require__("../../../../../src/app/patient/patient_routing_config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PatientRoutingModule = /** @class */ (function () {
    function PatientRoutingModule() {
    }
    PatientRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__patient_routing_config__["a" /* PatientRoutes */])],
            declarations: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], PatientRoutingModule);
    return PatientRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/patient/patient_search_doc_using_city_speciality.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchDocUsingCityAndSpeciality; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dr_doctor_service__ = __webpack_require__("../../../../../src/app/dr/doctor_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__patient_service__ = __webpack_require__("../../../../../src/app/patient/patient_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dr_doctor_public_profile__ = __webpack_require__("../../../../../src/app/dr/doctor_public_profile.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__patient_make_appointment_without_login__ = __webpack_require__("../../../../../src/app/patient/patient_make_appointment_without_login.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SearchDocUsingCityAndSpeciality = /** @class */ (function () {
    function SearchDocUsingCityAndSpeciality(doctorService, formBuilder, patientService, matDialog, router) {
        this.doctorService = doctorService;
        this.formBuilder = formBuilder;
        this.patientService = patientService;
        this.matDialog = matDialog;
        this.router = router;
        this.city = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]("", []);
        this.speciality = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]("", []);
        this.showDoc = false;
        this.pageSize = 2;
        this.doctorList = new Array();
    }
    /*getAllSpeciality get list of all the speciality form the database and populate into
    * the form select field */
    SearchDocUsingCityAndSpeciality.prototype.getAllSpeciality = function () {
        var _this = this;
        this.doctorService.getAllSpeciality().subscribe(function (data) {
            if (data != undefined) {
                _this.specialities = data.json();
            }
        });
    };
    SearchDocUsingCityAndSpeciality.prototype.ngOnInit = function () {
        this.patientService.getPatientPostion();
        this.searchDocUsingCitySpeciality = this.formBuilder.group({
            "city": this.city,
            "speciality": this.speciality
        });
        this.getAllSpeciality();
    };
    SearchDocUsingCityAndSpeciality.prototype.submit = function () {
        var _this = this;
        console.log("test");
        console.log(this.searchDocUsingCitySpeciality);
        this.pageNo = 0;
        this.patientService.searchDocUsingCityAndSpeciality(this.city.value, this.speciality.value, this.pageNo, this.pageSize).subscribe(function (data) {
            if (data != undefined) {
                console.log(data);
                _this.showDoc = true;
                _this.totalPages = data.json().totalPages;
                _this.doctorList = data.json().content;
            }
        });
    };
    /** this method is binded with the scroll event of the document and it get executed when user
   * reached at the end of the page and it add more doctor into the list */
    SearchDocUsingCityAndSpeciality.prototype.onScroll = function () {
        var _this = this;
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            // you're at the bottom of the page
            if (this.pageNo < this.totalPages) {
                this.pageNo = this.pageNo + 1;
                this.patientService.searchDocUsingCityAndSpeciality(this.city.value, this.speciality.value, this.pageNo, this.pageSize).subscribe(function (data) {
                    if (data != undefined) {
                        // adds the new array to the previous doctor list 
                        _this.doctorList.push.apply(_this.doctorList, data.json().content);
                    }
                });
            }
        }
    };
    SearchDocUsingCityAndSpeciality.prototype.showDoctor = function (docId) {
        this.matDialog.open(__WEBPACK_IMPORTED_MODULE_5__dr_doctor_public_profile__["a" /* DoctorPublicProfile */], {
            data: { docId: docId },
            height: '700px',
            width: '900px'
        });
    };
    SearchDocUsingCityAndSpeciality.prototype.makeAppointment = function (docId) {
        // let url = "/patient/home/make/appointment/" + docId;
        // this.router.navigateByUrl( url );
        this.matDialog.open(__WEBPACK_IMPORTED_MODULE_7__patient_make_appointment_without_login__["a" /* PatientMakeAppointmentWithoutLogin */], {
            data: { docId: docId },
            height: "700px",
            width: "900px"
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])("window:scroll", []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SearchDocUsingCityAndSpeciality.prototype, "onScroll", null);
    SearchDocUsingCityAndSpeciality = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "search-using-city-speciality",
            template: __webpack_require__("../../../../../src/app/patient/html/search_using_city_speciality.html"),
            styles: [__webpack_require__("../../../../../src/app/patient/css/search_doc_using_city_speciality.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dr_doctor_service__["a" /* DoctorService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__patient_service__["a" /* PatientService */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]])
    ], SearchDocUsingCityAndSpeciality);
    return SearchDocUsingCityAndSpeciality;
}());



/***/ }),

/***/ "../../../../../src/app/patient/patient_service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PatientService = /** @class */ (function () {
    function PatientService(http, router) {
        this.http = http;
        this.router = router;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.commOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    PatientService.prototype.getDiseaseList = function () {
        var url = "/api/public/disease/list";
        return this.http.get(url, this.commOptions);
    };
    /* patientsignup method takes patient class object as parameter and
     * save it into database by sending a post request to rest services
     * */
    PatientService.prototype.patientSignup = function (patient) {
        var url = "/api/private/patient/signup";
        return this.http.post(url, patient, this.commOptions);
    };
    PatientService.prototype.getPatient = function () {
        var url = "/api/private/get/patient";
        return this.http.get(url);
    };
    PatientService.prototype.getDocForPatient = function (pageNo, pageSize) {
        var url = "/api/private/patient/get/doctor";
        var param = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        param.set("pageNo", pageNo.toString());
        param.set("pageSize", pageSize.toString());
        this.commOptions.params = param;
        return this.http.get(url, this.commOptions);
    };
    /** getDoctorUsingDocId method takes doctor id as parameter and return
     * the doctor object as the  result */
    PatientService.prototype.getDoctorUsingDocId = function (docId) {
        var url = "/api/public/patient/search/doctor/docid";
        var param = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        param.set("docId", docId);
        this.commOptions.params = param;
        return this.http.get(url, this.commOptions);
    };
    /* getDoctorUsingName method takes doctor name , state id , city name , page no and page size as parameter
     * and return the list of doctor */
    PatientService.prototype.getDoctorUsingName = function (docName, stateId, cityName, page, pageSize) {
        var url = "/api/public/patient/search/doctor/docname";
        var param = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        param.set("docName", docName);
        param.set("stateId", stateId);
        param.set("cityName", cityName);
        param.set("page", page.toString());
        param.set("pageSize", pageSize.toString());
        this.commOptions.params = param;
        return this.http.get(url, this.commOptions);
    };
    /** getDoctorUsingSpeciality method takes doctor specialiy , state id , city name ,page no and page size as parameter
     * and return the page object with the list of doctor */
    PatientService.prototype.getDoctorUsingSpeciality = function (docSpeciality, stateId, cityName, page, pageSize) {
        var url = "/api/public/patient/search/doctor/docspeciality";
        var param = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        param.set("docSpeciality", docSpeciality);
        param.set("stateId", stateId);
        param.set("cityName", cityName);
        param.set("page", page.toString());
        param.set("pageSize", pageSize.toString());
        this.commOptions.params = param;
        return this.http.get(url, this.commOptions);
    };
    /** addDoctor method takes the doctorinpatient object and add it into the list of doctors in patient
     *  object */
    PatientService.prototype.addDoctor = function (doctorInPatient) {
        var url = "/api/private/patient/add/doctor";
        return this.http.post(url, doctorInPatient, this.commOptions);
    };
    /** getPatientDoctors method get all the doctors present in the patient object */
    PatientService.prototype.getPatientDoctors = function () {
        var url = "/api/private/patient/get/doctors";
        return this.http.get(url, this.commOptions);
    };
    /** deleteDoctorFromPatient takes the doctorinpatient object and remove it from the list
     *  of doctors in the patient object */
    PatientService.prototype.deleteDoctorFromPatient = function (doctorInPatient) {
        var url = "/api/private/patient/delete/doctor";
        return this.http.post(url, doctorInPatient, this.commOptions);
    };
    /* getAppointmentBooked method gets the appointment booked for that particular doctor
     * on selected day at that time period
     * @param string (doctor id )
     * @param date (date of appointments )
     * @param hours( time slot )*/
    PatientService.prototype.getAppointmentBooked = function (docId, date, hours) {
        var url = "/api/public/patient/appointment/booked";
        var param = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        console.log(docId);
        param.set("docId", docId);
        param.set("dateInLong", date.getTime().toString());
        this.commOptions.params = param;
        return this.http.post(url, hours, this.commOptions);
    };
    /** isSignupComplete method check if user has completed the signup process or not  */
    PatientService.prototype.isSignupComplete = function () {
        var _this = this;
        this.getPatient().subscribe(function (data) {
            if (data != undefined) {
                if (data["_body"] == "") {
                    _this.router.navigateByUrl("/patient/home/patient/signup");
                }
            }
        });
    };
    /** searchDocUsingCityAndSpeciality method takes four parameter first is the city name
     * second is the speciality and page no and page size send the list of doc to user
     *
     */
    PatientService.prototype.searchDocUsingCityAndSpeciality = function (city, speciality, pageNo, pageSize) {
        var url = "/api/public/patient/search/doctor/cityandspeciality";
        var param = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        param.set("city", city);
        param.set("speciality", speciality);
        param.set("pageNo", pageNo.toString());
        param.set("pageSize", pageSize.toString());
        this.commOptions.params = param;
        return this.http.get(url, this.commOptions);
    };
    PatientService.prototype.getPatientPostion = function () {
        var _this = this;
        var city;
        var apiKey = "AIzaSyAN5t5N_vl-jNzadPi4jHC9p4kSwm5omXw";
        var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=";
        if (window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude;
                var lon = position.coords.longitude;
                url = url + lat + "," + lon + "&key=" + apiKey;
                _this.http.get(url, _this.commOptions).subscribe(function (data) {
                    console.log(data);
                });
            });
        }
        return city;
    };
    PatientService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], PatientService);
    return PatientService;
}());



/***/ }),

/***/ "../../../../../src/app/patient/patient_signup.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientSignup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__patient_service__ = __webpack_require__("../../../../../src/app/patient/patient_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patient__ = __webpack_require__("../../../../../src/app/patient/patient.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_formresult__ = __webpack_require__("../../../../../src/app/model/formresult.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var REG_DATE = new RegExp(" /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/");
var PatientSignup = /** @class */ (function () {
    function PatientSignup(formBuilder, patientService, router, matSnackBar) {
        this.formBuilder = formBuilder;
        this.patientService = patientService;
        this.router = router;
        this.matSnackBar = matSnackBar;
        // used in the date picker to avoid user to choose future date as date of birth
        this.currentDate = new Date();
        // used in the date picker to stop using date before 1900 
        this.oldestDate = new Date(1900, 1, 1);
        this.result = new __WEBPACK_IMPORTED_MODULE_4__model_formresult__["a" /* FormResult */]();
        // list of the medical conditions 
        this.medConditions = new Array();
        this.patient = new __WEBPACK_IMPORTED_MODULE_2__patient__["a" /* Patient */]();
        this.dateOfBirth = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required
        ]);
        this.name = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required
        ]);
        this.medcondition = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('', []);
        this.addressLineOne = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]("", []);
        this.addressLineTwo = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]("", []);
        this.state = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]("", []);
        this.city = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]("", []);
    }
    PatientSignup.prototype.ngOnInit = function () {
        // get the list of the medical condition from the database 
        this.getListOfMedCondition();
        // initialize the form group 
        this.patientSignupForm = this.formBuilder.group({
            'name': this.name,
            'dateOfBirth': this.dateOfBirth,
            'medcondition': this.medcondition,
            'addressLineOne': this.addressLineOne,
            'addressLineTwo': this.addressLineTwo,
            'state': this.state,
            'city': this.city
        });
    };
    // this method get the list of all the medical condition 
    PatientSignup.prototype.getListOfMedCondition = function () {
        var _this = this;
        this.patientService.getDiseaseList().subscribe(function (data) {
            if (data != undefined) {
                _this.medConditions = data.json();
                console.log(_this.medConditions);
            }
        });
    };
    /* execute when user submit the form */
    PatientSignup.prototype.submit = function () {
        var _this = this;
        console.log(this.patient);
        this.patientService.patientSignup(this.patient).subscribe(function (data) {
            if (data != undefined) {
                _this.result = data.json();
                if (_this.result.result) {
                    _this.matSnackBar.open("SignUp is Completed", "Done", {
                        duration: 3000
                    });
                    _this.router.navigateByUrl("/patient/home");
                }
                else if (_this.result.error) {
                    _this.matSnackBar.open(_this.result.message, "Error", {
                        duration: 3000
                    });
                }
            }
        });
    };
    PatientSignup.prototype.addressSubmited = function (event) {
        this.addressForm = event;
        this.patient.name = this.patientSignupForm.value.name;
        this.patient.dateOfBirth = this.patientSignupForm.value.dateOfBirth;
        this.patient.address.addressLineOne = this.addressForm.value.addressLineOne;
        this.patient.address.addressLineTwo = this.addressForm.value.addressLineTwo;
        this.patient.address.state = this.addressForm.value.state;
        this.patient.address.city = this.addressForm.value.city;
        this.patient.address.phoneNo = this.addressForm.value.phoneNo;
        this.patient.diseases = this.patientSignupForm.value.medcondition;
        if (this.patient.diseases.length == 0) {
            this.patient.diseases = null;
        }
    };
    PatientSignup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "patient-signup",
            template: __webpack_require__("../../../../../src/app/patient/html/patient_signup.html"),
            styles: [__webpack_require__("../../../../../src/app/patient/css/patient_signup.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1__patient_service__["a" /* PatientService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["y" /* MatSnackBar */]])
    ], PatientSignup);
    return PatientSignup;
}());



/***/ }),

/***/ "../../../../../src/app/patient/search_doc_using_docid.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchDocUsingDocid; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dr_doctor__ = __webpack_require__("../../../../../src/app/dr/doctor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__patient_service__ = __webpack_require__("../../../../../src/app/patient/patient_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_formresult__ = __webpack_require__("../../../../../src/app/model/formresult.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dr_doctor_public_profile__ = __webpack_require__("../../../../../src/app/dr/doctor_public_profile.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SearchDocUsingDocid = /** @class */ (function () {
    function SearchDocUsingDocid(formBuilder, patientService, matDialog, router) {
        this.formBuilder = formBuilder;
        this.patientService = patientService;
        this.matDialog = matDialog;
        this.router = router;
        this.docId = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", []);
        this.result = new __WEBPACK_IMPORTED_MODULE_4__model_formresult__["a" /* FormResult */]();
        this.doctor = new __WEBPACK_IMPORTED_MODULE_2__dr_doctor__["a" /* Doctor */]();
        this.showDoc = false;
    }
    SearchDocUsingDocid.prototype.ngOnInit = function () {
        this.patientService.isSignupComplete();
        this.searchDocForm = this.formBuilder.group({
            "docId": this.docId
        });
    };
    SearchDocUsingDocid.prototype.Submit = function () {
        var _this = this;
        this.patientService.getDoctorUsingDocId(this.docId.value).subscribe(function (data) {
            // check if response body is not empty 
            if (data.status != 204) {
                _this.showDoc = true;
                _this.doctor = data.json();
                _this.result.error = false;
                console.log(_this.doctor);
            }
            else {
                _this.showDoc = false;
                _this.result.error = true;
                _this.result.message = "No Doctor Found With this Id";
            }
        });
    };
    SearchDocUsingDocid.prototype.showDoctor = function (docId) {
        this.matDialog.open(__WEBPACK_IMPORTED_MODULE_5__dr_doctor_public_profile__["a" /* DoctorPublicProfile */], {
            data: { docId: docId },
            height: '700px',
            width: '900px'
        });
    };
    SearchDocUsingDocid = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "search-doc-using-docid",
            template: __webpack_require__("../../../../../src/app/patient/html/search_doc_using_docid.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__patient_service__["a" /* PatientService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["h" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */]])
    ], SearchDocUsingDocid);
    return SearchDocUsingDocid;
}());



/***/ }),

/***/ "../../../../../src/app/patient/search_doc_using_docname.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchDocUsingDocName; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patient_service__ = __webpack_require__("../../../../../src/app/patient/patient_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_common_service__ = __webpack_require__("../../../../../src/app/common/common_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_doctorInPatient__ = __webpack_require__("../../../../../src/app/model/doctorInPatient.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_formresult__ = __webpack_require__("../../../../../src/app/model/formresult.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dr_doctor_public_profile__ = __webpack_require__("../../../../../src/app/dr/doctor_public_profile.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SearchDocUsingDocName = /** @class */ (function () {
    function SearchDocUsingDocName(formBuilder, patientService, commonService, matDialog, router, matSnackBar) {
        this.formBuilder = formBuilder;
        this.patientService = patientService;
        this.commonService = commonService;
        this.matDialog = matDialog;
        this.router = router;
        this.matSnackBar = matSnackBar;
        this.formResult = new __WEBPACK_IMPORTED_MODULE_5__model_formresult__["a" /* FormResult */]();
        this.doctorList = new Array();
        this.showDoc = false;
        this.pageSize = 10;
        this.states = new Array();
        this.cities = new Array();
        this.docName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", []);
        this.state = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", []);
        this.city = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", []);
    }
    SearchDocUsingDocName.prototype.ngOnInit = function () {
        this.patientService.isSignupComplete();
        this.searchUsingDocNameForm = this.formBuilder.group({
            "docName": this.docName,
            "state": this.state,
            "city": this.city
        });
        this.getAllStates();
    };
    /* state selected excute when user select a state from the list and it
     * change the list of city according to that  state */
    SearchDocUsingDocName.prototype.stateSelected = function () {
        this.getAllCities(this.state.value);
    };
    /* getAllStates method get all the state from the database and put it into the
     *  states object */
    SearchDocUsingDocName.prototype.getAllStates = function () {
        var _this = this;
        this.commonService.getAllState().subscribe(function (data) {
            if (data != undefined) {
                _this.states = data.json();
            }
        });
    };
    /** getAllCities method takes state name as parameter and get all the city
     *  for that state */
    SearchDocUsingDocName.prototype.getAllCities = function (stateName) {
        var _this = this;
        this.commonService.getAllCities(stateName).subscribe(function (data) {
            if (data != undefined) {
                _this.cities = data.json();
            }
        });
    };
    /** submit method get executed when user click on submit button it load the first page of the
     *  doctor with that name */
    SearchDocUsingDocName.prototype.submit = function () {
        var _this = this;
        this.pageNo = 0;
        this.patientService.getDoctorUsingName(this.docName.value, this.state.value, this.city.value, this.pageNo, this.pageSize).subscribe(function (data) {
            if (data != undefined) {
                _this.showDoc = true;
                _this.doctorList = data.json().content;
                _this.totalPages = data.json().totalPages;
                console.log(data.json());
            }
        });
        console.log(this.searchUsingDocNameForm.value);
    };
    /** addDoctor method takes the doctor object and add it into the list of doctors present in the
     *  patient object */
    SearchDocUsingDocName.prototype.addDoctor = function (doctor) {
        var _this = this;
        var doctorInPatient = new __WEBPACK_IMPORTED_MODULE_4__model_doctorInPatient__["a" /* DoctorInPatient */]();
        doctorInPatient.docId = doctor.docId;
        doctorInPatient.name = doctor.name;
        doctorInPatient.phoneno = doctor.phoneno;
        doctorInPatient.appointmentFee = doctor.appointmentFee;
        this.patientService.addDoctor(doctorInPatient).subscribe(function (data) {
            if (data != undefined) {
                _this.formResult = data.json();
                if (_this.formResult.result) {
                    _this.matSnackBar.open(_this.formResult.message, "Doctor Added", {
                        duration: 3000
                    });
                }
                else if (_this.formResult.error) {
                    _this.matSnackBar.open(_this.formResult.message, "Error", {
                        duration: 3000
                    });
                }
            }
        });
    };
    /** this method is binded with the scroll event of the document and it get executed when user
     * reached at the end of the page and it add more doctor into the list */
    SearchDocUsingDocName.prototype.onScroll = function () {
        var _this = this;
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            // you're at the bottom of the page
            if (this.pageNo < this.totalPages) {
                this.pageNo = this.pageNo + 1;
                this.patientService.getDoctorUsingName(this.docName.value, this.state.value, this.city.value, this.pageNo, this.pageSize).subscribe(function (data) {
                    if (data != undefined) {
                        // adds the new array to the previous doctor list 
                        _this.doctorList.push.apply(_this.doctorList, data.json().content);
                    }
                });
            }
        }
    };
    SearchDocUsingDocName.prototype.showDoctor = function (docId) {
        this.matDialog.open(__WEBPACK_IMPORTED_MODULE_6__dr_doctor_public_profile__["a" /* DoctorPublicProfile */], {
            data: { docId: docId },
            height: '700px',
            width: '900px'
        });
    };
    SearchDocUsingDocName.prototype.makeAppointment = function (docId) {
        var url = "/patient/home/make/appointment/" + docId;
        this.router.navigateByUrl(url);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])("window:scroll", []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SearchDocUsingDocName.prototype, "onScroll", null);
    SearchDocUsingDocName = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "search-doc-using-docname",
            template: __webpack_require__("../../../../../src/app/patient/html/search_doc_using_docname.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__patient_service__["a" /* PatientService */],
            __WEBPACK_IMPORTED_MODULE_3__common_common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["h" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["y" /* MatSnackBar */]])
    ], SearchDocUsingDocName);
    return SearchDocUsingDocName;
}());



/***/ }),

/***/ "../../../../../src/app/patient/search_doc_using_speciality.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchDocUsingSpeciality; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_common_service__ = __webpack_require__("../../../../../src/app/common/common_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__patient_service__ = __webpack_require__("../../../../../src/app/patient/patient_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_doctorInPatient__ = __webpack_require__("../../../../../src/app/model/doctorInPatient.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_formresult__ = __webpack_require__("../../../../../src/app/model/formresult.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dr_doctor_public_profile__ = __webpack_require__("../../../../../src/app/dr/doctor_public_profile.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SearchDocUsingSpeciality = /** @class */ (function () {
    function SearchDocUsingSpeciality(formBuilder, commonService, patientService, matDialog, router, matSnackBar) {
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.patientService = patientService;
        this.matDialog = matDialog;
        this.router = router;
        this.matSnackBar = matSnackBar;
        this.formResult = new __WEBPACK_IMPORTED_MODULE_5__model_formresult__["a" /* FormResult */]();
        this.showDoc = false;
        this.pageSize = 2;
        this.doctorList = new Array();
        this.specialities = new Array();
        this.states = new Array();
        this.cities = new Array();
        this.speciality = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", []);
        this.state = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", []);
        this.city = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", []);
    }
    SearchDocUsingSpeciality.prototype.ngOnInit = function () {
        this.patientService.isSignupComplete();
        this.searchDocUsingSpecialityForm = this.formBuilder.group({
            "speciality": this.speciality,
            "state": this.state,
            "city": this.city
        });
        this.getAllSpecialities();
        this.getAllStates();
    };
    /** stateSelected method execute when user select a state it get all the cities exist in that
     *  state object*/
    SearchDocUsingSpeciality.prototype.stateSelected = function () {
        this.getAllCities(this.state.value);
    };
    /** getAllSpecialities method get list of specialities from the database and put it in
     *  the select options */
    SearchDocUsingSpeciality.prototype.getAllSpecialities = function () {
        var _this = this;
        this.commonService.getAllSpeciality().subscribe(function (data) {
            if (data != undefined) {
                _this.specialities = data.json();
            }
        });
    };
    /** getAllStates method get the list of all the state from the database*/
    SearchDocUsingSpeciality.prototype.getAllStates = function () {
        var _this = this;
        this.commonService.getAllState().subscribe(function (data) {
            if (data != undefined) {
                _this.states = data.json();
            }
        });
    };
    /** getAllCities method get list of all the cities using the stateid provided */
    SearchDocUsingSpeciality.prototype.getAllCities = function (stateId) {
        var _this = this;
        this.commonService.getAllCities(stateId).subscribe(function (data) {
            if (data != undefined) {
                _this.cities = data.json();
            }
        });
    };
    /** submit executed when user click on the submit button it get the first page of doctor
     *  list and put it into doctorlist variable */
    SearchDocUsingSpeciality.prototype.submit = function () {
        var _this = this;
        this.pageNo = 0;
        this.patientService.getDoctorUsingSpeciality(this.speciality.value, this.state.value, this.city.value, this.pageNo, this.pageSize).subscribe(function (data) {
            if (data != undefined) {
                _this.showDoc = true;
                _this.totalPages = data.json().totalPages;
                _this.doctorList = data.json().content;
            }
        });
    };
    /** addDoctor method takes the doctor object and add it into the list of doctors present in the
     *  patient object */
    SearchDocUsingSpeciality.prototype.addDoctor = function (doctor) {
        var _this = this;
        var doctorInPatient = new __WEBPACK_IMPORTED_MODULE_4__model_doctorInPatient__["a" /* DoctorInPatient */]();
        doctorInPatient.docId = doctor.docId;
        doctorInPatient.name = doctor.name;
        doctorInPatient.phoneno = doctor.phoneno;
        doctorInPatient.appointmentFee = doctor.appointmentFee;
        this.patientService.addDoctor(doctorInPatient).subscribe(function (data) {
            if (data != undefined) {
                _this.formResult = data.json();
                if (_this.formResult.result) {
                    _this.matSnackBar.open(_this.formResult.message, "Doctor Added", {
                        duration: 3000
                    });
                }
                else if (_this.formResult.error) {
                    _this.matSnackBar.open(_this.formResult.message, "Error", {
                        duration: 3000
                    });
                }
            }
        });
    };
    /** this method is binded with the scroll event of the document and it get executed when user
     * reached at the end of the page and it add more doctor into the list */
    SearchDocUsingSpeciality.prototype.onScroll = function () {
        var _this = this;
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            // you're at the bottom of the page
            if (this.pageNo < this.totalPages) {
                this.pageNo = this.pageNo + 1;
                this.patientService.getDoctorUsingSpeciality(this.speciality.value, this.state.value, this.city.value, this.pageNo, this.pageSize).subscribe(function (data) {
                    if (data != undefined) {
                        // adds the new array to the previous doctor list 
                        _this.doctorList.push.apply(_this.doctorList, data.json().content);
                    }
                });
            }
        }
    };
    SearchDocUsingSpeciality.prototype.showDoctor = function (docId) {
        this.matDialog.open(__WEBPACK_IMPORTED_MODULE_7__dr_doctor_public_profile__["a" /* DoctorPublicProfile */], {
            data: { docId: docId },
            height: '700px',
            width: '900px'
        });
    };
    SearchDocUsingSpeciality.prototype.makeAppointment = function (docId) {
        var url = "/patient/home/make/appointment/" + docId;
        this.router.navigateByUrl(url);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])("window:scroll", []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SearchDocUsingSpeciality.prototype, "onScroll", null);
    SearchDocUsingSpeciality = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "search-doc-using-speciality",
            template: __webpack_require__("../../../../../src/app/patient/html/search_doc_using_speciality.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__common_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_3__patient_service__["a" /* PatientService */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["h" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["y" /* MatSnackBar */]])
    ], SearchDocUsingSpeciality);
    return SearchDocUsingSpeciality;
}());



/***/ }),

/***/ "../../../../../src/app/patient/show_doctors_added.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowDoctorAdded; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__patient_service__ = __webpack_require__("../../../../../src/app/patient/patient_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dr_doctor_public_profile__ = __webpack_require__("../../../../../src/app/dr/doctor_public_profile.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShowDoctorAdded = /** @class */ (function () {
    function ShowDoctorAdded(patientService, matDialog) {
        this.patientService = patientService;
        this.matDialog = matDialog;
        this.doctorList = new Array();
    }
    ShowDoctorAdded.prototype.ngOnInit = function () {
        this.patientService.isSignupComplete();
        this.getDoctorList();
    };
    ShowDoctorAdded.prototype.getDoctorList = function () {
        var _this = this;
        this.patientService.getPatientDoctors().subscribe(function (data) {
            if (data != undefined) {
                _this.doctorList = data.json();
            }
        });
    };
    ShowDoctorAdded.prototype.deleteDoctor = function (doctorInPatient) {
        var _this = this;
        this.patientService.deleteDoctorFromPatient(doctorInPatient).subscribe(function (data) {
            if (data != undefined) {
                if (data.json().result) {
                    _this.getDoctorList();
                }
            }
        });
    };
    ShowDoctorAdded.prototype.showDocProfile = function (docId) {
        this.matDialog.open(__WEBPACK_IMPORTED_MODULE_3__dr_doctor_public_profile__["a" /* DoctorPublicProfile */], {
            data: { docId: docId },
            height: '700px',
            width: '900px'
        });
    };
    ShowDoctorAdded = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "show-doc-added",
            template: __webpack_require__("../../../../../src/app/patient/html/show_doctor_added.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__patient_service__["a" /* PatientService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDialog */]])
    ], ShowDoctorAdded);
    return ShowDoctorAdded;
}());



/***/ }),

/***/ "../../../../../src/app/site_admin/css/admin_home.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body, app-root, mat-sidenav-container, .my-content {\n    margin: 0;\n    width: 100%;\n    height: 100%;\n  }\n  \n  mat-sidenav{\n      width: 70%;\n      \n    }\n  \n  a{\n      width:100%;\n      height:100%;\n      display: block;\n  }\n  \n\n  \n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/site_admin/html/add_city.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\">Add City In A State</h2>\n\n<form [formGroup]=\"cityForm\" (ngSubmit)=\"submit()\">\n\t\n\t<div class=\"form-group\">\n\t\n\t    <mat-form-field>\n\t    \n\t    \t <mat-select placeholder=\"Select A State\" formControlName=\"stateId\">\n\t     \t\t<mat-option *ngFor=\"let state of states\" [value]=\"state.stateId\">{{state.stateName}}</mat-option>\n\t     \t\n\t         </mat-select>\n\t    \n\t    </mat-form-field>\n\t\n\t</div>\n\t\n\t<div class=\"form-group\">\n\t\n\t\t<mat-form-field>\n\t\t\t<input type=\"text\" matInput placeholder=\"Enter City Name\" formControlName=\"cityName\">\n\t\t\t\n\t\t</mat-form-field>\n\t\n\t</div>\n\t\n\t<div class=\"form-group\">\n\t\n\t\t<mat-form-field>\n\t\t\t<input type=\"text\"  matInput placeholder=\"Enter City Pincode\" formControlName=\"cityPincode\">\n\t\t</mat-form-field>\n\t</div>\n\t\n\t\n\t<div class=\"form-group\">\n\t\t<button mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\n\t</div>\n\n\n\n</form>"

/***/ }),

/***/ "../../../../../src/app/site_admin/html/add_degree.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\">Add Degree Page</h2>\n\n<form [formGroup]=\"degreeForm\" (ngSubmit)=\"submit()\">\n\t<div class=\"form-group\">\n\t\t<mat-form-field>\n\t\t\n\t\t\t<input type=\"text\" matInput placeholder=\"Enter Degree Name\" formControlName=\"degreeName\">\n\t\t\t\n\t\t</mat-form-field>\n\t\n\t</div>\n\t\n\t<div class=\"form-group\">\n\t\n\t\t<button mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\n\t\t\n\t</div>\n\n</form>"

/***/ }),

/***/ "../../../../../src/app/site_admin/html/add_disease.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\">Add Disease </h1>\n<form [formGroup]=\"diseaseForm\" (ngSubmit)=\"submit()\">\n\n\t<div class=\"form-group\">\n\t\t\n\t\t <mat-form-field>\n\t\t \n\t\t \t<input matInput type=\"text\" placeholder=\"Enter Disease Name\" formControlName=\"diseaseName\">\n\t\t \t<mat-error *ngIf=\"diseaseName.hasError('required')\">Disease Name is <strong>Required</strong></mat-error>\n\t\t </mat-form-field>\n\t\n\t</div>\n\t\n\t\n\t<div class=\"form-group\">\n\t\t\n\t\t <mat-form-field>\n\t\t \n\t\t \t<textarea matInput placeholder=\"Enter Disease Discription\" formControlName=\"diseaseDiscription\"></textarea>\n\t\t \t<mat-error *ngIf=\"diseaseDiscription.hasError('required')\">Disease Discription is \n\t\t \t<strong>Required</strong></mat-error>\n\t\t </mat-form-field>\n\t\n\t</div>\n\t\n\t<div class=\"form-group\">\n\t\n\t\t<button  mat-raised-button color=\"primary\" type=\"submit\" >Submit</button>\n\t\t\n\t</div>\n\n\n</form>"

/***/ }),

/***/ "../../../../../src/app/site_admin/html/add_speciality.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\">Add Speciality</h2>\n\n<form [formGroup]=\"specialityForm\" (ngSubmit)=\"submit()\">\n\t\n\t<div class=\"form-group\">\n\t\n\t\t<mat-form-field>\n\t\t\n\t\t\t<input matInput type=\"text\" placeholder=\"Enter Speciality\" formControlName=\"speciality\">\n\t\t\n\t\t</mat-form-field>\n\t\n\t</div>\n\t\n\t<div class=\"form-group\">\n\t\t<button mat-raised-button color=\"primary\" type=\"text\" >Submit </button>\n\t\n\t</div>\n\n</form>"

/***/ }),

/***/ "../../../../../src/app/site_admin/html/add_state.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\">Add State</h1>\n<form [formGroup]=\"stateForm\" (ngSubmit)=\"submit()\">\n\n\t\n\t<div class=\"form-group\">\n\t\t<mat-form-field>\n\t\t\t\t\t<input matInput type=\"text\" formControlName=\"stateName\" placeholder=\"Enter State Name\"> \n\t<mat-error *ngIf=\"stateName.hasError('required')\">State Name is <strong>Required</strong></mat-error>\n\t\t</mat-form-field>\n\t</div>\n\n\t<div class=\"form-group\">\n\t\n\t\t<button mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\n\t</div>\n\n</form>"

/***/ }),

/***/ "../../../../../src/app/site_admin/html/admin_home.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n\n\t<button mat-button (click)=\"sidenav.open()\" ><mat-icon>menu</mat-icon></button>\n\n\t<button mat-button >Home</button>\n\n\n</mat-toolbar>\n\n\n<mat-sidenav-container >\n\t<mat-sidenav mode=\"over\"  #sidenav>\n\n\t\t<mat-nav-list>\n\n\t\t\t<h3>Add</h3>\n\t\t\t<mat-divider></mat-divider>\n\t\t\t<mat-list-item>\n\t\t\t\t<a class=\"nav-link\" routerLink=\"admin/disease/add\">Add Disease</a>\n\t\t\t</mat-list-item>\n\n\t\t\n\t\t\t<mat-list-item>\n\t\t\t\t\t\t<a class=\"nav-link\" routerLink=\"admin/state/add\">Add State</a>\n\n\t\t\t</mat-list-item>\n\t\t\n\t\t    <!--- <mat-list-item>\n\n\t\t\t\t<a class=\"nav-link\" routerLink=\"admin/city/add\">Add City</a>\n\n\t\t\t</mat-list-item> -->\n\t\t\t\t\n\t\t\t<mat-list-item>\n\t\t\t\t\t<a class=\"nav-link\" routerLink=\"admin/degree/add\">Add Degree</a>\n\n\t\t\t</mat-list-item>\n\t\t\t\t\n\n\t\t\t<mat-list-item>\n\n\t\t\t\t\t<a class=\"nav-link\" routerLink=\"admin/speciality/add\">Add Speciality</a>\n\n\t\t\t</mat-list-item>\n\n\t\t\t<h3>Show</h3>\n\n\t\t\t<mat-divider></mat-divider>\n\n\t\t\t<mat-list-item>\n\t\t\t\t\t<a class=\"nav-link\" routerLink=\"admin/state/all\">State List</a>\n\t\t\t</mat-list-item>\n\n\t\t\t<mat-list-item>\n\t\t\t\t\t<a class=\"nav-list\" routerLink=\"admin/degree/list\">Degree List</a>\n\t\t\t</mat-list-item>\n\n\t\t\t<mat-list-item>\n\t\t\t\t\t<a class=\"nav-list\" routerLink=\"admin/disease/list\">Disease List</a>\n\t\t\t</mat-list-item>\n\t\t\t\n\t\t\t<mat-list-item>\n\t\t\t\t<a class=\"nav-list\" routerLink=\"admin/speciality/list\">Specialities List</a>\n\t\t\t</mat-list-item>\n\t\t\t\t\n\n\t\t</mat-nav-list>\n\n\n\t</mat-sidenav>\n\t\n\t<router-outlet class=\"my-content\"></router-outlet>\n\n\t\n  </mat-sidenav-container>\n\n\n<!-- <div class=\"col-md-4\">\n\n <div class=\"list-group\">\n \t\t\n \t\t<a class=\"list-group-item list-group-item-info\" data-toggle=\"collapse\" href=\"#add\" >Add<i class=\"caret\" ></i></a>\n \t\t<div class=\"collapse\" id=\"add\">\n \t\t\t\t\n \t\t\t\t<li class=\"list-group-item\" routerLink=\"admin/disease/add\">Add Disease</li>\n\t\t\t\t<li class=\"list-group-item\" routerLink=\"admin/state/add\">Add State</li>\n\t\t\t\t<li class=\"list-group-item\" routerLink=\"admin/city/add\">Add City</li>\n\t\t\t\t<li class=\"list-group-item\" routerLink=\"admin/degree/add\">Add Degree</li>\n\t\t\t\t<li class=\"list-group-item\" routerLink=\"admin/speciality/add\">Add Speciality</li>\n \t\t\n \t\t</div>\n \t\t<a class=\"list-group-item list-group-item-info\" data-toggle=\"collapse\" href=\"#show\">Show<i class=\"caret\"></i></a>\n \t\t\n \t\t<div class=\"collapse\" id=\"show\">\n \t\t\t\t\n \t\t\t\t<li class=\"list-group-item\" routerLink=\"admin/state/all\">State List</li>\n\t\t\t\t<li class=\"list-group-item\" routerLink=\"admin/degree/list\">Degree List</li>\n\t\t\t\t<li class=\"list-group-item\" routerLink=\"admin/disease/list\">Disease List</li>\n \t\t\n \t\t</div>\n \t\n </div>\n \n\n</div>\n\n\n<div class=\"col-md-8\">\n\n\t<router-outlet></router-outlet>\n\n\n</div>\n\n -->"

/***/ }),

/***/ "../../../../../src/app/site_admin/html/list_city.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\">list of the cities</h2>\n\n\n\n<div class=\"flex-row\">\n\t\t<mat-card *ngFor=\"let city of cities;let x = index\">\n\t\n\t\t\t\t<mat-card-title>Name:{{city.cityName}}</mat-card-title>\n\t\t\t\t<mat-card-subtitle>\tPinCode:{{city.cityPincode}}</mat-card-subtitle>\n\n\t\t\t\t<mat-card-actions>\n\t\t\t\t\t<button mat-button color=\"accent\" (click)=\"remove(x)\">Remove</button>\n\t\t\t\t</mat-card-actions>\n\t\t</mat-card>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/site_admin/html/list_degree.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\"> List Of Degree</h2>\n\n<div class=\"flex-row\" >\n\n\t<mat-card *ngFor=\"let degree of degrees\">\n\t     \n\t     \n\t\t<mat-card-title>{{degree.degreeName}}</mat-card-title>\n\t\t\n\t\t<mat-card-actions>\n\n\t\t\t<button mat-button color=\"accent\" (click)=\"remove(degree.degreeId)\">Remove</button>\n\t\t</mat-card-actions>\n\t\t \n    </mat-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/site_admin/html/list_disease.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\">List of Disease</h2>\n\n<div class=\"flex-row\">\n\n\t<mat-card *ngFor=\"let disease of diseases\">\n\t\n\t\t<mat-card-title>{{disease.diseaseName}}</mat-card-title>\n\n\t\t<mat-card-actions>\n\n\t\t\t<button mat-button color=\"accent\" (click)=\"remove(disease.diseaseId)\">Remove</button>\n\t\t</mat-card-actions>\n\t\n\t</mat-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/site_admin/html/list_specialities.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-center\">List Of Specialities</h3>\n\n<div class=\"flex-row\">\n\n<mat-card *ngFor=\"let speciality of specialities\"> \n\n    <mat-card-title>{{speciality.specialityName}}</mat-card-title>\n\n    <mat-card-actions>\n\n        <button mat-button color=\"accent\" (click)=\"remove(speciality.specialityName)\">Remove</button>\n    \n    </mat-card-actions>\n\n</mat-card>\n\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/site_admin/html/list_state.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\">List of the state</h2>\n\n<div  class=\"flex-row\" >\n\n<div *ngFor=\"let state of states\">\n\t\n\t<mat-card >\n\t\t\t<mat-card-title>{{state.stateName}}</mat-card-title>\n\n\t\t\t<mat-card-actions>\n\n\t\t\t\t<button mat-button (click)=\"showCities(state.stateId)\">Show Cities</button>\n\t\t\t\t<button mat-button color=\"primary\" (click)=\"addCity(state.stateId)\" >Add City</button>\n\t\t\t\t<button mat-button color=\"accent\" (click)=\"removeState(state.stateId)\">Remove State</button>\n\n\t\t\t</mat-card-actions>\n\t</mat-card>\n\t\n\t<!-- <ul class=\"list-group\">\n\t\t<li class=\"list-group-item\" ><a  [routerLink]=\"['admin/city/all',state.stateId]\" \n\t\t\t> {{state.stateName}}</a></li>\n\t\n\t</ul> -->\n\t\n\t\n\n\n</div>\n\n</div>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/site_admin/site_admin_add_city.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteAdminAddCity; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__site_admin_service__ = __webpack_require__("../../../../../src/app/site_admin/site_admin_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_city__ = __webpack_require__("../../../../../src/app/model/city.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_formresult__ = __webpack_require__("../../../../../src/app/model/formresult.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
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






var SiteAdminAddCity = /** @class */ (function () {
    function SiteAdminAddCity(formBuilder, siteAdminService, matSnackBar, data) {
        this.formBuilder = formBuilder;
        this.siteAdminService = siteAdminService;
        this.matSnackBar = matSnackBar;
        this.data = data;
        this.formResult = new __WEBPACK_IMPORTED_MODULE_4__model_formresult__["a" /* FormResult */]();
        this.states = new Array();
        this.cityName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required
        ]);
        this.cityPincode = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required
        ]);
        this.stateId = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required
        ]);
    }
    SiteAdminAddCity.prototype.ngOnInit = function () {
        this.getAllState();
        this.cityForm = this.formBuilder.group({
            cityName: this.cityName,
            stateId: this.stateId,
            cityPincode: this.cityPincode
        });
        this.stateId.setValue(this.data.stateId);
    };
    SiteAdminAddCity.prototype.getAllState = function () {
        var _this = this;
        this.siteAdminService.getAllState().subscribe(function (data) {
            if (data.json() != undefined) {
                _this.states = data.json();
            }
        });
    };
    SiteAdminAddCity.prototype.submit = function () {
        var _this = this;
        var city = new __WEBPACK_IMPORTED_MODULE_3__model_city__["a" /* City */]();
        city.cityName = this.cityForm.value.cityName;
        city.cityPincode = this.cityForm.value.cityPincode;
        var stateId = this.cityForm.value.stateId;
        console.log(stateId);
        this.siteAdminService.addCity(city, stateId).subscribe(function (data) {
            if (data != undefined) {
                _this.formResult = data.json();
                if (_this.formResult.result) {
                    _this.matSnackBar.open(_this.formResult.message, "Done", {
                        duration: 3000
                    });
                }
                else if (_this.formResult.error) {
                    _this.matSnackBar.open(_this.formResult.message, "Error", {
                        duration: 3000
                    });
                }
            }
        });
    };
    SiteAdminAddCity = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "add-city",
            template: __webpack_require__("../../../../../src/app/site_admin/html/add_city.html")
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__site_admin_service__["a" /* SiteAdminService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["y" /* MatSnackBar */], Object])
    ], SiteAdminAddCity);
    return SiteAdminAddCity;
}());



/***/ }),

/***/ "../../../../../src/app/site_admin/site_admin_add_degree.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteAdminAddDegree; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_degree__ = __webpack_require__("../../../../../src/app/model/degree.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_formresult__ = __webpack_require__("../../../../../src/app/model/formresult.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__site_admin_service__ = __webpack_require__("../../../../../src/app/site_admin/site_admin_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SiteAdminAddDegree = /** @class */ (function () {
    function SiteAdminAddDegree(formBuilder, siteAdminService, matSnackBar) {
        this.formBuilder = formBuilder;
        this.siteAdminService = siteAdminService;
        this.matSnackBar = matSnackBar;
        this.formResult = new __WEBPACK_IMPORTED_MODULE_3__model_formresult__["a" /* FormResult */]();
        this.degreeName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", []);
        this.degreeForm = this.formBuilder.group({
            degreeName: this.degreeName
        });
    }
    SiteAdminAddDegree.prototype.submit = function () {
        var _this = this;
        var degree = new __WEBPACK_IMPORTED_MODULE_2__model_degree__["a" /* Degree */]();
        degree.degreeName = this.degreeForm.value.degreeName;
        this.siteAdminService.addDegree(degree).subscribe(function (data) {
            if (data != undefined) {
                _this.formResult = data.json();
                if (_this.formResult.result) {
                    _this.matSnackBar.open(_this.formResult.message, "Done", {
                        duration: 3000
                    });
                }
                else if (_this.formResult.error) {
                    _this.matSnackBar.open(_this.formResult.message, "Error", {
                        duration: 3000
                    });
                }
            }
        });
    };
    SiteAdminAddDegree = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "add-degree",
            template: __webpack_require__("../../../../../src/app/site_admin/html/add_degree.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__site_admin_service__["a" /* SiteAdminService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["y" /* MatSnackBar */]])
    ], SiteAdminAddDegree);
    return SiteAdminAddDegree;
}());



/***/ }),

/***/ "../../../../../src/app/site_admin/site_admin_add_disease.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteAdminAddDisease; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_disease__ = __webpack_require__("../../../../../src/app/model/disease.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__site_admin_service__ = __webpack_require__("../../../../../src/app/site_admin/site_admin_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_formresult__ = __webpack_require__("../../../../../src/app/model/formresult.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SiteAdminAddDisease = /** @class */ (function () {
    function SiteAdminAddDisease(formBuilder, siteAdminService, matSnackBar) {
        this.formBuilder = formBuilder;
        this.siteAdminService = siteAdminService;
        this.matSnackBar = matSnackBar;
        this.formResult = new __WEBPACK_IMPORTED_MODULE_4__model_formresult__["a" /* FormResult */]();
        this.diseaseName = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]("", [
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required
        ]);
        this.diseaseDiscription = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]("", [
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required
        ]);
    }
    SiteAdminAddDisease.prototype.ngOnInit = function () {
        this.diseaseForm = this.formBuilder.group({
            diseaseName: this.diseaseName,
            diseaseDiscription: this.diseaseDiscription
        });
    };
    SiteAdminAddDisease.prototype.submit = function () {
        var _this = this;
        var disease = new __WEBPACK_IMPORTED_MODULE_1__model_disease__["a" /* Disease */]();
        disease.diseaseName = this.diseaseForm.value.diseaseName;
        disease.diseaseDiscription = this.diseaseForm.value.diseaseDiscription;
        this.siteAdminService.saveDisease(disease).subscribe(function (data) {
            if (data != undefined) {
                _this.formResult = data.json();
                if (_this.formResult.result) {
                    _this.matSnackBar.open(_this.formResult.message, "Done", {
                        duration: 3000
                    });
                }
                else if (_this.formResult.error) {
                    _this.matSnackBar.open(_this.formResult.message, "Error", {
                        duration: 3000
                    });
                }
            }
        });
    };
    SiteAdminAddDisease = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "add-disease",
            template: __webpack_require__("../../../../../src/app/site_admin/html/add_disease.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__site_admin_service__["a" /* SiteAdminService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["y" /* MatSnackBar */]])
    ], SiteAdminAddDisease);
    return SiteAdminAddDisease;
}());



/***/ }),

/***/ "../../../../../src/app/site_admin/site_admin_add_speciality.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteAdminAddSpeciality; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_speciality__ = __webpack_require__("../../../../../src/app/model/speciality.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_formresult__ = __webpack_require__("../../../../../src/app/model/formresult.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__site_admin_service__ = __webpack_require__("../../../../../src/app/site_admin/site_admin_service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SiteAdminAddSpeciality = /** @class */ (function () {
    function SiteAdminAddSpeciality(formBuilder, siteAdminService, matSnackBar) {
        this.formBuilder = formBuilder;
        this.siteAdminService = siteAdminService;
        this.matSnackBar = matSnackBar;
        this.formResult = new __WEBPACK_IMPORTED_MODULE_3__model_formresult__["a" /* FormResult */]();
        this.speciality = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', []);
    }
    SiteAdminAddSpeciality.prototype.ngOnInit = function () {
        this.getDegreelist();
        this.specialityForm = this.formBuilder.group({
            speciality: this.speciality
        });
    };
    SiteAdminAddSpeciality.prototype.getDegreelist = function () {
        var _this = this;
        this.siteAdminService.getAllDegree().subscribe(function (data) {
            if (data != undefined) {
                _this.degrees = data.json();
            }
        });
    };
    SiteAdminAddSpeciality.prototype.submit = function () {
        var _this = this;
        var speciality = new __WEBPACK_IMPORTED_MODULE_2__model_speciality__["a" /* Speciality */]();
        speciality.specialityName = this.specialityForm.value.speciality;
        this.siteAdminService.addSpeciality(speciality).subscribe(function (data) {
            if (data != undefined) {
                _this.formResult = data.json();
                if (_this.formResult.result) {
                    _this.matSnackBar.open(_this.formResult.message, "Done", {
                        duration: 3000
                    });
                }
                else if (_this.formResult.error) {
                    _this.matSnackBar.open(_this.formResult.message, "Error", {
                        duration: 3000
                    });
                }
            }
        });
    };
    SiteAdminAddSpeciality = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "add-speciality",
            template: __webpack_require__("../../../../../src/app/site_admin/html/add_speciality.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__site_admin_service__["a" /* SiteAdminService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["y" /* MatSnackBar */]])
    ], SiteAdminAddSpeciality);
    return SiteAdminAddSpeciality;
}());



/***/ }),

/***/ "../../../../../src/app/site_admin/site_admin_add_state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteAdminAddState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_state__ = __webpack_require__("../../../../../src/app/model/state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_formresult__ = __webpack_require__("../../../../../src/app/model/formresult.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__site_admin_service__ = __webpack_require__("../../../../../src/app/site_admin/site_admin_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SiteAdminAddState = /** @class */ (function () {
    function SiteAdminAddState(formBuilder, siteAdminService, matSnackBar) {
        this.formBuilder = formBuilder;
        this.siteAdminService = siteAdminService;
        this.matSnackBar = matSnackBar;
        this.formResult = new __WEBPACK_IMPORTED_MODULE_3__model_formresult__["a" /* FormResult */]();
        this.stateName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required
        ]);
    }
    SiteAdminAddState.prototype.ngOnInit = function () {
        this.stateForm = this.formBuilder.group({
            stateName: this.stateName
        });
    };
    SiteAdminAddState.prototype.submit = function () {
        var _this = this;
        var state = new __WEBPACK_IMPORTED_MODULE_2__model_state__["a" /* State */]();
        state.stateName = this.stateForm.value.stateName;
        this.siteAdminService.addState(state).subscribe(function (data) {
            if (data != undefined) {
                _this.formResult = data.json();
                if (_this.formResult.result) {
                    _this.matSnackBar.open(_this.formResult.message, "Done", {
                        duration: 3000
                    });
                }
                else if (_this.formResult.error) {
                    _this.matSnackBar.open(_this.formResult.message, "Error", {
                        duration: 3000
                    });
                }
            }
        });
    };
    SiteAdminAddState = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "add-state",
            template: __webpack_require__("../../../../../src/app/site_admin/html/add_state.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__site_admin_service__["a" /* SiteAdminService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["y" /* MatSnackBar */]])
    ], SiteAdminAddState);
    return SiteAdminAddState;
}());



/***/ }),

/***/ "../../../../../src/app/site_admin/site_admin_home.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteAdminHome; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SiteAdminHome = /** @class */ (function () {
    function SiteAdminHome() {
    }
    SiteAdminHome = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "admin-home",
            template: __webpack_require__("../../../../../src/app/site_admin/html/admin_home.html"),
            styles: [__webpack_require__("../../../../../src/app/site_admin/css/admin_home.css")]
        })
    ], SiteAdminHome);
    return SiteAdminHome;
}());



/***/ }),

/***/ "../../../../../src/app/site_admin/site_admin_list_city.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteAdminListCity; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__site_admin_service__ = __webpack_require__("../../../../../src/app/site_admin/site_admin_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_confirmation_dialog__ = __webpack_require__("../../../../../src/app/common/confirmation_dialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
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





var SiteAdminListCity = /** @class */ (function () {
    function SiteAdminListCity(siteAdminService, data, matDialog) {
        this.siteAdminService = siteAdminService;
        this.data = data;
        this.matDialog = matDialog;
    }
    SiteAdminListCity.prototype.ngOnInit = function () {
        this.stateId = this.data.stateId;
        this.getAllCity();
    };
    SiteAdminListCity.prototype.getAllCity = function () {
        var _this = this;
        this.siteAdminService.getAllCity(this.stateId).subscribe(function (data) {
            if (data != undefined) {
                _this.cities = data.json();
            }
        });
    };
    SiteAdminListCity.prototype.remove = function (index) {
        var _this = this;
        this.confimationDialogRef = this.matDialog.open(__WEBPACK_IMPORTED_MODULE_3__common_confirmation_dialog__["a" /* ConfirmationDialog */]);
        this.confimationDialogRef.afterClosed().subscribe(function (result) {
            if (result != undefined) {
                if (result) {
                    _this.cities.splice(index, 1);
                    _this.siteAdminService.removeCity(_this.cities, _this.stateId).subscribe(function (data) {
                        console.log(data);
                    });
                }
            }
        });
    };
    SiteAdminListCity = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "list-city",
            template: __webpack_require__("../../../../../src/app/site_admin/html/list_city.html")
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__site_admin_service__["a" /* SiteAdminService */], Object, __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDialog */]])
    ], SiteAdminListCity);
    return SiteAdminListCity;
}());



/***/ }),

/***/ "../../../../../src/app/site_admin/site_admin_list_degree.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteAdminListDegree; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_formresult__ = __webpack_require__("../../../../../src/app/model/formresult.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__site_admin_service__ = __webpack_require__("../../../../../src/app/site_admin/site_admin_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_confirmation_dialog__ = __webpack_require__("../../../../../src/app/common/confirmation_dialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SiteAdminListDegree = /** @class */ (function () {
    function SiteAdminListDegree(siteAdminService, matDialog) {
        this.siteAdminService = siteAdminService;
        this.matDialog = matDialog;
        this.formResult = new __WEBPACK_IMPORTED_MODULE_1__model_formresult__["a" /* FormResult */]();
    }
    SiteAdminListDegree.prototype.ngOnInit = function () {
        this.getDegrees();
    };
    SiteAdminListDegree.prototype.getDegrees = function () {
        var _this = this;
        this.siteAdminService.getAllDegree().subscribe(function (data) {
            if (data != undefined) {
                _this.degrees = data.json();
            }
        });
    };
    SiteAdminListDegree.prototype.remove = function (degreeId) {
        var _this = this;
        this.confirmationDialogRef = this.matDialog.open(__WEBPACK_IMPORTED_MODULE_3__common_confirmation_dialog__["a" /* ConfirmationDialog */]);
        this.confirmationDialogRef.afterClosed().subscribe(function (result) {
            if (result != undefined) {
                if (result) {
                    _this.siteAdminService.removeDegree(degreeId).subscribe(function (data) {
                        if (data != undefined) {
                            if (data.status == 200) {
                                _this.getDegrees();
                            }
                        }
                    });
                }
            }
        });
    };
    SiteAdminListDegree = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "list-degree",
            template: __webpack_require__("../../../../../src/app/site_admin/html/list_degree.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__site_admin_service__["a" /* SiteAdminService */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatDialog */]])
    ], SiteAdminListDegree);
    return SiteAdminListDegree;
}());



/***/ }),

/***/ "../../../../../src/app/site_admin/site_admin_list_disease.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteAdminListDisease; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__site_admin_service__ = __webpack_require__("../../../../../src/app/site_admin/site_admin_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_confirmation_dialog__ = __webpack_require__("../../../../../src/app/common/confirmation_dialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SiteAdminListDisease = /** @class */ (function () {
    function SiteAdminListDisease(siteAdminService, matDialog) {
        this.siteAdminService = siteAdminService;
        this.matDialog = matDialog;
    }
    SiteAdminListDisease.prototype.ngOnInit = function () {
        this.getAllDisease();
    };
    SiteAdminListDisease.prototype.getAllDisease = function () {
        var _this = this;
        this.siteAdminService.getAllDisease().subscribe(function (data) {
            if (data != undefined) {
                _this.diseases = data.json();
            }
        });
    };
    SiteAdminListDisease.prototype.remove = function (diseaseId) {
        var _this = this;
        this.confirmationDialogRef = this.matDialog.open(__WEBPACK_IMPORTED_MODULE_2__common_confirmation_dialog__["a" /* ConfirmationDialog */]);
        console.log(diseaseId);
        this.confirmationDialogRef.afterClosed().subscribe(function (result) {
            if (result != undefined) {
                if (result) {
                    _this.siteAdminService.removeDisease(diseaseId).subscribe(function (data) {
                        if (data != undefined) {
                            var res = data;
                            if (res.status == 200) {
                                _this.getAllDisease();
                            }
                        }
                    });
                }
            }
        });
    };
    SiteAdminListDisease = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "list-disease",
            template: __webpack_require__("../../../../../src/app/site_admin/html/list_disease.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__site_admin_service__["a" /* SiteAdminService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatDialog */]])
    ], SiteAdminListDisease);
    return SiteAdminListDisease;
}());



/***/ }),

/***/ "../../../../../src/app/site_admin/site_admin_list_specialities.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteAdminListSpecialities; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_common_service__ = __webpack_require__("../../../../../src/app/common/common_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_confirmation_dialog__ = __webpack_require__("../../../../../src/app/common/confirmation_dialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__site_admin_service__ = __webpack_require__("../../../../../src/app/site_admin/site_admin_service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SiteAdminListSpecialities = /** @class */ (function () {
    function SiteAdminListSpecialities(commonService, matDialog, siteAdminService) {
        this.commonService = commonService;
        this.matDialog = matDialog;
        this.siteAdminService = siteAdminService;
        this.specialities = new Array();
    }
    SiteAdminListSpecialities.prototype.ngOnInit = function () {
        this.getSpeciality();
    };
    SiteAdminListSpecialities.prototype.getSpeciality = function () {
        var _this = this;
        this.commonService.getAllSpeciality().subscribe(function (data) {
            if (data != undefined) {
                _this.specialities = data.json();
            }
        });
    };
    SiteAdminListSpecialities.prototype.remove = function (specialityName) {
        var _this = this;
        this.confimationDialogRef = this.matDialog.open(__WEBPACK_IMPORTED_MODULE_3__common_confirmation_dialog__["a" /* ConfirmationDialog */]);
        this.confimationDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.siteAdminService.removeSpeciality(specialityName).subscribe(function (data) {
                    if (data != undefined) {
                        if (data.status == 200) {
                            _this.getSpeciality();
                        }
                    }
                });
            }
        });
    };
    SiteAdminListSpecialities = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "list-specialities",
            template: __webpack_require__("../../../../../src/app/site_admin/html/list_specialities.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4__site_admin_service__["a" /* SiteAdminService */]])
    ], SiteAdminListSpecialities);
    return SiteAdminListSpecialities;
}());



/***/ }),

/***/ "../../../../../src/app/site_admin/site_admin_list_state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteAdminListState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__site_admin_service__ = __webpack_require__("../../../../../src/app/site_admin/site_admin_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__site_admin_list_city__ = __webpack_require__("../../../../../src/app/site_admin/site_admin_list_city.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_confirmation_dialog__ = __webpack_require__("../../../../../src/app/common/confirmation_dialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__site_admin_add_city__ = __webpack_require__("../../../../../src/app/site_admin/site_admin_add_city.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SiteAdminListState = /** @class */ (function () {
    function SiteAdminListState(siteAdminService, matDialog) {
        this.siteAdminService = siteAdminService;
        this.matDialog = matDialog;
    }
    SiteAdminListState.prototype.ngOnInit = function () {
        this.getAllStates();
    };
    SiteAdminListState.prototype.getAllStates = function () {
        var _this = this;
        this.siteAdminService.getAllState().subscribe(function (data) {
            if (data != undefined) {
                _this.states = data.json();
            }
        });
    };
    /*** removeState takes stateid and remove it from the database */
    SiteAdminListState.prototype.removeState = function (stateId) {
        var _this = this;
        this.confirmationDialogRef = this.matDialog.open(__WEBPACK_IMPORTED_MODULE_4__common_confirmation_dialog__["a" /* ConfirmationDialog */]);
        this.confirmationDialogRef.afterClosed().subscribe(function (data) {
            if (data != undefined) {
                if (data) {
                    _this.siteAdminService.removeState(stateId).subscribe(function (data) {
                        if (data != undefined) {
                            var res = data;
                            if (res.status == 200) {
                                _this.getAllStates();
                            }
                        }
                    });
                }
            }
        });
    };
    SiteAdminListState.prototype.addCity = function (stateId) {
        this.matDialog.open(__WEBPACK_IMPORTED_MODULE_5__site_admin_add_city__["a" /* SiteAdminAddCity */], {
            data: { stateId: stateId },
            height: "700px",
            width: "800px"
        });
    };
    SiteAdminListState.prototype.showCities = function (stateId) {
        this.matDialog.open(__WEBPACK_IMPORTED_MODULE_3__site_admin_list_city__["a" /* SiteAdminListCity */], {
            data: { stateId: stateId },
            height: "700px",
            width: "800px"
        });
    };
    SiteAdminListState = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "list-state",
            template: __webpack_require__("../../../../../src/app/site_admin/html/list_state.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__site_admin_service__["a" /* SiteAdminService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDialog */]])
    ], SiteAdminListState);
    return SiteAdminListState;
}());



/***/ }),

/***/ "../../../../../src/app/site_admin/site_admin_module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteAdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__site_admin_home__ = __webpack_require__("../../../../../src/app/site_admin/site_admin_home.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__site_admin_add_disease__ = __webpack_require__("../../../../../src/app/site_admin/site_admin_add_disease.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__site_admin_routing_module__ = __webpack_require__("../../../../../src/app/site_admin/site_admin_routing_module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_material_module__ = __webpack_require__("../../../../../src/app/material/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__site_admin_add_state__ = __webpack_require__("../../../../../src/app/site_admin/site_admin_add_state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__site_admin_list_state__ = __webpack_require__("../../../../../src/app/site_admin/site_admin_list_state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__site_admin_add_city__ = __webpack_require__("../../../../../src/app/site_admin/site_admin_add_city.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__site_admin_list_city__ = __webpack_require__("../../../../../src/app/site_admin/site_admin_list_city.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__site_admin_service__ = __webpack_require__("../../../../../src/app/site_admin/site_admin_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__site_admin_add_degree__ = __webpack_require__("../../../../../src/app/site_admin/site_admin_add_degree.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__site_admin_list_degree__ = __webpack_require__("../../../../../src/app/site_admin/site_admin_list_degree.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__site_admin_list_disease__ = __webpack_require__("../../../../../src/app/site_admin/site_admin_list_disease.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__site_admin_add_speciality__ = __webpack_require__("../../../../../src/app/site_admin/site_admin_add_speciality.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__site_admin_list_specialities__ = __webpack_require__("../../../../../src/app/site_admin/site_admin_list_specialities.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__common_confirmation_dialog__ = __webpack_require__("../../../../../src/app/common/confirmation_dialog.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var SiteAdminModule = /** @class */ (function () {
    function SiteAdminModule() {
    }
    SiteAdminModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_5__site_admin_routing_module__["a" /* SiteAdminRoutingModule */], __WEBPACK_IMPORTED_MODULE_6__material_material_module__["a" /* MaterialModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__site_admin_add_disease__["a" /* SiteAdminAddDisease */], __WEBPACK_IMPORTED_MODULE_7__site_admin_add_state__["a" /* SiteAdminAddState */], __WEBPACK_IMPORTED_MODULE_9__site_admin_add_city__["a" /* SiteAdminAddCity */], __WEBPACK_IMPORTED_MODULE_1__site_admin_home__["a" /* SiteAdminHome */], __WEBPACK_IMPORTED_MODULE_10__site_admin_list_city__["a" /* SiteAdminListCity */],
                __WEBPACK_IMPORTED_MODULE_8__site_admin_list_state__["a" /* SiteAdminListState */], __WEBPACK_IMPORTED_MODULE_12__site_admin_add_degree__["a" /* SiteAdminAddDegree */], __WEBPACK_IMPORTED_MODULE_13__site_admin_list_degree__["a" /* SiteAdminListDegree */], __WEBPACK_IMPORTED_MODULE_14__site_admin_list_disease__["a" /* SiteAdminListDisease */], __WEBPACK_IMPORTED_MODULE_15__site_admin_add_speciality__["a" /* SiteAdminAddSpeciality */],
                __WEBPACK_IMPORTED_MODULE_16__site_admin_list_specialities__["a" /* SiteAdminListSpecialities */]],
            exports: [],
            providers: [__WEBPACK_IMPORTED_MODULE_11__site_admin_service__["a" /* SiteAdminService */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_17__common_confirmation_dialog__["a" /* ConfirmationDialog */]]
        })
    ], SiteAdminModule);
    return SiteAdminModule;
}());



/***/ }),

/***/ "../../../../../src/app/site_admin/site_admin_routing_config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteAdminRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__site_admin_add_disease__ = __webpack_require__("../../../../../src/app/site_admin/site_admin_add_disease.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__site_admin_add_state__ = __webpack_require__("../../../../../src/app/site_admin/site_admin_add_state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__site_admin_add_city__ = __webpack_require__("../../../../../src/app/site_admin/site_admin_add_city.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__site_admin_home__ = __webpack_require__("../../../../../src/app/site_admin/site_admin_home.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__site_admin_list_city__ = __webpack_require__("../../../../../src/app/site_admin/site_admin_list_city.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__site_admin_list_state__ = __webpack_require__("../../../../../src/app/site_admin/site_admin_list_state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__site_admin_add_degree__ = __webpack_require__("../../../../../src/app/site_admin/site_admin_add_degree.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__site_admin_list_degree__ = __webpack_require__("../../../../../src/app/site_admin/site_admin_list_degree.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__site_admin_add_speciality__ = __webpack_require__("../../../../../src/app/site_admin/site_admin_add_speciality.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__site_admin_list_disease__ = __webpack_require__("../../../../../src/app/site_admin/site_admin_list_disease.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__site_admin_list_specialities__ = __webpack_require__("../../../../../src/app/site_admin/site_admin_list_specialities.ts");











var siteAdminAddDisease = { path: "admin/disease/add", component: __WEBPACK_IMPORTED_MODULE_0__site_admin_add_disease__["a" /* SiteAdminAddDisease */] };
var siteAdminAddState = { path: "admin/state/add", component: __WEBPACK_IMPORTED_MODULE_1__site_admin_add_state__["a" /* SiteAdminAddState */] };
var siteAdminAddCity = { path: "admin/city/add", component: __WEBPACK_IMPORTED_MODULE_2__site_admin_add_city__["a" /* SiteAdminAddCity */] };
var siteAdminListCity = { path: "admin/city/all/:stateId", component: __WEBPACK_IMPORTED_MODULE_4__site_admin_list_city__["a" /* SiteAdminListCity */] };
var siteAdminAddDegree = { path: "admin/degree/add", component: __WEBPACK_IMPORTED_MODULE_6__site_admin_add_degree__["a" /* SiteAdminAddDegree */] };
var siteAdminListDegree = { path: "admin/degree/list", component: __WEBPACK_IMPORTED_MODULE_7__site_admin_list_degree__["a" /* SiteAdminListDegree */] };
var siteAdminListDisease = { path: "admin/disease/list", component: __WEBPACK_IMPORTED_MODULE_9__site_admin_list_disease__["a" /* SiteAdminListDisease */] };
var siteAdminAddSpeciality = { path: "admin/speciality/add", component: __WEBPACK_IMPORTED_MODULE_8__site_admin_add_speciality__["a" /* SiteAdminAddSpeciality */] };
var siteAdminListSpecialities = { path: "admin/speciality/list", component: __WEBPACK_IMPORTED_MODULE_10__site_admin_list_specialities__["a" /* SiteAdminListSpecialities */] };
var siteAdminListState = {
    path: "admin/state/all", component: __WEBPACK_IMPORTED_MODULE_5__site_admin_list_state__["a" /* SiteAdminListState */], children: [
        siteAdminListCity
    ]
};
var siteAdminHome = {
    path: "admin/home", component: __WEBPACK_IMPORTED_MODULE_3__site_admin_home__["a" /* SiteAdminHome */],
    children: [
        siteAdminAddDisease,
        siteAdminAddState,
        siteAdminAddCity,
        siteAdminListState,
        siteAdminAddDegree,
        siteAdminListDegree,
        siteAdminListDisease,
        siteAdminAddSpeciality,
        siteAdminListSpecialities
    ]
};
var SiteAdminRoutes = [siteAdminHome];


/***/ }),

/***/ "../../../../../src/app/site_admin/site_admin_routing_module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteAdminRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__site_admin_routing_config__ = __webpack_require__("../../../../../src/app/site_admin/site_admin_routing_config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SiteAdminRoutingModule = /** @class */ (function () {
    function SiteAdminRoutingModule() {
    }
    SiteAdminRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__site_admin_routing_config__["a" /* SiteAdminRoutes */])],
            declarations: [],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]],
            providers: []
        })
    ], SiteAdminRoutingModule);
    return SiteAdminRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/site_admin/site_admin_service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteAdminService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SiteAdminService = /** @class */ (function () {
    function SiteAdminService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.commOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    SiteAdminService.prototype.saveDisease = function (disease) {
        var url = "/api/private/admin/disease/add";
        return this.http.post(url, disease, this.commOptions);
    };
    SiteAdminService.prototype.addState = function (state) {
        var url = "/api/private/admin/state/add";
        return this.http.post(url, state, this.commOptions);
    };
    SiteAdminService.prototype.getAllState = function () {
        var url = "/api/public/state/all";
        return this.http.get(url, this.commOptions);
    };
    SiteAdminService.prototype.getAllCity = function (stateId) {
        var url = "/api/public/city/all";
        var param = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        param.set("stateId", stateId);
        this.commOptions.params = param;
        return this.http.get(url, this.commOptions);
    };
    SiteAdminService.prototype.addCity = function (city, stateId) {
        var url = "/api/private/admin/city/add";
        var body = { "city": city, "stateId": stateId };
        return this.http.post(url, body, this.commOptions);
    };
    SiteAdminService.prototype.addDegree = function (degree) {
        var url = "/api/private/degree/add";
        return this.http.post(url, degree, this.commOptions);
    };
    SiteAdminService.prototype.getAllDegree = function () {
        var url = "/api/public/degree/all";
        return this.http.get(url, this.commOptions);
    };
    SiteAdminService.prototype.getAllDisease = function () {
        var url = "/api/public/disease/all";
        return this.http.get(url, this.commOptions);
    };
    SiteAdminService.prototype.addSpeciality = function (speciality) {
        var url = "/api/private/speciality/add";
        return this.http.post(url, speciality, this.commOptions);
    };
    // remove state method remove the state from database it takes one parameter stateId 
    // and remove the state with that stateid
    SiteAdminService.prototype.removeState = function (stateId) {
        var url = "/api/private/admin/delete/state";
        var param = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        param.set("stateId", stateId);
        this.commOptions.params = param;
        return this.http.delete(url, this.commOptions);
    };
    /** removeDisease method remove the disease from the database it takes one parameter
     *  diseaseId and remove that disease from database
     */
    SiteAdminService.prototype.removeDisease = function (diseaseId) {
        var url = "/api/private/admin/delete/disease";
        var param = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        param.set("diseaseId", diseaseId);
        this.commOptions.params = param;
        return this.http.delete(url, this.commOptions);
    };
    /** removeDegree method remove the degree from the database it takes one parameter
     *  degreeId and remove it from the database
     */
    SiteAdminService.prototype.removeDegree = function (degreeId) {
        var url = "/api/private/admin/delete/degree";
        var param = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        param.set("degreeId", degreeId);
        this.commOptions.params = param;
        return this.http.delete(url, this.commOptions);
    };
    /** removeCity method remove the city from database it take stateId and newCityList
     *  as parameter and remove old list with the new one
     */
    SiteAdminService.prototype.removeCity = function (newCityList, stateId) {
        var url = "/api/private/admin/delete/city";
        var param = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        param.set("stateId", stateId);
        this.commOptions.params = param;
        return this.http.post(url, newCityList, this.commOptions);
    };
    /** removeSpeciality remove a speciality from the database it takes single parameter
     *  which is the specialityName and remove the speciality with that name
     */
    SiteAdminService.prototype.removeSpeciality = function (specialityName) {
        var url = "/api/private/admin/delete/speciality";
        var param = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        param.set("specialityName", specialityName);
        this.commOptions.params = param;
        return this.http.delete(url, this.commOptions);
    };
    SiteAdminService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], SiteAdminService);
    return SiteAdminService;
}());



/***/ }),

/***/ "../../../../../src/app/user/css/login.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fullwidth{\n\twidth:100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/html/login.html":
/***/ (function(module, exports) {

module.exports = "<site-main-header></site-main-header>\n\n<h3 *ngIf=\"error\">User Name or Password is Wrong Please try Again</h3>\n\n<div class=\"content\">\n\n\t<h2 class=\"text-center\">Sign In </h2>\n\n\t\t<form [formGroup]=\"loginForm\" (ngSubmit)=\"submit()\">\n\t\t\t\n\t\t\t\n\t\t\t\t<mat-form-field class=\"fullwidth\">\n\t\t\t\t\n\t\t\t\t\t<input matInput required =\"text\" placeholder=\"Mobile No\" formControlName=\"mobileNo\" name=\"email\">\n\t\t\t\t\t<mat-error *ngIf=\"mobileNo.hasError('required')\">\n\t\t\t\t\t\tMobile No is <strong>required</strong>\n\t\t\t\t\t</mat-error>\n\t\t\t\t  <mat-error *ngIf=\"mobileNo.hasError('minlength')\">\n\t\t\t\t\t  Min length of mobile no is 10 digit\n\t\t\t\t  </mat-error>\n\t\t\t\t\t<mat-error *ngIf=\"mobileNo.hasError('maxlength')\">\n\t\t\t\t\t\t  Max length of mobile no is 10 digit\n\t\t\t\t\t</mat-error>\n\t\t\t\t\t\n\t\t\t\t</mat-form-field>\n\t\t\t\n\t\t\t\n\t\t\t\n\t       \n\t        \n\t        <mat-form-field class=\"fullwidth\">\n\t\t\t\t\n\t\t\t\t\t<input matInput required type=\"password\" placeholder=\"Password\" formControlName=\"password\" name=\"password\">\n\t\t\t\t\t<mat-error *ngIf=\"password.hasError('required')\">\n\t\t\t\t\t\tEnter the Password\n\t\t\t\t\t\n\t\t\t\t\t</mat-error>\n\t\t\t\t</mat-form-field>\n\t        \n\t       \n\t        \n\t        <br>\n\t        <br>\n\t        \n\t        <button mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n</form>\n\n\n</div>\n\n\n\t\t\t"

/***/ }),

/***/ "../../../../../src/app/user/html/user_phone_varification.html":
/***/ (function(module, exports) {

module.exports = "<site-main-header></site-main-header> \n<h3 class=\"text-center\">Please Enter Your Otp</h3>\n\n<form [formGroup]=\"mobileVarificationForm\" (ngSubmit)=\"submit()\">\n\n<mat-form-field>\n\n    <input matInput placeholder=\"Mobile No\" formControlName=\"mobileNo\">\n    <span matPrefix>+91</span>\n    \n</mat-form-field>\n\n\n<mat-form-field>\n\n    <input matInput placeholder=\"Enter Otp\" formControlName=\"otp\">\n</mat-form-field>\n\n\n<div class=\"flex-row\">\n\n<button mat-button color=\"primary\" type=\"submit\">Submit</button>\n\n<button mat-button type=\"button\" color=\"accent\" disabled=\"{{deactivated}}\"\n (click)=\"sendOtpAgain()\">{{countDown | async}}</button>\n\n <button mat-button type=\"button\" color=\"accent\" disabled=\"{{deactivatedVoiceOtp}}\"\n (click)=\"sendOtpAgainVoice()\">{{countDownVoice | async}}</button>\n\n</div>\n\n</form>"

/***/ }),

/***/ "../../../../../src/app/user/html/user_signup.html":
/***/ (function(module, exports) {

module.exports = "  <site-main-header></site-main-header> \n  \n  \n  \n  <div class=\"content\">\n  \n <h2 class=\"text-center\">User Signup Form </h2>\n  \t\t\t\n  <form [formGroup]=\"userSignupForm\" (ngSubmit)=\"submit()\">\n  \n  \n  \n \n      <mat-form-field>\n  \t\t\t\n  \t\t\t<input matInput required type =\"text\" placeholder=\"Mobile No\" name=\"username\" formControlName=\"mobileNo\" >\n  \t\t\t<mat-error *ngIf=\"mobileNo.hasError('required')\">\n  \t\t\t\tMobile No is <strong>required</strong>\n\t\t\t  </mat-error>\n\t\t\t<mat-error *ngIf=\"mobileNo.hasError('minlength')\">\n\t\t\t\tMin length of mobile no is 10 digit\n\t\t\t</mat-error>\n  \t\t\t<mat-error *ngIf=\"mobileNo.hasError('maxlength')\">\n\t\t\t\t\tMax length of mobile no is 10 digit\n  \t\t\t</mat-error>\n  \t\t</mat-form-field>\n\n  \n \n    \t<mat-form-field>\n  \t\t\t<input matInput required type=\"password\" placeholder=\"Password\" name=\"password\" formControlName=\"password\">\n  \t\t\n  \t\t\t<mat-error *ngIf=\"password.hasError('required')\">\n  \t\t\t\tPassword is <strong>required</strong>\n  \t\t\t</mat-error>\n  \t\t</mat-form-field>\n  \n  \n  \t\t\t \n  \t\t\t\n  \t\t\t <mat-radio-group formControlName=\"role\" name=\"role\" required=true>\n  \t\t\t\t<mat-radio-button  value=\"ROLE_DOCTOR\">I am Doctor</mat-radio-button>\n  \t\t\t\t<mat-radio-button  value=\"ROLE_PATIENT\">I am Patient</mat-radio-button>\n  \t\t\t\t\n\t\t\t\t  <mat-error *ngIf=\"role.hasError('required')\">Select A Role</mat-error>\n\t\t\t  </mat-radio-group>\n\t\t\t  \n\t\t\t  \n  \t\t\t\n  \t\t<br>\n  \t\t<br>  \n  \t\t<button mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\n  \n  </form>\n  \n  \n  \n  </div>\n  \n  \n  \n  "

/***/ }),

/***/ "../../../../../src/app/user/login.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogIn; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__("../../../../../src/app/user/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/user/user_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
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






var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var LogIn = /** @class */ (function () {
    function LogIn(formBuilder, userService, router, activatedRoute, document) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.document = document;
        this.model = new __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */]();
        this.mobileNo = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]("", [
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].minLength(10),
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].maxLength(10)
        ]);
        this.password = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]("", [
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required
        ]);
    }
    LogIn.prototype.ngOnInit = function () {
        var _this = this;
        this.loginForm = this.formBuilder.group({
            mobileNo: this.mobileNo,
            password: this.password
        });
        this.activatedRoute.queryParams.subscribe(function (data) {
            _this.error = data["error"];
        });
    };
    LogIn.prototype.submit = function () {
        var _this = this;
        if (this.loginForm.status == "VALID") {
            var user = new __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */]();
            user.mobileNo = this.loginForm.value.mobileNo;
            user.password = this.loginForm.value.password;
            this.userService.userLogin(user).subscribe(function (data) {
                if (data != undefined) {
                    // this redirect method may not work in all situation 
                    // replace if better method avilable in future 
                    _this.document.location.href = data.url;
                }
            });
        }
    };
    LogIn = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "log-in",
            template: __webpack_require__("../../../../../src/app/user/html/login.html"),
            styles: [__webpack_require__("../../../../../src/app/user/css/login.css")]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], Object])
    ], LogIn);
    return LogIn;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__("../../../../../src/app/user/login.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_material_module__ = __webpack_require__("../../../../../src/app/material/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_routing_module__ = __webpack_require__("../../../../../src/app/user/user_routing_module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_signup__ = __webpack_require__("../../../../../src/app/user/user_signup.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dr_doctor_module__ = __webpack_require__("../../../../../src/app/dr/doctor_module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_service__ = __webpack_require__("../../../../../src/app/user/user_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__layout_site_main_footer__ = __webpack_require__("../../../../../src/app/layout/site_main_footer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__layout_site_main_header__ = __webpack_require__("../../../../../src/app/layout/site_main_header.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_user_user_phone_varification__ = __webpack_require__("../../../../../src/app/user/user_phone_varification.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__material_material_module__["a" /* MaterialModule */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_5__user_routing_module__["a" /* UserRoutingModule */], __WEBPACK_IMPORTED_MODULE_7__dr_doctor_module__["a" /* DoctorModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* HttpModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LogIn */], __WEBPACK_IMPORTED_MODULE_6__user_signup__["a" /* UserSignup */], __WEBPACK_IMPORTED_MODULE_11__layout_site_main_header__["a" /* SiteMainHeader */], __WEBPACK_IMPORTED_MODULE_10__layout_site_main_footer__["a" /* SiteMainFooter */], __WEBPACK_IMPORTED_MODULE_12_app_user_user_phone_varification__["a" /* UserPhoneVarification */]],
            providers: [__WEBPACK_IMPORTED_MODULE_8__user_service__["a" /* UserService */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LogIn */], __WEBPACK_IMPORTED_MODULE_10__layout_site_main_footer__["a" /* SiteMainFooter */], __WEBPACK_IMPORTED_MODULE_11__layout_site_main_header__["a" /* SiteMainHeader */], __WEBPACK_IMPORTED_MODULE_12_app_user_user_phone_varification__["a" /* UserPhoneVarification */]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/user/user_phone_varification.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPhoneVarification; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_user_user_service__ = __webpack_require__("../../../../../src/app/user/user_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserPhoneVarification = /** @class */ (function () {
    function UserPhoneVarification(formBuilder, acroute, userService, matSnackBar) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.acroute = acroute;
        this.userService = userService;
        this.matSnackBar = matSnackBar;
        this.mobileNo = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]("", []);
        this.otp = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]("", []);
        this.countDown = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            var count = 20;
            setInterval(function () {
                count--;
                if (count > 0) {
                    observer.next("Send Again In " + count + " Sec");
                }
                if (count == 0) {
                    observer.next("Send Otp Again");
                    _this.deactivated = false;
                }
            }, 1000);
        });
        this.countDownVoice = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            var count = 40;
            setInterval(function () {
                count--;
                if (count > 0) {
                    observer.next("Voice Otp " + count + " Sec");
                }
                if (count == 0) {
                    observer.next("Send Otp By Voice Call");
                    _this.deactivatedVoiceOtp = false;
                }
            }, 1000);
        });
        this.deactivated = true;
        this.deactivatedVoiceOtp = true;
    }
    UserPhoneVarification.prototype.ngOnInit = function () {
        var _this = this;
        this.mobileVarificationForm = this.formBuilder.group({
            "mobileNo": this.mobileNo,
            "otp": this.otp
        });
        this.acroute.queryParams.subscribe(function (params) {
            _this.mobileNo.setValue(params["mobileNo"]);
            console.log(params);
        });
    };
    UserPhoneVarification.prototype.sendOtpAgain = function () {
        var _this = this;
        this.userService.sendOtpAgainText(this.mobileNo.value).subscribe(function (data) {
            if (data != undefined) {
                var formResult = data.json();
                if (formResult.result) {
                    _this.matSnackBar.open(formResult.message, "Done");
                }
                else {
                    _this.matSnackBar.open(formResult.message, "Error");
                }
            }
        });
    };
    UserPhoneVarification.prototype.sendOtpAgainVoice = function () {
        var _this = this;
        this.userService.sendOtpAgainVoice(this.mobileNo.value).subscribe(function (data) {
            if (data != undefined) {
                var formResult = data.json();
                if (formResult.result) {
                    _this.matSnackBar.open(formResult.message, "Done");
                }
                else {
                    _this.matSnackBar.open(formResult.message, "Error");
                }
            }
        });
    };
    UserPhoneVarification.prototype.submit = function () {
        var _this = this;
        this.userService.varifyMobileNo(this.mobileVarificationForm.value).subscribe(function (data) {
            console.log(_this.mobileVarificationForm);
            if (data != undefined) {
                var formResult = data.json();
                if (formResult.result) {
                    _this.matSnackBar.open(formResult.message, "Done");
                }
                else {
                    _this.matSnackBar.open(formResult.message, "Error");
                }
            }
        });
    };
    UserPhoneVarification = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "user-phone-varification",
            template: __webpack_require__("../../../../../src/app/user/html/user_phone_varification.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4_app_user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["y" /* MatSnackBar */]])
    ], UserPhoneVarification);
    return UserPhoneVarification;
}());



/***/ }),

/***/ "../../../../../src/app/user/user_routing_config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_signup__ = __webpack_require__("../../../../../src/app/user/user_signup.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login__ = __webpack_require__("../../../../../src/app/user/login.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_user_user_phone_varification__ = __webpack_require__("../../../../../src/app/user/user_phone_varification.ts");



var userSignup = { path: "user/signup", component: __WEBPACK_IMPORTED_MODULE_0__user_signup__["a" /* UserSignup */] };
var userLogin = { path: "user/login", component: __WEBPACK_IMPORTED_MODULE_1__login__["a" /* LogIn */] };
var userPhoneVarification = { path: "user/phone/varification", component: __WEBPACK_IMPORTED_MODULE_2_app_user_user_phone_varification__["a" /* UserPhoneVarification */] };
var UserRoutes = [userSignup, userLogin, userPhoneVarification];


/***/ }),

/***/ "../../../../../src/app/user/user_routing_module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_routing_config__ = __webpack_require__("../../../../../src/app/user/user_routing_config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_routing_config__["a" /* UserRoutes */])],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            declarations: []
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/user/user_service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.commOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    UserService.prototype.userSignup = function (user) {
        var url = "/api/public/signup/user";
        return this.http.post(url, user, this.commOptions);
    };
    UserService.prototype.userLogin = function (user) {
        var url = "/user/login";
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        body.set("userName", user.mobileNo);
        body.set("password", user.password);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, body.toString(), options);
    };
    UserService.prototype.userLogout = function () {
        var url = "/logout";
        return this.http.post(url, this.commOptions);
    };
    UserService.prototype.getCurrentUser = function () {
        var url = "/api/public/get/currentuser";
        return this.http.get(url, this.commOptions);
    };
    UserService.prototype.sendOtpAgainText = function (mobileNo) {
        console.log(mobileNo);
        var url = "/api/public/user/resend/otp";
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        params.set("mobileNo", mobileNo);
        params.set("retryType", "text");
        this.commOptions.params = params;
        return this.http.get(url, this.commOptions);
    };
    UserService.prototype.sendOtpAgainVoice = function (mobileNo) {
        var url = "/api/public/user/resend/otp";
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        params.set("mobileNo", mobileNo);
        params.set("retryType", "voice");
        this.commOptions.params = params;
        return this.http.get(url, this.commOptions);
    };
    UserService.prototype.varifyMobileNo = function (body) {
        var url = "/api/public/user/mobileno/verify";
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        params.set("mobileNo", body.mobileNo);
        params.set("otp", body.otp);
        this.commOptions.params = params;
        return this.http.get(url, this.commOptions);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/user/user_signup.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSignup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error__ = __webpack_require__("../../../../../src/app/error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user__ = __webpack_require__("../../../../../src/app/user/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_service__ = __webpack_require__("../../../../../src/app/user/user_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserSignup = /** @class */ (function () {
    function UserSignup(formBuilder, userService, matSnackBar, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.matSnackBar = matSnackBar;
        this.router = router;
        this.model = new Object();
        this.error = new __WEBPACK_IMPORTED_MODULE_1__error__["a" /* Error */]();
        this.mobileNo = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]("", [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].maxLength(10),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].minLength(10)
        ]);
        this.role = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]("", [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required
        ]);
        this.password = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]("", [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required
        ]);
    }
    UserSignup.prototype.ngOnInit = function () {
        this.userSignupForm = this.formBuilder.group({
            mobileNo: this.mobileNo,
            role: this.role,
            password: this.password
        });
    };
    UserSignup.prototype.submit = function () {
        console.log(this.userSignupForm);
        if (this.userSignupForm.status == "VALID") {
            var user = new __WEBPACK_IMPORTED_MODULE_4__user__["a" /* User */]();
            user.mobileNo = this.userSignupForm.value.mobileNo;
            user.password = this.userSignupForm.value.password;
            user.role = this.userSignupForm.value.role;
            console.log(user);
            this.userService.userSignup(user).subscribe(function (data) {
                var formResult = data.json();
                console.log(formResult);
                // if(formResult.result){
                //     this.router.navigateByUrl("user/phone/varification?mobileNo="+user.mobileNo);
                //     this.matSnackBar.open(formResult.message,"Done",{
                //         duration:3000
                //     });
                // }
                // else if(formResult.error){
                //     this.matSnackBar.open(formResult.message,"Error",{
                //         duration:3000
                //     });
                // }
            });
        }
    };
    UserSignup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "user-signup",
            template: __webpack_require__("../../../../../src/app/user/html/user_signup.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["y" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], UserSignup);
    return UserSignup;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map