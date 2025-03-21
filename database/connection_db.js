const MySQL = require('mysql2');
require('dotenv/config');

const connection = MySQL.createConnection({
    host: process.env.HOST_DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DATABASE
});

connection.connect((error) => {
    if (error) {
        console.error({"status": 500, "data": `error connection ${error}`});
    } else {
        console.log({"status": 200, "data": "Database connected"});
    }
});

module.exports = connection;