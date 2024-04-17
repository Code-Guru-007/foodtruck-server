import express from "express";
import * as ordersController from '../../controllers/app/salesOrders_Controller.js';

const router = express.Router();

router.get('/', ordersController.getOrders)
router.post('/', ordersController.addOrder)
router.patch('/:id', ordersController.updateOrder)
router.delete('/:id', ordersController.delOrder)

export default router;