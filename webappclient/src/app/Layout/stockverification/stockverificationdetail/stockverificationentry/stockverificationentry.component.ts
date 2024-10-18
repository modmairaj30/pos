import { Component, OnInit, ViewChild, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { UserService } from 'src/app/DemoPages/UserPages/_services/user.service';
import { LookUpFormBean } from 'src/app/Layout/domain/lookupform';
import { MasterService, TransactionService } from 'src/app/layout/service';
import { StockVerification, StockVerificationDetail } from 'src/app/layout/domain';
import { Router} from '@angular/router';
import { MessageService } from 'primeng/api';
import { AutoComplete } from 'primeng/autocomplete';
import { NgModel } from '@angular/forms';
import { LocationService } from 'src/app/Layout/service/locationservice';
//@import "src/style/entryscreen.scss";

@Component({
  selector: 'app-stockverificationentry',
  templateUrl: './stockverificationentry.component.html',//
  styleUrls: ['./stockverificationentry.component.scss']
})
export class StockverificationentryComponent implements OnInit {

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
  errorMessage:string

  @Input()
  public stockVerification = new StockVerification();
   //stockVerificationDetailList = new Array<StockVerificationDetail>();
  products2: StockVerificationDetail[] = new Array();
  clonedProducts: { [s: string]: StockVerificationDetail; } = {};

  filteredEmpList1: any[];
  filteredEmpList2: any[];

  lookUpFormBean1 = new LookUpFormBean();
  lookUpFormBean2 = new LookUpFormBean();

  listLookUpFormBean: LookUpFormBean[] = new Array();

  constructor(private messageService: MessageService,private userService: UserService, private transactionService: TransactionService) { }

  ngOnInit(): void {
    /////list
    this.stockVerification.verifiedBy=window.sessionStorage.getItem("userName");
    this.lookUpFormBean1.query = "select id,location_name,location_code from tbl_location where id in("+sessionStorage.getItem("location")+")";
    this.lookUpFormBean2.query = "SELECT id, prod_name,product_code,author,product_rate, discount, supp_name, publisher_name FROM title_view";

    this.lookUpFormBean1.listName = "LIST1";
    this.lookUpFormBean2.listName = "LIST2";

    this.listLookUpFormBean.push(this.lookUpFormBean1);
    this.listLookUpFormBean.push(this.lookUpFormBean2);


    this.userService.getMultipleDropdwonValues(this.listLookUpFormBean).subscribe(
      data => {
        this.locationList1 = JSON.parse(JSON.stringify(data.data.LIST1));
        this.titleList2 = JSON.parse(JSON.stringify(data.data.LIST2));
        if (this.editmod) {
                    this.editmode();
        }else{
	      this.addvalue();
        setTimeout(() => {
          
          this.input.focusInput();
        }, 1000);
     
         this.stockVerification.docDt= new Date();
        let location= window.sessionStorage.getItem("location");
         this.stockVerification.locationId = this.locationList1.find(x => x.id == location.split(",")[0]);
        }
      },
      err => {
        this.map = JSON.parse(err.error).message;
      }
    );

  }

  filterEmpList1(event) {
    console.log(event)
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.locationList1.length; i++) {
      let item = this.locationList1[i];
    //  if (item.location_name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
      if (item.location_name.toLowerCase().includes(query.toLowerCase())) { 
        filtered.push(item);
      }
    }

    this.filteredEmpList1 = filtered;
  }

  filterEmpList2(event) {
    let filtered: any[] = [];
    let query = event.query;
    
    for (let i = 0; i < this.titleList2.length; i++) {
      let item = this.titleList2[i];
      //if (item.prod_name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        if (item.prod_name.toLowerCase().includes(query.toLowerCase())) {
        filtered.push(item);
      }
    }
    //debugger
    this.filteredEmpList2 = filtered;
  }


  //saving logics

  save() {
    //this.elRef.focusInput();
    this.stockVerification.stockVerificationDetailList = this.products2;
    let copy = JSON.parse(JSON.stringify(this.stockVerification))
    copy.userId=window.sessionStorage.getItem("userName");
    copy.locationId=copy.locationId.id
    /*
    copy.stockVerificationDetailList.forEach((item, indexa) => {
    copy.stockVerificationDetailList[indexa].productId = copy.stockVerificationDetailList[indexa].productId.id;
    });
   */
    this.transactionService.saveStockVerification(copy).subscribe(
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
    if (this.detailtable.value.length == 0) {
      this.sno = 0;
    }

    this.sno = 1 + this.sno;
    this.products2.push({
      sno: this.sno, id: null, baseId: null, productName: null, productId: null, productCode: null, rate: null, qty: null, availQty: null, difference: null, description: null, author: null, supplier: null, publisher: null,
      fldBin: null, rackNo: null, fldSrate: null, fldDisc: null, totalAmt: null, dummyD: null
    });
    this.detailtable.initRowEdit({
      sno: this.sno, id: null, baseId: null, productName: null, productId: null, productCode: null, rate: null, qty: null, availQty: null, difference: null, description: null, author: null, supplier: null, publisher: null,
      fldBin: null, rackNo: null, fldSrate: null, fldDisc: null, totalAmt: null, dummyD: null
    });
    this.clonedProducts[this.products2[this.sno - 1].sno] = { ...this.products2[this.sno - 1] };
    
    
  }
  onRowEditInit(product: StockVerificationDetail) {
    this.clonedProducts[product.id] = { ...product };
    
  }

  onRowEditSave(product: StockVerificationDetail) {
    delete this.clonedProducts[product.id];
  }

  onRowEditCancel(product: StockVerificationDetail, index: number) {
    this.products2[index] = this.clonedProducts[product.id];
    delete this.clonedProducts[product.id];
  }
  onRowDelete(product: StockVerificationDetail, index: number) {
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
  selectedAutoCompletedValue(event, index: number, product: StockVerificationDetail) {
   
    this.detailtable.value;
    this.products2;
    product.author = event.author;
    product.productId=event.id;
    product.productName = event.prod_name;
    product.productCode = event.product_code;
    product.rate = event.product_rate;
    product.supplier = event.supp_name;
    product.publisher = event.publisher_name;
    product.fldDisc = event.discount;
    product.totalAmt = (product.qty * product.rate);
    product.totalAmt.toFixed(2);

  }
  change2(event, index: number, product: StockVerificationDetail) {
    if(product.qty == 0){
      alert("more than 1 qty field");
      
    }
    product.totalAmt = (product.qty * product.rate);
    product.totalAmt.toFixed(2);
  }

  change3(event) {
     this.stockVerification.docNo=event.location_code+"-SV-";
    }
  editmode() {
    this.products2=this.stockVerification.stockVerificationDetailList;
    this.stockVerification.docDt=new Date(this.stockVerification.docDt);
   this.stockVerification.locationId = this.locationList1.find(x => x.id == this.stockVerification.locationId);
   for(let i = 0; i < this.stockVerification.stockVerificationDetailList.length; i++){
    this.stockVerification.stockVerificationDetailList[i].sno = i+1; 
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
    //window.location.reload();
    debugger;
   
    this.formForm.resetForm();
    this.stockVerification = new StockVerification();
    this.products2= new Array();
    this.clonedProducts={};
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
  this.addvalue();
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
