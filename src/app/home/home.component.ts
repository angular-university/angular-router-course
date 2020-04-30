import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Course, sortCoursesBySeqNo} from '../model/course';
import {Observable} from 'rxjs';
import {CoursesStore} from '../services/courses.store';
import {CoursesService} from "../services/courses.service";
import {map} from "rxjs/operators";


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  beginnerCourses$: Observable<Course[]>;

  advancedCourses$: Observable<Course[]>;

  constructor(private courses: CoursesService) {

  }

  ngOnInit() {

      this.reloadCourses();

  }

  reloadCourses() {

    const courses$ = this.courses.loadAllCourses();

      this.beginnerCourses$ = this.filterByCategory(courses$, "BEGINNER");

      this.advancedCourses$ = this.filterByCategory(courses$, "ADVANCED");

  }

  filterByCategory(courses$: Observable<Course[]>, category:string) {
    return courses$
      .pipe(
        map(courses => courses.filter(course => course.category == category).sort(sortCoursesBySeqNo))
      );
  }

}


