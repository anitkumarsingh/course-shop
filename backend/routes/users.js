import express from 'express';
import { authUser, userProfile, registerUser, getUsers } from '../controllers/users.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.route('/').post(registerUser);
router.post('/login', authUser);
router.route('/profile').get(auth, userProfile);
router.route('/').get(getUsers);

export default router;
