import { DataSource } from "typeorm";

export default new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    database: "mymood",
    username: "postgres",
    password: "chicken",
    logger: "advanced-console",
    synchronize: true,
    entities: [
    ]
})