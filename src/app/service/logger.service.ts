import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { LoggerRequest } from '../model/logger-request.model';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  apiHost: string = 'https://localhost:443/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  public createLoggerUnauthenticated(ip: string): Observable<any> {
    const loggerRequest = new LoggerRequest(ip);
    return this.http.post<any>(this.apiHost + 'unauthenticated', loggerRequest , { headers: this.headers }).pipe(
      catchError(this.handleError)
    );
  }

  public createLoggerUnauthorized(email: string): Observable<any> {
    const loggerRequest = new LoggerRequest(email);
    return this.http.post<any>(this.apiHost + 'unauthorized', loggerRequest, { headers: this.headers }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.status + '\n' + error.error));
  }

  logUnauthenticatedAccess() {
    let ipAddress = "";
    this.http.get('https://api.ipify.org/?format=json').subscribe(
      (response: any) => {
        ipAddress = response.ip;
        console.log(ipAddress); // You can remove this console.log statement
        // Do something with the ipAddress if needed
        this.createLoggerUnauthenticated(ipAddress).subscribe(
          (response) => {
            console.log('Log created successfully:', response);
          },
          (error) => {
            console.error('Error creating log:', error);
          }
        );
      },
      (error: any) => {
        console.log('Error retrieving IP address:', error);
      }
    );
  }

  logUnauthorizedAccess(email: string) {
    this.createLoggerUnauthorized(email).subscribe(
      (response) => {
        console.log('Log created successfully:', response);
      },
      (error) => {
        console.error('Error creating log:', error);
      }
    );
  }

}
