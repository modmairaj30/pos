import { Component, OnInit } from '@angular/core';
import { StockVerification } from '../../domain';


@Component({
  selector: 'app-stockverificationdetail',
  templateUrl: './stockverificationdetail.component.html',
  styleUrls: ['./stockverificationdetail.component.css']
})
export class StockverificationdetailComponent implements OnInit {
  active: number;
  editmod: boolean=false;
  stockVerification = new StockVerification();
  constructor() { }

  ngOnInit(): void {
   // routerLink="stocks/stocktransferrequisition"
    this.active = 1;
  }
  editStockVerificationEntry(stockVerification: any) {
    this.stockVerification = stockVerification;
    this.editmod=true;
    this.active = 1;
  }
  editEntry(){
    this.active =2;
this.stockVerification = new StockVerification();
  }
  clear() {
    this.editmod=false;
    this.stockVerification = new StockVerification();
  }
setTab(){
  this.editmod=false;
    this.stockVerification = new StockVerification();
}
}