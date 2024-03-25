// src/app.ts

import express, { Application, Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';
import taskRoutes from './routes/taskRoutes';
import { sequelize } from './models/sequelize';

const app: Application = express();
const PORT = 3000;

app.use(json());

// Routes
app.use('/api', taskRoutes);

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  try {
    await sequelize.sync({ force: false });
    console.log('Database synced successfully');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
});
