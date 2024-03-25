// src/controllers/__tests__/taskController.test.ts

import { Request, Response } from 'express';
import * as taskController from '../src/controllers /taskController';
import { sequelize } from '../__mocks__/sequelize';
import Task from '../../../models/taskModel';

jest.mock('../../../models/taskModel');

describe('Task Controller', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should update a task', async () => {
    const req = { params: { id: '1' }, body: { title: 'Updated Title' } } as Request;
    const res = { json: jest.fn() } as unknown as Response;

    const task = { id: '1', title: 'Original Title', update: jest.fn().mockResolvedValue(true) };
    (Task.findByPk as jest.Mock).mockResolvedValue(task);

    await taskController.updateTask(req, res);

    expect(Task.findByPk).toHaveBeenCalledWith('1');
    expect(task.update).toHaveBeenCalledWith({ title: 'Updated Title' });
    expect(res.json).toHaveBeenCalledWith(task);
  });

  // Add similar tests for other routes
});
