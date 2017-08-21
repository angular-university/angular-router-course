import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {routeConfig} from "./lessons/router-config";
import {SharedModule} from "./lessons/shared.module";
import {Home} from "./lessons/home.component";
import {AllLessons} from "./lessons/all-lessons.component";
import {Playlist} from "./lessons/playlist.component";

@NgModule({
    declarations: [
        AppComponent, Home, Playlist, AllLessons
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routeConfig),
        SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
