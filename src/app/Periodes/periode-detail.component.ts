import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { PeriodeService } from './periode.service';



import {Periode} from './periode' 


import 'rxjs/add/operator/switchMap';



@Component({
  moduleId: module.id,
  selector: 'my-periode-detail',
  templateUrl : 'periode-detail.component.html',
  styleUrls:['./periode-detail.component.css']
})
export class PeriodeDetailComponent implements OnInit {
@Input()
periode : Periode ; 

constructor ( 
    private periodeService : PeriodeService,
    private route : ActivatedRoute,
    private location : Location 
    ) {}

ngOnInit (): void {

this.route.params.switchMap((params: Params) => this.periodeService.getPeriode(+params['id']))
    .subscribe(periode => this.periode = periode);


}

goBack () {
this.location.back() ; 
}




}