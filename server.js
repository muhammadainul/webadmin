'use strict'

const express = require('express')
const path = require('path')
const crypto = require('crypto')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const flash = require('connect-flash')
const router = require('./routes/index')
const session = require('express-session')
const options = require('./config/db.config')
const MySQLStore = require('express-mysql-session')(session)
const myConfig = require('./config/config')
const app = express()

const sessionStore = new MySQLStore(options.options, options.conn)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(flash())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(session({
    secret              : crypto.randomBytes(50).toString('hex'),
    cookie              : { maxAge: 7200000 },
    store               : sessionStore,
    resave              : false,
    saveUninitialized   : false
}))
app.use('/', router)

options.conn.connect( function(err){
	if (err) throw err
})

const port = 3001
app.listen(port, () => {
    console.log('Server listening at http://localhost:' + port)
})