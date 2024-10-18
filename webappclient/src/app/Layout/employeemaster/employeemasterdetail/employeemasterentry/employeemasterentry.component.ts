import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/DemoPages/UserPages/_services/user.service';
import { Employeemaster } from 'src/app/layout/domain';
import { LookUpFormBean } from 'src/app/Layout/domain/lookupform';
import { MessageService } from 'primeng/api';
import { MasterService } from 'src/app/layout/service';

@Component({
  selector: 'app-employeemasterentry',
  templateUrl: './employeemasterentry.component.html',
  styleUrls: ['./employeemasterentry.component.scss'],
  providers: []
})
export class EmployeemasterentryComponent implements OnInit {

  parentlocationList3: any[] = [];
  //localList2: any[] = [];
  empList1: any[] = [];

  map = new Map();
  error: string;
  errorMessage:string
 
  @Input()
  employeemaster = new Employeemaster();
  localList5: any[] = [];
  localList1: any[] = [];
  localList2: any[] = [];

  listLookUpFormBean: LookUpFormBean[] = new Array();
  filteredList5: any[];
  designationList: any[];
  departmentList: any[];

  lookUpFormBean5 = new LookUpFormBean();
  lookUpFormBean1 = new LookUpFormBean();
  lookUpFormBean2 = new LookUpFormBean();

  constructor(private userService: UserService, private masterService: MasterService,private messageService: MessageService) { }

  ngOnInit(): void {
    
        /////list
    this.lookUpFormBean5.query = "select id,location_name from tbl_location";
    this.lookUpFormBean1.query = "select id,designation from designation";
    this.lookUpFormBean2.query = "select id,department from department";

    this.lookUpFormBean5.listName = "LIST5";
    this.lookUpFormBean1.listName = "LIST1";
    this.lookUpFormBean2.listName = "LIST2";

    this.listLookUpFormBean.push(this.lookUpFormBean5);
    this.listLookUpFormBean.push(this.lookUpFormBean1);
    this.listLookUpFormBean.push(this.lookUpFormBean2);

    this.userService.getMultipleDropdwonValues(this.listLookUpFormBean).subscribe(
      data => {
        this.localList5 = JSON.parse(JSON.stringify(data.data.LIST5));
        this.localList1 = JSON.parse(JSON.stringify(data.data.LIST1));
        this.localList2 = JSON.parse(JSON.stringify(data.data.LIST2));
        if (this.employeemaster != null) {
          
          this.editmode();
        }
      },
      err => {
        this.map = JSON.parse(err.error).message;
      }
    );

  }

  filterList5(event) {

    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.localList5.length; i++) {
      let item = this.localList5[i];
      if (item.location_name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(item);
      }
    }

    this.filteredList5 = filtered;
  }

  designationList5(event) {

    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.localList1.length; i++) {
      let item = this.localList1[i];
      if (item.designation.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(item);
      }
    }

    this.designationList = filtered;
  }

  departmentList5(event) {

    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.localList2.length; i++) {
      let item = this.localList2[i];
      if (item.department.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(item);
      }
    }

    this.departmentList = filtered;
  }
  //this.employeehmaster.contName = this.employeehmaster.contName.id;
    //this.employeehmaster.parent = this.employeehmaster.parent.id;
    
    save() {

    let copy = JSON.parse(JSON.stringify(this.employeemaster))
  //  copy.parent = copy.parent.id;
   this.masterService.saveEmployeeMaster(copy).subscribe(
     data => {
       debugger;
       if (data.statusCode == "OK") {
       this.showSuccess();
       }
       else{
         debugger;
         this.errorMessage = data.webAppException.webAppError[0].reason;
         this.showFail(this.errorMessage);
       }
      },
      error => {
        debugger;
        console.error('error caught in component')
          this.errorMessage = error;
          this.error = error;
        //this.loading = false;
        
        this.map = JSON.parse(error.error).message;
      }
    );
    }

  public checkSelectOptionValue(value) {
    if (value == "undefined" || value == null) {
      return value;
    }
  }

  reset() {
    this.employeemaster = new Employeemaster();
  }
  
  editmode() {

    //this.employeemaster.locCode = this.empList1.find(x => x.id == this.employeemaster.locCode);
    
  }
  showSuccess() {
    // this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
    this.messageService.add({ key: 'success', severity: 'success', summary: 'success', detail: 'Data saved Successfully.' });
  }
  showFail(value:string) {
    // this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
    this.messageService.add({ key: 'error', severity: 'error', summary: 'error', detail:value });
  }
}
