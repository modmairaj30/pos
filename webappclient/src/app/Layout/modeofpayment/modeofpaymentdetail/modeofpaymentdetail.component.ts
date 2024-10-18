import { Component, OnInit, ViewChild } from '@angular/core';
import { PaymentModemaster } from '../../domain/paymentmodemaster.model';
import { ModeofpaymententryComponent } from './modeofpaymententry/modeofpaymententry.component';


@Component({
  selector: 'app-modeofpaymentdetail',
  templateUrl: './modeofpaymentdetail.component.html',
  styleUrls: ['./modeofpaymentdetail.component.css']
})
export class ModeofpaymentdetailComponent implements OnInit {
  active: number;

  paymentModemaster = new PaymentModemaster();
  constructor() { }

  ngOnInit(): void {
    this.active = 1;
  }
  editBranchentry(paymentModemaster: any) {
    
    this.paymentModemaster = paymentModemaster;
    this.active = 1;
  }
  clear() {
    this.paymentModemaster = new PaymentModemaster();
  }
}
