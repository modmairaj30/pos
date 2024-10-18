import { Component, OnInit, ViewChild } from '@angular/core';
import { Departmentmaster } from '../../domain/departmentmaster.model';
import { DepartmententryComponent } from './departmententry/departmententry.component';


@Component({
  selector: 'app-departmentdetail',
  templateUrl: './departmentdetail.component.html',
  styleUrls: ['./departmentdetail.component.css']
})
export class DepartmentdetailComponent implements OnInit {
  active: number;

  departmentmaster = new Departmentmaster();
  constructor() { }

  ngOnInit(): void {
    this.active = 1;
  }
  editDepartmenttry(branchmaster: any) {
    
    this.departmentmaster = branchmaster;
    this.active = 1;
  }
  clear() {
    this.departmentmaster = new Departmentmaster();
  }
}
