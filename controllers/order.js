'use strict'

const debug = require('debug')
const _ = require('lodash')
const Orders = require('../queries/orders')

async function listPage (req, res) {
    let log = debug('webadmin:order:listPage')
    log('[webadmin][order] listPage') 
    try {
        res.render('../views/pages/order/index')
    } catch (error) {
        throw error
    }
}

async function getAllOrders (req, res) {
    let log = debug('webadmin:orders:getAllOrders')
    let data = req.body
    log('[webadmin][orders] getAllOrders', data)
    try {
        let result = await Orders.getAllOrdersData(data)
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