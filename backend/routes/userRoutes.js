import express from 'express';
import {registerUser, loginUser, getMe} from '../controllers/userController.js';
import Protect from '../middleware/authMiddleware.js'
const router = express.Router();


router.post('/users', registerUser)
router.post('/users/login', loginUser)
router.get('/users/me', Protect, getMe)

export default router;
