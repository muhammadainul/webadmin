'use strict'

const debug = require('debug')
const _ = require('lodash')

const { post, postWithFiles } = require('../libs/request')
const service = require('../config/service')
const { reject } = require('lodash')

exports.getAllEmployeeData = (data, accessToken) =>
    new Promise(async(resolve, reject) => {
        let log = debug('webadmin:queries:getAllEmployeeData')
        log('[webadmin][Query] getAllEmployeeData', { data, accessToken })
        try {
            const url = service.api + 'admin/getAllEmployee'
            let headers = { Authorization: 'Bearer ' + accessToken}
            const body = data
            log('url, headers, body', { url, headers, body })
            let response = await post(url, headers, body)
            log('response', response.body)

            resolve(response.body)
        } catch (error) {
            throw error
        }
    })

exports.getEmployeeData = (id, accessToken) =>
    new Promise(async(resolve, reject) => {
        let log = debug('webadmin:empployee:queries:getEmployeeData')
        log('[webadmin][Query] getEmployeeData', { id, accessToken })
        try {
            const url = service.api + 'admin/getEmployeeById'
            let headers = { Authorization: 'Bearer ' + accessToken }
            const body = { id }
            log('url, headers, body', { url, headers, body })
            let response = await post(url, headers, body)
            log('response', response)

            resolve(response.data)
        } catch (error) {
            throw error
        }
    })

exports.create = (formData, accessToken) =>
    new Promise(async(resolve, reject) => {
        let log = debug('webadmin:employee:queries:create')
        log('[webadmin][employee] create', { formData, accessToken })
        try {
            const url = service.api + 'admin/addEmployee'
            let headers = { Authorization: 'Bearer ' + accessToken }
            const body = formData
            log('url, headers, body', { url, headers, body })
            const response = await postWithFiles(url, headers, body)
            log('response', response)
            
            let result = JSON.parse(response)
            resolve(result)
        } catch (error) {
            throw error
        }
    })

exports.editEmployeeData = (formData, accessToken) =>
    new Promise(async(resolve, reject) => {
        let log = debug('webadmin:employee:queries:editEmployeeData')
        log('[webadmin][employee][Query] editEmployeeData', { formData, accessToken })
        try {
            const url = service.api + 'admin/editEmployee'
            let headers = { Authorization: 'Bearer ' + accessToken }
            const body = formData
            log('url, headers, body', { url, headers, body })
            let response = await postWithFiles(url, headers, body)
            log('response', response)
        
            let result = JSON.parse(response)
            resolve(result.message)
        } catch (error) {
            throw error
        }
    })

exports.deleteById = (id, accessToken) =>
    new Promise(async(resolve, reject) => {
        let log = debug('webadmin:employee:queries:deleteEmployee')
        log('[webadmin][employeee][Query] deleteEmployee', { id, accessToken })
        try {
            const url = service.api + 'admin/deleteEmployee'
            let headers = { Authorization: 'Bearer ' + accessToken }
            const body = { id }
            log('url, headers, body', { url, headers, body })
            const response = await post(url, headers, body)
            log('response', response)
        
            resolve(response)
        } catch (error) {
            throw error
        }
    })