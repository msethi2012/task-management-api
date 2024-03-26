// src/routes/taskRoutes.ts

import express from 'express';
import {
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
  getAllTasks,
  getTasksByAssignedTo,
  getTasksByCategory,
} from '../controllers/taskController';

const router = express.Router();
router.post('/task', createTask);
router.get('/task/:id', getTaskById);
router.put('/task/:id', updateTask);
router.delete('/task/:id', deleteTask);
router.get('/tasks', getAllTasks);
router.get('/tasks/assignedTo', getTasksByAssignedTo);
router.get('/tasks/category', getTasksByCategory);
export default router;
