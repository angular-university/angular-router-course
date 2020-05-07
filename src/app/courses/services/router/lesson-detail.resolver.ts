import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {CoursesService} from "../courses.service";
import {Observable} from "rxjs";
import {LessonDetail} from "../../model/lesson-detail";


@Injectable()
export class LessonDetailResolver implements Resolve<LessonDetail>{

  constructor(private courses: CoursesService) {

  }

  resolve(snapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LessonDetail> {

    const courseUrl = snapshot.parent.paramMap.get("courseUrl"),
    lessonSeqNo = snapshot.paramMap.get("lessonSeqNo");

    return this.courses.loadLessonDetail(courseUrl, lessonSeqNo);

  }

}
