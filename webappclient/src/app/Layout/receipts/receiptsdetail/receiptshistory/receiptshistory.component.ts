import { Component, OnInit, ViewChild, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { ServerSidePagination } from 'src/app/Layout/domain/serversidepagination';
import { MasterService } from 'src/app/layout/service';
import { MessageService } from 'primeng/api';
import { GlobalConstants } from 'src/app/global-constants';
import { SearchCriteria } from 'src/app/layout/domain/searchCriteria.model';

import { TransactionService } from 'src/app/layout/service';




@Component({
  selector: 'app-receiptshistory',
  templateUrl: './receiptshistory.component.html',
  styleUrls: ['./receipts.scss'],
  providers: [MessageService]
})
export class ReceiptHistoryComponent implements OnInit, OnChanges {
  selectedRowData: any[];
  user: any = [];
  searchs: any[];
  loading: boolean = false;
  content: any[] = [];
  content1: any[] = [];
  cols: any[];
  _selectedColumns: any[];
  selectedColumn: string;
  
  public columnNames: string[] = ["Branch", "Code"]
 
  
 
  @Output()
  editReceiptEntry = new EventEmitter();
public serverSidePagination = new ServerSidePagination();
  public searchCriteria = new SearchCriteria();
  first = 0;
  rows = 100;
  @ViewChild("dt") dt;
  constructor(private transactionService: TransactionService, private messageService: MessageService) {
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'docNo', header: 'Doc No' },
      { field: 'docDt', header: 'Doc Dt' },
      { field: 'partyId', header: 'Party Id' },
      { field: 'locationId', header: 'Location Id ' },
      { field: 'particulars', header: 'Particulars' },
      { field: 'totalAmt', header: 'Total Amt' },
    
    ];
    this._selectedColumns = this.cols; 
    this.searchs=GlobalConstants.searchs;
    this.searchCriteria.key=this.cols[0].field;
    this.searchCriteria.value="";
    this.searchCriteria.operation=this.searchs[0].field;
  }
  ngOnChanges(): void {
    
    console.log("===" + this.isLastPage());
  }
   ngOnInit(): void {
    this.first = 0;
    this.rows = 100;
    this.serverSidePagination.page = 0;
    this.serverSidePagination.size = 300;
    this.loading = true;
    this.transactionService.getReceipts(this.serverSidePagination).subscribe(
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

  editProduct(product: any) {
    this.editReceiptEntry.emit(product);
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
    this.loading = true;
    this.transactionService.getReceipts(this.serverSidePagination).subscribe(
      data => {
        this.loading = false;
        this.content1 = JSON.parse(JSON.stringify(data.data));
        this.content = [...this.content, ...this.content1];

      },
      err => {
        this.loading = false;
        this.content = JSON.parse(err.error).message;
      }
    );
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.content ? this.first === (this.content.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.content ? this.first === 0 : true;
  }


  find(): void {
    this.loading = true;
    debugger;
    this.transactionService.findReceipt(this.searchCriteria).subscribe(
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
