import { Component, OnInit, ViewChild } from '@angular/core';
import { Itemmaster } from '../../domain/itemmaster.model';
import { AuthormasterentryComponent } from './authormasterentry/authormasterentry.component';


@Component({
  selector: 'app-authormasterdetail',
  templateUrl: './authormasterdetail.component.html',
  styleUrls: ['./authormasterdetail.component.css']
})
export class AuthormasterdetailComponent implements OnInit {
  active: number;

  itemmaster = new Itemmaster();
  constructor() { }

  ngOnInit(): void {
    this.active = 1;
  }
  editBranchentry(itemmaster: any) {
    
    this.itemmaster = itemmaster;
    this.active = 1;
  }
  clear() {
    this.itemmaster = new Itemmaster();
  }
}
