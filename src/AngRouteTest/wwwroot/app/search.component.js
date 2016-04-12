System.register(['angular2/core', 'angular2/router', './bookmark.service', './dropdown.component', './grid/grid', './grid/column'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, bookmark_service_1, dropdown_component_1, grid_1, column_1;
    var SearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (bookmark_service_1_1) {
                bookmark_service_1 = bookmark_service_1_1;
            },
            function (dropdown_component_1_1) {
                dropdown_component_1 = dropdown_component_1_1;
            },
            function (grid_1_1) {
                grid_1 = grid_1_1;
            },
            function (column_1_1) {
                column_1 = column_1_1;
            }],
        execute: function() {
            SearchComponent = (function () {
                function SearchComponent(_bookmarkService, _router) {
                    this._bookmarkService = _bookmarkService;
                    this._router = _router;
                    this.searchCriteria = "";
                    this.selectedBookmark = "";
                    //this.people = this.getPeople();
                    this.columns = this.getColumns();
                }
                ;
                SearchComponent.prototype.ngOnInit = function () {
                    this.bookmarkContexts = this._bookmarkService.getContextMock();
                    //this._bookmarkService.getReportContexts()
                    //    .subscribe(
                    //    context => this.bookmarkContexts = context,
                    //    error => this.errormessage = <any>error);
                };
                SearchComponent.prototype.displayValueSelected = function (ev) {
                    this.selectedBookmarkContext = ev;
                };
                SearchComponent.prototype.search = function () {
                    //console.log("search item:" + this.selectedBookmarkContext);
                    //console.log("search criteria:" + this.searchCriteria);
                    this.bookmarks = this._bookmarkService.getBookmarksMock(this.selectedBookmarkContext, this.searchCriteria);
                    //this._bookmarkService.searchBookmarks(this.selectedBookmarkContext, this.searchCriteria)
                    //    .subscribe(
                    //    context => this.bookmarks = context,
                    //    error => this.errormessage = <any>error);
                    //console.log(this.bookmarks);
                };
                //getRowClicked(row:Bookmark) {
                //    //console.log("In search");
                //    //console.log(row);
                //    this.selectedBookmark = row.BookmarkCode;
                //}
                SearchComponent.prototype.getViewClicked = function (row) {
                    //console.log("In search");
                    console.log(row);
                    this.selectedBookmark = row.BookmarkCode;
                    this._router.navigate(['Option', { id: row.BookmarkCode }]);
                };
                //getPeople(): Array<Person> {
                //    return [
                //        { firstName: 'Joe', lastName: 'Jackson', age: 20 },
                //        { firstName: 'Peter', lastName: 'Smith', age: 30 },
                //        { firstName: 'Jane', lastName: 'Doe', age: 50 },
                //        { firstName: 'Tim', lastName: 'Smith', age: 80 }
                //    ];
                //}
                SearchComponent.prototype.getColumns = function () {
                    return [
                        new column_1.Column('BookmarkCode', 'Bookmark Code'),
                        new column_1.Column('ReportContextCode', 'Context'),
                        new column_1.Column('BookmarkDesc', 'Description'),
                        new column_1.Column('HasBookmarkOptions', 'Options')
                    ];
                };
                SearchComponent = __decorate([
                    core_1.Component({
                        template: "\n    <h3>Boomark Search</h3>\n    <div class=\"container\">\n    <div>\n        <label>Select Bookmark Context:</label>\n        <my-dropdown [contexts]=bookmarkContexts (valueSelected)=\"displayValueSelected($event)\"></my-dropdown>\n    </div>\n    <div>\n      <label>Search: </label>\n      <input [(ngModel)]=\"searchCriteria\" placeholder=\"search criteria\"/>\n    </div>\n    <div>\n      <label>Selected Bookmark: </label>\n      <input [value]=\"selectedBookmark\" placeholder=\"bookmark name\"/>\n    </div>\n    </div>\n    <p>\n      <button (click)=\"search()\">Search</button>\n    </p>\n    <div>{{errormessage}}</div>\n    <grid name=\"person grid\" [rows]=\"bookmarks\" [columns]=\"columns\"  (viewClicked)=\"getViewClicked($event)\"></grid>\n     <router-outlet></router-outlet>\n  ",
                        directives: [dropdown_component_1.DropDownComponent, grid_1.Grid],
                        providers: [bookmark_service_1.BookmarkService]
                    }), 
                    __metadata('design:paramtypes', [bookmark_service_1.BookmarkService, router_1.Router])
                ], SearchComponent);
                return SearchComponent;
            })();
            exports_1("SearchComponent", SearchComponent);
        }
    }
});
//interface Person {
//    firstName: string;
//    lastName: string;
//    age: number;
//} 
//# sourceMappingURL=search.component.js.map