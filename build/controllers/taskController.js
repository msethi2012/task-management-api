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
exports.getTasksByCategory = exports.getTasksByAssignedTo = exports.getAllTasks = exports.deleteTask = exports.updateTask = exports.getTaskById = exports.createTask = void 0;
const taskModel_1 = __importDefault(require("../models/taskModel"));
function createTask(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const task = yield taskModel_1.default.create(req.body);
            res.status(201).json(task);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    });
}
exports.createTask = createTask;
function getTaskById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const task = yield taskModel_1.default.findByPk(id);
            console.log(task);
            if (task) {
                res.status(200).json(task);
            }
            else {
                res.status(404).json({ message: 'Task not found' });
            }
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    });
}
exports.getTaskById = getTaskById;
function updateTask(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const [updated] = yield taskModel_1.default.update(req.body, {
                where: { id: Number(id) },
            });
            if (updated) {
                res.status(200).json({ message: 'Task updated successfully' });
            }
            else {
                res.status(404).json({ message: 'Task not found' });
            }
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    });
}
exports.updateTask = updateTask;
function deleteTask(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const deleted = yield taskModel_1.default.destroy({
                where: { id: Number(id) },
            });
            if (deleted) {
                res.status(204).send();
            }
            else {
                res.status(404).json({ message: 'Task not found' });
            }
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    });
}
exports.deleteTask = deleteTask;
/*export async function getAllTasks(req: Request, res: Response): Promise<void> {
  try {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}*/
function getAllTasks(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { page = 1, limit = 10 } = req.query;
            const offset = (Number(page) - 1) * Number(limit);
            const tasks = yield taskModel_1.default.findAndCountAll({
                offset,
                limit: Number(limit),
            });
            const totalPages = Math.ceil(tasks.count / Number(limit));
            res.status(200).json({
                totalTasks: tasks.count,
                totalPages,
                currentPage: Number(page),
                tasks: tasks.rows,
            });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    });
}
exports.getAllTasks = getAllTasks;
function getTasksByAssignedTo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("assignedTo req query", req.query);
            const { assignedTo } = req.query;
            if (!assignedTo) {
                res.status(400).json({ message: 'Username parameter is required' });
                return;
            }
            const tasks = yield taskModel_1.default.findAll({ where: { assignedTo: assignedTo } });
            res.status(200).json(tasks);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    });
}
exports.getTasksByAssignedTo = getTasksByAssignedTo;
function getTasksByCategory(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { category } = req.query;
            if (!category) {
                res.status(400).json({ message: 'Category parameter is required' });
                return;
            }
            const tasks = yield taskModel_1.default.findAll({ where: { category: category } });
            res.status(200).json(tasks);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    });
}
exports.getTasksByCategory = getTasksByCategory;
