import { Component } from '@angular/core';
import {PoiService } from './poi.service'; 
import { OnInit } from '@angular/core';
import {Router} from '@angular/router';





import {PoisComponent} from './pois.component'
import {TypeMenuComponent} from '../Types/type-menu.component'



@Component({
  moduleId : module.id,
  selector: 'poi-form',
  templateUrl: 'poi-form.component.html',
  styleUrls:['./poi-form.component.css'],

})
export class PoisFormComponent  { 

title = 'Ajout d\'un nouveau Poi'; 

constructor ( private PoisComponent : PoisComponent,
              private TypeMenuComponent : TypeMenuComponent ) {}


}













































