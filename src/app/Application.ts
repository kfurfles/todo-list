import Server from './../modules/http/Server'

type TypeConstructor = {
    logger: unknown,
    server: Server,
}

export default class Application {
    private logger: any;
    private server: Server;

    constructor({ logger, server }: TypeConstructor){
        this.server = server;
    }

    async start(){
        await this.server.start()
    }
    
}