'use strict'

const debug = require('debug')
const _ = require('lodash')

async function dashboard (req, res) {
    let log = debug('webadmin:index:indexPage')
    log('[webadmin][index] indexPage')
    try {
        res.render('../views/pages/dashboard/index')
    } catch (error) {
        throw error
    }
}

async function loginPage (req, res) {
    let log = debug('webadmin:index:loginPage')
    log('[webadmin][index] loginPage')
    try {
        res.render('../views/pages/login')
    } catch (error) {
        throw error
    }
}

module.exports = {
    dashboard, 
    loginPage
}