'use strict'

const debug = require('debug')
const _ = require('lodash')
const Employee = require('../queries/employee')

async function listPage (req, res) {
    let log = debug('webadmin:employee:listPage')
    log('[webadmin][employee] listPage') 
    try {
        res.render('../views/pages/employee/index')
    } catch (error) {
        throw error
    }
}

async function getAllEmployee (req, res) {
    let log = debug('webadmin:employee:getAllEmployee')
    let data = req.body
    log('[webadmin][employee] getAllEmployee', data)
    try {
        let result = await Employee.getAllEmployeeData(data)
        log('result', result.data)
        
        return res.send(result).data
    } catch (error) {
        throw error
    }
}

module.exports = {
    listPage,
    getAllEmployee
} 