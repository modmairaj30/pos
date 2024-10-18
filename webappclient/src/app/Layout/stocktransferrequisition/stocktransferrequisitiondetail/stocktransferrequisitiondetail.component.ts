import { Component, OnInit } from '@angular/core';
import { StockRequisition } from '../../domain';


@Component({
  selector: 'app-stocktransferrequisitiondetail',
  templateUrl: './stocktransferrequisitiondetail.component.html',
  styleUrls: ['./stocktransferrequisitiondetail.component.css']
})
export class StocktransferrequisitiondetailComponent implements OnInit {
  active: number;
  editmod: boolean=false;
  stockRequisition = new StockRequisition();
  constructor() { }

  ngOnInit(): void {
   // routerLink="stocks/stocktransferrequisition"
    this.active = 1;
  }
  editStockTransferRequistionEntry(stockRequisition: any) {
    this.stockRequisition = stockRequisition;
    this.editmod=true;
    this.active = 1;
  }
  editEntry(){
    this.active =2;
this.stockRequisition = new StockRequisition();
  }
  clear() {
    this.editmod=false;
    this.stockRequisition = new StockRequisition();
  }
setTab(){
  this.editmod=false;
    this.stockRequisition = new StockRequisition();
}
}