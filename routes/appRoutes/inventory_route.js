import express from "express";
import * as inventory from '../../controllers/app/inventory_Controller.js';

const router = express.Router();

router.get('/', inventory.getInventory)
router.post('/',inventory.addInventory)
router.patch('/:id',inventory.updateInventory)
router.delete('/:id',inventory.delInventory)

export default router;