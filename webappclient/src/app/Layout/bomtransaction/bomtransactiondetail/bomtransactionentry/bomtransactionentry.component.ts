import { Component, OnInit, ViewChild, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { UserService } from 'src/app/DemoPages/UserPages/_services/user.service';
import { LookUpFormBean } from 'src/app/Layout/domain/lookupform';
import { MasterService, TransactionService } from 'src/app/layout/service';
import { Bomtransaction, BomTransactionDetail } from 'src/app/layout/domain';
import { Router} from '@angular/router';
import { TableModule } from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {DialogModule} from 'primeng/dialog';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {InputTextModule} from 'primeng/inputtext';
import {ProgressBarModule} from 'primeng/progressbar';
import {DropdownModule} from 'primeng/dropdown';
import { ConfirmPopupModule } from 'primeng/confirmpopup';

import {ConfirmationService, MessageService } from 'primeng/api';
import { AutoComplete } from 'primeng/autocomplete';
import { NgModel } from '@angular/forms';
import jsPDF from 'jspdf';
//import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

import html2canvas from 'html2canvas';
import { ImageConstant } from 'src/app/image-constants';
import { Image1Constant } from 'src/app/image1-constants';
import { BarcodeSearch } from './barcodesearch';
import { ThermalPrint } from './thermalprint';

//@import "src/style/entryscreen.scss";

@Component({
  selector: 'app-bomtransactionentry',
  templateUrl: './bomtransactionentry.component.html',
  styleUrls: ['./bomtransactionentry.component.scss']
})
export class BomtransactionentryComponent implements OnInit {
  [x: string]: any;


  @ViewChild('detailtable') detailtable;
  @ViewChild('formForm') formForm;
  @ViewChild('fe') input: BarcodeSearch;
  @ViewChild('qty') qty;
  //@ViewChild('localOS') private localOS: AutoComplete;

  @ViewChild(ThermalPrint)
  dirToPrint: ThermalPrint;

  @Output()
  editEntry = new EventEmitter();

  selectedProduct: any;

  dateValue: Date;
  @Input()
  public bomtransaction = new Bomtransaction();
   products2: BomTransactionDetail[] = new Array();
  clonedProducts: { [s: string]: BomTransactionDetail; } = {};
  @Input()
  editmod: boolean=false;
   values = [];
  titleList2: any[] = [];
  locationList1: any[] = [];
  totalAmount:number=0;

  map = new Map();
  error: string;
  errorMessage:string

  finishgoodId:number;
  head = [['head']];
  body = [];
  foot = [['Thank you, Visit again.']];
  dhead = [['Sno', 'Itame', 'Qty', 'Rate','Amount']];
  dbody = [];
  dfoot = [];
  count: number = 1;
  title: string = "Hakeempet Tolichowki Hyderabad";
  
  parentlocationList3: any[] = [];
  localList2: any[] = [];
  empList1: any[] = [];
  list3: any[] = [];
    
  filteredEmpList1: any[];
  filteredEmpList2: any[];
  
  filteredList6: any[];

  printFlag: boolean=true;  
  lookUpFormBean2 = new LookUpFormBean();
 
  
  
  lookUpFormBean6 = new LookUpFormBean();
  listLookUpFormBean: LookUpFormBean[] = new Array();
  listLookUpFormBean3: LookUpFormBean[] = new Array();
  

  constructor(private confirmationService: ConfirmationService,private messageService: MessageService, private userService: UserService, private transactionService: TransactionService) { }

  ngOnInit(): void {
   debugger;
    this.lookUpFormBean2.query = "SELECT id, name, hindi_name, uom, description, category, rate, cost, barcode   FROM product";
        
    this.lookUpFormBean2.listName = "LIST2";
       
    this.listLookUpFormBean.push(this.lookUpFormBean2);
   
    this.userService.getMultipleDropdwonValues(this.listLookUpFormBean).subscribe(
      data => {
         this.localList2 = JSON.parse(JSON.stringify(data.data.LIST2));
          
       
        if (this.editmod) {
          this.printFlag=false;
                  this.editmode();
        }else{
       
        setTimeout(() => {
          
        this.input;
        }, 1000);

        this.bomtransaction.billDt= new Date();
        this.bomtransaction.billNo= "786";
        let location= window.sessionStorage.getItem("location");
        // this.bomtransaction.locationId = this.localList6.find(x => x.id == location.split(",")[0]);

        }
      },
      err => {
        this.map = JSON.parse(err.error).message;
      }
    );

  }

  

  
  add(event){
    debugger;
//alert(event.target.value);
    if (this.detailtable.value.length == 0) {
      this.sno = 0;
    }

// Spread Methode
//let clone = { ...userDetails }

// this.table.scrollTop({top: this.table.wrapperViewChild.nativeElement.scrollHeight});

// Object.assign() Method
//let clone = Object.assign({}, userDetails)

// JSON.parse() Method
//let clone = JSON.parse(JSON.stringify(userDetails))
//let qty =JSON.parse(JSON.stringify(this.bomtransaction));
//let copy = JSON.parse(JSON.stringify(this.bomtransaction));

//let clone = Object.assign({}, this.bomtransaction);

for(let i=0;i<this.products2.length;i++){
  if(this.products2[i].itemId==this.selectedProduct.id){
    let qty1:number = event.target.value;
    this.products2[i].qty = Number(this.products2[i].qty) +Number(qty1) ;
    this.products2[i].amount = Number(this.products2[i].qty*this.selectedProduct.rate)  ;
    this.bomtransaction.totAmt=(this.selectedProduct.rate * event.target.value) + this.bomtransaction.totAmt;
    setTimeout(() => {
       debugger;    
      this.input.value="";
      //this.bomtransaction.totQty=null;
      event.target.value="";
      this.input.barcode.nativeElement.focus();
    }, 300);
    return;
  }
}


    this.sno = 1 + this.sno;
    
   // let qty = { ...this.bomtransaction}
    this.products2.push({
      sno: this.sno, id: null, baseId: null, itemName: this.selectedProduct.name, itemId: this.selectedProduct.id, rate: this.selectedProduct.rate, qty: event.target.value,amount: this.selectedProduct.rate * event.target.value   });
    
    this.clonedProducts[this.products2[this.sno - 1].sno] = { ...this.products2[this.sno - 1] };
   this.bomtransaction.totQty=this.sno;
   this.bomtransaction.totAmt=(this.selectedProduct.rate * event.target.value) + this.bomtransaction.totAmt;
    setTimeout(() => {
       debugger;    
      this.input.value="";
      //this.qty.input.nativeElement.focus();
      //this.bomtransaction.totQty=null;
      this.detailtable.scrollTo({top: ((this.sno*10)+20)});
    // this.detailtable.scrollTop({top: this.detailtable.wrapperViewChild.nativeElement.scrollHeight});
     //this.detailtable.bodyComponent.updateOffsetY(this.sno/this.detailtable.bodyComponent.pageSize)
      event.target.value="";
      this.input.barcode.nativeElement.focus();
      
    }, 300);
    
  }
 
  selectedAutoCompletedValue(event) {
    
    this.selectedProduct=event;
    this.onBarcode(event);
    }
    rowSelect(event){
      this.selectedProduct=event;
      setTimeout(() => {
       this.input.barcode.nativeElement.focus();
     }, 300);
    }

   

  //saving logics

   save1() {
    //this.elRef.focusInput();
   
    this.bomtransaction.bomDetailList = this.products2;
    
    let copy = JSON.parse(JSON.stringify(this.bomtransaction))
    
   
   
    this.transactionService.saveBomtransaction(copy).subscribe(
      data => {
        
        if(!data && data == null){
          this.showFail(this.errorMessage);
          return true;
        } 
         if (data.statusCode == "OK") {
          this.showSuccess();
          debugger;
          this.bomtransaction.billNo= data.data.billNo;
          this.dirToPrint.setvalues();
          this.printFlag=false;

       /*   this.bomtransaction.bomDetailList= this.products2;
          this.bomtransaction.billDt= new Date();
        this.bomtransaction.billNo= "101";
          this.bomtransaction.totDiscount = null;
          this.bomtransaction.totQty = null;
          this.bomtransaction.totAmt = null;
          this.bomtransaction.id = null;
          this.bomtransaction.bomDetailList=[];
          this.sno = 0;
          this.products2= [];
          this.reset();*/
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

 
  onKeyUp(){
    this.bomtransaction.cashReturn = this.bomtransaction.cashRecieved - this.bomtransaction.totAmt;
   
  }

  public onBarcode(event): void {
   // alert("279");
    if (event.key === 'Enter') {
      this.qty.nativeElement.focus();
    }
  }

  
  editmode() {
    
    
    this.bomtransaction.billDt=new Date(this.bomtransaction.billDt);
   for(let i = 0; i < this.bomtransaction.bomDetailList.length; i++){
    this.bomtransaction.bomDetailList[i].sno = i+1; 
    this.sno=i+1;
   }
   
   this.products2=this.bomtransaction.bomDetailList;
  }
  reset() {
    //window.location.reload();
    debugger;
   
    this.formForm.resetForm();
    this.bomtransaction = new Bomtransaction();
    this.products2= new Array();
    this.clonedProducts={};
    this.sno = 0;
    this.bomtransaction.billDt= new Date();
        this.bomtransaction.billNo= "101";
        setTimeout(() => {
          if (this.editmod) {
          //  this.editmod=false;
            //  this.reset();
            // this.router.navigate(['/purchaseInvoice/purchaseInvoice']);
            this.editEntry.emit(this.editmod);
          }
          else{
            this.input;
          }
        }, 1500);
    
        

  }
  
  delete(e:Event,product: BomTransactionDetail, index: number) {
    debugger;
    let amount:number=0.00;
    let qty:number=0.00;
    this.detailtable.value.forEach((item, indexa) => {
     
     if (index == indexa) {
       this.detailtable.value.splice(indexa, 1);
       this.sno--;
     }
     });
   this.detailtable.value.forEach((item, indexa) => {
     item.sno=indexa+1;
     item.amount = Number(item.qty*item.rate)  ;
     amount = amount + item.amount;
     qty= item.sno;
   });
   this.bomtransaction.totAmt=amount;
   this.bomtransaction.totQty=qty;
 }

@HostListener('keydown.F7', ['$event']) F7($event: KeyboardEvent) {
  debugger;
  this.save1();
}
@HostListener('keydown.F5', ['$event']) F5($event: KeyboardEvent) { 
    this.reset();
  }
  @HostListener('keydown.F6', ['$event']) F6($event: KeyboardEvent) {
    if(this.printFlag==true) 
    this.openPDF();
}
@HostListener('keydown.F8', ['$event']) F8($event: KeyboardEvent) { 
   if(this.printFlag==true) 
    this.testPrint();
  }
showSuccess() {
  this.messageService.add({ key: 'success', severity: 'success', summary: 'success', detail: 'Data saved Successfully.' });
}
showFail(value:string) {
  this.messageService.add({ key: 'error', severity: 'error', summary: 'error', detail:value });
}

noSuchItem(){
  this.showFail("No Item Selected ");
  setTimeout(() => {
    debugger;    
   this.input.value="";
   //this.bomtransaction.totQty=null;
  // this.detailtable.scrollTo({top: 10});
  //this.detailtable.bodyComponent.updateOffsetY(this.sno/this.detailtable.bodyComponent.pageSize)
  
   this.input.barcode.nativeElement.focus();
 }, 500);
}

///Pdf export code
public openPDF(): void {
  debugger;
  if(this.count==0){
  this.showFail("Select a  row to print.");
  return;
  }
  /*
  else if(this.count>1){
    this.showFail("More than one row is selected,Please select single row to print.");
    return;
  }*/
  this.body.push(['Bill No :'+this.bomtransaction.billNo,'Date :'+this.bomtransaction.billDt.toLocaleDateString()]);
  for(let i=0;i<=this.products2.length-1;i++){
    this.dbody.push([this.products2[i].sno,this.products2[i].itemName,this.products2[i].qty,this.products2[i].rate.toFixed(2),this.products2[i].amount.toFixed(2)]);
}
this.dfoot.push(['','Total Qty',this.bomtransaction.totQty,'Total Amount',this.bomtransaction.totAmt.toFixed(2)]);
  let doc = new jsPDF('p', 'mm', 'a4');
   doc.setProperties({
  title: this.bomtransaction.billNo
  });
   
  doc.addImage(ImageConstant.imageData, 'png', 15, 3, 20, 10);

  doc.setTextColor(0,0,0);
  doc.setFontSize(12);
  doc.text('MAHBOOB STORE',55,13,  { align: 'justify', });
  doc.setFontSize(10);
  doc.text(this.title, 55, 18, { align: 'justify', });
  doc.text('Mobile : 9396226345', 175, 18, { align: 'right', });
 // doc.setTextColor(100);
  doc.setTextColor(0,0,0);
  
  (doc as any).autoTable({
     body: this.body,
    theme: 'plain',
    startY: 28,
    
    bodyStyles:{
      valign: 'middle',
      halign : 'left'
    },
    didDrawCell: data => {
    //  console.log(data.column.index)
    }
  });
  doc.setTextColor(0,0,0);
  (doc as any).autoTable({
    head: this.dhead,
    body: this.dbody,
    foot:this.dfoot,
    showFoot:'lastPage',
    theme: 'grid',
    startY: 34,
    styles: {overflow: 'linebreak', columnWidth: '100', font: 'arial', fontSize: 12, cellPadding: 0.5, overflowColumns: 'linebreak'},
  //  styles: { "overflow": "linebreak", "cellWidth": "wrap", "rowPageBreak": "auto", "halign": "justify", "fontSize": "8", "lineColor": "100", "lineWidth": ".25" }, 
   // styles: { overflow: 'linebreak',fontSize: 8,cellPadding: 0.5, cellWidth: 'wrap' },
    bodyStyles: {lineColor: [0, 0, 0],text: { cellWidth: 'wrap' }},
    headStyles: {fillColor: [255,255,255],lineColor: [0, 0, 0],lineWidth: 0.3,textColor: [0, 0, 0],theme: 'grid', valign: 'middle',halign : 'center',text: { cellWidth: 'wrap' }},
   footStyles: {fillColor: [255,255,255],lineColor: [0, 0, 0],lineWidth: 0.3,textColor: [0, 0, 0],halign: 'right',valign: 'middle', text: { cellWidth: 'wrap' },  },
   columnWidth: 'wrap',
   columnStyles: {text: { cellWidth: 'wrap' },
    0:{ halign: 'center'},
    2:{ halign: 'center'},
    3: {halign: 'right'},
    4: { halign: 'right'}
    
  },
  /*
   styles: {
    cellPadding: 0.5,
    fontSize: 8,
    cellWidth: 'wrap',
    rowPageBreak: 'auto',
    halign: 'justify'
},*/
     
  didDrawCell: data => {
     // console.log(data.column.index)
    },
    });
    (doc as any).autoTable({
      body: this.foot,
     theme: 'plain',
      bodyStyles:{
       valign: 'middle',
       halign : 'center'
     },
     didDrawCell: data => {
     //  console.log(data.column.index)
     }
   });
   //below line for Open PDF document in new tab
   window.open(URL.createObjectURL(doc.output("blob")))
  
  // below line for Open PDF document in new tab
  //doc.output('dataurlnewwindow')
  //var output = doc.output();
 // this.input.barcode.nativeElement.focus();
  // below line for Download PDF document  
//  doc.save(this.title+'.pdf');
}

////thermal printing
public testPrint(): void {
     this.dirToPrint.print();
}

}
