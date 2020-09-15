webpackJsonp(["bike-selection.module"],{

/***/ "../../../../../src/app/bike-selection/bike-selection-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BikeSelectionRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bike_selection_component__ = __webpack_require__("../../../../../src/app/bike-selection/bike-selection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__bike_selection_component__["a" /* BikeSelectionComponent */], data: { title: "Ontrack: Monthly bike rental in Bangalore | Two wheelers for rent" }
    }
];
var BikeSelectionRoutingModule = (function () {
    function BikeSelectionRoutingModule() {
    }
    BikeSelectionRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]
            ]
        })
    ], BikeSelectionRoutingModule);
    return BikeSelectionRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/bike-selection/bike-selection.component.html":
/***/ (function(module, exports) {

module.exports = "<!--change plan-->\r\n<!-- <div mdbModal #changePlanModal=\"mdbModal\" style=\"z-index: 9999\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\"\r\n  aria-labelledby=\"myBasicModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered modal-md\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header web-color \">\r\n        <h5 class=\"white-text bold\" id=\"exampleModalLabel\">Change Plans</h5>\r\n        <button type=\"button\" style=\"position:absolute !important; right:25px !important;\" class=\"close white-text\"\r\n          data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"changePlanModal.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body p-0\">\r\n        <div class=\"container\">\r\n          <div class=\"row\"> -->\r\n            <!-- <button type=\"button\" style=\"\" class=\"close text-right\" (click)=\"changePlanModal.hide()\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button> -->\r\n            <!-- <div class=\"col-lg-12 col-md-12 col-sm-12 mt-3 block-padding\"> -->\r\n              <!-- <h6 style=\"font-family:'GilroyExtraBold'\" class=\"mt-2 mb-4 container\">Change Plans</h6> -->\r\n              <!-- <div class=\"\">\r\n                <mat-button-toggle-group #group=\"matButtonToggleGroup\" class=\"container\" [value]=\"selectedMonthsVal\"\r\n                  (change)=\"initModelData(group.value)\">\r\n                  <mat-button-toggle class=\"pt-1 col\" value=1>\r\n                    1 Month\r\n                  </mat-button-toggle>\r\n                  <mat-button-toggle class=\"pt-1 col\" value=3>\r\n                    3 Months\r\n                  </mat-button-toggle>\r\n                  <mat-button-toggle class=\"pt-1 col\" value=6>\r\n                    6 Months\r\n                  </mat-button-toggle>\r\n                  <mat-button-toggle class=\"pt-1 col\" value=12>\r\n                    12 Months\r\n                  </mat-button-toggle>\r\n                </mat-button-toggle-group>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer \">\r\n        <button class=\"btn btn-primary btn-style mb-2\" (click)=\"changePlanModal.hide()\">Change</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n<!--end change plan-->\r\n\r\n<section class=\"pt-5 bsmt-5 white\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <!--First Left Block-->\r\n      <div class=\"col-lg-6 col-md-6 col-sm-12 pt-0 pb-3 mb-3 mobi-bottom\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12 gray-block  mb-2 \">\r\n            <div class=\"row\" *ngFor=\"let d of modelDataToShow\">\r\n              <div class=\"box-bottom-border\">\r\n                <div class=\"col-lg-8 col-md-8 col-sm-9 pt-3 pb-2 width-70 d-none d-sm-none d-md-block\">\r\n                  <h4 class=\"bold\">{{d.name}}</h4>\r\n                </div>\r\n                <!-- <div class=\"col-lg-4 col-md-4 col-sm-3 pt-2 pb-2 width-30 d-none d-sm-none d-md-block text-right\">\r\n                  <button (click)=\"changePlanModal.show()\" class=\"change-btn color hoverable\"><img src=\"../../assets/images/edit-icon.png\"\r\n                      class=\"mr-1\">Change\r\n                    Plan</button>\r\n                </div> -->\r\n              </div>\r\n              <div class=\"col-lg-6 col-md-6 col-sm-6 left-block-img p-2\" style=\"border-right:1px solid #DFDFE6\">\r\n                <img class=\"img-fluid\" src=\"{{d.image}}\">\r\n                <button (click)=\"changePlanModal.show()\" class=\"change-btn color d-sm-block d-md-none\">\r\n                  <img src=\"../../assets/images/edit-icon.png\" class=\"hide-btn\">Change\r\n                  Plan</button>\r\n              </div>\r\n              <div class=\"col-lg-6 col-md-6 col-sm-6 p-2 right-block-info bike-info text-left \">\r\n                <div class=\" pt-2  d-sm-block d-md-none\">\r\n                  <h6 class=\"bold text-left p-1 mt-2\">{{d.name}}</h6>\r\n                </div>\r\n                <div class=\"plan-section\">\r\n                  <!-- <div class=\"pb-2\" style=\"color:#7A7A7A\">Plan</div> -->\r\n                  <!-- <span *ngIf=\" this.selectedMonthsVal == 1 ; else subscUser\">\r\n                    <h6 class=\"bold\">{{selectedMonthsVal}} Month</h6>\r\n                  </span>\r\n                  <ng-template #subscUser>\r\n                    <h6 class=\"bold\">{{selectedMonthsVal}} Months</h6>\r\n                  </ng-template> -->\r\n                </div>\r\n                <div class=\"rent-section\">\r\n                  <div class=\"pb-2\" style=\"color:#7A7A7A\">Rent</div>\r\n                  <h6 class=\"bold\">₹ {{d.price}}/month </h6>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-lg-12 gray-block p-2 pt-3 pb-3 mt-3 d-none d-sm-none d-md-block p-0\" *ngIf=\" this.selectedMonthsVal != 1\">\r\n\r\n            <h4 class=\"bold pt-2 pb-2 pl-2\">Subscription Plan </h4>\r\n            <hr class=\"clearfix w-100 \">\r\n            <div class=\"container\">\r\n              <div class=\"row p-2\">\r\n                <p><span class=\"bold\">1st Month:</span> You pay {{ this.subscription_plan_list[0].effective_rental}},\r\n                  we add {{ this.subscription_plan_list[0].wallet}} to your Ontrack wallet!</p>\r\n                <p><span class=\"bold\"> 2nd Month:</span> You pay {{ this.subscription_plan_list[0].effective_rental}}\r\n                  (or you redeem {{ this.subscription_plan_list[0].wallet}} from Ontrack wallet and pay\r\n                  {{ this.subscription_plan_list[1].effective_rental}}), we add {{\r\n                  this.subscription_plan_list[1].wallet}}. If you don’t want to redeem {{\r\n                  this.subscription_plan_list[0].wallet}} this month, it’s fine. You can redeem all of it\r\n                  next month!</p>\r\n                <p><span class=\"bold\"> 3rd Month:</span> You can redeem the remaining amount in the Ontrack wallet!</p>\r\n                <p class=\"bold\">\r\n                  The same applies to a 6 month or 12 month subscription plan! </p>\r\n                <br>\r\n                <p>\r\n                  Here’s a chart for your reference!</p>\r\n\r\n\r\n                <table class=\"table table-bordered\">\r\n                  <tr>\r\n                    <th class=\"bold\">Month</th>\r\n                    <th class=\"bold\">Effective<br>Monthly Rental Fee</th>\r\n                    <th class=\"bold\">Ontrack Wallet (post<br>transaction)</th>\r\n                  </tr>\r\n\r\n                  <tr *ngFor=\"let getData of subscription_plan_list\">\r\n                    <td>{{getData.month}}</td>\r\n                    <td>{{getData.effective_rental}}</td>\r\n                    <td>{{getData.wallet}}</td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-lg-12 gray-block p-2 pt-3 pb-3 mt-3 d-none d-sm-none d-md-block\">\r\n            <div class=\"container\">\r\n              <h4 class=\"bold pt-2 pb-2\">You get more than just a bike! </h4>\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-6 col-md-6 col-sm-12 ticks pt-2\">\r\n                  <ul class=\"\">\r\n                    <li>zero security deposit</li>\r\n                    <li>lucrative lock-in packages</li>\r\n                    <li>pick-up and delivery service </li>\r\n                    <li>unlimited km</li>\r\n                  </ul>\r\n                </div>\r\n                <div class=\"col-lg-6 col-md-6 col-sm-12 ticks pt-2\">\r\n                  <ul>\r\n                    <li>free maintenance</li>\r\n                    <li>insurance covered bikes</li>\r\n                    <li>helmet</li>\r\n                    <li>roadside assistance</li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n      <!--End Left Block-->\r\n      <!--right Block-->\r\n      <div class=\"col-lg-6 col-md-6 col-sm-12 signPadding\" *ngIf=\"checkUserLoginStatus() === false; else AddressTemplateView\">\r\n        <!-- First Block-->\r\n        <div class=\" white box pt-2 pb-3 mb-3\">\r\n          <div class=\" pb-3\" id=\"loginBox\" *ngIf=\"show; else hide\">\r\n            <!--start of Signup content-->\r\n            <div class=\"pb-1\">\r\n              <div class=\"container\">\r\n                <div class=\"row mt-3\">\r\n                  <div class=\"col-lg-4 col-md-4 col-sm-12 p-1 w-58 pl-3 mbpleft\">\r\n                    <h4 style=\"font-family:'GilroyExtraBold';\">Sign Up</h4>\r\n                  </div>\r\n                  <div class=\"col-lg-8 col-md-8 col-sm-12 p-1 text-right pt-2 w-42 pr-3\">\r\n                    <span style=\"font-size:14px;\">Existing User?\r\n                      <button style=\"font-family:GilroyExtraBold;color:#4E44D8;background-color: transparent;border:none; cursor: pointer;padding: 0\"\r\n                        (click)=\"toggleH()\">{{buttonName}}</button>\r\n                    </span>\r\n                  </div>\r\n\r\n\r\n                </div>\r\n                <!-- Start of sign up form -->\r\n                <form class=\"example-form pt-4\" novalidate (ngSubmit)=\"onFormSubmit(signupForm)\" #signupForm=\"ngForm\">\r\n                  <mat-form-field class=\"example-full-width mb-1\">\r\n                    <input matInput placeholder=\"First Name\" name=\"fName\" [ngModel]=\"userSignUpData.fName\" required>\r\n                  </mat-form-field>\r\n                  <mat-form-field class=\"example-full-width mb-1\">\r\n                    <input matInput placeholder=\"Surname\" name=\"lName\" [ngModel]=\"userSignUpData.lName\" required>\r\n                  </mat-form-field>\r\n\r\n                  <ul class=\"donate-now\">\r\n\r\n                    <li>\r\n                      <input type=\"radio\" id=\"male\" name=\"gender\" value=1 (change)=\"changeGender(1)\" />\r\n                      <label for=\"male\" class=\"male-icon\">\r\n                        <span class=\"left-text\">Male</span></label>\r\n                    </li>\r\n                    <li>\r\n                      <input type=\"radio\" id=\"female\" name=\"gender\" value=0 (change)=\"changeGender(0)\" />\r\n                      <label for=\"female\" class=\"female-icon\">\r\n                        <span class=\"left-text\">Female</span></label>\r\n                    </li>\r\n                  </ul>\r\n\r\n                  <mat-form-field class=\"example-full-width mb-1 mt-3\">\r\n                    <input matInput placeholder=\"Contact Number\" type=\"number\" name=\"mobile\" #mobile=\"ngModel\"\r\n                      [ngModel]=\"userSignUpData.mobile\" required minlength=10 maxlength=10 pattern=\"^((\\\\+91-?)|0)?[0-9]{10}$\">\r\n                  </mat-form-field>\r\n\r\n                  <div *ngIf=\"mobile.invalid && (mobile.dirty || mobile.touched)\" class=\"alert alert-danger\">\r\n                    <div *ngIf=\"mobile.errors?.required\">\r\n                      mobile number can't be blank\r\n                    </div>\r\n                    <div *ngIf=\"mobile.errors?.pattern && mobile.touched\">\r\n                      The mobile number doesn't seem right\r\n                    </div>\r\n                  </div>\r\n\r\n                  <mat-form-field class=\"example-full-width mb-1\">\r\n                    <input matInput placeholder=\"Email\" name=\"email\" [(ngModel)]=\"userSignUpData.email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\"\r\n                      required>\r\n                  </mat-form-field>\r\n                  <div *ngIf=\"userSignUpData.email.invalid && (userSignUpData.email.dirty || userSignUpData.email.touched)\"\r\n                    class=\"alert alert-danger\">\r\n                    <div *ngIf=\"userSignUpData.email.errors?.required\">\r\n                      Email field can't be blank\r\n                    </div>\r\n                    <div *ngIf=\"userSignUpData.email.errors?.pattern && userSignUpData.email.touched\">\r\n                      The email id doesn't seem right\r\n                    </div>\r\n                  </div>\r\n\r\n                  <mat-form-field class=\"example-full-width mb-1\">\r\n                    <input type=\"password\" matInput placeholder=\"Password\" name=\"password\" [ngModel]=\"userSignUpData.password\"\r\n                      required>\r\n                  </mat-form-field>\r\n\r\n                  <div class=\"red\">\r\n                    {{SignUpmsg}}\r\n                  </div>\r\n                  <div>\r\n                    <button class=\"waves-light btn btn-web br-25 mt-2 \" style=\" background-color: #4E44D8 !important; text-transform: capitalize;font-size: 18px\">Next</button>\r\n                  </div>\r\n                </form>\r\n                <!-- End of signup form-->\r\n              </div>\r\n            </div>\r\n            <!-- End of Signup content-->\r\n          </div>\r\n\r\n          <!--Login content end-->\r\n          <div class=\"pb-3\">\r\n            <ng-template #hide>\r\n              <div class=\"pt-2 pb-5\">\r\n                <!--Login content-->\r\n                <!-- contact form -->\r\n                <div class=\"container \">\r\n                  <div class=\"row mt-3\">\r\n                    <div class=\"col-lg-3 col-md-12 col-sm-12 w-58\">\r\n                      <h4 style=\"font-family:'GilroyExtraBold';\">Login</h4>\r\n                    </div>\r\n                    <div class=\"col-lg-9 col-md-12 col-sm-12 p-1 pt-2 w-42 pr-3 text-right\">\r\n                      <span style=\"font-size:14px;\">New User?\r\n                        <button style=\"font-family:GilroyExtraBold;color:#4E44D8;background-color: transparent;border:none; cursor: pointer;padding: 0\"\r\n                          (click)=\"toggleH()\">{{buttonName}}</button>\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                  <!-- Start of sign in form -->\r\n                  <form class=\"example-form pt-4\" novalidate (ngSubmit)=\" onFormLogin(loginForm)\" #loginForm=\"ngForm\">\r\n                    <mat-form-field class=\"example-full-width mb-3\">\r\n                      <input matInput placeholder=\"Email\" name=\"username\" [ngModel]=\"user.username\" required pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\"\r\n                        #username=\"ngModel\">\r\n                    </mat-form-field>\r\n                    <div *ngIf=\"username.invalid && (username.dirty || username.touched)\" class=\"alert alert-danger\">\r\n                      <div *ngIf=\"username.errors?.required\">\r\n                        user name field can't be blank\r\n                      </div>\r\n                      <div *ngIf=\"username.errors?.pattern && username.touched\">\r\n                        The email id doesn't seem right\r\n                      </div>\r\n                    </div>\r\n                    <mat-form-field class=\"example-full-width mb-3\">\r\n                      <input type=\"password\" name=\"password\" [ngModel]=\"user.password\" matInput placeholder=\"Password\"\r\n                        required>\r\n                    </mat-form-field>\r\n                    <p class=\"text-right d-none d-sm-none d-md-block\"><a style=\"color:#4E44D8;font-size:14px;\" (click)=\"forgotPasswordModal.show();basicModal.hide()\">Forgot\r\n                        Password</a></p>\r\n                    <div class=\"red-text\">\r\n                      {{SignInmsg}}\r\n                    </div>\r\n                    <div>\r\n                      <div>\r\n                        <button class=\"waves-light btn btn-web br-25 mt-2\" style=\" background-color: #4E44D8 !important; text-transform: capitalize;font-size: 16px\">Login</button>\r\n                      </div>\r\n                      <p class=\"text-center pt-2  d-md-none d-sm-block\"><a style=\"color:#4E44D8;font-size:14px; width: 100%;\"\r\n                          (click)=\"forgotPasswordModal.show();basicModal.hide()\">Forgot\r\n                          Password</a></p>\r\n                    </div>\r\n                    <div class=\"clear\"></div>\r\n                    <div>\r\n                      <p class=\"mt-4\" style=\"font-size:0.9rem\">\r\n                        We no longer support login via Social accounts. To recover your old accounts please <a href=\"#\">click\r\n                          here</a>\r\n                      </p>\r\n                    </div>\r\n                  </form>\r\n                  <!-- End of sign in form -->\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--ng-if-closing-->\r\n\r\n      <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n        <ng-template #AddressTemplateView>\r\n          <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n            <div *ngIf=\"checkAddressNull() == true; else documentTemplateView\">\r\n              <!--add address-->\r\n              <!--Second Block-->\r\n              <div class=\"p-4 white box  pt-2 pb-3 mb-3\">\r\n                <h4 class=\"bold mbpt-3\">Residential Address</h4>\r\n                <div class=\"container\">\r\n                  <div class=\"row\">\r\n                    <form class=\"example-form pt-3\">\r\n                      <mat-form-field class=\"example-full-width mb-1\">\r\n                        <input #houseNo1 matInput placeholder=\"House Number\" name=\"house_no\" [(ngModel)]=\"house_no\"\r\n                          required>\r\n                      </mat-form-field>\r\n                      <mat-form-field class=\"example-full-width mb-1\">\r\n                        <input #street1 matInput placeholder=\"Street\" name=\"street\" [(ngModel)]=\"street\" required>\r\n                      </mat-form-field>\r\n                      <mat-form-field class=\"example-full-width mb-1\">\r\n                        <input #locality1 matInput placeholder=\"Locality\" name=\"locality\" [(ngModel)]=\"locality\"\r\n                          required>\r\n                      </mat-form-field>\r\n                      <mat-form-field class=\"example-full-width mb-1\">\r\n                        <input #landmark1 matInput placeholder=\"Landmark\" name=\"landmark\" [(ngModel)]=\"landmark\"\r\n                          required>\r\n                      </mat-form-field>\r\n                      <mat-form-field class=\"example-full-width mb-1\">\r\n                        <input #city1 matInput placeholder=\"City\" name=\"city\" [(ngModel)]=\"City\" required>\r\n                      </mat-form-field>\r\n                      <mat-form-field class=\"example-full-width mb-1\">\r\n                        <input #state1 matInput placeholder=\"State\" name=\"state\" [(ngModel)]=\"state\" required>\r\n                      </mat-form-field>\r\n                      <mat-form-field class=\"example-full-width mb-1\">\r\n                        <input #pincode1 matInput type=\"number\" minlength=\"6\" placeholder=\"Pincode\" name=\"pincode\"\r\n                          [(ngModel)]=\"pincode\" required>\r\n                      </mat-form-field>\r\n                      {{addressUpdateMsg}}\r\n                      <div>\r\n                        <button class=\"waves-light btn btn-web br-25 mt-2 \" style=\" background-color: #4E44D8 !important; text-transform: capitalize;font-size: 18px\"\r\n                          (click)=\"addUserAddress(houseNo1.value, street1.value, locality1.value,landmark1.value, city1.value,\r\n                      state1.value ,pincode1.value)\">Next</button>\r\n                      </div>\r\n                    </form>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!--End Second Block-->\r\n              <!--end add address-->\r\n            </div>\r\n\r\n            <ng-template #documentTemplateView>\r\n              <!-- Start of document upload templete html-->\r\n              <!-- <div *ngIf=\"(checkDocumentNull() === true); else deleveryTemplateView\"> -->\r\n              <div *ngIf=\"(checkDocumentNullState === true); else deleveryTemplateView\">\r\n                <div class=\"p-4 white box  pt-2 pb-3 mb-3\">\r\n                  <h4 class=\"bold pb-1 paddingtop-1\">Upload Documents</h4>\r\n                  <h5 style=\"font-size:14px;color:#2a2a2a;text-transform: uppercase\" class=\"font pt-3 mb-3 bold\">Driving\r\n                    Licence</h5>\r\n                  <div class=\"container pr-0 pt-2\">\r\n                    <div class=\"row head-box pr-0 pl-0\">\r\n                      <div class=\"col-lg-6 w-6\">\r\n                        <img src=\"{{user.DLfront}}\" onerror='this.src=\"../../assets/images/image-icon.svg\"' class=\"pr-2 img-wrapper img-fluid\">\r\n                        <span class=\"text-color\">Front </span>\r\n                        <span *ngIf=\"dlFrontProgress != 0;\">\r\n                          ({{dlFrontProgress}}%)\r\n                        </span>\r\n                      </div>\r\n\r\n                      <div class=\"col-lg-6 w-4 text-right d-flex justify-content-end\">\r\n                        <div class=\"upload-btn-wrapper left \">\r\n                          <button mat-button class=\"img-edit-btn\" style=\"\"> <img src=\"../../assets/images/Cloud-upload - simple-line-icons.png\">\r\n                            UPLOAD </button>\r\n                          <input type='file' (change)=\"onSelectFile($event, 'DLfront');\" accept=\".jpg,.pdf, .png, .jpeg|images/*\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"row head-box mt-4 pr-0 pl-0\">\r\n                      <div class=\"col-lg-6 w-6\">\r\n                        <img src=\"{{user.DLback}}\" onerror='this.src=\"../../assets/images/image-icon.svg\"' class=\"pr-2 img-wrapper img-fluid\">\r\n                        <span class=\"text-color\">Back </span>\r\n                        <span *ngIf=\"dlbackProgress != 0;\">\r\n                          ({{dlbackProgress}}%)\r\n                        </span>\r\n                      </div>\r\n\r\n                      <div class=\"col-lg-6 w-4 text-right\">\r\n                        <div class=\"upload-btn-wrapper \">\r\n                          <button mat-button class=\"img-edit-btn\" style=\"\"> <img src=\"../../assets/images/Cloud-upload - simple-line-icons.png\">\r\n                            UPLOAD </button>\r\n                          <input type='file' (change)=\"onSelectFile($event, 'DLback');\" accept=\".jpg,.pdf, .png, .jpeg|images/*\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <h5 style=\"font-size:14px;color:#2a2a2a;text-transform: uppercase\" class=\"font pt-4 mb-3 bold\">ID\r\n                    Proof</h5>\r\n                  <div class=\"container pr-0\">\r\n                    <div class=\"row head-box mt-4 pr-0 pl-0\">\r\n                      <div class=\"col-lg-6 w-6\">\r\n                        <img src=\"{{user.idProof}}\" onerror='this.src=\"../../assets/images/image-icon.svg\"' class=\"pr-2 img-wrapper img-fluid\">\r\n                        <span class=\"text-color\">Front </span>\r\n                        <span *ngIf=\"idproofProgress != 0;\">\r\n                          ({{idproofProgress}}%)\r\n                        </span>\r\n                      </div>\r\n\r\n                      <div class=\"col-lg-6 w-4 text-right\">\r\n                        <div class=\"upload-btn-wrapper \">\r\n                          <button mat-button class=\"img-edit-btn\" style=\"\"> <img src=\"../../assets/images/Cloud-upload - simple-line-icons.png\">\r\n                            UPLOAD </button>\r\n                          <input type='file' (change)=\"onSelectFile($event, 'idProof');\" accept=\".jpg,.pdf, .png, .jpeg|images/*\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"container pr-0\">\r\n                    <div class=\"row head-box mt-4 pr-0 pl-0\">\r\n                      <div class=\"col-lg-6 w-6\">\r\n                        <img src=\"{{user.idProofBack}}\" onerror='this.src=\"../../assets/images/image-icon.svg\"' class=\"pr-2 img-wrapper img-fluid\">\r\n                        <span class=\"text-color\">Back</span>\r\n                        <span *ngIf=\"idproofBackProgress != 0;\">\r\n                          ({{idproofBackProgress}}%)\r\n                        </span>\r\n                      </div>\r\n\r\n                      <div class=\"col-lg-6 w-4 text-right\">\r\n                        <div class=\"upload-btn-wrapper \">\r\n                          <button mat-button class=\"img-edit-btn\" style=\"\"> <img src=\"../../assets/images/Cloud-upload - simple-line-icons.png\">\r\n                            UPLOAD </button>\r\n                          <input type='file' (change)=\"onSelectFile($event, 'idProofBack');\" accept=\".jpg,.pdf, .png, .jpeg|images/*\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"box-content br-5 p-2 mt-4\">\r\n                    <form #DlNumberForm=\"ngForm\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-lg-8 pt-2\"> \r\n                          <mat-form-field class=\"example-full-width mb-2 mt-1 \">\r\n                            <input #dl_number matInput placeholder=\"DL Number\" name=\"DLnumber\" class=\"text-uppercase\" [(ngModel)]=\"DLnumber\" maxlength=\"16\"\r\n                              required>\r\n                          </mat-form-field>\r\n                        </div>\r\n                        <div class=\"col-lg-4\">\r\n                          <button class=\"btn btn-web br-25\" [disabled]=\"!DlNumberForm.form.valid\" (click)=\"addUserDlnumber(dl_number.value)\">Save</button>\r\n                        </div>\r\n                        <div>\r\n                          {{uerDlUpdateMsg}}\r\n                        </div>\r\n                      </div>\r\n                    </form>\r\n                  </div>\r\n\r\n                  <div class=\"container pr-5\">\r\n                    <div class=\"text-right pt-1\">\r\n                      <span>Accepted Documents</span><span class=\"infoCharge\">\r\n                        <i class=\"material-icons \" matTooltip=\"Your I.D. proof and driving license is mandatory to continue with the booking process. Please upload it here to book your preferred bike. \r\n                        \">error_outline</i></span>\r\n                    </div>\r\n                  </div>\r\n                  {{docUploadErrorMsg}}\r\n                  <div class=\"mb-1\">\r\n                    <button class=\"waves-light btn btn-web br-25 \" (click)=\"proceedDocumentUpload()\">Next</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- Start of document upload templete html-->\r\n\r\n              <!-- Start of Delivery Information templete html-->\r\n              <ng-template #deleveryTemplateView>\r\n                <div class=\" white box  pt-2 pb-3 mb-3\">\r\n                  <div class=\"container signPadding\">\r\n                    <h4 class=\"bold pt-3 pb-3\">Rental Type</h4>\r\n                    <!--start plan section-->\r\n\r\n                    <!--start delivery type section-->\r\n                    <p class=\"small-text\" style=\"\">Delivery Type</p>\r\n                    <div class=\"main_div\">\r\n                      <ul class=\"select-btn\">\r\n                        <!--start self-pickup button-->\r\n                        <li>\r\n                          <input type=\"radio\" id=\"selfPickupType\" class=\"btn btn-primary\" name=\"delivery-type\" value=\"self-pickup\"\r\n                            checked />\r\n                          <label for=\"selfPickupType\" class=\"self-icon\" (click)=\"toggleVisibility('Menu1');deliveryModeApply(0);\">\r\n                            <span class=\"s-text\" style=\"\">Self<br> Pickup</span>\r\n                          </label>\r\n                        </li>\r\n                        <!--end self-pickup button-->\r\n                        <!--start doorstep button-->\r\n                        <li>\r\n                          <input type=\"radio\" id=\"doorStepType\" name=\"delivery-type\" value=\"doorstep\" />\r\n                          <label for=\"doorStepType\" class=\"door-icon\" (click)=\"toggleVisibility('Menu2');deliveryModeApply(1);\">\r\n                            <span class=\"s-text\">We’ll come to you!<br> Rs. {{deliveryCharge}} </span>\r\n                          </label>\r\n                        </li>\r\n                        <!--end doorstep button-->\r\n                      </ul>\r\n\r\n\r\n                      <div class=\"inner_div mt-2\">\r\n                        <!-- Menu1 content-->\r\n                        <div id=\"Menu1\">\r\n                          <form class=\"pt-5\">\r\n                            <!--start select location-->\r\n                            <div class=\"pt-4\">\r\n                              <mat-form-field class=\"select-width\">\r\n                                <mat-select placeholder=\"Pickup Location\" (selectionChange)=\"pickUpLocationApply($event.value)\"\r\n                                  name=\"location\" aria-required=\"true\">\r\n                                  <mat-option *ngFor=\"let l of location\" [value]=\"l.id\">\r\n                                    {{l.name}}\r\n                                  </mat-option>\r\n                                </mat-select>\r\n                              </mat-form-field>\r\n                            </div>\r\n                            <!--end select location-->\r\n                            <!--start Address-->\r\n                            <div class=\"\">\r\n                              <mat-form-field class=\"select-width\">\r\n                                <textarea matInput placeholder=\"Pickup Address\" readonly value={{selectedLoaction}}></textarea>\r\n                              </mat-form-field>\r\n                            </div>\r\n\r\n                            <div class=\"def-text\">*Pickup timing is between 10 AM to 8 PM on weekdays (Mon-Fri) and 10:30 AM to 7 PM\r\n                              on weekends (Sat-Sun).</div>\r\n                              <br>\r\n                          \r\n                            <!--end Address-->\r\n                            <!--start check helmet-->\r\n                            <div class=\"select-width \">\r\n                              <p class=\"small-text\" style=\"\">Extra Helmet</p>\r\n                              <ul class=\"donate-now1 pb-5\">\r\n                                <li>\r\n                                  <input type=\"radio\" id=\"noExtraHelmet\" name=\"helmet\" value=0 (change)=\"extraHelmetApply(0)\"\r\n                                    [checked]=\"extraHelmetType === 0\" />\r\n                                  <label for=\"noExtraHelmet\" class=\"dont-want\">\r\n                                    <span class=\"m-text\">No</span>\r\n                                  </label>\r\n                                </li>\r\n\r\n                                <li>\r\n                                  <input type=\"radio\" id=\"yesExtraHelmet\" name=\"helmet\" value=1 (change)=\"extraHelmetApply(1)\"\r\n                                    [checked]=\"extraHelmetType === 1\" />\r\n                                  <label for=\"yesExtraHelmet\" class=\"want\">\r\n                                    <span class=\"m-text\" style=\"\">Yes (at Rs.50)</span>\r\n                                  </label>\r\n                                </li>\r\n                              </ul>\r\n                            </div>\r\n                            <!--end check helmet-->\r\n                            <!--start referral code-->\r\n                            <div class=\"mt-4\">\r\n                              <mat-tab-group class=\"select-width\" [selectedIndex]=\"referalAndPointTabPos\"\r\n                                (selectedTabChange)=\"tabSelectedReferalPoint($event)\">\r\n\r\n                                <mat-tab label=\"REFERRAL CODE\">\r\n                                  <mat-form-field class=\"select-width pt-2\">\r\n                                    <input [disabled]=\"isPromoCodeDisabled\" #referralCodeTxt matInput placeholder=\"Promo Code\" [value]=\"referralCodeT\">\r\n\r\n                                    <div *ngIf=\"!(usePromoCode || useCouponCode); else removePromoCode\">\r\n                                      <button  class=\"ap-btn\" (click)=\"applyReferal(referralCodeTxt.value)\">Apply</button>\r\n                                    </div>\r\n                                    <ng-template #removePromoCode>\r\n                                      <button  class=\"ap-btn\" (click)=\"removeReferal()\">Remove</button>\r\n                                    </ng-template>\r\n\r\n                                  </mat-form-field>\r\n                                  <span class=\"red\">\r\n                                    {{referralMsg}}\r\n                                  </span>\r\n                                </mat-tab>\r\n\r\n                                <mat-tab label=\"REDEEM POINTS\">\r\n                                  <!-- <mat-checkbox class=\"select-width pt-5 pb-0 mb-0\">450 Points Available</mat-checkbox> -->\r\n                                  <div class=\"custom-control custom-checkbox select-width\">\r\n                                    <input [disabled]=\"isCheckboxDisabled\" #chck type=\"checkbox\" class=\"custom-control-input\" id=\"pointCheckBox\"\r\n                                      [checked]=\"usePoints\" (change)=\"applyPoints(!usePoints)\">\r\n\r\n                                    <label class=\"custom-control-label\" *ngIf=\"availablePoints != 0; else EarnPointsTemp2\"\r\n                                      for=\"pointCheckBox\">{{availablePoints}}\r\n                                      Points Available</label>\r\n\r\n                                    <ng-template #EarnPointsTemp2>\r\n                                      <div class=\"alert-box\"> <a routerLink=\"/referral\"> No points available? Want to\r\n                                          earn</a></div>\r\n                                    </ng-template>\r\n\r\n                                  </div>\r\n                                  <br><br>\r\n                                </mat-tab>\r\n                                \r\n                              </mat-tab-group>\r\n                            </div>\r\n                            <!--end referral code-->\r\n                            <!--start terms-->\r\n                            <div class=\"\">\r\n                              <ul style=\"\" class=\"term-list\">\r\n                                <li>By proceeding to the payment page, you agree to our <span class=\"blue-text\">‘Terms\r\n                                    and\r\n                                    Conditions’</span>.</li>\r\n                                <li>Home delivery can take upto 48 hrs.</li>\r\n                                <li>You can pick-up the bike between 10am - 7pm.</li>\r\n                              </ul>\r\n                            </div>\r\n                            <!--end terms-->\r\n                            <div class=\"red-text\">{{pickup_location_msg}}</div>\r\n                            <div class=\"red-text\">{{booking_error_msg}}</div>\r\n\r\n\r\n                            <!--start proceed-->\r\n                            <div class=\" pb-5\">\r\n                              <button mdbBtn type=\"button\" color=\"primary\" rounded=\"true\" class=\"waves-light btn-pay\"\r\n                                style=\"\" mdbWavesEffect (click)=\"initiatePaymentFun(0)\">Proceed\r\n                                to Pay <i class=\"fa rupee\" aria-hidden=\"true\"></i> {{totalPyamentPrice}}\r\n                              </button>\r\n                            </div>\r\n                            <!--end proceed-->\r\n                            <div class=\"red-text\" style=\"display:block; margin-top: 15px;\">{{ongoing_error_msg}}</div>\r\n                          </form>\r\n                          <!-- end Menu1 content-->\r\n                        </div>\r\n\r\n                        <div id=\"Menu2\" style=\"display: none;\">\r\n                          <!-- Menu2 content-->\r\n                          <form class=\"pt-2\">\r\n\r\n                            <div class=\"\">\r\n                              <mat-form-field class=\"select-width\">\r\n                                <textarea #addressDel id=\"addressDel\" matInput placeholder=\"Address\"></textarea>\r\n                              </mat-form-field>\r\n                            </div>\r\n\r\n                            <mat-form-field class=\"select-width\">\r\n                              <input #cityUserDel id=\"cityUserDel\" matInput placeholder=\"City\" name=\"city\">\r\n                            </mat-form-field>\r\n\r\n                            <mat-form-field class=\"select-width\">\r\n                              <input #pinUserDel id=\"pinUserDel\" matInput placeholder=\"Pincode\" name=\"city\">\r\n                            </mat-form-field>\r\n\r\n                            <div class=\"pb-2\">\r\n                              <!-- <mat-checkbox class=\"select-width pt-5\">Delivery Address Same as Above Address</mat-checkbox> -->\r\n                              <div class=\"custom-control custom-checkbox select-width\">\r\n                                <input type=\"checkbox\" class=\"custom-control-input select-width pt-5\" id=\"defaultChecked2\"\r\n                                  (change)=\"sameDeliveryAddress()\">\r\n                                <label class=\"custom-control-label\" for=\"defaultChecked2\">Delivery\r\n                                  Address Same as\r\n                                  Above Address</label>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <!--start check helmet-->\r\n                            <div class=\"select-width \">\r\n                              <p class=\"small-text\" style=\"\">Extra Helmet</p>\r\n                              <ul class=\"donate-now1 pb-5\">\r\n                                <li>\r\n                                  <input type=\"radio\" id=\"noExtraHelmet1\" name=\"helmet1\" value=0 (change)=\"extraHelmetApply(0)\"\r\n                                    [checked]=\"extraHelmetType === 0\" />\r\n                                  <label for=\"noExtraHelmet1\" class=\"want\">\r\n                                    <span class=\"m-text\">No</span>\r\n                                  </label>\r\n                                </li>\r\n\r\n                                <li>\r\n                                  <input type=\"radio\" id=\"yesExtraHelmet1\" name=\"helmet1\" value=1 (change)=\"extraHelmetApply(1)\"\r\n                                    [checked]=\"extraHelmetType === 1\" />\r\n                                  <label for=\"yesExtraHelmet1\" class=\"dont-want\">\r\n                                    <span class=\"m-text\" style=\"\">Yes (at Rs.50)</span>\r\n                                  </label>\r\n                                </li>\r\n                              </ul>\r\n                            </div>\r\n                            <!--end check helmet-->\r\n\r\n                            <!--start referral code-->\r\n                            <div class=\"mt-4\">\r\n                              <mat-tab-group class=\"select-width\" [selectedIndex]=\"referalAndPointTabPos\"\r\n                                (selectedTabChange)=\"tabSelectedReferalPoint($event)\">\r\n                                <mat-tab label=\"REFERRAL CODE\" class=\"border\" style=\"border:1px solid #ccc !important\">\r\n                                  <mat-form-field class=\"select-width pt-2\">\r\n                                    <input [disabled]=\"isPromoCodeDisabled\" #referralCodeTxt1 matInput placeholder=\"Promo Code\" [value]=\"referralCodeT\">\r\n\r\n                                    <div *ngIf=\"!(usePromoCode || useCouponCode); else removePromoCode1\">\r\n                                      <button class=\"ap-btn\" (click)=\"applyReferal(referralCodeTxt1.value)\">Apply</button>\r\n                                    </div>\r\n                                    <ng-template #removePromoCode1>\r\n                                      <button class=\"ap-btn\" (click)=\"removeReferal()\">Remove</button>\r\n                                    </ng-template>\r\n\r\n                                  </mat-form-field>\r\n                                  <div class=\"red\">\r\n                                    {{referralMsg}}\r\n                                  </div>\r\n                                </mat-tab>\r\n                                <mat-tab label=\"REDEEM POINTS\" class=\"border\" style=\"border:1px solid #ccc !important\">\r\n                                  <!-- <mat-checkbox class=\"select-width pt-5 pb-0 mb-0\">450 Points Available</mat-checkbox> -->\r\n                                  <div class=\"custom-control custom-checkbox select-width\">\r\n                                    <input #chck type=\"checkbox\" class=\"custom-control-input\" id=\"pointCheckBox1\"\r\n                                      [checked]=\"usePoints\" (change)=\"applyPoints(!usePoints)\">\r\n\r\n                                    <label class=\"custom-control-label\" *ngIf=\"availablePoints != 0; else EarnPointsTemp\"\r\n                                      for=\"pointCheckBox1\">{{availablePoints}}\r\n                                      Points Available</label>\r\n\r\n                                    <ng-template #EarnPointsTemp>\r\n                                      <div class=\"alert-box\"><a routerLink=\"/referral\">No points available ? Want to\r\n                                          earn</a> </div>\r\n                                    </ng-template>\r\n\r\n                                  </div>\r\n                                  <br><br>\r\n                                </mat-tab>\r\n                              </mat-tab-group>\r\n                            </div>\r\n                            <!--end referral code-->\r\n                            <!--start terms-->\r\n                            <div class=\"\">\r\n                              <ul style=\"\" class=\"term-list\">\r\n                                <li>By proceeding to the payment page, you agree to our <span class=\"blue-text\">‘Terms\r\n                                    and\r\n                                    Conditions’</span>.</li>\r\n                                <li>Home delivery can take upto 48 hrs.</li>\r\n                                <li>You can pick-up the bike between 10am - 7pm.</li>\r\n                              </ul>\r\n                            </div>\r\n                            <!--end terms-->\r\n                            <div class=\"red-text\">{{pickup_location_msg}}</div>\r\n                            <div class=\"red-text\">{{booking_error_msg}}</div>\r\n\r\n                            <!--start proceed button-->\r\n                            <div class=\"\">\r\n                              <button mdbBtn type=\"button\" color=\"primary\" rounded=\"true\" class=\"waves-light btn btn-web br-25\"\r\n                                style=\"\" mdbWavesEffect (click)=\"initiatePaymentFun(1)\">Proceed\r\n                                to Pay <i class=\"fa rupee\" aria-hidden=\"true\"></i> {{totalPyamentPrice}}\r\n                              </button>\r\n                            </div>\r\n                            <!--end proceed button-->\r\n                            <div class=\"red-text\" style=\"display:block;margin-top: 15px;\">{{ongoing_error_msg}}</div>\r\n                          </form>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <!--end delivery type section-->\r\n                  </div>\r\n                  <!--end container-->\r\n                </div>\r\n                <!--End Fourth block-->\r\n              </ng-template>\r\n              <!-- End of of Delivery Information templete html-->\r\n            </ng-template>\r\n          </div>\r\n        </ng-template>\r\n      </div>\r\n\r\n      <!-- payment error if alreday have ongoing booking-->\r\n      <div mdbModal #ongoingError=\"mdbModal\" style=\"z-index: 9999\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\"\r\n        aria-labelledby=\"myBasicModalLabel\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-notify modal-danger text-white modal-dialog-centered modal-lg \" role=\"document\">\r\n\r\n          <div class=\"modal-content\">\r\n            <!--Header-->\r\n            <div class=\"modal-header\">\r\n              <h5 class=\"modal-title\" id=\"exampleModalLabel\">Error</h5>\r\n              <button type=\"button\" class=\"close text-white\" (click)=\"ongoingError.hide()\" aria-label=\"Close\" style=\"position:relative; right:15; top:-10 !important\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <!-- <button type=\"button\" style=\"\" class=\"close text-right\" (click)=\"ongoingError.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button> -->\r\n            <div class=\"modal-body \">\r\n              <div class=\"container p-4\">\r\n                {{ongoingErrorMsg}}\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!--err ongoing booking-->\r\n\r\n\r\n      <div class=\"col-lg-12 gray-block p-2 pt-3 pb-3 mt-3 d-sm-block d-md-none p-0\" *ngIf=\" this.selectedMonthsVal != 1\">\r\n\r\n        <h4 class=\"bold pt-2 pb-2\">Subscription Plan </h4>\r\n        <hr class=\"clearfix w-100 \">\r\n        <div class=\"container\">\r\n          <div class=\"row p-2\">\r\n            <p><span class=\"bold\">1st Month:</span> You pay 3500, we add 130 to your Ontrack wallet!</p>\r\n            <p><span class=\"bold\"> 2nd Month:</span> You pay 3500 (or you redeem 130 from Ontrack wallet and pay\r\n              3370), we add 170. If you don’t want to redeem 130 this month, it’s fine. You can redeem all of it\r\n              next month!</p>\r\n            <p><span class=\"bold\"> 3rd Month:</span> You can redeem the remaining amount in the Ontrack wallet!</p>\r\n            <p class=\"bold\">\r\n              The same applies to a 6 month or 12 month subscription plan! </p>\r\n            <p>\r\n              Here’s a chart for your reference!</p>\r\n\r\n            <table class=\"table table-bordered\">\r\n              <tr>\r\n                <th class=\"bold\">Month</th>\r\n                <th class=\"bold\">Effective<br>Monthly Rental Fee</th>\r\n                <th class=\"bold\">Ontrack Wallet (post<br>transaction)</th>\r\n              </tr>\r\n\r\n              <tr *ngFor=\"let getData of subscription_plan_list\">\r\n                <td>{{getData.month}}</td>\r\n                <td>{{getData.effective_rental}}</td>\r\n                <td>{{getData.wallet}}</td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--end right Block-->\r\n    </div>\r\n  </div>\r\n  <!-- start of forget password model-->\r\n  <div mdbModal #forgotPasswordModal=\"mdbModal\" style=\"z-index: 9999\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\"\r\n    aria-labelledby=\"myBasicModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered modal-md\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-body p-0\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <button type=\"button\" style=\"right: 10px !important\" class=\"close text-right\" (click)=\"forgotPasswordModal.hide()\"\r\n                aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n              <div class=\"col-lg-6 col-md-6 forgot-img-block d-none d-md-block\">\r\n                <!-- <img src=\"../../assets/images/forgot-password.png\" class=\"img-fluid\" style=\"height:auto;\"> -->\r\n              </div>\r\n              <div class=\"col-lg-6 col-md-6 col-sm-12 mt-3 padding-popup pt-5 pb-5 pl-4 pr-4\">\r\n                <h6 style=\"font-family:'GilroyExtraBold'\" class=\"mt-2 mb-4\">Forgot Password</h6>\r\n                <mat-form-field class=\"example-full-width mb-3 mt-3 \">\r\n                  <input #email1 matInput placeholder=\"Email\" name=\"email\" [(ngModel)]=\"email\" required id=\"email\">\r\n                </mat-form-field>\r\n                {{emailResetMsg}}\r\n                <div>\r\n                  <div>\r\n                    <button class=\"btn btn-web br-25 mb-2\" (click)=\"resetPwd(email1.value)\">Reset</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End of forget password model-->\r\n\r\n  <!--start verify OTP modal-->\r\n  <div mdbModal #OTPModal=\"mdbModal\" style=\"z-index: 9999\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\"\r\n    aria-labelledby=\"myBasicModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered modal-md\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-body p-0\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <button type=\"button\" style=\"\" class=\"close text-right\" (click)=\"OTPModal.hide()\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n              <div class=\"col-lg-6 col-md-6 otp-img-block p-0 d-none d-md-block\">\r\n                <!-- <img src=\"../../assets/images/otp-image.svg\" class=\"img-fluid\" style=\"height:auto;\"> -->\r\n              </div>\r\n              <div class=\"col-lg-6 col-md-6 col-sm-12 mt-3 block-padding pt-5 pb-5 pl-3 pr-2\">\r\n                <h6 style=\"font-family:'GilroyExtraBold'\">One Time Password</h6>\r\n                <mat-form-field class=\"example-full-width mb-3 \">\r\n                  <input #otpTextField matInput placeholder=\"Enter OTP\" name=\"otptext\" [(ngModel)]=\"otptext\" required\r\n                    minlength=\"4\">\r\n                </mat-form-field>\r\n                {{otpErrorMsg}}\r\n                <div class=\"text-right\">Didn't receive OTP ? <a (click)=\"resendOtpN()\" class=\"blue-text\">Re-Send</a></div>\r\n                <button class=\"btn btn-primary btn-style mb-3\" (click)=\"verifyOtpN(otpTextField.value);\">Verify</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--end verify OTP modal-->\r\n\r\n  <!-- #payuform ngNoForm -->\r\n  <div mdbModal #paymentProceed=\"mdbModal\" data-dismiss=\"basicModal\" style=\"overflow-y: auto\" class=\"modal\" tabindex=\"-1\"\r\n    role=\"dialog\" aria-labelledby=\"myBasicModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered modal-md\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-body\">\r\n          <div class=\"container p-3 pt-4\">\r\n            <h5 class=\"bold pt-2 pb-2\" *ngFor=\"let d of modelDataToShow\">{{d.name}}</h5>\r\n            <div>\r\n              <!-- <div class=\"row\"> -->\r\n              <button type=\"button\" style=\"\" class=\"close text-right\" (click)=\"paymentProceed.hide()\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n\r\n\r\n              <div class=\"row\" *ngIf=\"modelDataOriginal?.length;else demoPriceError\">\r\n                <div class=\"col-lg-7 col-md-7 w-7 pt-1 pb-1\">Rental Charge </div>\r\n                <div class=\"col-lg-5 col-md-5 w-3 pt-1 pb-1 text-right\"><i _ngcontent-c24=\"\" aria-hidden=\"true\" class=\"fa fa-rupee pr-1\"></i>{{modelDataOriginal[0].price}}\r\n                </div>\r\n              </div>\r\n              <ng-template #demoPriceError>\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-7 col-md-7 w-7 pt-1 pb-1\">Rental Charge </div>\r\n                  <div class=\"col-lg-5 col-md-5 w-3 pt-1 pb-1 text-right\"><i _ngcontent-c24=\"\" aria-hidden=\"true\" class=\"fa fa-rupee pr-1\"></i>0000.00\r\n                  </div>\r\n                </div>\r\n              </ng-template>\r\n\r\n              <div class=\"row\" *ngIf=\"extraHelmetType == 0; else ExtraHelmetTempNN\">\r\n                <div class=\"col-lg-7 col-md-7 w-7 pt-1 pb-1\">Extra Helmet Charge (No) </div>\r\n                <div class=\"col-lg-5 col-md-5 w-3 pt-1 pb-1 text-right\"><i _ngcontent-c24=\"\" aria-hidden=\"true\" class=\"fa fa-rupee pr-1\"></i>00.00\r\n                </div>\r\n              </div>\r\n              <ng-template #ExtraHelmetTempNN>\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-7 col-md-7 w-7 pt-1 pb-1\">Extra Helmet Charge (Yes) </div>\r\n                  <div class=\"col-lg-5 col-md-5 w-3 pt-1 pb-1 text-right\"><i _ngcontent-c24=\"\" aria-hidden=\"true\" class=\"fa fa-rupee pr-1\"></i>50.00\r\n                  </div>\r\n                </div>\r\n              </ng-template>\r\n\r\n              <div class=\"row\" *ngIf=\"bookingDeliveryType == 1; else selfPickupTemplate\">\r\n                <div class=\"col-lg-7 col-md-7 w-7 pt-1 pb-1\">Door Delivery Charges </div>\r\n                <div class=\"col-lg-5 col-md-5 w-3 pt-1 pb-1 text-right\"><i _ngcontent-c24=\"\" aria-hidden=\"true\" class=\"fa fa-rupee pr-1\"></i>{{deliveryCharge}}.00\r\n                </div>\r\n              </div>\r\n              <ng-template #selfPickupTemplate>\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-7 col-md-7 w-7 pt-1 pb-1\">Self Pickup </div>\r\n                  <div class=\"col-lg-5 col-md-5 w-3 pt-1 pb-1 text-right\"><i _ngcontent-c24=\"\" aria-hidden=\"true\" class=\"fa fa-rupee pr-1\"></i>00.00\r\n                  </div>\r\n                </div>\r\n              </ng-template>\r\n              <div *ngIf=\"user.penaltyCharge > 0\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-7 col-md-7 w-7 pt-1 pb-1\">Penalty</div>\r\n                  <div class=\"col-lg-5 col-md-5 w-3 pt-1 pb-1 text-right\">\r\n                    <i _ngcontent-c24=\"\" aria-hidden=\"true\" class=\"fa fa-rupee pr-1\"></i>{{user.penaltyCharge}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-7 col-md-7 w-7 pt-1 pb-1\">Penalty Rental Charge</div>\r\n                  <div class=\"col-lg-5 col-md-5 w-3 pt-1 pb-1 text-right\">\r\n                    <i _ngcontent-c24=\"\" aria-hidden=\"true\" class=\"fa fa-rupee pr-1\"></i>{{finalAmount}}\r\n                  </div>\r\n                </div>\r\n              </div>\r\n             <div class=\"row\">\r\n              <div class=\"col-lg-7 col-md-7 w-7 pt-1 pb-1\" *ngIf=\"usePoints == true;\">Points Used </div>\r\n              <div class=\"col-lg-5 col-md-5 w-3 pt-1 pb-1 text-right\" *ngIf=\"usePoints == true;\">\r\n               \r\n                -  <i _ngcontent-c24=\"\" aria-hidden=\"true\" class=\"fa fa-rupee pr-1\"></i> {{availablePoints}} </div>\r\n             \r\n             </div>\r\n\r\n              <hr class=\"pt-1 pb-1 container\" style=\"\">\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-7 col-md-7 w-7 pt-1 pb-1 bold\">Total Amount Payable </div>\r\n                <div class=\"col-lg-5 col-md-5 w-3 pt-1 pb-1 bold text-right\"><i _ngcontent-c24=\"\" aria-hidden=\"true\"\r\n                    class=\"fa fa-rupee pr-1\"></i>{{totalPyamentPrice}}</div>\r\n              </div>\r\n\r\n              <div class=\"pt-2 pb-3\">\r\n                <ul style=\"\" class=\"term-list\">\r\n                  <li>By proceeding to the payment page, you agree to our <span class=\"blue-text\">‘Terms\r\n                      and Conditions’</span>.</li>\r\n                </ul>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n          <!-- <form ngNoForm action=\"https://test.payu.in/_payment\" name=\"payuform\" method=\"POST\" id=\"payuform\" target=\"_self\"> -->\r\n            <form ngNoForm action=\"https://secure.payu.in/_payment\" name=\"payuform\" method=\"POST\" id=\"payuform\" target=\"_self\">\r\n            <!-- </form> target=\"payment_popup\" onsubmit=\"window.open('about:blank','payment_popup','width=900,height=500');\"> -->\r\n\r\n            <!-- <input type=\"hidden\" ng-model=\"transactionContext\" name=\"transactionContext\" [(ngModel)]=\"paymentGatewayData.transactionContext\" value=\"paymentGatewayData.transactionContext\" /> -->\r\n\r\n            <!-- <input type=\"hidden\" ng-model=\"transactionContext\" name=\"transactionContext\" value=\"eyJvcmRlckNvbnRleHQiOnsidHJhY2tpbmdJbmZvIjp7InR5cGUiOiJIVFRQUyIsInVybCI6Imh0dHBzOi8vd3d3LnRlc3QuY29tL29yZGVycy9oaXN0b3J5In19LCJmYXJlRGV0YWlscyI6eyJ0b3RhbEFtb3VudCI6NzMwLCJwYXlhYmxlQW1vdW50Ijo3MzB9LCJjYXJ0RGV0YWlscyI6eyJjYXJ0SXRlbXMiOlt7ImNhdGVnb3J5IjoiU0hPUFBJTkciLCJpdGVtSWQiOjM3MDY2MiwicHJpY2UiOjM2NSwiaXRlbU5hbWUiOiI1IFBpZWNlIENvdXZlcnR1cmUgQ2hvY29sYXRlIEJveCIsInF1YW50aXR5IjoyLCJhZGRyZXNzIjp7ImFkZHJlc3NTdHJpbmciOiJTYWJoYSBwZWFybCwgMm5kIGZsb29yODAgZmVldCByb2FkLCBJbmRpcmFuYWdhciIsImNpdHkiOiJCZW5nYWx1cnUiLCJwaW5jb2RlIjoiNTYwMDM4IiwiY291bnRyeSI6IkluZGlhIiwibGF0aXR1ZGUiOjEyLjk2NjMsImxvbmdpdHVkZSI6NzcuNjAzOX0sInNoaXBwaW5nSW5mbyI6eyJkZWxpdmVyeVR5cGUiOiJTVEFOREFSRCIsInRpbWUiOnsidGltZXN0YW1wIjoxNTczNDY3OTgwLCJ6b25lT2ZmU2V0IjoiKzA1OjMwIn19fV19fQ==\" />\r\n            <input type=\"hidden\" name=\"bankcode\" value=\"PPINAPP\" />\r\n            <input type=\"hidden\" name=\"pg\" value=\"CASH\" /> -->\r\n\r\n\r\n            <input type=\"hidden\" ng-model=\"key\" name=\"key\" [(ngModel)]=\"paymentGatewayData.key\" value=\"paymentGatewayData.key\" />\r\n            <input type=\"hidden\" ng-model=\"hash\" name=\"hash\" [(ngModel)]=\"paymentGatewayData.hash\" value=\"paymentGatewayData.hash\" />\r\n            <input type=\"hidden\" ng-model=\"txnid\" name=\"txnid\" [(ngModel)]=\"paymentGatewayData.txnid\" value=\"paymentGatewayData.txnid\" />\r\n            <input type=\"hidden\" ng-model=\"amount\" name=\"amount\" [(ngModel)]=\"paymentGatewayData.amount\" value=\"paymentGatewayData.amount\" />\r\n            <input type=\"hidden\" ng-model=\"firstname\" name=\"firstname\" [(ngModel)]=\"paymentGatewayData.firstname\" value=\"paymentGatewayData.firstname\" />\r\n            <!-- <input type=\"hidden\" ng-model=\"firstname\" name=\"firstname\"  value=\"Prachee Behera\" /> -->\r\n\r\n            \r\n            <input type=\"hidden\" ng-model=\"email\" name=\"email\" [(ngModel)]=\"paymentGatewayData.email\" value=\"paymentGatewayData.email\" />\r\n            <!-- <input type=\"hidden\" ng-model=\"email\" name=\"email\" value=\"test123ra@gmail.com\" /> -->\r\n\r\n            <input type=\"hidden\" ng-model=\"phone\" name=\"phone\" [(ngModel)]=\"paymentGatewayData.phone\" value=\"paymentGatewayData.phone\" />\r\n            <input type=\"hidden\" ng-model=\"productinfo\" name=\"productinfo\" [(ngModel)]=\"paymentGatewayData.productinfo\"\r\n              value=\"paymentGatewayData.productinfo\" />\r\n            <input type=\"hidden\" ng-model=\"udf1\" name=\"udf1\" [(ngModel)]=\"paymentGatewayData.udf1\" value=\"paymentGatewayData.udf1\" />\r\n            <input type=\"hidden\" ng-model=\"udf2\" name=\"udf2\" [(ngModel)]=\"paymentGatewayData.udf2\" value=\"paymentGatewayData.udf2\" />\r\n            <input type=\"hidden\" ng-model=\"udf3\" name=\"udf3\" [(ngModel)]=\"paymentGatewayData.udf3\" value=\"paymentGatewayData.udf3\" />\r\n            <input type=\"hidden\" ng-model=\"udf4\" name=\"udf4\" [(ngModel)]=\"paymentGatewayData.udf4\" value=\"paymentGatewayData.udf4\" />\r\n            <input type=\"hidden\" ng-model=\"surl\" name=\"surl\" [(ngModel)]=\"paymentGatewayData.surl\" size=\"64\" value=\"paymentGatewayData.surl\" />\r\n            <input type=\"hidden\" ng-model=\"furl\" name=\"furl\" [(ngModel)]=\"paymentGatewayData.furl\" size=\"64\" value=\"paymentGatewayData.furl\" />\r\n            <!-- <input type=\"hidden\" ng-model=\"surl\" name=\"surl\"  size=\"64\" value=\"https://www.test.in/payment/complete/payu\" />\r\n            <input type=\"hidden\" ng-model=\"furl\" name=\"furl\"  size=\"64\" value=\"https://www.test.in/payment/complete/payu\" /> -->\r\n            <input type=\"hidden\" ng-model=\"service_provider\" name=\"service_provider\" [(ngModel)]=\"paymentGatewayData.service_provider\"\r\n              size=\"64\" value=\"paymentGatewayData.service_provider\" />\r\n            <!-- <button type=\"submit\">Yes</button> -->\r\n            <div class=\"text-center pb-3\">\r\n              <div class=\"col\">\r\n                <button type=\"submit\" class=\"btn btn-web br-25 \">Confirm & Proceed to Pay <i _ngcontent-c24=\"\"\r\n                    aria-hidden=\"true\" class=\"fa fa-rupee pr-1\"></i> {{totalPyamentPrice}}</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <!-- #payuform ngNoForm -->\r\n  <div mdbModal #paymentProceedDirect=\"mdbModal\" data-dismiss=\"basicModal\" style=\"overflow-y: auto\" class=\"modal fade\"\r\n    tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myBasicModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered modal-md\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-body\">\r\n          <div class=\"container p-3 pt-4\">\r\n            <h5 class=\"bold pt-2 pb-2\" *ngFor=\"let d of modelDataToShow\">{{d.name}}</h5>\r\n            <div>\r\n              <!-- <div class=\"row\"> -->\r\n              <button type=\"button\" style=\"\" class=\"close text-right\" (click)=\"paymentProceed.hide()\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n\r\n\r\n              <div class=\"row\" *ngIf=\"modelDataOriginal?.length;else demoPriceError\">\r\n                <div class=\"col-lg-7 col-md-7 w-7 pt-1 pb-1\">Rental Charge </div>\r\n                <div class=\"col-lg-5 col-md-5 w-3 pt-1 pb-1 text-right\"><i _ngcontent-c24=\"\" aria-hidden=\"true\" class=\"fa fa-rupee pr-1\"></i>{{modelDataOriginal[0].price}}\r\n                </div>\r\n              </div>\r\n              <ng-template #demoPriceError>\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-7 col-md-7 w-7 pt-1 pb-1\">Rental Charge </div>\r\n                  <div class=\"col-lg-5 col-md-5 w-3 pt-1 pb-1 text-right\"><i _ngcontent-c24=\"\" aria-hidden=\"true\" class=\"fa fa-rupee pr-1\"></i>0000.00\r\n                  </div>\r\n                </div>\r\n              </ng-template>\r\n\r\n              <div class=\"row\" *ngIf=\"extraHelmetType == 0; else ExtraHelmetTempNN\">\r\n                <div class=\"col-lg-7 col-md-7 w-7 pt-1 pb-1\">Extra Helmet Charge (No) </div>\r\n                <div class=\"col-lg-5 col-md-5 w-3 pt-1 pb-1 text-right\"><i _ngcontent-c24=\"\" aria-hidden=\"true\" class=\"fa fa-rupee pr-1\"></i>00.00\r\n                </div>\r\n              </div>\r\n              <ng-template #ExtraHelmetTempNN>\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-7 col-md-7 w-7 pt-1 pb-1\">Extra Helmet Charge (Yes) </div>\r\n                  <div class=\"col-lg-5 col-md-5 w-3 pt-1 pb-1 text-right\"><i _ngcontent-c24=\"\" aria-hidden=\"true\" class=\"fa fa-rupee pr-1\"></i>50.00\r\n                  </div>\r\n                </div>\r\n              </ng-template>\r\n\r\n              <div class=\"row\" *ngIf=\"bookingDeliveryType == 1; else selfPickupTemplate\">\r\n                <div class=\"col-lg-7 col-md-7 w-7 pt-1 pb-1\">Door Delivery Charges </div>\r\n                <div class=\"col-lg-5 col-md-5 w-3 pt-1 pb-1 text-right\"><i _ngcontent-c24=\"\" aria-hidden=\"true\" class=\"fa fa-rupee pr-1\"></i>{{deliveryCharge}}.00\r\n                </div>\r\n              </div>\r\n              <ng-template #selfPickupTemplate>\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-7 col-md-7 w-7 pt-1 pb-1\">Self Pickup </div>\r\n                  <div class=\"col-lg-5 col-md-5 w-3 pt-1 pb-1 text-right\"><i _ngcontent-c24=\"\" aria-hidden=\"true\" class=\"fa fa-rupee pr-1\"></i>00.00\r\n                  </div>\r\n                </div>\r\n              </ng-template>\r\n              <div *ngIf=\"user.penaltyCharge > 0\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-7 col-md-7 w-7 pt-1 pb-1\">Penalty</div>\r\n                  <div class=\"col-lg-5 col-md-5 w-3 pt-1 pb-1 text-right\">\r\n                    <i _ngcontent-c24=\"\" aria-hidden=\"true\" class=\"fa fa-rupee pr-1\"></i>{{user.penaltyCharge}}\r\n                  </div>\r\n                  </div>\r\n               \r\n              </div>\r\n\r\n             \r\n\r\n              <hr class=\"pt-1 pb-1 container\" style=\"\">\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-7 col-md-7 w-7 pt-1 pb-1 bold\">Total Amount Payable </div>\r\n                <div class=\"col-lg-5 col-md-5 w-3 pt-1 pb-1 bold text-right\"><i _ngcontent-c24=\"\" aria-hidden=\"true\"\r\n                    class=\"fa fa-rupee pr-1\"></i>{{totalPyamentPrice}}</div>\r\n              </div>\r\n\r\n              <div class=\"pt-2 pb-3\">\r\n                <ul style=\"\" class=\"term-list\">\r\n                  <li>By proceeding to the payment page, you agree to our <span class=\"blue-text\">‘Terms\r\n                      and Conditions’</span>.</li>\r\n                </ul>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"text-center pb-3\">\r\n              <div class=\"col\">\r\n                <button class=\"btn btn-web br-25 \" (click)=\"goToDirectBookingGateway()\">Confirm & Proceed to Pay <i\r\n                    _ngcontent-c24=\"\" aria-hidden=\"true\" class=\"fa fa-rupee pr-1\"></i> {{totalPyamentPrice}}</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <!--small devices-->\r\n\r\n\r\n</section>\r\n<app-model-description-footer></app-model-description-footer>"

/***/ }),

