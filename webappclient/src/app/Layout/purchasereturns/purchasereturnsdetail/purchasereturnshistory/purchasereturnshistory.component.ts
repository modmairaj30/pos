import { Component, OnInit, ViewChild, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { ServerSidePagination } from 'src/app/Layout/domain/serversidepagination';
import { MessageService } from 'primeng/api';
import { LocationService, MasterService, TransactionService } from 'src/app/layout/service';
import { SearchCriteria } from 'src/app/Layout/domain/searchCriteria.model';
import { GlobalConstants } from 'src/app/global-constants';
import { DatexPipe } from 'src/app/shared/pipes/date.pipe';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { Purchasereturn, StockVerification } from 'src/app/layout/domain';


@Component({
  selector: 'app-purchasereturnshistory',
  templateUrl: './purchasereturnshistory.component.html',
  styleUrls: ['./purchasereturns.scss'],
  providers: [MessageService]
})
export class PurchasereturnsHistoryComponent  implements OnInit{
  
  user: any = [];
  locationId: number;
  loading: boolean = false;
  //selectedRowData: {};
  selectedRowData = new Purchasereturn();
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
  editPurchasereturnEntry = new EventEmitter();
  public serverSidePagination = new ServerSidePagination();
  public searchCriteria = new SearchCriteria();

  first = 0;
  rows = 100;
  private locationList: any[] = [];
  @ViewChild("dt") dt;
  constructor(private transactionService: TransactionService, private messageService: MessageService,private masterService: MasterService) {
    this.cols = [
      {width: 'width:10%', field: 'id', header: 'Id' },
     // {width: 'flex-basis:5%', field: 'creditAcc', header: 'Credit Acc' },
      //{width: 'flex-basis:5%', field: 'debitAcc', header: 'Debit Acc' },
      {width: 'width:10%', field: 'docNo', header: 'Doc No' },
      {width: 'width:10%', field: 'docDt', header: 'Doc Dt' },
      {width: 'width:10%', field: 'partyId', header: 'Party Id' },
      {width: 'width:20%', field: 'address', header: 'Address' },
      {width: 'width:10%', field: 'grossAmt', header: 'Gross Amt' },
      {width: 'width:10%', field: 'netAmt', header: 'Net Amt' },
     // {width: 'width:5%', field: 'vchId', header: 'Vch Id' },
      //{width: 'width:5%', field: 'vat', header: 'Vat' },
      {width: 'width:15%', field: 'locationId', header: 'Location Id' },
      {width: 'width:10%', field: 'invNo', header: 'Inv No' },
      {width: 'width:10%', field: 'purInvdt', header: 'Pur Invdt' },
      {width: 'width:10%', field: 'vATPc', header: 'VAT Pc' },
      {width: 'width:10%', field: 'discountAmt', header: 'Discount Amt' }
      ];
    this._selectedColumns = this.cols;
    this.searchs = GlobalConstants.searchs;
    this.searchs = GlobalConstants.searchs;
    this.searchCriteria.key = this.cols[0].field;
    this.searchCriteria.value = "";
    this.searchCriteria.operation = this.searchs[0].field;
  }

  ngAfterViewInit(): void {

  }
  public columnNames: string[] = ["Location", "DocNo"]

   ngOnInit(): void {
    this.first = 0;
    this.rows = 100;
    this.serverSidePagination.page = 0;
    this.serverSidePagination.size = 300;
    this.loading = true;
    this.masterService.getAllLocations().subscribe(
      data => {
        this.locations = JSON.parse(JSON.stringify(data.data));
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
    this.transactionService.getPurchasereturns(this.serverSidePagination).subscribe(
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
    this.editPurchasereturnEntry.emit(product);
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

    this.transactionService.getPurchasereturns(this.serverSidePagination).subscribe(
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
    this.transactionService.findPurchaseReturns(this.searchCriteria).subscribe(
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
    this.dbody = [], this.dfoot = [], this.body = [[product.docNo, docDt, locationName]], this.foot = [["Verified By : " + product.creditAcc, '', '', '', '', '']], this.head = [];
    let qty: number = 0, rate: number = 0, total: number = 0, sqty: number = 0, stotal: number = 0, sno: number = 0;
    this.title = " Purchase Return  " + currentDt;
    this.locationId = product.locationId;
    product.purchaseInvoiveDetList.sort((a, b) => (a.productName > b.productName ? 1 : -1));
    for (let i = 0; i <= product.purchaseInvoiveDetList.length - 1; i++) {
      qty = product.purchaseInvoiveDetList[i].qty;
      rate = product.purchaseInvoiveDetList[i].rate;
      total = product.purchaseInvoiveDetList[i].amount;
      stotal = total + stotal;
      sqty = qty + sqty;
      sno = i + 1;
      this.dbody.push([sno, product.purchaseInvoiveDetList[i].productCode, product.purchaseInvoiveDetList[i].productName, qty, rate, total, product.purchaseInvoiveDetList[i].netAmt]);
    }
    this.dfoot.push(['', '', 'Total', sqty, '', stotal, '']);
  }

  onRowUnselect(event) {
    debugger;
    event.checked;
    //this.messageService.add({severity:'info', summary:'Product Unselected',  detail: event.data.name});
  }


}