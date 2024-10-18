import { Component, OnInit } from '@angular/core';
import { Purchasereturn } from '../../domain';
import { PurchaseInvoice } from '../../domain';

@Component({
  selector: 'app-purchasereturnsdetail',
  templateUrl: './purchasereturnsdetail.component.html',
  styleUrls: ['./purchasereturnsdetail.component.css']
})
export class PurchasereturnsdetailComponent implements OnInit {
  active: number;
  editmod: boolean = false;
  purchasereturn = new Purchasereturn();
  purchaseInvoice = new PurchaseInvoice();
  shareData :any[] =[];
  constructor() { }

  ngOnInit(): void {
    // routerLink="stocks/stocktransferrequisition"
    this.active = 1;
  }
  editPurchasereturnEntry(purchasereturn: any) {
    this.purchasereturn = purchasereturn;
    this.editmod = true;
    this.active = 1;
  }
  editPurchaseInvoiceEntry(purchasereturn: any) {
    this.purchasereturn = purchasereturn;
    this.purchasereturn.id=null;
    this.purchasereturn.invNo=purchasereturn.docNo;
    this.purchasereturn.purInvdt=purchasereturn.purInvdt;

    this.purchasereturn.docNo="";
    for( let i= 0; i < this.purchasereturn.purchaseInvoiveDetList.length; i++){ 
      this.purchasereturn.purchaseInvoiveDetList[i].id=null;
      this.purchasereturn.purchaseInvoiveDetList[i].baseId=null;
    }
    this.editmod = true;
    this.active = 1;
  }

  

  editEntry() {
    this.active = 2;
    this.purchasereturn = new Purchasereturn();
  }
  clear() {
    this.editmod = false;
    this.purchasereturn = new Purchasereturn();
    
  }
  setTab() {
    this.editmod = false;
    this.purchasereturn = new Purchasereturn();
  }
}