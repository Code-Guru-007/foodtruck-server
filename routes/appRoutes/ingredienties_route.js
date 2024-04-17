import express from "express";
import * as ingredientiesController from '../../controllers/app/ingredienties_Controller.js';

const router = express.Router();

router.get('/', ingredientiesController.getIngredients);
router.post('/', ingredientiesController.addIngredient);
router.patch('/:id', ingredientiesController.updateIngredient);
router.delete('/:id', ingredientiesController.deleteIngredient);

export default router;
