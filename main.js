(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Documents/ecosys/jobs/programming/Darwin/Fedex 10:12:20/fdx-giphy/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false
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

/***/ "JFX/":
/*!*********************************************************!*\
  !*** ./src/app/services/profanity/profanity.service.ts ***!
  \*********************************************************/
/*! exports provided: ProfanityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfanityService", function() { return ProfanityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class ProfanityService {
    constructor(http) {
        this.http = http;
        this.url = '/profanity'; // the rest is done by the proxy configured in angular.json
        // user = 'yogibimbi';
        this.key = '6f8fba196ac6f3ab123115463946af91'; // for webpurify
        this.active = false;
        this.getMessage = function () {
            // profanity message out in the results list
            // defining it as a property, it can be grafted to the mock services
            const images = [
                'orly.gif',
                'mouth.jpg',
                'soap.gif',
                'thinking.gif',
                'seals.gif',
                'here.gif',
                'kittens.gif'
            ];
            const baseUrl = '/assets/images/';
            const items = images.map(image => {
                return {
                    src: baseUrl + image,
                    link: 'http://' + window.location.host + "?" + image.replace(/\..*/, ''),
                    title: 'Click this for something more decent. And a better world.'
                };
            });
            const page = {
                items: items,
                total: items.length
            };
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(page);
        };
    }
    check(term) {
        let url = `${this.url}?method=webpurify.live.check&format=json&api_key=${this.key}&text=${term}`; // webpurify
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(data => {
            this.active = data['rsp'].found > 0; // this is good enough for app.profanityCheck (which still must subscribe!)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.active); // this needs to be here for testing
        }));
    }
}
ProfanityService.ɵfac = function ProfanityService_Factory(t) { return new (t || ProfanityService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ProfanityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProfanityService, factory: ProfanityService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfanityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_profanity_profanity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/profanity/profanity.service */ "JFX/");
/* harmony import */ var _services_giphy_giphy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/giphy/giphy.service */ "maMf");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");







