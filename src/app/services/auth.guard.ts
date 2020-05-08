import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {AuthStore} from "./auth.store";
import {Observable} from "rxjs";
import {filter, map} from "rxjs/operators";

@Injectable()
export class AuthenticationGuard implements CanActivate, CanActivateChild {

  constructor(private auth: AuthStore, private router: Router) {

  }

  canActivate(snapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.checkIfAuthenticated();
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.checkIfAuthenticated();
  }

  private checkIfAuthenticated() {
    return this.auth.isLoggedIn$
      .pipe(map(loggedIn => {
          if (!loggedIn) {
            return this.router.parseUrl('/login');
          }
          else return true;
        })
      );
  }

}
