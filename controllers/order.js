'use strict'

const debug = require('debug')
const _ = require('lodash')
const Orders = require('../queries/orders')

async function listPage (req, res) {
    let log = debug('webadmin:order:listPage')
    log('[webadmin][order] listPage') 
    try {
        res.render('../views/pages/order/index', { 
            isLoggedIn: true,
            session: req.session.user 
        })
    } catch (error) {
        throw error
    }
}

async function getAllOrders (req, res) {
    let log = debug('webadmin:orders:getAllOrders')
    let data = req.body
    log('[webadmin][orders] getAllOrders', data)
    try {
        const accessToken = req.session.user.data.accessToken
        const result = await Orders.getAllOrdersData(data, accessToken)
        log('result', result.data)
        
        return res.send(result).data
    } catch (error) {
        throw error
    }
}

module.exports = {
    listPage,
    getAllOrders
} 