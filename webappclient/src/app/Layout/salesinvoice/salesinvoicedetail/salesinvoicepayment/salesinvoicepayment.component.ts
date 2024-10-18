import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/DemoPages/UserPages/_services/user.service';
import { LookUpFormBean } from 'src/app/Layout/domain/lookupform';
import { MasterService, TransactionService } from 'src/app/layout/service';
import { SalesInvoice, SalesInvoiceDetails } from 'src/app/layout/domain';
import { MessageService } from 'primeng/api';
import { AutoComplete } from 'primeng/autocomplete';
@Component({
  selector: 'app-salesinvoicepayment',
  templateUrl: './salesinvoicepayment.component.html',//
  styleUrls: ['./salesinvoicepayment.component.scss']
})
export class SalesinvoicepaymentComponent implements OnInit {

  @ViewChild('reportForm') reportForm;



  editmod: boolean=false;
  dateValue: Date;
  sno: number = 0;
  values = [];
  
  localList5: any[] = [];
  
  map = new Map();
  error: string;
  errorMessage:string;
  
  /*
  public credittarriffmaster = new Credittarriffmaster();

  credittrafficmasterdeatillist = new Array<CredittarriffmasterDetail>();
  products2: CredittarriffmasterDetail[] = new Array();
  clonedProducts: { [s: string]: CredittarriffmasterDetail; } = {};
*/
  
  filteredList5: any[];
  
  
  lookUpFormBean5 = new LookUpFormBean();
  
  listLookUpFormBean: LookUpFormBean[] = new Array();

  @Input()
  public salesinvoice = new SalesInvoice();
  products2: SalesInvoiceDetails[] = new Array();
  constructor(private messageService: MessageService, private userService: UserService, private masterService: MasterService,  private transactionService: TransactionService) { }

  ngOnInit(): void {
    /////list
    
    this.lookUpFormBean5.query = "SELECT * FROM payment_type";
    

    
    this.lookUpFormBean5.listName = "LIST5";
    

    
    this.listLookUpFormBean.push(this.lookUpFormBean5);
    


    this.userService.getMultipleDropdwonValues(this.listLookUpFormBean).subscribe(
      data => {
        this.localList5 = JSON.parse(JSON.stringify(data.data.LIST5));
            },
      err => {
        this.map = JSON.parse(err.error).message;
      }
    );

  }

 
  filterList5(event) {

    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.localList5.length; i++) {
      let item = this.localList5[i];
      if (item.payment_type.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(item);
      }
    }

    this.filteredList5 = filtered;
  }



  //saving logics

  save() {
    //this.elRef.focusInput();
    
    this.salesinvoice.invoiceDetList = this.products2;
    
    let copy = JSON.parse(JSON.stringify(this.salesinvoice))
    copy.locationId=copy.locationId.id
    //copy.locationCode=copy.locationCode.location_name;
    copy.partyId=copy.partyId.id;
    
   //copy.locationId=copy.locationCode.id
    
    /*copy.salesInvoiceDetailList.forEach((item, indexa) => {
    copy.salesInvoiceDetailList[indexa].productId = copy.salesInvoiceDetailList[indexa].productId.id;
    });*/
    
    this.transactionService.saveSalesinvoice(copy).subscribe(
      
      data => {
        
          if(!data && data == null){
            this.showFail(this.errorMessage);
            return true;
          } 
           if (data.statusCode == "OK") {
            this.showSuccess();
            this.salesinvoice.docDt= new Date();
            this.salesinvoice.memberNo = "";
            this.salesinvoice.grossAmt = null;
            this.salesinvoice.docNo = "";
            this.salesinvoice.validDate = null;
            this.salesinvoice.discamt = null;
            this.salesinvoice.years = null;
            this.salesinvoice.netAmt = null;
            this.salesinvoice.partyId = null;
            this.salesinvoice.dcno = "";
            this.salesinvoice.invoiceDetList=[];
            this.sno = 0;
            this.products2= [];
            //this.addvalue();
          
          }
        /*if(!data && data == null){
          this.showFail(this.errorMessage);
          return true;
        } 
        if (data.statusCode == "OK") {
          this.showSuccess();
          this.salesinvoice.docDt= new Date();
          this.salesinvoice.memberNo = "";
          this.salesinvoice.grossAmt = null;
          this.salesinvoice.docNo = "";
          this.salesinvoice.validDate = null;
          this.salesinvoice.discamt = null;
          this.salesinvoice.years = null;
          this.salesinvoice.netAmt = null;
          this.salesinvoice.partyId = null;
          this.salesinvoice.dcno = "";
          this.salesinvoice.invoiceDetList=[];
          this.sno = 0;
          this.products2= [];
          this.addvalue();
        }*/
        else {
          this.errorMessage = data.webAppException.webAppError[0].reason;
          this.showFail(this.errorMessage);
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

  showSuccess() {
    this.messageService.add({ key: 'success', severity: 'success', summary: 'success', detail: 'Data saved Successfully.' });
  }
  showFail(value:string) {
    this.messageService.add({ key: 'error', severity: 'error', summary: 'error', detail:value });
  }

  

}
