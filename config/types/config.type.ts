import { TypeDB } from "./db.type";
import { TypeEnviroment } from "./enviroment.type";

export type TypeProjectsConfig = TypeEnviroment & {
    db: TypeDB
}