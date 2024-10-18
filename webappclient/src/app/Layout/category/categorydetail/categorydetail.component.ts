import { Component, OnInit, ViewChild } from '@angular/core';
import { Categorymaster } from '../../domain/categoryMaster.model';
import { CategoryentryComponent } from './categoryentry/categoryentry.component';


@Component({
  selector: 'app-categorydetail',
  templateUrl: './categorydetail.component.html',
  styleUrls: ['./categorydetail.component.css']
})
export class CategorydetailComponent implements OnInit {
  active: number;

  categorymaster = new Categorymaster();
  constructor() { }

  ngOnInit(): void {
    this.active = 1;
  }
  editBranchentry(categorymaster: any) {
    
    this.categorymaster = categorymaster;
    this.active = 1;
  }
  clear() {
    this.categorymaster = new Categorymaster();
  }
}
