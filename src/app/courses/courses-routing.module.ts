import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseComponent} from "./course/course.component";
import {LessonsListComponent} from "./lessons-list/lessons-list.component";
import {HomeComponent} from "./home/home.component";
import {CourseResolver} from "./services/router/course.resolver";
import {LessonsResolver} from "./services/router/lessons.resolver";
import {LessonComponent} from "./lesson/lesson.component";


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: ':courseUrl',
    component: CourseComponent,
    resolve: {
      course: CourseResolver
    },
    children: [
      {
        path: "",
        component: LessonsListComponent,
        resolve: {
          lessons: LessonsResolver
        }
      },
      {
        path: "lessons/:lessonSeqNo",
        component: LessonComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    CourseResolver,
    LessonsResolver
  ]
})
export class CoursesRoutingModule {



}
