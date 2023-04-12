import express from "express";

import {getcourse, getdatabyid, addcourse, signIn, getdata,login} from "./func.js"

const CourseRouter = express.Router()
CourseRouter.get("/",getcourse);
CourseRouter.get("/:id",getdatabyid);
CourseRouter.post("/",addcourse);
CourseRouter.post("/signin",signIn);
CourseRouterr.get("/login/:id",getdata);
CourseRouter.post("/login",login);
export default CourseRouter;