import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


import {Poi} from './poi'; 
import {POIS} from './mock-pois';  // À commenter aprés que getPoi with HTTP MARCHE !! 





@Injectable()
export class PoiService {


// private poisUrl = 'http://213.32.18.30:5000/api/pois';  // URL to web api


 private poisUrl = 'http://127.0.0.1:5000/api/pois'; // URL en local 

  constructor(private http: Http) { }

  getPois(): Promise<Poi[]> {

    return this.http.get(this.poisUrl)
               .toPromise()
               .then( response => response.json()["pois"] as Poi[])
               .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getPoi(id: number): Promise<Poi> {
  const url = `${this.poisUrl}/${id}`;

 this.http.get(url)
    .toPromise()
    .then(response => console.log ( " ServeurResponse ", response.json()["poi"][0] as Poi)); 


  return this.http.get(url)
    .toPromise()
    .then(response => response.json()["poi"][0] as Poi)
    .catch(this.handleError);
}


private headers = new Headers({'Content-Type': 'application/json'});

  
  

  create(name :   string, longitude    : number , latitude : number ,  type_id : number , 	name_fr:string,
	visit_time_min: number , visit_time_max: number , 	price_min: string , price_max: string , street: string, postal_code:string, 
  phone:string, email:string, website:string, resa_link:string, url_img1:string, url_img2:string, desc:string, desc_fr:string,
	withchild: boolean ): Promise<Poi> {

    return this.http
      .post(this.poisUrl, JSON.stringify({name: name, longitude : longitude, latitude : latitude, typespois_id : type_id,
      name_fr : name_fr, visit_time_min : visit_time_min, visit_time_max : visit_time_max,
      price_min : price_min, price_max : price_max, street : street, postal_code : postal_code,
      phone : phone, mail : email, website : website, resa_link : resa_link, 
      url_img1 : url_img2, desc : desc, desc_fr : desc_fr, withchild : withchild}),
       {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.poisUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }


  update(poi : Poi, name: string ): Promise<Poi> {

    const url = `${this.poisUrl}/${poi.id}`;
    return this.http
      .patch(url, JSON.stringify({ id : poi.id, name: name }), {headers: this.headers})
      .toPromise()
      .then(() => poi)
      .catch(this.handleError);

  }


}