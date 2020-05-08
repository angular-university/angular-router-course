import {PreloadingStrategy, Route} from "@angular/router";
import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";


@Injectable({providedIn: "root"})
export class CustomPreLoadingStrategy implements  PreloadingStrategy {

  constructor() {
    console.log("Created custom pre-loading strategy");

  }


  preload(route: Route, load: () => Observable<any>): Observable<any> {

    if (route.data["preload"]) {
      return load();
    }
    else {
      return of(null);
    }



  }

}
