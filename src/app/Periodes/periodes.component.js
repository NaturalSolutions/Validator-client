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
var core_1 = require('@angular/core');
var periode_service_1 = require('./periode.service');
var router_1 = require('@angular/router');
var PeriodesComponent = (function () {
    function PeriodesComponent(router, periodeService) {
        this.router = router;
        this.periodeService = periodeService;
        this.title = 'Liste des periodes';
    }
    PeriodesComponent.prototype.getPeriodes = function () {
        var _this = this;
        this.periodeService.getPeriodes().then(function (periodes) { return _this.periodes = periodes; });
    };
    PeriodesComponent.prototype.onSelect = function (periode) {
        this.selectedPeriode = periode;
    };
    PeriodesComponent.prototype.ngOnInit = function () {
        this.getPeriodes();
    };
    PeriodesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/periode', this.selectedPeriode.poi_id]);
    };
    PeriodesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-periodes',
            templateUrl: 'periodes.component.html',
            styleUrls: ['periodes.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, periode_service_1.PeriodeService])
    ], PeriodesComponent);
    return PeriodesComponent;
}());
exports.PeriodesComponent = PeriodesComponent;
//# sourceMappingURL=periodes.component.js.map