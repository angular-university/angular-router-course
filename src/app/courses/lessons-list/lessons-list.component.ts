import {Component, Input, OnInit} from '@angular/core';
import {Lesson} from "../model/lesson";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit {

  lessons:Lesson[];

  constructor(private route:ActivatedRoute) {

  }

  ngOnInit() {

    this.lessons = this.route.snapshot.data["lessons"];

  }

}
