import { Router } from 'express';
import { registration, login, check } from '../controllers/userController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const userRouter = new Router();

userRouter.post('/registration', registration);
userRouter.post('/login', login);
userRouter.get('/auth', authMiddleware, check);

export default userRouter;