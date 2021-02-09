import express from 'express'; // commonjs
import dotenv from 'dotenv';
import colors from 'colors';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';

// Routes
import productRoutes from './routes/products.js';

dotenv.config();
connectDB();
const app = express();

app.get('/', (req, res) => {
  res.send('API is running....');
});

// mounting routes
app.use('/api/products', productRoutes);

// 404 Error Handler
app.use(notFound);

// Error Handler Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} on port ${process.env.PORT}`
      .yellow.bold
  )
);
