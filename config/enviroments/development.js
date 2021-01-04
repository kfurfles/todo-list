"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var logPath = path_1.join(__dirname, '../../logs/production.log');
exports.default = {
    web: {
        port: 300
    },
    logging: {
        appenders: [
            { type: 'console' },
            { type: 'file', filename: logPath }
        ]
    }
};
