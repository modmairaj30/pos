import { Component, OnInit, ViewChild, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { ServerSidePagination } from 'src/app/Layout/domain/serversidepagination';


import { MasterService } from 'src/app/layout/service';
import { MessageService } from 'primeng/api';
import { GlobalConstants } from 'src/app/global-constants';
import { SearchCriteria } from 'src/app/layout/domain/searchCriteria.model';

@Component({
  selector: 'app-titlemasterhistory',
  templateUrl: './titlemasterhistory.component.html',
  styleUrls: ['./titlemaster.scss'],
  providers: [MessageService]
})
export class TitlemasterHistoryComponent implements OnInit, OnChanges {

  user: any = [];
  loading: boolean = false;
  selectedRowData: any[];
  content: any[] = [];
  content1: any[] = [];
  cols: any[];
  searchs: any[];
  _selectedColumns: any[];
  selectedColumn: string;

  @Output()
  editTitleMasterentry = new EventEmitter();
  public serverSidePagination = new ServerSidePagination();
  public searchCriteria = new SearchCriteria();
  
  first = 0;
  rows = 100;

  @ViewChild("dt") dt;
  constructor(private masterService: MasterService, private messageService: MessageService) {
    this.cols = [
      {  checked:1,width: 'width:10%', field: 'id', header: 'Id' },
      {  checked:1,width: 'width:10%', field: 'docNo', header: 'Doc No' },
      {  checked:1,width: 'width:10%', field: 'docDt', header: 'Doc Date' },
      {  checked:1,width: 'width:20%', field: 'prodName', header: 'Title' },
      {  checked:1,width: 'width:15%', field: 'productCode', header: 'Title Code' },
      {  checked:1,width: 'width:10%', field: 'productGroup', header: 'Product Group' },
      // checked:0,width: 'width:10%', { field: 'category', header: 'Category' },
     //  checked:0,width: 'width:10%', { field: 'rate', header: 'Rate' },
     //  checked:0,width: 'width:10%', { field: 'discount', header: 'Discount' },
      {  checked:0,width: 'width:10%', field: 'cst', header: 'cst' },
      {  checked:0,width: 'width:10%', field: 'batchNo', header: 'Batch No' },
     //  checked:0,width: 'width:10%', { field: 'description', header: 'Description' },
      {  checked:1,width: 'width:15%', field: 'subject', header: 'Subject' },
      {  checked:1,width: 'width:15%', field: 'author', header: 'Author' },
      {  checked:1,width: 'width:15%', field: 'publisher', header: 'Publisher' },
      {  checked:1,width: 'width:10%', field: 'publishedYear', header: 'Published Year' },
      {  checked:1,width: 'width:10%', field: 'isbnCode', header: 'isbnCode' },
      {  checked:0,width: 'width:10%', field: 'binNo', header: 'Bin No' },
      {  checked:0,width: 'width:10%', field: 'rackNo', header: 'Rack No' },
      {  checked:0,width: 'width:10%', field: 'createdBy', header: 'Created By' },
      {  checked:0,width: 'width:10%', field: 'createdDate', header: 'Created Date' },
      {  checked:0,width: 'width:10%', field: 'updatedBy', header: 'Updated By' },
      {  checked:0,width: 'width:10%', field: 'updatedDate', header: 'Updated Date' }
    ];
   // this._selectedColumns = this.cols;

   // let selectedDefault= [];
   this._selectedColumns= this.cols.filter((item) => item.checked === 1);
    //this._selectedColumns.map((item) => this._selectedColumns.push(item.cheded));
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
    this.masterService.getAllTitleMaster(this.serverSidePagination).subscribe(
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
    this.editTitleMasterentry.emit(product);
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
    this.masterService.getAllTitleMaster(this.serverSidePagination).subscribe(
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
    this.masterService.findTitleMaster(this.searchCriteria).subscribe(
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
