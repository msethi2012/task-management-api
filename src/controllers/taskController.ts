
import { Request, Response } from 'express';
import Task from '../models/taskModel';

export async function createTask(req: Request, res: Response): Promise<void> {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export async function getTaskById(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    if (task) {
      res.status(200).json(task);
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export async function updateTask(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;
    const [updated] = await Task.update(req.body, {
      where: { id: Number(id) },
    });
    if (updated) {
      res.status(200).json({ message: 'Task updated successfully' });
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export async function deleteTask(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;
    const deleted = await Task.destroy({
      where: { id: Number(id) },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export async function getAllTasks(req: Request, res: Response): Promise<void> {
  try {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export async function getTasksByAssignedTo(req: Request, res: Response): Promise<void> {
  try {
    const { assignedTo } = req.query;
    if (!assignedTo) {
      res.status(400).json({ message: 'Username parameter is required' });
      return;
    }
    const tasks = await Task.findAll({ where: { assignedTo: assignedTo as string } });
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export async function getTasksByCategory(req: Request, res: Response): Promise<void> {
  try {
    const { category } = req.query;
    if (!category) {
      res.status(400).json({ message: 'Category parameter is required' });
      return;
    }
    const tasks = await Task.findAll({ where: { category: category as string } });
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
