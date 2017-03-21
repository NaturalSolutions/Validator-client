import { Injectable } from '@angular/core';

import {GeneralType} from './General-type';
import {GENERALTYPES} from './mock-general-types'; 





@Injectable()
export class GeneralTypeService {

getGeneralTypes () : Promise<GeneralType[]> {
return Promise.resolve(GENERALTYPES); 
}

getGeneralType(id : number) : Promise<GeneralType> {
    return this.getGeneralTypes()
    .then(types => types.find ( type => type.id ===  id));
}




}