import "reflect-metadata"
import { DataSource } from "typeorm";
import { Produto } from "./entity/produto"
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "crud_produtos",
    synchronize: true,
    logging: true,
    entities: [Produto],
    subscribers: [],
    migrations: [],
})