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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var periode_service_1 = require('./periode.service');
var periode_1 = require('./periode');
require('rxjs/add/operator/switchMap');
var PeriodeDetailComponent = (function () {
    function PeriodeDetailComponent(periodeService, route, location) {
        this.periodeService = periodeService;
        this.route = route;
        this.location = location;
    }
    PeriodeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.switchMap(function (params) { return _this.periodeService.getPeriode(+params['id']); })
            .subscribe(function (periode) { return _this.periode = periode; });
    };
    PeriodeDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', periode_1.Periode)
    ], PeriodeDetailComponent.prototype, "periode", void 0);
    PeriodeDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-periode-detail',
            templateUrl: 'periode-detail.component.html',
            styleUrls: ['./periode-detail.component.css']
        }), 
        __metadata('design:paramtypes', [periode_service_1.PeriodeService, router_1.ActivatedRoute, common_1.Location])
    ], PeriodeDetailComponent);
    return PeriodeDetailComponent;
}());
exports.PeriodeDetailComponent = PeriodeDetailComponent;
//# sourceMappingURL=periode-detail.component.js.map