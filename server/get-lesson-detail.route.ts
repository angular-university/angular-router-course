import {Request, Response} from "express";
import {COURSES, LESSONS} from "./db-data";



export function findLessonDetail(req: Request, res: Response) {

  const courseUrl = req.query["courseUrl"],
        lessonSeqNo = parseInt(req.query['lessonSeqNo'] as string);

  const courses:any = Object.values(COURSES);

  const course = courses.find(course => course.url == courseUrl);

  const lessons = Object.values(LESSONS).filter(lesson => lesson.courseId == course.id);

  const lessonIndex = lessons.findIndex(lesson => lesson.seqNo == lessonSeqNo);

  const lesson = lessons[lessonIndex];

  lesson['first'] = (lessonIndex == 0);
  lesson['last'] = (lessonIndex == lessons.length - 1);

  setTimeout(() =>  res.status(200).json(lesson), 400);

}
