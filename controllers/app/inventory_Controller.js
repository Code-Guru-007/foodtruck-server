import asyncHandler from 'express-async-handler';
import Inventory from '../../models/inventory_Model.js';

const getInventory = asyncHandler(async (req, res) => {
    try {
        const inventoryRecords = await Inventory.find().populate('ingredient storageLocation');
        res.status(200).send(inventoryRecords);
    } catch (error) {
        res.status(500).send(error);
    }
});

const addInventory = asyncHandler(async (req, res) => {
    console.log(req.body)
    try {
        const inventory = new Inventory(req.body);
        await inventory.save();
        res.status(201).send(inventory);
    } catch (error) {
        res.status(400).send(error);
    }
});

const updateInventory = asyncHandler(async (req, res) => {
    try {
        const inventory = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!inventory) {
            return res.status(404).send();
        }
        res.send(inventory);
    } catch (error) {
        res.status(400).send(error);
    }
});

const delInventory = asyncHandler(async (req, res) => {
    try {
        const inventory = await Inventory.findByIdAndDelete(req.params.id);
        if (!inventory) {
            return res.status(404).send();
        }
        res.send(inventory);
    } catch (error) {
        res.status(400).send(error);
    }
});

export { addInventory, delInventory, getInventory, updateInventory };


