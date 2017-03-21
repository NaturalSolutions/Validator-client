import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { TypeService } from './type.service';



import {Type} from './type' 


import 'rxjs/add/operator/switchMap';



@Component({
  moduleId: module.id,
  selector: 'my-type-detail',
  templateUrl : 'type-detail.component.html',
  styleUrls:['./type-detail.component.css']
})
export class TypeDetailComponent implements OnInit {
@Input()
type : Type ; 

constructor ( 
    private typeService : TypeService,
    private route : ActivatedRoute,
    private location : Location 
    ) {}

ngOnInit (): void {

this.route.params.switchMap((params: Params) => this.typeService.getType(+params['id']))
    .subscribe(type => this.type = type);


}

goBack () {
this.location.back() ; 
}




}