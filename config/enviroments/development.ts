import { join } from 'path';
import { TypeEnviroment } from '../types/enviroment.type';

const logPath = join(__dirname,'../../logs/developent.log')

export default {
    web: {
        port: 3000
    },
    logging: {
        appenders: {
            console: { type: 'console' },
            file: { type: 'file', filename: logPath }
        },
        categories: {
            default: { appenders: [ 'console', 'file' ], level: 'debug' }
        }
    }
}