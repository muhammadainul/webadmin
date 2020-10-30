'use strict'

const debug = require('debug')
const _ = require('lodash')
const fs = require('fs')
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

async function addEmployeePage (req, res) {
    let log = debug('webadmin:employee:addEmployeePage')
    log('[webadmin][employee] addEmployeePage')
    try {
        let message = req.flash('error')
        if (message.length > 0) {
            message = message [0]
        } else {
            message = null
        }
        res.render('../views/pages/employee/add-data', {
            session: req.session.user,
            errors: message
        })
    } catch (error) {
        throw error
    }
}

async function editEmployeePage (req, res) {
    let log = debug('webadmin:employee:editEmployeePage')
    let param = req.params
    log('[webadmin][employee] editEmployeePage', param)
    try {
        const accessToken = req.session.accessToken
        const id = param.id
        const employee = await Employee.getEmployeeData(id, accessToken)
        log('employee', employee)

        let message = req.flash('error')
        if (message.length > 0) {
            message = message [0]
        } else {
            message = null
        }

        return res.render('../views/pages/employee/edit-data', {
            employee,
            session: req.session.user,
            errors: message,
        })
    } catch (error) {
        throw error
    }
}

async function addEmployee (req, res) {
    let log = debug('webadmin:employee:addEmployee')
    let data = req.body
    let files = req.file
    log('[webadmin][employee] addEmployee', { body: data, files })
    try {
        const { firstname, lastname, phone, address, file } = req.body
        const accessToken = req.session.accessToken
        const formData = {
            firstname,
            lastname, 
            phone,
            address, 
            file
        }

        const result = await Employee.create(formData, accessToken)
        log('result', result)
        if (!_.isEmpty(result.message)) return res.render('../views/pages/employee/add-data', { errors: result.message, session: req.session.user })
    } catch (error) {
        throw error
    }
}

async function editEmployee (req, res) {
    let log = debug('webadmin:employee:editEmployee')
    let data = req.body
    let files = req.file
    log('[webadmin][employee] editEmployee', { body: data, files })
    try {
        const { id, firstname, lastname, phone, address, file } = req.body
        const accessToken = req.session.accessToken
        const formData = {
            id,
            firstname,
            lastname, 
            phone,
            address, 
            file
        }
        const result = await Employee.editEmployeeData(formData, accessToken)
        log('result', result)
        if (!_.isEmpty(result.message)) return res.render('../views/pages/employee/edit-data', { errors: result.message, session: req.session.user })
    } catch (error) {
        throw error
    }
}

async function deleteEmployee (req, res) {
    let log = debug('webadmin:employee:deleteEmployee')
    let data = req.body
    log('[webadmin][employee] deleteEmployee', data)
    try {
        const { id } = req.body
        const accessToken = req.session.accessToken
        const deleted = await Employee.deleteById(id, accessToken)
        log('deleted', deleted)
    } catch (error) {
        throw error
    }
}

async function getAllEmployee (req, res) {
    let log = debug('webadmin:employee:getAllEmployee')
    let data = req.body
    log('[webadmin][employee] getAllEmployee', data)
    try {
        const accessToken = req.session.accessToken
        const result = await Employee.getAllEmployeeData(data, accessToken)
        log('result', result.data)
        
        return res.send(result).data
    } catch (error) {
        throw error
    }
}

module.exports = {
    listPage,
    getAllEmployee,
    addEmployeePage,
    addEmployee,
    editEmployeePage,
    editEmployee,
    deleteEmployee
} 