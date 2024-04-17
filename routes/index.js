import express from 'express';
import appRouter from './appRouter.js';
import userRouter from './userRouter.js';

const router = express.Router();

router.use('/user', userRouter);
router.use('/', appRouter);

export default router;