import { Router } from 'express';
import { create, getAll } from '../controllers/brandController.js';
import checkRole from '../middleware/checkRoleMiddleware.js';

const brandRouter = new Router();

brandRouter.post('/', checkRole('ADMIN'), create);
brandRouter.get('/', getAll);

export default brandRouter;