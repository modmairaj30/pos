import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { LookUpFormBean } from 'src/app/Layout/domain/lookupform';
import { Partymaster } from 'src/app/Layout/domain/partymaster';

const API_URL = 'http://localhost:8080/webapp/masters/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private casterRunningSeqHdr = new Subject<number>();
  subjectLocations = new Subject<number>();
  subjectPartys = new Subject<any[]>();
  constructor(private http: HttpClient) { }

  casterRunningSeqHdr$ = this.casterRunningSeqHdr.asObservable();

  publishData(data: number) {
        this.casterRunningSeqHdr.next(data);
  }
  


  getPublicContent(): Observable<any> {
   // debugger;
    return this.http.get(API_URL + 'getAllPartys', { responseType: 'json' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  getLookupValues(lookUpFormBean:LookUpFormBean): Observable<any> {
    return this.http.post(API_URL + 'lookup/getLookUpValues',lookUpFormBean,httpOptions);
  }

  getMultipleDropdwonValues(listLookUpFormBean: Array<LookUpFormBean>): Observable<any> {
    return this.http.post(API_URL + 'lookup/getMultipleDropdwonValues',listLookUpFormBean,httpOptions);
  }

  savePartyMaster(partymaster:Partymaster): Observable<any> {
  //  debugger;
    return this.http.post(API_URL + 'savePartyMaster',partymaster,httpOptions);
  }
}
