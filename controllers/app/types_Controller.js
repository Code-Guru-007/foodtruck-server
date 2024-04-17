import asyncHandler from 'express-async-handler';
import Types from '../../models/types_Model.js';

const getTypes = asyncHandler(async (req, res) => {
    try {
      const types = await Types.find();
      res.json(types);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
});

const addType = asyncHandler(async (req, res) => {
  console.log(req.body);
    try {
        const newType = new Types({
          name: req.body.name,
        });
    
        const type = await newType.save();
        res.json(type);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
});

const delType = asyncHandler(async (req, res) => {
  console.log(req.params)
    try {
      let type = await Types.findById(req.params.id);
  
      if (!type) return res.status(404).json({ msg: 'Type not found' });
  
      await Types.findOneAndDelete(req.params.id);
  
      res.json({ msg: 'Type removed' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
});

export { addType, delType, getTypes };
