System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var DropDownComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DropDownComponent = (function () {
                function DropDownComponent() {
                    this.valueSelected = new core_1.EventEmitter();
                }
                DropDownComponent.prototype.onSelect = function (reportContextCode) {
                    this.valueSelected.emit(reportContextCode);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], DropDownComponent.prototype, "contexts", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], DropDownComponent.prototype, "valueSelected", void 0);
                DropDownComponent = __decorate([
                    core_1.Component({
                        selector: 'my-dropdown',
                        template: "\n    <select  [ngModel]=\"selectedItem\"  (change)=\"onSelect($event.target.value)\">\n      <option *ngFor=\"#context of contexts\" [value]=\"context.ReportContextCode\">{{context.ReportContextDesc}}</option>\n    </select>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], DropDownComponent);
                return DropDownComponent;
            })();
            exports_1("DropDownComponent", DropDownComponent);
        }
    }
});
//# sourceMappingURL=dropdown.component.js.map