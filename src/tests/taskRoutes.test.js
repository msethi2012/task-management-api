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
const utils_1 = require("ts-jest/utils");
const taskModel_1 = __importDefault(require("../models/taskModel"));
const app_1 = __importDefault(require("../app"));
jest.mock('../models/taskModel');
const mockedTask = (0, utils_1.mocked)(taskModel_1.default, true);
describe('Task Routes', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    it('should create a new task', () => __awaiter(void 0, void 0, void 0, function* () {
        const newTask = {
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
        const response = yield (0, supertest_1.default)(app_1.default)
            .post('/api/task')
            .send(newTask);
        expect(response.status).toBe(201);
        expect(response.body).toEqual(newTask);
    }));
    it('should get a task by id', () => __awaiter(void 0, void 0, void 0, function* () {
        const taskId = '1';
        const task = {
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
        const response = yield (0, supertest_1.default)(app_1.default)
            .get(`/api/task/${taskId}`);
        expect(response.status).toBe(200);
        expect(response.body).toEqual(task);
    }));
    // Write similar tests for other routes
});
