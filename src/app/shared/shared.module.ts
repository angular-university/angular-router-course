import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MessagesService} from "./messages/messages.service";
import {LoadingService} from "./loading/loading.service";
import {LoadingComponent} from "./loading/loading.component";
import {MessagesComponent} from "./messages/messages.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";



@NgModule({
  declarations: [
    MessagesComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    MessagesComponent,
    LoadingComponent
  ]
})
export class SharedModule {


}
