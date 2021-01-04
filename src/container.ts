import { createContainer, asClass, asFunction, asValue } from 'awilix';
import { scopePerRequest } from 'awilix-express';
import config from '../config';
import Application from './app/Application';
import logger from './modules/logging/logger';

const container = createContainer();

// application
container
    .register({
        app: asClass(Application).singleton()
    })
    .register({
        config: asValue(config)
    });

// logger
container
    .register({
        logger: asFunction(logger).singleton()
    })

export default container


