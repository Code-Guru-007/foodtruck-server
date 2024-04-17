import { mongoose } from 'mongoose';

const dishSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    require: true
  },
  ingredients: [{
    ingredient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Ingredient'
    },
    quantity: {
      type: Number
    },
    measurementUnit: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Measurement'
    }
  }]
});

const Dish = mongoose.model('Dish', dishSchema);
export default Dish;