import { Appender, Configuration } from "log4js";

export type TypeEnviroment = {
    web: {
        port: number
    },
    logging: Pick<Configuration, 'appenders' | 'categories'>
}