import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  apiHost: string = 'https://localhost:443/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getAllNotifications(): Observable<any> {
    return this.http.get<any[]>(this.apiHost + "logNotification/all", {headers: this.headers});
  }

  getNewNotifications(): Observable<any> {
    return this.http.get<any[]>(this.apiHost + "logNotification/new", {headers: this.headers});
  }

  setRead(): Observable<any> {
    return this.http.put<any>(this.apiHost + "logNotification/setRead", {headers: this.headers});
  }

}
