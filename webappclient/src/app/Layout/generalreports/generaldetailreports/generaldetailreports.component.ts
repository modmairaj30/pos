import { Component, OnInit } from '@angular/core';
import { StockVerification } from '../../domain';


@Component({
  selector: 'app-generaldetailreports',
  templateUrl: './generaldetailreports.component.html',
  styleUrls: ['./generaldetailreports.component.css']
})
export class GeneraldetailreportsComponent implements OnInit {
  active: number;
 
  constructor() { }

  ngOnInit(): void {
      this.active = 1;
  }
 
}