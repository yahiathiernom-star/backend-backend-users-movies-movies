import 'dotenv/config';
import express from 'express';
import userRoutes from './routes/userRoutes.js';
import morgan from 'morgan';
import authRoutes from './routes/authRoutes.js';
import errorHandler from './middlewares/errorHandler.js';

const PORT = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api/auth', authRoutes);
app.use(errorHandler);
app.get('/', (req, res) => {
  res.json({ message: ' bienvenue chez yahia' 
  });
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
});
