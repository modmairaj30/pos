import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public actionUrl: string;

  
  constructor(private http: HttpClient) { 
    this.actionUrl = environment.apiUrl+'/api/auth/';
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.actionUrl + 'signin', {
      username,
      password
    }, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

 

  addSession(): Observable<any> {
    //debugger;
    return this.http.get(this.actionUrl+ 'addSession',httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(this.actionUrl + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }

  logout(): Observable<any> {
    return this.http.post(this.actionUrl + 'logout',httpOptions);
  }

   /**
   * Function to handle error when the server return an error
   *
   * @param error
   */
    private handleError(error: HttpErrorResponse) {
      debugger;
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error("An error occurred:", error.error.message);
      } else {
        // The backend returned an unsuccessful response code. The response body may contain clues as to what went wrong,
        console.error(
          `Backend returned code ${error.status}, ` + `body was: ${error.error}`
        );
      }
      // return an observable with a user-facing error message
      return throwError(error);
    }
  
    /**
     * Function to extract the data when the server return some
     *
     * @param res
     */
    private extractData(res: Response) {
      let body = res;
      return body || {};
    }
  
    /**
     * Function to GET what you want
     *
     * @param url
     */
    public getListOfGroup(url: string): Observable<any> {
  
      // Call the http GET
      return this.http.get(url, httpOptions).pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
    }
}
