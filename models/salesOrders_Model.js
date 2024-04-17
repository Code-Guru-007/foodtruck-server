import { mongoose } from "mongoose";
const salesOrderSchema = mongoose.Schema({
  customerName: {
    type: String,
    required: true
  },
  customerNumber: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  dishes: [{
    dish: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Dish',
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  }],
  total: {
    type: Number,
    required: true
  }
});

const SalesOrder = mongoose.model('SalesOrder', salesOrderSchema);
export default SalesOrder