import { Component, OnInit, ViewChild, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { ServerSidePagination } from 'src/app/Layout/domain/serversidepagination';
import { MessageService } from 'primeng/api';
import { MasterService } from 'src/app/layout/service';
import { SearchCriteria } from 'src/app/Layout/domain/searchCriteria.model';
import { GlobalConstants } from 'src/app/global-constants';
import { DatexPipe } from 'src/app/shared/pipes/date.pipe';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { Bom } from 'src/app/layout/domain';

@Component({
  selector: 'app-bomhistory',
  templateUrl: './bomhistory.component.html',
  styleUrls: ['./bom.scss'],
  providers: [MessageService]
})
export class BomHistoryComponent  implements OnInit{
  
  selectedRowData= new Bom();
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
  dhead = [['Sl.No', 'Product Code', 'Producct Name', 'Qty', 'Rate', 'Total Amt']];
  dbody = [];
  dfoot = [];
  count: number = 0;
  title: string = "Bom";
   public serverSidePagination = new ServerSidePagination();
  public searchCriteria = new SearchCriteria();

  first = 0;

  rows = 20;
  @ViewChild("dt") dt;

  ngAfterViewInit(): void {

  }
  loading:boolean=false;


  @Output()
  editBomEntry = new EventEmitter();
  
  constructor(private transactionService: MasterService,private messageService: MessageService) {
    
    this.cols = [
      {checked:1, width: 'width:5%', field: 'id', header: 'Id' },
      {checked:1, width: 'width:5%', field: 'productId', header: 'productId' },
      {checked:1, width: 'width:5%', field: 'prodName', header: 'prodName' },
      {checked:1, width: 'width:5%', field: 'uom', header: 'uom' },
      {checked:1, width: 'width:5%', field: 'rate', header: 'rate' },
      {checked:1, width: 'width:5%', field: 'bomName', header: 'bomName' },
      {checked:1, width: 'width:5%', field: 'description', header: 'description' },
      {checked:1, width: 'width:5%', field: 'createdBy', header: 'CreatedBy' },
      {checked:1, width: 'width:5%', field: 'updatedBy', header: 'UpdatedBy' },
      {checked:1, width: 'width:5%', field: 'createdDate', header: 'CreatedDate' },
      {checked:1, width: 'width:5%', field: 'updatedDate', header: 'UpdatedDate' },
      
      
      

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
    this.transactionService.getAllBom(this.serverSidePagination).subscribe(
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
      
      this.editBomEntry.emit(product);
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

    this.transactionService.getAllBom(this.serverSidePagination).subscribe(
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
    this.transactionService.findBom(this.searchCriteria).subscribe(
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


