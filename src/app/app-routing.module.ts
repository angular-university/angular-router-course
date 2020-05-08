import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules, UrlSerializer} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AboutComponent} from "./about/about.component";
import {AuthenticationGuard} from "./services/auth.guard";
import {CanLoadCoursesModuleGuard} from "./services/can-load-courses-module.guard";
import {CustomPreLoadingStrategy} from "./services/custom-pre-loading.strategy";

const routes: Routes = [
  {
    path: '',
    redirectTo: "/courses",
    pathMatch: "full"
  },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule),
    data: {preload:true}
    //canLoad: [CanLoadCoursesModuleGuard]
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
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration:"top",
      preloadingStrategy: CustomPreLoadingStrategy,
      paramsInheritanceStrategy: "always",
      relativeLinkResolution: "corrected",
      // try adding %E0%A4%A to the end of an url with hash true
      malformedUriErrorHandler: (error: URIError, urlSerializer: UrlSerializer, url: string) => urlSerializer.parse('/page-not-found')

    })],
  exports: [RouterModule],
  providers: [
    AuthenticationGuard
  ]
})
export class AppRoutingModule {


}
