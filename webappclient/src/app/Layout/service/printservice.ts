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
 
export class PrintService {
  public actionUrl: string;
  public headers: Headers;

  constructor(private http: HttpClient) {
    this.actionUrl = environment.apiUrl + '/jasperreport/print';
  }

  print(reportInput:ReportInput): Observable<Blob> {
    let url = this.actionUrl + '/generateprint?id='+reportInput.id+"&fileType=PDF&reportName=PurchaseInvoice";
    return this.http.get(url, { responseType: 'blob' });
  }

  reportExportToExcel(reportInput:ReportInput): Observable<Blob> {
    let url = this.actionUrl + '/generateprint?id='+reportInput.id+"&fileType=XLS&reportName=PurchaseInvoice";
    return this.http.get(url, { responseType: 'blob' });
  }
 
 
  
}
