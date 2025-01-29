const mysql = require("mysql2/promise");

require('dotenv').config({ path: require('path').join(__dirname, '../../../.env') });

// const db = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     password: "password",
//     database: "ecommerce",
//     port: 3306,
//     waitForConnections: true,
// });

// module.exports = db;

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306,
    waitForConnections: true,
});

module.exports = db;