import { Component } from '@angular/core';
import {TypeService } from './type.service'; 
import { OnInit } from '@angular/core';
import {Router} from '@angular/router';





import {Type} from './type' 







@Component({
  moduleId : module.id,
  selector: 'type-menu',
  templateUrl: 'type-menu.component.html',

})
export class TypeMenuComponent implements OnInit { 

title = 'Liste des types'; 
public static selectedType : any ; 
types : Type [] ; 


constructor ( private router : Router,
              private typeService : TypeService ) {}

getTypes () : void {

this.typeService.getTypes().then(types => this.types = types ) ;

}


ngOnInit () {
this.getTypes () ; 
}


callType(value : any){
    TypeMenuComponent.selectedType = value;
  }


}


































