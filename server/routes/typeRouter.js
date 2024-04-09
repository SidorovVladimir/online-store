import { Router } from 'express';
import { create, getAll } from '../controllers/typeController.js';
import checkRole from '../middleware/checkRoleMiddleware.js';


const typeRouter = new Router();

typeRouter.post('/', checkRole('ADMIN'), create);
typeRouter.get('/', getAll);

export default typeRouter;