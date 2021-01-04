import Log4js, { Configuration } from 'log4js'
import { TypeProjectsConfig } from '../../../config/types/config.type';

export default ({ config }: { config: TypeProjectsConfig }) => {
  Log4js.configure(config.logging as Configuration);

  return Log4js.getLogger();
};