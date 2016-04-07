System.register(['angular2/core', './bookmark.service', './dropdown.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, bookmark_service_1, dropdown_component_1;
    var SearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (bookmark_service_1_1) {
                bookmark_service_1 = bookmark_service_1_1;
            },
            function (dropdown_component_1_1) {
                dropdown_component_1 = dropdown_component_1_1;
            }],
        execute: function() {
            SearchComponent = (function () {
                function SearchComponent(_bookmarkService) {
                    this._bookmarkService = _bookmarkService;
                }
                ;
                SearchComponent.prototype.ngOnInit = function () {
                    this.bookmarkContexts = this._bookmarkService.getContextMock();
                };
                SearchComponent.prototype.displayValueSelected = function (ev) {
                    this.myVal = ev;
                };
                SearchComponent.prototype.search = function () {
                    console.log("search criteria:" + this.searchCriteria);
                };
                SearchComponent = __decorate([
                    core_1.Component({
                        template: "\n    <h3>Boomark Search</h3>\n    <div>\n        <label>Select Bookmark Context:</label>\n        <my-dropdown [contexts]=bookmarkContexts (valueSelected)=\"displayValueSelected($event)\"></my-dropdown>\n    </div>\n    <div>event: {{myVal}}</div>\n    <div>\n      <label>Search: </label>\n      <input [(ngModel)]=\"searchCriteria\" placeholder=\"bookmark name\"/>\n    </div>\n    <p>\n      <button (click)=\"search()\">Search</button>\n    </p>\n  ",
                        directives: [dropdown_component_1.DropDownComponent],
                        providers: [bookmark_service_1.BookmarkService]
                    }), 
                    __metadata('design:paramtypes', [bookmark_service_1.BookmarkService])
                ], SearchComponent);
                return SearchComponent;
            })();
            exports_1("SearchComponent", SearchComponent);
        }
    }
});
//# sourceMappingURL=search.component.js.map