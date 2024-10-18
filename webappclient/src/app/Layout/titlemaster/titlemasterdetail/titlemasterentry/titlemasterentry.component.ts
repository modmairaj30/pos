import { Component, OnInit, ViewChild, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { UserService } from 'src/app/DemoPages/UserPages/_services/user.service';
import { LookUpFormBean } from 'src/app/Layout/domain/lookupform';
import { TitleMaster } from 'src/app/Layout/domain/titlemaster.model';
import { AutoComplete } from 'primeng/autocomplete';
import { MasterService } from 'src/app/layout/service';
import { MessageService } from 'primeng/api';
import { ProductDetail } from 'src/app/layout/domain';
//@import "src/style/entryscreen.scss";

@Component({
  selector: 'app-titlemasterentry',
  templateUrl: './titlemasterentry.component.html',//
  styleUrls: ['./titlemasterentry.component.scss']
})
export class TitlemasterentryComponent implements OnInit {

  @ViewChild('detailtable') detailtable;
  @ViewChild('formForm') formForm;
   @ViewChild('fe') input: ElementRef;
	
  @Output()
  editEntry = new EventEmitter();
  dateValue: Date;
  @Input()
  editmod: boolean = false;
  sno: number = 0;
  values = [];
  parentlocationList3: any[] = [];
  localList2: any[] = [];
  empList1: any[] = [];
  localList4: any[] = [];
  localList5: any[] = [];
  localList6: any[] = [];
  map = new Map();
  error: string;
  errorMessage: string

  @Input()
  titlemaster = new TitleMaster();
  
  products2: ProductDetail[] = new Array();
  clonedProducts: { [s: string]: ProductDetail; } = {};

  filteredEmpList1: any[];
  filteredEmpList2: any[];
  filteredParentlocationList3: any[];
  filteredList5: any[];
  publisherdLists: any[];
  suppliernameLists: any[];

  lookUpFormBean1 = new LookUpFormBean();
  lookUpFormBean2 = new LookUpFormBean();
  lookUpFormBean3 = new LookUpFormBean();
  lookUpFormBean4 = new LookUpFormBean();
  lookUpFormBean5 = new LookUpFormBean();


  listLookUpFormBean: LookUpFormBean[] = new Array();
  
  constructor(private userService: UserService, private masterService: MasterService, private messageService: MessageService) { }

  ngOnInit(): void {
    /////list
   // this.lookUpFormBean1.query = "select id,category from categorys";
   debugger;
     this.lookUpFormBean1.query = "select id,party_name from tbl_party_info where product_group=2";
    this.lookUpFormBean2.query = "select group_name,groupcode from tbl_product_groups";
    //this.lookUpFormBean3.query = " select id,subjects from subjects";
    this.lookUpFormBean4.query = " select id,party_name,party_type from tbl_party_info where party_type=3";
    //this.lookUpFormBean5.query = "select id,authr_name,address,phn_no,email from author_master";
    
    this.lookUpFormBean1.listName = "LIST1";
    this.lookUpFormBean2.listName = "LIST2";
   // this.lookUpFormBean3.listName = "LIST3";
    this.lookUpFormBean4.listName = "LIST4";
    //this.lookUpFormBean5.listName = "LIST5";
    

    this.listLookUpFormBean.push(this.lookUpFormBean1);
    this.listLookUpFormBean.push(this.lookUpFormBean2);
   // this.listLookUpFormBean.push(this.lookUpFormBean3);
    this.listLookUpFormBean.push(this.lookUpFormBean4);
   // this.listLookUpFormBean.push(this.lookUpFormBean5);
    

    this.userService.getMultipleDropdwonValues(this.listLookUpFormBean).subscribe(
      data => {
        this.empList1 = JSON.parse(JSON.stringify(data.data.LIST1));
        this.localList2 = JSON.parse(JSON.stringify(data.data.LIST2));
      //  this.parentlocationList3 = JSON.parse(JSON.stringify(data.data.LIST3));
        this.localList4 = JSON.parse(JSON.stringify(data.data.LIST4));
       // this.localList5 = JSON.parse(JSON.stringify(data.data.LIST5));
        debugger;
         if (this.editmod) {
          this.editmode();
        }
	else{
	      this.addvalue();
        setTimeout(() => {
          this.input.nativeElement.focus();
        }, 1000);
     
         this.titlemaster.docDt= new Date();
         
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
    //  if (item.party_name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
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
      let item = this.localList2[i];
     // if (item.group_name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
      if (item.group_name.toLowerCase().includes(query.toLowerCase())) {
               filtered.push(item);
      }
    }

    this.filteredEmpList2 = filtered;
  }

  filterParentlocationList3(event) {

    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.parentlocationList3.length; i++) {
      let item = this.parentlocationList3[i];
     // if (item.subjects.toLowerCase().indexOf(query.toLowerCase()) == 0) {
      if (item.subjects.toLowerCase().includes(query.toLowerCase())) {
        filtered.push(item);
      }
    }

    this.filteredParentlocationList3 = filtered;
  }

  publisherList(event) {

    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.localList4.length; i++) {
      let item = this.localList4[i];
     // if (item.party_name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
      if (item.party_name.toLowerCase().includes(query.toLowerCase())) {
        filtered.push(item);
      }
    }

    this.publisherdLists = filtered;
  }


  filterList5(event) {

    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.localList5.length; i++) {
      let item = this.localList5[i];
     // if (item.authr_name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        if (item.authr_name.toLowerCase().includes(query.toLowerCase())) { 
        filtered.push(item);
      }
    }

    this.filteredList5 = filtered;
  }

  filtersupplierList(event) {

    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.localList6.length; i++) {
      let item = this.localList6[i];
     // if (item.party_name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
      if (item.party_name.toLowerCase().includes(query.toLowerCase())) { 
        filtered.push(item);
      }
    }

    this.suppliernameLists = filtered;
  }

  

  save() {

 this.titlemaster.productDetailList = this.products2;
    let copy = JSON.parse(JSON.stringify(this.titlemaster))
   // copy.author = copy.author.authr_name;
    //copy.category = copy.category.id;
    copy.productGroup = copy.productGroup.group_name;
    /*if(copy.publisher!=null){
    copy.publisher = copy.publisher.id;
    }
    copy.subject = copy.subject.subjects;
*/
    copy.productDetailList.forEach((item, indexa) => {
      copy.productDetailList[indexa].partyId = copy.productDetailList[indexa].partyId.id;
      });

    this.masterService.saveTitleMaster(copy).subscribe(
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
      error => {
        console.error('error caught in component')
        this.errorMessage = error;
        this.error = error;
        //this.loading = false;

        this.map = JSON.parse(error.error).message;
      }
    );

  }
