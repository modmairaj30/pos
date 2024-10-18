import { Component, OnInit, ViewChild, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { UserService } from 'src/app/DemoPages/UserPages/_services/user.service';
import { LookUpFormBean } from 'src/app/Layout/domain/lookupform';
import { MasterService } from 'src/app/layout/service';
import { PurchaseInvoice, PurchaseInvoiceDetail } from 'src/app/layout/domain';
import { MessageService } from 'primeng/api';
import { AutoComplete } from 'primeng/autocomplete';

@Component({
  selector: 'app-initiatestocktransfersentry',
  templateUrl: './initiatestocktransfersentry.component.html',//
  styleUrls: ['./initiatestocktransfersentry.component.scss']
})
export class InitiatestocktransfersentryComponent implements OnInit {

  @ViewChild('detailtable') detailtable;




  dateValue: Date;
  sno: number = 0;
  values = [];
  parentlocationList3: any[] = [];
  localList2: any[] = [];
  empList1: any[] = [];
  localList4: any[] = [];
  localList5: any[] = [];
  localList6: any[] = [];
  map = new Map();

  filteredEmpList1: any[];
  filteredEmpList2: any[];
  filteredParentlocationList3: any[];
  filteredList5: any[];
  filteredList6: any[];
  filteredList4: any[];

  lookUpFormBean1 = new LookUpFormBean();
  lookUpFormBean2 = new LookUpFormBean();
  lookUpFormBean3 = new LookUpFormBean();
  lookUpFormBean4 = new LookUpFormBean();
  lookUpFormBean5 = new LookUpFormBean();
  lookUpFormBean6 = new LookUpFormBean();
  listLookUpFormBean: LookUpFormBean[] = new Array();

  constructor(private userService: UserService, private masterService: MasterService) { }

  ngOnInit(): void {
    /////list
    this.lookUpFormBean1.query = "select id,location_name,location_code from tbl_location";
    this.lookUpFormBean2.query = "select id,location_name,location_code from tbl_location";
    this.lookUpFormBean3.query = " select id,first_name,last_name from employee_master";
    this.lookUpFormBean4.query = "SELECT id, prod_name,product_code,author,product_rate, discount, supp_name, publisher_name FROM title_view";
    this.lookUpFormBean5.query = "select id,location_name from tbl_location";
    this.lookUpFormBean6.query = "select id,location_code,location_name from location";

    this.lookUpFormBean1.listName = "LIST1";
    this.lookUpFormBean2.listName = "LIST2";
    this.lookUpFormBean3.listName = "LIST3";
    this.lookUpFormBean4.listName = "LIST4";
    this.lookUpFormBean5.listName = "LIST5";
    this.lookUpFormBean6.listName = "LIST6";

    this.listLookUpFormBean.push(this.lookUpFormBean1);
    this.listLookUpFormBean.push(this.lookUpFormBean2);
    this.listLookUpFormBean.push(this.lookUpFormBean3);
    this.listLookUpFormBean.push(this.lookUpFormBean4);
    this.listLookUpFormBean.push(this.lookUpFormBean5);
    this.listLookUpFormBean.push(this.lookUpFormBean6);


    this.userService.getMultipleDropdwonValues(this.listLookUpFormBean).subscribe(
      data => {
        this.empList1 = JSON.parse(JSON.stringify(data.data.LIST1));
        this.localList2 = JSON.parse(JSON.stringify(data.data.LIST2));
        this.parentlocationList3 = JSON.parse(JSON.stringify(data.data.LIST3));

        this.localList4 = JSON.parse(JSON.stringify(data.data.LIST4));
        this.localList5 = JSON.parse(JSON.stringify(data.data.LIST5));
        this.localList6 = JSON.parse(JSON.stringify(data.data.LIST6));
       
      },
      err => {
        this.map = JSON.parse(err.error).message;
      }
    );

  }

  filterEmpList1(event) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.empList1.length; i++) {
      let item = this.empList1[i];
      if (item.location_name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(item);
      }
    }

    this.filteredEmpList1 = filtered;
  }

  filterEmpList2(event) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.localList2.length; i++) {
      let item = this.empList1[i];
      if (item.location_name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(item);
      }
    }

    this.filteredEmpList2 = filtered;
  }

  filterParentlocationList3(event) {

    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.parentlocationList3.length; i++) {
      let item = this.parentlocationList3[i];
      if (item.first_name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(item);
      }
    }

    this.filteredParentlocationList3 = filtered;
  }

  filterList4(event) {

    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.localList4.length; i++) {
      let item = this.localList4[i];
      if (item.prod_name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(item);
      }
    }

    this.filteredList4 = filtered;
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


  filterList6(event) {

    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.localList6.length; i++) {
      let item = this.localList6[i];
      if (item.location_name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(item);
      }
    }

    this.filteredList6 = filtered;
  }

  //saving logics

  save() {
   
  }

  public checkSelectOptionValue(value) {
    if (value == "undefined" || value == null) {
      return value;
    }
  }


  //table logics
  
}
 


