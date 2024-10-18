import { Component, OnInit } from '@angular/core';
import {  Bomtransaction } from '../../domain';


@Component({
  selector: 'app-bomtransactiondetail',
  templateUrl: './bomtransactiondetail.component.html',
  styleUrls: ['./bomtransactiondetail.component.css']
})
export class BomtransactiondetailComponent implements OnInit {
  active: number;
  editmod: boolean=false;
  bomtransaction = new Bomtransaction();
  
  constructor() { }

  ngOnInit(): void {
    this.active =1;
  }

  editEntry(){
    this.active =2;
this.bomtransaction = new Bomtransaction();
  }

  editBomtransactionEntry(bomtransaction: any) {
    debugger;
    this.bomtransaction = bomtransaction;
    this.editmod=true;
    this.active = 1;
  }

  clear() {
    this.editmod=false;
    this.bomtransaction = new Bomtransaction();
  }

  setTab(){
    this.editmod=false;
      this.bomtransaction = new Bomtransaction();
  }

  editEntry1(){
    this.active =3;
    this.bomtransaction = new Bomtransaction();
   // this.bomtransaction.invoiceDetList = this.products2;
  }

  editSalesinvoiceEntry1(salesinvoice: any) {
    this.bomtransaction = salesinvoice;
    this.editmod = true;
    this.active = 1;
  }

}
