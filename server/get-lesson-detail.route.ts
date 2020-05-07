import {Request, Response} from "express";
import {COURSES, LESSONS} from "./db-data";



export function findLessonDetail(req: Request, res: Response) {

  const courseUrl = req.query["courseUrl"],
        lessonSeqNo = parseInt(req.query['lessonSeqNo']);

  const courses:any = Object.values(COURSES);

  const course = courses.find(course => course.url == courseUrl);

  const lesson = Object.values(LESSONS).find(lesson => lesson.courseId == course.id && lesson.seqNo == lessonSeqNo);

  res.status(200).json(lesson);

}
