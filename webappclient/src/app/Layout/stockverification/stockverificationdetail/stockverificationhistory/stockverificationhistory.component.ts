import { Component, OnInit, ViewChild, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { ServerSidePagination } from 'src/app/Layout/domain/serversidepagination';
import { MessageService } from 'primeng/api';
import { LocationService, MasterService, TransactionService } from 'src/app/layout/service';
import { SearchCriteria } from 'src/app/Layout/domain/searchCriteria.model';
import { GlobalConstants } from 'src/app/global-constants';
import { DatexPipe } from 'src/app/shared/pipes/date.pipe';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { StockVerification } from 'src/app/layout/domain';


@Component({
  selector: 'app-stockverificationhistory',
  templateUrl: './stockverificationhistory.component.html',
  styleUrls: ['./stockverification.scss'],
  providers: [MessageService]
})
export class StockverificationHistoryComponent implements OnInit {
  user: any = [];
  locationId: number;
  loading: boolean = false;
  //selectedRowData: {};
  selectedRowData = new StockVerification();
  selectedCheckBox: any;
  content: any[] = [];
  locations: any[] = [];
  content1: any[] = [];
  cols: any[];
  searchs: any[];
  _selectedColumns: any[];
  selectedColumn: string;
  head = [];
  body = [];
  foot = [];
  dhead = [['Sl.No', 'Product Code', 'Title', 'Physical Qty', 'Rate', 'Total Amt', 'Bin No']];
  dbody = [];
  dfoot = [];
  count: number = 0;
  title: string = "Stock Verification";
  @Output()
  editTitleMasterentry = new EventEmitter();
  public serverSidePagination = new ServerSidePagination();
  public searchCriteria = new SearchCriteria();

  first = 0;
  rows = 100;
  private locationList: any[] = [];
  @ViewChild("dt") dt;
  constructor(private transactionService: TransactionService, private messageService: MessageService, private masterService: MasterService) {
    this.cols = [
      {checked:1, width: 'width:5%', field: 'id', header: 'Id' },
      {checked:1, width: 'width:15%', field: 'docNo', header: 'Doc No' },
      {checked:1, width: 'width:10%', field: 'docDt', header: 'Doc Dt' },
      {checked:1, width: 'width:10%', field: 'locationId', header: 'Location Name' },
      {checked:1, width: 'width:10%', field: 'verifiedBy', header: 'Verified By' },
      {checked:1, width: 'width:10%', field: 'userId', header: 'User Id' },
      {checked:1, width: 'width:10%', field: 'dummy', header: 'Dummy' },
      {checked:0, width: 'width:10%', field: 'createdBy', header: 'Created By' },
      {checked:0, width: 'width:10%', field: 'createdDate', header: 'Created Date' },
      {checked:0, width: 'width:10%', field: 'updatedBy', header: 'Updated By' },
      {checked:0, width: 'width:10%', field: 'updatedDate', header: 'Updated Date' }
    ];
   // this._selectedColumns = this.cols;
   this._selectedColumns= this.cols.filter((item) => item.checked === 1);
    this.searchs = GlobalConstants.searchs;
    this.searchs = GlobalConstants.searchs;
    this.searchCriteria.key = this.cols[0].field;
    this.searchCriteria.value = "";
    this.searchCriteria.operation = this.searchs[0].field;
  }

  ngAfterViewInit(): void {

  }
  public columnNames: string[] = ["Location", "DocNo"]

  @Output()
  editStockVerificationEntry = new EventEmitter();




  ngOnInit(): void {
    this.first = 0;
    this.rows = 100;
    this.serverSidePagination.page = 0;
    this.serverSidePagination.size = 300;
    this.loading = true;
    debugger;
    this.masterService.getAllLocations().subscribe(
      data => {
        this.locations = JSON.parse(JSON.stringify(data.data));
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
    this.transactionService.getStockVerificationPagination(this.serverSidePagination).subscribe(
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
    this.editStockVerificationEntry.emit(product);
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

    this.transactionService.getStockVerificationPagination(this.serverSidePagination).subscribe(
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
    this.transactionService.findStockVerification(this.searchCriteria).subscribe(
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



  onRowSelect(event) {
    debugger;
    let product = this.selectedRowData;
    if (product == null) {
      return;
    }
    else {
      this.count = 1;
    }
    var datePipe = new DatexPipe();
    var filterPipe = new FilterPipe();
    let currentDt = datePipe.transform(new Date(), 'MMMM/yyyy');
    let docDt = datePipe.transform(product.docDt, 'DD/MM/yyyy');
    let locationName = filterPipe.transform(this.locations, product.locationId, "locationName");
    this.dbody = [], this.dfoot = [], this.body = [[product.docNo, docDt, locationName]], this.foot = [["Verified By : " + product.verifiedBy, '', '', '', '', '']], this.head = [];
    let qty: number = 0, rate: number = 0, total: number = 0, sqty: number = 0, stotal: number = 0, sno: number = 0;
    this.title = " Stock Verification   " + currentDt;
    this.locationId = product.locationId;
    product.stockVerificationDetailList.sort((a, b) => (a.productName > b.productName ? 1 : -1));
    for (let i = 0; i <= product.stockVerificationDetailList.length - 1; i++) {
      qty = product.stockVerificationDetailList[i].qty;
      rate = product.stockVerificationDetailList[i].rate;
      total = product.stockVerificationDetailList[i].totalAmt;
      stotal = total + stotal;
      sqty = qty + sqty;
      sno = i + 1;
      this.dbody.push([sno, product.stockVerificationDetailList[i].productCode, product.stockVerificationDetailList[i].productName, qty, rate, total, product.stockVerificationDetailList[i].fldBin]);
    }
    this.dfoot.push(['', '', 'Total', sqty, '', stotal, '']);
  }

  onRowUnselect(event) {
    debugger;
    event.checked;
    //this.messageService.add({severity:'info', summary:'Product Unselected',  detail: event.data.name});
  }


}


