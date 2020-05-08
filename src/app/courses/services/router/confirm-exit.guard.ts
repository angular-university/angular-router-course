import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {CourseComponent} from "../../course/course.component";
import {Observable, of} from "rxjs";

@Injectable()
export class ConfirmExitGuard implements CanDeactivate<CourseComponent> {

  canDeactivate(component: CourseComponent, currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> {

    return of(component.confirmExit());

  }

}
