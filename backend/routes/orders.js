import express from 'express';
import { orderCourseItems } from '../controllers/orders.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.route('/').post(auth, orderCourseItems);

export default router;
