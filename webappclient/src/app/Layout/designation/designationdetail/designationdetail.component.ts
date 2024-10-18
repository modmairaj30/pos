import { Component, OnInit, ViewChild } from '@angular/core';
import { Designationmaster } from '../../domain/designationmaster.model';
import { DesignationentryComponent } from './designationentry/designationentry.component';


@Component({
  selector: 'app-designationdetail',
  templateUrl: './designationdetail.component.html',
  styleUrls: ['./designationdetail.component.css']
})
export class DesignationdetailComponent implements OnInit {
  active: number;

  designationmaster = new Designationmaster();
  constructor() { }

  ngOnInit(): void {
    this.active = 1;
  }
  editBranchentry(designationmaster: any) {
    
    this.designationmaster = designationmaster;
    this.active = 1;
  }
  clear() {
    this.designationmaster = new Designationmaster();
  }
}
