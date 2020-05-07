import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LessonSummary} from "../model/lesson-summary";
import {LessonDetail} from "../model/lesson-detail";

@Component({
  selector: 'lesson',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent implements OnInit {

  lesson: LessonDetail;

  constructor(private route: ActivatedRoute) {

    console.log("Created LessonDetailComponent...");

  }

  ngOnInit() {

    this.lesson = this.route.snapshot.data["lesson"];

  }

}
