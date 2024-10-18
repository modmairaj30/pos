import { Component, OnInit, ViewChild } from '@angular/core';
import { ContraLocationmaster } from '../../domain/contralocationmsater.model';
import { MembershipentryComponent } from './membershipentry/membershipentry.component';


@Component({
  selector: 'app-membershipdetail',
  templateUrl: './membershipdetail.component.html',
  styleUrls: ['./membershipdetail.component.css']
})
export class MembershipdetailComponent implements OnInit {
  active: number;

  contraLocationmaster = new ContraLocationmaster();
  constructor() { }

  ngOnInit(): void {
    this.active = 1;
  }
  editContralocationentry(contraLocationmaster: any) {
    
    this.contraLocationmaster = contraLocationmaster;
    this.active = 1;
  }
  clear() {
    this.contraLocationmaster = new ContraLocationmaster();
  }
}
