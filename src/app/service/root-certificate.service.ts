import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RootCertificateService {

  apiHost: string = 'http://localhost:8080/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  create(rootCertificate : any):Observable<any> {
    return this.http.post<any>(this.apiHost + 'certificates/create-root-certificate', rootCertificate, { headers : this.headers});
  }



}
