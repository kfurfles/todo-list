"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var awilix_1 = require("awilix");
var config_1 = __importDefault(require("../config"));
var Application_1 = __importDefault(require("./app/Application"));
var logger_1 = __importDefault(require("./modules/logging/logger"));
var container = awilix_1.createContainer();
// application
container
    .register({
    app: awilix_1.asClass(Application_1.default).singleton()
})
    .register({
    config: awilix_1.asValue(config_1.default)
});
// logger
container
    .register({
    logger: awilix_1.asFunction(logger_1.default).singleton()
});
exports.default = container;
