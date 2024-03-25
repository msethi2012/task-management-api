"use strict";
// src/routes/taskRoutes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const taskController_1 = require("../controllers/taskController");
const router = express_1.default.Router();
router.post('/task', taskController_1.createTask);
router.get('/task/:id', taskController_1.getTaskById);
router.put('/task/:id', taskController_1.updateTask);
router.delete('/task/:id', taskController_1.deleteTask);
router.get('/tasks', taskController_1.getAllTasks);
router.get('/tasks', taskController_1.getTasksByAssignedTo);
router.get('/tasks', taskController_1.getTasksByCategory);
exports.default = router;
