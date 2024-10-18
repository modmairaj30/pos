import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from "rxjs/operators";
import { Partymaster } from 'src/app/Layout/domain/partymaster';
import { environment } from 'src/environments/environment';
import {  Employeemaster, ServerSidePagination, Locationmaster,LookUpFormBean, ReportInput, } from '../domain';
import { Departmentmaster } from '../domain/departmentmaster.model';
import { ContraLocationmaster } from '../domain/contralocationmsater.model';
import { Authormaster } from '../domain/authormaster.model';
import { Categorymaster } from '../domain/categoryMaster.model';
import { ProductGroupMaster } from '../domain/ProductGroupMaster.model';
import { Subjectmaster } from '../domain/subjectsMaster.model';
import { PaymentModemaster } from '../domain/paymentmodemaster.model';
import { Designationmaster } from '../domain/designationmaster.model';
import { TitleMaster } from '../domain/titlemaster.model';
import { Membershipmaster } from '../domain/membershipmaster.model';
import { SearchCriteria } from '../domain/searchCriteria.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const httpOptions1 = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }).set('Accept', 'application/json' )
 // headers.append({ 'Accept': 'application/json' });
  //headers=headers.append('Access-Control-Allow-Origin', '*')
//headers=headers.append('content-type','application/x-www-form-urlencoded')
 
  
};

@Injectable({
  providedIn: 'root'
})

export class NormalReportService {
    public actionUrl: string;
    public headers: Headers;
    
  constructor(private http: HttpClient) { 
    this.actionUrl = environment.apiUrl+'/report';
   }

  
  
  getReport(reportInput:ReportInput): Observable<any> {
    return this.http.post(this.actionUrl+ '/getReport',reportInput,httpOptions);
  }

  getAllLocations(serverSidePagination:ServerSidePagination): Observable<any> {
    return this.http.get(this.actionUrl+ '/getAllLocations?page='+serverSidePagination.page+'&size='+serverSidePagination.size, { responseType: 'json' });
  }
 
  getAllreports(serverSidePagination:ServerSidePagination): Observable<any> {
    
    return this.http.get(this.actionUrl + '/getAllreports?page='+serverSidePagination.page+'&size='+serverSidePagination.size, { responseType: 'json' });
  }

}
