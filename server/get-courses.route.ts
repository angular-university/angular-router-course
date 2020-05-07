

import {Request, Response} from 'express';
import {COURSES} from "./db-data";



export function getAllCourses(req: Request, res: Response) {

/*
    console.log("ERROR loading courses!");
    res.status(500).json({message: 'error occurred.'});
    return;
*/



        setTimeout(() => {

             res.status(200).json({payload:Object.values(COURSES)});

        }, 400);


}


export function getCourseByUrl(req: Request, res: Response) {

    const courseUrl = req.params["id"];

    const courses:any = Object.values(COURSES);

    const course = courses.find(course => course.url == courseUrl);

    res.status(200).json(course);
}
