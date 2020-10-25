'use strict'

const debug = require('debug')
const _ = require('lodash')
const Employee = require('../queries/employee')

async function listPage (req, res) {
    let log = debug('webadmin:employee:listPage')
    log('[webadmin][employee] listPage') 
    try {
        res.render('../views/pages/employee/index', { 
            session: req.session.user 
        })
    } catch (error) {
        throw error
    }
}

async function getAllEmployee (req, res) {
    let log = debug('webadmin:employee:getAllEmployee')
    let data = req.body
    log('[webadmin][employee] getAllEmployee', data)
    try {
        const accessToken = req.session.user.data.accessToken
        const result = await Employee.getAllEmployeeData(data, accessToken)
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