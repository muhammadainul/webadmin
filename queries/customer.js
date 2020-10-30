'use strict'

const debug = require('debug')
const _ = require('lodash')

const { post } = require('../libs/request')
const service = require('../config/service')

exports.getAllCustomerData = (data, accessToken) =>
    new Promise(async(resolve, reject) => {
        let log = debug('webadmin:queries:getAllCustomerData')
        log('[webadmin][Query] getAllCustomerData', { data, accessToken })
        try {
            const url = service.api + 'admin/getAllUser'
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

exports.deleteById = (id, accessToken) =>
    new Promise(async(resolve, reject) => {
        let log = debug('webadmin:queries:deleteCustomer')
        log('[webadmin][customer][Query] deleteById', { id, accessToken })
        try {
            const url = service.api + 'user/delete'
            let headers = { Authorization: 'Bearer ' + accessToken}
            const body = { id }
            log('url, headers, body', { url, headers, body })
            const response = await post(url, headers, body)
            log('response', response)
            resolve(response)
        } catch (error) {
            throw error
        }
    })