import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { GeneralTypeService } from './general-type.service';



import {GeneralType} from './general-type' 


import 'rxjs/add/operator/switchMap';



@Component({
  moduleId: module.id,
  selector: 'my-general-type-detail',
  templateUrl : 'general-type-detail.component.html',
  styleUrls:['./general-type-detail.component.css']
})
export class GeneralTypeDetailComponent implements OnInit {
@Input()
generalType : GeneralType ; 

constructor ( 
    private typeService : GeneralTypeService,
    private route : ActivatedRoute,
    private location : Location 
    ) {}

ngOnInit (): void {

this.route.params.switchMap((params: Params) => this.typeService.getGeneralType(+params['id']))
    .subscribe(generalType => this.generalType = generalType);


}

goBack () {
this.location.back() ; 
}




}