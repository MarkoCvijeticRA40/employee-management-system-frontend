import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { AccountService } from '../service/account-service.service';
import { LoggerService } from '../service/logger.service';

@Injectable({
  providedIn: 'root'
})
export class SoftwareEngineerAuthGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService, private accountService: AccountService, private loggerService: LoggerService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.userService.getById(this.accountService.currentUser.id).pipe(
      switchMap((user: User) => {
        if (user && user.roleNames.includes('Software engineer') && user.accountEnabled) {
          return of(true);
        } else {
          this.loggerService.createLoggerUnauthorized(user.email);
          return of(false);
        }
      }),
      catchError(() => of(false))
    );
  }
}
