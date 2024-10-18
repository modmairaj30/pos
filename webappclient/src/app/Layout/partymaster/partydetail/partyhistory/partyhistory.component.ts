import { Component, OnInit, ViewChild, Output, Input, EventEmitter } from '@angular/core';
import { ServerSidePagination } from 'src/app/Layout/domain/serversidepagination';
import { MasterService } from 'src/app/layout/service';
import { MessageService } from 'primeng/api';
import { GlobalConstants } from 'src/app/global-constants';
import { SearchCriteria } from 'src/app/layout/domain/searchCriteria.model';
@Component({
  selector: 'app-partyhistory',
  templateUrl: './partyhistory.component.html',
  styleUrls: ['./partyhistory.component.css'],
  providers: [MessageService]
})
export class PartyHistoryComponent implements OnInit {

  user: any = [];
  loading:boolean=false;
  selectedRowData: any[];
  content: any[] = [];
  content1: any[] = [];
  cols: any[];
  searchs: any[];
  _selectedColumns: any[];
  selectedColumn:string;

  @Output()
  editPartyMasterEntry = new EventEmitter();
  public serverSidePagination = new ServerSidePagination();
  public searchCriteria = new SearchCriteria();
  first = 0;
  rows = 20;

  @ViewChild("dt") dt;

  constructor(private userService: MasterService, private messageService: MessageService) {
    this.cols = [
      { field: 'id', header: 'Id' },
     { field: 'partyName', header: 'Party Name' },
      { field: 'partyType', header: 'Party Type' },
      { field: 'address1', header: 'Address 1' },
      { field: 'address2', header: 'Address 2' },
      { field: 'address3', header: 'Address 3' },
      { field: 'city', header: 'City' },
      { field: 'state', header: 'State' },
      { field: 'pincode', header: 'Pincode' },
      { field: 'tin', header: 'Tin' },
     
      { field: 'creditAcc', header: 'Credit Acc' },
      { field: 'debitAcc', header: 'Debit Acc' },
      { field: 'cSTno', header: 'CST No' },
      
      { field: 'telno', header: 'Tel No' },
      { field: 'mobileno', header: 'Mobile No' },
     
      { field: 'email', header: 'Email' },
      { field: 'contactperson', header: 'Contact person' },
      { field: 'code', header: 'Code' },
      { field: 'trasporter', header: 'Trasporter' },
      { field: 'createdBy', header: 'Created By' },
      { field: 'createdDate', header: 'Created Date' },
      { field: 'updatedBy', header: 'Updated By' },
      { field: 'updatedDate', header: 'Updated Date' }
    ];
    this._selectedColumns = this.cols;
    this.searchs=GlobalConstants.searchs;
    this.searchCriteria.key=this.cols[0].field;
    this.searchCriteria.value="";
    this.searchCriteria.operation=this.searchs[0].field;
  }

  ngAfterViewInit(): void {
    
    console.log("===" + this.isLastPage());
   
  }

  
  ngOnInit(): void {
    this.first = 0;
    this.rows = 100;
    this.serverSidePagination.page = 0;
    this.serverSidePagination.size = 300;
    this.loading=true;
    this.userService.getAllPartys(this.serverSidePagination).subscribe(
      data => {
        this.loading=false;
        this.content = JSON.parse(JSON.stringify(data.data));
      },
      err => {
        this.loading=false;
        this.content = JSON.parse(err.error).message;
      }
    );
  }

  editProduct(product: any) {
    this.editPartyMasterEntry.emit(product);
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

  next1() {
    
      this.serverSidePagination.page = this.serverSidePagination.page + 1;
      this.serverSidePagination.size = 300;
      this.loading=true;
      this.userService.getAllPartys(this.serverSidePagination).subscribe(
        data => {
          this.loading=false;
          this.content1 = JSON.parse(JSON.stringify(data.data));
          this.content = [...this.content, ...this.content1];
        },
        err => {
          this.loading=false;
          this.content = JSON.parse(err.error).message;
        }
      );
    

  }
  next() {
    debugger;
    this.first = this.first + this.rows;
}

prev() {
    this.first = this.first - this.rows;
}

reset() {
    this.first = 0;
}

isLastPage(): boolean {
    return this.content ? this.first === (this.content.length - this.rows): true;
}

isFirstPage(): boolean {
    return this.content ? this.first === 0 : true;
}
find(): void {
  this.loading = true;
  debugger;
  this.userService.findPartyMaster(this.searchCriteria).subscribe(
    data => {
      this.loading = false;
      this.content = JSON.parse(JSON.stringify(data.data));
    },
    err => {
      this.loading = false;
      this.content = JSON.parse(err.error).message;
    }
  );

}
}

