'use strict'

const debug = require('debug')
const _ = require('lodash')

async function dashboardPage (req, res) {
    let log = debug('webadmin:index:indexPage')
    log('[webadmin][index] indexPage')
    try {
        res.render('../views/pages/dashboard/', { 
            session: req.session.user 
        })
    } catch (error) {
        throw error
    }
}

module.exports = {
    dashboardPage
}