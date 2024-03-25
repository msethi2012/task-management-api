import request from 'supertest';
import app from '../app';
import  Task from '../models/taskModel';
beforeAll(async () => {
  // Perform any setup tasks, such as database initialization, before running tests
});

afterAll(async () => {
  // Perform any cleanup tasks, such as closing database connections, after all tests have run
});

describe('POST /task', () => {
  it('should create a new task', async () => {
    const response = await request(app)
        .post('/task')
        .send({
          title: 'Test Task',
          description: 'Test description',
          assignedTo: 'John Doe',
          category: 'Test',
          status: 'Pending'
        });
    expect(response.status).toBe(201);
    expect(response.body.title).toBe('Test Task');
  });
});

/*
describe('GET /task/:id', () => {

  it('should get a task by ID', async () => {
    const task = await Task.create({
      title: "Test Task",
      description: "Test description",
      category: "Test",
      assignedTo: "John Doe",
      status: "Pending"
    });
    const response = await request(app).get(`/task/${task.id}`);
    expect(response.status).toBe(200);
    expect(response.body.title).toBe('Test Task');
  });
});
*/
// Similar tests for other routes (PUT, DELETE, GET all, GET by assignedTo, GET by category)

