import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  apiHost: string = 'https://localhost:443/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  private access_token: string | null = localStorage.getItem('jwt');
  private refresh_token: string | null = localStorage.getItem('rjwt');
  currentUser: any =
    JSON.parse(localStorage.getItem('loggedUser') as string) || null;
  private loggedIn: boolean = !!this.access_token;


  constructor(private http: HttpClient, private router: Router) { }

  login(data: any): Observable<any> {
    return this.http
      .post<any>(this.apiHost + 'auth/login', data, { headers: this.headers })
      .pipe(
        map((res) => {
          console.log(res);
          console.log('Login success');
          this.access_token = res.accessToken;
          localStorage.setItem('jwt', res.accessToken);
          localStorage.setItem('rjwt', res.refreshToken);
          this.loggedIn = true;
        })
      );
  }

  getMyInfo(email: any): Observable<any> {
    return this.http.get<any>(this.apiHost + 'users/find/' + email, {
      headers: this.headers,
    });
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('jwt');
    localStorage.removeItem('rjwt');
    localStorage.removeItem('loggedUser');
    this.access_token = null;
    this.loggedIn = false;
  }

  tokenIsPresent() {
    return this.access_token != undefined && this.access_token != null;
  }

  getToken() {
    return this.access_token;
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }

  getEmailFromToken(access_token: any): string {
    return JSON.parse(window.atob(access_token.split('.')[1])).sub;
  }

  loginWithoutPassword(email: any): Observable<any> {
    return this.http.get<any[]>(this.apiHost + "auth/generate-sttoken/" + email, {headers: this.headers});
  }

  
}
