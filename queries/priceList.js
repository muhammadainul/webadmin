'use strict'

const debug = require('debug')
const _ = require('lodash')

const { post } = require('../libs/request')
const service = require('../config/service')

exports.getAllPriceList = (data) =>
    new Promise(async(resolve, reject) => {
        let log = debug('webadmin:queries:getAllPriceList')
        log('[webadmin][Query] getAllPriceList', data)
        try {
            const url = service.api + 'admin/getAllPriceList'
            let headers = { Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImtmbWx4ZzhiMGcyb2U0YTg5NTduZXhtYiIsImVtYWlsIjoiYWludWxzYXlhQGdtYWlsLmNvbSIsImlhdCI6MTYwMzQ3NTgxNCwiZXhwIjoxNjAzNDg2NjE0fQ.LeXt5ZjXK_rWxfopJFmmzxk8QarykF-3Oc1EdhbaY8Q' }
            const body = data
            log('url, headers, body', { url, headers, body })
            let response = await post(url, headers, body)
            log('response', response.body)

            resolve(response.body)
        } catch (error) {
            throw error
        }
    })