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
var type_service_1 = require('./type.service');
var router_1 = require('@angular/router');
var TypesComponent = (function () {
    function TypesComponent(router, typeService) {
        this.router = router;
        this.typeService = typeService;
        this.title = 'Liste des types';
    }
    TypesComponent.prototype.getTypes = function () {
        var _this = this;
        this.typeService.getTypes().then(function (types) { return _this.types = types; });
    };
    TypesComponent.prototype.onSelect = function (type) {
        this.selectedType = type;
    };
    TypesComponent.prototype.ngOnInit = function () {
        this.getTypes();
    };
    TypesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/type', this.selectedType.id]);
    };
    TypesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-types',
            templateUrl: 'types.component.html',
            styleUrls: ['types.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, type_service_1.TypeService])
    ], TypesComponent);
    return TypesComponent;
}());
exports.TypesComponent = TypesComponent;
//# sourceMappingURL=types.component.js.map