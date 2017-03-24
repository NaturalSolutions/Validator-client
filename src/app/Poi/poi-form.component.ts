import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PoiService } from './poi.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { TYPES } from '../Types/mock-types';


import { PoisComponent } from './pois.component'
import { TypeMenuComponent } from '../Types/type-menu.component'


@Component({
  moduleId: module.id,
  selector: 'poi-form',
  templateUrl: 'poi-form.component.html',
  //styleUrls:['./poi-form.component.css'],

})
export class PoisFormComponent {

  title = 'Ajout d\'un nouveau Poi';
  types = [];
  poi: any = {};

  constructor(
    private poisComponent: PoisComponent,
    private TypeMenuComponent: TypeMenuComponent,
    private route: ActivatedRoute,
    private poiService: PoiService
  ) {
    this.types = TYPES;
    this.route.params.subscribe((params: Params) => {
      if (params['id'])
        this.onPoiIdResolved(params['id']);
    });
  }

  onPoiIdResolved(id) {
    this.poiService.getPoi(id)
      .then(poi => {
        this.poi = poi;
      });
  }

  onSubmit() {
    if (!this.poi.id)
      this.poiService.create(this.poi);
    else
      this.poiService.update(this.poi);
  }

}













































