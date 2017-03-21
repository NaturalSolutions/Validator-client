import { Component,OnInit } from '@angular/core';

import { Poi } from '../Poi/poi';
import {PoiService} from '../Poi/poi.service';



@Component({
  moduleId : module.id,
  selector: 'my-dashboard',
  templateUrl : 'dashboard.component.html',
  styleUrls : ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

pois : Poi [] ;

constructor ( private poiService : PoiService) { } 


ngOnInit (): void {

this.poiService.getPois().then(pois => this.pois = pois); 

}

//pois.slice(1,5)





 }