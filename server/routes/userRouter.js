import { Router } from 'express';
import { registration, login, check } from '../controllers/userController.js';

const userRouter = new Router();

userRouter.post('/registration', registration);
userRouter.post('/login', login);
userRouter.get('/auth', check);

export default userRouter;