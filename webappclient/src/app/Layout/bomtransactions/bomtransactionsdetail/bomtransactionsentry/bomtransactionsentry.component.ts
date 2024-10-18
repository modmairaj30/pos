import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  HostListener,
  ElementRef,
} from "@angular/core";
import { UserService } from "src/app/DemoPages/UserPages/_services/user.service";
import { LookUpFormBean } from "src/app/Layout/domain/lookupform";
import { TitleMaster } from "src/app/Layout/domain/titlemaster.model";
import { AutoComplete } from "primeng/autocomplete";
import { MasterService } from "src/app/layout/service";
import { MessageService } from "primeng/api";
import { ProductDetail } from "src/app/layout/domain";
import { BomTransaction } from "src/app/layout/domain/bomtransaction.model";
import { BomTransactionDetail } from "src/app/Layout/domain/bomtransactiondetail.model";
//@import "src/style/entryscreen.scss";

@Component({
  selector: "app-bomtransactionsentry",
  templateUrl: "./bomtransactionsentry.component.html",
  styleUrls: ["./bomtransactionsentry.component.sass"],
})
export class BomtransactionsentryComponent implements OnInit {
  @ViewChild("detailtable") detailtable;
  @ViewChild("formForm") formForm;
  @ViewChild("fe") input: ElementRef;

  @Output()
  editEntry = new EventEmitter();
  dateValue: Date;
  @Input()
  editmod: boolean = false;
  sno: number = 0;
  values = [];

  titleList2: any[] = [];
  titleList3: any[] = [];
  locationList1: any[] = [];

  map = new Map();
  error: string;
  errorMessage: string;

  @Input()
  bomtransaction = new BomTransaction();

  products2: BomTransactionDetail[] = new Array();
  clonedProducts: { [s: string]: BomTransactionDetail } = {};
  filteredEmpList1: any[];
  filteredEmpList2: any[];
  filteredEmpList3: any[];


  lookUpFormBean1 = new LookUpFormBean();
  lookUpFormBean2 = new LookUpFormBean();
  lookUpFormBean3 = new LookUpFormBean();

  listLookUpFormBean: LookUpFormBean[] = new Array();

