import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MessagesService} from "./messages/messages.service";
import {LoadingService} from "./loading/loading.service";
import {LoadingComponent} from "./loading/loading.component";
import {MessagesComponent} from "./messages/messages.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {SafeUrlPipe} from "./pipes/safe-url.pipe";



@NgModule({
  declarations: [
    MessagesComponent,
    LoadingComponent,
    SafeUrlPipe
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    MessagesComponent,
    LoadingComponent,
    SafeUrlPipe
  ]
})
export class SharedModule {


}
