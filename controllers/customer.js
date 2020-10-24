'use strict'

const debug = require('debug')
const _ = require('lodash')
const Customer = require('../queries/customer')

async function listPage (req, res) {
    let log = debug('webadmin:customer:listPage')
    log('[webadmin][customer] listPage') 
    try {
        res.render('../views/pages/customer/index')
    } catch (error) {
        throw error
    }
}

async function getAllCustomer (req, res) {
    let log = debug('webadmin:customer:getAll')
    let data = req.body
    log('[webadmin][customer] getAll', data)
    try {
        let result = await Customer.getAllCustomerData(data)
        log('result', result.data)
        
        return res.send(result).data
    } catch (error) {
        throw error
    }
}

module.exports = {
    listPage,
    getAllCustomer
} 