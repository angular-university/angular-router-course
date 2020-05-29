import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CourseComponent} from './course/course.component';
import {CourseResolver} from './services/course.resolver';


const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path:":courseUrl",
        component: CourseComponent,
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
      CourseResolver
  ]
})
export class CoursesRoutingModule {

}
