import { Component, OnInit, ViewChild, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { ServerSidePagination } from 'src/app/Layout/domain/serversidepagination';
import { MessageService } from 'primeng/api';
import { TransactionService } from 'src/app/layout/service';
import { SearchCriteria } from 'src/app/Layout/domain/searchCriteria.model';
import { GlobalConstants } from 'src/app/global-constants';
import { UserService } from 'src/app/DemoPages/UserPages/_services/user.service';


@Component({
  selector: 'app-purchaseinvoicehistory1',
  templateUrl: './purchaseinvoicehistory1.component.html',
  styleUrls: ['./purchaseinvoice1.scss'],
  providers: [MessageService]
})
export class PurchaseinvoiceHistory1Component implements OnInit {
  user: any = [];
  locations: any[] = [];
  partys: any[] = [];
  loading: boolean = false;
  selectedRowData: any[];
  content: any[] = [];
  content1: any[] = [];
  cols: any[];
  searchs: any[];
  _selectedColumns: any[];
  selectedColumn: string;
  @Input()
  shareData: any[] = [];
abc:string;
  
  public serverSidePagination = new ServerSidePagination();
  public searchCriteria = new SearchCriteria();
  first = 0;
  rows = 100;
  constructor(private userService: UserService,private transactionService: TransactionService, private messageService: MessageService) {
    debugger
    this.cols = [
      {checked:1,width: 'width:10%', field: 'id', header: 'Id' },
      {checked:1,width: 'width:10%', field: 'grossAmt', header: 'GrossAmt' },
      {checked:1,width: 'width:10%', field: 'docNo', header: 'Doc No' },
      {checked:1,width: 'width:10%', field: 'docDt', header: 'Doc Date' },
      {checked:1,width: 'width:10%', field: 'partyId', header: 'Party Id' },
      {checked:1,width: 'width:10%', field: 'locationId', header: 'Location Id' },
      {checked:1,width: 'width:20%', field: 'address', header: 'Address' },
      {checked:0,width: 'width:10%', field: 'district', header: 'District' },
      {checked:1,width: 'width:10%', field: 'refNo', header: 'RefNo' },
      {checked:1,width: 'width:10%', field: 'refdt', header: 'Refdt' },
      {checked:0,width: 'width:10%', field: 'address2', header: 'Address2' },
      {checked:1,width: 'width:10%', field: 'city', header: 'City' },
      {checked:0,width: 'width:10%', field: 'address3', header: 'Address3' },
      
      {checked:0,width: 'width:10%', field: 'state', header: 'State' },
      {checked:0,width: 'width:10%', field: 'pin', header: 'Pincode' },
      
      {checked:0,width: 'width:10%', field: 'phoneNo', header: 'Ph No' },
      
    ];
    //this._selectedColumns = this.cols;
    this._selectedColumns= this.cols.filter((item) => item.checked === 1);
    this.searchs=GlobalConstants.searchs;
    this.searchs=GlobalConstants.searchs;
    this.searchCriteria.key=this.cols[0].field;
    this.searchCriteria.value="";
    this.searchCriteria.operation=this.searchs[0].field;
    
   
  }

  @ViewChild("dt") dt;
  ngAfterViewInit(): void {

  }
  public columnNames: string[] = ["Location", "DocNo"]

  @Output()
  editPurchaseInvoiceEntry = new EventEmitter();

  ngOnInit(): void {
    this.first = 0;
    this.rows = 100;
    this.serverSidePagination.page = 0;
    this.serverSidePagination.size = 300;
    this.loading = true;
    debugger;
    this.locations=this.shareData[1];
    this.partys = this.shareData[0];
    this.transactionService.getPurchaseInvoice(this.serverSidePagination).subscribe(
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
    this.editPurchaseInvoiceEntry.emit(product);
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
    this.transactionService.findPurchaseInvoice(this.searchCriteria).subscribe(
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


