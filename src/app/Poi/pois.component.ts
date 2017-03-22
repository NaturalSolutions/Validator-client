import { Component } from '@angular/core';
import {PoiService } from './poi.service'; 
import { OnInit } from '@angular/core';
import {Router} from '@angular/router';





import {Poi} from './poi' 
import {PoiDetailComponent} from './poi-detail.component'
import {TypeMenuComponent} from '../Types/type-menu.component'

import {TYPES} from '../Types/mock-types'




@Component({
  moduleId : module.id,
  selector: 'my-pois',
  templateUrl: 'pois.component.html',
  styleUrls:['pois.component.css']

})
export class PoisComponent implements OnInit { 

title = 'Liste des pois'; 
selectedPoi : Poi ; 
pois : Poi [] ; 


constructor ( private router : Router,
              private poiService : PoiService ) {}

getPois () : void {

this.poiService.getPois().then(pois => this.pois = pois ) ;
}

onSelect ( poi : Poi ) {
this.selectedPoi = poi ;  
}

ngOnInit () {
this.getPois () ; 
}

gotoDetail() {
  this.router.navigate(['/detail', this.selectedPoi.id]);
}




add ( name :   string, longitude    : number , latitude : number , 	name_fr:string,
	visit_time_min: number , visit_time_max: number ,	price_min: string , price_max: string , street: string, postal_code:string, 
  phone:string, email:string, website:string, resa_link:string, url_img1:string, url_img2:string, desc:string, desc_fr:string,
	withchild: boolean ) :  void {
  name.trim(); 
  if (!name) { return; }
  this.poiService.create( name, longitude, latitude,  TypeMenuComponent.selectedType, name_fr, visit_time_min , visit_time_max, 	
  price_min, price_max, street, postal_code, phone, email, website, resa_link, url_img1, url_img2, desc, desc_fr,withchild)
    .then(poi => {
      this.selectedPoi = null;
    });
}

// type-id est défini en "dur" dans add() 

delete(poi: Poi): void {
  this.poiService
      .delete(poi.id)
      .then(() => {
        this.pois = this.pois.filter(h => h !== poi);
        if (this.selectedPoi === poi) { this.selectedPoi = null; }
      });
}


getPoiType ( nom : string ) {

TYPES.forEach(element => {
  if ( nom === element.name_fr )
      return element.id ;  
  });
}

transformJsonEnTableau ( pois : Poi [] ) {    // pour le json de jsons .. 

  for ( let poi of pois ) {
    
     let keyArr = Object.keys(poi) ; 
    
      keyArr.forEach( key  => {
        poi [key] =  poi [key].slice( poi[key].indexOf(":"), -2);
      });
  }
      
  return pois ; 

}






}





































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





