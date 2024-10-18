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

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-generalhistoryreports',
  templateUrl: './generalhistoryreports.component.html',
  styleUrls: ['./generalreports.scss'],
  providers: [MessageService]
})
export class GeneralHistoryreportsComponent  {
    
  public actionUrl: string;
  map = new Map();
  error: string;
  errorMessage:string
  loading: boolean = false;
  filteredEmpList1: any[];
  locationList1: any[] = [];
  lookUpFormBean1 = new LookUpFormBean();
  listLookUpFormBean: LookUpFormBean[] = new Array();
  public reportInput = new ReportInput();
  constructor(private userService: UserService,private reportService: ReportService, private messageService: MessageService, private masterService: MasterService) {
    this.actionUrl = environment.apiUrl + '/jasperreport/';
    this.lookUpFormBean1.query = "select id,location_name from tbl_location";
    this.lookUpFormBean1.listName = "LIST5";
    this.listLookUpFormBean.push(this.lookUpFormBean1);
    this.userService.getMultipleDropdwonValues(this.listLookUpFormBean).subscribe(
      data => {
        this.locationList1 = JSON.parse(JSON.stringify(data.data.LIST5));
      
        
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
    //  if (item.location_name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
      if (item.location_name.toLowerCase().includes(query.toLowerCase())) { 
        filtered.push(item);
      }
    }

    this.filteredEmpList1 = filtered;
  }
 

  find(){
    if ( this.reportInput.locationId == null || this.reportInput.locationId == undefined ) {
      this.showFail( "Please select Location" );
      return false;
  }
    if ( this.reportInput.fromDate == null || this.reportInput.fromDate == undefined ) {
      this.showFail( "Please select From Date" );
      return false;
  }
  if ( this.reportInput.toDate == null || this.reportInput.toDate == undefined ) {
      this.showFail( "Please select To Date" );
      return false;
  }
 
 //let copt =this.reportInput;


  let copy = JSON.parse(JSON.stringify(this.reportInput));
   
 //  copy.locationId=copy.locationId.id;
    this.loading=true;
    this.reportInput.locationId=this.reportInput.locationId.id;
  this.reportService.report(this.reportInput).subscribe((blob: Blob): void => {
    this.loading=false;
    
    const file = new Blob([blob], {type: 'application/pdf'});
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL, '_blank', 'width=1000, height=800');
  });
   
  
  }



  

  showSuccess() {
    this.messageService.add({ key: 'success', severity: 'success', summary: 'success', detail: 'Data saved Successfully.' });
  }
  showFail(value:string) {
    this.messageService.add({ key: 'error', severity: 'error', summary: 'error', detail:value });
  }


}


