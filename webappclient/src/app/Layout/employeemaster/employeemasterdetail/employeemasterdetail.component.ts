import { Component, OnInit, ViewChild } from '@angular/core';
import { Employeemaster } from '../../domain';



@Component({
  selector: 'app-employeemasterdetail',
  templateUrl: './employeemasterdetail.component.html',
  styleUrls: ['./employeemasterdetail.component.css']
})
export class EmployeemasterdetailComponent implements OnInit {
  active: number;

  employeemaster = new Employeemaster();
  constructor() { }

  ngOnInit(): void {
    this.active = 1;
  }
  editEmployeemasterentry(employeemaster: any) {
    
    this.employeemaster = employeemaster;
    this.active = 1;
  }
  clear() {
    this.employeemaster = new Employeemaster();
  }
}
