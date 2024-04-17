import asyncHandler from 'express-async-handler';
import Dish from '../../models/dishes_Model.js';

const getDishes = asyncHandler(async (req, res) => {
    try {
        const dishes = await Dish.find({});
        res.send({message: "All dishes response", items: dishes});
    } catch (error) {
        res.status(500).send(error);
    }
})

const addDishes = asyncHandler(async (req, res) => {
    const dish = new Dish(req.body);
    try {
        await dish.save();
        res.status(201).send(dish);
    } catch (error) {
        res.status(400).send(error);
    }
})

const updateDishes = asyncHandler(async (req, res) => {
    try {
        const dish = await Dish.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!dish) {
            return res.status(404).send();
        }
        res.send(dish);
    } catch (error) {
        res.status(400).send(error);
    }
})

const delDishes = asyncHandler(async (req, res) => {
    try {
        const dish = await Dish.findByIdAndDelete(req.params.id);
        if (!dish) {
            return res.status(404).send();
        }
        res.send(dish);
    } catch (error) {
        res.status(500).send(error);
    }
})
export { addDishes, delDishes, getDishes, updateDishes };
