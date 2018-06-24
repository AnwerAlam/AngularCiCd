webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/Service/user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
__webpack_require__("../../../../rxjs/add/operator/map.js");
__webpack_require__("../../../../rxjs/add/operator/do.js");
__webpack_require__("../../../../rxjs/add/operator/catch.js");
var StudentService = (function () {
    function StudentService(_http) {
        this._http = _http;
    }
    StudentService.prototype.get = function (url) {
        // Tried adding headers with no luck
        //   const headers = new Headers();
        //   headers.append('Access-Control-Allow-Headers', 'Content-Type');
        //   headers.append('Access-Control-Allow-Methods', 'GET');
        //   headers.append('Access-Control-Allow-Origin', 'http://localhost:52807/');
        //   headers.append('Access-Control-Allow-Credentials', false);
        // let options = new RequestOptions({ headers: headers });
        return this._http.get(url)
            .map(function (response) { return response.json(); });
    };
    StudentService.prototype.post = function (url, model) {
        var body = JSON.stringify(model);
        var headers = new http_1.Headers({ 'content-type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(url, body, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    StudentService.prototype.put = function (url, id, model) {
        var body = JSON.stringify(model);
        var headers = new http_1.Headers({ 'content-type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.put(url + id, body, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    StudentService.prototype.delete = function (url, id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.delete(url + id, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError)
            .catch(this.handleError);
    };
    StudentService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return StudentService;
}());
StudentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], StudentService);
exports.StudentService = StudentService;
var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/Shared/global.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Global = (function () {
    function Global() {
    }
    return Global;
}());
Global.BASE_STUDENT_ENDPOINT = 'http://localhost:52807/api/studentapi/';
exports.Global = Global;
//# sourceMappingURL=global.js.map

/***/ }),

/***/ "../../../../../src/app/Shared/search.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var SearchComponent = (function () {
    function SearchComponent() {
        this.change = new core_1.EventEmitter();
    }
    SearchComponent.prototype.getEachChar = function (value) {
        this.change.emit(value);
    };
    SearchComponent.prototype.clearFilter = function () {
        this.listFilter = null;
        this.change.emit(null);
    };
    SearchComponent.prototype.getPasteData = function (value) {
        var pastedVal = value.clipboardData.getData('text/plain');
        this.change.emit(pastedVal);
        value.preventDefault();
    };
    return SearchComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SearchComponent.prototype, "title", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], SearchComponent.prototype, "change", void 0);
SearchComponent = __decorate([
    core_1.Component({
        selector: 'search-list',
        template: "<!--   <div class=\"form-inline\">\n                <div class=\"form-group\">\n                    <label><h3>{{title}}</h3></label>\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"col-lg-12\">\n                        <input class=\"input-lg\" placeholder=\"Enter any text to filter\" (paste)=\"getPasteData($event)\" (keyup)=\"getEachChar($event.target.value)\" type=\"text\" [(ngModel)]=\"listFilter\" /><img src=\"../../images/cross.png\" class=\"cross-btn\" (click)=\"clearFilter()\" *ngIf=\"listFilter\"/>\n                    </div>\n                    \n                </div>\n                <div class=\"form-group\">\n                    <div *ngIf='listFilter'>\n                        <div class=\"h3 text-muted\">Filter by: {{listFilter}}</div>\n                    </div>\n                </div>\n            </div>\n            -->\n            "
    })
], SearchComponent);
exports.SearchComponent = SearchComponent;
var _a;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/Teacher/teacher-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var TeacherListComponent = (function () {
    function TeacherListComponent() {
    }
    return TeacherListComponent;
}());
TeacherListComponent = __decorate([
    core_1.Component({
        template: "\n    <h2>Teacher List Component</h2>\n    "
    })
], TeacherListComponent);
exports.TeacherListComponent = TeacherListComponent;
//# sourceMappingURL=teacher-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var AppComponent = (function () {
    function AppComponent(router) {
        var _this = this;
        this.router = router;
        this.loading = true;
        router.events.subscribe(function (event) {
            _this.navigationInterceptor(event);
        });
    }
    // Shows and hides the loading spinner during RouterEvent changes
    AppComponent.prototype.navigationInterceptor = function (event) {
        var _this = this;
        if (event instanceof router_1.NavigationStart) {
            this.loading = true;
        }
        if (event instanceof router_1.NavigationEnd) {
            setTimeout(function () { _this.loading = false; }, 1000);
            // this.loading = false;
        }
        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof router_1.NavigationCancel) {
            this.loading = false;
        }
        if (event instanceof router_1.NavigationError) {
            this.loading = false;
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  \n<md-toolbar color=\"primary\">\n            <span>NSMI</span>\n            <span class=\"spacer\"></span>\n            <button md-icon-button [mdMenuTriggerFor]=\"menu\" #menuTrigger1=\"mdMenuTrigger\" \n            (mouseenter)=\"menuTrigger1.openMenu()\">\n            <md-icon>menue</md-icon>\n            </button>\n</md-toolbar>\n<md-menu #menu=\"mdMenu\" [overlapTrigger]=\"false\">\n<button md-menu-item  href=\"#\" routerLink=\"/student\">\n<md-icon>list</md-icon>\nStudent List\n\n</button>\n<button md-menu-item  href=\"#\" routerLink=\"/studentadd\">\n<md-icon>person_add</md-icon>\n\n<span>Student Add</span>\n</button>\n<button md-menu-item  href=\"#\" routerLink=\"/studentexport\">\n<md-icon>file_upload</md-icon>\n<span>File Import</span>\n</button>\n\n<button md-menu-item  href=\"#\" routerLink=\"/studentupdateclass\">\n<md-icon>class</md-icon>\nStudent Class\n</button>\n\n</md-menu>\n\n   <router-outlet>\n   <div class=\"loading-overlay\" *ngIf=\"loading\">\n   <md-progress-bar mode=\"indeterminate\"></md-progress-bar>\n     </div>\n   </router-outlet>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
], AppComponent);
exports.AppComponent = AppComponent;
var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var animations_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var student_list_component_1 = __webpack_require__("../../../../../src/app/student/student-list.component.ts");
var student_add_component_1 = __webpack_require__("../../../../../src/app/student/student-add.component.ts");
var student_export_component_1 = __webpack_require__("../../../../../src/app/student/student-export.component.ts");
var student_updateclass_component_1 = __webpack_require__("../../../../../src/app/student/student-updateclass.component.ts");
var teacher_list_component_1 = __webpack_require__("../../../../../src/app/Teacher/teacher-list.component.ts");
var common_tabs_component_1 = __webpack_require__("../../../../../src/app/common/common-tabs.component.ts");
var common_tab_component_1 = __webpack_require__("../../../../../src/app/common/common-tab.component.ts");
//import {MdTabsModule} from 'md-tabs/tabs';
var material_1 = __webpack_require__("../../../material/@angular/material.es5.js");
var datagrid_component_1 = __webpack_require__("../../../../../src/app/shared/datagrid.component.ts");
//  import { DataGridUtil } from './shared/datagrid.util';
var format_1 = __webpack_require__("../../../../../src/app/shared/format.ts");
var orderby_1 = __webpack_require__("../../../../../src/app/shared/orderby.ts");
var user_pipe_1 = __webpack_require__("../../../../../src/app/filter/user.pipe.ts");
var search_component_1 = __webpack_require__("../../../../../src/app/Shared/search.component.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/Service/user.service.ts");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
//import 'hammerjs';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            http_1.HttpModule,
            material_1.MaterialModule,
            material_1.MdNativeDateModule,
            material_1.MdInputModule,
            // NoConflictStyleCompatibilityMode,
            // MdTabsModule,
            //Tabs,
            //Tab,
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            animations_1.BrowserAnimationsModule,
            router_1.RouterModule.forRoot([
                { path: 'student', component: student_list_component_1.StudentListComponent },
                { path: 'studentadd', component: student_add_component_1.StudentAddComponent },
                { path: 'studentexport', component: student_export_component_1.StudentExportComponent },
                { path: 'studentupdateclass', component: student_updateclass_component_1.StudentUpdateclassComponent },
                { path: 'teacher', component: teacher_list_component_1.TeacherListComponent }
            ]),
        ],
        declarations: [
            datagrid_component_1.DataGrid,
            //DataGridUtil,
            user_pipe_1.UserFilterPipe,
            format_1.Format,
            orderby_1.OrderBy,
            search_component_1.SearchComponent,
            app_component_1.AppComponent,
            common_tabs_component_1.Tabs,
            common_tab_component_1.Tab,
            student_list_component_1.StudentListComponent,
            student_add_component_1.StudentAddComponent,
            student_export_component_1.StudentExportComponent,
            student_updateclass_component_1.StudentUpdateclassComponent,
            teacher_list_component_1.TeacherListComponent
        ],
        providers: [
            user_service_1.StudentService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/common/common-tab.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var Tab = (function () {
    function Tab() {
        this.active = false;
    }
    return Tab;
}());
__decorate([
    core_1.Input('tabTitle'),
    __metadata("design:type", String)
], Tab.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Tab.prototype, "active", void 0);
Tab = __decorate([
    core_1.Component({
        selector: 'tab',
        styles: ["\n      .pane{\n        padding: 1em;\n      }\n    "],
        template: "\n      <div [hidden]=\"!active\" class=\"pane\">\n        <ng-content></ng-content>\n      </div>\n    "
    })
], Tab);
exports.Tab = Tab;
//# sourceMappingURL=common-tab.component.js.map

/***/ }),

