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
var mock_badges_1 = require('./mock-badges');
var BadgeService = (function () {
    function BadgeService() {
    }
    BadgeService.prototype.getBadges = function () {
        return Promise.resolve(mock_badges_1.BADGES);
    };
    BadgeService.prototype.getBadge = function (id) {
        return this.getBadges()
            .then(function (badges) { return badges.find(function (badge) { return badge.id === id; }); });
    };
    BadgeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], BadgeService);
    return BadgeService;
}());
exports.BadgeService = BadgeService;
//# sourceMappingURL=badge.service.js.map