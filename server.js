// server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import connectDB from './config/db.js';
import workRoutes from './routes/workRoutes.js';
import featuredRoutes from './routes/featured.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

const __dirname = path.resolve();
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// ✅ Register API routes
app.use('/api/works', workRoutes);
app.use('/api/featured', featuredRoutes);

// ✅ Health check
app.get('/', (req, res) => {
  res.send('❤️ YellowDots Backend Running');
});

// ❗ 404 handler
app.use((req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

// ❗ Error handler
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
