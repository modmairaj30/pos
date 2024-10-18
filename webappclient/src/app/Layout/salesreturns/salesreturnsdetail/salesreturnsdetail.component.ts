import { Component, OnInit } from '@angular/core';
import {  Salesreturns } from '../../domain';
import { SalesInvoice, SalesInvoiceDetails } from '../../domain';

@Component({
  selector: 'app-salesreturnsdetail',
  templateUrl: './salesreturnsdetail.component.html',
  styleUrls: ['./salesreturnsdetail.component.css']
})
export class SalesreturnsdetailComponent implements OnInit {
  active: number;
  editmod: boolean=false;
  salesreturns = new Salesreturns();
  
  constructor() { }

  ngOnInit(): void {
    this.active =1;
  }

  editEntry(){
    this.active =2;
this.salesreturns = new Salesreturns();
  }

  editSalesreturnsEntry(salesreturns: any) {
    debugger;
    this.salesreturns = salesreturns;
    this.editmod=true;
    this.active = 1;
  }

  clear() {
    this.editmod=false;
    this.salesreturns = new Salesreturns();
  }

  setTab(){
    this.editmod=false;
      this.salesreturns = new Salesreturns();
  }

  editEntry1(){
    this.active =3;
    this.salesreturns = new Salesreturns();
   // this.salesreturns.invoiceDetList = this.products2;
  }

  editSalesinvoiceEntry1(salesinvoice: any) {
    this.salesreturns = salesinvoice;
    this.editmod = true;
    this.active = 1;
  }

}