//table logics
  addvalue() {
    if (this.detailtable.value.length == 0) {
      this.sno = 0;
    }

    this.sno = 1 + this.sno;
    this.products2.push({
      sno: this.sno, id: null, baseId: null, partyId: null,rate: null, discount: null });
    this.detailtable.initRowEdit({
      sno: this.sno, id: null, baseId: null, partyId: null,rate: null, discount: null });
    this.clonedProducts[this.products2[this.sno - 1].sno] = { ...this.products2[this.sno - 1] };

    
  }
  onRowEditInit(product: ProductDetail) {
    this.clonedProducts[product.id] = { ...product };

  }

  onRowEditSave(product: ProductDetail) {
    delete this.clonedProducts[product.id];
  }

  onRowEditCancel(product: ProductDetail, index: number) {
    this.products2[index] = this.clonedProducts[product.id];
    delete this.clonedProducts[product.id];
  }
  onRowDelete(product: ProductDetail, index: number) {
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
public checkSelectOptionValue(value) {
    if (value == "undefined" || value == null) {
      return value;
    }
  }
  
  editmode() {
   

   
    this.products2 = this.titlemaster.productDetailList;
    for(let i = 0; i < this.titlemaster.productDetailList.length; i++){
      this.sno = 1 + i;
      this.titlemaster.productDetailList[i].sno=this.sno;
      this.titlemaster.productDetailList[i].partyId = this.empList1.find(x => x.id == this.titlemaster.productDetailList[i].partyId); 
     }
   // this.titlemaster.category = this.empList1.find(x => x.id == this.titlemaster.category);
    this.titlemaster.productGroup = this.localList2.find(x => x.group_name == this.titlemaster.productGroup);
   // this.titlemaster.subject = this.parentlocationList3.find(x => x.subjects == this.titlemaster.subject);
   // this.titlemaster.publisher = this.localList4.find(x => x.id == this.titlemaster.publisher);
   // this.titlemaster.author = this.localList5.find(x => x.authr_name == this.titlemaster.author);
    
  }
  reset() {
    //window.location.reload();
      
    this.formForm.resetForm();
    this.titlemaster = new TitleMaster();
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
          this.input.nativeElement.focus();
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
  showFail(value: string) {
    this.messageService.add({ key: 'error', severity: 'error', summary: 'error', detail: value });
  }

}
