import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectUserAssignmentService {
  apiHost: string = 'https://localhost:443/';
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient, private router: Router) {}

  findByUserId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiHost}assignments/user/${id}`, {
      headers: this.headers,
    });
  }

  findByProjectId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiHost}assignments/project/${id}`, {
      headers: this.headers,
    });
  }

  addEngineer(project: any): Observable<any> {
    return this.http.post<any>(`${this.apiHost}assignments`, project, {
      headers: this.headers,
    });
  }

  updateProject(id: any, project: any): Observable<any> {
    return this.http.put<any>(this.apiHost + 'assignments/' + id, project, {
      headers: this.headers,
    });
  }

  deleteEngineer(id: any): Observable<any> {
    return this.http.delete<any>(`${this.apiHost}assignments/${id}`, {
      headers: this.headers,
    });
  }
}
