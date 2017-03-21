import { Component } from '@angular/core';
import {TypeService } from './type.service'; 
import { OnInit } from '@angular/core';
import {Router} from '@angular/router';





import {Type} from './type' 
import {TypeDetailComponent} from './type-detail.component'





@Component({
  moduleId : module.id,
  selector: 'type-menu',
  templateUrl: 'type-menu.component.html',

})
export class TypeMenuComponent implements OnInit { 

title = 'Liste des types'; 
selectedType : Type ; 
types : Type [] ; 


constructor ( private router : Router,
              private typeService : TypeService ) {}

getTypes () : void {

this.typeService.getTypes().then(types => this.types = types ) ;

}

onSelect ( type : Type ) {
this.selectedType = type ;  
}

ngOnInit () {
this.getTypes () ; 
}

number_type() {
   return this.selectedType.id;
}






}


































