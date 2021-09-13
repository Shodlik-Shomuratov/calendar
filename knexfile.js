require("dotenv").config();

const mysql = require("mysql2");

module.exports = {
    development: {
        client: "mysql",
        useNullAsDefault: true,
        connection: {
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            port: process.env.MYSQL_PORT,
            password: process.env.MYSQL_PASS,
            database: process.env.MYSQL_BASE
        },
        migrations: {
            directory: "./database/migrations"
        },
        seeds: {
            directory: "./database/seeds"
        }
    }
}