import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/DemoPages/UserPages/_services/user.service';
import { LookUpFormBean } from 'src/app/Layout/domain/lookupform';
import { MasterService, TransactionService } from 'src/app/layout/service';
import { SalesInvoice, SalesInvoiceDetails } from 'src/app/layout/domain';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { AutoComplete } from 'primeng/autocomplete';
@Component({
    selector: 'app-payment',
    templateUrl: './payment.html',
    styles: [`
        :host ::ng-deep .p-button {
            margin: 0 .5rem 0 0;
            min-width: 1rem;
        }
  
        p {
            margin: 0;
        }
  
        .confirmation-content {
            display: flex;
            align-items: center;
            justify-content: center;
        }
  
        :host ::ng-deep .p-dialog .p-button {
            min-width: 1rem;
        }
        :host ::ng-deep  .p-dialog .p-dialog-header {
            padding: 0rem;
        }
        :host ::ng-deep .p-dialog .p-dialog-content{
          padding: 0.2rem;
        }
    `]
  })
export class PaymentComponent implements OnInit {

  

  

  displayBasic2: boolean;

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
  @Output() salesinvoiceChange: EventEmitter<SalesInvoice> = new EventEmitter<SalesInvoice>();

  @Input()
  public salesinvoice = new SalesInvoice();
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
    debugger;

    let payment= this.salesinvoice.paymentType.payment_type;
    ///let cardno = this.salesinvoice.cardNo;
    if(payment=="" || payment==null || typeof payment=='undefined'){
            
        this.showFail("Please Enter Payment Type");
        return;
      }else{
        if (payment == "Credit/Debit Card") {
          if(  this.salesinvoice.cardNo==null || typeof this.salesinvoice.cardNo=='undefined'){
            this.showFail("Please Enter Card No");
            return;
            }
        }
        else if (payment == "Cheque") {
          if(typeof this.salesinvoice.chqNo == 'undefined' ){
            this.showFail("Please Enter Cheque No");
            return;
            }
            if(typeof this.salesinvoice.chqDate == 'undefined' ){
              this.showFail("Please Enter Cheque Date");
              return;
            }
            if(typeof this.salesinvoice.chqAmt == 'undefined' ){
              this.showFail("Please Enter Cheque Amount");
              return;
            }
            if(typeof this.salesinvoice.chqIssueBank == 'undefined' ){
              this.showFail("Please Enter chq Issue Bank");
              return;
            }
            if(typeof this.salesinvoice.branch == 'undefined' ){
              this.showFail("Please Enter branch");
              return;
            }
        }
        
      }
       
      this.salesinvoice.paymentType=payment;
      this.salesinvoiceChange.emit(this.salesinvoice);
    this.displayBasic2 = false;
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

  showBasicDialog2() {
   
    this.displayBasic2 = true;
   
  }

}
