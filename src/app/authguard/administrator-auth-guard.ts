import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdministratorAuthGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.userService.getById(34).pipe( //dodati da dobavlja pomocu tokena a ne harkodovano
      switchMap((user: User) => {
        const isAdmin = user.roleNames.includes('Administrator'); // Provera da li korisnik ima ulogu Administrator
        if (!isAdmin) {
          return of(false); // Ako korisnik nema ulogu Administrator, vraćamo false
        }

        const isActivated = user.accountEnabled;
        if (isActivated) {
          return of(true); // Ako je korisnik aktiviran, vraćamo true
        } else {
          return of(this.router.parseUrl('/first/login')); // Ako je korisnik deaktiviran, preusmeravamo ga na '/first/login'
        }
      })
    );
  }
}
