import { createContainer, asClass, asFunction, asValue, Lifetime } from 'awilix';
import { scopePerRequest } from 'awilix-express';
import express from 'express';
import config from '../config';

import Application from './app/Application';
import Server from './modules/http/Server'
import Router from './modules/http/Router'
import logger from './modules/logging/logger';
import { UserRepository } from 'app/domains/user/repository/user.repository';
import { UserService } from 'app/domains/user/services/user.service';

const container = createContainer();

// application
container
    .register({
        app: asClass(Application).singleton(),
        server: asClass(Server).singleton(),
        express: asValue(express()),
    })

// config
    .register({
        config: asValue(config)
    })

// middlewares
    .register({
        container: asValue(scopePerRequest(container)),
    })

// Routes
    .register({
        router: asFunction(Router).singleton()
    })

// logger
    .register({
        logger: asFunction(logger).singleton()
    })


// Repositories
    .register({
        userRepository: asClass(UserRepository).singleton()
    })

// Services
    .register({
        userService: asClass(UserService).singleton()
    })

export default container


