import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CourseComponent} from './course/course.component';
import {CourseResolver} from './services/course.resolver';
import {LessonDetailComponent} from './lesson/lesson-detail.component';
import {LessonsListComponent} from './lessons-list/lessons-list.component';
import {LessonsResolver} from './services/lessons.resolver';


const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path:":courseUrl",
        component: CourseComponent,
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
                component: LessonDetailComponent
            }
        ],
        resolve: {
            course: CourseResolver
        }
    }
];

@NgModule({
  imports: [
      RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [
      CourseResolver,
      LessonsResolver
  ]
})
export class CoursesRoutingModule {

}
