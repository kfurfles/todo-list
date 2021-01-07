import { Logger } from "log4js"

type TypeConstructor ={
    logger: Logger
}

export class UserRepository implements TypeConstructor {

    logger;
    constructor({ logger }: TypeConstructor){
        this.logger = logger
    }

    getById(){

        return { id: 1, name: 'joao' }
    }

    getAll(){
        this.logger.info('Pediu do Repository GetAll')
        return [
            { id: 1, name: 'joao' },
            { id: 2, name: 'pedro' }
        ]
    }
}