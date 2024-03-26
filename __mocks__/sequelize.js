"use strict";
// __mocks__/sequelize.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
exports.sequelize = {
    authenticate: jest.fn(),
    sync: jest.fn(),
};
