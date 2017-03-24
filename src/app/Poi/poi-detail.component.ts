import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { PoiService } from './poi.service';



import { Poi } from './poi'


import 'rxjs/add/operator/switchMap';



@Component({
  moduleId: module.id,
  selector: 'my-poi-detail',
  templateUrl: 'poi-detail.component.html',
  styleUrls: ['./poi-detail.component.css']
})
export class PoiDetailComponent implements OnInit {
  @Input()
  poi: Poi;

  constructor(
    private poiService: PoiService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {

    this.route.params.switchMap((params: Params) => this.poiService.getPoi(+params['id']))
      .subscribe(poi => this.poi = poi);

  }

  goBack() {
    this.location.back();
  }

  onBtnEditClick() {
    this.router.navigate(['/form', this.poi.id]);
  }

  save(name: string): void {
    this.poiService.update(this.poi)
      .then(() => this.goBack());
  }



}