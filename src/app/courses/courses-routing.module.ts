import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseComponent} from "./course/course.component";
import {LessonsListComponent} from "./lessons-list/lessons-list.component";
import {HomeComponent} from "./home/home.component";
import {CourseResolver} from "./services/router/course.resolver";
import {LessonsResolver} from "./services/router/lessons.resolver";
import {LessonDetailComponent} from "./lesson/lesson-detail.component";
import {LessonDetailResolver} from "./services/router/lesson-detail.resolver";
import {AuthenticationGuard} from "../services/auth.guard";


const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: ':courseUrl',
    component: CourseComponent,
    canActivate: [AuthenticationGuard],
    canActivateChild: [AuthenticationGuard],
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
        component: LessonDetailComponent,
        resolve: {
          lesson: LessonDetailResolver
        }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    CourseResolver,
    LessonsResolver,
    LessonDetailResolver
  ]
})
export class CoursesRoutingModule {



}
