import { Component } from '@angular/core';
import {PoiService } from '../poi/poi.service'; 
import { OnInit } from '@angular/core';
import {Poi } from '../poi/poi'; 

import {POIS} from '../Poi/mock-pois'

@Component({
  selector: 'map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.css'],
})
export class MapComponent {
  title: string = 'Pois sur la carte';
  pois = POIS  ;
 
 // lat: number = 51.678418;
 // lng: number = 7.809007;


/*
constructor ( private poiService : PoiService ) {}

  getsPois () : void {

this.poiService.getPois().then(pois => this.pois = pois.slice(1,10) ) ;
}


ngOnInit () {
this.getsPois 
}
*/

}