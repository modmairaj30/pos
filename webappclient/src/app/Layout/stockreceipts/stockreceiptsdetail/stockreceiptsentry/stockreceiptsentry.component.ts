import { Component, OnInit, ViewChild, Input, Output, EventEmitter, HostListener,ElementRef } from '@angular/core';
import { UserService } from 'src/app/DemoPages/UserPages/_services/user.service';
import { LookUpFormBean } from 'src/app/Layout/domain/lookupform';
import { MasterService, TransactionService } from 'src/app/layout/service';
import { StockReceipts,StockReceiptsDetail } from 'src/app/layout/domain';
import { Router} from '@angular/router';
import { MessageService } from 'primeng/api';
import { AutoComplete } from 'primeng/autocomplete';
import { NgModel } from '@angular/forms';
import { LocationService } from 'src/app/Layout/service/locationservice';
//@import "src/style/entryscreen.scss";

@Component({
  selector: 'app-stockreceiptsentry',
  templateUrl: './stockreceiptsentry.component.html',
  styleUrls: ['./stockreceiptsentry.component.scss']
})
export class StockreceiptsentryComponent implements OnInit {

  @ViewChild('detailtable') detailtable;
  @ViewChild('formForm') formForm;
  @ViewChild('fe') input: AutoComplete;
  //@ViewChild('localOS') private localOS: AutoComplete;

  //ViewChild returns ElementRef i.e. input HTML Element
 
//@ViewChild('localOS',{static:false, read: ElementRef}) elRef;
 
 
//ViewChild returns NgModel associated with the nameInput
//@ViewChild('nameInput',{static:false, read: NgModel}) inRef;

  @Output()
  editEntry = new EventEmitter();

  dateValue: Date;
  @Input()
  editmod: boolean=false;
  sno: number = 0;
  values = [];
  titleList2: any[] = [];
  locationList1: any[] = [];

  map = new Map();
  error: string;
  errorMessage:string;
  showNavigation: boolean=false;

  @Input()
  public stockReceipts = new StockReceipts();
   //stockVerificationDetailList = new Array<StockVerificationDetail>();
  products2: StockReceiptsDetail[] = new Array();
  clonedProducts: { [s: string]: StockReceiptsDetail; } = {};

  
  localList2: any[] = [];
  empList1: any[] = [];
  localList5: any[] = [];
  
 
  filteredEmpList1: any[];
  filteredEmpList2: any[];
  filteredList5: any[];
  

  lookUpFormBean1 = new LookUpFormBean();
  lookUpFormBean2 = new LookUpFormBean();
  lookUpFormBean5 = new LookUpFormBean();
   listLookUpFormBean: LookUpFormBean[] = new Array();


  constructor(private messageService: MessageService,private userService: UserService, private transactionService: TransactionService) { }

  ngOnInit(): void {
    /////list
    //this.stockReceipts.verifiedBy=window.sessionStorage.getItem("userName");
    this.lookUpFormBean1.query = "select id,location_name,location_code from tbl_location";
    this.lookUpFormBean2.query = "select id, product_id, location_id, supp_name, qty, cum_qty, fld_sunit, qtytab, product_code, prod_name, fld_disc, isbn_code, product_group, rate, product_rate, author, publisher_name, fld_srate, discount from view_batchno_cumqty9 where location_id="+location;
       //this.lookUpFormBean4.query = "SELECT id, prod_name,product_code,author,product_rate, discount, supp_name, publisher_name FROM title_view";
    this.lookUpFormBean5.query =  "select id,location_name,location_code from tbl_location2 ";
    //this.lookUpFormBean6.query = "select id,location_code,location_name from location";

    this.lookUpFormBean1.listName = "LIST1";
    this.lookUpFormBean2.listName = "LIST2";
    this.lookUpFormBean5.listName = "LIST5";
   // this.lookUpFormBean6.listName = "LIST6";

    this.listLookUpFormBean.push(this.lookUpFormBean1);
    this.listLookUpFormBean.push(this.lookUpFormBean2);
    this.listLookUpFormBean.push(this.lookUpFormBean5);
    //this.listLookUpFormBean.push(this.lookUpFormBean6);


    this.userService.getMultipleDropdwonValues(this.listLookUpFormBean).subscribe(
      data => {
       this.empList1 = JSON.parse(JSON.stringify(data.data.LIST1));
        this.titleList2 = JSON.parse(JSON.stringify(data.data.LIST2));
       this.localList5 = JSON.parse(JSON.stringify(data.data.LIST5));
	 // this.localList6 = JSON.parse(JSON.stringify(data.data.LIST6));
	 if (this.editmod) {
	                     this.editmode();
        }else{
	      this.addvalue();
        setTimeout(() => {
          
          this.input.focusInput();
        }, 1000);
        
 	this.stockReceipts.docDt= new Date();
	 let location= window.sessionStorage.getItem("location");
         this.stockReceipts.locationId = this.localList5.find(x => x.id == location.split(",")[0]);
         
	 
	 
	 }

      },
      err => {
        this.map = JSON.parse(err.error).message;
      }
    );

  }

