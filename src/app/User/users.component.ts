import { Component } from '@angular/core';
import {UserService } from './user.service'; 
import { OnInit } from '@angular/core';
import {Router} from '@angular/router';





import {User} from './user' 
import {UserDetailComponent} from './user-detail.component'





@Component({
  moduleId : module.id,
  selector: 'my-users',
  templateUrl: 'users.component.html',
  styleUrls:['users.component.css']

})
export class UsersComponent implements OnInit { 

title = 'Liste des users'; 
selectedUser : User ; 
users : User [] ; 


constructor ( private router : Router,
              private userService : UserService ) {}

getUsers () : void {

this.userService.getUsers().then(users => this.users = users ) ;

}

onSelect ( user : User ) {
this.selectedUser = user ;  
}

ngOnInit () {
this.getUsers () ; 
}

gotoDetail() {
  this.router.navigate(['/user', this.selectedUser.id]);
}






}


































