import { Component, OnInit } from '@angular/core';
import { StockReceipts } from '../../domain';


@Component({
  selector: 'app-stockreceiptsdetail',
  templateUrl: './stockreceiptsdetail.component.html',
  styleUrls: ['./stockreceiptsdetail.component.css']
})
export class StockreceiptsdetailComponent implements OnInit {
  active: number;
  editmod: boolean = false;
  stockReceipts = new StockReceipts();
  constructor() { }

  ngOnInit(): void {
   // routerLink="stocks/stocktransferrequisition"
    this.active = 1;
  }
  editStockReceipts(stockReceipts: any) {
    this.stockReceipts= stockReceipts;
    this.editmod = true;
    this.active = 1;
  }
  editEntry() {
    this.active = 2;
this.stockReceipts = new StockReceipts();
  }
  clear() {
    this.editmod = false;
    this.stockReceipts = new StockReceipts();
  }
setTab(){
  this.editmod=false;
    this.stockReceipts = new StockReceipts();
}
editStockTransferEntry1(stockReceipts: any) {
  debugger;
  this.stockReceipts = stockReceipts;
  this.stockReceipts.fromLocation=stockReceipts.locationId;
  this.editmod = true;
  this.active = 1;
}
}