import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { PoiService } from './poi.service';



import {Poi} from './poi' 


import 'rxjs/add/operator/switchMap';



@Component({
  moduleId: module.id,
  selector: 'my-poi-detail',
  templateUrl : 'poi-detail.component.html',
  styleUrls:['./poi-detail.component.css']
})
export class PoiDetailComponent implements OnInit {
@Input()
poi : Poi ; 

constructor ( 
    private poiService : PoiService,
    private route : ActivatedRoute,
    private location : Location 
    ) {}

ngOnInit (): void {

this.route.params.switchMap((params: Params) => this.poiService.getPoi(+params['id']))
    .subscribe(poi => this.poi = poi);
    
}

goBack () {
this.location.back() ; 
}

 

save(name : string ): void {
  this.poiService.update(this.poi, name)
    .then(() => this.goBack());
}



}