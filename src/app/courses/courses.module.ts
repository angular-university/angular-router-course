import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import {LessonsListComponent} from "./lessons-list/lessons-list.component";
import {CoursesCardListComponent} from "./courses-card-list/courses-card-list.component";
import {LessonDetailComponent} from "./lesson/lesson-detail.component";
import {CourseDialogComponent} from "./course-dialog/course-dialog.component";
import {CourseComponent} from "./course/course.component";
import {HomeComponent} from "./home/home.component";
import {CoursesService} from "./services/courses.service";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";
import {MatListModule} from "@angular/material/list";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import {SharedModule} from "../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HomeComponent,
    CourseComponent,
    CourseDialogComponent,
    LessonDetailComponent,
    CoursesCardListComponent,
    LessonsListComponent,

  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatListModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatMomentDateModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: [
    CoursesService
  ]
})
export class CoursesModule { }
