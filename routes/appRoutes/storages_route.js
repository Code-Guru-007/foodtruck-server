import express from "express";
import * as storagesController from '../../controllers/app/storages_Controller.js';

const router = express.Router();

router.get('/', storagesController.getStorages)
router.post('/', storagesController.addStorage)
router.delete('/:id', storagesController.delStorage)

export default router;