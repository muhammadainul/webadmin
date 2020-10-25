'use strict'

const debug = require('debug')
const _ = require('lodash')
const Pricelist = require('../queries/priceList')

async function listPage (req, res) {
    let log = debug('webadmin:priceList:listPage')
    log('[webadmin][priceList] listPage') 
    try {
        res.render('../views/pages/price/index', { 
            isLoggedIn: true,
            session: req.session.user 
        })
    } catch (error) {
        throw error
    }
}

async function getAllPriceList (req, res) {
    let log = debug('webadmin:pricelist:getAllPriceList')
    let data = req.body
    log('[webadmin][pricelist] getAllPriceList', data)
    try {
        const accessToken = req.session.user.data.accessToken
        const result = await Pricelist.getAllPriceList(data, accessToken)
        log('result', result.data)
        
        return res.send(result).data
    } catch (error) {
        throw error
    }
}

module.exports = {
    listPage,
    getAllPriceList
} 