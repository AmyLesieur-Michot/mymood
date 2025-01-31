import { DataSource } from "typeorm";
import { Group } from "./entities/Group";
import { Mood } from "./entities/Mood";
import { Blacklist } from "./entities/Blacklist";
import { Alert } from "./entities/Alert";
import { User } from "./entities/User";

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
        User,
        Group,
        Mood,
        Blacklist,
        Alert,
    ],
});