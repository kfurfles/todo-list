import * as dotenv from 'dotenv'
import { join } from 'path'
import { TypeProjectsConfig } from './types/config.type'
dotenv.config()

const ENV = process.env.NODE_ENV || 'development'

const envConfig = require(join(__dirname,'enviroments', ENV))

const config: TypeProjectsConfig | any = Object.assign({
    [ENV]: true,
    env: ENV,
    db: loadDbConfig()
}, envConfig)

export default config

function loadDbConfig() {
    if(process.env.DATABASE_URL) {
      return process.env.DATABASE_URL;
    }

    return {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    }
}
  