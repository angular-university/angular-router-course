import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable,of} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {Course} from "../model/course";
import {LessonDetail} from "../model/lesson-detail";
import {LessonSummary} from "../model/lesson-summary";


@Injectable()
export class CoursesService {

    constructor(private http:HttpClient) {

    }

    loadCourseByUrl(courseUrl:string) {
       return this.http.get<Course>(`/api/courses/${courseUrl}`)
            .pipe(
              shareReplay()
            );
    }

    loadAllCourseLessonsSummary(courseUrl:string): Observable<LessonSummary[]> {
        return this.http.get<LessonSummary[]>('/api/lessons', {
            params: {
                pageSize: "10000",
                courseUrl
            }
        })
            .pipe(
                map(res => res["payload"]),
                shareReplay()
            );
    }

    loadAllCourses(): Observable<Course[]> {
        return this.http.get<Course[]>("/api/courses")
            .pipe(
                map(res => res["payload"]),
                shareReplay()
            );
    }


    saveCourse(courseId:string, changes: Partial<Course>):Observable<any> {
        return this.http.put(`/api/courses/${courseId}`, changes)
            .pipe(
                shareReplay()
            );
    }


    searchLessons(search:string): Observable<LessonSummary[]> {
        return this.http.get<LessonSummary[]>('/api/lessons', {
            params: {
                filter: search,
                pageSize: "100"
            }
        })
            .pipe(
                map(res => res["payload"]),
                shareReplay()
            );
    }


  loadLessonDetail(courseUrl: string, lessonSeqNo: string):Observable<LessonDetail> {
    return this.http.get<LessonDetail>(`/api/lesson-details`, {
      params: {
        courseUrl,
        lessonSeqNo
      }
    })
      .pipe(
        shareReplay()
      );
  }
}







