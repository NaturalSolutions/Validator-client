import { Component } from '@angular/core';
import {BadgeService } from './badge.service'; 
import { OnInit } from '@angular/core';
import {Router} from '@angular/router';





import {Badge} from './badge' 
import {BadgeDetailComponent} from './badge-detail.component'





@Component({
  moduleId : module.id,
  selector: 'my-badges',
  templateUrl: 'badges.component.html',
  styleUrls:['badges.component.css']

})
export class BadgesComponent implements OnInit { 

title = 'Liste des badges'; 
selectedBadge : Badge ; 
badges : Badge [] ; 


constructor ( private router : Router,
              private badgeService : BadgeService ) {}

getBadges () : void {

this.badgeService.getBadges().then(badges => this.badges = badges ) ;

}

onSelect ( badge : Badge ) {
this.selectedBadge = badge ;  
}

ngOnInit () {
this.getBadges () ; 
}

gotoDetail() {
  this.router.navigate(['/badge', this.selectedBadge.id]);
}






}


































