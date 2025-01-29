const mysql = require("mysql2/promise");
const dovenv = require("dotenv");
dovenv.config();

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "ecommerce",
    port: 3306,
    waitForConnections: true,
});

module.exports = db;

// const db = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_ROOT,
//     password: process.env.DB_PASSWORD,
//     database: "ecommerce",
//     port: process.env.DB_PORT,
//     waitForConnections: true,
// });

// module.exports = db;