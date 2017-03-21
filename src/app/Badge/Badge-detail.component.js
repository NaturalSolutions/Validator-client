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
var badge_service_1 = require('./badge.service');
var badge_1 = require('./badge');
require('rxjs/add/operator/switchMap');
var BadgeDetailComponent = (function () {
    function BadgeDetailComponent(badgeService, route, location) {
        this.badgeService = badgeService;
        this.route = route;
        this.location = location;
    }
    BadgeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.switchMap(function (params) { return _this.badgeService.getBadge(+params['id']); })
            .subscribe(function (badge) { return _this.badge = badge; });
    };
    BadgeDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', badge_1.Badge)
    ], BadgeDetailComponent.prototype, "badge", void 0);
    BadgeDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-badge-detail',
            templateUrl: 'badge-detail.component.html',
            styleUrls: ['./badge-detail.component.css']
        }), 
        __metadata('design:paramtypes', [badge_service_1.BadgeService, router_1.ActivatedRoute, common_1.Location])
    ], BadgeDetailComponent);
    return BadgeDetailComponent;
}());
exports.BadgeDetailComponent = BadgeDetailComponent;
//# sourceMappingURL=Badge-detail.component.js.map