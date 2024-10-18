import { Component, OnInit } from '@angular/core';
import { Receipt } from '../../domain';


@Component({
  selector: 'app-receiptsdetail',
  templateUrl: './receiptsdetail.component.html',
  styleUrls: ['./receiptsdetail.component.css']
})
export class ReceiptsdetailComponent implements OnInit {
  active: number;
  editmod: boolean=false;
  receipt = new Receipt();
  constructor() { }

  ngOnInit(): void {
    this.active = 1;
  }
  editReceiptEntry(receipt: any) {
    this.editmod=true;
    this.receipt = receipt;
    this.active = 1;
  }
  editEntry($event){
    this.active =2;
   // this.editmod=false;
    this.receipt = new Receipt();
  }
  clear() {
    this.editmod=false;
    this.receipt = new Receipt();
  }
  setTab(){
    this.editmod=false;
    this.receipt = new Receipt();
  }
}
