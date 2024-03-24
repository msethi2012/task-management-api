import express from 'express';

const router = express.Router();

router.post('/task', (req, res) => {
  // Create a new task
});

router.get('/task/:id', (req, res) => {
  // Retrieve a task by ID
});

router.put('/task/:id', (req, res) => {
  // Update a task by ID
});

router.delete('/task/:id', (req, res) => {
  // Delete a task by ID
});

router.get('/tasks', (req, res) => {
  // Retrieve all tasks
});

router.get('/tasks', (req, res) => {
  // Retrieve tasks by query params (assignedTo, category)
});
export default router;




