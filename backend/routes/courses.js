import express from 'express';
import { getAllCourses, getSingleCourse } from '../controllers/courses.js';

const router = express.Router();

router.route('/').get(getAllCourses);
router.route('/:id').get(getSingleCourse);

export default router;