/***/ "../../../../../src/app/common/common-tabs.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var Tabs = (function () {
    function Tabs() {
        this.tabs = [];
    }
    Tabs.prototype.selectTab = function (tab) {
        this.tabs.forEach(function (tab) {
            tab.active = false;
        });
        tab.active = true;
    };
    Tabs.prototype.addTab = function (tab) {
        if (this.tabs.length === 0) {
            tab.active = true;
        }
        this.tabs.push(tab);
    };
    return Tabs;
}());
Tabs = __decorate([
    core_1.Component({
        selector: 'tabs',
        template: "\n      <ul>\n        <li *ngFor=\"let tab of tabs\" (click)=\"selectTab(tab)\">\n          {{tab.tabTitle}}\n        </li>\n      </ul>\n      <ng-content></ng-content>\n    ",
    })
], Tabs);
exports.Tabs = Tabs;
//# sourceMappingURL=common-tabs.component.js.map

/***/ }),

/***/ "../../../../../src/app/filter/user.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var UserFilterPipe = (function () {
    function UserFilterPipe() {
    }
    UserFilterPipe.prototype.transform = function (value, filter) {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter(function (app) {
            return app.StudentName != null && app.StudentName.toLocaleLowerCase().indexOf(filter) != -1
                || app.Address != null && app.Address.toLocaleLowerCase().indexOf(filter) != -1;
        }) : value;
    };
    return UserFilterPipe;
}());
UserFilterPipe = __decorate([
    core_1.Pipe({
        name: 'userFilter'
    }),
    core_1.Injectable()
], UserFilterPipe);
exports.UserFilterPipe = UserFilterPipe;
//# sourceMappingURL=user.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/datagrid.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isshowfilter && data\">\r\n    <search-list [title]=\"searchTitle\" (change)=\"criteriaChange($event)\"></search-list>\r\n</div>\r\n<br />\r\n<div *ngIf=\"data\" class=\"add-btn-postion\">\r\n    <div>\r\n        <ng-container *ngFor=\"let hdrbtn of hdrbtns\">\r\n            <button *ngIf=\"!hdrbtn.ishide\" type=\"button\" class=\"btn btn-primary\" (click)=\"click(hdrbtn,null)\">{{hdrbtn.title}}</button>\r\n        </ng-container>\r\n       <button *ngIf=\"isExporttoCSV && (data!=null && data.length>0)\" type=\"button\" class=\"btn btn-primary\" (click)=\"exporttoCSV()\">Export to Excel</button>\r\n    </div>\r\n</div>\r\n\r\n<div>\r\n    <table class=\"table table-hover table-striped table-sortable\" *ngIf='data ; else loadingScreen;'>\r\n        <thead>\r\n            <tr>\r\n                <th *ngFor=\"let column of columns\" [class]=\"selectedClass(column.variable)\"\r\n                    (click)=\"changeSorting(column.variable)\">\r\n                    {{column.display}}\r\n                </th>\r\n                <ng-container *ngFor=\"let btn of gridbtns\">\r\n                    <td *ngIf=\"!btn.ishide\"></td>\r\n                </ng-container>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let row of pdata | orderby : convertSorting()\">\r\n                <td *ngFor=\"let column of columns\">\r\n                    {{row[column.variable] | format : column.filter}}\r\n                </td>\r\n                <ng-container *ngFor=\"let btn of gridbtns\">\r\n                    <td *ngIf=\"!btn.ishide\">\r\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"click(btn,row)\">{{btn.title}}</button>\r\n                    </td>\r\n                </ng-container>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    <div *ngIf='data && data.length==0' class=\"alert alert-info\" role=\"alert\">No record found!</div>\r\n    <ng-template #loadingScreen>\r\n        <div class=\"alert alert-info\" role=\"alert\">\r\n            <md-progress-spinner mode=\"indeterminate\" style=\"width:50px; height:50px\"></md-progress-spinner>loading...\r\n        </div>\r\n    </ng-template>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/datagrid.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var datagrid_util_1 = __webpack_require__("../../../../../src/app/shared/datagrid.util.ts");
var format_1 = __webpack_require__("../../../../../src/app/shared/format.ts");
var DataGrid = (function () {
    function DataGrid() {
        this.btnclick = new core_1.EventEmitter();
        this.pdata = this.data;
        this.searchTitle = 'Search:';
    }
    DataGrid.prototype.ngOnChanges = function (changes) {
        if (JSON.stringify(changes).indexOf('data') !== -1) {
            this.pdata = this.data;
        }
        this.criteriaChange(this.listFilter);
    };
    DataGrid.prototype.selectedClass = function (columnName) {
        return columnName === this.sort.column ? 'sort-' + this.sort.descending : false;
    };
    DataGrid.prototype.changeSorting = function (columnName) {
        var sort = this.sort;
        if (sort.column === columnName) {
            sort.descending = !sort.descending;
        }
        else {
            sort.column = columnName;
            sort.descending = false;
        }
    };
    DataGrid.prototype.convertSorting = function () {
        return this.sort.descending ? '-' + this.sort.column : this.sort.column;
    };
    DataGrid.prototype.click = function (btn, row) {
        var keyds = {};
        keyds.action = btn.action;
        if (row != null) {
            keyds.values = [];
            btn.keys.forEach(function (key) {
                keyds.values.push({ key: key, value: row[key] });
            });
        }
        this.btnclick.emit(keyds);
    };
    DataGrid.prototype.criteriaChange = function (value) {
        if (this.filter != null) {
            if (value !== '[object Event]') {
                this.listFilter = value;
                this.pdata = this.filter.transform(this.data, this.listFilter);
            }
        }
    };
    DataGrid.prototype.exporttoCSV = function () {
        var _this = this;
        var exprtcsv = [];
        JSON.parse(JSON.stringify(this.data)).forEach(function (x) {
            var obj = new Object();
            var frmt = new format_1.Format();
            for (var i = 0; i < _this.columns.length; i++) {
                var transfrmVal = frmt.transform(x[_this.columns[i].variable], _this.columns[i].filter);
                obj[_this.columns[i].display] = transfrmVal;
            }
            exprtcsv.push(obj);
        });
        datagrid_util_1.DataGridUtil.downloadcsv(exprtcsv, this.exportFileName);
    };
    return DataGrid;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], DataGrid.prototype, "columns", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], DataGrid.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DataGrid.prototype, "sort", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], DataGrid.prototype, "gridbtns", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], DataGrid.prototype, "hdrbtns", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DataGrid.prototype, "isshowfilter", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DataGrid.prototype, "isExporttoCSV", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DataGrid.prototype, "exportFileName", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DataGrid.prototype, "filter", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], DataGrid.prototype, "btnclick", void 0);
