import Log4js, { Configuration } from 'log4js'
import { TypeProjectsConfig } from '../../../config/types/config.type';

type TypeLogger = { 
  config: TypeProjectsConfig 
}

export default ({ config }: TypeLogger) => {
  console.log('hello logger')
  // Log4js.configure(config.logging as Configuration);

  // return Log4js.getLogger();
};