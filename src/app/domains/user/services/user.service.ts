import { IRepository } from "@interfaces/IRepository";
import { Logger } from "log4js"

type TypeConstructor ={
    logger: Logger,
    userRepository: IRepository
}

export class UserService implements TypeConstructor {

    logger;
    userRepository;
    constructor({ logger, userRepository }: TypeConstructor){
        this.logger = logger
        this.userRepository = userRepository;
    }

    getById(){
        this.logger.info('vou pedir Pro Repository method: {getById}')
        return { id: 1, name: 'joao' }
    }

    getAll(){
        this.logger.info('vou pedir Pro Repository method: {getAll}')
        return this.userRepository.getAll()
    }
}