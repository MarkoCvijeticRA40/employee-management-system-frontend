import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdministratorNotEnabledAuthGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.userService.getById(34).pipe(
      switchMap((user: User | null) => {
        if (user && user.roleNames.includes('Administrator') && user.accountEnabled == false) {
          return of(true);
        } else {
          return of(false);
        }
      }),
      catchError(() => of(false))
    );
  }
}
