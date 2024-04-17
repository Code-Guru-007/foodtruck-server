import express from "express";
import * as dishesController from '../../controllers/app/dishes_Controller.js';

const router = express.Router();

router.get('/', dishesController.getDishes)
router.post('/', dishesController.addDishes)
router.patch('/:id', dishesController.updateDishes)
router.delete('/:id', dishesController.delDishes)

export default router;