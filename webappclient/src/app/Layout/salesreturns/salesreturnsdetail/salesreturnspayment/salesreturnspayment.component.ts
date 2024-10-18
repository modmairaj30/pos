import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/DemoPages/UserPages/_services/user.service';
import { LookUpFormBean } from 'src/app/Layout/domain/lookupform';
import { MasterService, TransactionService } from 'src/app/layout/service';
import {  Salesreturns, SalesreturnsDetails } from 'src/app/layout/domain';
import { MessageService } from 'primeng/api';
import { AutoComplete } from 'primeng/autocomplete';
@Component({
  selector: 'app-salesreturnspayment',
  templateUrl: './salesreturnspayment.component.html',//
  styleUrls: ['./salesreturnspayment.component.scss']
})
export class SalesReturnspaymentComponent implements OnInit {

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
  @Input()
  public salesreturns = new Salesreturns();
   products2: SalesreturnsDetails[] = new Array();
  clonedProducts: { [s: string]: SalesreturnsDetails; } = {};
  
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
    debugger;
    this.salesreturns.invoiceDetList = this.products2;
    
    let copy = JSON.parse(JSON.stringify(this.salesreturns))
    copy.locationId=copy.locationId.id
    //copy.locationCode=copy.locationCode.location_name;
    copy.partyId=copy.partyId.id;
    
   //copy.locationId=copy.locationCode.id
    
    /*copy.salesreturnsDetailList.forEach((item, indexa) => {
    copy.salesreturnsDetailList[indexa].productId = copy.salesreturnsDetailList[indexa].productId.id;
    });*/
   
    this.transactionService.saveSalesreturns(copy).subscribe(
      data => {
        if(!data && data == null){
          this.showFail(this.errorMessage);
          return true;
        } 
         if (data.statusCode == "OK") {
          this.showSuccess();
          this.salesreturns.docDt= new Date();
          this.salesreturns.docNo = "";
          this.salesreturns.grossAmt = null;
          this.salesreturns.netAmt = null;
          this.salesreturns.address = "";
          this.salesreturns.discAmt = null;
          this.salesreturns.partyId = null;
          this.salesreturns.invoiceDetList=[];
          this.sno = 0;
          this.products2= [];
          
        }
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
