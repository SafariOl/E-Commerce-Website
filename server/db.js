const mysql = require('mysql2')

const sql = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ola__987',
    database: 'shopdb'
}).promise()

module.exports = sql