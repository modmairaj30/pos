import { Component, OnInit, ViewChild, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { ServerSidePagination } from 'src/app/Layout/domain/serversidepagination';
import { MessageService } from 'primeng/api';
import { LocationService, MasterService, TransactionService } from 'src/app/layout/service';
import { SearchCriteria } from 'src/app/Layout/domain/searchCriteria.model';
import { GlobalConstants } from 'src/app/global-constants';
import { DatexPipe } from 'src/app/shared/pipes/date.pipe';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { LookUpFormBean, ReportInput, StockVerification } from 'src/app/layout/domain';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ReportService } from 'src/app/Layout/service/reportservice';
import { UserService } from 'src/app/DemoPages/UserPages/_services/user.service';
import { NormalReportService } from 'src/app/Layout/service/normalreportservice';
import { JasperDynamicReportService } from 'src/app/Layout/service/jasperdynamicreportservice';


@Component({
  selector: 'app-reportlistentry',
  templateUrl: './reportlistentry.component.html',
  styleUrls: ['./reportlistentry.component.sass'],
  providers: [MessageService]
})
export class ReportlistentryComponent implements OnInit {



  map = new Map();
  error: string;
  errorMessage: string;
  loading: boolean = false;
  isFromDate: boolean = true;
  jasperName: string;
  isJasper: boolean = true;
  isToDate: boolean = true;
  isLocation: boolean = true;
  isSupplier: boolean = true;
  isAuthor: boolean = true;
  filteredEmpList1: any[];
  filteredEmpList2: any[];
  filteredEmpList3: any[];
  filteredEmpList4: any[];
  filteredEmpList5: any[];
  locationList1: any[] = [];
  reportList2: any[] = [];
  reportList3: any[] = [];
  reportList4: any[] = [];
  reportList5: any[] = [];
  lookUpFormBean1 = new LookUpFormBean(); // location quary
  lookUpFormBean2 = new LookUpFormBean(); // report quary
  lookUpFormBean3 = new LookUpFormBean();
  lookUpFormBean4 = new LookUpFormBean(); // location quary
  lookUpFormBean5 = new LookUpFormBean(); // report quary
  listLookUpFormBean: LookUpFormBean[] = new Array();
  public reportInput = new ReportInput();

  selectedRowData: any[];

  content: any[] = [];


  selectedColumns: any[];


  reportList: any;

  head = [];
  body = [];
  foot = [];
  dhead = [];
  dbody = [];
  dfoot = [];
  count: number = 0;
  title: string = "Stock Verification";
  public viewResponseData = {
    'reportColumns': [],
    'objects': [],
    'title': '',
    'header': []
  };
  // tslint:disable-next-line: max-line-length
  constructor(private userService: UserService, private reportService: NormalReportService, private messageService: MessageService, private masterService: MasterService, private jasperService: JasperDynamicReportService) {

    this.lookUpFormBean1.query = "select id,location_name from tbl_location";
    this.lookUpFormBean2.query = "select report_id,report_name,from_date,to_date,location,supplier,author,jasper,jasper_name from report where is_enabled='Y'";
    this.lookUpFormBean3.query = "select report_id,report_type from report";
    this.lookUpFormBean4.query = "select id, party_name from tbl_party_info where party_type=2";
    this.lookUpFormBean5.query = "select id, authr_name from author_master ";
    this.lookUpFormBean1.listName = 'LIST1';
    this.lookUpFormBean2.listName = 'LIST2';
    this.lookUpFormBean3.listName = 'LIST3';
    this.lookUpFormBean4.listName = 'LIST4';
    this.lookUpFormBean5.listName = 'LIST5';
    this.listLookUpFormBean.push(this.lookUpFormBean1);
    this.listLookUpFormBean.push(this.lookUpFormBean2);
    this.listLookUpFormBean.push(this.lookUpFormBean3);
    this.listLookUpFormBean.push(this.lookUpFormBean4);
    this.listLookUpFormBean.push(this.lookUpFormBean5);
    this.userService.getMultipleDropdwonValues(this.listLookUpFormBean).subscribe(
      data => {
        this.locationList1 = JSON.parse(JSON.stringify(data.data.LIST1));
        this.reportList2 = JSON.parse(JSON.stringify(data.data.LIST2));
        this.reportList3 = JSON.parse(JSON.stringify(data.data.LIST3));
        this.reportList4 = JSON.parse(JSON.stringify(data.data.LIST4));
        this.reportList5 = JSON.parse(JSON.stringify(data.data.LIST5));
      },
      err => {
        this.map = JSON.parse(err.error).message;
      }

    );

  }
  ngOnInit(): void {
    this.selectedRowData = [];

  }

