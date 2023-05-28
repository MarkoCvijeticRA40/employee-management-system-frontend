import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistratioRequestService {
  apiHost: string = 'https://localhost:443/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, private router: Router) { }

  getPendingRequest(): Observable<any> {
    return this.http.get<any[]>(this.apiHost + "requests/pending", {headers: this.headers});
  }

  approveRequest(id: any): Observable<any> {
    return this.http.put<any[]>(this.apiHost + "requests/approve/" + id, {headers: this.headers});
  }

  rejectRequest(id: any, reasonForReject: any): Observable<any> {
    return this.http.put<any[]>(this.apiHost + "requests/reject/" + id, reasonForReject, {headers: this.headers});
  }


}
