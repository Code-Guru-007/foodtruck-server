import asyncHandler from 'express-async-handler';
import SalesOrder from '../../models/salesOrders_Model.js';

const getOrders = asyncHandler(async (req, res) => {
    try {
        const salesOrders = await SalesOrder.find().populate('dishes.dish');
        res.status(200).send(salesOrders);
    } catch (error) {
        res.status(500).send(error);
    }
});
const addOrder = asyncHandler(async (req, res) => {
    try {
        const salesOrder = new SalesOrder(req.body);
        await salesOrder.save();
        res.status(201).send(salesOrder);
    } catch (error) {
        res.status(400).send(error);
    }
});
const updateOrder = asyncHandler(async (req, res) => {
    try {
        const salesOrder = await SalesOrder.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!salesOrder) {
            return res.status(404).send();
        }
        res.send(salesOrder);
    } catch (error) {
        res.status(400).send(error);
    }
});

const delOrder = asyncHandler(async (req, res) => {
    try {
        const salesOrder = await SalesOrder.findByIdAndDelete(req.params.id);
        if (!salesOrder) {
            return res.status(404).send();
        }
        res.send({ message: 'Sales order deleted successfully.' });
    } catch (error) {
        res.status(500).send(error);
    }
});

export { addOrder, delOrder, getOrders, updateOrder };
