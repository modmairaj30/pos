import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ReportInput } from '../domain';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/pdf' })
};

@Injectable({
  providedIn: 'root'
})
 
export class ReportService {
  public actionUrl: string;
  public headers: Headers;

  constructor(private http: HttpClient) {
    this.actionUrl = environment.apiUrl + '/jasperreport/report';
  }

  report(reportInput:ReportInput): Observable<Blob> {
    let url = this.actionUrl + '/generatereport?locationId='+reportInput.locationId+'&fromDate=' + reportInput.fromDate.getTime() + "&toDate=" + reportInput.toDate.getTime()
    + "&fileType=PDF&reportName=stock_verification_report";
    return this.http.get(url, { responseType: 'blob' });
  }

  reportExportToExcel(reportInput:ReportInput): Observable<Blob> {
    let url = this.actionUrl + '/generatereport?locationId='+reportInput.locationId+'&fromDate=' + reportInput.fromDate.getTime() + "&toDate=" + reportInput.toDate.getTime()
    + "&fileType=XLS&reportName=stock_verification_report";
    return this.http.get(url, { responseType: 'blob' });
  }
 
 
  
}
