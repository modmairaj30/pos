import { Component, OnInit } from '@angular/core';
import { Payment } from '../../domain';


@Component({
  selector: 'app-paymentsdetail',
  templateUrl: './paymentsdetail.component.html',
  styleUrls: ['./paymentsdetail.component.css']
})
export class PaymentsdetailComponent implements OnInit {
  active: number;
  editmod: boolean=false;
  payment = new Payment();
  constructor() { }

  ngOnInit(): void {
    this.active = 1;
  }
  editPaymentEntry(payment: any) {
    this.editmod=true;
    this.payment = payment;
    this.active = 1;
  }
  editEntry($event){
    this.active =2;
   // this.editmod=false;
    this.payment = new Payment();
  }
  clear() {
    this.editmod=false;
    this.payment = new Payment();
  }
  setTab(){
    this.editmod=false;
    this.payment = new Payment();
  }
}
