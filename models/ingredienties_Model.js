import { mongoose } from "mongoose";

const ingredientSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  measurementUnit: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Measurement',
    required: true
  },
  storageLocation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'StorageLocation',
    required: true
  },
  type: {
    type: String,
    required: false
  }
});
const Ingredient = mongoose.model('Ingredient', ingredientSchema);
export default Ingredient