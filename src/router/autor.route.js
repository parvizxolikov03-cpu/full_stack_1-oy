import controller from '../controller/author.controller.js';
import { Router } from 'express';

const router = Router();

router
    .post('/', controller.create)
    .get('/', controller.findAll)
    .get('/:id', controller.findBy)
    .patch('/:id', controller.update)
    .delete('/:id', controller.delete);

export default router;
