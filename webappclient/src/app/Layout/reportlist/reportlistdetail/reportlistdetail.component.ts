import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportlistdetail',
  templateUrl: './reportlistdetail.component.html',
  styleUrls: ['./reportlistdetail.component.sass']
})
export class ReportlistdetailComponent implements OnInit {
  active: number;

  constructor() { }

  ngOnInit(): void {
    this.active = 1;
  }

}
