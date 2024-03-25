"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/task', (req, res) => {
    // Create a new task
});
router.get('/task/:id', (req, res) => {
    console.log("tes", "ing");
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
exports.default = router;
