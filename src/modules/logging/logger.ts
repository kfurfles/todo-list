import Log4js from 'log4js'
import { TypeProjectsConfig } from '../../../config/types/config.type';

type TypeLogger = { 
  config: TypeProjectsConfig 
}

export default ({ config }: TypeLogger) => {
  Log4js.configure(config.logging);

  return Log4js.getLogger();
};