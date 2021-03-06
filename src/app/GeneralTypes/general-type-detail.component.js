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
var general_type_service_1 = require('./general-type.service');
var general_type_1 = require('./general-type');
require('rxjs/add/operator/switchMap');
var GeneralTypeDetailComponent = (function () {
    function GeneralTypeDetailComponent(typeService, route, location) {
        this.typeService = typeService;
        this.route = route;
        this.location = location;
    }
    GeneralTypeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.switchMap(function (params) { return _this.typeService.getGeneralType(+params['id']); })
            .subscribe(function (generalType) { return _this.generalType = generalType; });
    };
    GeneralTypeDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', general_type_1.GeneralType)
    ], GeneralTypeDetailComponent.prototype, "generalType", void 0);
    GeneralTypeDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-general-type-detail',
            templateUrl: 'general-type-detail.component.html',
            styleUrls: ['./general-type-detail.component.css']
        }), 
        __metadata('design:paramtypes', [general_type_service_1.GeneralTypeService, router_1.ActivatedRoute, common_1.Location])
    ], GeneralTypeDetailComponent);
    return GeneralTypeDetailComponent;
}());
exports.GeneralTypeDetailComponent = GeneralTypeDetailComponent;
//# sourceMappingURL=general-type-detail.component.js.map