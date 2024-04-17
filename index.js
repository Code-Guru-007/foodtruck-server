import colors from 'colors';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './db.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import restAPI from './routes/index.js';

colors;
dotenv.config()
await connectDB();

const app = express();
app.use(express.json());
app.use(cors({origin: '*'}));


// Define routes
app.get('/', (req, res) => {
  res.send('Hello from Food Truck backend!');
});

app.use('/api/v1', restAPI);
app.use(notFound);
app.use(errorHandler);
// Start the server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`.underline.yellow);
});