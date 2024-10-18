import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductGroupMaster } from '../../domain/ProductGroupMaster.model';
import { ProductgroupsentryComponent } from './productgroupsentry/productgroupsentry.component';


@Component({
  selector: 'app-productgroupsdetail',
  templateUrl: './productgroupsdetail.component.html',
  styleUrls: ['./productgroupsdetail.component.css']
})
export class ProductgroupsdetailComponent implements OnInit {
  active: number;

  productGroupMaster = new ProductGroupMaster();
  constructor() { }

  ngOnInit(): void {
    this.active = 1;
  }
  editBranchentry(productGroupMaster: any) {
    
    this.productGroupMaster = productGroupMaster;
    this.active = 1;
  }
  clear() {
    this.productGroupMaster = new ProductGroupMaster();
  }
}
