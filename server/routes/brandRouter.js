import { Router } from 'express';
import { create, getAll } from '../controllers/brandController.js';

const brandRouter = new Router();

brandRouter.post('/', create);
brandRouter.get('/', getAll);

export default brandRouter;