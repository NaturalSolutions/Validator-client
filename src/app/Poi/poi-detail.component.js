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
var poi_service_1 = require('./poi.service');
var poi_1 = require('./poi');
require('rxjs/add/operator/switchMap');
var PoiDetailComponent = (function () {
    function PoiDetailComponent(poiService, route, location) {
        this.poiService = poiService;
        this.route = route;
        this.location = location;
    }
    PoiDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.switchMap(function (params) { return _this.poiService.getPoi(+params['id']); })
            .subscribe(function (poi) { return _this.poi = poi; });
    };
    PoiDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', poi_1.Poi)
    ], PoiDetailComponent.prototype, "poi", void 0);
    PoiDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-poi-detail',
            templateUrl: 'poi-detail.component.html',
            styleUrls: ['./poi-detail.component.css']
        }), 
        __metadata('design:paramtypes', [poi_service_1.PoiService, router_1.ActivatedRoute, common_1.Location])
    ], PoiDetailComponent);
    return PoiDetailComponent;
}());
exports.PoiDetailComponent = PoiDetailComponent;
//# sourceMappingURL=poi-detail.component.js.map