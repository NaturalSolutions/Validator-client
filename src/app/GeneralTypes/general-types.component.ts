import { Component } from '@angular/core';
import {GeneralTypeService } from './general-type.service'; 
import { OnInit } from '@angular/core';
import {Router} from '@angular/router';





import {GeneralType} from './general-type' 
import {GeneralTypeDetailComponent} from './general-type-detail.component'





@Component({
  moduleId : module.id,
  selector: 'my-general-types',
  templateUrl: 'general-types.component.html',
  styleUrls:['general-types.component.css']

})
export class GeneralTypesComponent implements OnInit { 

title = 'Liste des general-types'; 
selectedGeneralType : GeneralType ; 
generalTypes : GeneralType [] ; 


constructor ( private router : Router,
              private typeService : GeneralTypeService ) {}

getTypes () : void {

this.typeService.getGeneralTypes().then(generalTypes => this.generalTypes = generalTypes ) ;

}

onSelect ( generalType : GeneralType ) {
this.selectedGeneralType = generalType ;  
}

ngOnInit () {
this.getTypes () ; 
}

gotoDetail() {
  this.router.navigate(['/type', this.selectedGeneralType.id]);
}






}


































