import asyncHandler from 'express-async-handler';
import StorageLocation from '../../models/storages_Model.js';

const getStorages = asyncHandler(async (req, res) => {
  try {
    const storageLocation = await StorageLocation.find();
    res.status(200).send(storageLocation);
  } catch (error) {
    res.status(500).send(error);
  }
});

const addStorage = asyncHandler(async (req, res) => {
  console.log(req.body);
  try {
    const storageLocation = new StorageLocation(req.body);
    await storageLocation.save();
    res.status(201).send(storageLocation);
  } catch (error) {
    res.status(400).send(error);
  }
});

const delStorage = asyncHandler(async (req, res) => {
  console.log(req.params)
  try {
    const storageLocation = await StorageLocation.findByIdAndDelete(req.params.id);
    if (!storageLocation) {
      return res.status(404).send();
    }
    res.send(storageLocation);
  } catch (error) {
    res.status(500).send(error);
  }
});

export { addStorage, delStorage, getStorages };
