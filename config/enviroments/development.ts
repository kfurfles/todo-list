import { join } from 'path';
import { TypeEnviroment } from '../types/enviroment.type';

const logPath = join(__dirname,'../../logs/production.log')

export default {
    web: {
        port: 300
    },
    logging: {
        appenders: [
            { type: 'console' },
            { type: 'file', filename: logPath }
        ]
    }
} as TypeEnviroment