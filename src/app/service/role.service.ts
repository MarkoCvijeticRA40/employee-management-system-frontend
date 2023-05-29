import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  apiHost: string = 'https://localhost:443/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, private router: Router) { }

  addPermission(rolePermission: any): Observable<any> {
    return this.http.put<any>(this.apiHost + 'roles/add-permission', rolePermission, {
      headers: this.headers,
    });
  }

  removePermission(rolePermission: any): Observable<any> {
    return this.http.put<any>(this.apiHost + 'roles/remove-permission', rolePermission, {
      headers: this.headers,
    });
  }

}
