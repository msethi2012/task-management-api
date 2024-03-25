"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockSequelize = exports.mockFindAll = exports.mockDestroy = exports.mockUpdate = exports.mockFindByPk = exports.mockCreate = void 0;
exports.mockCreate = jest.fn();
exports.mockFindByPk = jest.fn();
exports.mockUpdate = jest.fn();
exports.mockDestroy = jest.fn();
exports.mockFindAll = jest.fn();
exports.mockSequelize = {
    define: jest.fn(() => ({
        create: exports.mockCreate,
        findByPk: exports.mockFindByPk,
        update: exports.mockUpdate,
        destroy: exports.mockDestroy,
        findAll: exports.mockFindAll,
    })),
};
