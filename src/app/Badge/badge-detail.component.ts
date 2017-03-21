import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { BadgeService } from './badge.service';



import {Badge} from './badge' 


import 'rxjs/add/operator/switchMap';



@Component({
  moduleId: module.id,
  selector: 'my-badge-detail',
  templateUrl : 'badge-detail.component.html',
  styleUrls:['./badge-detail.component.css']
})
export class BadgeDetailComponent implements OnInit {
@Input()
badge : Badge ; 

constructor ( 
    private badgeService : BadgeService,
    private route : ActivatedRoute,
    private location : Location 
    ) {}

ngOnInit (): void {

this.route.params.switchMap((params: Params) => this.badgeService.getBadge(+params['id']))
    .subscribe(badge => this.badge = badge);


}

goBack () {
this.location.back() ; 
}




}