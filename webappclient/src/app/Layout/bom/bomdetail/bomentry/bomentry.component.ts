import { Component, OnInit, ViewChild, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { UserService } from 'src/app/DemoPages/UserPages/_services/user.service';
import { LookUpFormBean } from 'src/app/Layout/domain/lookupform';
import { MasterService, TransactionService } from 'src/app/layout/service';
import { Bom, BomDetail } from 'src/app/layout/domain';
import { Router} from '@angular/router';
import { MessageService } from 'primeng/api';
import { AutoComplete } from 'primeng/autocomplete';
import { NgModel } from '@angular/forms';
import { LocationService } from 'src/app/Layout/service/locationservice';
//@import "src/style/entryscreen.scss";

@Component({
  selector: 'app-bomentry',
  templateUrl: './bomentry.component.html',
  styleUrls: ['./bomentry.component.scss']
})
export class BomentryComponent implements OnInit {
  [x: string]: any;


  @ViewChild('detailtable') detailtable;
  @ViewChild('formForm') formForm;
  @ViewChild('fe') input: AutoComplete;
  //@ViewChild('localOS') private localOS: AutoComplete;

  @Output()
  editEntry = new EventEmitter();

    

  dateValue: Date;
  @Input()
  public bom = new Bom();
   products2: BomDetail[] = new Array();
  clonedProducts: { [s: string]: BomDetail; } = {};
  @Input()
  editmod: boolean=false;
  sno: number = 0;
  values = [];
  titleList2: any[] = [];
  locationList1: any[] = [];
  totalAmount:number=0;

  map = new Map();
  error: string;
  errorMessage:string

  

  
  parentlocationList3: any[] = [];
  localList2: any[] = [];
  empList1: any[] = [];
    
  filteredEmpList1: any[];
  filteredEmpList2: any[];
  

  lookUpFormBean1 = new LookUpFormBean();
  lookUpFormBean2 = new LookUpFormBean();
  
  
  listLookUpFormBean: LookUpFormBean[] = new Array();
  

  constructor(private messageService: MessageService, private userService: UserService, private transactionService: MasterService) { }

  ngOnInit(): void {
    /////list
    this.lookUpFormBean1.query = "SELECT id, prod_name,product_code,uom,rate   FROM tbl_product_info where type in ('FM')";
    this.lookUpFormBean2.query = "SELECT id, prod_name,product_code,uom,rate   FROM tbl_product_info where type in ('RM')";
    
    this.lookUpFormBean1.listName = "LIST1";
    this.lookUpFormBean2.listName = "LIST2";
   
    
    this.listLookUpFormBean.push(this.lookUpFormBean1);
    this.listLookUpFormBean.push(this.lookUpFormBean2);
   
   
    this.userService.getMultipleDropdwonValues(this.listLookUpFormBean).subscribe(
      data => {
        this.empList1 = JSON.parse(JSON.stringify(data.data.LIST1));
        this.localList2 = JSON.parse(JSON.stringify(data.data.LIST2));
        
        if (this.editmod) {
                  this.editmode();
        }else{
        this.addvalue();
        setTimeout(() => {

        this.input.focusInput();
        }, 1000);

        
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
      if (item.prod_name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(item);
      }
    }

    this.filteredEmpList1 = filtered;
  }

  

 
  //saving logics

   save() {
    //this.elRef.focusInput();
    debugger;
    this.bom.bomDetailList = this.products2;
    
    let copy = JSON.parse(JSON.stringify(this.bom))
   // copy.locationId=copy.locationId.id
    //copy.locationCode=copy.locationCode.location_name;
    copy.prodName=copy.productId.prod_name;
    copy.prodCode=copy.productId.product_code;
    copy.productId=copy.productId.id;
   
   //copy.locationId=copy.locationCode.id
    /*
    copy.bomDetailList.forEach((item, indexa) => {
    copy.bomDetailList[indexa].productId = copy.bomDetailList[indexa].productId.id;
    });*/
   
    this.transactionService.saveBom(copy).subscribe(
      data => {
        if(!data && data == null){
          this.showFail(this.errorMessage);
          return true;
        } 
         if (data.statusCode == "OK") {
          this.showSuccess();
          this.bom.bomDetailList = this.products2;
          this.bom.bomName = null;
          this.bom.prodName = null;
          this.bom.description = null;
          this.bom.uom = "";
          this.bom.qty = null;
          this.bom.id = null;
          this.bom.bomDetailList=[];
          this.sno = 0;
          this.products2= [];
          this.addvalue();
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
      sno: this.sno, id: null, baseId: null, productName: null, productId: null, productCode: null, rate: 0, qty: 0  });
    this.detailtable.initRowEdit({
      sno: this.sno, id: null, baseId: null, productName: null, productId: null, productCode: null, rate: 0, qty: 0 });
    this.clonedProducts[this.products2[this.sno - 1].sno] = { ...this.products2[this.sno - 1] };
    
    
  }
  onRowEditInit(product: BomDetail) {
    this.clonedProducts[product.id] = { ...product };
    
  }

  onRowEditSave(product: BomDetail) {
    delete this.clonedProducts[product.id];
  }

  onRowEditCancel(product: BomDetail, index: number) {
    this.products2[index] = this.clonedProducts[product.id];
    delete this.clonedProducts[product.id];
  }
  onRowDelete(product: BomDetail, index: number) {
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
  selectedAutoCompletedValue(event, index: number, product: BomDetail) {
   
    this.detailtable.value;
    this.products2;
    product.productId=event.id;
    product.productName = event.prod_name;
    product.productCode = event.product_code;
    product.rate = event.rate;
    product.uom = event.uom;
    product.amount =  (product.qty * product.rate);
    //product.Disc = event.discount;
    //product.netAmt = (product.qty * product.rate);
    //product.netAmt.toFixed(2);

  }
  change2(i, index: number, product: BomDetail) {
    debugger;
    product.amount = (product.qty * product.rate);
    product.amount.toFixed(2);
    
    let netamounttotal=0;
    
    for( i= 0; i < this.detailtable.value.length; i++){ 
          
      netamounttotal= netamounttotal + this.detailtable.value[i].amount;
             
      }
      this.totalAmount=netamounttotal;
        this.bom.rate=netamounttotal;
    
  }

  change3(event) {
     this.bom.uom=event.uom;
    }
  editmode() {
    this.products2=this.bom.bomDetailList;
    
   // this.bom.docDt=new Date(this.bom.docDt);
   this.bom.productId = this.empList1.find(x => x.id == this.bom.productId);
   
   for(let i = 0; i < this.bom.bomDetailList.length; i++){
    this.bom.bomDetailList[i].sno = i+1; 
    this.bom.bomDetailList[i].productId = this.empList1.find(x => x.id == this.bom.bomDetailList[i].productId);
    this.sno=i+1;
   }
   
  
  }
  reset() {
    //window.location.reload();
    debugger;
   
    this.formForm.resetForm();
    this.bom = new Bom();
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
