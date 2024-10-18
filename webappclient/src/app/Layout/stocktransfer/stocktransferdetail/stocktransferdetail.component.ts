import { Component, OnInit } from '@angular/core';
import { StockTransfer } from '../../domain';
import { StockRequisition } from '../../domain';


@Component({
  selector: 'app-stocktransferdetail',
  templateUrl: './stocktransferdetail.component.html',
  styleUrls: ['./stocktransferdetail.component.css']
})
export class stocktransferdetailComponent implements OnInit {
  active: number;
  editmod: boolean=false;
  stocktransfer = new StockTransfer();
  stockRequisition = new StockRequisition();
  shareData :any[] =[];
  constructor() { }

  ngOnInit(): void {
   // routerLink="stocks/stocktransferrequisition"
    this.active = 1;
  }
  editstocktransferEntry(stocktransfer: any) {
    this.stocktransfer = stocktransfer;
    this.editmod=true;
    this.active = 1;
  }
  editEntry(){
    this.active =2;
this.stocktransfer = new StockTransfer();
  }
  clear() {
    this.editmod=false;
    this.stocktransfer = new StockTransfer();
  }
setTab(){
  this.editmod=false;
    this.stocktransfer = new StockTransfer();
}
editStockTransferRequistionEntry(stocktransfer: any) {
  this.stocktransfer = stocktransfer;
  /*this.stockRequisition.id=null;
  this.stockRequisition.invNo=stockRequisition.docNo;
  this.stockRequisition.purInvdt=stockRequisition.purInvdt;

  this.stockRequisition.docNo="";
  for( let i= 0; i < this.stockRequisition.purchaseInvoiveDetList.length; i++){ 
    this.stockRequisition.purchaseInvoiveDetList[i].id=null;
    this.stockRequisition.purchaseInvoiveDetList[i].baseId=null;
  }*/
  this.editmod = true;
  this.active = 1;
}
}