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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_routing_module_1 = require('./app-routing.module');
//Poi 
var poi_service_1 = require('./Poi/poi.service');
var poi_detail_component_1 = require('./Poi/poi-detail.component');
var pois_component_1 = require('./Poi/pois.component');
//User
var user_service_1 = require('./User/user.service');
var user_detail_component_1 = require('./User/user-detail.component');
var users_component_1 = require('./User/users.component');
//Types 
var type_service_1 = require('./Types/type.service');
var type_detail_component_1 = require('./Types/type-detail.component');
var types_component_1 = require('./Types/types.component');
//Periodes 
var periode_service_1 = require('./Periodes/periode.service');
var periode_detail_component_1 = require('./Periodes/periode-detail.component');
var periodes_component_1 = require('./Periodes/periodes.component');
//GeneralTypes
var general_type_service_1 = require('./GeneralTypes/general-type.service');
var general_type_detail_component_1 = require('./GeneralTypes/general-type-detail.component');
var general_types_component_1 = require('./GeneralTypes/general-types.component');
//Badges
var badge_service_1 = require('./Badge/badge.service');
var Badge_detail_component_1 = require('./Badge/Badge-detail.component');
var Badges_component_1 = require('./Badge/Badges.component');
var app_component_1 = require('./app.component');
var dashboard_component_1 = require('./Dashboard/dashboard.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                poi_detail_component_1.PoiDetailComponent,
                pois_component_1.PoisComponent,
                user_detail_component_1.UserDetailComponent,
                users_component_1.UsersComponent,
                type_detail_component_1.TypeDetailComponent,
                types_component_1.TypesComponent,
                periode_detail_component_1.PeriodeDetailComponent,
                periodes_component_1.PeriodesComponent,
                general_type_detail_component_1.GeneralTypeDetailComponent,
                general_types_component_1.GeneralTypesComponent,
                Badge_detail_component_1.BadgeDetailComponent,
                Badges_component_1.BadgesComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [poi_service_1.PoiService,
                user_service_1.UserService,
                type_service_1.TypeService,
                periode_service_1.PeriodeService,
                general_type_service_1.GeneralTypeService,
                badge_service_1.BadgeService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map