  onTableHeaderCheckboxToggle(event: any) {
  }

  filterEmpList1(event) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.locationList1.length; i++) {
      let item = this.locationList1[i];
      if (item.location_name.toLowerCase().includes(query.toLowerCase())) {
        filtered.push(item);
      }
    }

    this.filteredEmpList1 = filtered;
  }
  filterEmpList2(event) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.reportList2.length; i++) {
      let item = this.reportList2[i];
      //  if (item.location_name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
      if (item.report_name.toLowerCase().includes(query.toLowerCase())) {
        filtered.push(item);
      }
    }

    this.filteredEmpList2 = filtered;
  }
  filterEmpList3(event) { // purchase register
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.reportList3.length; i++) {
      let item = this.reportList3[i];
      //  if (item.location_name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
      if (item.report_type.toLowerCase().includes(query.toLowerCase())) {
        filtered.push(item);
      }
    }

    this.filteredEmpList3 = filtered;
  }
  filterEmpList4(event) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.reportList4.length; i++) {
      let item = this.reportList4[i];
     // if (item.party_name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
      if (item.party_name.toLowerCase().includes(query.toLowerCase())) {   
        filtered.push(item);
      }
    }

    this.filteredEmpList4 = filtered;
  }

  filterEmpList5(event) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.reportList5.length; i++) {
      let item = this.reportList5[i];
     // if (item.party_name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
      if (item.authr_name.toLowerCase().includes(query.toLowerCase())) {   
        filtered.push(item);
      }
    }

    this.filteredEmpList5 = filtered;
  }


  find() {
    //debugger;
    if (!this.isLocation) {
      if (this.reportInput.locationId == null || this.reportInput.locationId == undefined) {
        this.showFail('Please select Location');
        return false;
      }
    }

    if (this.isSupplier && this.isAuthor) {
      if (this.reportInput.reportName == null || this.reportInput.reportName == undefined) {
        this.showFail('Please select Report Name');
        return false;
      }
    }

    if (this.reportInput.reportType == null || this.reportInput.reportType == undefined) {
      this.showFail('Please select Report Type');
      return false;
    }
    if (!this.isFromDate) {
      if (this.reportInput.fromDate == null || this.reportInput.fromDate == undefined) {
        this.showFail('Please select From Date');
        return false;
      }
    }
    if (!this.isToDate) {
      if (this.reportInput.toDate == null || this.reportInput.toDate == undefined) {
        this.showFail('Please select To Date');
        return false;
      }
    }
    if (this.isJasper) {
      this.jasperReport();
    }
    else {
      this.normalReport();
    }
    // let copt =this.reportInput;

  }
  normalReport() {
    let copy = JSON.parse(JSON.stringify(this.reportInput));
    //  copy.locationId=copy.locationId.id;
    this.loading = false;
    if (this.reportInput.locationId != null || this.reportInput.locationId != undefined) {
      copy.locationId = this.reportInput.locationId.id;
    }
    copy.reportId = this.reportInput.reportName.report_id;
    copy.reportName = this.reportInput.reportName.report_name;
    copy.reportType = this.reportInput.reportType.report_type;
    if (this.reportInput.fromDate != null || this.reportInput.fromDate != undefined) {
      copy.fromDate = this.reportInput.fromDate.getTime();
    }
    if (this.reportInput.toDate != null || this.reportInput.toDate != undefined) {
      copy.toDate = this.reportInput.toDate.getTime();
    }
    this.reportService.getReport(copy).subscribe(
      data => {
        this.viewResponseData = JSON.parse(JSON.stringify(data.data));
      },
      err => {
        this.viewResponseData = JSON.parse(err.error).message;
      }
    );
  }
  jasperReport() {
    this.pdf();
  }
  selectedAutoCompletedValue(event) {
    debugger;
    if (event.from_date == 'Y') {
      this.isFromDate = false;
    }
    else {
      this.isFromDate = true;
      this.reportInput.fromDate = null;
    }
    if (event.to_date == 'Y') {
      this.isToDate = false;
    } else {
      this.isToDate = true;
      this.reportInput.toDate = null;
    }
    if (event.location == 'Y') {
      this.isLocation = false;
    } else {
      this.isLocation = true;
      this.reportInput.locationId = null;
    }
    if (event.supplier == 'Y') {
      this.isSupplier = false;
      this.reportInput.reportName = this.reportInput.reportName.report_name;
    } else { 
      this.isSupplier = true;
      this.reportInput.partyId = null;  
    }
    if (event.author == 'Y') {
      this.isAuthor = false;
      this.reportInput.reportName = this.reportInput.reportName.report_name;
    } else {
      this.isAuthor = true;
      this.reportInput.authorId = null;
    }
    if (event.jasper == 'Y') {
      debugger;
      this.isJasper = true;
      this.jasperName = event.jasper_name;
      this.reportInput.jasperName = event.jasper_name;
      this.reportInput.reportName = this.reportInput.reportName.report_name;
    } else { this.isJasper = false; }

  }

  onRowSelect(event) {
    this.count = 1;
    var datePipe = new DatexPipe();
    var filterPipe = new FilterPipe();
    let currentDt = datePipe.transform(new Date(), 'DD/MM/yyyy');
    // let docDt = datePipe.transform(this.reportInput.toDate, 'DD/MM/yyyy');
    // let locationName = filterPipe.transform(this.locationList1, this.reportInput.locationId.id, "locationName");
    this.dfoot = [],
      this.body = [], this.head = [];
    this.title = this.reportInput.reportName.report_name + " - " + currentDt;
    let h = [];

    for (let j = 0; j <= this.viewResponseData.header.length - 1; j++) {
      h[j] = this.viewResponseData.header[j].field;
    }
    this.dhead = [h];

    for (let i = 0; i <= this.viewResponseData.objects.length - 1; i++) {
      let d = [];
      for (let j = 0; j <= this.viewResponseData.header.length - 1; j++) {

        d[j] = this.viewResponseData.objects[i][this.viewResponseData.header[j].field];
      }
      this.dbody.push(d);
    }

  }

  onRowUnselect(event) {
    event.checked;
    this.count = 0;

  }
  ////jasper report execution code start
  pdf() {

    //let copt =this.reportInput;


    let copy = JSON.parse(JSON.stringify(this.reportInput));

    //  copy.locationId=copy.locationId.id;
    this.loading = true;
    debugger
    if(!this.isLocation){
    this.reportInput.locationId = this.reportInput.locationId.id;
    }
    if(!this.isSupplier){
    this.reportInput.partyId = this.reportInput.partyId.party_name;
    }
    if(!this.isAuthor){
    this.reportInput.authorId = this.reportInput.authorId.authr_name;
    }
    this.reportInput.jasperName = this.jasperName;
    this.jasperService.report3(this.reportInput).subscribe((blob: Blob): void => {
      this.loading = false;

      const file = new Blob([blob], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL, '_blank', 'width=1000, height=800');
    });
  }

  excel() {

    //let copt =this.reportInput;


    let copy = JSON.parse(JSON.stringify(this.reportInput));

    //  copy.locationId=copy.locationId.id;
    this.loading = true;
    this.reportInput.locationId = this.reportInput.locationId.id;
    this.reportInput.jasperName = this.jasperName;
    this.jasperService.reportExportToExcel(this.reportInput).subscribe((blob: Blob): void => {
      this.loading = false;
      debugger;
      const file = new Blob([blob], { type: 'application/vnd.ms-excel' });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL, '_blank', 'width=1000, height=800');
    });
  }
  ///jasper report execution code end

  showSuccess() {
    this.messageService.add({ key: 'success', severity: 'success', summary: 'success', detail: 'Data saved Successfully.' });
  }
  showFail(value: string) {
    this.messageService.add({ key: 'error', severity: 'error', summary: 'error', detail: value });
  }


}