DataGrid = __decorate([
    core_1.Component({
        selector: 'data-grid',
        // styleUrls: ['app/shared/datagrid.style.css'],
        // templateUrl: 'app/shared/datagrid.component.html'
        styles: [__webpack_require__("../../../../../src/app/shared/datagrid.style.css")],
        template: __webpack_require__("../../../../../src/app/shared/datagrid.component.html")
    })
], DataGrid);
exports.DataGrid = DataGrid;
var _a;
//# sourceMappingURL=datagrid.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/datagrid.style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table-sortable > thead > tr > th {\r\n    cursor: pointer;\r\n    position: relative;\r\n    background-image: none;\r\n}\r\n\r\n    .table-sortable > thead > tr > th:after,\r\n    .table-sortable > thead > tr > th.sort-false:after,\r\n    .table-sortable > thead > tr > th.sort-true:after {\r\n        font-family: FontAwesome;\r\n        padding-left: 5px;\r\n    }\r\n\r\n    .table-sortable > thead > tr > th:after {\r\n        content: \"\\F0DC\";\r\n        color: #ddd;\r\n    }\r\n\r\n    .table-sortable > thead > tr > th.sort-false:after {\r\n        content: \"\\F0DE\";\r\n        color: #767676;\r\n    }\r\n\r\n    .table-sortable > thead > tr > th.sort-true:after {\r\n        content: \"\\F0DD\";\r\n        color: #767676;\r\n    }\r\n\r\n.table-btn {\r\n    background-color: #428bca;\r\n    color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/datagrid.util.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DataGridUtil = (function () {
    function DataGridUtil() {
    }
    DataGridUtil.downloadcsv = function (data, exportFileName) {
        var csvData = this.convertToCSV(data);
        var blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
        if (navigator.msSaveBlob) {
            navigator.msSaveBlob(blob, this.createFileName(exportFileName));
        }
        else {
            var link = document.createElement("a");
            if (link.download !== undefined) {
                // Browsers that support HTML5 download attribute
                var url = URL.createObjectURL(blob);
                link.setAttribute("href", url);
                link.setAttribute("download", this.createFileName(exportFileName));
                //link.style = "visibility:hidden";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
    };
    DataGridUtil.convertToCSV = function (objarray) {
        var array = typeof objarray != 'object' ? JSON.parse(objarray) : objarray;
        var str = '';
        var row = "";
        for (var index in objarray[0]) {
            //Now convert each value to string and comma-separated
            row += index + ',';
        }
        row = row.slice(0, -1);
        //append Label row with line break
        str += row + '\r\n';
        for (var i = 0; i < array.length; i++) {
            var line = '';
            for (var index in array[i]) {
                if (line != '')
                    line += ',';
                line += JSON.stringify(array[i][index]);
            }
            str += line + '\r\n';
        }
        return str;
    };
    DataGridUtil.createFileName = function (exportFileName) {
        var date = new Date();
        return (exportFileName +
            date.toLocaleDateString() + "_" +
            date.toLocaleTimeString()
            + '.csv');
    };
    return DataGridUtil;
}());
exports.DataGridUtil = DataGridUtil;
//# sourceMappingURL=datagrid.util.js.map

