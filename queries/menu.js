'use strict'

const debug = require('debug')
const _ = require('lodash')

const { post } = require('../libs/request')
const service = require('../config/service')

exports.getAllMenu = (data, accessToken) =>
    new Promise(async(resolve, reject) => {
        let log = debug('webadmin:menu:queries:getAllMenu')
        log('[webadmin][menu][Query] getAllMenu', { data, accessToken })
        try {
            const url = service.api + 'admin/getAllMenu'
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

exports.getMenuData = (id, accessToken) =>
    new Promise(async(resolve, reject) => {
        let log = debug('webadmin:menu:queries:getMenuData')
        log('[webadmin][menu][Query] getMenuData', { id, accessToken })
        try {
            const url = service.api + 'admin/getMenuById'
            let headers = { Authorization: 'Bearer ' + accessToken }
            const body = { id }
            log('url, headers, body', { url, headers, body })
            const response = await post(url, headers, body)
            log('response', response)

            resolve(response.data)
        } catch (error) {
            throw error
        }
    })

exports.create = ({ menu, accessToken }) =>
    new Promise(async(resolve, reject) => {
        let log = debug('webadmin:menu:queries:create')
        log('[webadmin][menu][Query] create', { menu, accessToken })
        try {
            const url = service.api + 'admin/addMenu'
            let headers = { Authorization: 'Bearer ' + accessToken }
            const body = { menu }
            log('url, headers, body', { url, headers, body })
            const response = await post(url, headers, body)
            log('response', response)

            resolve(response)
        } catch (error) {
            throw error
        }
    })

exports.editMenuData = ({ id, menu, accessToken }) =>
    new Promise(async(resolve, reject) => {
        let log = debug('webadmin:menu:queries:editMenuData')
        log('[webadmin][menu][Query] editMenuData', { id, menu, accessToken })
        try {
            const url = service.api + 'admin/editMenu'
            let headers = { Authorization: 'Bearer ' + accessToken }
            const body = { id, menu }
            log('url, headers, body', { url, headers, body })
            const response = await post(url, headers, body)
            log('response', response)
        
            let result = JSON.parse(response)
            resolve(result.message)
        } catch (error) {
            throw error
        }
    })

exports.deleteById = (id, accessToken) =>
    new Promise(async(resolve, reject) => {
        let log = debug('webadmin:menu:queries:deleteById')
        log('[webadmin][menu][Query] deleteById', { id, accessToken })
        try {
            const url = service.api + 'admin/deleteMenu'
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