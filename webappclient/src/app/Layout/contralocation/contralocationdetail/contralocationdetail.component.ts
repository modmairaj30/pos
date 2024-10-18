import { Component, OnInit, ViewChild } from '@angular/core';
import { ContraLocationmaster } from '../../domain/contralocationmsater.model';
import { ContralocationentryComponent } from './contralocationentry/contralocationentry.component';


@Component({
  selector: 'app-contralocationdetail',
  templateUrl: './contralocationdetail.component.html',
  styleUrls: ['./contralocationdetail.component.css']
})
export class ContralocationdetailComponent implements OnInit {
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