/***/ "../../../../../src/app/bike-selection/bike-selection.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  margin: 0; }\n\n.def-text {\n  font-size: 0.8rem; }\n\n.refer-btn {\n  background-color: #ccc;\n  border-radius: 25px;\n  padding: 10px 25px;\n  border: 0;\n  color: #3023AE; }\n\n.btn-color {\n  background-color: #4E44D8; }\n\n.br-25 {\n  border-radius: 25px; }\n\n.mat-radio-button ~ .mat-radio-button {\n  padding-right: 16px; }\n\n.gray-block {\n  background-color: #F5F5FA;\n  border: 1px solid #DFDFE6;\n  border-radius: 3px; }\n\n.example-full-width {\n  width: 100%; }\n\n.m-text {\n  margin-left: 28px;\n  line-height: 30px; }\n\n.donate-now {\n  list-style-type: none;\n  margin: 15px 0 0 0;\n  padding: 0; }\n\n.donate-now li {\n  float: left;\n  margin: 0 10px 0 0;\n  width: 130px;\n  height: 50px;\n  position: relative;\n  border-radius: 5px; }\n\n.donate-now label, .donate-now input {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n.donate-now input[type=\"radio\"] {\n  opacity: 0.011;\n  z-index: 100;\n  padding: 10px 10px;\n  border: 1px solid #cccccc; }\n\n.donate-now input[type=\"radio\"]:checked + label {\n  background-color: rgba(78, 68, 216, 0.1);\n  border: 1px solid #4E44D8;\n  color: #4E44D8 !important; }\n\n.donate-now label {\n  padding: 5px;\n  border: 1px solid #CCC;\n  cursor: pointer;\n  z-index: 90;\n  border-radius: 5px; }\n\n.left-text {\n  margin-left: 25px;\n  line-height: 30px; }\n\n.donate-now .male-icon {\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/images/male-icon.svg")) + ");\n  background-repeat: no-repeat;\n  background-position: left;\n  padding-left: 20px !important;\n  background-position: 3px 4px; }\n\n.donate-now .male-icon:hover {\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/images/male-icon-active.svg")) + ");\n  color: blue; }\n\n.donate-now input[type=\"radio\"]:checked + .male-icon {\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/images/male-icon-active.svg")) + ");\n  color: blue; }\n\n.donate-now .female-icon {\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/images/female-icon.svg")) + ");\n  background-repeat: no-repeat;\n  background-position: left;\n  padding-left: 20px !important;\n  background-position: 3px 4px; }\n\n.donate-now .female-icon:hover {\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/images/female-icon-active.svg")) + ");\n  color: blue;\n  border-color: 1px solid blue; }\n\n.donate-now input[type=\"radio\"]:checked + .female-icon {\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/images/female-icon-active.svg")) + ");\n  color: blue; }\n\n.modal-body {\n  padding: 0; }\n\n/deep/ .mat-dialog-container {\n  padding: 0; }\n\n/deep/ .mat-menu-content {\n  padding-bottom: 8px; }\n\n.forgot-img-block {\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/images/forgot-password.svg")) + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin-bottom: -0.3px; }\n\n.otp-img-block {\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/images/otp-image.svg")) + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.btn-style {\n  background-color: #4E44D8 !important;\n  border-radius: 25px;\n  padding: 10px 30px;\n  border: none;\n  color: white; }\n\n.block-padding {\n  padding: 20px 10px; }\n\ntable.table th, table.table td {\n  padding-top: 0.7rem !important;\n  padding-bottom: 0.7rem !important; }\n\n.head-box {\n  width: 100%;\n  border: 1px solid #ccc;\n  padding: 10px;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 2px 6px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 7px; }\n\n.text-color {\n  color: #4E44D8; }\n\n.upload-btn-wrapper {\n  position: relative;\n  overflow: hidden;\n  display: inline-block;\n  top: 0px; }\n\n.upload-btn-wrapper input[type=file] {\n  font-size: 100px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0; }\n\n.upload-btn-wrapper span {\n  font-size: 14px; }\n\n.head-box {\n  width: 100%;\n  border: 1px solid #ccc;\n  padding: 10px;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 2px 6px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 7px; }\n\n.img-wrapper {\n  width: 48px;\n  height: 39px; }\n\n.left {\n  float: left; }\n\n.fs-14 {\n  font-size: 14px; }\n\n.img-box {\n  width: 30px;\n  height: 30px; }\n\n.img-box img {\n  widows: 100%; }\n\n/deep/ .mat-button-toggle-checked {\n  background-color: rgba(78, 68, 216, 0.1) !important;\n  color: rgba(0, 0, 0, 0.54);\n  border: 1px solid blue !important; }\n\n.select-btn {\n  list-style-type: none;\n  margin: 15px 0 0 0;\n  padding: 0; }\n\n.select-btn li {\n  float: left;\n  margin: 0 9px 10px 0;\n  width: 200px;\n  height: 64px;\n  position: relative;\n  border-radius: 5px; }\n\n.select-btn label, .select-btn input {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n.select-btn input[type=\"radio\"] {\n  opacity: 0.011;\n  z-index: 100;\n  padding: 10px 10px;\n  border: 1px solid #cccccc; }\n\n.select-btn input[type=\"radio\"]:checked + label {\n  background-color: rgba(78, 68, 216, 0.1);\n  border: 1px solid #4E44D8;\n  color: #4E44D8 !important; }\n\n.select-btn label {\n  padding: 5px;\n  border: 1px solid #CCC;\n  cursor: pointer;\n  z-index: 90;\n  border-radius: 5px; }\n\n.select-btn .self-icon {\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/images/self-icon.svg")) + ");\n  background-repeat: no-repeat;\n  padding-left: 20px !important;\n  background-position: 10px 10px; }\n\n.select-btn .male-icon:hover {\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/images/self-icon-active.svg")) + ");\n  color: blue; }\n\n.select-btn input[type=\"radio\"]:checked + .self-icon {\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/images/self-icon-active.svg")) + ");\n  color: blue; }\n\n.select-btn .door-icon {\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/images/door-icon.svg")) + ");\n  background-repeat: no-repeat;\n  padding-left: 20px !important;\n  background-position: 10px 10px; }\n\n.select-btn .door-icon:hover {\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/images/door-icon-active.svg")) + ");\n  color: blue;\n  border-color: 1px solid blue; }\n\n.select-btn input[type=\"radio\"]:checked + .door-icon {\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/images/door-icon-active.svg")) + ");\n  color: blue;\n  border-color: 1px solid blue; }\n\n.head-text {\n  color: #2A2A2A;\n  font-size: 30px;\n  font-weight: 800;\n  letter-spacing: 1.07px;\n  line-height: 36px;\n  text-align: left;\n  font-family: 'GilroyExtraBold'; }\n\n.small-text {\n  color: #2A2A2A;\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.5px;\n  line-height: 14px;\n  text-align: left;\n  text-transform: uppercase;\n  font-family: 'GilroyExtraBold'; }\n\n.back-arrow {\n  position: absolute;\n  left: 0; }\n\n.pick-tab {\n  background-color: transparent;\n  margin-right: 10px !important;\n  border-radius: 6px;\n  width: 210px;\n  height: auto;\n  margin-right: 10px;\n  border: 1px solid #BDBDBD;\n  border-radius: 6px;\n  padding: 10px 10px;\n  float: left;\n  cursor: pointer; }\n\n.pickup-img {\n  float: left;\n  padding: 0 10px; }\n\n.pickup-text {\n  word-break: break-all;\n  color: #4E44D8;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 19px;\n  text-align: left; }\n\n.pick-tab :hover {\n  background-color: rgba(78, 68, 216, 0.1) !important; }\n\n.mat-form-field-infix {\n  width: 100% !important; }\n\n.select-width {\n  width: 100% !important; }\n\n/deep/ .mat-tab-header, .mat-tab-nav-bar {\n  border-bottom: none; }\n\n/deep/ .mat-tab-labels {\n  display: -ms-flexbox;\n  display: flex;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content; }\n\n/deep/ .mat-tab-body-content {\n  text-align: left; }\n\n/deep/ .mat-input-underline.mat-form-field-underline {\n  background-image: none; }\n\n/deep/ .mat-input-element {\n  font-size: inherit; }\n\n/deep/ .mat-tab-label {\n  padding: 0px 15px; }\n\nmat-checkbox#mat-checkbox-1 {\n  /* margin-top: 5px; */\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: end;\n      align-items: flex-end;\n  height: 1rem; }\n\n.ap-btn {\n  color: #4E44D8;\n  border: 0;\n  font-size: 16px;\n  font-weight: 800;\n  line-height: 30px;\n  position: absolute;\n  right: 0;\n  top: 0px;\n  background-color: transparent; }\n\n.ap-icon {\n  position: absolute;\n  bottom: 0;\n  right: 0; }\n\n.term-list {\n  text-align: left;\n  font-size: 14px;\n  line-height: 1.9rem;\n  padding: 1rem !important; }\n\n.btn-pay {\n  border-radius: 30px;\n  float: left;\n  background-color: #4E44D8 !important; }\n\n/deep/ label.mat-checkbox-layout {\n  padding-top: 15px !important; }\n\n.mat-tab-label {\n  border: 1px solid #ccc !important; }\n\n.donate-now1 {\n  list-style-type: none;\n  margin: 25px 0 0 0;\n  padding: 0; }\n\n.donate-now1 li {\n  float: left;\n  margin: 0 9px 0 0;\n  width: 150px;\n  height: 50px;\n  position: relative;\n  border-radius: 5px; }\n\n.donate-now1 label, .donate-now1 input {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n.donate-now1 input[type=\"radio\"] {\n  opacity: 0.011;\n  z-index: 100;\n  padding: 10px 10px;\n  border: 1px solid #cccccc; }\n\n.donate-now1 input[type=\"radio\"]:checked + label {\n  background-color: rgba(78, 68, 216, 0.1);\n  border: 1px solid #4E44D8;\n  color: #4E44D8 !important; }\n\n.donate-now1 label {\n  padding: 5px;\n  border: 1px solid #CCC;\n  cursor: pointer;\n  z-index: 90;\n  border-radius: 5px; }\n\n.donate-now1 label:hover {\n  background: #DDD; }\n\n.m-text {\n  color: #666666;\n  margin-left: 5px; }\n\n.donate-now1 .dont-want {\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/images/dont-want.png")) + ");\n  background-repeat: no-repeat;\n  background-position: 4px 9px; }\n\n.donate-now1 .dont-want:hover {\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/images/dont-want-active.png")) + ");\n  background-repeat: no-repeat;\n  color: blue;\n  background-position: 4px 9px; }\n\n.donate-now1 input[type=\"radio\"]:checked + .dont-want {\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/images/dont-want-active.png")) + ");\n  background-repeat: no-repeat;\n  color: blue; }\n\n.donate-now1 .want {\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/images/want.png")) + ");\n  background-repeat: no-repeat;\n  background-position: 4px 9px; }\n\n.donate-now1 .want:hover {\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/images/want-active.png")) + ");\n  color: blue;\n  border-color: 1px solid blue;\n  background-repeat: no-repeat;\n  background-position: 4px 9px; }\n\n.donate-now1 input[type=\"radio\"]:checked + .want {\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/images/want-active.png")) + ");\n  background-repeat: no-repeat;\n  color: blue; }\n\n.m-text {\n  margin-left: 25px;\n  line-height: 30px; }\n\n.sidenav {\n  height: auto;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 17%;\n  left: 50%;\n  background-color: #ccc;\n  overflow-x: hidden;\n  transition: 0.5s;\n  text-align: center; }\n\n.sidenav a {\n  padding: 8px 8px 8px 32px;\n  text-decoration: none;\n  font-size: 25px;\n  color: #000;\n  display: block;\n  transition: 0.3s; }\n\n.sidenav .closebtn {\n  position: absolute;\n  top: 0;\n  right: 25px;\n  font-size: 16px;\n  margin-left: 50px; }\n\n/deep/ .mat-button-toggle-label-content {\n  width: auto; }\n\n/deep/ .mat-button-toggle-label-content {\n  padding: 0px 8px; }\n\n/deep/ .mat-button-toggle {\n  margin-right: 10px !important;\n  border: 1px solid #ccc;\n  padding: initial;\n  border-radius: 6px;\n  height: 45px;\n  width: -webkit-fill-available !important;\n  text-align: -webkit-center !important; }\n\n/deep/ .mat-button-toggle-group, .mat-button-toggle-standalone {\n  box-shadow: none !important;\n  width: 100%; }\n\nbody {\n  background-repeat: repeat !important;\n  width: 100% !important;\n  font-weight: 700; }\n\n.web-color {\n  color: #4E44D8 !important; }\n\n.s-text {\n  margin-left: 35px;\n  line-height: 20px;\n  float: left;\n  font-size: 15px; }\n\n.blue-text {\n  color: #4E44D8 !important; }\n\n.ticks ul {\n  list-style: none;\n  padding: 0;\n  margin: 0; }\n\n.ticks li {\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/images/tick.png")) + ");\n  background-repeat: no-repeat;\n  background-position: 0 0.6em;\n  padding-left: 1.6em;\n  text-transform: unset;\n  line-height: 38px;\n  text-transform: capitalize;\n  color: #2a2a2a; }\n\n.change-btn {\n  background-color: transparent;\n  border: 0;\n  font-size: 14px;\n  color: #4E44D8;\n  margin-top: 12px; }\n\n.bike-info {\n  padding: 35px 15px 0 15px !important; }\n\n.clear {\n  clear: both; }\n\n.s-text {\n  line-height: 22px;\n  color: #666666; }\n\n.box {\n  background-color: #DFDFE6;\n  border-radius: 3px;\n  padding: 10px; }\n\n/deep/ .mat-tab-body-content {\n  padding-top: 10px !important; }\n\n/deep/ .mat-form-field-infix {\n  height: 40px; }\n\n.infoCharge {\n  position: absolute;\n  font-size: 18px;\n  margin: 0px 3px; }\n\n.box-bottom-border {\n  border-bottom: 1px solid #ccc;\n  width: 100%; }\n\n.width-70 {\n  width: 70%;\n  float: left; }\n\n.width-30 {\n  width: 30%;\n  float: right; }\n\n.hide-btn {\n  display: none; }\n\n.bsmt-5 {\n  margin-top: 4rem !important; }\n\n.signPadding {\n  padding: 0rem 1rem; }\n\n.plan-section {\n  margin-bottom: 1.6rem !important; }\n\n@media only screen and (max-width: 500px) {\n  /deep/ .modal-backdrop.in {\n    opacity: 0 !important; }\n  .modal-backdrop.show {\n    opacity: 0 !important; }\n  .modal-backdrop {\n    opacity: 0 !important; }\n  .custom-control-label {\n    margin-left: 20px; }\n  .custom-control {\n    padding-left: 0 !important;\n    padding-right: 0.9rem !important; }\n  /deep/ .mat-tab-label {\n    border: 1px solid #ccc !important;\n    margin-right: 4px !important; }\n  .paddingtop-1 {\n    padding-top: 1rem; }\n  .signPadding {\n    padding: 0rem !important; }\n  .mobi-bottom {\n    padding-bottom: 0 !important;\n    margin-bottom: 0 !important; }\n  .p-3 {\n    padding: 0 !important; }\n  .box {\n    padding: 0 !important; }\n  .change-btn {\n    width: 100%;\n    padding: 0;\n    margin-top: 0 !important; }\n  .plan-section {\n    width: 50%;\n    float: left;\n    margin-bottom: 0 !important; }\n  .w-7 {\n    width: 70%;\n    float: left; }\n  .w-58 {\n    width: 58%;\n    float: left; }\n  .w-42 {\n    width: 42%;\n    float: left; }\n  .w-3 {\n    width: 30%;\n    float: left; }\n  .w-6 {\n    width: 60%;\n    float: left; }\n  .w-4 {\n    width: 40%;\n    float: left; }\n  .bike-info {\n    padding: 0 !important; }\n  .box {\n    border: none; }\n  .orderStack {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-flow: column;\n        flex-flow: column; }\n  .one {\n    -ms-flex-order: 2;\n        order: 2; }\n  .two {\n    -ms-flex-order: 1;\n        order: 1; }\n  .mat-button-toggle-group, .mat-button-toggle-standalone {\n    padding-left: 5px;\n    padding-right: 0px; }\n  .service-block {\n    width: 50%; }\n  .bike-img-container {\n    margin: 0 20px;\n    padding: 10px 20px 10px 20px !important; }\n  /deep/ .mat-button-toggle-label-content {\n    padding: 0px 4px !important; }\n  .mat-button-toggle-group, .mat-button-toggle-standalone {\n    display: -ms-flexbox !important;\n    display: flex !important;\n    text-align: center;\n    text-align: center; }\n  /deep/ .mat-button-toggle {\n    margin-bottom: 12px !important;\n    width: 24% !important;\n    margin-right: 8px !important;\n    font-size: 3.5vw; }\n  .gray-block {\n    border-radius: 0 !important;\n    margin-bottom: 0 !important; }\n  .rent-section {\n    width: 59%;\n    float: left;\n    text-align: left;\n    font-size: 4vw;\n    padding: 4px 8px;\n    margin-top: 5px; }\n  .plan-section {\n    width: 35%;\n    float: left;\n    font-size: 4vw;\n    text-align: left;\n    padding: 4px 5px;\n    margin-top: 5px; }\n  .plan-section h6 {\n    font-size: 4vw; }\n  .rent-section h6 {\n    font-size: 4vw; }\n  .left-block-img {\n    width: 35%; }\n  .right-block-info {\n    width: 60%;\n    margin-left: 12px; }\n  .select-btn li {\n    margin: 0 6px 10px 0 !important;\n    width: 45% !important; }\n  .bsmt-5 {\n    margin-top: 0.6rem !important; }\n  .box-bottom-border {\n    border: none; }\n  .s-text {\n    font-size: 3.4vw !important;\n    margin-left: 30px;\n    line-height: 16px; }\n  .select-btn .self-icon {\n    background-size: 22%; }\n  .select-btn .door-icon {\n    background-size: 22%; }\n  .donate-now1 li {\n    width: 130px; }\n  .m-text {\n    margin-left: 27px;\n    line-height: 30px;\n    font-size: 4vw; }\n  .mbpleft {\n    padding-left: 1rem !important; }\n  .btn {\n    width: 97%; }\n  .mbpt-3 {\n    padding-top: 1rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bike-selection/bike-selection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BikeSelectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__User__ = __webpack_require__("../../../../../src/app/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_webstorage_service__ = __webpack_require__("../../../../angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__alert_service__ = __webpack_require__("../../../../../src/app/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_bootstrap_md__ = __webpack_require__("../../../../angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
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












//import { userInfo } from 'os';
var signUpUserObj = (function () {
    function signUpUserObj() {
        this.fName = "";
        this.lName = "";
        this.gender = 1;
        this.mobile = "";
        this.email = "";
        this.password = "";
    }
    return signUpUserObj;
}());
var signinUsrObj = (function () {
    function signinUsrObj() {
        this.username = "";
        this.password = "";
    }
    return signinUsrObj;
}());
var BikeSelectionComponent = (function () {
    function BikeSelectionComponent(httpClient, route, router, storage, alertService, apiService, datePipe) {
        var _this = this;
        this.httpClient = httpClient;
        this.route = route;
        this.router = router;
        this.storage = storage;
        this.alertService = alertService;
        this.apiService = apiService;
        this.datePipe = datePipe;
        this.buttonText = "";
        this.modelPriceBeforeCoupon = '';
        this.isCheckboxDisabled = false;
        this.isPromoCodeDisabled = false;
        this.debugData = false; // to show and hide the console log messages
        this.otpErrorMsg = ""; // to display the error msg on otp popup
        this.emailResetMsg = ""; // to display the error msg in email reset popup
        this.SignUpmsg = ""; // to display the signup msg in signup form html
        this.SignInmsg = ""; // to display the error msg in sign in form html
        this.addressUpdateMsg = ""; // to display the error msg in the adress update form html
        this.uerDlUpdateMsg = ""; //to display the error msg in DL uplate
        this.selectedMonths = 0; // to get the selected month by the user in previous page
        this.availablePoints = 0; // to store the points of customer if logged in
        this.ongoing_error_msg = ""; // show error msg when already ongoing is booking running
        this.ongoingErrorMsg = ""; //show error message if alredy have ongoing booking
        this.show1 = false;
        this.show2 = true;
        this.ongoingData = [];
        this.getCompExprDetail = [];
        this.subscription_plan_list = [
            { "id": 1, "month": 1, "effective_rental": 3500, "wallet": 130 },
            { "id": 2, "month": 2, "effective_rental": 3350, "wallet": 170 },
            { "id": 3, "month": 3, "effective_rental": 3330, "wallet": 205 },
            { "id": 4, "month": 4, "effective_rental": 3295, "wallet": 245 },
            { "id": 5, "month": 5, "effective_rental": 3255, "wallet": 280 },
            { "id": 6, "month": 6, "effective_rental": 3220, "wallet": 320 },
            { "id": 7, "month": 7, "effective_rental": 3180, "wallet": 360 },
            { "id": 8, "month": 8, "effective_rental": 3140, "wallet": 395 },
            { "id": 9, "month": 9, "effective_rental": 3105, "wallet": 435 },
            { "id": 10, "month": 10, "effective_rental": 3065, "wallet": 475 },
            { "id": 11, "month": 11, "effective_rental": 3025, "wallet": 510 },
            { "id": 12, "month": 12, "effective_rental": 2990, "wallet": 0 }
        ];
        this.show = true;
        this.buttonName = 'Login';
        this.loginError = false;
        //data: Observable<Array<any>>;
        this.divs = ["Menu1", "Menu2"];
        this.visibleDivId = null;
        this.location = []; // to keep the values of pickup location from server
        this.modelDataToShow = []; // to show the data into ui part
        this.modelDataOriginal = []; // to show the data into ui part
        this.selectedMonthsVal = 0; // tp show the selected month in ui from previous page
        //no of days
        // this.getCompExprDetail
        this.availablePointss = 0; // to display and hold available points
        this.helMetPriceUi = 0; // to display the price of rental helmet charge in ui
        this.monthlyRentalChargeUi = 0; // to display the price of rental helmet charge in ui
        this.noOfDaysUI = 0; // to display the noOfDays of rent in ui
        this.newEndDateUi = "";
        this.totalPriceToPayUi = 0;
        this.finalAmount = 0; //final Amount which willl go to the payment gateway after having everything
        this.penalityChargeUi = 0;
        this.points = 0;
        // <!-- End of sign in function -->
        this.genderNow = 1; // 1 for male and 0 for female , by default keep it as male
        // checkDlNull(): boolean {
        //   if (!this.user.DLnumber) {
        //     return true;
        //   } else {
        //     return false;
        //   }
        // }
        this.checkDocumentNullState = false;
        this.docUploadErrorMsg = "";
        this.dlfront = "";
        this.dlFrontProgress = 0;
        this.dlback = "";
        this.dlbackProgress = 0;
        this.idproof = "";
        this.idproofProgress = 0;
        this.idproofBack = "";
        this.idproofBackProgress = 0;
        this.otherProof = "";
        this.key = 'DLfront';
        this.key1 = 'DLback';
        this.key2 = 'idProof';
        // end of doucment upload
        //_____.._________________________________________________________________________________________
        //_______________________________________________________________________________________________
        // Start of Payment module 
        //_______________________________________________________________________________________________
        this.referralMsg = ""; // to show the error msg in self pickup promo code apply
        //referralMsg1: string = ""; // to show the error msg in home delivery promo code apply
        this.referralCodeT = "";
        this.refferedCustomerId = "";
        this.ongoingDataTemp = [];
        this.totalPyamentPrice = 0; // the price that user needs to pay (Final amount)
        this.paymentGatewayData = {}; // whole data object to be sent to the payment gateway server
        this.selectedLoaction = ""; // to show the selected location into ui field of pickup location
        this.selectedPickUpLocationId = 0; //to store the id of the pickup location to pass into api 
        this.bookingDeliveryType = 0; // to get to know the booking delivery type - 0 or 1
        this.extraHelmetType = 0; // to store and read the values of extra helmet from ui and other function
        this.usePoints = false; // to know the status of use points
        this.usePromoCode = false; // to know and store if someone choosed for apply promo code
        this.useCouponCode = false; // to know and store if someone choosed for apply coupon code
        this.Coupon = "";
        this.referalAndPointTabPos = 0; // to hold and store the current selected tab of referral and points tab.
        this.pickup_location_msg = ""; // to show pickup location error message
        this.booking_error_msg = ""; //to show if alredy ongoing booking is there
        this.user = new __WEBPACK_IMPORTED_MODULE_1__User__["a" /* User */]();
        this.initCustData();
        this.userSigninData = new signinUsrObj();
        this.userSignUpData = new signUpUserObj();
        if (this.debugData == true) {
            console.log("Constructor init SignIn and SignUp object");
            console.log(this.userSigninData);
            console.log(this.userSignUpData);
        }
        this.baseUrl = 'https://api.on-track.in';
        // this.baseUrl = 'http://159.65.154.92';
        //this.baseUrl = 'http://dev-on-track.co.in';
        // if (window.location.hostname == 'localhost')
        //   // this.baseUrl='http://127.0.0.1:1337';
        //   this.baseUrl = 'https://api.on-track.in';
        // else
        //   this.baseUrl = window.location.origin;
        this.route.paramMap.subscribe(function (params) {
            _this.selecetdId = +params.get('id');
            _this.selectedMonths = +params.get('months');
            if (_this.debugData) {
                console.log("user slected for bike and month");
                console.log("Model Id:" + _this.selecetdId);
                console.log("months Plan:" + _this.selectedMonths);
            }
            _this.checkMonthValid(_this.selectedMonths);
            //this.data = apiService.get('getModelDetailsById?id=' + this.selecetdId);
            //this.data1 = return this.httpClient.get(this.url2 +'getModelDetailsById?id=',{this.selecetdId})
        });
    }
    BikeSelectionComponent.prototype.toggle = function () {
        this.show1 = !this.show1;
    };
    BikeSelectionComponent.prototype.toggleH = function () {
        this.show = !this.show;
        // CHANGE THE NAME OF THE BUTTON.
        if (this.show)
            this.buttonName = "Login";
        else
            this.buttonName = "Sign Up";
    };
    BikeSelectionComponent.prototype.checkMonthValid = function (moths) {
        if ((moths == 1) || (moths == 3) || (moths == 6) || (moths == 12)) {
            this.selectedMonthsVal = moths;
            //this.modelDataOriginal[0].price = 0;
            this.initModelDataToProcess();
            this.initModelData(moths);
        }
        else {
            this.router.navigate(['/404']);
        }
    };
    // function to get the data and to store it for the further process values
    BikeSelectionComponent.prototype.initModelDataToProcess = function () {
        var _this = this;
        this.apiService.get('getModelDetailsById?id=' + this.selecetdId)
            .subscribe(function (dataa) {
            _this.modelDataOriginal = dataa.slice(); // for the deep copy of value to the new json array
            _this.getPickuplocation();
        });
    };
    // function to fetch and show the plan data from server in each click of plan.
    BikeSelectionComponent.prototype.initModelData = function (months) {
        var _this = this;
        this.selectedMonthsVal = months;
        if (this.debugData == true) {
            console.log("Months Selected");
            console.log(this.selectedMonthsVal);
        }
        this.apiService.get('getModelDetailsById?id=' + this.selecetdId)
            .subscribe(function (dataa) {
            if (_this.debugData) {
                console.log("Model get API data");
                console.log(dataa);
            }
            _this.modelDataToShow = dataa; // for copying the value to the next element
            if (_this.modelDataToShow.length != 0) {
                _this.showRentalSubscriptionPlan(_this.modelDataToShow[0].price);
                _this.jsonDataArray(months);
            }
            else {
                _this.error("Error loading page! Please refresh.");
            }
        });
    };
    // setting up monthly subscription data
    BikeSelectionComponent.prototype.jsonDataArray = function (months) {
        var monthlyDiscountPercent = [3.64, 4.73, 5.82, 6.91, 8.00, 9.09, 10.18, 11.27, 12.36, 13.45, 14.55];
        var temp = this.modelDataToShow;
        if (months == 1) {
            this.modelDataToShow = temp;
        }
        else if (months == 3) {
            var tempVals = 0;
            for (var i = 0; i < 2; i++) {
                tempVals += Number(((this.modelDataToShow[0].price * monthlyDiscountPercent[i]) / 100).toFixed(2));
            }
            this.modelDataToShow[0].price = this.modelDataToShow[0].price - Number((tempVals / 3).toFixed(0));
            console.log(this.modelDataToShow[0].price);
        }
        else if (months == 6) {
            var tempVals = 0;
            for (var i = 0; i < 5; i++) {
                tempVals += Number(((this.modelDataToShow[0].price * monthlyDiscountPercent[i]) / 100).toFixed(2));
            }
            this.modelDataToShow[0].price = this.modelDataToShow[0].price - Number((tempVals / 6).toFixed(0));
        }
        else if (months == 12) {
            var tempVals = 0;
            for (var i = 0; i < 11; i++) {
                tempVals += Number(((this.modelDataToShow[0].price * monthlyDiscountPercent[i]) / 100).toFixed(2));
            }
            this.modelDataToShow[0].price = this.modelDataToShow[0].price - Number((tempVals / 12).toFixed(0));
        }
        this.modelDataToShow = temp;
        this.totalPyamentPrice = this.modelDataOriginal[0].price;
        this.getTotalPrice();
    };
    // get pickup location from url
    BikeSelectionComponent.prototype.getPickuplocation = function () {
        var _this = this;
        if (this.debugData == true) {
            console.log("Pickup Locatin Function executed");
        }
        this.httpClient.post(this.apiService.GET_PICKUP_LOCATION_URL, { "modelId": this.modelDataOriginal[0].model })
            .subscribe(function (pickup_detail) {
            if (_this.debugData == true) {
                console.log("Pickup Locatin API Data");
                console.log(pickup_detail);
            }
            _this.location = pickup_detail;
        });
    };
    BikeSelectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpClient.get(this.apiService.getDeliveryCharge)
            .subscribe(function (data) { return _this.deliveryCharge = data.deliveryCharge; });
    };
    // getting the customer data from url
    BikeSelectionComponent.prototype.initCustData = function () {
        var _this = this;
        if (this.apiService.checkUserLoggedIn() == true) {
            this.checkDocumentNullState = this.checkDocumentNull();
            var urrr = this.apiService.cutomerDetails + this.apiService.getFromLocalData('custDD');
            this.httpClient.get(urrr)
                .subscribe(function (data) { return _this.initCompUrl(data); }, function (error) { return _this.showError(error); });
        }
        else {
            console.log("User Not Logged In. Please login!");
        }
    };
    BikeSelectionComponent.prototype.initCompUrl = function (data) {
        this.intilizeComponent(data);
        this.checkDocumentNullState = this.checkDocumentNull();
    };
    BikeSelectionComponent.prototype.intilizeComponent = function (data) {
        this.user = data;
        if (this.debugData) {
            console.log("User Object Data is");
            console.log(this.user);
        }
        this.getCustomerPoints();
        //this.getOngoing();
        this.getBookingExpireCompleted();
    };
    BikeSelectionComponent.prototype.getBookingExpireCompleted = function () {
        var _this = this;
        var getDATA = { "Customer": this.user.id, "status": 5 };
        this.httpClient.post(this.apiService.getBookingBYquery, getDATA)
            .subscribe(function (data_detail) {
            if (_this.debugData) {
                console.log("Get Expire Completed Booking API Data");
                console.log(data_detail);
            }
            _this.getCompExprDetail = data_detail;
            //console.log(this.getCompExprDetail[0].rentalCharge);
            _this.totalNoofDays();
        });
    };
    // usePoints: boolean = false; // to get to know customer is using the points or not
    BikeSelectionComponent.prototype.totalNoofDays = function () {
        this.availablePointss = this.points;
        //this.noOfDaysUI = noOfDay;
        this.noOfDaysUI = this.user.penaltyCharge / 100;
        //console.log(this.noOfDaysUI);
        this.penalityChargeUi = this.user.penaltyCharge;
        // let tempArray = this.getCompExprDetail[0].endDate.split('T');
        // let StartDateObj = new Date(tempArray[0]);
        // StartDateObj.setDate(StartDateObj.getDate() + this.noOfDaysUI);
        // this.newEndDateUi = this.datePipe.transform(StartDateObj, 'dd/MM/yyyy');
        //console.log(this.getCompExprDetail[0]);
        var helmentChargeValue = 0;
        var DaysHelmetCharge = 0;
        var DaysRentalCharge = 0;
        var DayTotalPrice = 0;
        var modelPriceValue = this.getCompExprDetail[0].rentalCharge;
        if (this.getCompExprDetail[0].extraHelmet == true) {
            helmentChargeValue = 50;
        }
        else {
            helmentChargeValue = 0;
        }
        if (this.noOfDaysUI <= 7) {
            DaysRentalCharge = ((modelPriceValue) + ((modelPriceValue * 20) / 100));
            DaysRentalCharge = ((DaysRentalCharge / 30) * this.noOfDaysUI);
            DaysHelmetCharge = ((helmentChargeValue) + ((helmentChargeValue * 20) / 100));
            DaysHelmetCharge = ((DaysHelmetCharge / 30) * this.noOfDaysUI);
        }
        else if (this.noOfDaysUI >= 8 && this.noOfDaysUI < 16) {
            DaysRentalCharge = ((modelPriceValue) + ((modelPriceValue * 15) / 100));
            DaysRentalCharge = ((DaysRentalCharge / 30) * this.noOfDaysUI);
            DaysHelmetCharge = ((helmentChargeValue) + ((helmentChargeValue * 15) / 100));
            DaysHelmetCharge = ((DaysHelmetCharge / 30) * this.noOfDaysUI);
        }
        else if (this.noOfDaysUI >= 16) {
            DaysRentalCharge = ((modelPriceValue) + ((modelPriceValue * 10) / 100));
            DaysRentalCharge = ((DaysRentalCharge / 30) * this.noOfDaysUI);
            DaysHelmetCharge = ((helmentChargeValue) + ((helmentChargeValue * 10) / 100));
            DaysHelmetCharge = ((DaysHelmetCharge / 30) * this.noOfDaysUI);
        }
        DayTotalPrice = Number(DaysRentalCharge.toFixed(2)) + Number(DaysHelmetCharge.toFixed(2));
        console.log("hiiiii");
        console.log(DayTotalPrice);
        DayTotalPrice = Number(DaysRentalCharge.toFixed(2)) + Number(DaysHelmetCharge.toFixed(2));
        this.helMetPriceUi = Number(DaysHelmetCharge.toFixed(2));
        this.monthlyRentalChargeUi = Number(DaysRentalCharge.toFixed(2));
        this.totalPriceToPayUi = Number(DayTotalPrice.toFixed(2));
        console.log(this.totalPriceToPayUi);
        if (DaysRentalCharge >= modelPriceValue) {
            DaysRentalCharge = modelPriceValue;
            this.monthlyRentalChargeUi = DaysRentalCharge;
        }
        if (DaysHelmetCharge >= helmentChargeValue) {
            DaysHelmetCharge = helmentChargeValue;
            this.helMetPriceUi = DaysHelmetCharge;
        }
        if (DayTotalPrice >= (modelPriceValue + helmentChargeValue)) {
            DayTotalPrice = modelPriceValue + helmentChargeValue;
            this.totalPriceToPayUi = DayTotalPrice;
            console.log("day price");
            console.log(this.totalPriceToPayUi);
        }
        // if (this.user.penaltyCharge != 0) {
        //   this.totalPriceToPayUi += this.user.penaltyCharge;
        // }
        if (this.usePoints == true) {
            this.finalAmount = this.totalPriceToPayUi - this.availablePoints;
            if (this.finalAmount < 1) {
                this.finalAmount = 0;
            }
        }
        else {
            this.finalAmount = this.totalPriceToPayUi;
            console.log("final_penalty_rental");
            console.log(this.finalAmount);
        }
    };
    //end no of days
    BikeSelectionComponent.prototype.checkUserLoginStatus = function () {
        if (this.apiService.checkUserLoggedIn() == true) {
            return true;
        }
        else {
            return false;
        }
    };
    BikeSelectionComponent.prototype.showError = function (msg) {
        console.log("Error Found in server");
    };
    // start of setting up effective rental list
    BikeSelectionComponent.prototype.showRentalSubscriptionPlan = function (BikePrice) {
        var monthlyDiscountPercent = [3.64, 4.73, 5.82, 6.91, 8.00, 9.09, 10.18, 11.27, 12.36, 13.45, 14.55, 0];
        for (var i = 0; i < monthlyDiscountPercent.length; i++) {
            this.subscription_plan_list[i].wallet = Number(((BikePrice * monthlyDiscountPercent[i]) / 100).toFixed(0));
            if (i == 0) {
                this.subscription_plan_list[0].effective_rental = BikePrice;
            }
            else {
                this.subscription_plan_list[i].effective_rental = BikePrice - this.subscription_plan_list[i - 1].wallet;
            }
        }
    };
    // End of setting up effective rental list
    // <!-- Start of sign in function -->
    BikeSelectionComponent.prototype.onFormLogin = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.userSigninData = value;
        if (this.debugData) {
            console.log("Sign In Function data");
            console.log(this.userSigninData);
        }
        this.httpClient.post(this.apiService.LoginURL, this.userSigninData)
            .subscribe(function (data) {
            if (_this.debugData == true) {
                console.log("Customer Login API data");
                console.log(data);
            }
            if (data.success == "true") {
                if (_this.debugData == true) {
                    console.log("Customer id : " + data.customer.id);
                    console.log("Customer Name : " + data.customer.fName);
                }
                //this.success("Successfully logged in");
                _this.SignInmsg = "Sign In Sucessfull";
                _this.storage.set('custDD', data.customer.id);
                _this.storage.set('Name', data.customer.fName);
                _this.refresh();
            }
            else {
                //this.success("Login failed");
                _this.SignInmsg = " Sign in failed try again";
            }
        });
    };
    BikeSelectionComponent.prototype.changeGender = function (valueGender) {
        this.genderNow = valueGender;
        if (this.debugData) {
            console.log("Selected gender is ");
            console.log(this.genderNow);
        }
    };
    // <!-- Start of sign up function -->
    BikeSelectionComponent.prototype.onFormSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.userSignUpData = value;
        this.userSignUpData.signUpType = "generic";
        if (this.debugData) {
            console.log("User SignUp Data");
            console.log(this.userSignUpData);
        }
        this.httpClient.post(this.apiService.signupURL, this.userSignUpData)
            .subscribe(function (dataSignup) {
            if (_this.debugData) {
                console.log("signup form function api data");
                console.log(dataSignup);
            }
            if (dataSignup.status == true) {
                _this.SignUpmsg = "Signup Successfully";
                _this.user = dataSignup.obj;
                _this.storage.set('custDD', _this.user.id);
                _this.storage.set('Name', _this.user.fName);
                _this.buttonText = _this.user.fName;
                _this.OTPModal.show();
            }
            else {
                _this.SignUpmsg = "Some Error Occured Please try again";
            }
        }, function (err) {
            var errorD = err.error.message;
            if (errorD.indexOf("mobile") != -1) {
                _this.SignUpmsg = "Mobile number already exist";
            }
            else if (errorD.indexOf("email") != -1) {
                _this.SignUpmsg = "Email address already exist";
            }
        });
    };
    // <!-- end of sign up function -->
    // <!-- start of OTP verify function  -->
    BikeSelectionComponent.prototype.verifyOtpN = function (otpToVerify) {
        var _this = this;
        var postData = { 'mobile': this.user.mobile, 'otp': otpToVerify };
        if (this.debugData) {
            console.log("very otp json data is ");
            console.log(postData);
        }
        this.httpClient.post(this.apiService.verifyOTP_URL, postData)
            .subscribe(function (detail) {
            if (_this.debugData) {
                console.log("very otp function API Data ");
                console.log(detail);
            }
            if (detail.status == true) {
                if (_this.debugData) {
                    console.log("Success OTP Verified");
                }
                _this.user = detail.obj;
                _this.otpErrorMsg = "OTP Verified";
                _this.refresh();
            }
            else {
                if (_this.debugData) {
                    console.log(" OTP not Verified");
                }
                _this.otpErrorMsg = "Incorrect OTP";
            }
        });
    };
    // <!-- end of OTP verify function  -->
    // <!-- Start of OTP send function  -->
    BikeSelectionComponent.prototype.sendOtpN = function (mobileNumber, custId) {
        var _this = this;
        var postData = { 'mobile': mobileNumber, 'id': custId };
        this.httpClient.post(this.apiService.sendOtpURL, postData)
            .subscribe(function (detail) {
            if (_this.debugData) {
                console.log("Send OTP Api data");
                console.log(detail);
            }
            if (detail.status == true) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    // <!-- end of OTP send function  -->
    // <!-- start of OTP Resend function  -->
    BikeSelectionComponent.prototype.resendOtpNow = function () {
        var _this = this;
        if (this.apiService.checkUserLoggedIn() == true) {
            var postData = { 'mobile': this.user.mobile };
            this.httpClient.post(this.apiService.resendURL, postData)
                .subscribe(function (detail) {
                if (_this.debugData) {
                    console.log("resend otp function API data");
                    console.log(detail);
                }
                if (detail.status == true) {
                    _this.otpErrorMsg = "OTP sent";
                }
                else {
                    _this.otpErrorMsg = "OTP sending fail";
                }
            }, function (err) {
                _this.otpErrorMsg = "Some error occured. Please try again.";
            });
        }
        else {
            this.warn("Please Login");
        }
    };
    // <!-- end of OTP Resend function  -->
    // checkAddressNull(): boolean {
    //   if ((this.user.address === null) || (this.user.address === "")
    //     || (this.user.city === null) || (this.user.city === "")
    //     || (this.user.state === null) || (this.user.state === "")
    //     || (this.user.pinCode === null) || (this.user.pinCode === 0)) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }
    //--------add user DL Number
    BikeSelectionComponent.prototype.addUserDlnumber = function (dlUser) {
        var _this = this;
        var postDLData = { 'DLnumber': dlUser };
        var custid_url = this.apiService.cutomerDetails + this.user.id;
        if (this.debugData) {
            console.log("Add user DL function data ");
            console.log(postDLData);
        }
        this.httpClient.post(custid_url, postDLData)
            .subscribe(function (data_detail) {
            if (_this.debugData) {
                console.log("update DL api data");
                console.log(data_detail);
            }
            _this.uerDlUpdateMsg = "DL updated Sucess";
            _this.user = data_detail;
        }, function (err) {
            var errorD = err.error.message;
            if (errorD.indexOf("DLnumber") != -1) {
                _this.uerDlUpdateMsg = "DLnumber number already exist";
            }
        });
        // (err) => {
        //   this.uerDlUpdateMsg = "Some error occured. Please try again";
        // });
    };
    //---------end DL number
    BikeSelectionComponent.prototype.checkAddressNull = function () {
        if ((!this.user.address) || (!this.user.city) || (!this.user.state) || (!this.user.state)
            || (!this.user.pinCode)) {
            return true;
        }
        else {
            return false;
        }
    };
    BikeSelectionComponent.prototype.checkDocumentNull = function () {
        if ((this.user.DLfront == null) || (this.user.DLfront == "") || (this.user.DLback == null) || (this.user.DLback == "")
            || (this.user.idProof == null) || (this.user.idProof == "") || (this.user.DLnumber == null) || (this.user.DLnumber == "") || (this.user.idProofBack == null) || (this.user.idProofBack == "")) {
            return true;
        }
        else {
            return false;
        }
    };
    BikeSelectionComponent.prototype.proceedDocumentUpload = function () {
        this.checkDocumentNullState = this.checkDocumentNull();
        if (this.checkDocumentNullState == true) {
            this.docUploadErrorMsg = "Please upload all documents and DL Number.";
        }
        else {
            this.docUploadErrorMsg = "Document uploaded sucessfully.";
        }
    };
    BikeSelectionComponent.prototype.refresh = function () {
        window.location.reload();
    };
    BikeSelectionComponent.prototype.logout = function () {
        this.storage.remove('custDD');
        this.apiService.saveInLocalData('custDD', null);
        this.apiService.saveInLocalData('custnm', null);
        this.router.navigate(['/model']);
    };
    //<!-- start of reset password function -->
    BikeSelectionComponent.prototype.resetPwd = function (emailVal) {
        var _this = this;
        var getResetData = { "email": emailVal };
        this.httpClient.post(this.apiService.postsURL + 'resetPassword', getResetData)
            .subscribe(function (reset) {
            if (_this.debugData) {
                console.log("Email Reset function");
                console.log(reset);
            }
            if (reset.status == true) {
                _this.emailResetMsg = "Link sent successfully";
                _this.forgotPasswordModal.hide();
                return true;
            }
            else {
                _this.emailResetMsg = "Please enter valid email id";
                return false;
            }
        }, function (err) {
            _this.emailResetMsg = "Some error occured. Please try again.";
        });
    };
    //<!-- End of reset password function -->
    BikeSelectionComponent.prototype.success = function (message) {
        this.alertService.success(message);
    };
    BikeSelectionComponent.prototype.error = function (message) {
        this.alertService.error(message);
    };
    BikeSelectionComponent.prototype.info = function (message) {
        this.alertService.info(message);
    };
    BikeSelectionComponent.prototype.warn = function (message) {
        this.alertService.warn(message);
    };
    BikeSelectionComponent.prototype.clear = function () {
        this.alertService.clear();
    };
    BikeSelectionComponent.prototype.toggleVisibility = function (divId) {
        if (this.visibleDivId === divId) {
            //visibleDivId = null;
        }
        else {
            this.visibleDivId = divId;
        }
        this.hideNonVisibleDivs();
    };
    BikeSelectionComponent.prototype.hideNonVisibleDivs = function () {
        var i, divId, div;
        for (i = 0; i < this.divs.length; i++) {
            divId = this.divs[i];
            div = document.getElementById(divId);
            if (this.visibleDivId === divId) {
                div.style.display = "block";
            }
            else {
                div.style.display = "none";
            }
        }
    };
    BikeSelectionComponent.prototype.addUserAddress = function (HouseNoUsr, StreetUsr, LocalityUsr, LandmarkUsr, cityUsr, stateUsr, pincodeUsr) {
        var _this = this;
        //HouseNo Street Locality Landmark  City State Pincode
        var addressUsr = HouseNoUsr + ", " + StreetUsr + ", " + LocalityUsr + ", " + LandmarkUsr;
        var postData = { 'address': addressUsr, 'city': cityUsr, 'state': stateUsr, 'pinCode': pincodeUsr };
        var custid_url = this.apiService.cutomerDetails + this.user.id;
        if (this.debugData) {
            console.log("Add Address function data ");
            console.log(postData);
        }
        this.httpClient.post(custid_url, postData)
            .subscribe(function (data_detail) {
            if (_this.debugData) {
                console.log("update adress api data");
                console.log(data_detail);
            }
            _this.addressUpdateMsg = "Adress updated Sucess";
            _this.user = data_detail;
            //this.refresh();
        }, function (err) {
            _this.addressUpdateMsg = "Some error occured. Please try again";
        });
    };
    //______________________________________________________________________________________________
    // start of document upload//
    BikeSelectionComponent.prototype.onSelectFile = function (event, idType) {
        var _this = this;
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]); // read file as data url
        this.selectedFile = event.target.files[0];
        reader.onload = function (event) {
            //console.log("data selected loaded");
            _this.onUpload(idType);
        };
    };
    BikeSelectionComponent.prototype.onUpload = function (idTypeA) {
        var _this = this;
        var urlUploads = this.apiService.postsURL + 'uploadCustomerDoc?id=' + this.user.id + '&key=' + idTypeA;
        if (idTypeA == 'DLfront') {
            urlUploads += '&old=' + this.dlfront;
        }
        else if (idTypeA == 'DLback') {
            urlUploads += '&old=' + this.dlback;
        }
        else if (idTypeA == 'idProof') {
            urlUploads += '&old=' + this.idproof;
        }
        else if (idTypeA == 'idProofBack') {
            urlUploads += '&old=' + this.idproofBack;
        }
        var uploadData = new FormData();
        uploadData.append('image', this.selectedFile, this.selectedFile.name);
        this.httpClient.post(urlUploads, uploadData, {
            reportProgress: true,
            observe: 'events'
        }).subscribe(function (event) { return _this.handleUploadProgress(event, idTypeA); });
    };
    BikeSelectionComponent.prototype.handleUploadProgress = function (event, idTypeA) {
        if (event.type === __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpEventType */].DownloadProgress) {
            //this.uploadingProgressing = true
            //this.uploadProgress = Math.round(100 * event.loaded / event.total)
        }
        if (event.type === __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpEventType */].UploadProgress) {
            if (idTypeA == 'DLfront') {
                this.dlFrontProgress = Math.round(100 * event.loaded / event.total);
            }
            else if (idTypeA == 'DLback') {
                this.dlbackProgress = Math.round(100 * event.loaded / event.total);
            }
            else if (idTypeA == 'idProof') {
                this.idproofProgress = Math.round(100 * event.loaded / event.total);
            }
            else if (idTypeA == 'idproofBack') {
                this.idproofBackProgress = Math.round(100 * event.loaded / event.total);
            }
        }
        if (event.type === __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpEventType */].Response) {
            if (event.body.status == true) {
                this.intilizeComponent(event.body.customer);
                console.log("uploaded suscessfully");
            }
            else if (event.body.status == false) {
                console.log("uploaded failed! Try Again.");
            }
            //console.log(event.body)
        }
    };
    //referralCodeT1: string = "";
    // test promo code dee8899d
    BikeSelectionComponent.prototype.applyReferal = function (referralCode) {
        var _this = this;
        // if(referralCode=="activa250" && this.modelDataToShow[0].name == "Honda Activa 3G/4G/5G" ){
        //   this.totalPyamentPrice = (this.totalPyamentPrice - 250);
        //   this.referralMsg = "Promo Code applied";
        // }else {
        //"/validatePromoCode"
        if (this.debugData) {
            console.log("Clicked on apply referal");
        }
        this.referralMsg = "Please wait....";
        if ((referralCode != "") && (this.checkUserLoginStatus() == true)) {
            var referralData = {
                id: this.user.id,
                referalCode: referralCode,
                rentalCharge: this.modelDataOriginal[0].price,
                customer: this.user.id,
                model: this.modelDataOriginal[0].id,
                bookingType: 'new'
            };
            if (this.debugData) {
                console.log("Referral data:");
                console.log(referralData);
            }
            this.httpClient.post(this.apiService.validateReferralURL, referralData)
                .subscribe(function (dataReferal) {
                if (_this.debugData) {
                    console.log("signup form function api data");
                    console.log(dataReferal);
                }
                if (dataReferal.status == 1) {
                    _this.refferedCustomerId = dataReferal.refferedCustomerId;
                    _this.referralCodeT = referralCode;
                    _this.usePromoCode = true;
                    _this.isCheckboxDisabled = true;
                    _this.referralMsg = "Referral code applied sucessfully";
                }
                else if (dataReferal.status == 2) {
                    _this.refferedCustomerId = "";
                    _this.referralCodeT = '';
                    _this.usePromoCode = false;
                    _this.referralMsg = "You already used the Referral Code";
                }
                else if (dataReferal.status == 3) {
                    // this.refferedCustomerId = "";
                    // this.referralCodeT = '';
                    // this.Coupon = dataReferal.coupon;
                    _this.isCheckboxDisabled = true;
                    _this.refferedCustomerId = dataReferal.refferedCustomerId;
                    _this.referralCodeT = referralCode;
                    // this.usePromoCode = true;
                    _this.useCouponCode = true;
                    _this.referralMsg = "Coupon code applied sucessfully";
                    _this.modelPriceBeforeCoupon = _this.modelDataOriginal[0].price;
                    _this.modelDataOriginal[0].price = dataReferal.rentalCharge;
                    _this.couponDiscount = dataReferal.couponDiscount;
                }
                else if (dataReferal.status == 4) {
                    // this.refferedCustomerId = "";
                    // this.referralCodeT = '';
                    // this.Coupon = dataReferal.coupon;
                    _this.useCouponCode = false;
                    _this.referralMsg = "Coupon code not applied";
                }
                else {
                    _this.refferedCustomerId = "";
                    _this.referralCodeT = '';
                    _this.usePromoCode = false;
                    _this.useCouponCode = false;
                    _this.referralMsg = "Invalid code";
                }
            }, function (err) {
                if (_this.debugData) {
                    console.log("Some error occured while parsing data from url");
                }
                _this.refferedCustomerId = "";
                _this.referralCodeT = '';
                _this.usePromoCode = false;
                _this.useCouponCode = false;
                _this.referralMsg = "Some erroe occured, while applying referal code. Plz try again.";
            });
        }
        else {
            if (this.debugData) {
                console.log("Refferal code not applied- user not logged in or referral code is null");
            }
            this.refferedCustomerId = "";
            this.referralCodeT = '';
            this.usePromoCode = false;
            this.useCouponCode = false;
            this.referralMsg = "Please Enter a valid referal code";
        }
        // }
    };
    BikeSelectionComponent.prototype.removeReferal = function () {
        this.referralCodeT = '';
        if (this.usePromoCode) {
            this.usePromoCode = false;
            this.isCheckboxDisabled = false;
            this.referralMsg = "Referal code removed";
        }
        else if (this.useCouponCode) {
            this.useCouponCode = false;
            this.modelDataOriginal[0].price = this.modelPriceBeforeCoupon;
            this.referralMsg = "Coupon code removed";
            this.isCheckboxDisabled = false;
        }
    };
    BikeSelectionComponent.prototype.getCustomerPoints = function () {
        var _this = this;
        var dataToPost = { id: this.user.id };
        this.httpClient.post(this.apiService.getCustomerPoints, dataToPost)
            .subscribe(function (dataPoint) {
            if (_this.debugData) {
                console.log("Customer get Point API data");
                console.log(dataPoint);
            }
            _this.availablePoints = dataPoint.points;
            //availablePoints
        }, function (err) {
            if (_this.debugData) {
                console.log("Some error occured while parsing data from url");
            }
        });
    };
    BikeSelectionComponent.prototype.applyPoints = function (val) {
        this.isPromoCodeDisabled = !this.isPromoCodeDisabled;
        this.usePoints = !this.usePoints;
        console.log(this.usePoints);
    };
    BikeSelectionComponent.prototype.tabSelectedReferalPoint = function (valueTab) {
        this.referalAndPointTabPos = valueTab.index;
        if (this.debugData) {
            console.log(valueTab);
        }
    };
    BikeSelectionComponent.prototype.getTotalPrice = function () {
        var modelPriceTemp = this.modelDataOriginal[0].price;
        var tempTotalPrice = 0;
        if (this.extraHelmetType == 1) {
            tempTotalPrice += 50;
        }
        if (this.bookingDeliveryType == 1) {
            tempTotalPrice += this.deliveryCharge;
        }
        // if (this.usePoints == true){
        //   this.totalPyamentPrice = tempTotalPrice + modelPriceTemp;
        //   this.totalPyamentPrice = 
        // }else{ 
        //   this.totalPyamentPrice = tempTotalPrice + modelPriceTemp;
        // }
        this.totalPyamentPrice = tempTotalPrice + modelPriceTemp + this.user.penaltyCharge + this.finalAmount;
        // console.log(tempTotalPrice + modelPriceTemp + this.user.penaltyCharge + this.finalAmount);
        //console.log(this.finalAmount);
        return this.totalPyamentPrice;
    };
    BikeSelectionComponent.prototype.initiatePaymentFun = function (BookingType, event) {
        var _this = this;
        if (this.debugData) {
            console.log("OnGoing FUnction : ");
        }
        var getData = { "customer": this.user.id };
        this.httpClient.post(this.apiService.ongoingBooking, getData)
            .subscribe(function (jdetail) {
            if (_this.debugData) {
                console.log("OnGoing API Data: ");
                console.log(jdetail);
            }
            _this.ongoingDataTemp = jdetail;
            if (_this.ongoingDataTemp.length != 0) {
                //this.error("You already have a ongoing booking, You can't book another.");
                _this.ongoingErrorMsg = "You already have a ongoing booking, You can't book another.";
                _this.ongoingError.show();
            }
            else {
                _this.initiatePaymentFunProceed(BookingType);
            }
        });
    };
    BikeSelectionComponent.prototype.initiatePaymentFunProceed = function (BookingType) {
        var selfPickUp = true;
        var bookingObj = {}; // to store the booking object to be sent in payment gateway
        var subscriptionObj = {}; // to store the subscrption object in case of subscription type
        var udfObj = {}; // to store the udfObjec to be sent to the payment gateway
        var finalObject = {}; // to store the final values to be sent in the server
        var helmetCharge = 0; // to store the price of helmet 
        var deliveryCharge = 0;
        var isSubscriptionChoosed = 0;
        var hh = this.getTotalPrice(); // just to confirm the price
        // if subscrption choosed
        if (this.selectedMonthsVal == 1) {
            isSubscriptionChoosed = 0;
        }
        else {
            isSubscriptionChoosed = 1;
        }
        //if extra helmet choosed
        if (this.extraHelmetType == 1) {
            helmetCharge = 50;
        }
        else {
            helmetCharge = 0;
        }
        // if delivery type choosed
        if (this.bookingDeliveryType == 1) {
            deliveryCharge = this.deliveryCharge;
            selfPickUp = false;
        }
        else if (this.bookingDeliveryType == 0) {
            deliveryCharge = 0;
            selfPickUp = true;
        }
        if (this.usePoints == true) {
            var pointsToRedeems = 0;
            var ttPrice = this.modelDataOriginal[0].price;
            ttPrice += helmetCharge;
            ttPrice += deliveryCharge;
            if (this.availablePoints >= ttPrice) {
                pointsToRedeems = ttPrice;
            }
            else {
                pointsToRedeems = this.availablePoints;
            }
            udfObj = {
                udf1: 'points',
                udf2: this.user.id,
                //udf3: total < 1 ? modelPrice : vm.customerPoints
                udf3: pointsToRedeems
            };
        }
        else if (this.usePromoCode == true) {
            udfObj = {
                udf1: 'referal',
                udf2: this.user.id,
                udf3: this.refferedCustomerId
            };
        }
        else if (this.useCouponCode == true) {
            udfObj = {
                udf1: 'coupon',
                udf2: this.user.id,
                udf3: this.referralCodeT,
                udf4: this.modelDataOriginal[0].price,
                udf5: this.couponDiscount
            };
        }
        else {
            udfObj = {
                udf1: 'normal',
                udf2: this.user.id,
                udf3: 0
            };
        }
        var finalAmountToPay = this.getTotalPrice();
        if (this.usePoints == true && this.availablePoints != 0) {
            if (this.availablePoints >= finalAmountToPay) {
                this.totalPyamentPrice = 0;
            }
            else {
                this.totalPyamentPrice = finalAmountToPay - this.availablePoints;
            }
        }
        if (BookingType == 1) {
            // home delivery
            var addressHOmeDel = document.getElementById('addressDel').value; // to get the value from html text field
            var cityHOmeDel = document.getElementById('cityUserDel').value; // to get the values of delivery city from html
            var pinHOmeDel = document.getElementById('pinUserDel').value; // to get the value of delivery pincode from html
            var fullAddress = addressHOmeDel + ", " + cityHOmeDel + ", " + pinHOmeDel;
            if (addressHOmeDel == '' || addressHOmeDel == null || cityHOmeDel == '' || cityHOmeDel == null || pinHOmeDel == '' || pinHOmeDel == null) {
                this.error("Please fill up valid delivery location.");
                return;
            }
            bookingObj = {
                customer: this.user.id,
                model: this.modelDataOriginal[0].id,
                productInfo: this.modelDataOriginal[0].name,
                extraHelmet: this.extraHelmetType,
                deliveryType: this.bookingDeliveryType,
                deliveryAddress: fullAddress,
                rentalCharge: this.modelDataOriginal[0].price,
                deliveryCharge: deliveryCharge,
                helmetCharge: helmetCharge,
                penaltyCharge: this.user.penaltyCharge,
                isSubscription: isSubscriptionChoosed,
                source: "web",
                pickUpLocation: 1
            };
            if (isSubscriptionChoosed == 1) {
                subscriptionObj = {
                    totalMonths: this.selectedMonths,
                    selectedMonths: this.selectedMonths,
                    extendedMonths: 0
                };
                finalObject = {
                    'bookingObj': bookingObj,
                    'subscriptionObj': subscriptionObj,
                    'udf': udfObj,
                    'amount': this.totalPyamentPrice
                };
            }
            else {
                finalObject = {
                    'bookingObj': bookingObj,
                    'udf': udfObj,
                    'amount': this.totalPyamentPrice
                };
            }
            if (this.debugData) {
                console.log("Home Delivery - payment Object sent to server");
                console.log(finalObject);
            }
            // calling payment gateway to initiate the payment module
            this.gotoPaymentGateway(finalObject);
        }
        else {
            if (this.selectedPickUpLocationId == 0) {
                // this.error("Please select valid pickup location.");
                this.pickup_location_msg = "Please select valid pickup location.";
                return;
            }
            bookingObj = {
                customer: this.user.id,
                model: this.modelDataOriginal[0].id,
                productInfo: this.modelDataOriginal[0].name,
                extraHelmet: this.extraHelmetType,
                deliveryType: this.bookingDeliveryType,
                pickUpLocation: this.selectedPickUpLocationId,
                rentalCharge: this.modelDataOriginal[0].price,
                helmetCharge: helmetCharge,
                penaltyCharge: this.user.penaltyCharge,
                isSubscription: isSubscriptionChoosed,
                source: "web"
            };
            if (isSubscriptionChoosed == 1) {
                subscriptionObj = {
                    totalMonths: this.selectedMonths,
                    selectedMonths: this.selectedMonths,
                    extendedMonths: 0
                };
                finalObject = {
                    'bookingObj': bookingObj,
                    'subscriptionObj': subscriptionObj,
                    'udf': udfObj,
                    'amount': this.totalPyamentPrice
                };
            }
            else {
                finalObject = {
                    'bookingObj': bookingObj,
                    'udf': udfObj,
                    'amount': this.totalPyamentPrice
                };
            }
            if (this.debugData) {
                console.log("Self Pickup - payment Object sent to server");
                console.log(finalObject);
            }
            // calling payment gateway to initiate the payment module
            this.gotoPaymentGateway(finalObject);
        }
    };
    // function to send the parms to the payment gateway for initiate payment
    BikeSelectionComponent.prototype.gotoPaymentGateway = function (objectToPost) {
        var _this = this;
        this.httpClient.post(this.apiService.initiatePaymentURL, objectToPost)
            .subscribe(function (paymentData) {
            if (_this.debugData) {
                console.log("Initiate Payment API Data");
                console.log(paymentData);
            }
            if (paymentData.status == 1) {
                _this.paymentGatewayData = paymentData.obj;
                _this.paymentGatewayData.surl = _this.baseUrl + "/api/paymentResponse";
                _this.paymentGatewayData.furl = _this.baseUrl + "/api/paymentResponse";
                _this.paymentGatewayData.service_provider = "";
                if (_this.debugData) {
                    console.log("payment gateway object");
                    console.log(_this.paymentGatewayData);
                }
                if (_this.paymentGatewayData.amount == 0) {
                    if (_this.debugData) {
                        console.log("you are elizible for free booking");
                    }
                    //this.goToDirectBookingGateway(this.paymentGatewayData);
                    _this.paymentGatewayProceedDirect.show();
                }
                else {
                    _this.paymentGatewayProceed.show();
                }
            }
            else {
                //console.log("Some Error Occured, You have ongoing booking ");
                _this.booking_error_msg = "Please Verify Your Mobile Number";
            }
        }, function (err) {
            if (_this.debugData) {
                console.log("Some error occured while parsing data from url");
            }
        });
    };
    //<!-- Start of direct payment using points  -->
    BikeSelectionComponent.prototype.goToDirectBookingGateway = function () {
        var _this = this;
        var paymentGatewayData = this.paymentGatewayData;
        var time = new Date();
        var mpayIdd = time.getTime();
        var paymentGatewayDataForDirect = {};
        paymentGatewayDataForDirect = {
            "mihpayid": mpayIdd,
            "status": "success",
            "txnid": paymentGatewayData.txnid,
            "udf1": paymentGatewayData.udf1,
            "udf2": paymentGatewayData.udf2,
            "udf3": paymentGatewayData.udf3,
            "udf4": paymentGatewayData.udf4,
            "amount": paymentGatewayData.amount
        };
        if (this.debugData) {
            console.log("Direct response Function ");
        }
        this.httpClient.post(this.apiService.paymentResponseURL, paymentGatewayDataForDirect)
            .subscribe(function (pmtdetail) {
            if (_this.debugData) {
                console.log("Payment Response API Data: ");
                console.log(pmtdetail);
            }
            if (pmtdetail.status = 1) {
                console.log(pmtdetail.paymentId);
            }
        });
    };
    //<!-- End of direct payment using points  -->
    // to save and apply the delivery type choosed by the user - Home Or Self
    BikeSelectionComponent.prototype.deliveryModeApply = function (deliveryType) {
        if (this.debugData) {
            console.log("Delivery Mode function");
        }
        if (deliveryType == 0) {
            this.bookingDeliveryType = 0;
            if (this.debugData) {
                console.log("Delivery Mode - Self");
                console.log(this.bookingDeliveryType);
            }
        }
        else if (deliveryType == 1) {
            this.bookingDeliveryType = 1;
            if (this.debugData) {
                console.log("Delivery Mode - Home");
                console.log(this.bookingDeliveryType);
            }
        }
        this.getTotalPrice();
    };
    // to apply and store extra helmet requirement by user
    BikeSelectionComponent.prototype.extraHelmetApply = function (extraHel) {
        if (this.debugData) {
            console.log("Extra helmet Function Data");
            console.log(extraHel);
        }
        if (extraHel == 0) {
            this.extraHelmetType = 0;
        }
        else if (extraHel == 1) {
            this.extraHelmetType = 1;
        }
        this.getTotalPrice();
    };
    // to apply the pickup location choosed by the user
    BikeSelectionComponent.prototype.pickUpLocationApply = function (locationID) {
        this.selectedPickUpLocationId = locationID;
        if (this.debugData) {
            console.log("Pickup Location Function, Customer choose Location Id: ");
            console.log(locationID);
        }
        for (var i = 0; i < this.location.length; i++) {
            if (this.location[i].id == locationID) {
                this.selectedLoaction = this.location[i].address;
                break;
            }
        }
        this.getTotalPrice();
    };
    BikeSelectionComponent.prototype.sameDeliveryAddress = function () {
        document.getElementById('addressDel').value = this.user.address;
        document.getElementById('cityUserDel').value = this.user.city;
        document.getElementById('pinUserDel').value = String(this.user.pinCode);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('OTPModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8_angular_bootstrap_md__["c" /* ModalDirective */])
    ], BikeSelectionComponent.prototype, "OTPModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('ongoingError'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8_angular_bootstrap_md__["c" /* ModalDirective */])
    ], BikeSelectionComponent.prototype, "ongoingError", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('forgotPasswordModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8_angular_bootstrap_md__["c" /* ModalDirective */])
    ], BikeSelectionComponent.prototype, "forgotPasswordModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('changePlanModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8_angular_bootstrap_md__["c" /* ModalDirective */])
    ], BikeSelectionComponent.prototype, "changePlanModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('paymentProceed'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8_angular_bootstrap_md__["c" /* ModalDirective */])
    ], BikeSelectionComponent.prototype, "paymentGatewayProceed", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('paymentProceedDirect'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8_angular_bootstrap_md__["c" /* ModalDirective */])
    ], BikeSelectionComponent.prototype, "paymentGatewayProceedDirect", void 0);
    BikeSelectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bike-selection',
            template: __webpack_require__("../../../../../src/app/bike-selection/bike-selection.component.html"),
            styles: [__webpack_require__("../../../../../src/app/bike-selection/bike-selection.component.scss")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4_angular_webstorage_service__["a" /* LOCAL_STORAGE */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4_angular_webstorage_service__["c" /* WebStorageService */],
            __WEBPACK_IMPORTED_MODULE_7__alert_service__["a" /* AlertService */], __WEBPACK_IMPORTED_MODULE_5__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_9__angular_common__["DatePipe"]])
    ], BikeSelectionComponent);
    return BikeSelectionComponent;
}());

