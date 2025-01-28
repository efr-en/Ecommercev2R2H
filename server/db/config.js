const mysql = require("mysql2/promise");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "ecommerce",
    port: 3306,
    waitForConnections: true,
});

module.exports = db;