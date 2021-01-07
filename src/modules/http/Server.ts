import { Express } from "express";
import { Logger } from "log4js";
import { TypeEnviroment } from "../../../config/types/enviroment.type";
import { RoutingControllersOptions, useExpressServer } from "routing-controllers";

type TypeConstructor = {
  config: TypeEnviroment,
  router: RoutingControllersOptions,
  logger: Logger,
  express: Express
}

class Server {
  config: TypeEnviroment;
  express: Express;
  logger: Logger;
  constructor({ config, router, logger, express }: TypeConstructor) {
    this.config = config;
    this.logger = logger;
    this.express = express
    this.express.disable('x-powered-by');
    useExpressServer(express,router)
  }

  start() {
    return new Promise((resolve) => {
      const http = this.express
        .listen(this.config.web.port, () => {
          this.logger.info(`[p ${process.pid}] Listening at port ${this.config.web.port}`);
          resolve(true);
        });
    });
  }
}

export default Server;
