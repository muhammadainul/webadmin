'use strict'

const debug = require('debug')
const _ = require('lodash')

const { post } = require('../libs/request')
const service = require('../config/service')

exports.getAllPriceList = (data, accessToken) =>
    new Promise(async(resolve, reject) => {
        let log = debug('webadmin:queries:getAllPriceList')
        log('[webadmin][Query] getAllPriceList', { data, accessToken })
        try {
            const url = service.api + 'admin/getAllPriceList'
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