import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseComponent} from "./course/course.component";
import {LessonsListComponent} from "./lessons-list/lessons-list.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: ':courseId',
    component: CourseComponent,
    children: [
      {
        path: "",
        component: LessonsListComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule {



}
