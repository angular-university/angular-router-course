import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CourseComponent} from './course/course.component';
import {LoginComponent} from './login/login.component';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {LessonsListComponent} from "./lessons-list/lessons-list.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: "/courses",
    pathMatch: "full"
  },
  {
    path: 'courses',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'courses/:courseId',
    component: CourseComponent,
    children: [
      {
        path: "",
        component: LessonsListComponent
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
