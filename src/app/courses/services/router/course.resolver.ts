import {Injectable} from "@angular/core";
import {Course} from "../../model/course";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {CoursesService} from "../courses.service";


@Injectable()
export class CourseResolver implements Resolve<Course> {

  constructor(private courses: CoursesService) {

  }

  resolve(snapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {

    const courseId = parseInt(snapshot.paramMap.get("courseId"));

    return this.courses.loadCourseById(courseId);
  }


}
