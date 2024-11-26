import {Component, OnInit} from '@angular/core';
import {AuthStore} from './services/auth.store';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements  OnInit {

    constructor(public auth: AuthStore) {

    }

    ngOnInit() {


    }

  logout() {
        this.auth.logout();

  }

}
