import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/DemoPages/UserPages/_services/user.service';
import { PurchaseInvoice } from '../../domain';


@Component({
  selector: 'app-purchaseinvoicedetail',
  templateUrl: './purchaseinvoicedetail.component.html',
  styleUrls: ['./purchaseinvoicedetail.component.css']
})
export class PurchaseinvoicedetailComponent implements OnInit {
  active: number;
  editmod: boolean = false;
  purchaseInvoice = new PurchaseInvoice();
  shareData :any[] =[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // routerLink="stocks/stocktransferrequisition"
   
    this.active = 1;
  }
 
  editPurchaseInvoiceEntry(purchaseInvoice: any) {
    this.purchaseInvoice = purchaseInvoice;
    this.editmod = true;
    this.active = 1;
  }
  editEntry() {
    this.active = 2;
this.purchaseInvoice = new PurchaseInvoice();

  }
  clear() {
    this.editmod = false;
    this.purchaseInvoice = new PurchaseInvoice();
  }
setTab(){
  this.editmod=false;
    this.purchaseInvoice = new PurchaseInvoice();
   }
}