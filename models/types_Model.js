import { mongoose } from "mongoose";

const typesSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    }
  }
);

const Types = mongoose.model('Types', typesSchema);
export default Types