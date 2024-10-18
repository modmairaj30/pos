import { Component, OnInit } from '@angular/core';
import { StockVerification } from '../../domain';


@Component({
  selector: 'app-stockverificationdetailreports',
  templateUrl: './stockverificationdetailreports.component.html',
  styleUrls: ['./stockverificationdetailreports.component.css']
})
export class StockverificationdetailreportsComponent implements OnInit {
  active: number;
 
  constructor() { }

  ngOnInit(): void {
      this.active = 1;
  }
 
}