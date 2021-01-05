import Server from './../modules/http/Server'

type TypeConstructor = {
    logger: unknown,
    server: Server,
    dog: any
}

export default class Application {
    private logger: any;
    private server: Server;

    constructor({ logger, server, dog }: TypeConstructor){
        console.log({ logger })
        this.server = server;
        dog.print()
    }

    async start(){
        await this.server.start()
    }
    
}