import asyncHandler from 'express-async-handler';
import Ingredient from '../../models/ingredienties_Model.js';

const getIngredients = asyncHandler(async (req, res) => {
  try {
    const ingredients = await Ingredient.find().populate('measurementUnit storageLocation');
    res.status(200).send(
      {
          code: 200,
          success: true,
          timestamp: Date.now(),
          message: "All ingredients Response",
          items: ingredients
      });
  } catch (error) {
    res.status(500).send(error);
  }
});
const addIngredient = asyncHandler(async (req, res) => {
  console.log(req.body);
  try {
    const ingredient = new Ingredient(req.body);
    await ingredient.save();
    res.status(201).send(ingredient);
  } catch (error) {
    res.status(400).send(error);
  }
});

const updateIngredient = asyncHandler(async (req, res) => {
  console.log(req.params);
  try {
    const ingredient = await Ingredient.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!ingredient) {
      return res.status(404).send();
    }
    res.send(ingredient);
  } catch (error) {
    res.status(400).send(error);
  }
});

const deleteIngredient = asyncHandler(async (req, res) => {
  console.log(req.params);
  try {
    const ingredient = await Ingredient.findByIdAndDelete(req.params.id);
    if (!ingredient) {
      return res.status(404).send();
    }
    res.send(
      {
          code: 200,
          success: true,
          timestamp: Date.now(),
          message: "inventory deleted successfully",
          items: ingredient
      });
  } catch (error) {
    res.status(500).send(error);
  }
});

export { addIngredient, deleteIngredient, getIngredients, updateIngredient };



