import { createContainer, asClass, asFunction, asValue } from 'awilix';
import { scopePerRequest } from 'awilix-express';
import config from '../config';

import Application from './app/Application';
import Server from './modules/http/Server'

import logger from './modules/logging/logger';

const container = createContainer();

class Foo{
    config: any 
    constructor({ config}: { config: any }){
        this.config = config;
    }
    print(){
        console.log('MINHAS CONFIGS', { config: this.config })
    }
}

// application
container
    .register({
        app: asClass(Application).singleton(),
        server: asClass(Server).singleton(),
        dog: asClass(Foo).singleton()
    })
    .register({
        config: asValue(config)
    });

// logger
container
    .register({
        logger: asFunction(logger).singleton()
    })

const outroContainer = {
    config: config,
    server: Server,
    app: Application
}

export default container


