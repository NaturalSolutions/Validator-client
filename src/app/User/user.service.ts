import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {User} from './user'; 
import {USERS} from './mock-user';  // À commenter aprés que getPoi with HTTP MARCHE !! 





@Injectable()
export class UserService {
/*



getUsers () : Promise<User[]> {
return Promise.resolve(USERS); 
}

getUser(id : number) : Promise<User> {
    return this.getUsers()
    .then(users => users.find ( user => user.idUser ===  id));
}
*/

private usersUrl = 'http://213.32.18.30:5000/api/users';  // URL to web api


//private usersUrl = 'http://127.0.0.1:5000/api/users';

  constructor(private http: Http) { }

  getUsers(): Promise<User[]> {

    this.http.get(this.usersUrl)
               .toPromise()
               .then( (response) => console.log (" ServeurResponse ",response.json()["users"] ));


    return this.http.get(this.usersUrl)
               .toPromise()
               .then( response => response.json()["users"] as User[])
               .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getUser(id: number): Promise<User> {
  
  const url = `${this.usersUrl}/${id}`;
  return this.http.get(url)
    .toPromise()
    .then(response => response.json()["user"][0] as User)
    .catch(this.handleError);
}












}