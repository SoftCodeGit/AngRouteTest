System.register(['angular2/core', './crisis'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, crisis_1;
    var CrisisService, crises, crisesPromise;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (crisis_1_1) {
                crisis_1 = crisis_1_1;
            }],
        execute: function() {
            CrisisService = (function () {
                function CrisisService() {
                }
                CrisisService.prototype.getCrises = function () { return crisesPromise; };
                CrisisService.prototype.getCrisis = function (id) {
                    return crisesPromise
                        .then(function (crises) { return crises.filter(function (c) { return c.id === +id; })[0]; });
                };
                CrisisService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CrisisService);
                return CrisisService;
            })();
            exports_1("CrisisService", CrisisService);
            crises = [
                new crisis_1.Crisis(1, 'Dragon Burning Cities'),
                new crisis_1.Crisis(2, 'Sky Rains Great White Sharks'),
                new crisis_1.Crisis(3, 'Giant Asteroid Heading For Earth'),
                new crisis_1.Crisis(4, 'Procrastinators Meeting Delayed Again'),
            ];
            crisesPromise = Promise.resolve(crises);
        }
    }
});
//# sourceMappingURL=crisis.service.js.map