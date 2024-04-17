import { mongoose } from "mongoose";

const storageLocationSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
});

const StorageLocation = mongoose.model('StorageLocation', storageLocationSchema);
export default StorageLocation


