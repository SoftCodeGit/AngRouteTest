System.register(['angular2/core', 'angular2/common', './bookmark-option-value-change.service', './bookmark.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, bookmark_option_value_change_service_1, bookmark_service_1;
    var LabelCopyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (bookmark_option_value_change_service_1_1) {
                bookmark_option_value_change_service_1 = bookmark_option_value_change_service_1_1;
            },
            function (bookmark_service_1_1) {
                bookmark_service_1 = bookmark_service_1_1;
            }],
        execute: function() {
            LabelCopyComponent = (function () {
                function LabelCopyComponent(_bookmarkOptionValueChangeService, _bookmarkService) {
                    this._bookmarkOptionValueChangeService = _bookmarkOptionValueChangeService;
                    this._bookmarkService = _bookmarkService;
                }
                ;
                LabelCopyComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._bookmarkOptionValueChangeService.bookmarkOptionValueChanged$.subscribe(function (optionValue) { return _this.onBookmarkOptionValueChanged(optionValue); });
                };
                ;
                LabelCopyComponent.prototype.onBookmarkOptionValueChanged = function (optionValue) {
                    //call service to determine bookmarkText
                    this.bookmarkText = this._bookmarkService.getBookmarkText(optionValue);
                };
                LabelCopyComponent.prototype.doCopy = function () {
                    var _this = this;
                    var bookmarkText = document.querySelector('.copy-label');
                    console.log(bookmarkText);
                    var range = document.createRange();
                    range.selectNode(bookmarkText);
                    window.getSelection().addRange(range);
                    var successful = document.execCommand('copy');
                    //window.alert(successful);
                    window.getSelection().removeAllRanges();
                    this.copyClass = "copied";
                    //wait one second then change the class back to empty.
                    setTimeout(function () { return _this.copyClass = ""; }, 1000);
                };
                LabelCopyComponent = __decorate([
                    core_1.Component({
                        selector: 'label-copy',
                        template: "\n    <div>\n        <label class=\"copy-label\">{{bookmarkText}}</label>\n        <button (click)=\"doCopy()\" [ngClass]=\"copyClass\">Copy</button>\n    </div>\n  ",
                        directives: [common_1.NgClass],
                        providers: [bookmark_service_1.BookmarkService]
                    }), 
                    __metadata('design:paramtypes', [bookmark_option_value_change_service_1.BookmarkOptionValueChangeService, bookmark_service_1.BookmarkService])
                ], LabelCopyComponent);
                return LabelCopyComponent;
            })();
            exports_1("LabelCopyComponent", LabelCopyComponent);
        }
    }
});
//# sourceMappingURL=label-copy.component.js.map