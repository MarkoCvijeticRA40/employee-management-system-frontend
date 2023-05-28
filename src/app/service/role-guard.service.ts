
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from './account-service.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(private accountService: AccountService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const expectedRole = route.data['expectedRole'];

    if (!this.accountService.isAuthenticated() || this.accountService.isExpectedRole() !== expectedRole) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}


