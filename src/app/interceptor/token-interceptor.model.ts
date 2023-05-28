import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AccountService } from "../service/account-service.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private accountService: AccountService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.accountService.tokenIsPresent()) {
      console.log('radddiiiiiiiiii')
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.accountService.getToken()}` 
        }
      });
    }
    return next.handle(request);
  }
}