  filterEmpList1(event) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.empList1.length; i++) {
      let item = this.empList1[i];
  //    if (item.location_name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
      if (item.location_name.toLowerCase().includes(query.toLowerCase())) { 
        filtered.push(item);
      }
    }
  
    this.filteredEmpList1 = filtered;
  }

  filterEmpList2(event) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.localList2.length; i++) {
      let item = this.empList1[i];
     // if (item.location_name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        if (item.prod_name.toLowerCase().includes(query.toLowerCase())) {
        filtered.push(item);
      }
    }

    this.filteredEmpList2 = filtered;
  }

  
  filterList5(event) {
  debugger;
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.localList5.length; i++) {
      let item = this.localList5[i];
     // if (item.location_name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
      if (item.location_name.toLowerCase().includes(query.toLowerCase())) { 
        filtered.push(item);
      }
    }

    this.filteredList5 = filtered;
  }



  //saving logics
  
    save() {
      debugger;
      this.stockReceipts.stocktransfersDetailList = this.products2;
      let copy = JSON.parse(JSON.stringify(this.stockReceipts))
      copy.userId=window.sessionStorage.getItem("userName");
      copy.locationId=copy.locationId.id;
      copy.fromLocation=copy.fromLocation.id;
     // copy.tolocation=copy.tolocation.id;
    //  copy.employee=copy.employee.id;
      /*
      copy.stockVerificationDetailList.forEach((item, indexa) => {
      copy.stockVerificationDetailList[indexa].productId = copy.stockVerificationDetailList[indexa].productId.id;
      });
     */
      this.transactionService.saveStockReceipts(copy).subscribe(
        data => {
          if (data.statusCode == "OK") {
            this.showSuccess();
	this.reset();
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


  //table logics
  addvalue() {
//debugger;
    if (this.detailtable.value.length == 0) {
      this.sno = 0;
    }

    this.sno = 1 + this.sno;
    this.products2.push({
      sno: this.sno, id: null, baseId: null, productName: null, productId: null, productCode: null, rate: null, qty: null,amount: null,discPc: null,
      discAmt:null,netAmt: null, isbn: null,author: null,
    });
    this.detailtable.initRowEdit({
      sno: this.sno, id: null, baseId: null, productName: null, productId: null, productCode: null, rate: null, qty: null, availQty: null,discPc: null,
      discAmt:null,netAmt: null, isbn: null,author: null,
    });
    this.clonedProducts[this.products2[this.sno - 1].sno] = { ...this.products2[this.sno - 1] };
    debugger;
  }
  onRowEditInit(product: StockReceiptsDetail) {
    this.clonedProducts[product.id] = { ...product };
  }

  onRowEditSave(product: StockReceiptsDetail) {
    delete this.clonedProducts[product.id];
  }

  onRowEditCancel(product: StockReceiptsDetail, index: number) {
    this.products2[index] = this.clonedProducts[product.id];
    delete this.clonedProducts[product.id];
  }
  onRowDelete(product: StockReceiptsDetail, index: number) {
    this.detailtable.value.forEach((item, indexa) => {
      if (index == indexa) {
        this.detailtable.value.splice(indexa, 1);
        this.sno--;
      }
    });
    this.detailtable.value.forEach((item, indexa) => {
      item.sno=indexa+1;
    });

  }
  selectedAutoCompletedValue(event, index: number, product: StockReceiptsDetail) {
   
    this.detailtable.value;
    this.products2;
    product.author = event.author;
    product.productId=event.id;
    product.productName = event.prod_name;
    product.productCode = event.product_code;
    product.rate = event.product_rate;
    product.supplier = event.supp_name;
    product.publisher = event.publisher_name;
    product.discPc = event.discount;
    product.totalAmt = (product.qty * product.rate);
    product.totalAmt.toFixed(2);

  }
  change2(i, index: number, product: StockReceiptsDetail) {
    if(product.qty == 0){
      alert("more than 1 qty field");
      
    }
    product.amount = (product.qty * product.rate);
    product.amount.toFixed(2);
    
    let grosstotal=0;
    let totaldiscount=0;
    let discount=0;
    let netamounttotal=0;
    let netamt=product.amount;
    
    for( i= 0; i < this.detailtable.value.length; i++){ 
    
         discount =(this.detailtable.value[i].amount*(this.detailtable.value[i].discPc/100));
         this.detailtable.value[i].netAmt=this.detailtable.value[i].amount-discount;
         this.detailtable.value[i].discAmt=discount;
   
         grosstotal= grosstotal + this.detailtable.value[i].amount;
         netamounttotal=netamounttotal+ this.detailtable.value[i].netAmt;
          totaldiscount= totaldiscount+discount;
        
          
      }
        this.stockReceipts.netAmt=netamounttotal;
        this.stockReceipts.grossAmt=grosstotal;
        this.stockReceipts.discAmt = totaldiscount;
       

  }

  change3(event) {
   
    this.stockReceipts.docNo=event.location_code+"-SV-";
    
  }
  editmode() {
    this.products2=this.stockReceipts.stocktransfersDetailList;
    
    this.stockReceipts.docDt=new Date(this.stockReceipts.docDt);
   this.stockReceipts.locationId = this.empList1.find(x => x.id == this.stockReceipts.locationId);
   this.stockReceipts.fromLocation = this.localList5.find(x => x.id == this.stockReceipts.fromLocation);
   for(let i = 0; i < this.stockReceipts.stocktransfersDetailList.length; i++){
    this.stockReceipts.stocktransfersDetailList[i].sno = i+1; 
    this.sno=i+1;
   }
   /*
   for(let i = 0; i < this.stockVerification.stockVerificationDetailList.length; i++){
    this.stockVerification.stockVerificationDetailList[i].productId = this.titleList2.find(x => x.id == this.stockVerification.stockVerificationDetailList[i].productId); 
   }*/
    // this.branchmaster.localOS = this.localList2.find(x => x.id == this.branchmaster.localOS);
   // this.stockVerification.parent = this.parentlocationList3.find(x => x.id == this.stockVerification.parent);
  }
  reset() {
   // window.location.reload();
	this.formForm.resetForm();
   this.stockReceipts = new StockReceipts();
    //this.stockVerificationDetailList = new Array<StockVerificationDetail>();
  this.products2 = new Array();
  this.clonedProducts= {};
    this.sno = 0;
    this.addvalue();
        setTimeout(() => {
          if (this.editmod) {
          //  this.editmod=false;
            //  this.reset();
            // this.router.navigate(['/purchaseInvoice/purchaseInvoice']);
            this.editEntry.emit(this.editmod);
          }
          else{
            this.input.focusInput();
          }
        }, 1500);
    
        

  }
@HostListener('keydown.F7', ['$event']) F7($event: KeyboardEvent) {
  //this.addvalue();
}
@HostListener('keydown.F2', ['$event']) F2($event: KeyboardEvent) {
    if(this.formForm.form.valid){this.save();}
}
@HostListener('keydown.F5', ['$event']) F5($event: KeyboardEvent) { 
    this.reset();
  }
showSuccess() {
  this.messageService.add({ key: 'success', severity: 'success', summary: 'success', detail: 'Data saved Successfully.' });
}
showFail(value:string) {
  this.messageService.add({ key: 'error', severity: 'error', summary: 'error', detail:value });
}

}
