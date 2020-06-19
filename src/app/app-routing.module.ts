import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules, UrlSerializer, NoPreloading} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AboutComponent} from './about/about.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {CanLoadAuthGuard} from './services/can-load-auth.guard';


const routes: Routes = [
    {
      path: "",
      redirectTo: "/courses",
        pathMatch: "full"
    },
    {
      path: "courses",
      loadChildren: () => import('./courses/courses.module')
                            .then(m => m.CoursesModule)
        // canLoad: [CanLoadAuthGuard]
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "**",
        component: PageNotFoundComponent
    }

];

@NgModule({
  imports: [
      RouterModule.forRoot(
          routes, {
              preloadingStrategy: PreloadAllModules
          })
  ],
  exports: [RouterModule],
  providers: [
      CanLoadAuthGuard
  ]
})
export class AppRoutingModule {


}
