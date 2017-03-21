import { Component } from '@angular/core';
import {TypeService } from './type.service'; 
import { OnInit } from '@angular/core';
import {Router} from '@angular/router';





import {Type} from './type' 
import {TypeDetailComponent} from './type-detail.component'





@Component({
  moduleId : module.id,
  selector: 'my-types',
  templateUrl: 'types.component.html',
  styleUrls:['types.component.css']

})
export class TypesComponent implements OnInit { 

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

gotoDetail() {
  this.router.navigate(['/type', this.selectedType.id]);
}






}


































