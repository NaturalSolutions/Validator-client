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
var poi_service_1 = require('./poi.service');
var router_1 = require('@angular/router');
var PoisComponent = (function () {
    function PoisComponent(router, poiService) {
        this.router = router;
        this.poiService = poiService;
        this.title = 'Liste des pois';
    }
    PoisComponent.prototype.getPois = function () {
        var _this = this;
        this.poiService.getPois().then(function (pois) { return _this.pois = pois; });
    };
    PoisComponent.prototype.onSelect = function (poi) {
        this.selectedPoi = poi;
    };
    PoisComponent.prototype.ngOnInit = function () {
        this.getPois();
    };
    PoisComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedPoi.externalId]);
    };
    PoisComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-pois',
            templateUrl: 'pois.component.html',
            styleUrls: ['pois.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, poi_service_1.PoiService])
    ], PoisComponent);
    return PoisComponent;
}());
exports.PoisComponent = PoisComponent;
/* ======================== DETAILS DES POIS  (À toute fin utile)    =================================== */
/*
                  <label> version : </label>  {{poi.version}}
                  <label> longitude : </label>  {{poi.longitude}}
                  <label> latitude : </label>  {{poi.latitude}}
                  <label> idType_POI_Form : </label>  {{poi.idType_POI_Form}}
*/
/*  ( First poi créé )
poi : Poi = {

  idPOI_Form : 1,
  namePOI_Form : "parc d'essai" ,
    version      :   1 ,
    longitude    : 11.2 ,
    latitude     : 16.4 ,
    idType_POI_Form : 5
}
*/
//# sourceMappingURL=pois.component.js.map