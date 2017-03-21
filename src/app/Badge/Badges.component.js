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
var badge_service_1 = require('./badge.service');
var router_1 = require('@angular/router');
var BadgesComponent = (function () {
    function BadgesComponent(router, badgeService) {
        this.router = router;
        this.badgeService = badgeService;
        this.title = 'Liste des badges';
    }
    BadgesComponent.prototype.getBadges = function () {
        var _this = this;
        this.badgeService.getBadges().then(function (badges) { return _this.badges = badges; });
    };
    BadgesComponent.prototype.onSelect = function (badge) {
        this.selectedBadge = badge;
    };
    BadgesComponent.prototype.ngOnInit = function () {
        this.getBadges();
    };
    BadgesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/badge', this.selectedBadge.id]);
    };
    BadgesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-badges',
            templateUrl: 'badges.component.html',
            styleUrls: ['badges.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, badge_service_1.BadgeService])
    ], BadgesComponent);
    return BadgesComponent;
}());
exports.BadgesComponent = BadgesComponent;
//# sourceMappingURL=Badges.component.js.map