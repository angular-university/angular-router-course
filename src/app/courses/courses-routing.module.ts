import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    }
];

@NgModule({
  imports: [

  ],
  exports: [RouterModule],
  providers: [

  ]
})
export class CoursesRoutingModule {



}
