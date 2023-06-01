import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  apiHost: string = 'https://localhost:443/';
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient, private router: Router) {}

  findByUserId(id: any): Observable<any> {
    return this.http.get<any>(`${this.apiHost}cv/user/${id}`, {
      headers: this.headers,
    });
  }
}
