import 'dotenv/config';
import express from 'express';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import movieRoutes from './routes/movieRoutes.js';
import morgan from 'morgan';
import errorHandler from './middlewares/errorHandler.js';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api', movieRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'bienvenue chez yahia' });
});

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
}); 
//test