'use strict'

const debug = require('debug')
const { isEmpty } = require('lodash')

const { post } = require('../libs/request')
const service = require('../config/service')

exports.getAccount = (email, password) =>
    new Promise(async(resolve, reject) => {
        const log = debug('webadmin:queries:user:getAccount')
        log('[webadmin][user] getAccout', { email, password })
        try {
            const url = service.api + "user/login"
            const body = { email, password }
            log('url, body', url, body)
            let response = await post(
                url, 
                { 'User-Agent': 'request' },
                { email, password })
            log('response', response)

            resolve(response)
        } catch (error) {
            throw error
        }
    })