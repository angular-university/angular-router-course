import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {LessonDetail} from '../model/lesson-detail';
import {CoursesService} from './courses.service';
import {Observable} from 'rxjs';


@Injectable()
export class LessonDetailResolver implements Resolve<LessonDetail> {

    constructor(private courses: CoursesService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<LessonDetail>  {

        const courseUrl = route.paramMap.get("courseUrl"),
            lessonSeqNo = route.paramMap.get("lessonSeqNo");

        return this.courses.loadLessonDetail(courseUrl, lessonSeqNo);
    }


}