  constructor(
    private userService: UserService,
    private masterService: MasterService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.bomtransaction.verifiedBy = window.sessionStorage.getItem("userName");
    this.lookUpFormBean1.query =
      "select id,location_name,location_code from tbl_location where id in(" +
      sessionStorage.getItem("location") +
      ")";
    this.lookUpFormBean2.query =
      "SELECT id, prod_name,product_code,author,product_rate, discount, supp_name, publisher_name FROM title_view where type in ('RM') ";
      this.lookUpFormBean3.query =
      "SELECT id, prod_name,product_code,author,product_rate, discount, supp_name, publisher_name FROM title_view where type in ('FG') ";
    this.lookUpFormBean1.listName = "LIST1";
    this.lookUpFormBean2.listName = "LIST2";
    this.lookUpFormBean3.listName = "LIST3";

    this.listLookUpFormBean.push(this.lookUpFormBean1);
    this.listLookUpFormBean.push(this.lookUpFormBean2);
    this.listLookUpFormBean.push(this.lookUpFormBean3);

    this.userService
      .getMultipleDropdwonValues(this.listLookUpFormBean)
      .subscribe(
        (data) => {
          this.locationList1 = JSON.parse(JSON.stringify(data.data.LIST1));
          this.titleList2 = JSON.parse(JSON.stringify(data.data.LIST2));
          this.titleList3 = JSON.parse(JSON.stringify(data.data.LIST3));
          if (this.editmod) {
            this.editmode();
          } else {
            this.addvalue();
            setTimeout(() => {
              this.input.nativeElement.focusInput();
            }, 1000);

            this.bomtransaction.docDate = new Date();
            let location = window.sessionStorage.getItem("location");
            this.bomtransaction.location = this.locationList1.find(
              (x) => x.id == location.split(",")[0]
            );
          }
        },
        (err) => {
          this.map = JSON.parse(err.error).message;
        }
      );
  }
  filterEmpList1(event) {
    console.log(event);
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
  filterEmpList3(event) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < this.titleList3.length; i++) {
      let item = this.titleList3[i];
      //if (item.prod_name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
      if (item.prod_name.toLowerCase().includes(query.toLowerCase())) {
        filtered.push(item);
      }
    }
    //debugger
    this.filteredEmpList3 = filtered;
  }

  save() {
    this.bomtransaction.productDetailList = this.products2;
    let copy = JSON.parse(JSON.stringify(this.bomtransaction));

    copy.productDetailList.forEach((item, indexa) => {
      copy.productDetailList[indexa].location_name =
        copy.productDetailList[indexa].location_name;
    });

    this.masterService.saveBomTransaction(copy).subscribe(
      (data) => {
        if (data.statusCode == "OK") {
          this.showSuccess();
          this.reset();
        } else {
          this.errorMessage = data.webAppException.webAppError[0].reason;
          this.showFail(this.errorMessage);
        }
      },
      (error) => {
        console.error("error caught in component");
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
      sno: this.sno,
      id: null,
      listProductName: null,
      rate: null,
      amount: null,
      units: null,
    });
    this.detailtable.initRowEdit({
      sno: this.sno,
      id: null,
      listProductName: null,
      rate: null,
      amount: null,
      units: null,
    });
    this.clonedProducts[this.products2[this.sno - 1].sno] = {
      ...this.products2[this.sno - 1],
    };
  }
  onRowEditInit(product: BomTransactionDetail) {
    this.clonedProducts[product.id] = { ...product };
  }

  onRowEditSave(product: BomTransactionDetail) {
    delete this.clonedProducts[product.id];
  }

  onRowEditCancel(product: BomTransactionDetail, index: number) {
    this.products2[index] = this.clonedProducts[product.id];
    delete this.clonedProducts[product.id];
  }
  onRowDelete(product: BomTransactionDetail, index: number) {
    this.detailtable.value.forEach((item, indexa) => {
      if (index == indexa) {
        this.detailtable.value.splice(indexa, 1);
        this.sno--;
      }
    });
    this.detailtable.value.forEach((item, indexa) => {
      item.sno = indexa + 1;
    });
  }
  public checkSelectOptionValue(value) {
    if (value == "undefined" || value == null) {
      return value;
    }
  }

  editmode() {
    this.products2 = this.bomtransaction.productDetailList;
    this.bomtransaction.docDate = new Date(this.bomtransaction.docDate);
    this.bomtransaction.location = this.locationList1.find(
      (x) => x.id == this.bomtransaction.location
    );
    
    for (let i = 0; i < this.bomtransaction.productDetailList.length; i++) {
      this.bomtransaction.productDetailList[i].sno = i + 1;
      this.sno = i + 1;
    }
  }
  reset() {
    //window.location.reload();

    this.formForm.resetForm();
    this.bomtransaction = new BomTransaction();
    this.products2 = new Array();
    this.clonedProducts = {};
    this.sno = 0;
    this.addvalue();
    setTimeout(() => {
      if (this.editmod) {
        //  this.editmod=false;
        //  this.reset();
        // this.router.navigate(['/purchaseInvoice/purchaseInvoice']);
        this.editEntry.emit(this.editmod);
      } else {
        this.input.nativeElement.focus();
      }
    }, 1500);
  }
  @HostListener("keydown.F7", ["$event"]) F7($event: KeyboardEvent) {
    this.addvalue();
  }
  @HostListener("keydown.F2", ["$event"]) F2($event: KeyboardEvent) {
    if (this.formForm.form.valid) {
      this.save();
    }
  }
  @HostListener("keydown.F5", ["$event"]) F5($event: KeyboardEvent) {
    this.reset();
  }
  showSuccess() {
    this.messageService.add({
      key: "success",
      severity: "success",
      summary: "success",
      detail: "Data saved Successfully.",
    });
  }
  showFail(value: string) {
    this.messageService.add({
      key: "error",
      severity: "error",
      summary: "error",
      detail: value,
    });
  }
}
