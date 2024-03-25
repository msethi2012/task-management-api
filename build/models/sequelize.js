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
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabase = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
/*
export const sequelize = new Sequelize('task-management-api', 'root', 'mysql', {
  host: 'localhost',
  dialect: 'mysql',
});
*/
const connectionString = 'mysql://taskmanagementapi_doneaskhad:e1106c67f351a6423c7a6bb21b525d072fe48772@mda.h.filess.io:3307/taskmanagementapi_doneaskhad';
exports.sequelize = new sequelize_1.Sequelize(connectionString, {
    dialect: 'mysql',
    dialectOptions: {
        multipleStatements: true,
    },
});
//mysql -u taskmanagementapi_doneaskhad -P 3307 -pe1106c67f351a6423c7a6bb21b525d072fe48772 -h mda.h.filess.io taskmanagementapi_doneaskhad
function connectDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.sequelize.authenticate();
            console.log('Connection to the database has been established successfully.');
        }
        catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    });
}
exports.connectDatabase = connectDatabase;
