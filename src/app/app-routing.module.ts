import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CourseComponent} from './course/course.component';
import {LoginComponent} from './login/login.component';
import {SearchLessonsComponent} from './search-lessons/search-lessons.component';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

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
    path:"search-lessons",
    component: SearchLessonsComponent
  },
  {
    path: 'courses/:courseId',
    component: CourseComponent
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
