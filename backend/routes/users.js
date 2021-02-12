import express from 'express';
const router = express.Router();
import { protect } from '../middleware/authMiddleware.js';
import {
  authUser,
  getUserProfile,
  registerUser,
} from '../controllers/userCtrl.js';

router.route('/').post(registerUser);
router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile);

export default router;
