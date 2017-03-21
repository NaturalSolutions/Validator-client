import { NgModule }      from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


//Dashboard
import {DashboardComponent} from './Dashboard/dashboard.component'; 

//POI
import {PoiDetailComponent} from './Poi/poi-detail.component';
import {PoisComponent} from './Poi/pois.component';

//User
import {UserDetailComponent} from './User/user-detail.component';
import {UsersComponent} from './User/users.component';

//Types 

import {TypeDetailComponent} from './Types/type-detail.component';
import {TypesComponent} from './Types/types.component';

//Periodes 

import {PeriodeDetailComponent} from './Periodes/periode-detail.component';
import {PeriodesComponent} from './Periodes/periodes.component'; 


//GeneralTypes

import {GeneralTypeDetailComponent} from './GeneralTypes/general-type-detail.component';
import {GeneralTypesComponent} from './GeneralTypes/general-types.component'; 

//Badges

import {BadgeDetailComponent} from './Badge/Badge-detail.component';
import {BadgesComponent} from './Badge/Badges.component'; 


const routes : Routes = [

{ path: 'pois', component : PoisComponent},

{ path: 'users', component : UsersComponent},

{ path: 'types', component : TypesComponent},

{ path: 'periodes', component : PeriodesComponent},

{ path: 'generalTypes', component : GeneralTypesComponent},

{ path: 'badges', component : BadgesComponent},

{ path: 'dashboard', component : DashboardComponent},

{ path : '', redirectTo : '/dashboard', pathMatch : 'full'},

{ path : 'detail/:id', component : PoiDetailComponent},

{ path : 'user/:id', component : UserDetailComponent},

{ path : 'type/:id', component : TypeDetailComponent},

{ path : 'periode/:id', component : PeriodeDetailComponent},

{ path : 'generalType/:id', component : GeneralTypeDetailComponent},

{ path : 'badge/:id', component : BadgeDetailComponent},


];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}