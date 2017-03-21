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
var type_service_1 = require('./type.service');
var type_1 = require('./type');
require('rxjs/add/operator/switchMap');
var TypeDetailComponent = (function () {
    function TypeDetailComponent(typeService, route, location) {
        this.typeService = typeService;
        this.route = route;
        this.location = location;
    }
    TypeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.switchMap(function (params) { return _this.typeService.getType(+params['id']); })
            .subscribe(function (type) { return _this.type = type; });
    };
    TypeDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', type_1.Type)
    ], TypeDetailComponent.prototype, "type", void 0);
    TypeDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-type-detail',
            templateUrl: 'type-detail.component.html',
            styleUrls: ['./type-detail.component.css']
        }), 
        __metadata('design:paramtypes', [type_service_1.TypeService, router_1.ActivatedRoute, common_1.Location])
    ], TypeDetailComponent);
    return TypeDetailComponent;
}());
exports.TypeDetailComponent = TypeDetailComponent;
//# sourceMappingURL=type-detail.component.js.map