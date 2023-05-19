import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiHost: string = 'http://localhost:8080/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, private router: Router) { }

  registerUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'users/register/administrator', user, {headers: this.headers});
  }

  searchEngineers(email: string,name: string, surname: string, startDate: String, endDate: String): Observable<any> {
    return this.http.get<User[]>(this.apiHost + 'users/search/engineers/' + email + '/' + name + '/' 
    + surname + '/' + startDate + '/' + endDate, {headers: this.headers});
  }

  findByTitle(title: string): Observable<any> {
    const params = new HttpParams().set('title', title);
    return this.http.get<any>(this.apiHost + 'users/title', { params });
  }

  findByRoleName(roleName: string): Observable<any> {
    const params = new HttpParams().set('roleName', roleName);
    return this.http.get<any>(this.apiHost + 'users/rolename', { params });
  }

  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(this.apiHost + "users/employees", {headers: this.headers});
  }

  getById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiHost}users/${id}`, { headers: this.headers });
  }

  updateUser(user: any): Observable<any>{
    return this.http.put<any>(this.apiHost + 'users/update' , user , { headers : this.headers });          
  }
}
