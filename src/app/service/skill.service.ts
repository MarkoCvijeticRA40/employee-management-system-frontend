import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  apiHost: string = 'https://localhost:443/';
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient, private router: Router) {}

  findByUserId(id: any): Observable<any> {
    return this.http.get<any>(`${this.apiHost}skills/user/${id}`, {
      headers: this.headers,
    });
  }

  updateSkill(id: any, skill: any): Observable<any> {
    return this.http.put<any>(this.apiHost + 'skills/' + id, skill, {
      headers: this.headers,
    });
  }

  deleteSkill(id: any): Observable<any> {
    return this.http.delete<any>(`${this.apiHost}skills/${id}`, {
      headers: this.headers,
    });
  }
}
