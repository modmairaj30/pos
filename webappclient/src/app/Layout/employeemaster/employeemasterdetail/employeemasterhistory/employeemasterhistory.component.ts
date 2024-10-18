import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { MasterService } from 'src/app/layout/service';



@Component({
  selector: 'app-employeemasterhistory',
  templateUrl: './employeemasterhistory.component.html',
  styleUrls: ['./employeemaster.scss'],
  providers: []
})
export class EmployeemasterHistoryComponent implements OnInit {
  selectedRowData: any[];
  user: any = [];
  content: any[] = [];
  cols: any[];

  _selectedColumns: any[];

  @Output()
  editEmployeemasterentry = new EventEmitter();

  constructor(private masterService: MasterService) {

  }
  ngOnInit(): void {
    this.selectedRowData = [];
    this.masterService.getAllEmployees().subscribe(
      data => {
        
        this.content = JSON.parse(JSON.stringify(data.data));
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'title', header: 'Title' },
      { field: 'docNo', header: 'Doc No' },
      { field: 'firstName', header: 'First Name' },
      { field: 'lastName', header: 'Last Name' },
      { field: 'dob', header: 'DOB' },
      { field: 'doj', header: 'DOJ' },
      { field: 'dept', header: 'Dept' },
      { field: 'desig', header: 'Desig' },
      { field: 'employNo', header: 'Employ No' },
      ];
      this._selectedColumns = this.cols;
  }

  editProduct(product: any) {
    this.editEmployeemasterentry.emit(product);
  }
  onTableHeaderCheckboxToggle(event: any) {
  }
  @Input() get selectedColumns(): any[] {
    return this._selectedColumns;
  }

  set selectedColumns(val: any[]) {
    //restore original order
    this._selectedColumns = this.cols.filter(col => val.includes(col));
  }

}


