import express from "express";

import {getcourse, getdatabyid, addcourse} from "./func.js"

const CourseRouter = express.Router()
CourseRouter.get("/",getcourse);
CourseRouter.get("/:id",getdatabyid);
CourseRouter.post("/",addcourse);
export default CourseRouter;