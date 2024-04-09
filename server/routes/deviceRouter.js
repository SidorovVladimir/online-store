import { Router } from 'express';
import { create, getAll, getOne } from '../controllers/deviceController.js';
import checkRole from '../middleware/checkRoleMiddleware.js';

const deviceRouter = new Router();

deviceRouter.post('/', checkRole('ADMIN'), create);
deviceRouter.get('/', getAll);
deviceRouter.get('/:id', getOne);

export default deviceRouter;