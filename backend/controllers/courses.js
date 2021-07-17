import Courses from '../models/courses.js';
import asyncHandler from 'express-async-handler';

const getAllCourses = asyncHandler(async (req, res, next) => {
	const courses = await Courses.find({});
	res.json({
		msg: 'Courses fetched successfully',
		courses
	});
});

const getSingleCourse = asyncHandler(async (req, res, next) => {
	console.log(req.params.id);
	const course = await Courses.findById(req.params.id);
	res.json({
		msg: 'Course fetched successfully',
		course
	});
});

export { getAllCourses, getSingleCourse };
