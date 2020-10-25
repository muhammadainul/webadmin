'use strict'

const debug = require('debug')
const _ = require('lodash')
const Users = require('../queries/user')

async function loginPage (req, res) {
    let log = debug('webadmin:index:loginPage')
    log('[webadmin][index] loginPage')
    try {
        let message = req.flash('error')
        if (message.length > 0) {
            message = message[0]
        } else {
            message = null
        }
        res.render('../views/pages/login', {
            errors: message
        })
    } catch (error) {
        throw error
    }
}

async function login (req, res) {
    const log = debug('webadmin:index:login')
    const data = req.body
    log('[webadmin][index] login', data)
    try {
        const { email, password } = req.body

        const exists = await Users.getAccount(email, password)
        log('exists', exists)

        if (_.isEmpty(exists.data)) return res.render('../views/pages/login', { errors: 'Invalid credentials.' })
        
        req.session.isLoggedIn = true
        req.session.user = exists
        log('session', req.session)

        return res.render('../views/pages/dashboard/index', { session: req.session.user })
    } catch (error) {
        throw error
    }
}

async function logout (req, res) {
    const log = debug('webadmin:index:logout')
    let data = req.body
    log('[webadmin][index] logout', data)
    try {
        req.session.destroy(function (){
            log('logout!')
            res.redirect('/')
        })
    } catch (error) {
        throw error
    }
}

module.exports = { 
    loginPage,
    login,
    logout
}