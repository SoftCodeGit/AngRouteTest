System.register(['angular2/core', 'angular2/router', './label-copy.component', './bookmark-option-value', './bookmark-option-value-change.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, label_copy_component_1, bookmark_option_value_1, bookmark_option_value_change_service_1;
    var BookmarkOptionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (label_copy_component_1_1) {
                label_copy_component_1 = label_copy_component_1_1;
            },
            function (bookmark_option_value_1_1) {
                bookmark_option_value_1 = bookmark_option_value_1_1;
            },
            function (bookmark_option_value_change_service_1_1) {
                bookmark_option_value_change_service_1 = bookmark_option_value_change_service_1_1;
            }],
        execute: function() {
            BookmarkOptionComponent = (function () {
                function BookmarkOptionComponent(_router, _routeParams, _bookmarkChangeService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._bookmarkChangeService = _bookmarkChangeService;
                }
                BookmarkOptionComponent.prototype.ngOnInit = function () {
                    var id = this._routeParams.get('id');
                    console.log("in option");
                    console.log(id);
                    this.bookmarkCode = id;
                };
                ;
                BookmarkOptionComponent.prototype.doTest = function () {
                    var _bookmarkOptionValue = new bookmark_option_value_1.BookmarkOptionValue();
                    _bookmarkOptionValue.bookmarkCode = this.bookmarkCode;
                    // "{"IB":"P","STATISTICAL":true,"TYPE":"DEBTORBALANCE","SHOWTOTAL":true,"JUDGMENTFEE":true,"OUTPUT":"TEXT","FEE":"100"};
                    //var item = { key: "IB", value: "P" };
                    //_bookmarkOptionValue.formValues = [];
                    //_bookmarkOptionValue.formValues.push(item);
                    _bookmarkOptionValue.formValues.push({ key: "IB", value: "P" });
                    _bookmarkOptionValue.formValues.push({ key: "STATISTICAL", value: "" });
                    _bookmarkOptionValue.formValues.push({ key: "TYPE", value: "DEBTORBALANCE" });
                    _bookmarkOptionValue.formValues.push({ key: "NUMOPTION", value: "6" });
                    _bookmarkOptionValue.formValues.push({ key: "SHOWTOTAL", value: "true" });
                    _bookmarkOptionValue.formValues.push({ key: "OUTPUT", value: null });
                    this._bookmarkChangeService.bookmarkOptionValueChangeBroadcast(_bookmarkOptionValue);
                };
                BookmarkOptionComponent = __decorate([
                    core_1.Component({
                        template: "\n    <h3>Boomark Option</h3>\n    <label-copy [bookmarkCode]=\"bookmarkCode\"></label-copy>\n    <button (click)=\"doTest()\">Test</button>\n  ",
                        directives: [label_copy_component_1.LabelCopyComponent],
                        providers: [bookmark_option_value_change_service_1.BookmarkOptionValueChangeService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, bookmark_option_value_change_service_1.BookmarkOptionValueChangeService])
                ], BookmarkOptionComponent);
                return BookmarkOptionComponent;
            })();
            exports_1("BookmarkOptionComponent", BookmarkOptionComponent);
        }
    }
});
//# sourceMappingURL=bookmark-option.component.js.map