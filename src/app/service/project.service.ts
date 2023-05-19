import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  apiHost: string = 'http://localhost:8080';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  createProject(project: any): Observable<any> {
    return this.http.post<any>(`${this.apiHost}/projects/create`, project, { headers: this.headers });
  }

  findAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiHost}/projects`, { headers: this.headers });
  }

  updateProject(project: any): Observable<any>{
    return this.http.put<any>(this.apiHost + '/projects/update' , project , { headers : this.headers });          
  }
}
