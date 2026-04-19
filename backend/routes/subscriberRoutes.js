import express from 'express';
import { subscribeNewsletter, getSubscribers } from '../controllers/subscriberController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
    .post(subscribeNewsletter)
    .get(protect, getSubscribers);

export default router;
