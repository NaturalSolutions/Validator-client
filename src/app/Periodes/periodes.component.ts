import { Component } from '@angular/core';
import {PeriodeService } from './periode.service'; 
import { OnInit } from '@angular/core';
import {Router} from '@angular/router';





import {Periode} from './periode' 
import {PeriodeDetailComponent} from './periode-detail.component'





@Component({
  moduleId : module.id,
  selector: 'my-periodes',
  templateUrl: 'periodes.component.html',
  styleUrls:['periodes.component.css']

})
export class PeriodesComponent implements OnInit { 

title = 'Liste des periodes'; 
selectedPeriode : Periode ; 
periodes : Periode [] ; 


constructor ( private router : Router,
              private periodeService : PeriodeService ) {}

getPeriodes () : void {

this.periodeService.getPeriodes().then(periodes => this.periodes = periodes ) ;

}

onSelect ( periode : Periode ) {
this.selectedPeriode = periode ;  
}

ngOnInit () {
this.getPeriodes () ; 
}

gotoDetail() {
  this.router.navigate(['/periode', this.selectedPeriode.poi_id]);
}






}


