//_______________________________________________________________________________________________
// End of Payment module 
//_______________________________________________________________________________________________
//document.forms["payuform"].submit();
//var myForm = <HTMLFormElement>document.getElementById('payuform');
//myForm.submit();
//document.forms["payuform"].submit();
// amount: 3014
// email: "sau@gmail.com"
// firstname: "sau"
// hash: "e1372dae2564b98729033ef49b13d92deb7a286c21e3b4eef1a8c073078aea767e61e5b73a060847e5054d657d311a4d67f2ba2cf0c2fba58e9d8da7ca69868e"
// key: "gtKFFx"
// phone: "8389952020"
// productinfo: "TVS Sport"
// salt: "eCwWELxi"
// txnid: "L18G3993"
// udf1: "normal"
// udf2: 6848
// udf3: 0
// url: "https://test.payu.in/_payment" 


/***/ }),

/***/ "../../../../../src/app/bike-selection/bike-selection.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BikeSelectionModule", function() { return BikeSelectionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_device_detector__ = __webpack_require__("../../../../ngx-device-detector/fesm5/ngx-device-detector.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_bootstrap_md__ = __webpack_require__("../../../../angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_select__ = __webpack_require__("../../../material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_tabs__ = __webpack_require__("../../../material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_checkbox__ = __webpack_require__("../../../material/esm5/checkbox.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_image_upload__ = __webpack_require__("../../../../angular2-image-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__token_interceptor__ = __webpack_require__("../../../../../src/app/token-interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_change_service__ = __webpack_require__("../../../../../src/app/models-change.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_radio__ = __webpack_require__("../../../material/esm5/radio.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_button_toggle__ = __webpack_require__("../../../material/esm5/button-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng_circle_progress__ = __webpack_require__("../../../../ng-circle-progress/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular_webstorage_service__ = __webpack_require__("../../../../angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__modal_service__ = __webpack_require__("../../../../../src/app/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__alert_service__ = __webpack_require__("../../../../../src/app/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_cdk_scrolling__ = __webpack_require__("../../../cdk/esm5/scrolling.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_material_menu__ = __webpack_require__("../../../material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_material_slider__ = __webpack_require__("../../../material/esm5/slider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_material_datepicker__ = __webpack_require__("../../../material/esm5/datepicker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angular2_moment__ = __webpack_require__("../../../../angular2-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_material_tooltip__ = __webpack_require__("../../../material/esm5/tooltip.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_material_sidenav__ = __webpack_require__("../../../material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__angular_material_list__ = __webpack_require__("../../../material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__title_service__ = __webpack_require__("../../../../../src/app/title.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_ngx_gallery__ = __webpack_require__("../../../../ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_ngx_gallery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_37_ngx_gallery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_amazing_time_picker__ = __webpack_require__("../../../../amazing-time-picker/amazing-time-picker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__bike_selection_routing_module__ = __webpack_require__("../../../../../src/app/bike-selection/bike-selection-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__bike_selection_component__ = __webpack_require__("../../../../../src/app/bike-selection/bike-selection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//import { ReadMoreDirective } from 'read-more-directive-angular2';


































// import { IgxTimePickerModule,IgxInputGroupModule,	IgxIconModule} from "igniteui-angular";
//  import { 	IgxToastModule } from "igniteui-angular";



var BikeSelectionModule = (function () {
    function BikeSelectionModule() {
        console.log("bike selection module loaded");
    }
    BikeSelectionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_41__bike_selection_component__["a" /* BikeSelectionComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_40__bike_selection_routing_module__["a" /* BikeSelectionRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_42__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1_ngx_device_detector__["a" /* DeviceDetectorModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_angular_bootstrap_md__["b" /* MDBBootstrapModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_angular_bootstrap_md__["d" /* WavesModule */],
                __WEBPACK_IMPORTED_MODULE_2_angular_bootstrap_md__["a" /* ButtonsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_checkbox__["a" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material_radio__["a" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material_button_toggle__["a" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material_dialog__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_18_angular_webstorage_service__["b" /* StorageServiceModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_cdk_scrolling__["b" /* ScrollDispatchModule */],
                __WEBPACK_IMPORTED_MODULE_25__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_material_slider__["a" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_28__angular_material_datepicker__["a" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_29__angular_material__["d" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_30_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_31__angular_material_tooltip__["a" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_33__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_35__angular_material_list__["a" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_material_sidenav__["a" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_37_ngx_gallery__["NgxGalleryModule"],
                __WEBPACK_IMPORTED_MODULE_39_amazing_time_picker__["a" /* AmazingTimePickerModule */],
                // IgxTimePickerModule,
                // IgxInputGroupModule,
                // IgxIconModule,
                // IgxToastModule,
                __WEBPACK_IMPORTED_MODULE_7_angular2_image_upload__["a" /* ImageUploadModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_17_ng_circle_progress__["a" /* NgCircleProgressModule */].forRoot({
                    "radius": 60,
                    "space": -10,
                    "percent": 100 - 13,
                    "title": "3" + "Days \n left",
                    "outerStrokeWidth": 10,
                    "outerStrokeColor": "#4882c2",
                    "innerStrokeColor": "#e7e8ea",
                    "innerStrokeWidth": 10,
                    "animateTitle": false,
                    "animationDuration": 1000,
                    "showUnits": false,
                    "showSubtitle": false,
                    "showBackground": false,
                    "clockwise": false,
                })
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NO_ERRORS_SCHEMA"]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_28__angular_material_datepicker__["a" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_22__auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_21__modal_service__["a" /* ModalService */],
                __WEBPACK_IMPORTED_MODULE_2_angular_bootstrap_md__["c" /* ModalDirective */],
                __WEBPACK_IMPORTED_MODULE_19__authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_20__user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_23__alert_service__["a" /* AlertService */],
                __WEBPACK_IMPORTED_MODULE_10__api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_38_ngx_cookie_service__["a" /* CookieService */],
                __WEBPACK_IMPORTED_MODULE_36__title_service__["a" /* TitleService */],
                __WEBPACK_IMPORTED_MODULE_11__models_change_service__["a" /* ModelsChangeService */],
                //{provide:APP_INITIALIZER, useFactory: ApiServiceFactory, deps:[ApiService],multi:true},
                {
                    provide: __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_8__token_interceptor__["a" /* TokenInterceptor */],
                    multi: true
                }
                // { provide: UrlSerializer, useClass: AppRoutingModule }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], BikeSelectionModule);
    return BikeSelectionModule;
}());



/***/ }),

/***/ "../../../../../src/assets/images/dont-want-active.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAXCAYAAAAP6L+eAAAAAXNSR0IArs4c6QAAA4NJREFUOBGVlftLFFEUx8+5M61GyUIhaET00BZCicofehBRrLs9aFcDf7EnFEZFBRXUb/kHRD8UFUUFvX7qIW5krEohERQURUW0amkRWEiBlaW7M/d0ztSVaXxUs7vcO+d8v5+9e+bcuwhjXBtjHyZ8hb5KIphDAMUiRYAeRHhZAOGWS81F/aPZWTf8qom+DmfROcLADQCUzzjid6enJCzhGPtwgL/gcojsA1dbZ/UFKcPAyWhHHFCfBaLxgHhUIT2w9bjHxixf6qjcAk24kDX7WPMDSG1rbC1N++F/gBPR9pMAegev5GZoXF7d1aYZH/zi4LxmdVdRNjd4hn/ZWgB1KtU6e2dQA1Wx9rpENKOrYq+2Dkv+JSCeX972OiP1Vly1sms6OYPPCPFCqiWy2yT/Z0xUZo4j0WYrFCq/0TTzrSIi1G72HEM/FuUXHPwfmF8rXmE4udx5YWIy3h4lV7eAZa9IpUvuGnF9Pakn9zMnFNonGppLXpi4jNWxzjJNzq55SyK76utRm1wi3rkcXOcOWqpSgaYqrse3+YtmtRmBjIcPA/FrrkvuHQGZnMwlJjlPYxI8CkNYHpNr85Rv+hpbIst8Gm/6u5/TvDlmWmitkKBAWf9moq1iV26Xfgl6kpWZNtaHFSemsPBRUCD30ru8AeICEuDfoOL5zZqiECjMTd4twZEugVtA+3kzFMpH5iOtdMjLLGFyV2AvF7N8KBGYSE0dwAZEfCgfmftrHpDLgykXpqz4HWioCArk3jwoU1N/WUaFM0uYChU286FStntVR54fzu1mu9ptNVD5+X/UnHOi8Xu2bOniA4vKhKlI29f56LLf5vQmv4j700EFe4NPX+ASk5xo/J7P77MbhYVgXeMFAch25GFTHtnlbHznF//rnFtz2iA6z1l/UY4FaTcIY/gQn7i9WXDOyXb8V5jRiUe8whCWxIcgyXhmKbnQxkfmBRo/aU8qVfjVGMcaE4neAvzx+RgfnZvRgmWN6cg90XsrlokXUFDLxU/g90/PvX0viTEu0YiWWyzJpFoDFcvQio1/Xby72HEHz/D9Gk42kcIHFupH+SH0dudAlipcUhWoaSFv3dWsu2VbeXU30tN7DEPGYWCTTMQ61qPW21mxmGtombhnQj7RCO6TUqdTzaVX/DkzHxVsBNXV7yfr/oEIs7x/aSLVoybkZxoapn4ympHGn1hNragBMEDqAAAAAElFTkSuQmCC"

/***/ }),

/***/ "../../../../../src/assets/images/dont-want.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAXCAYAAAAP6L+eAAAAAXNSR0IArs4c6QAAAxpJREFUOBGNlctrU0EUh3tvSpMQpAsRrAtxIQjS4sIuilQkYq0PfKxrTCiJiVqsoIL+EeJCqZqXJUF3ShdiwLY0iAgVahdWBEGKlkAsxYVaiWls4neuM+E2D83AcM6c8zvfnJnbSY22f4x0Ou0pFAoDpmnurlQqXSI1DCNfLpffu93uKb/f/7NZudEoEY1GO4nfBOID6MJiKh9Fi78TH2P8wj4kdC0SiXyTnH3UgWOx2CCCBEVuOr2FP0uHb3SxbEp8L/E+4lfYoIAfCofDz7HVsQFM0V0yF5hPOzo6wsPDw1+qygbO+Pj41rW1tRipE8x7bH5Ry6rgeDwepsv7dHCOkdSCViy1QWrj1J6nVjZqs8DsvKNUKr1lneJIl1qB1Wq4wjvEAlxTTygU+myykwFUOlzGv15b0Opa1S5z7w+EabDTIZwpAAe5o6wGETM54hgdjNHBOx0Xm0gkugGMcOwRjl/WOb6RF3+G2IB0fJrFKlfwQguUJVXZA2BGQDqnoDOSI1bRcbGKsSpMk3U/c96+s4hYS9FRRIsaboMuejyeI0ojcmsoxjyLfpPFNuacym0w6m93UMNlA/GBHvb5fN83iNVCWMKUjuWVfVLxOiNwh8NxFeAWmeI3g6piYXXKHa/g9KhgnVHHnyDxWiZdT9jvvK4AljCl4yWc3gYC/fWrx0dTvZZmcMVaEvAkszuTyTjt8Gw220530wird1pz59Oisdfw0FzCYk4K+AmX3Z7L5fx2kdfr/U38cu2HErjEJCcaew0P7ayw+A6PrSctz5HOBNxD4ZJd3KrP49iOdgFwWn4WpOM2l8t1A7NCMMkG1mYSb3VIjdSiX1Gsvz9CAuD57kcgry/FUUaDweAPif9vJJPJTevr67fRBYAf4Jm/lBqrY3FUYAj3JMIF9e4l1XSIRrQ0dArRkIZKQd2xEXexs/ymHqcggz/LD9EcAOt1cppe/lp6yfWRO4buGX6Yb5MXoB51YJ3gg57BjzD3UejQcWXLQF/hR/lQj2py1rIpWItTqdTmYrG4i7X1XxqbdzqdHwKBwFetaWT/AB5NvNL9ip1wAAAAAElFTkSuQmCC"

/***/ }),

/***/ "../../../../../src/assets/images/door-icon-active.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "door-icon-active.250468c371b64e40a8e5.svg";

/***/ }),

/***/ "../../../../../src/assets/images/door-icon.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "door-icon.3c113b6bf3810ad784be.svg";

/***/ }),

/***/ "../../../../../src/assets/images/self-icon-active.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "self-icon-active.9df94b7516025a7ab5de.svg";

/***/ }),

/***/ "../../../../../src/assets/images/self-icon.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "self-icon.0efa4db7ecb9b4488655.svg";

/***/ }),

/***/ "../../../../../src/assets/images/tick.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,UklGRjgBAABXRUJQVlA4TCsBAAAvE8AEEL/BqI0kR94MaHkcfxz3y02DQdtIjjx3Xyk8qOfPpQ2jSJIiZWOAN/7loQD2aLaRbSv5uDsRKf3TjUsHRK7334A47h2sveTgxCnPG/75zqpl+kMTiiiKlFLKEmkEJUiLlISlFJjkDLmUBTPkSimYCAMFKUopwotopVR4Iaa/MGAVXmUFj7CE1FYlhj+WmlGPYa5b12uZ1zp/7mvdcBjZttI8iLsTDxq/uPXf2pfHLyGi/4zcto1En7rPJL8gJYO5cz0vRw0xGV6g5rfQTV9gklaKNfg8a6H8dsCRqHXRJS5oBtbpAyCiHWtrBQCS3o2zse+QGb8Zjv2AYiX9JyGQ1S40yiDvh/vah2asbsmbxoMm6WkXHbjyRGa1MqqpWe2NemTcS6OeEwA="

/***/ }),

/***/ "../../../../../src/assets/images/want-active.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAXCAYAAAAP6L+eAAAAAXNSR0IArs4c6QAAA6ZJREFUOBGVld9rVEcUx8+Ze92sSFhQClGkWDXZIM1LmwcttaLdH21q7q6VvNhqxB8RBX0ogn30D5A+tLSl0hR/9aFYs8mWBnc3Wn8gCLV9qKV0N9qYEIkSVMSq2d27czzn2pHr3brqsDAz53zPZ+bOnDmL0KBtTNyYcw/uxolgGQHMFykCTCHCX80QKRzNt9x/Vjjr6ltP7Gqkgu4BBn4MQGHGEf+ueErCpWzjOJzhBY6FyN57fGTJ3SClDpyKjSYB9bdANBsQP1NIF2096zcTLIu6qvqmJlzOmk9Y8xBIbRsaac354U+BnVjpKwC9k3fyU2hWU9/x4ddu+MXBcU/XWEulWj7IX9YNoL7OjrTtCmognSj1ObGiTif+3lrnfI5BYh7HlvqM1Ntx+r2xReSW/yDEw9lCdLdxvkzvxItfIFGvFQp1DAwvHldEhLpW6WfozZZw876Xgfm1EisMt1r9TpiYSpZiVNMFsOw12dzSX/ziRuPNm8fCdybL/aAwO5SP/iBaJ3llNdTc02ipuAJNaT6Pf99YseRsI5Df50Gvlwc56VKWgn+MTxjCEqbixH+bU+b3/ftRG0Gjfvf7o023JyuZx3Gqa+Bk9Fej9xjMEp9i4wJe5ZJxSr8+UWyXc/LbZCzQcVdn+LG8oyxrbTbfdi6o+Y+1QCFQhHd8zQgcZ7rZJfgzFR/90g/v6aHQRFWf4Fe3CpS9dvBk6xkT81TPLGFyVuA0AXUYZzb7yj1QsAWRdhi4QMt3SgyFNRZCd6NLFpYwbaZPgMZOA5Z+KBc9ko4XpT4cSieKciR8XPguv8juTL79tF9bN9bQKUyFCvP8ea/L+flFg4XoURb0crHZzjtIgIUO2075NcGxZIuwhKlI2yd4a/Z4VW8KCgcL7ccQVJcNavVQrm0k6A/OOVs2CgvB+tG7eXmOLNrURHYHV7GJYMCLzLnqvVpG9zJrj0hZkHSDCEY+5Yo7XQG3358JLwIUjcRIrDCEJbYnuZpKFldSDc7yBR2m2XP3eNkhiuc0SU98ePtzLp29aMEqvvjzEuLtWAaeQcEGXt/BB7cue+9eHA2aaETLKZZi0gYDlZAnOzbxHyavzXdr5YM8/4Cdw6TwooX6UjiE3uucqVBnjVQnalrOT7eLdT/bVlPfQG7RlGFIXwc2Ticx+hFqvYMVb/EZWsbuBSHXFYILpNQ32Xzr936fGT8TbATr1k3O0/dnoszy/qWJ1JSaEy5mMgtvGc3/9Y8Ae2iRg2By5UcAAAAASUVORK5CYII="

/***/ }),

/***/ "../../../../../src/assets/images/want.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAXCAYAAAAP6L+eAAAAAXNSR0IArs4c6QAAAyhJREFUOBGNld9Lk1EYx/dush9EeNFNehFdBEW4q7yQqETLguWPrq021uZWgV1EUH9EdJH0Y1vLtuwiSYqiQVqWRSBkXmQEQYQ5wUSCRcbS4dbneXvPWO823YHD85zn+X6/5znPOe+mWdYZyWRyUzab7bBarbsLhUKDQDVNW8jn859cLteY1+v9XY2uVUpEIpF64pcROYGgE4spfBEs/g58jPYHO0ToQjgc/im50lEmHI1GjwC4BclFpVfwJ6nwvSLLpsT3EG8hfp4NsvjBUCj0DFsc/wlDuk7mDPOJ3W4P+f3+70VkBWdwcHDr6upqlFQX8wabn1WwonAsFgtR5U0q6GPEFaAWCzcANwb3NFzZyKILs/P2XC73gXWCI/XXImbG0MIBYj7a5A4Gg9+s7KQhKhUu4l80E2pdG9xF+n5bNDV2OoQzhkA7PXpZqxCndNLfOBU+5vj3hccdtWHGaUmHVHyMxTItmJBkLUNEOeUjBHrgf1UcQ2NZNK0E9zGnAeUVYD2bSqUcVPpQeFTrQeydwhsa03qORSNzSiXFcqRd7Fp8MSonovPz8yJ6AE4nl/Ra5ZQVLdGUiuUrm1WJeDy+mcRHen+tVHx4eNieTqdHiLWC7aSvrxTHZGdZ10uPl3DcKhkIBH4hfIp1WImLaCaTGSHWzvG7Nrhkt2jWAZ7DaVbCYqkmiSjhwh0ev7SkEf+gzWbr4vjjpVizb2jNSStGmU3Sv1IQl3KX6nzE+piHOUU3oi9KMWZfXguxJuaoCI9AquNSvGYglQ9RgYd8Gxs9N+fNa57gSdHiZA/0m+fYAwiIsJv+zZkJtax5SdvAzSCcpIh+qdjidDovYZYIxtmg7JkJZr0hHOGCWTK0/v0ICYlL2g9gAjfBUc7J65D4RkOe59ra2lVwPsRbad8b4egVi2MEenG7Ac4Y372kqg7BCJaCegD1KlEhlB0bcAM7y2/qUQgp/ElexxQC+tfJaZr5BWsm10LOA+4pfoi7WRBBNcqEVYILPY4fZu6FaFNxw+YRfYsf4aLumXL6sqqwAicSiS0rKys7Wev/0tgFh8Px2efz/VCYSvYvFf+HnBm0cmwAAAAASUVORK5CYII="

/***/ })

});
//# sourceMappingURL=bike-selection.module.chunk.js.map