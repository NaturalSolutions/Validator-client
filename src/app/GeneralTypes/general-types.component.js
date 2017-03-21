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
var general_type_service_1 = require('./general-type.service');
var router_1 = require('@angular/router');
var GeneralTypesComponent = (function () {
    function GeneralTypesComponent(router, typeService) {
        this.router = router;
        this.typeService = typeService;
        this.title = 'Liste des general-types';
    }
    GeneralTypesComponent.prototype.getTypes = function () {
        var _this = this;
        this.typeService.getGeneralTypes().then(function (generalTypes) { return _this.generalTypes = generalTypes; });
    };
    GeneralTypesComponent.prototype.onSelect = function (generalType) {
        this.selectedGeneralType = generalType;
    };
    GeneralTypesComponent.prototype.ngOnInit = function () {
        this.getTypes();
    };
    GeneralTypesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/type', this.selectedGeneralType.id]);
    };
    GeneralTypesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-general-types',
            templateUrl: 'general-types.component.html',
            styleUrls: ['general-types.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, general_type_service_1.GeneralTypeService])
    ], GeneralTypesComponent);
    return GeneralTypesComponent;
}());
exports.GeneralTypesComponent = GeneralTypesComponent;
//# sourceMappingURL=general-types.component.js.map