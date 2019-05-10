(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/ngx-password-visible-input-lib/fesm5/ngx-password-visible-input-lib.js":
/*!*************************************************************************************!*\
  !*** ./dist/ngx-password-visible-input-lib/fesm5/ngx-password-visible-input-lib.js ***!
  \*************************************************************************************/
/*! exports provided: FormlyFieldPasswordVisibleInputComponent, NgxPasswordVisibleInputLibModule, PasswordVisibleInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormlyFieldPasswordVisibleInputComponent", function() { return FormlyFieldPasswordVisibleInputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPasswordVisibleInputLibModule", function() { return NgxPasswordVisibleInputLibModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordVisibleInputComponent", function() { return PasswordVisibleInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PasswordVisibleInputComponent = /** @class */ (function () {
    function PasswordVisibleInputComponent(elem, renderer) {
        this.elem = elem;
        this.renderer = renderer;
        this.color = '';
        this.raised = false;
        this.mode = 'mousedown';
        this.isShowing = false;
    }
    /**
     * @return {?}
     */
    PasswordVisibleInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.input = this.elem.nativeElement.querySelector('input');
        if (!this.input) {
            throw new Error("No input element found.");
        }
        this.renderer.setStyle(this.input, 'flex', '1');
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    PasswordVisibleInputComponent.prototype.toggleShowing = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this.mode === 'toggle') {
            this.isShowing = !this.isShowing;
            this.updateInputType();
        }
    };
    /**
     * @private
     * @return {?}
     */
    PasswordVisibleInputComponent.prototype.updateInputType = /**
     * @private
     * @return {?}
     */
    function () {
        this.renderer.setAttribute(this.input, 'type', this.isShowing ? 'text' : 'password');
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    PasswordVisibleInputComponent.prototype.mousedown = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this.mode === 'mousedown') {
            this.isShowing = true;
            this.updateInputType();
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    PasswordVisibleInputComponent.prototype.mouseup = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this.mode === 'mousedown') {
            this.isShowing = false;
            this.updateInputType();
        }
    };
    PasswordVisibleInputComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngx-password-visible-input',
                    template: "<ng-content></ng-content>\n<button mat-button [color]=\"color\" [ngClass]=\"(raised ? 'mat-raised-button' : '' )\" type=\"button\" \n  (click)=\"toggleShowing($event)\" (mousedown)=\"mousedown($event)\" (mouseup)=\"mouseup($event)\">\n  <mat-icon>{{isShowing ? 'visibility' : 'visibility_off'}}</mat-icon>\n</button>",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    styles: [":host{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%;flex-direction:row}"]
                }] }
    ];
    /** @nocollapse */
    PasswordVisibleInputComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    PasswordVisibleInputComponent.propDecorators = {
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        raised: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        formControlName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return PasswordVisibleInputComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormlyFieldPasswordVisibleInputComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(FormlyFieldPasswordVisibleInputComponent, _super);
    function FormlyFieldPasswordVisibleInputComponent() {
        return _super.call(this) || this;
    }
    Object.defineProperty(FormlyFieldPasswordVisibleInputComponent.prototype, "type", {
        get: /**
         * @return {?}
         */
        function () {
            return this.to.type || 'text';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormlyFieldPasswordVisibleInputComponent.prototype, "name", {
        get: /**
         * @return {?}
         */
        function () {
            return this.model[this.key] ? this.model[this.key].name : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    FormlyFieldPasswordVisibleInputComponent.prototype.onChanged = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // tslint:disable-next-line: no-non-null-assertion
        (/** @type {?} */ (this.field.formControl)).setValue(event.target.value);
    };
    FormlyFieldPasswordVisibleInputComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "<ngx-password-visible-input>\n    <input type=\"password\" matInput [placeholder]=\"placeholder\" (change)=\"onChanged($event)\">\n</ngx-password-visible-input>\n",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    FormlyFieldPasswordVisibleInputComponent.ctorParameters = function () { return []; };
    FormlyFieldPasswordVisibleInputComponent.propDecorators = {
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return FormlyFieldPasswordVisibleInputComponent;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__["FieldType"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxPasswordVisibleInputLibModule = /** @class */ (function () {
    function NgxPasswordVisibleInputLibModule() {
    }
    NgxPasswordVisibleInputLibModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        PasswordVisibleInputComponent,
                        FormlyFieldPasswordVisibleInputComponent
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    ],
                    exports: [
                        PasswordVisibleInputComponent,
                        FormlyFieldPasswordVisibleInputComponent
                    ]
                },] }
    ];
    return NgxPasswordVisibleInputLibModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ngx-password-visible-input-lib.js.map


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, scripts, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = {"name":"ngx-password-visible-input","version":"0.1.0","scripts":{"ng":"ng","start":"ng serve","build":"ng build","build_lib":"ng build ngx-password-visible-input-lib","test":"ng test","lint":"ng lint","e2e":"ng e2e","npm_pack":"cp README.md dist/virtual-repeat-angular-lib && cd dist/virtual-repeat-angular-lib && npm pack && cp *.tgz ../releases/","npm_build_and_package":"npm run build_lib && npm run npm_pack","npm_publish":"npm publish dist/ngx-password-visible-input-lib/ngx-password-visible-input-0.1.0.tgz","ngh_publish":"npm run build_lib && ng build --base-href https://gerardcarbo.github.io/ngx-password-visible-input/ && ngh --dir dist/ngx-password-visible-input","git_push":"git push origin master"},"private":true,"dependencies":{"@angular/animations":"~7.2.0","@angular/cdk":"^7.3.7","@angular/common":"~7.2.0","@angular/compiler":"~7.2.0","@angular/core":"~7.2.0","@angular/forms":"~7.2.0","@angular/material":"^7.3.7","@angular/platform-browser":"~7.2.0","@angular/platform-browser-dynamic":"~7.2.0","@angular/router":"~7.2.0","@ngx-formly/core":"5.1.2","@ngx-formly/material":"5.1.2","core-js":"^2.5.4","rxjs":"~6.3.3","tslib":"^1.9.0","zone.js":"~0.8.26"},"devDependencies":{"@angular-devkit/build-angular":"~0.13.0","@angular-devkit/build-ng-packagr":"~0.13.0","@angular/cli":"~7.3.5","@angular/compiler-cli":"~7.2.0","@angular/language-service":"~7.2.0","@types/jasmine":"~2.8.8","@types/jasminewd2":"~2.0.3","@types/node":"^8.9.5","codelyzer":"~4.5.0","jasmine-core":"~2.99.1","jasmine-spec-reporter":"~4.2.1","karma":"~4.0.0","karma-chrome-launcher":"~2.2.0","karma-coverage-istanbul-reporter":"~2.0.1","karma-jasmine":"~1.1.2","karma-jasmine-html-reporter":"^0.2.2","ng-packagr":"^5.1.0","protractor":"~5.4.0","ts-node":"~7.0.0","tsickle":">=0.34.0","tslib":"^1.9.0","tslint":"~5.11.0","typescript":"~3.2.2"}};

/***/ }),

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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    <a href=\"https://github.com/gerardcarbo/ngx-password-visible-input\">\n      <svg style=\"fill: black;margin-right: 5px\" viewBox=\"0 0 16 16\" width=\"24\" height=\"24\" aria-hidden=\"true\">\n          <path fill-rule=\"evenodd\" d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z\"></path>\n      </svg>\n      {{ title }} {{version}}\n    </a>\n  </h1>\n  <mat-card>\n    <mat-card-header><mat-card-title>Angular Material Ready</mat-card-title></mat-card-header>\n      <div fxLayout fxLayoutAlign=\"center center\" fxLayoutGap=\"30px\">\n      <label>Mode: </label>\n      <mat-radio-group [matTooltip]=\"Mode\" [(ngModel)]=\"mode\">\n        <mat-radio-button value=\"toggle\">Toggle</mat-radio-button>\n        <mat-radio-button value=\"mousedown\">Mouse Down</mat-radio-button>\n      </mat-radio-group>\n    </div>\n    <div fxLayout fxLayoutAlign=\"center center\" fxLayoutGap=\"30px\">\n      <label>Color: </label>\n      <mat-radio-group [matTooltip]=\"Color\" [(ngModel)]=\"color\">\n        <mat-radio-button value=\"\">(None)</mat-radio-button>\n        <mat-radio-button value=\"primary\">primary</mat-radio-button>\n        <mat-radio-button value=\"accent\">accent</mat-radio-button>\n        <mat-radio-button value=\"warn\">warn</mat-radio-button>\n      </mat-radio-group>\n    </div>\n    <mat-checkbox [matTooltip]=\"Raised\" [(ngModel)]=\"raised\">Raised</mat-checkbox>\n    <ngx-password-visible-input [mode]=\"mode\" [color]=\"color\" [raised]=\"raised\" >\n      <input  type=\"password\" placeholder=\"Insert password\" [(ngModel)]=\"pwd\" />\n    </ngx-password-visible-input>\n  </mat-card>\n  <mat-card>\n    <mat-card-header><mat-card-title>Formly support!</mat-card-title></mat-card-header>\n      <form [formGroup]=\"formlyForm\">\n          <mat-dialog-content>\n            <formly-form [form]=\"formlyForm\" [fields]=\"formlyFields\" [model]=\"formlyModel\">\n            </formly-form>\n          </mat-dialog-content>\n          <mat-dialog-actions>\n            <button fxFlex type=\"submit\" mat-raised-button class=\"mat-primary\" (click)=\"save()\" >Login</button>\n          </mat-dialog-actions>\n        </form>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  margin: 5px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\na {\n  color: black;\n  text-decoration: none;\n  font-weight: 400;\n  background-color: transparent;\n  outline: none;\n}\n\nmat-card {\n  display: flex;\n  flex-direction: column;\n  max-width: 500px;\n  margin: auto;\n  margin-bottom: 10px;\n}\n\nmat-card mat-radio-group,\nmat-card mat-checkbox,\nmat-card mat-radio-button {\n  margin: 5px;\n}\n\nngx-password-visible-input {\n  max-width: 300px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXGFydFxcY29kZVxcbmd4LXBhc3N3b3JkLXZpc2libGUtaW5wdXQvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLHlDQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURDRTs7O0VBR0UsV0FBQTtBQ0NKOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4gIG1hdC1yYWRpby1ncm91cCxcclxuICBtYXQtY2hlY2tib3gsXHJcbiAgbWF0LXJhZGlvLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICB9XHJcbn1cclxuXHJcbm5neC1wYXNzd29yZC12aXNpYmxlLWlucHV0IHtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuXHJcbiIsIjpob3N0IHtcbiAgbWFyZ2luOiA1cHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG5hIHtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5tYXQtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbm1hdC1jYXJkIG1hdC1yYWRpby1ncm91cCxcbm1hdC1jYXJkIG1hdC1jaGVja2JveCxcbm1hdC1jYXJkIG1hdC1yYWRpby1idXR0b24ge1xuICBtYXJnaW46IDVweDtcbn1cblxubmd4LXBhc3N3b3JkLXZpc2libGUtaW5wdXQge1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IGF1dG87XG59Il19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.version = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].VERSION;
        this.title = 'ngx-password-visible-input';
        this.mode = 'mousedown';
        this.color = 'primary';
        this.raised = true;
        this.pwd = 'ThisIsAPassword!';
        // formly data
        this.formlyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
        this.formlyFields = [
            {
                key: 'user',
                type: 'input',
                templateOptions: {
                    placeholder: 'User',
                    required: true
                }
            },
            {
                key: 'password',
                type: 'visiblePassword',
                templateOptions: {
                    placeholder: 'Password',
                    required: true
                }
            }
        ];
        this.formlyModel = {
            user: '',
            password: ''
        };
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_password_visible_input_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-password-visible-input-lib */ "./dist/ngx-password-visible-input-lib/fesm5/ngx-password-visible-input-lib.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");
/* harmony import */ var _ngx_formly_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-formly/material */ "./node_modules/@ngx-formly/material/fesm5/ngx-formly-material.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                ngx_password_visible_input_lib__WEBPACK_IMPORTED_MODULE_4__["NgxPasswordVisibleInputLibModule"],
                _ngx_formly_core__WEBPACK_IMPORTED_MODULE_8__["FormlyModule"].forRoot({
                    types: [
                        { name: 'visiblePassword', component: ngx_password_visible_input_lib__WEBPACK_IMPORTED_MODULE_4__["FormlyFieldPasswordVisibleInputComponent"], wrappers: ['form-field'] }
                    ],
                }),
                _ngx_formly_material__WEBPACK_IMPORTED_MODULE_9__["FormlyMaterialModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/*
 * This module imports and re-exports all Angular Material modules for convenience,
 * so only 1 module import is needed in your feature modules.
 * See https://material.angular.io/guide/getting-started#step-3-import-the-component-modules.
 *
 * To optimize your production builds, you should only import the components used in your app.
 */




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    VERSION: __webpack_require__(/*! ../../package.json */ "./package.json").version
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\art\code\ngx-password-visible-input\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map