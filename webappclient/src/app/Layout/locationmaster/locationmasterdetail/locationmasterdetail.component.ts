import { Component, OnInit, ViewChild } from '@angular/core';
import { Locationmaster } from '../../domain';
import { LocationmasterentryComponent } from './locationmasterentry/locationmasterentry.component';


@Component({
  selector: 'app-locationmasterdetail',
  templateUrl: './locationmasterdetail.component.html',
  styleUrls: ['./locationmasterdetail.component.css']
})
export class LocationmasterdetailComponent implements OnInit {
  active: number;

  locationmaster = new Locationmaster();
  constructor() { }

  ngOnInit(): void {
    this.active = 1;
  }
  editLocationmasterentry(locationmaster: any) {
    
    this.locationmaster = locationmaster;
    this.active = 1;
  }
  clear() {
    this.locationmaster = new Locationmaster();
  }
}
