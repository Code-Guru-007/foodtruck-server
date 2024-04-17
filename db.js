// database connection file to MongoDB
import { mongoose } from 'mongoose';

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongodb connected: ${conn.connection.host}/${conn.connection.name}`.underline.yellow);
  } catch (error) {
    console.log(`Error: ${error.message}`.underline.red);
    process.exit(1);
  }
}

export default connectDB;