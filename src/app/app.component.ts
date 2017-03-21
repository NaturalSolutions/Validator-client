import { Component } from '@angular/core';
import {PoisComponent} from './Poi/pois.component';




@Component ( {
    moduleId : module.id,
    selector : 'application',
    template:`<h1>{{title}}</h1>
    <nav>
    <a routerLink="/dashboard">Dashboard</a>
    <a routerLink="/pois">Pois</a>
    <a routerLink="/users">Users</a>
    <a routerLink="/types">Types</a>
    <a routerLink="/periodes">Periodes</a>
    <a routerLink="/generalTypes">General Types</a>
    <a routerLink="/badges">Badges</a>
    <md-slide-toggle>slide</md-slide-toggle>
    </nav>
    
    <router-outlet> </router-outlet>
    `,
    styleUrls : ['app.component.css']
    
})
export class AppComponent {

title = 'Your CHOICE :';

}

