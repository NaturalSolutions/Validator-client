import { Injectable } from '@angular/core';

import {Badge} from './badge'; 
import {BADGES} from './mock-badges'; 





@Injectable()
export class BadgeService {

getBadges () : Promise<Badge[]> {
return Promise.resolve(BADGES); 
}

getBadge(id : number) : Promise<Badge> {
    return this.getBadges()
    .then(badges => badges.find ( badge => badge.id ===  id));
}




}