/***/ }),

/***/ "../../../../../src/app/shared/format.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var Format = (function () {
    function Format() {
        this.datePipe = new common_1.DatePipe('yMd');
    }
    Format.prototype.transform = function (input, args) {
        if (input == null)
            return '';
        var format = '';
        var parsedFloat = 0;
        var pipeArgs = args.split(':');
        for (var i = 0; i < pipeArgs.length; i++) {
            pipeArgs[i] = pipeArgs[i].trim(' ');
        }
        switch (pipeArgs[0].toLowerCase()) {
            case 'text':
                return input;
            case 'date':
                return this.getDate(input);
            case 'csv':
                if (input.length == 0)
                    return "";
                if (input.length == 1)
                    return input[0].text;
                var finalstr = "";
                for (var i_1 = 0; i_1 < input.length; i_1++) {
                    finalstr = finalstr + input[i_1].text + ", ";
                }
                return finalstr.substring(0, finalstr.length - 2);
            default:
                return input;
        }
    };
    Format.prototype.getDate = function (date) {
        return new Date(date).toLocaleDateString();
    };
    return Format;
}());
Format = __decorate([
    core_1.Pipe({
        name: 'format'
    }),
    core_1.Injectable()
], Format);
exports.Format = Format;
//# sourceMappingURL=format.js.map

/***/ }),

/***/ "../../../../../src/app/shared/orderby.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var OrderBy = OrderBy_1 = (function () {
    function OrderBy() {
        this.value = [];
    }
    OrderBy.prototype.transform = function (input, config) {
        if (config === void 0) { config = '+'; }
        if (input == null)
            return;
        //make a copy of the input's reference
        this.value = input.slice();
        var value = this.value;
        if (!Array.isArray(value))
            return value;
        if (!Array.isArray(config) || (Array.isArray(config) && config.length == 1)) {
            var propertyToCheck = !Array.isArray(config) ? config : config[0];
            var desc = propertyToCheck.substr(0, 1) == '-';
            //Basic array
            if (!propertyToCheck || propertyToCheck == '-' || propertyToCheck == '+') {
                return !desc ? value.sort() : value.sort().reverse();
            }
            else {
                var property = propertyToCheck.substr(0, 1) == '+' || propertyToCheck.substr(0, 1) == '-'
                    ? propertyToCheck.substr(1)
                    : propertyToCheck;
                return value.sort(function (a, b) {
                    return !desc
                        ? OrderBy_1._orderByComparator(a[property], b[property])
                        : -OrderBy_1._orderByComparator(a[property], b[property]);
                });
            }
        }
        else {
            //Loop over property of the array in order and sort
            return value.sort(function (a, b) {
                for (var i = 0; i < config.length; i++) {
                    var desc = config[i].substr(0, 1) == '-';
                    var property = config[i].substr(0, 1) == '+' || config[i].substr(0, 1) == '-'
                        ? config[i].substr(1)
                        : config[i];
                    var comparison = !desc
                        ? OrderBy_1._orderByComparator(a[property], b[property])
                        : -OrderBy_1._orderByComparator(a[property], b[property]);
                    //Don't return 0 yet in case of needing to sort by next property
                    if (comparison != 0)
                        return comparison;
                }
                return 0; //equal each other
            });
        }
    };
    OrderBy._orderByComparator = function (a, b) {
        if (typeof a == 'object')
            a = JSON.stringify(a);
        if (typeof b == 'object')
            b = JSON.stringify(b);
        if (a === null || typeof a === 'undefined')
            a = 0;
        if (b === null || typeof b === 'undefined')
            b = 0;
        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
            //Isn't a number so lowercase the string to properly compare
            if (a.toLowerCase() < b.toLowerCase())
                return -1;
            if (a.toLowerCase() > b.toLowerCase())
                return 1;
        }
        else {
            //Parse strings as numbers to compare properly
            if (parseFloat(a) < parseFloat(b))
                return -1;
            if (parseFloat(a) > parseFloat(b))
                return 1;
        }
        return 0; //equal each other
    };
    return OrderBy;
}());
OrderBy = OrderBy_1 = __decorate([
    core_1.Pipe({ name: 'orderby' })
], OrderBy);
exports.OrderBy = OrderBy;
var OrderBy_1;
//# sourceMappingURL=orderby.js.map

/***/ }),

