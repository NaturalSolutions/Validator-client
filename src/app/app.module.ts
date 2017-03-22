import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}  from '@angular/forms';
import {RouterModule} from '@angular/router'; 
import {AppRoutingModule} from './app-routing.module';
import { MaterialModule } from '@angular/material';
import 'hammerjs';



//Poi 

import {PoiService } from './Poi/poi.service';
import {PoiDetailComponent} from './Poi/poi-detail.component';
import {PoisComponent} from './Poi/pois.component';
import {PoisFormComponent} from './Poi/poi-form.component';

//User

import {UserService} from './User/user.service';
import {UserDetailComponent} from './User/user-detail.component';
import {UsersComponent} from './User/users.component';


//Types 

import {TypeService} from './Types/type.service';
import {TypeDetailComponent} from './Types/type-detail.component';
import {TypesComponent} from './Types/types.component';
import {TypeMenuComponent} from './Types/type-menu.component';

//Periodes 

import {PeriodeService} from './Periodes/periode.service';
import {PeriodeDetailComponent} from './Periodes/periode-detail.component';
import {PeriodesComponent} from './Periodes/periodes.component'; 


//GeneralTypes

import {GeneralTypeService} from './GeneralTypes/general-type.service';
import {GeneralTypeDetailComponent} from './GeneralTypes/general-type-detail.component';
import {GeneralTypesComponent} from './GeneralTypes/general-types.component'; 


//Badges

import {BadgeService} from './Badge/badge.service';
import {BadgeDetailComponent} from './Badge/Badge-detail.component';
import {BadgesComponent} from './Badge/Badges.component'; 

//header 

import { HeaderComponent }  from './Pagination/headerProto.component'







import { AppComponent }  from './app.component';
import {DashboardComponent} from './Dashboard/dashboard.component'; 




@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  AppRoutingModule,
                  MaterialModule
                ],
  declarations: [ AppComponent,
                  DashboardComponent,
                  PoiDetailComponent,
                  PoisComponent,
                  UserDetailComponent,
                  UsersComponent,
                  TypeDetailComponent,
                  TypesComponent,
                  PeriodeDetailComponent,
                  PeriodesComponent,
                  GeneralTypeDetailComponent,
                  GeneralTypesComponent,
                  BadgeDetailComponent,
                  BadgesComponent,
                  TypeMenuComponent,
                  PoisFormComponent,
                  HeaderComponent],
  bootstrap:    [ AppComponent ],
  providers:    [PoiService,
                 UserService,
                 TypeService,
                 PeriodeService,
                 GeneralTypeService,
                 BadgeService,
                 PoisComponent,
                 TypeMenuComponent ]
})
export class AppModule { }
