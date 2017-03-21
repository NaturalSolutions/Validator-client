import { Injectable } from '@angular/core';

import {Type} from './type'; 
import {TYPES} from './mock-types'; 





@Injectable()
export class TypeService {

getTypes () : Promise<Type[]> {
return Promise.resolve(TYPES); 
}

getType(id : number) : Promise<Type> {
    return this.getTypes()
    .then(types => types.find ( type => type.id ===  id));
}




}