import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserMaster } from '../domain';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    
};

const httpOptions1 = {
    headers: new HttpHeaders({ 'Accept': 'application/json' })
    
};


@Injectable({
    providedIn: 'root'
})

export class UserManagementService {
    public actionUrl: string;
    public headers: Headers;

    constructor(private http: HttpClient) {
        this.actionUrl = environment.apiUrl + '/user';
    }


    getUsers(): Observable<any> {

        return this.http.get(this.actionUrl + '/getUsers', { responseType: 'json' });
    }

    getUser(userId:number): Observable<any> {

        return this.http.get(this.actionUrl + `/getUser?userId=${userId}`, { responseType: 'json' });
    }

    saveUser(formdata): Observable<any> {

        return this.http.post(this.actionUrl + '/saveUser',formdata, httpOptions1);
      // return this.http.post(this.actionUrl + `/saveUser?id=${u.id}&username=${u.username}&firstname=${u.firstname}&lastname=${u.lastname}&address=${u.address}&password=${u.password}&picByte=${u.picByte}&mobile_no=${u.mobile_no}&role=${u.role}&role_id=${u.role_id}&email=${u.email}`, formdata, httpOptions1);
    }
    updateUser(formdata): Observable<any> {

        return this.http.put(this.actionUrl + '/updateUser',formdata, httpOptions1);
      // return this.http.post(this.actionUrl + `/saveUser?id=${u.id}&username=${u.username}&firstname=${u.firstname}&lastname=${u.lastname}&address=${u.address}&password=${u.password}&picByte=${u.picByte}&mobile_no=${u.mobile_no}&role=${u.role}&role_id=${u.role_id}&email=${u.email}`, formdata, httpOptions1);
    }
   
    saveUpdateUser(userMaster: UserMaster): Observable<any> {

        return this.http.post(this.actionUrl + '/saveUpdateUser', userMaster, httpOptions);
      }

}
