import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Course} from '../model/course';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CoursesService} from './courses.service';
import {first} from 'rxjs/operators';

@Injectable()
export class CourseResolver implements Resolve<Course> {

    constructor(private courses: CoursesService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<Course> {

        const courseUrl = route.paramMap.get("courseUrl");

        return this.courses.loadCourseByUrl(courseUrl);
    }

}
