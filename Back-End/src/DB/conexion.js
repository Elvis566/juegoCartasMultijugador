import { Sequelize } from "sequelize";

import { DB_DATABASE, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_CONNECTION } from "../config/config.js";

export const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD,{
    host: DB_HOST,
    dialect: DB_CONNECTION
});