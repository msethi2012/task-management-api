import express from 'express';
import taskRoutes from './routes/taskRoutes';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});