import { Component, OnInit, Input, Output, EventEmitter, ViewChild, HostListener, ElementRef } from '@angular/core';
import { UserService } from 'src/app/DemoPages/UserPages/_services/user.service';
import { LookUpFormBean } from 'src/app/Layout/domain/lookupform';
import { MasterService, TransactionService } from 'src/app/layout/service';
import { Receipt } from 'src/app/layout/domain';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AutoComplete } from 'primeng/autocomplete';
import { NgModel } from '@angular/forms';
//@import "src/style/entryscreen.scss";

@Component({
  selector: 'app-receiptsentry',
  templateUrl: './receiptsentry.component.html',//
  styleUrls: ['./receiptsentry.component.scss']
})
export class ReceiptsentryComponent implements OnInit {

  @ViewChild('formForm') formForm;
  @ViewChild('fe') input: AutoComplete;


  @Output()
  editEntry = new EventEmitter();

  dateValue: Date;
  @Input()
  editmod: boolean = false;



  empList1: any[] = [];
  localList5: any[] = [];

  map = new Map();
  error: string;
  errorMessage: string

  @Input()
  public receipt = new Receipt();

  filteredEmpList1: any[];
  filteredList5: any[];

  lookUpFormBean1 = new LookUpFormBean();
  lookUpFormBean5 = new LookUpFormBean();

  listLookUpFormBean: LookUpFormBean[] = new Array();

  constructor(private messageService: MessageService, private userService: UserService, private transactionService: TransactionService) { }

  ngOnInit(): void {
    /////list
    this.lookUpFormBean1.query = "select id,party_name,party_type from tbl_party_info where party_type=2";
    this.lookUpFormBean5.query = "select id,location_name from tbl_location";

    this.lookUpFormBean1.listName = "LIST1";
    this.lookUpFormBean5.listName = "LIST5";

    this.listLookUpFormBean.push(this.lookUpFormBean1);
    this.listLookUpFormBean.push(this.lookUpFormBean5);
    this.userService.getMultipleDropdwonValues(this.listLookUpFormBean).subscribe(
      data => {
        this.empList1 = JSON.parse(JSON.stringify(data.data.LIST1));
        this.localList5 = JSON.parse(JSON.stringify(data.data.LIST5));
        if (this.editmod) {
          this.editmode();
        }

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
      // if (item.party_name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
      if (item.party_name.toLowerCase().includes(query.toLowerCase())) {
        filtered.push(item);
      }
    }

    this.filteredEmpList1 = filtered;
  }

  filterList5(event) {

    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.localList5.length; i++) {
      let item = this.localList5[i];
      //  if (item.location_name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
      if (item.location_name.toLowerCase().includes(query.toLowerCase())) {
        filtered.push(item);
      }
    }

    this.filteredList5 = filtered;
  }

  //saving logics

  save() {
    //this.elRef.focusInput();

    let copy = JSON.parse(JSON.stringify(this.receipt))

    copy.locationId = copy.locationId.id
    copy.partyId = copy.partyId.id
    this.transactionService.saveReceipts(copy).subscribe(
      data => {
        if (data.statusCode == "OK") {
          this.showSuccess();
          this.reset();
        }
        else {
          this.errorMessage = data.webAppException.webAppError[0].reason;
          this.showFail(this.errorMessage);
        }
        if (this.editmod) {

          this.editEntry.emit();
        }
      },
      err => {
        this.map = JSON.parse(err.error).message;
      }
    );
  }

  public checkSelectOptionValue(value) {
    if (value == "undefined" || value == null) {
      return value;
    }
  }

  reset() {
    this.formForm.resetForm();
    this.receipt = new Receipt();
    setTimeout(() => {
      if (this.editmod) {
        //  this.editmod=false;
        //  this.reset();
        // this.router.navigate(['/purchaseInvoice/purchaseInvoice']);
        this.editEntry.emit(this.editmod);
      }
      else {
        this.input.focusInput();
      }
    }, 1500);

  }
  editmode() {

    this.receipt.partyId = this.empList1.find(x => x.id == this.receipt.partyId);
    this.receipt.locationId = this.localList5.find(x => x.id == this.receipt.locationId);
    this.receipt.docDt=new Date(this.receipt.docDt);
  }

  @HostListener('keydown.F2', ['$event']) F2($event: KeyboardEvent) {
    if (this.formForm.form.valid) { this.save(); }

  }
  @HostListener('keydown.F5', ['$event']) F5($event: KeyboardEvent) {
    this.reset();
  }
  showSuccess() {
    this.messageService.add({ key: 'success', severity: 'success', summary: 'success', detail: 'Data saved Successfully.' });
  }
  showFail(value: string) {
    this.messageService.add({ key: 'error', severity: 'error', summary: 'error', detail: value });
  }
}


