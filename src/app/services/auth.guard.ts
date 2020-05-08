import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot} from '@angular/router';
import {AuthStore} from "./auth.store";
import {Observable} from "rxjs";
import {filter} from "rxjs/operators";

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(private auth: AuthStore) {

  }

  canActivate(snapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.auth.isLoggedIn$;
  }

}