/***/ "../../../../../src/app/student/student-add.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\"> -->\r\n\r\n<br>\r\n<div class=\"container\">\r\n<form novalidate (ngSubmit)=\"onSubmit(userFrm)\" [formGroup]=\"userFrm\">\r\n<md-tab-group>\r\n  <md-tab label=\"Student Information\">\r\n\r\n                    \t<br>\r\n                    \t\r\n                        <div class=\"panel panel-default\">\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\" style=\"height:55px;\">\r\n\t\t\t\t\t\t\t\t\t<strong>Student Form</strong> \r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"pull-right\" (click)=\"onSubmit(dd)\"  color=\"primary\" [disabled]=\"userFrm.invalid\" md-raised-button>Submit</button>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body paddinTopBottom0\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row paddinTopBottom0 \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t        <div class=\"col-md-3 paddinTopBottom0\">\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-input-container floatingPlaceholder =\"true\" class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span  calss=\"mat-floating-placeholder\" style=\"opacity:1;transform:scale(0.75)\">NRIC No. / Passport No. <Span style=\"color:red\">*</Span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input mdInput floatingPlaceholder =\"true\" placeholder=\"NRIC No. / Passport No.\"  formControlName=\"NRIC\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  </md-input-container>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t       </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t       <div class=\"col-md-3 paddinTopBottom0\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span calss=\"mat-floating-placeholder\" style=\"opacity:1;transform:scale(0.75)\">Yes ID<Span style=\"color:red\">*</Span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input mdInput calss=\"mat-select-placeholder\" placeholder=\"NRIC No. / Passport No.\"  formControlName=\"YesId\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  </md-input-container>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t    </div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t       <div class=\"col-md-3 paddinTopBottom0\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span calss=\"mat-floating-placeholder\" style=\"opacity:1;transform:scale(0.75)\">Full Name<Span style=\"color:red\">*</Span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input mdInput calss=\"mat-select-placeholder\" placeholder=\"NRIC No. / Passport No.\"  formControlName=\"FullName\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  </md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t     <div class=\"col-md-3 paddinTopBottom0\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"frm-ctrl\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-select placeholder=\"Citizenship Type\"  formControlName=\"CitizenshipType\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <md-option *ngFor=\"let citizen of CitizenshipType\" [value]=\"citizen.value\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ citizen.viewValue }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  </md-option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</md-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row paddinTopBottom0\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t        <div class=\"col-md-3 paddinTopBottom0\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t        \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"frm-ctrl\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-select placeholder=\"Form\"  formControlName=\"Form\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <md-option *ngFor=\"let form of Forms\" [value]=\"form.value\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ form.viewValue }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  </md-option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</md-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t       </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t       <div class=\"col-md-3 paddinTopBottom0\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"frm-ctrl\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-select placeholder=\"Class Name\"  formControlName=\"ClassName\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <md-option *ngFor=\"let citizen of CitizenshipType\" [value]=\"citizen.value\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ citizen.viewValue }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  </md-option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</md-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t    </div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t       <div class=\"col-md-3 paddinTopBottom0\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"frm-ctrl\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-input-container  class=\"md-default-theme\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <input mdInput class=\"filter-input-field\" [mdDatepicker]=\"picker\" placeholder=\"Birth Date\" formControlName=\"DOB\"/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <button mdSuffix [mdDatepickerToggle]=\"picker\"></button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-datepicker #picker></md-datepicker>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t     <div class=\"col-md-3 paddinTopBottom0\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"frm-ctrl\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-select placeholder=\"Gender\"  formControlName=\"Gender\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-option *ngFor=\"let Gender of genders\" [value]=\"Gender.value\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ Gender.viewValue }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</md-option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</md-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row paddinTopBottom0\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t        <div class=\"col-md-3 paddinTopBottom0\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span calss=\"mat-floating-placeholder\" style=\"opacity:1;transform:scale(0.75)\">Race</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input mdInput placeholder=\"Race\" [mdAutocomplete]=\"auto\" formControlName=\"Race\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-autocomplete #auto=\"mdAutocomplete\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-option *ngFor=\"let race of filteredRaces | async\" [value]=\"race.viewValue\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ race.viewValue }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</md-option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</md-autocomplete>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t       </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t       <div class=\"col-md-3 paddinTopBottom0\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"frm-ctrl\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-select placeholder=\"Religion\"  formControlName=\"Religion\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-option *ngFor=\"let Religion of Religions\" [value]=\"Religion.value\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ Religion.viewValue }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</md-option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</md-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t    </div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t       <div class=\"col-md-3 paddinTopBottom0\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"frm-ctrl\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-radio-group formControlName=\"Nationality\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-radio-button *ngFor=\"let nation of Nationality\" [value]=\"nation\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{nation}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</md-radio-button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</md-radio-group>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t     <div class=\"col-md-3 paddinTopBottom0\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span calss=\"mat-floating-placeholder\" style=\"opacity:1;transform:scale(0.75)\">Username</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input mdInput calss=\"mat-select-placeholder\" ng-reflect-name=\"username\" ng-reflect-placeholder=\"Usern\" placeholder=\"Username\" name=\"username\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t        <div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t        \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span calss=\"mat-floating-placeholder\" style=\"opacity:1;transform:scale(0.75)\">Address1</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input mdInput  placeholder=\"Address1\" formControlName=\"Address1\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t       </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t       <div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span calss=\"mat-floating-placeholder\" style=\"opacity:1;transform:scale(0.75)\">Address2</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input mdInput  placeholder=\"Address2\" formControlName=\"Address2\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t    </div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t       <div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span calss=\"mat-floating-placeholder\" style=\"opacity:1;transform:scale(0.75)\">Address3</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input mdInput  placeholder=\"Address3\" formControlName=\"Address3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t     <div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span calss=\"mat-floating-placeholder\" style=\"opacity:1;transform:scale(0.75)\">PostalCode</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input mdInput  placeholder=\"PostalCode\" formControlName=\"PostalCode\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t        <div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t        \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"frm-ctrl\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-radio-group formControlName=\"Nationality\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-radio-button *ngFor=\"let nation of Nationality\" [value]=\"nation\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{nation}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</md-radio-button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</md-radio-group>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t       </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t       <div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"frm-ctrl\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-radio-group formControlName=\"Nationality\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-radio-button *ngFor=\"let nation of Nationality\" [value]=\"nation\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{nation}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</md-radio-button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</md-radio-group>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t    </div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t       <div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span calss=\"mat-floating-placeholder\" style=\"opacity:1;transform:scale(0.75)\">Birth Certificate No</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input mdInput  placeholder=\"PostalCode\" formControlName=\"PostalCode\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t     <div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span calss=\"mat-floating-placeholder\" style=\"opacity:1;transform:scale(0.75)\">Physically Disabled</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input mdInput  placeholder=\"PostalCode\" formControlName=\"PostalCode\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 pull-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pull-right form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pull-right form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t</div>\r\n  \r\n                            </div>\r\n                    \r\n\r\n  </md-tab>\r\n  <md-tab label=\"Parent or Guardian\">\r\n\r\n\r\n  \t <div class=\"panel panel-default\">\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\" style=\"height:55px;\">\r\n\t\t\t\t\t\t\t\t\t<strong>Parent Form</strong> \r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"pull-right\" (click)=\"onSubmit(dd)\"  color=\"primary\" [disabled]=\"userFrm.invalid\" md-raised-button>Submit</button>\r\n\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3> Relationship</h3>\t\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-radio-group formControlName=\"FatherGuardian\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-radio-button *ngFor=\"let fathg of FathGuardian\" [value]=\"fathg\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{fathg}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</md-radio-button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</md-radio-group>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<md-divider></md-divider>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\" style=\"padding-left:0px;padding-top:0px;padding-bottom:0px;\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel panel-default\">\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heady\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3> Father</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-divider></md-divider>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span calss=\"mat-floating-placeholder\" style=\"opacity:1;transform:scale(0.75)\">Father Name</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input mdInput  placeholder=\"Father Name\" formControlName=\"FatherName\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span calss=\"mat-floating-placeholder\" style=\"opacity:1;transform:scale(0.75)\">Yes Id</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input mdInput  placeholder=\"Yes Id\" formControlName=\"FatherYesId\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span calss=\"mat-floating-placeholder\" style=\"opacity:1;transform:scale(0.75)\">Citizenship Type</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input mdInput  placeholder=\"PostalCode\" formControlName=\"PostalCode\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span calss=\"mat-floating-placeholder\" style=\"opacity:1;transform:scale(0.75)\">National Id / Passport </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input mdInput  placeholder=\"National Id / Passport\" formControlName=\"FNationId\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\t\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span calss=\"mat-floating-placeholder\" style=\"opacity:1;transform:scale(0.75)\">Race</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input mdInput  placeholder=\"Father Race\" formControlName=\"FatherRace\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span calss=\"mat-floating-placeholder\" style=\"opacity:1;transform:scale(0.75)\">Religion</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input mdInput  placeholder=\"Religion\" formControlName=\"FatherReligion\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\t\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span calss=\"mat-floating-placeholder\" style=\"opacity:1;transform:scale(0.75)\">Nationality</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input mdInput  placeholder=\"PostalCode\" formControlName=\"PostalCode\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span calss=\"mat-floating-placeholder\" style=\"opacity:1;transform:scale(0.75)\">Nationality</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input mdInput  placeholder=\"PostalCode\" formControlName=\"PostalCode\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\t\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span calss=\"mat-floating-placeholder\" style=\"opacity:1;transform:scale(0.75)\">Phone Home</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input mdInput  placeholder=\"Phone Home\" formControlName=\"PostalCode\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span calss=\"mat-floating-placeholder\" style=\"opacity:1;transform:scale(0.75)\">Phone Mobile</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input mdInput  placeholder=\"Phone Mobile\" formControlName=\"PostalCode\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span calss=\"mat-floating-placeholder\" style=\"opacity:1;transform:scale(0.75)\">Phone Office</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input mdInput  placeholder=\"Phone Office\" formControlName=\"PostalCode\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span calss=\"mat-floating-placeholder\" style=\"opacity:1;transform:scale(0.75)\">Occupation</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input mdInput  placeholder=\"Occupation\" formControlName=\"PostalCode\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\t\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span calss=\"mat-floating-placeholder\" style=\"opacity:1;transform:scale(0.75)\">Employer Name</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input mdInput  placeholder=\"Employer Name\" formControlName=\"PostalCode\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span calss=\"mat-floating-placeholder\" style=\"opacity:1;transform:scale(0.75)\">Employer Address</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input mdInput  placeholder=\"Employer Address\" formControlName=\"PostalCode\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span calss=\"mat-floating-placeholder\" style=\"opacity:1;transform:scale(0.75)\">State</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input mdInput  placeholder=\"State\" formControlName=\"PostalCode\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span calss=\"mat-floating-placeholder\" style=\"opacity:1;transform:scale(0.75)\">Postcode</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input mdInput  placeholder=\"Postcode\" formControlName=\"PostalCode\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heady\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h3> Mother</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<md-divider></md-divider>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span calss=\"mat-floating-placeholder\" style=\"opacity:1;transform:scale(0.75)\">Physically Disabled</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input mdInput  placeholder=\"PostalCode\" formControlName=\"PostalCode\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span calss=\"mat-floating-placeholder\" style=\"opacity:1;transform:scale(0.75)\">Physically Disabled</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input mdInput  placeholder=\"PostalCode\" formControlName=\"PostalCode\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\t\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span calss=\"mat-floating-placeholder\" style=\"opacity:1;transform:scale(0.75)\">Physically Disabled</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input mdInput  placeholder=\"PostalCode\" formControlName=\"PostalCode\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span calss=\"mat-floating-placeholder\" style=\"opacity:1;transform:scale(0.75)\">Physically Disabled</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input mdInput  placeholder=\"PostalCode\" formControlName=\"PostalCode\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </md-input-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\t\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t  \t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\r\n   </div>\r\n\t\t\t\r\n\r\n</md-tab>\r\n</md-tab-group>\r\n<div class=\"col-md-12\">\r\n\t<button class=\"pull-right\" (click)=\"onSubmit(dd)\"  color=\"primary\" [disabled]=\"userFrm.invalid\" md-raised-button>Submit</button>\r\n</div>\r\n</form>\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!--\r\n\r\n <ul class=\"nav nav-tabs\">\r\n                    <li class=\"active\"><a tabindex=\"-1\" id=\"tabfeaturepermission\" data-toggle=\"tab\" href=\"#tbStudents\">Student Information</a></li>\r\n                    <li><a tabindex=\"-1\" id=\"tabfieldpermission\" data-toggle=\"tab\" href=\"#tbFather\">Parent or Guardian</a></li>\r\n                </ul>\r\n                <div class=\"tab-content\">\r\n                    <div id=\"tbStudents\" class=\"tab-pane fade in active\">\r\n\r\n                    \t<br>\r\n                    \t\r\n                        <div class=\"panel panel-default\">\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t\t<strong>Student form</strong> \r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t        <div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t        \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>NRIC No. / Passport No. *</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"txtname\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t       </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t       <div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"txtaddress\">Yes ID</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"txtaddress\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t    </div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t       <div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"txtaddress\">Full Name *</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"txtaddress\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t     <div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"txtaddress\">Citizenship Type</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"txtaddress\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t        <div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t        \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Form *</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"txtname\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t       </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t       <div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"txtaddress\">Class Name *</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"txtaddress\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t    </div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t       <div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"txtaddress\">Birth Date *</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"txtaddress\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t     <div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"txtaddress\">Gender</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"txtaddress\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t        <div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t        \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Race</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"txtname\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t       </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t       <div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"txtaddress\">Religion</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"txtaddress\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t    </div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t       <div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"txtaddress\">Nationality</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"txtaddress\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t     <div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"txtaddress\">Age</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"txtaddress\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t        <div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t        \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Address Line 1</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"txtname\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t       </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t       <div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"txtaddress\">Address Line 2</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"txtaddress\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t    </div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t       <div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"txtaddress\">Address Line 3</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"txtaddress\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t     <div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"txtaddress\">Postcode</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"txtaddress\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t        <div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t        \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>State</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"txtname\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t       </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t       <div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"txtaddress\">Hostel Type</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"txtaddress\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t    </div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t       <div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"txtaddress\">Birth Certificate No</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"txtaddress\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t     <div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"txtaddress\">Physically Disabled</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"txtaddress\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 pull-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pull-right form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"btn btn-default\" type=\"button\" value=\"Submit\"  id=\"btnsubmit\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pull-right form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"btn btn-default\" type=\"button\" value=\"Cancel\" id=\"btnsubmit1\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t</div>\r\n  \r\n                            </div>\r\n                    </div>\r\n                    <div id=\"tbFather\" class=\"tab-pane fade\">\r\n                        \r\n\t\t\t\t\t\t <div class=\"panel panel-default\">\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t\t<strong>Father form</strong> \r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t        <div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t        \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>IC Number</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"txtname\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t       </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t       <div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"txtaddress\">Name</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"txtaddress\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t    </div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t       <div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"txtaddress\">Address</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"txtaddress\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t     <div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"txtaddress\">Age</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"txtaddress\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t</div>\r\n  \r\n                            </div>\r\n\r\n                    </div>\r\n                   \r\n                </div>\r\n\r\n              -->\r\n"

