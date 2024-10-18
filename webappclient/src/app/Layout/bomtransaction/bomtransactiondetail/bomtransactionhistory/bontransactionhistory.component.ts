import { Component, OnInit, ViewChild, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { ServerSidePagination } from 'src/app/Layout/domain/serversidepagination';
import { MessageService } from 'primeng/api';
import { TransactionService } from 'src/app/layout/service';
import { SearchCriteria } from 'src/app/Layout/domain/searchCriteria.model';
import { GlobalConstants } from 'src/app/global-constants';
import { DatexPipe } from 'src/app/shared/pipes/date.pipe';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { Bomtransaction } from 'src/app/layout/domain';

@Component({
  selector: 'app-bomtransactionhistory',
  templateUrl: './bomtransactionhistory.component.html',
  styleUrls: ['./bomtransaction.scss'],
  providers: [MessageService]
})
export class BomtransactionHistoryComponent  implements OnInit{
  selectedRowData: any[];
 // selectedRowData= new Bomtransaction();
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
  dhead = [['Sl.No', 'Bill No', 'Bill Date', 'Total Qty', 'Total Discount', 'Total Amt']];
  dbody = [];
  dfoot = [];
  count: number = 0;
  title: string = "POS History";
   public serverSidePagination = new ServerSidePagination();
  public searchCriteria = new SearchCriteria();

  first = 0;

  rows = 20;
  @ViewChild("dt") dt;

  ngAfterViewInit(): void {

  }
  loading:boolean=false;


  @Output()
  editBomtransactionEntry = new EventEmitter();
  
  constructor(private transactionService: TransactionService,private messageService: MessageService) {
    
    this.cols = [
      {checked:1, width: 'width:5%', field: 'id', header: 'Id' },
      {checked:1, width: 'width:5%', field: 'billNo', header: 'billNo' },
      {checked:1, width: 'width:5%', field: 'billDt', header: 'billDt' },
      {checked:1, width: 'width:5%', field: 'totQty', header: 'totQty' },
      {checked:1, width: 'width:5%', field: 'totDiscount', header: 'totDiscount' },
      {checked:1, width: 'width:5%', field: 'totAmt', header: 'totAmt' },
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
    this.selectedRowData = [];
    this.first = 0;
    this.rows = 100;
    this.serverSidePagination.page = 0;
    this.serverSidePagination.size = 300;
    this.loading = true;
    this.transactionService.getAllBomtransaction(this.serverSidePagination).subscribe(
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
      
      this.editBomtransactionEntry.emit(product);
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

    this.transactionService.getAllBomtransaction(this.serverSidePagination).subscribe(
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
    this.transactionService.findBomtransaction(this.searchCriteria).subscribe(
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
    let product = this.selectedRowData;
    if (product == null) {
      return;
    }
    else {
      this.count = 1;
    }
  }

  onRowUnselect(event) {
    event.checked;
  }

///export to xls
exportExcel() {
  if(this.selectedRowData.length===0){
    alert("please select a row to print");
    return 0;
  }
  import("xlsx").then(xlsx => {
    const worksheet = xlsx.utils.json_to_sheet(this.selectedRowData);
    const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
    const excelBuffer: any = xlsx.write(workbook, {
      bookType: "xlsx",
      type: "array"
    });
    this.saveAsExcelFile(excelBuffer, "Item Details");
  });
}

saveAsExcelFile(buffer: any, fileName: string): void {
  import("file-saver").then(FileSaver => {
    let EXCEL_TYPE ="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    let EXCEL_EXTENSION = ".xlsx";
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(
      data,
      fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
    );
  });
}
}


