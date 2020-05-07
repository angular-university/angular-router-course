import {Injectable} from "@angular/core";
import {Lesson} from "../../model/lesson";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {CoursesService} from "../courses.service";
import {Observable} from "rxjs";


@Injectable()
export class LessonDetailResolver implements Resolve<Lesson>{

  constructor(private courses: CoursesService) {

  }

  resolve(snapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Lesson> {

    const courseUrl = snapshot.parent.paramMap.get("courseUrl"),
    lessonSeqNo = snapshot.paramMap.get("lessonSeqNo");

    console.log(courseUrl, lessonSeqNo);

    return this.courses.loadLessonDetail(courseUrl, lessonSeqNo);

  }

}
