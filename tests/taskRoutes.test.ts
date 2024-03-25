
import request from 'supertest';
import { mocked } from 'ts-jest/utils';
import { Request, Response } from 'express';
import Task, { TaskAttributes } from '../models/taskModel';
import * as taskController from '../controllers/taskController';
import app from '../app';

jest.mock('../models/taskModel');

const mockedTask = mocked(Task, true);

describe('Task Routes', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a new task', async () => {
    const newTask: TaskAttributes = {
      id: '1',
      title: 'Test Task',
      description: 'Test description',
      creationDate: new Date(),
      dueDate: new Date(),
      assignedTo: 'John Doe',
      category: 'Test',
      status: 'Pending',
    };

    mockedTask.create.mockResolvedValue(newTask);

    const response = await request(app)
      .post('/api/task')
      .send(newTask);

    expect(response.status).toBe(201);
    expect(response.body).toEqual(newTask);
  });

  it('should get a task by id', async () => {
    const taskId = '1';
    const task: TaskAttributes = {
      id: taskId,
      title: 'Test Task',
      description: 'Test description',
      creationDate: new Date(),
      dueDate: new Date(),
      assignedTo: 'John Doe',
      category: 'Test',
      status: 'Pending',
    };

    mockedTask.findByPk.mockResolvedValue(task);

    const response = await request(app)
      .get(`/api/task/${taskId}`);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(task);
  });

  // Write similar tests for other routes
});
