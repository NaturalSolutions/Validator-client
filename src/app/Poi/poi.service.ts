import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


import {Poi} from './poi'; 
import {POIS} from './mock-pois';  // À commenter aprés que getPoi with HTTP MARCHE !! 





@Injectable()
export class PoiService {


/*

getPois () : Promise<Poi[]> {
return Promise.resolve(POIS); 
}



getPoi(id : number) : Promise<Poi> {
    return this.getPois()
    .then(pois => pois.find ( poi => poi.externalId ===  id));
}


*/


private poisUrl = 'http://213.32.18.30:5000/api/pois';  // URL to web api


//private poisUrl = 'http://127.0.0.1:5000/api/pois';

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


  create(name: string, typespois_id : number ): Promise<Poi> {

    return this.http
      .post(this.poisUrl, JSON.stringify({name: name, typespois_id : typespois_id}),
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




/*

//////////////////////////////////////////////////////////////////




update(poi: Poi): Promise<Poi> {
  const url = `${this.poisUrl}/${poi.id}`;
  return this.http
    .put(url, JSON.stringify(poi), {headers: this.headers})
    .toPromise()
    .then(() => poi)
    .catch(this.handleError);
}


//////////////////////////////////////////////////////////////////





*/









}