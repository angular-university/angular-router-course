import {Injectable} from "@angular/core";
import {CanLoad, Route, UrlSegment} from "@angular/router";
import {Observable, of} from "rxjs";
import {AuthStore} from "./auth.store";
import {first} from "rxjs/operators";


@Injectable()
export class CanLoadCoursesModuleGuard implements CanLoad {

  constructor(private auth: AuthStore) {

  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.auth.isLoggedIn$
      .pipe(
        first()
      );
  }

}
