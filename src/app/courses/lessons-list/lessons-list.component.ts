import {Component, Input, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LessonSummary} from "../model/lesson-summary";

@Component({
    selector: 'lessons-list',
    templateUrl: './lessons-list.component.html',
    styleUrls: ['./lessons-list.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class LessonsListComponent implements OnInit {

  lessons:LessonSummary[];

  constructor(private route:ActivatedRoute) {

  }

  ngOnInit() {

    this.lessons = this.route.snapshot.data["lessons"];

  }

}
