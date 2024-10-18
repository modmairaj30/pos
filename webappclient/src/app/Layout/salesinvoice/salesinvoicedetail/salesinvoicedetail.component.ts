import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SalesInvoice, SalesInvoiceDetails } from '../../domain';

@Component({
  selector: 'app-salesinvoicedetail',
  templateUrl: './salesinvoicedetail.component.html',
  styleUrls: ['./salesinvoicedetail.component.css']
})




export class SalesinvoicedetailComponent implements OnInit {
  active: number;
  editmod: boolean=false;
  salesinvoice = new SalesInvoice();
  
  products2: SalesInvoiceDetails[] = new Array();
  constructor() { }

  ngOnInit(): void {
    this.active =1;
  }

  editEntry(){
    this.active =3;
    this.salesinvoice = new SalesInvoice();
    this.salesinvoice.invoiceDetList = this.products2;
  }

  editSalesinvoiceEntry(salesinvoice: any) {
    this.salesinvoice = salesinvoice;
    this.editmod = true;
    this.active = 1;
  }
  

  clear() {
    this.editmod=false;
    this.salesinvoice = new SalesInvoice();
  }

  setTab(){
    this.editmod=false;
     this.salesinvoice = new SalesInvoice();
  }

}
