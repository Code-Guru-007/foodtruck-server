import { mongoose } from "mongoose";

const inventorySchema = mongoose.Schema({
  ingredient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ingredient',
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  storageLocation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'StorageLocation',
    required: true
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});

const Inventory = mongoose.model('Inventory', inventorySchema);
export default Inventory;