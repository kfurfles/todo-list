import { TypeEnviroment } from "../../../config/types/enviroment.type";

const express = require('express');

type TypeConstructor = {
  config: TypeEnviroment
}

class Server {
  config: TypeEnviroment;
  express: any;
  constructor({ config }: TypeConstructor) {
    this.config = config;
    this.express = express();

    this.express.disable('x-powered-by');
  }

  start() {
    return new Promise((resolve) => {
      const http = this.express
        .listen(this.config.web.port, () => {
          const { port } = http.address();
          console.info(`[p ${process.pid}] Listening at port ${port}`);
          resolve(true);
        });
    });
  }
}

export default Server;
