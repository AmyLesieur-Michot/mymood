"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Group_1 = require("./entities/Group");
const Mood_1 = require("./entities/Mood");
const Blacklist_1 = require("./entities/Blacklist");
const Alert_1 = require("./entities/Alert");
const User_1 = require("./entities/User");
exports.default = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    database: "mymood",
    username: "postgres",
    password: "chicken",
    logger: "advanced-console",
    synchronize: true,
    entities: [
        User_1.User,
        Group_1.Group,
        Mood_1.Mood,
        Blacklist_1.Blacklist,
        Alert_1.Alert,
    ],
});
