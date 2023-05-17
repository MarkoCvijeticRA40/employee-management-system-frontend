import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiHost: string = 'http://localhost:8080/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, private router: Router) { }

  registerUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'users/register', user, {headers: this.headers});
  }

  searchEngineers(email: string, name: string, surname: string, startDate: string, endDate: string): Observable<any> {
    const params = new HttpParams()
      .set('email', email)
      .set('name', name)
      .set('surname', surname)
      .set('startDate', startDate)
      .set('endDate', endDate);
    return this.http.get<any>(`${this.apiHost} users/search/engineers`, { params: params, headers: this.headers });
  }

  findByTitle(title: string): Observable<any> {
    const params = new HttpParams().set('title', title);
    return this.http.get<any>(this.apiHost + 'users/title', { params });
  }

  findByRoleName(roleName: string): Observable<any> {
    const params = new HttpParams().set('roleName', roleName);
    return this.http.get<any>(this.apiHost + 'users/rolename', { params });
  }

  





}