/***/ }),

/***/ "../../../../../src/app/student/student-add.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var user_service_1 = __webpack_require__("../../../../../src/app/Service/user.service.ts");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var StudentAddComponent = (function () {
    function StudentAddComponent(fb, _userService) {
        this.fb = fb;
        this._userService = _userService;
        this.indLoading = false;
        this.Races = [
            { value: '7 ', viewValue: 'BAJAU' },
            { value: '20', viewValue: 'BIDAYUH' },
            { value: '12', viewValue: 'BRUNEI' },
            { value: '6 ', viewValue: 'BUMIPUTERA LAIN (SABAH)' },
            { value: '17', viewValue: 'BUMIPUTERA LAIN (SARAWAK)' },
            { value: '3"', viewValue: 'CINA' },
            { value: '8"', viewValue: 'DUSUN' },
            { value: '27', viewValue: '>FILIPINOS' },
            { value: '19', viewValue: '>IBAN' },
            { value: '4"', viewValue: 'INDIA' },
            { value: '9"', viewValue: 'KADAZAN' },
            { value: '21', viewValue: 'KAYAN' },
            { value: '13', viewValue: 'KEDAYAN' },
            { value: '23', viewValue: 'KELABIT' },
            { value: '22', viewValue: 'KENYAH' },
            { value: '30', viewValue: 'LAIN-LAIN' },
            { value: '26', viewValue: 'LAIN-LAIN ASIA/BUKAN WARGANEGARA' },
            { value: '14', viewValue: 'LUNDAYEH' },
            { value: '18', viewValue: 'MELANAU' },
            { value: '2"', viewValue: 'MELAYU' },
            { value: '10', viewValue: 'MURUT' },
            { value: '25', viewValue: 'ORANG ASLI (SEMENANJUNG)' },
            { value: '24', viewValue: 'PENAN' },
            { value: '28', viewValue: 'PORTUGUESE' },
            { value: '15', viewValue: 'RUNGUS' },
            { value: '29', viewValue: 'SIAM' },
            { value: '5"', viewValue: 'SIKH' },
            { value: '11', viewValue: 'SULUK' },
            { value: '16', viewValue: 'SUNGAI' },
            { value: '1 ', viewValue: 'TIADA MAKLUMAT' },
        ];
        this.CitizenshipType = [
            { value: '1', viewValue: 'CITIZENSHIP' },
            { value: '2', viewValue: 'NON-CITIZENS' },
            { value: '3', viewValue: 'PERMANENT RESIDENT' },
            { value: '4', viewValue: 'STATUS NOT CONFIRMED' },
            { value: '5', viewValue: 'NON-CITIZENS' }
        ];
        this.Nationality = [
            'Malaysian',
            'Other'
        ];
        this.FathGuardian = [
            'Father',
            'Guardian'
        ];
        this.genders = [
            { value: '1', viewValue: 'LELAKI' },
            { value: '2', viewValue: 'PEREMPUAN' },
            { value: '3', viewValue: 'RAGU' },
            { value: '4', viewValue: 'TIADA MAKLUMAT' }
        ];
        this.Religions = [
            { value: '10', viewValue: 'BAHAI' },
            { value: '4', viewValue: 'BUDDHA' },
            { value: '5', viewValue: 'HINDU' },
            { value: '5', viewValue: 'ISLAM' },
            { value: '9', viewValue: 'KONFUSIANISMA' },
            { value: '3', viewValue: 'KRISTIAN' },
            { value: '12', viewValue: 'LAIN-LAIN AGAMA' },
            { value: '11', viewValue: 'PUAK/SUKU' },
            { value: '6', viewValue: 'SIKHISM ' },
            { value: '8', viewValue: 'TAO' },
            { value: '7', viewValue: 'TIADA AGAMA' },
            { value: '1', viewValue: 'TIADA MAKLUMAT' },
        ];
        this.Forms = [
            { value: '20031', viewValue: 'A4' },
            { value: '1', viewValue: 'D0' },
            { value: '20045', viewValue: 'D010' },
            { value: '20044', viewValue: 'D09' },
            { value: '2', viewValue: 'D1' },
            { value: '3', viewValue: 'D2' },
            { value: '4', viewValue: 'D3' },
            { value: '5', viewValue: 'D4' },
            { value: '6', viewValue: 'D5' },
            { value: '7', viewValue: 'D6' },
            { value: '20043', viewValue: 'D8' },
            { value: '22', viewValue: 'KHAM' },
            { value: '9', viewValue: 'KHAS' },
            { value: '10', viewValue: 'P' },
            { value: '8', viewValue: 'PRA' },
            { value: '11', viewValue: 'T1' },
            { value: '12', viewValue: 'T2' },
            { value: '13', viewValue: 'T3' },
            { value: '14', viewValue: 'T4' },
            { value: '15', viewValue: 'T5' },
            { value: '17', viewValue: 'T6A' },
            { value: '16', viewValue: 'T6R' },
            { value: '23', viewValue: 'Training' },
            { value: '18', viewValue: 'X0' },
            { value: '19', viewValue: 'X1' },
            { value: '20', viewValue: 'X2' },
            { value: '21', viewValue: 'X3' }
        ];
        this.formErrors = {
            'StudentName': '',
            'GovtId': '',
            'YesId': '',
            'NRIC': ''
        };
        this.validationMessages = {
            'StudentName': {
                'maxlength': 'First Name cannot be more than 50 characters long.',
                'required': 'First Name is required.'
            },
            'GovtId': {
                'maxlength': 'Last Name cannot be more than 50 characters long.',
                'required': 'Last Name is required.'
            },
            'YesId': {
                'email': 'Invalid email format.',
                'required': 'Email is required.'
            }
        };
    }
    StudentAddComponent.prototype.filterStates = function (val) {
        return val ? this.Races.filter(function (s) { return new RegExp("^" + val, 'gi').test(s.viewValue); })
            : this.Races;
    };
    StudentAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userFrm = this.fb.group({
            GovtId: [''],
            YesId: [''],
            FullName: [''],
            NRIC: ['', [forms_1.Validators.required]],
            CitizenshipType: [''],
            Form: [''],
            ClassName: [''],
            DOB: [''],
            Gender: [''],
            Race: [''],
            Religion: [''],
            City: [''],
            State: [''],
            Nationality: [''],
            Address1: [''],
            Address2: [''],
            Address3: [''],
            PostalCode: [''],
            FatherGuardian: [''],
            FatherName: [''],
            FatherYesId: [''],
            FNationId: [''],
            FatherRace: [''],
            FatherReligion: ['']
        });
        this.filteredRaces = this.userFrm.controls["Race"].valueChanges.startWith(null).map(function (name) { return _this.filterStates(name); });
        this.userFrm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
        //this.userFrm.reset();
        // if (this.dbops == DBOperation.create)
        //     this.userFrm.reset();
        // else
        //     this.userFrm.setValue(this.user);
    };
    StudentAddComponent.prototype.onValueChanged = function (data) {
        if (!this.userFrm) {
            return;
        }
        var form = this.userFrm;
        //  alert(JSON.stringify( form));
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    StudentAddComponent.prototype.onSubmit = function (formData) {
        if (formData != undefined)
            console.log(formData.value);
        // switch (this.dbops) {
        //     case DBOperation.create:
        //         this._userService.post(Global.BASE_STUDENT_ENDPOINT, formData.value).subscribe();
        //         break;
        //     case DBOperation.update:
        //         this._userService.put(Global.BASE_STUDENT_ENDPOINT, formData._value.Id, formData._value).subscribe();
        //         break;
        //     case DBOperation.delete:
        //         this._userService.delete(Global.BASE_STUDENT_ENDPOINT, formData._value.Id).subscribe();
        //         break;
        // }
    };
    StudentAddComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.userFrm.enable() : this.userFrm.disable();
    };
    return StudentAddComponent;
}());
StudentAddComponent = __decorate([
    core_1.Component({
        template: __webpack_require__("../../../../../src/app/student/student-add.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object, typeof (_b = typeof user_service_1.StudentService !== "undefined" && user_service_1.StudentService) === "function" && _b || Object])
], StudentAddComponent);
exports.StudentAddComponent = StudentAddComponent;
var _a, _b;
//# sourceMappingURL=student-add.component.js.map

/***/ }),

/***/ "../../../../../src/app/student/student-export.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var StudentExportComponent = (function () {
    function StudentExportComponent() {
    }
    return StudentExportComponent;
}());
StudentExportComponent = __decorate([
    core_1.Component({
        template: "\n    <h2>Student export Component</h2>\n\n   \n     <div class=\"tab-content\">\n\n                                    <div id=\"home\" class=\"tab-pane fade in active\">\n                                            <h3>HOME</h3>\n                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n                                          </div>\n                                          <div id=\"menu1\" class=\"tab-pane fade\">\n                                            <h3>Menu 1</h3>\n                                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n                                          </div>\n                                          <div id=\"menu2\" class=\"tab-pane fade\">\n                                            <h3>Menu 2</h3>\n                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>\n                                          </div>\n                                          <div id=\"menu3\" class=\"tab-pane fade\">\n                                            <h3>Menu 3</h3>\n                                            <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>\n                                          </div>\n\n                              </div>\n\n\n\n    "
    })
], StudentExportComponent);
exports.StudentExportComponent = StudentExportComponent;
//# sourceMappingURL=student-export.component.js.map

