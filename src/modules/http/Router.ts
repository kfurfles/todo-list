import { AwilixContainer } from "awilix";
import { RoutingControllersOptions } from "routing-controllers";
import { TodoController } from '../../app/controllers/Todo';

type TypeFunction = {
    container: AwilixContainer<any>
}

export default ({ container }: TypeFunction): RoutingControllersOptions => {
    return {
        controllers: [
            TodoController
        ]
    }
}

