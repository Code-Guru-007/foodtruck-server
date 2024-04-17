// POST - Create a new measurement unit
import asyncHandler from 'express-async-handler';
import Measurement from '../../models/measurement_Model.js';

const getUnits = asyncHandler(async (req, res) => {
    try {
        const measurements = await Measurement.find();
        res.status(200).send(
            {
                code: 200,
                success: true,
                timestamp: Date.now(),
                message: "All measurements Response",
                items: measurements
            });
    } catch (error) {
        res.status(500).send(error);
    }
});
const addUnit = asyncHandler(async (req, res) => {
    console.log(req.body);
    try {
        const measurement = new Measurement(req.body);
        await measurement.save();
        res.status(201).send(measurement);
    } catch (error) {
        res.status(400).send(error);
    }
});
const updateUnit = asyncHandler(async (req, res) => {
    try {
        const measurement = await Measurement.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!measurement) {
            return res.status(404).send();
        }
        res.send(measurement);
    } catch (error) {
        res.status(400).send(error);
    }
});
const delUnit = asyncHandler(async (req, res) => {
    console.log(req.params);
    try {
        const measurement = await Measurement.findByIdAndDelete(req.params.id);
        if (!measurement) {
            return res.status(404).send();
        }
        res.send(measurement);
    } catch (error) {
        res.status(500).send(error);
    }
});

export { addUnit, delUnit, getUnits, updateUnit };
