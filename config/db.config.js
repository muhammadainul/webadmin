'use strict'

require('dotenv').config()
const { v4: uuidv4 } = require('uuid')
const mysql = require('mysql')

let data = []

const options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'db_session',
    schema: {
        tableName: 'session_store',
        columnNames: {
            session_id: 'sessionId',
            expires: 'expires',
            data: 'data'
        }
    }
}

global.conn = mysql.createConnection({
    user        : process.env.DB_USER,
    password    : process.env.DB_PASS,  
    host        : process.env.DB_HOST,
    database    : process.env.DB_NAME
})  

module.exports = { 
    options,
    conn
}