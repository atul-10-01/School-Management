import express from 'express';
import dotenv from 'dotenv';
import schoolRoutes from './routes/schoolRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());        // parse JSON bodies

// mount routes
app.use('/api', schoolRoutes);

// simple health check
app.get('/', (req, res) => {
  res.send('School API running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
