import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {CoursesService} from "../courses.service";
import {LessonSummary} from "../../model/lesson-summary";


@Injectable()
export class LessonsResolver implements Resolve<LessonSummary[]> {


  constructor(private courses: CoursesService) {

  }

  resolve(snapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LessonSummary[]> {

    const courseUrl = snapshot.paramMap.get("courseUrl");

    return this.courses.loadAllCourseLessonsSummary(courseUrl);
  }


}
