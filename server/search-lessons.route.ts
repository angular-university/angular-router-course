


import {Request, Response} from 'express';
import {COURSES, LESSONS} from "./db-data";
import {setTimeout} from "timers";



export function searchLessons(req: Request, res: Response) {

    const queryParams:any = req.query;

    const courseUrl = queryParams.courseUrl,
          filter = queryParams.filter || '',
          sortOrder = queryParams.sortOrder || 'asc',
          pageNumber = parseInt(queryParams.pageNumber) || 0,
          pageSize = parseInt(queryParams.pageSize) || 3;

  const courses:any = Object.values(COURSES);

  const course = courses.find(course => course.url == courseUrl);

  let lessons;

    if (courseUrl) {
     lessons = Object.values(LESSONS).filter(lesson => lesson.courseId == course.id).sort((l1, l2) => l1.id - l2.id);
    }
    else {
        lessons = Object.values(LESSONS);
    }

    if (filter) {
       lessons = lessons.filter(lesson => lesson.description.trim().toLowerCase().search(filter.toLowerCase()) >= 0);
    }

    if (sortOrder == "desc") {
        lessons = lessons.reverse();
    }

    const initialPos = pageNumber * pageSize;

    const lessonsPage = lessons.slice(initialPos, initialPos + pageSize)
      .map(lesson => {
      const newLesson = {...lesson};
      delete newLesson.videoId;
      return newLesson;
    });

    setTimeout(() => {
        res.status(200).json({payload: lessonsPage});
    },400);


}
