import express from "express";
import * as measurementController from '../../controllers/app/measurement_Controller.js';

const router = express.Router();

router.get('/', measurementController.getUnits)
router.post('/', measurementController.addUnit)
router.patch('/', measurementController.updateUnit)
router.delete('/:id', measurementController.delUnit)

export default router;