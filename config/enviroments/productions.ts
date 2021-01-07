import { join } from 'path';
import { TypeEnviroment } from '../types/enviroment.type';

const logPath = join(__dirname,'../../logs/production.log')

export default {
    web: {
        port: 3000
    },
    logging: {
        appenders: {
            file: { type: 'file', filename: logPath }
        },
        categories: {
            default: { appenders: [ 'file' ], level: 'debug' }
        }
    }
} as TypeEnviroment