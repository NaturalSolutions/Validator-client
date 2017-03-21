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
//Dashboard
var dashboard_component_1 = require('./Dashboard/dashboard.component');
//POI
var poi_detail_component_1 = require('./Poi/poi-detail.component');
var pois_component_1 = require('./Poi/pois.component');
//User
var user_detail_component_1 = require('./User/user-detail.component');
var users_component_1 = require('./User/users.component');
//Types 
var type_detail_component_1 = require('./Types/type-detail.component');
var types_component_1 = require('./Types/types.component');
//Periodes 
var periode_detail_component_1 = require('./Periodes/periode-detail.component');
var periodes_component_1 = require('./Periodes/periodes.component');
//GeneralTypes
var general_type_detail_component_1 = require('./GeneralTypes/general-type-detail.component');
var general_types_component_1 = require('./GeneralTypes/general-types.component');
//Badges
var Badge_detail_component_1 = require('./Badge/Badge-detail.component');
var Badges_component_1 = require('./Badge/Badges.component');
var routes = [
    { path: 'pois', component: pois_component_1.PoisComponent },
    { path: 'users', component: users_component_1.UsersComponent },
    { path: 'types', component: types_component_1.TypesComponent },
    { path: 'periodes', component: periodes_component_1.PeriodesComponent },
    { path: 'generalTypes', component: general_types_component_1.GeneralTypesComponent },
    { path: 'badges', component: Badges_component_1.BadgesComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'detail/:id', component: poi_detail_component_1.PoiDetailComponent },
    { path: 'user/:id', component: user_detail_component_1.UserDetailComponent },
    { path: 'type/:id', component: type_detail_component_1.TypeDetailComponent },
    { path: 'periode/:id', component: periode_detail_component_1.PeriodeDetailComponent },
    { path: 'generalType/:id', component: general_type_detail_component_1.GeneralTypeDetailComponent },
    { path: 'badge/:id', component: Badge_detail_component_1.BadgeDetailComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map