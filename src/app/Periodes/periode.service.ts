import { Injectable } from '@angular/core';

import {Periode} from './Periode'; 
import {PERIODS} from './mock-periodes'; 





@Injectable()
export class PeriodeService {

getPeriodes () : Promise<Periode[]> {
return Promise.resolve(PERIODS); 
}

getPeriode(id : number) : Promise<Periode> {
    return this.getPeriodes()
    .then(periodes => periodes.find ( periode => periode.poi_id ===  id));
}




}