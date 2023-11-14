const mysql = require('mysql2')
require('dotenv').config()

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DB
})

connection.query(
    'CREATE TABLE users ( userName varchar(255), email varchar(255), passWord varchar(255) )'
)

module.exports = connection