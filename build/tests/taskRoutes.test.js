"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    // Perform any setup tasks, such as database initialization, before running tests
}));
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    // Perform any cleanup tasks, such as closing database connections, after all tests have run
}));
describe('POST /task', () => {
    it('should create a new task', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default)
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
    }));
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