function AppComponent_div_33_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function AppComponent_div_33_li_2_Template_img_load_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.imageLoading($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "items", ctx_r3.page.size * (ctx_r3.page.index - 1) + i_r5 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r4.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r4.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("title", item_r4.title);
} }
function AppComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_33_li_2_Template, 3, 4, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.page.items);
} }
function AppComponent_footer_34_ngb_pagination_17_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "|<");
} }
function AppComponent_footer_34_ngb_pagination_17_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, ">|");
} }
function AppComponent_footer_34_ngb_pagination_17_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "<");
} }
function AppComponent_footer_34_ngb_pagination_17_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, ">");
} }
function AppComponent_footer_34_ngb_pagination_17_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const p_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r15);
} }
function AppComponent_footer_34_ngb_pagination_17_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-pagination", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function AppComponent_footer_34_ngb_pagination_17_Template_ngb_pagination_pageChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.page.index = $event; })("pageChange", function AppComponent_footer_34_ngb_pagination_17_Template_ngb_pagination_pageChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.paginationChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_footer_34_ngb_pagination_17_ng_template_1_Template, 1, 0, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_footer_34_ngb_pagination_17_ng_template_2_Template, 1, 0, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_footer_34_ngb_pagination_17_ng_template_3_Template, 1, 0, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_footer_34_ngb_pagination_17_ng_template_4_Template, 1, 0, "ng-template", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_footer_34_ngb_pagination_17_ng_template_5_Template, 1, 1, "ng-template", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", ctx_r8.page.total)("page", ctx_r8.page.index)("pageSize", ctx_r8.page.size)("boundaryLinks", true)("maxSize", ctx_r8.page.count)("rotate", ctx_r8.page.rotation)("ellipses", ctx_r8.page.ellipses);
} }
function AppComponent_footer_34_ngb_progressbar_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-progressbar", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 100 * (ctx_r9.images.loaded / ctx_r9.page.items.length))("striped", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r9.images.loaded, " loaded");
} }
function AppComponent_footer_34_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_footer_34_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.pageSizeChange(5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_footer_34_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.pageSizeChange(10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_footer_34_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.pageSizeChange(25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "25");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_footer_34_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.pageSizeChange(50); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "50");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "images");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AppComponent_footer_34_ngb_pagination_17_Template, 6, 7, "ngb-pagination", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AppComponent_footer_34_ngb_progressbar_19_Template, 2, 3, "ngb-progressbar", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.page.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.page.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.images.loaded < ctx_r2.page.items.length);
} }
const _c0 = function (a0) { return { profane: a0 }; };
class AppComponent {
    constructor(profanity, giphy) {
        this.profanity = profanity;
        this.giphy = giphy;
        this.title = 'fdx-giphy';
        this.search = ''; // current search term as entered by the user
        this.page = {
            total: 0,
            index: 1,
            items: [],
            size: 10,
            count: 5,
            ellipses: false,
            rotation: true // dto. rotation setting
        };
        this.images = {
            loaded: 0,
        };
    }
    ngOnInit() {
        let search = window.location.search; // get the current search term from  the query string
        /*
            this allows the profanity message disguised as a search result to work
            with links on the images, but also, in the current implementation, is a
            backdoor to smuggle profane searches past the profanity check. Since it
            it is not a very obvious backdoor, I'll leave it at that for the time
            being, however
        */
        this.search = search.replace(/^\W*(\w+).*/, "$1"); // trim the garbage a bit
        if (this.search) {
            this.profanityCheck();
        }
    }
    ngAfterViewInit() {
        if (this.search) {
            // this.profanityCheck();
            this.updateSearch();
        }
    }
    paginationChange(event) {
        this.page.index = event;
        this.images.loaded = 0;
        this.updateSearch();
    }
    pageSizeChange(size) {
        const pos = (this.page.index - 1) * this.page.size;
        this.page.size = size;
        this.page.index = Math.floor(pos / size) + 1;
        this.images.loaded = 0;
        this.updateSearch();
    }
    getSearch(search) {
        // do profanity check
        if (search) {
            this.search = search;
        }
        this.page.index = 1;
        this.page.total = 0;
        this.page.items = [];
        this.images.loaded = 0;
        this.updateSearch();
    }
    updateSearch() {
        if (!this.profanity.active) {
            this.giphy.search(this.search, this.page).subscribe(page => {
                this.page.total = page.total;
                this.page.items = page.items;
            });
        }
        else {
            this.profanity.getMessage().subscribe(page => {
                this.page.items = page.items;
                this.page.total = page.total;
            });
        }
    }
    undoSearch() {
        this.search = this.giphy.currentSearch;
    }
    profanityCheck() {
        this.profanity.check(this.search).subscribe(() => { });
    }
    imageLoading(event) {
        this.images.loaded++;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_profanity_profanity_service__WEBPACK_IMPORTED_MODULE_1__["ProfanityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_giphy_giphy_service__WEBPACK_IMPORTED_MODULE_2__["GiphyService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 35, vars: 9, consts: [[1, "d-flex"], [1, "d-flex", "justify-content-center", "flex-row"], ["for", "searchText"], ["id", "searchText", "type", "text", "placeholder", "kittens?", 1, "btn-outline-primary", "profane", 3, "ngClass", "ngModel", "ngModelChange", "keyup.enter", "keyup.escape", "keyup"], ["id", "searchButton", 1, "btn", "btn-outline-primary", 3, "ngClass", "click"], ["ngbDropdown", ""], ["infoDrop", ""], ["ngbDropdownToggle", "", "id", "infoButton", 1, "btn", "btn-outline-primary", "info"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownForm1"], [1, "content-wrapper"], ["class", "results d-flex justify-content-center", 4, "ngIf"], ["class", "d-flex ", 4, "ngIf"], [1, "results", "d-flex", "justify-content-center"], [4, "ngFor", "ngForOf"], [3, "href", "id"], ["height", "200", 3, "src", "title", "load"], ["ngbDropdown", "", 1, "d-inline-block"], ["id", "pageSizeDD", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary"], ["ngbDropdownMenu", "", "aria-labelledby", "pageSizeDD"], ["ngbDropdownItem", "", 3, "click"], ["for", "pageSizeDD"], ["class", "d-flex justify-content-center", "aria-label", "search result pagination", 3, "collectionSize", "page", "pageSize", "boundaryLinks", "maxSize", "rotate", "ellipses", "pageChange", 4, "ngIf"], ["type", "primary", 3, "value", "striped", 4, "ngIf"], ["aria-label", "search result pagination", 1, "d-flex", "justify-content-center", 3, "collectionSize", "page", "pageSize", "boundaryLinks", "maxSize", "rotate", "ellipses", "pageChange"], ["ngbPaginationFirst", ""], ["ngbPaginationLast", ""], ["ngbPaginationPrevious", ""], ["ngbPaginationNext", ""], ["ngbPaginationNumber", ""], ["type", "primary", 3, "value", "striped"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Search for\u2026");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_5_listener($event) { return ctx.search = $event; })("keyup.enter", function AppComponent_Template_input_keyup_enter_5_listener() { return ctx.getSearch(); })("keyup.escape", function AppComponent_Template_input_keyup_escape_5_listener() { return ctx.undoSearch(); })("keyup", function AppComponent_Template_input_keyup_5_listener() { return ctx.profanityCheck(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_6_listener() { return ctx.getSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u2026on giphy! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "The absolute final user manual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Typing text in the search box is evaluated for profanity as you type. Be nice! If it turns red, you are not being nice. When you submit the search, the app will let you know if you are not being nice.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "The app uses a service called webpurify to decide what is nice and what is not. Take it up with them if you think they are being picky!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Submitting a search happens by either hitting \"enter\" while in the search box, or pressing the button.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "If you did type something nice and there are results, they will be displayed as items in a vertical list. Hovering over them displays the text giphy has for them in their database, clicking on them will bring you to their giphy-page. If there are more images than fits in the viewport, you can scroll.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "If you were not nice, there will also be results. Just not the ones you expected, probably. That is why they might better be called \"consequences\" instead of \"results\". But, in general, they will function as described before.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "In the \"images\" pulldown in the bottom left corner you can select how many images will be displayed on one result page. Default is 10. More images take longer. Duh. In the right bottom corner is a progress bar which informs you how much longer you have to wait for completion while stuff is still loading.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "The pagination element in the bottom middle will let you navigate through the result pages. |< and >| will take you to the first and last pages, respectively, < and > to the previous and next.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "The page numbers allow you to jump to pages directly. Albeit, only a maximum of 5 pages will be directly accessible this way. The current page is selected and in the middle, unless it's one of the first or last two pages, obviously. If you click a new page index, it will rotate into the middle, if possible. This way you can access all the other pages, by rotating them into the middle, poco a poco.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AppComponent_div_33_Template, 3, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AppComponent_footer_34_Template, 20, 3, "footer", 11);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.profanity.active))("ngModel", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.profanity.active));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.page.items.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.page.items.length);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdownMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdownItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPagination"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPaginationFirst"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPaginationLast"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPaginationPrevious"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPaginationNext"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPaginationNumber"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbProgressbar"]], styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  margin: 0;\n}\n\nheader[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1em;\n}\n\nheader[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 10%;\n  display: flex;\n}\n\nheader[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  margin-left: auto;\n  width: 50px;\n  height: 50px;\n  padding: 6px 0px;\n  border-radius: 25px;\n  text-align: center;\n}\n\nheader[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  margin-left: -0.2em;\n}\n\nheader[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   [ngbDropdownMenu][_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\nheader[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   [ngbDropdownMenu][_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%] {\n  width: 50rem;\n  padding-left: 1em;\n  padding-right: 1em;\n  overflow: auto;\n  font-size: -1em;\n}\n\nheader[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\nheader[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]   input.profane[_ngcontent-%COMP%], header[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]   button.profane[_ngcontent-%COMP%] {\n  border-color: red;\n  background-color: red;\n  color: white;\n}\n\nheader[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  margin: 0 1em;\n  padding-left: 1em;\n  padding-right: 1em;\n}\n\n.results[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 100%;\n  flex: 1;\n  overflow: auto;\n  margin-bottom: 1em;\n}\n\n.results[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  list-style: none;\n  width: 80%;\n}\n\n.results[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.results[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0.5em;\n}\n\nfooter[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n}\n\nfooter[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 20%;\n  display: flex;\n}\n\nfooter[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   [ngbDropdown][_ngcontent-%COMP%] {\n  margin-left: 1em;\n}\n\nfooter[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: auto 1em;\n}\n\nfooter[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   ngb-progressbar[_ngcontent-%COMP%] {\n  margin: auto 1em;\n  width: 100%;\n}\n\nfooter[_ngcontent-%COMP%]   ngb-pagination[_ngcontent-%COMP%] {\n  width: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLFNBQUE7QUFBRDs7QUFJQTtFQUNDLFdBQUE7RUFFQSxZQUFBO0FBRkQ7O0FBR0M7RUFDQyxVQUFBO0VBQ0EsYUFBQTtBQURGOztBQUVFO0VBQ0MsaUJBQUE7RUFDQSxXQUFBO0VBQ1MsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUFaOztBQUVRO0VBQ0MsbUJBQUE7QUFBVDs7QUFFUTtFQUNDLGdCQUFBO0FBQVQ7O0FBQ1M7RUFDQyxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQ1Y7O0FBR0M7RUFFQyxVQUFBO0FBRkY7O0FBSUc7RUFDQyxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQUZKOztBQUtFO0VBQ0MsT0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBSEg7O0FBUUE7RUFDQyxTQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFhQSxjQUFBO0VBQ0Esa0JBQUE7QUFqQkQ7O0FBS0M7RUFDQyxnQkFBQTtFQUNBLFVBQUE7QUFIRjs7QUFLRTtFQUNDLGtCQUFBO0FBSEg7O0FBSUc7RUFDQyxhQUFBO0FBRko7O0FBVUE7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFpQkEsV0FBQTtBQXZCRDs7QUFPQztFQUlDLFVBQUE7RUFDQSxhQUFBO0FBUkY7O0FBSUU7RUFDQyxnQkFBQTtBQUZIOztBQU1FO0VBQ0MsZ0JBQUE7QUFKSDs7QUFRRTtFQUNDLGdCQUFBO0VBQ0EsV0FBQTtBQU5IOztBQVdDO0VBRUMsVUFBQTtBQVZGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcblx0Ly8gYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogc3RyZXRjaDtcblx0bWFyZ2luOiAwO1xuXHQvLyBwYWRkaW5nOiAwO1xufVxuXG5oZWFkZXIge1xuXHR3aWR0aDogMTAwJTtcblx0Ly8gYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuXHRwYWRkaW5nOiAxZW07XG5cdCYgPiBkaXYge1xuXHRcdHdpZHRoOiAxMCU7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHQuaW5mbyB7XG5cdFx0XHRtYXJnaW4tbGVmdDogYXV0bzsgLy8gcXVpY2sgZml4IHRvIG1vdmUgaXRlbSB0byB0aGUgcmlnaHRcblx0XHRcdHdpZHRoOiA1MHB4OyBcbiAgICAgICAgICAgIGhlaWdodDogNTBweDsgXG4gICAgICAgICAgICBwYWRkaW5nOiA2cHggMHB4OyBcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7IFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgICAgICAgXHRtYXJnaW4tbGVmdDogLTAuMmVtO1xuICAgICAgICB9XG4gICAgICAgIFtuZ2JEcm9wZG93bk1lbnVdIHtcbiAgICAgICAgXHRvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBcdC5jb250ZW50LXdyYXBwZXIge1xuICAgICAgICBcdFx0d2lkdGg6IDUwcmVtO1xuICAgICAgICBcdFx0cGFkZGluZy1sZWZ0OiAxZW07XG4gICAgICAgIFx0XHRwYWRkaW5nLXJpZ2h0OiAxZW07XG4gICAgICAgIFx0XHRvdmVyZmxvdzogYXV0bztcbiAgICAgICAgXHRcdGZvbnQtc2l6ZTogLTFlbTtcbiAgICAgICAgXHR9XG4gICAgICAgIH1cblx0fVxuXHQmID4gbmF2IHtcblx0XHQvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG5cdFx0d2lkdGg6IDgwJTtcblx0XHRpbnB1dCwgYnV0dG9uIHtcblx0XHRcdCYucHJvZmFuZSB7XG5cdFx0XHRcdGJvcmRlci1jb2xvcjogcmVkO1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG5cdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aW5wdXQge1xuXHRcdFx0ZmxleDogMTtcblx0XHRcdG1hcmdpbjogMCAxZW07XG5cdFx0XHRwYWRkaW5nLWxlZnQ6IDFlbTtcblx0XHRcdHBhZGRpbmctcmlnaHQ6IDFlbTtcblx0XHR9XG5cdH1cbn1cblxuLnJlc3VsdHMge1xuXHRtYXJnaW46IDA7XG5cdHdpZHRoOiAxMDAlO1xuXHRmbGV4OiAxO1xuXHQvLyBiYWNrZ3JvdW5kLWNvbG9yOiBsaW1lO1xuXHQmID4gdWwge1xuXHRcdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdFx0d2lkdGg6IDgwJTtcblx0XHQvLyBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG5cdFx0PiBsaSB7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRpbWcge1xuXHRcdFx0XHRtYXJnaW46IC41ZW07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdG92ZXJmbG93OiBhdXRvO1xuXHRtYXJnaW4tYm90dG9tOiAxZW07XHRcbn1cblxuZm9vdGVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0JiA+IGRpdiB7XG5cdFx0W25nYkRyb3Bkb3duXSB7XG5cdFx0XHRtYXJnaW4tbGVmdDogMWVtO1xuXHRcdH1cblx0XHR3aWR0aDogMjAlO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0bGFiZWwge1xuXHRcdFx0bWFyZ2luOiBhdXRvIDFlbTtcblx0XHRcdC8vIHBhZGRpbmctdG9wOiAwLjJlbTtcblx0XHRcdC8vIHBhZGRpbmctbGVmdDogMWVtO1xuXHRcdH1cblx0XHRuZ2ItcHJvZ3Jlc3NiYXIge1xuXHRcdFx0bWFyZ2luOiBhdXRvIDFlbTtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdH1cblx0fVxuXHR3aWR0aDogMTAwJTtcblx0Ly8gYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuXHRuZ2ItcGFnaW5hdGlvbiB7XG5cdFx0Ly8gYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuXHRcdHdpZHRoOiA2MCU7XG5cdH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _services_profanity_profanity_service__WEBPACK_IMPORTED_MODULE_1__["ProfanityService"] }, { type: _services_giphy_giphy_service__WEBPACK_IMPORTED_MODULE_2__["GiphyService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _services_profanity_profanity_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/profanity/profanity.service */ "JFX/");
/* harmony import */ var _services_giphy_giphy_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/giphy/giphy.service */ "maMf");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "Sy1n");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_profanity_profanity_service__WEBPACK_IMPORTED_MODULE_6__["ProfanityService"],
        _services_giphy_giphy_service__WEBPACK_IMPORTED_MODULE_7__["GiphyService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
                ],
                providers: [
                    _services_profanity_profanity_service__WEBPACK_IMPORTED_MODULE_6__["ProfanityService"],
                    _services_giphy_giphy_service__WEBPACK_IMPORTED_MODULE_7__["GiphyService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "maMf":
/*!*************************************************!*\
  !*** ./src/app/services/giphy/giphy.service.ts ***!
  \*************************************************/
/*! exports provided: GiphyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiphyService", function() { return GiphyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class GiphyService {
    constructor(http) {
        this.http = http;
        this.user = '';
        this.key = 'CdRKiCMbTnt9CkZTZ0lGukSczk6iT4Z6';
        this.url = '/giphy'; // the rest is done by the proxy configured in angular.json
        this.currentSearch = ''; // parameter that allows for undo of search param when esc key is hit in search box
    }
    search(text, page = { index: 0, size: 10 }) {
        // we need .size and .index from page
        let url = `${this.url}?&api_key=${this.key}&q=${text}&limit=${page.size}&offset=${(page.index - 1) * page.size}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(data => {
            this.currentSearch = text;
            const total = data['pagination'].total_count;
            let pics = data['data'];
            const items = pics.map(pic => {
                return {
                    src: pic.images.fixed_height.url,
                    link: pic.url,
                    title: pic.title
                };
            });
            const page = {
                total: total,
                items: items
            };
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(page);
        }));
    }
}
GiphyService.ɵfac = function GiphyService_Factory(t) { return new (t || GiphyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
GiphyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GiphyService, factory: GiphyService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GiphyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map