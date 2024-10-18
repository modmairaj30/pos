import { Component, OnInit, ViewChild, Output, EventEmitter, Input, HostListener } from '@angular/core';
import { StockRequisition, StockRequistionDetail } from 'src/app/layout/domain';
import { UserService } from 'src/app/DemoPages/UserPages/_services/user.service';
import { LookUpFormBean } from 'src/app/Layout/domain/lookupform';
import { TransactionService } from 'src/app/layout/service';
import { MessageService } from 'primeng/api';
//@import "src/style/entryscreen.scss";

@Component({
  selector: 'app-stocktransferrequisitionentry',
  templateUrl: './stocktransferrequisitionentry.component.html',//
  styleUrls: ['./stocktransferrequisitionentry.component.scss']
})
export class StocktransferrequisitionentryComponent implements OnInit {

  @ViewChild('detailtable') detailtable;

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
  public stockRequisition = new StockRequisition();
   //stockVerificationDetailList = new Array<StockVerificationDetail>();
  products2: StockRequistionDetail[] = new Array();
  clonedProducts: { [s: string]: StockRequistionDetail; } = {};

  filteredEmpList1: any[];
  filteredEmpList2: any[];

  lookUpFormBean1 = new LookUpFormBean();
  lookUpFormBean2 = new LookUpFormBean();

  listLookUpFormBean: LookUpFormBean[] = new Array();
  input: any;

  constructor(private messageService: MessageService,private userService: UserService, private transactionService: TransactionService) { }

  ngOnInit(): void {
    /////list
    this.stockRequisition.verifiedBy=window.sessionStorage.getItem("userName");
    this.lookUpFormBean1.query = "select id,location_name,location_code from tbl_location where id in("+sessionStorage.getItem("location")+")";
    this.lookUpFormBean2.query = "SELECT id, prod_name,product_code,author,product_rate, discount, supp_name,supp_id, publisher_name FROM title_view3";

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

            this.stockRequisition.docDt= new Date();
            let location= window.sessionStorage.getItem("location");
         this.stockRequisition.locationId = this.locationList1.find(x => x.id == location.split(",")[0]);

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
    for (let i = 0; i < this.locationList1.length; i++) {
      let item = this.locationList1[i];
      if (item.location_name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(item);
      }
    }

    this.filteredEmpList1 = filtered;
  }

  filterEmpList2(event) {
    let filtered: any[] = [];
    let query = event.query;
    debugger;
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
    debugger;
    this.stockRequisition.stockRequisitionDetailList = this.products2;
    let copy = JSON.parse(JSON.stringify(this.stockRequisition))
    copy.userId=window.sessionStorage.getItem("userName");
    copy.locationId=copy.locationId.id
    /*
    copy.stockVerificationDetailList.forEach((item, indexa) => {
    copy.stockVerificationDetailList[indexa].productId = copy.stockVerificationDetailList[indexa].productId.id;
    });
   */
    this.transactionService.saveStockRequisition(copy).subscribe(
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
      sno: this.sno, id: null, baseId: null, productName: null, productId: null, productCode: null, rate: 0, qty: 0, availQty: 0, difference: null, description: null, author: null, supplier: null, publisher: null,
      fldBin: null, rackNo: null, fldSrate: null, fldDisc: null, totalAmt: null, dummyD: null
    });
    this.detailtable.initRowEdit({
      sno: this.sno, id: null, baseId: null, productName: null, productId: null, productCode: null, rate: 0, qty: 0, availQty: 0, difference: null, description: null, author: null, supplier: null, publisher: null,
      fldBin: null, rackNo: null, fldSrate: null, fldDisc: null, totalAmt: null, dummyD: null
    });
    this.clonedProducts[this.products2[this.sno - 1].sno] = { ...this.products2[this.sno - 1] };
    debugger;
  }
  onRowEditInit(product: StockRequistionDetail) {
    this.clonedProducts[product.id] = { ...product };
  }

  onRowEditSave(product: StockRequistionDetail) {
    delete this.clonedProducts[product.id];
  }

  onRowEditCancel(product: StockRequistionDetail, index: number) {
    this.products2[index] = this.clonedProducts[product.id];
    delete this.clonedProducts[product.id];
  }
  onRowDelete(product: StockRequistionDetail, index: number) {
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
  change1(event, index: number, product: StockRequistionDetail) {
    debugger;
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
  change2(i, index: number, product: StockRequistionDetail) {
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
         this.detailtable.value[i].discamt=discount;
   
         grosstotal= grosstotal + this.detailtable.value[i].amount;
         netamounttotal=netamounttotal+ this.detailtable.value[i].netAmt;
          totaldiscount= totaldiscount+discount;
        
          
      }
        //this.stockRequisition.amt=netamounttotal;
        this.stockRequisition.grossAmt=grosstotal;
        //this.stockRequisition.discountAmt = totaldiscount;
       

  }

  change3(event) {
    debugger;
    this.stockRequisition.docNo=event.location_code+"-SV-";
    debugger;
  }
  editmode() {
    this.products2=this.stockRequisition.stockRequisitionDetailList;
    debugger;
    this.stockRequisition.docDt=new Date(this.stockRequisition.docDt);
   this.stockRequisition.locationId = this.locationList1.find(x => x.id == this.stockRequisition.locationId);
   for(let i = 0; i < this.stockRequisition.stockRequisitionDetailList.length; i++){
    this.stockRequisition.stockRequisitionDetailList[i].sno = i+1; 
    this.sno=i+1;
   }
   
   /*for(let i = 0; i < this.stockRequisition.stockRequisitionDetailList.length; i++){
    this.stockRequisition.stockRequisitionDetailList[i].productId = this.titleList2.find(x => x.id == this.stockRequisition.stockRequisitionDetailList[i].productId); 
   }*/
    // this.branchmaster.localOS = this.localList2.find(x => x.id == this.branchmaster.localOS);
   // this.stockVerification.parent = this.parentlocationList3.find(x => x.id == this.stockVerification.parent);
  }
  reset() {
    window.location.reload();
   // this.stockVerification = new StockVerification();
    //this.stockVerificationDetailList = new Array<StockVerificationDetail>();
  //this.products2 = new Array();
  //this.clonedProducts= {};

  }

  
@HostListener('keydown.F3', ['$event']) F3($event: KeyboardEvent) {
   //alert('opening product: ');
  debugger;
  this.addvalue();
 
}
showSuccess() {
  // this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
  this.messageService.add({ key: 'success', severity: 'success', summary: 'success', detail: 'Data saved Successfully.' });
}
showFail(value:string) {
  // this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
  this.messageService.add({ key: 'error', severity: 'error', summary: 'error', detail:value });
}
}
