import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, delay, mergeMap, of, retry, retryWhen, tap, throwError } from 'rxjs';

export const maxRetries = 2;
export const delayMs = 2000;

@Injectable()
export class HandleErrorsInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modified = request.clone({
      // setHeaders: { "X-Man": "Wolverine" } 
    });
    return next.handle(modified)
      .pipe(
        retry(1),
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';
          if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
          } else {
            // server-side error
            errorMessage = `Error Status: ${error.status}\nMessage: ${error.message}`;
          }
          // window.alert(errorMessage)
          console.log(errorMessage);
          return throwError(errorMessage);
        })
      )
  }
}
