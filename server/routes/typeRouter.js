import { Router } from 'express';
import { create, getAll } from '../controllers/typeController.js';

const typeRouter = new Router();

typeRouter.post('/', create);
typeRouter.get('/', getAll);

export default typeRouter;