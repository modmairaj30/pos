import { Component, OnInit, ViewChild, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { UserService } from 'src/app/DemoPages/UserPages/_services/user.service';
import { LookUpFormBean } from 'src/app/Layout/domain/lookupform';
import { TransactionService } from 'src/app/layout/service';
import { PurchaseInvoice, PurchaseInvoiceDetail } from 'src/app/layout/domain';
import { MessageService } from 'primeng/api';
import { AutoComplete } from 'primeng/autocomplete';

@Component({
  selector: 'app-purchaseinvoiceentry',
  templateUrl: './purchaseinvoiceentry.component.html',
  styleUrls: ['./purchaseinvoiceentry.component.scss']
})
export class PurchaseinvoiceentryComponent implements OnInit {
  [x: string]: any;
  @ViewChild('detailtable') detailtable;
  @ViewChild('formForm') formForm;
  @ViewChild('fe') input: AutoComplete;

  @Output()
  editEntry = new EventEmitter();

  @Output() 
  shareData1 = new EventEmitter();

  @Input()
  shareData: any[] = [];

  dateValue: Date;
  @Input()
  editmod: boolean = false;
  sno: number = 0;
  values = [];

  titleList2: any[] = [];
  titleList3: any[] = [];

  temptitleList2: any[] = [];
  parentlocationList3: any[] = [];
  localList2: any[] = [];
  empList1: any[] = [];
  localList4: any[] = [];
  localList5: any[] = [];
  map = new Map();
  error: string;
  errorMessage: string
  isSupplier: boolean = false;
  @Input()
  public purchaseInvoice = new PurchaseInvoice();
  //PurchaseInvoiveDetList = new Array<purchaseInvoiceDetail>();
  products2: PurchaseInvoiceDetail[] = new Array();
  clonedProducts: { [s: string]: PurchaseInvoiceDetail; } = {};

  filteredEmpList1: any[];
  
  filteredEmpList2: any[];
  filteredEmpList3: any[];

  filteredList5: any[];
  suppId: string;
  lookUpFormBean1 = new LookUpFormBean();
  lookUpFormBean2 = new LookUpFormBean();
  lookUpFormBean3 = new LookUpFormBean();
  lookUpFormBean5 = new LookUpFormBean();
  listLookUpFormBean: LookUpFormBean[] = new Array();
abc:string;
  constructor(private messageService: MessageService, private userService: UserService, private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.lookUpFormBean1.query = "select id, party_name, address_1, address_2, city, state, telno, Contactperson, mobileno, pincode, email, mobile2, faxno,phno,cont_person, address_3 from tbl_party_info where party_type=2;";
    this.lookUpFormBean2.query = "SELECT id, prod_name,product_code,author,product_rate, discount, supp_name,supp_id, publisher_name FROM title_view3";
    this.lookUpFormBean3.query =
      "SELECT id, prod_name,product_code,author,product_rate, discount, supp_name, publisher_name FROM title_view where type in ('FG') ";

    this.lookUpFormBean5.query = "select id,location_name from tbl_location";
    this.lookUpFormBean1.listName = "LIST1";
    this.lookUpFormBean2.listName = "LIST2";
    this.lookUpFormBean3.listName = "LIST3";

    this.lookUpFormBean5.listName = "LIST5";
    this.listLookUpFormBean.push(this.lookUpFormBean1);
    this.listLookUpFormBean.push(this.lookUpFormBean2);
    this.listLookUpFormBean.push(this.lookUpFormBean3);

    this.listLookUpFormBean.push(this.lookUpFormBean5);

    this.userService.getMultipleDropdwonValues(this.listLookUpFormBean).subscribe(
      data => {
        this.empList1 = JSON.parse(JSON.stringify(data.data.LIST1));
        this.titleList2 = JSON.parse(JSON.stringify(data.data.LIST2));
        this.titleList3 = JSON.parse(JSON.stringify(data.data.LIST3));
        this.localList5 = JSON.parse(JSON.stringify(data.data.LIST5));
        this.shareData[0]=this.empList1;
        this.shareData[1]=this.localList5;
       // this.shareData1.emit(this.shareData);
       // this.editEntry.emit(this.editmod);
        //this.userService.subjectPartys.next(this.empList1);
        //this.userService.subjectPartys.complete();
        //this.userService.subjectLocations.complete();
        if (this.editmod) {
          this.editmode();
        } else {
	      this.addvalue();
        setTimeout(() => {
  		this.input.focusInput();
        }, 1000);
          this.purchaseInvoice.docDt = new Date();
          let location= window.sessionStorage.getItem("location");
         this.purchaseInvoice.locationId = this.localList5.find(x => x.id == 11);

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
     // if (item.party_name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
      if (item.party_name.toLowerCase().includes(query.toLowerCase())) {   
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
     // if (item.prod_name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
      if (item.prod_name.toLowerCase().includes(query.toLowerCase())) {
        filtered.push(item);
      }
    }

    this.filteredEmpList2 = filtered;
  }
  filterEmpList3(event) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < this.titleList3.length; i++) {
      let item = this.titleList3[i];
      //if (item.prod_name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
      if (item.prod_name.toLowerCase().includes(query.toLowerCase())) {
        filtered.push(item);
        console.log(filtered)
      }
    }
    //debugger
    this.filteredEmpList3 = filtered;
    console.log(this.filterEmpList3)
  }



  filterList5(event) {

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
    //this.elRef.focusInput();
    //debugger;
   //let ab= this.userService.getLocations();
    
    this.purchaseInvoice.purchaseInvoiveDetList = this.products2;
    let copy = JSON.parse(JSON.stringify(this.purchaseInvoice))
    copy.locationId = copy.locationId.id;
    copy.partyId = copy.partyId.id;
    

    this.transactionService.savePurchaseInvoice(copy).subscribe(
     
      data => {         
        if (data.statusCode == "OK") {
          this.showSuccess();
          this.purchaseInvoice.docDt = new Date();
          this.purchaseInvoice.partyId = "";
          this.purchaseInvoice.address = "";
          this.purchaseInvoice.address2 = "";
          this.purchaseInvoice.address3 = "";
          this.purchaseInvoice.city = "";
          this.purchaseInvoice.state = "";
          this.purchaseInvoice.pin = "";
          this.purchaseInvoice.phoneNo = "";
          this.purchaseInvoice.address2 = "";
          this.purchaseInvoice.phoneNo = "";
          this.purchaseInvoice.faxNo = "";
          this.suppId = "";
          this.purchaseInvoice.grossAmt = null;
          this.purchaseInvoice.discountAmt = null;
          this.purchaseInvoice.amt = null;
          this.purchaseInvoice.purchaseInvoiveDetList=[];
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
    
    this.userService.subjectLocations.subscribe(val => {
      console.log(val);

    });
    if (this.detailtable.value.length == 0) {
      this.sno = 0;
    }
    
    //this.purchaseInvoice.partyId = this.purchaseInvoice.id;
    this.sno = 1 + this.sno;
    this.products2.push({
      sno: this.sno, id: null, baseId: null, productName: null, productId: null, productCode: null, rate: null, qty: null, netAmt: null, amount: null, discamt: null, discPc: null, author: null, supplier: null, publisher: null,
      
    });
    this.detailtable.initRowEdit({
      sno: this.sno, id: null, baseId: null, productName: null, productId: null, productCode: null, rate: null, qty: null, netAmt: null, amount: null, discamt: null, discPc: null, author: null, supplier: null, publisher: null,
      
    });
    this.clonedProducts[this.products2[this.sno - 1].sno] = { ...this.products2[this.sno - 1] };
    
    

  }
  onRowEditInit(product: PurchaseInvoiceDetail) {
    this.clonedProducts[product.id] = { ...product };

  }

  onRowEditSave(product: PurchaseInvoiceDetail) {
    delete this.clonedProducts[product.id];
  }

  onRowEditCancel(product: PurchaseInvoiceDetail, index: number) {
    this.products2[index] = this.clonedProducts[product.id];
    delete this.clonedProducts[product.id];
  }
  onRowDelete(product: PurchaseInvoiceDetail, index: number) {
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

 
  selectedAutoCompletedValue(event, index: number, product: PurchaseInvoiceDetail) {

    this.detailtable.value;
    this.products2;
    product.author = event.author;
    product.productId = event.id;
    product.productName = event.prod_name;
    product.productCode = event.product_code;
    product.rate = event.product_rate;
    product.supplier = event.supp_name;
    product.publisher = event.publisher_name;
    product.discPc = event.discount;
    product.netAmt = (product.qty * product.rate);
    product.netAmt.toFixed(2);


  }
  change2(i, index: number, product: PurchaseInvoiceDetail) {
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
        this.purchaseInvoice.amt=netamounttotal;
        this.purchaseInvoice.grossAmt=grosstotal;
        this.purchaseInvoice.discountAmt = totaldiscount;
       

  }
 

  change3(event) {
    this.purchaseInvoice.docNo = event.location_code + "-PI-";
  }
  change4(event){
    this.purchaseInvoice.address = event.address_1;
    this.purchaseInvoice.address2 = event.address_2;
    this.purchaseInvoice.address3 = event.address_3;
    this.purchaseInvoice.city = event.city;
    this.purchaseInvoice.state = event.state;
    this.purchaseInvoice.pin = event.pincode;
    this.purchaseInvoice.phoneNo = event.phoneNo;
    this.purchaseInvoice.address2 = event.address_2;
    this.purchaseInvoice.phoneNo = event.phno;
    this.purchaseInvoice.faxNo = event.faxNo;
    this.suppId = event.id;
    let filtered: any[] = [];
    let query = event.id;
    debugger;
   
    for (let i = 0; i < this.titleList2.length; i++) {
      let item = this.titleList2[i];
      if (item.supp_id.toLowerCase()==(query.toLowerCase())) {
             filtered.push(item);
      }
    }
    this.temptitleList2=filtered;
     
  }
    
    
  

  editmode() {
   
    // this.editmod=false;
    this.suppId = this.purchaseInvoice.partyId;
    let filtered: any[] = [];
    
    let query = this.purchaseInvoice.partyId;
    for (let i = 0; i < this.titleList2.length; i++) {
      let item = this.titleList2[i];
      if (item.supp_id==(query)) {
             filtered.push(item);
      }
    }
    this.temptitleList2=filtered;
    this.products2 = this.purchaseInvoice.purchaseInvoiveDetList;
    this.purchaseInvoice.docDt = new Date(this.purchaseInvoice.docDt);
    this.purchaseInvoice.locationId = this.localList5.find(x => x.id == this.purchaseInvoice.locationId);
    this.purchaseInvoice.partyId = this.empList1.find(x => x.id == this.purchaseInvoice.partyId);
    for (let i = 0; i < this.purchaseInvoice.purchaseInvoiveDetList.length; i++) {
      this.sno = 1 + i;
      this.purchaseInvoice.purchaseInvoiveDetList[i].sno = this.sno;
      
    }
    /*
    for(let i = 0; i < this.purchaseInvoice.PurchaseInvoiveDetList.length; i++){
     this.purchaseInvoice.PurchaseInvoiveDetList[i].productId = this.titleList2.find(x => x.id == this.purchaseInvoice.PurchaseInvoiveDetList[i].productId); 
    }*/
    // this.branchmaster.localOS = this.localList2.find(x => x.id == this.branchmaster.localOS);
    // this.purchaseInvoice.parent = this.parentlocationList3.find(x => x.id == this.purchaseInvoice.parent);
    
  }
  reset() {
    //window.location.reload();
    //debugger;
   
    this.formForm.resetForm();
    this.purchaseInvoice = new PurchaseInvoice();
    this.products2= new Array();
    this.clonedProducts={};
    this.sno = 0;
    this.addvalue();
        setTimeout(() => {
          if (this.editmod) {
          //  this.editmod=false;
            //  this.();
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
