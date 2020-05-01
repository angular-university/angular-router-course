import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Lesson} from "../../model/lesson";
import {Observable} from "rxjs";
import {CoursesService} from "../courses.service";


@Injectable()
export class LessonsResolver implements Resolve<Lesson[]> {


  constructor(private courses: CoursesService) {

  }

  resolve(snapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Lesson[]> {

    const courseId = parseInt(snapshot.paramMap.get("courseId"));

    return this.courses.loadAllCourseLessonsSummary(courseId);
  }


}
