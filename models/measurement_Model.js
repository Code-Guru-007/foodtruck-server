  // models/Measurement.js
import { mongoose } from 'mongoose';

const MeasurementSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  abbreviation: {
    type: String,
    required: true
  },
});

const Measurement = mongoose.model('Measurement', MeasurementSchema);
export default Measurement