import express from "express";
import * as userController from '../controllers/auth/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', userController.registerUser)
router.post('/login', userController.loginUser)
router.route('/profile').get(protect, userController.getUserProfile)


export default router;


