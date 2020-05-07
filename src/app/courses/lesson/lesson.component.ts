import {Component, Input, OnInit} from '@angular/core';
import {Lesson} from '../model/lesson';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  lesson: Lesson;

  constructor(private route: ActivatedRoute) {

    console.log("Created LessonComponent...");

  }

  ngOnInit() {

    this.lesson = this.route.snapshot.data["lesson"];

  }

}
