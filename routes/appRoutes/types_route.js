import express from "express";
import * as typesController from '../../controllers/app/types_Controller.js';

const router = express.Router();

router.get('/', typesController.getTypes);
router.post('/', typesController.addType);
router.delete('/:id', typesController.delType);

export default router;