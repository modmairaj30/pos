import { Component, OnInit, ViewChild, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { ServerSidePagination } from 'src/app/Layout/domain/serversidepagination';
import { MessageService } from 'primeng/api';
import { TransactionService } from 'src/app/layout/service';
import { SearchCriteria } from 'src/app/Layout/domain/searchCriteria.model';
import { GlobalConstants } from 'src/app/global-constants';
import { DatexPipe } from 'src/app/shared/pipes/date.pipe';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { SalesInvoice } from 'src/app/layout/domain';

@Component({
  selector: 'app-salesinvoicehistory1',
  templateUrl: './salesinvoicehistory1.component.html',
  styleUrls: ['./salesinvoice1.scss'],
  providers: [MessageService]
})
export class SalesinvoiceHistory1Component  implements OnInit{
  
  selectedRowData= new SalesInvoice();
  user: any = [];
  content: any[] = [];
  content1: any[] = [];
  public columnNames: string[] = ["Branch", "Code"]

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
  title: string = "Invoice";
   public serverSidePagination = new ServerSidePagination();
  public searchCriteria = new SearchCriteria();

  first = 0;

  rows = 20;
  @ViewChild("dt") dt;

  ngAfterViewInit(): void {

  }
  loading:boolean=false;


  @Output()
  editSalesinvoiceEntry1 = new EventEmitter();
  
  constructor(private transactionService: TransactionService,private messageService: MessageService) {
    
    this.cols = [
      {checked:1, width: 'width:5%', field: 'id', header: 'Id' },
      {checked:1, width: 'width:5%', field: 'docDt', header: 'DocDt' },
      {checked:1, width: 'width:5%', field: 'docNo', header: 'DocNo' },
      {checked:0, width: 'width:5%', field: 'lRno', header: 'LRno' },
      {checked:0, width: 'width:5%', field: 'lRdate', header: 'LRdate' },
      {checked:0, width: 'width:5%', field: 'grossAmt', header: 'GrossAmt' },
      {checked:0, width: 'width:5%', field: 'netAmt', header: 'NetAmt' },
      {checked:1, width: 'width:5%', field: 'partyId', header: 'PartyId' },
      {checked:0, width: 'width:5%', field: 'address', header: 'Address' },
      {checked:0, width: 'width:5%', field: 'address1', header: 'Adress1' },
      {checked:0, width: 'width:5%', field: 'transportref', header: 'Transportref' },
      {checked:0, width: 'width:5%', field: 'ordno', header: 'Ordno' },
      {checked:0, width: 'width:5%', field: 'orddt', header: 'Orddt' },
      {checked:0, width: 'width:5%', field: 'vat', header: 'Vat' },
      {checked:0, width: 'width:5%', field: 'vatamt', header: 'Vatamt' },
      {checked:0, width: 'width:5%', field: 'cstamt', header: 'Cstamt' },
      {checked:0, width: 'width:5%', field: 'tinno', header: 'Tinno' },
      {checked:0, width: 'width:5%', field: 'cstno', header: 'Cstno' },
      {checked:0, width: 'width:5%', field: 'dlno', header: 'Dlno' },
      {checked:0, width: 'width:5%', field: 'dlno21', header: 'Dlno21' },
      {checked:0, width: 'width:5%', field: 'discamt', header: 'Discamt' },
      {checked:0, width: 'width:5%', field: 'locationId', header: 'LocationId' },
      {checked:0, width: 'width:5%', field: 'locationCode', header: 'LocationCode' },
      {checked:0, width: 'width:5%', field: 'paymentType', header: 'PaymentType' },
      {checked:0, width: 'width:5%', field: 'card', header: 'Card' },
      {checked:0, width: 'width:5%', field: 'cardNo', header: 'CardNo' },
      {checked:0, width: 'width:5%', field: 'expDate', header: 'ExpDate' },
      {checked:0, width: 'width:5%', field: 'branch', header: 'Branch' },
      {checked:0, width: 'width:5%', field: 'memberNo', header: 'MemberNo' },
      {checked:0, width: 'width:5%', field: 'validDate', header: 'ValidDate' },
      {checked:0, width: 'width:5%', field: 'years', header: 'Years' },
      {checked:1, width: 'width:5%', field: 'expiryDate', header: 'ExpiryDate' },
      {checked:1, width: 'width:5%', field: 'dis', header: 'Dis' },
      {checked:1, width: 'width:5%', field: 'discPay', header: 'DiscPay' },
      {checked:1, width: 'width:5%', field: 'discamtPay', header: 'DiscamtPay' },
      {checked:1, width: 'width:5%', field: 'netamtPay', header: 'NetamtPay' },
      {checked:1, width: 'width:5%', field: 'creditCharges', header: 'CreditCharges' },
      {checked:1, width: 'width:5%', field: 'creditDummy', header: 'CreditDummy' },
      {checked:1, width: 'width:5%', field: 'dcno', header: 'Dcno' },
      {checked:1, width: 'width:5%', field: 'dcdate', header: 'Dcdate' },

    ];

    
   // this._selectedColumns = this.cols;
   this._selectedColumns= this.cols.filter((item) => item.checked === 1);
    this.searchs = GlobalConstants.searchs;
    this.searchs = GlobalConstants.searchs;
    this.searchCriteria.key = this.cols[0].field;
    this.searchCriteria.value = "";
    this.searchCriteria.operation = this.searchs[0].field;
    }
  
  ngOnInit():void {
    this.first = 0;
    this.rows = 100;
    this.serverSidePagination.page = 0;
    this.serverSidePagination.size = 300;
    this.loading = true;
    this.transactionService.getAllsalesinvoice(this.serverSidePagination).subscribe(
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
      
      this.editSalesinvoiceEntry1.emit(product);
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
    this.transactionService.findInvoice(this.searchCriteria).subscribe(
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
    //let docDt = datePipe.transform(product.docDt, 'DD/MM/yyyy');
    //let locationName = filterPipe.transform(this.locations, product.locationId, "locationName");
    //this.dbody = [], this.dfoot = [], this.body = [[product.docNo, docDt, locationName]], this.foot = [["Verified By : " , '', '', '', '', '']], this.head = [];
    let qty: number = 0, rate: number = 0, total: number = 0, sqty: number = 0, stotal: number = 0, sno: number = 0;
    this.title = " Invoice   " + currentDt;
    //this.locationId = product.locationId;
    /*
    product.stocktransfersDetailList.sort((a, b) => (a.productName > b.productName ? 1 : -1));
    for (let i = 0; i <= product.stocktransfersDetailList.length - 1; i++) {
      qty = product.stocktransfersDetailList[i].qty;
      rate = product.stocktransfersDetailList[i].rate;
      total = product.stocktransfersDetailList[i].netAmt;
      stotal = total + stotal;
      sqty = qty + sqty;
      sno = i + 1;
      this.dbody.push([sno, product.stocktransfersDetailList[i].productCode, product.stocktransfersDetailList[i].productName, qty, rate, total, product.stocktransfersDetailList[i].fldDisc]);
    }
    this.dfoot.push(['', '', 'Total', sqty, '', stotal, '']);
    */
  }

  onRowUnselect(event) {
    debugger;
    event.checked;
    //this.messageService.add({severity:'info', summary:'Product Unselected',  detail: event.data.name});
  }


}


