'use strict'

const debug = require('debug')
const _ = require('lodash')

const { post } = require('../libs/request')
const service = require('../config/service')

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