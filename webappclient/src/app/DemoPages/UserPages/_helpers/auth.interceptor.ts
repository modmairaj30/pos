import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest,HttpErrorResponse } from '@angular/common/http';

import { TokenStorageService } from '../_services/token-storage.service';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


const TOKEN_HEADER_KEY = 'Authorization';       // for Spring Boot back-end
// const TOKEN_HEADER_KEY = 'x-access-token';   // for Node.js Express back-end

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private token: TokenStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.token.getToken();
    //debugger;
    if (token != null) {
      // for Spring Boot back-end
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
      /*
      if (!req.headers.has('Content-Type')) {
      authReq = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
      }
      if (!req.headers.has('Accept')) {
      authReq = req.clone({ headers: req.headers.set('Accept', 'application/json') });
      }*/
      //   debugger;
      // for Node.js Express back-end
      // authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, token) });
    }
    return next.handle(authReq).pipe(retry(1),catchError((error: HttpErrorResponse) => {
      let errorMessage = '';
    //  debugger;
      if (error.error instanceof ErrorEvent) {
          // client-side error
       //   debugger;
          errorMessage = `Error: ${error.error.message}`;
      } else {
          // server-side error
          errorMessage = `Error Status: ${error.status}\nMessage: ${error.message}`;
      }
     // window.alert(errorMessage);
      console.log(errorMessage);
      return throwError(errorMessage);
  })
)


  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
