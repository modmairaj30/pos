import { Component, OnInit, ViewChild, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { UserService } from 'src/app/DemoPages/UserPages/_services/user.service';
import { LookUpFormBean } from 'src/app/Layout/domain/lookupform';
import { MasterService, TransactionService } from 'src/app/layout/service';
import { StockTransfer, StockTransferDetail } from 'src/app/layout/domain';
import { Router} from '@angular/router';
import { MessageService } from 'primeng/api';
import { AutoComplete } from 'primeng/autocomplete';
import { NgModel } from '@angular/forms';
import { LocationService } from 'src/app/Layout/service/locationservice';
//@import "src/style/entryscreen.scss";

@Component({
  selector: 'app-stocktransferentry',
  templateUrl: './stocktransferentry.component.html',//
  styleUrls: ['./stocktransferentry.component.scss']
})
export class StocktransferentryComponent implements OnInit {

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
  locationList2: any[] = [];

  map = new Map();
  error: string;
  errorMessage:string

  @Input()
  public stocktransfer = new StockTransfer();
   //stocktransferDetailList = new Array<stocktransferDetail>();
  products2: StockTransferDetail[] = new Array();
  clonedProducts: { [s: string]: StockTransferDetail; } = {};

  filteredEmpList1: any[];
  filteredEmpList2: any[];
  filteredEmpList3: any[];

  lookUpFormBean1 = new LookUpFormBean();
  lookUpFormBean2 = new LookUpFormBean();
  lookUpFormBean3 = new LookUpFormBean();

  listLookUpFormBean: LookUpFormBean[] = new Array();

  constructor(private messageService: MessageService,private userService: UserService, private transactionService: TransactionService) { }

  ngOnInit(): void {
    /////list
    let location= window.sessionStorage.getItem("location");
    this.lookUpFormBean1.query = "select id,location_name,location_code from tbl_location where id in("+sessionStorage.getItem("location")+")";
    this.lookUpFormBean2.query = "select id, product_id, location_id, supp_name, qty, cum_qty, fld_sunit, qtytab, product_code, prod_name, fld_disc, isbn_code, product_group, rate, product_rate, author, publisher_name, fld_srate, discount from view_batchno_cumqty9 where location_id="+location;
    this.lookUpFormBean3.query = "select id,location_name,location_code from tbl_location2 ";
    this.lookUpFormBean1.listName = "LIST1";
    this.lookUpFormBean2.listName = "LIST2";
    this.lookUpFormBean3.listName = "LIST3";

    

    this.listLookUpFormBean.push(this.lookUpFormBean1);
    this.listLookUpFormBean.push(this.lookUpFormBean2);
    this.listLookUpFormBean.push(this.lookUpFormBean3);


    this.userService.getMultipleDropdwonValues(this.listLookUpFormBean).subscribe(
      data => {
        this.locationList1 = JSON.parse(JSON.stringify(data.data.LIST1));
        this.titleList2 = JSON.parse(JSON.stringify(data.data.LIST2));
        this.locationList2 = JSON.parse(JSON.stringify(data.data.LIST3));
        if (this.editmod) {
                    this.editmode();
        }else{
	      this.addvalue();
        setTimeout(() => {
          
          this.input.focusInput();
        }, 1000);
     
         this.stocktransfer.docDt= new Date();
         let location= window.sessionStorage.getItem("location");
         this.stocktransfer.locationId = this.locationList1.find(x => x.id == location.split(",")[0]);
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
      //if (item.location_name.toLowerCase().includes(query.toLowerCase())) { 
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
      if (item.prod_name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        //if (item.prod_name.toLowerCase().includes(query.toLowerCase())) {
        filtered.push(item);
      }
    }
    //debugger
    this.filteredEmpList2 = filtered;
  }
  filterEmpList3(event) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.locationList2.length; i++) {
      let item = this.locationList2[i];
      if (item.location_name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
      //if (item.location_name.toLowerCase().includes(query.toLowerCase())) { 
        filtered.push(item);
      }
    }

    this.filteredEmpList3 = filtered;
  }

  //saving logics

  save() {
    //this.elRef.focusInput();
    this.stocktransfer.stocktransfersDetailList = this.products2;
    let copy = JSON.parse(JSON.stringify(this.stocktransfer))

    copy.userId=window.sessionStorage.getItem("userName");
    copy.tolocation =  copy.tolocation.id;
    copy.locationId=copy.locationId.id
    /*
    copy.stocktransferDetailList.forEach((item, indexa) => {
    copy.stocktransferDetailList[indexa].productId = copy.stocktransferDetailList[indexa].productId.id;
    });
   */
    this.transactionService.saveStockTransfer(copy).subscribe(
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
      sno: this.sno, id: null, baseId: null, productName: null, productId: null, productCode: null, rate: null, qty: null, netAmt: null, discAmt: null, discPc: null, author: null, supplier: null, publisher: null,
      suppRate: null, fldSrate: null, fldDisc: null, amount: null    });
    this.detailtable.initRowEdit({
      sno: this.sno, id: null, baseId: null, productName: null, productId: null, productCode: null, rate: null, qty: null, netAmt: null, discAmt: null, discPc: null, author: null, supplier: null, publisher: null,
      suppRate: null, rackNo: null, fldSrate: null, fldDisc: null, amount: null  });
    this.clonedProducts[this.products2[this.sno - 1].sno] = { ...this.products2[this.sno - 1] };
    
    
  }
  onRowEditInit(product: StockTransferDetail) {
    this.clonedProducts[product.id] = { ...product };
    
  }

  onRowEditSave(product: StockTransferDetail) {
    delete this.clonedProducts[product.id];
  }

  onRowEditCancel(product: StockTransferDetail, index: number) {
    this.products2[index] = this.clonedProducts[product.id];
    delete this.clonedProducts[product.id];
  }
  onRowDelete(product: StockTransferDetail, index: number) {
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
  selectedAutoCompletedValue(event, index: number, product: StockTransferDetail) {
   
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
    //product.amount = (product.qty * product.rate);
    //product.amount.toFixed(2);

  }
  change2(i, index: number, product: StockTransferDetail) {
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
        this.stocktransfer.netAmt=netamounttotal;
        this.stocktransfer.grossAmt=grosstotal;
        this.stocktransfer.discAmt = totaldiscount;
  }

  change3(event) {
     this.stocktransfer.docNo=event.location_code+"-ST-";
    } 
  change4(event) {

  }
  editmode() {
    this.products2=this.stocktransfer.stocktransfersDetailList;
    this.stocktransfer.docDt=new Date(this.stocktransfer.docDt);
   this.stocktransfer.locationId = this.locationList1.find(x => x.id == this.stocktransfer.locationId);
   this.stocktransfer.tolocation = this.locationList2.find(x => x.id == this.stocktransfer.tolocation);
   for(let i = 0; i < this.stocktransfer.stocktransfersDetailList.length; i++){
    this.stocktransfer.stocktransfersDetailList[i].sno = i+1; 
    this.sno=i+1;
   }
   /*
   for(let i = 0; i < this.stocktransfer.stocktransferDetailList.length; i++){
    this.stocktransfer.stocktransferDetailList[i].productId = this.titleList2.find(x => x.id == this.stocktransfer.stocktransferDetailList[i].productId); 
   }*/
    // this.branchmaster.localOS = this.localList2.find(x => x.id == this.branchmaster.localOS);
   // this.stocktransfer.parent = this.parentlocationList3.find(x => x.id == this.stocktransfer.parent);
  }
  reset() {
    //window.location.reload();
    debugger;
   
    this.formForm.resetForm();
    this.stocktransfer = new StockTransfer();
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
