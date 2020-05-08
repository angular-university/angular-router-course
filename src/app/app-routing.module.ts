import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AboutComponent} from "./about/about.component";
import {AuthenticationGuard} from "./services/auth.guard";
import {CanLoadCoursesModuleGuard} from "./services/can-load-courses-module.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: "/courses",
    pathMatch: "full"
  },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule),
    canLoad: [CanLoadCoursesModuleGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration:"top"})],
  exports: [RouterModule],
  providers: [
    AuthenticationGuard
  ]
})
export class AppRoutingModule {


}