/***/ }),

/***/ "../../../../../src/app/student/student-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='panel panel-primary'>\r\n  <div class='panel-heading'>\r\n    Student list\r\n  </div>\r\n  <div class='panel-body'>\r\n\r\n    <data-grid [columns]=\"columns\"\r\n    [data]=\"students\"\r\n    [gridbtns]=\"gridbtns\"\r\n    [hdrbtns]=\"hdrbtns\"\r\n    [sort]=\"sorting\"\r\n    [isshowfilter]=true\r\n    [isExporttoCSV]=true\r\n    [exportFileName]=\"exportFileName\"\r\n    (btnclick)=\"gridaction($event)\">\r\n\r\n</data-grid>\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/student/student-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var user_service_1 = __webpack_require__("../../../../../src/app/Service/user.service.ts");
var global_1 = __webpack_require__("../../../../../src/app/Shared/global.ts");
var StudentListComponent = (function () {
    function StudentListComponent(_studentservice) {
        this._studentservice = _studentservice;
        //Grid Vars start
        this.columns = [
            {
                display: 'Guid',
                variable: 'Id',
                filter: 'text',
            },
            {
                display: 'Student Name',
                variable: 'StudentName',
                filter: 'text'
            },
            {
                display: 'Address',
                variable: 'Address',
                filter: 'text'
            },
            {
                display: 'GovtId',
                variable: 'GovtId',
                filter: 'text'
            },
            {
                display: 'YesId',
                variable: 'YesId',
                filter: 'text'
            }
        ];
        this.sorting = {
            column: 'SchoolName',
            descending: false
        };
    }
    StudentListComponent.prototype.ngOnInit = function () {
        this.LoadUsers();
    };
    StudentListComponent.prototype.LoadUsers = function () {
        var _this = this;
        this._studentservice.get(global_1.Global.BASE_STUDENT_ENDPOINT)
            .subscribe(function (students) {
            _this.students = students;
        });
    };
    return StudentListComponent;
}());
StudentListComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: __webpack_require__("../../../../../src/app/student/student-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.StudentService !== "undefined" && user_service_1.StudentService) === "function" && _a || Object])
], StudentListComponent);
exports.StudentListComponent = StudentListComponent;
var _a;
//# sourceMappingURL=student-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/student/student-updateclass.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var StudentUpdateclassComponent = (function () {
    function StudentUpdateclassComponent() {
    }
    return StudentUpdateclassComponent;
}());
StudentUpdateclassComponent = __decorate([
    core_1.Component({
        template: "\n    <h2>Student update  calss Component</h2>\n    "
    })
], StudentUpdateclassComponent);
exports.StudentUpdateclassComponent = StudentUpdateclassComponent;
//# sourceMappingURL=student-updateclass.component.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
__webpack_require__("../../../../../src/polyfills.ts");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
Object.defineProperty(exports, "__esModule", { value: true });
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/
__webpack_require__("../../../../core-js/es6/reflect.js");
__webpack_require__("../../../../core-js/es7/reflect.js");
/** ALL Firefox browsers require the following to support `@angular/animation`. **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
__webpack_require__("../../../../zone.js/dist/zone.js"); // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`. 
//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map