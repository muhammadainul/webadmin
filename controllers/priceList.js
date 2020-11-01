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

async function addPricelistPage (req, res) {
    let log = debug('webadmin:pricelist:addPricelistPage')
    log('[webadmin][pricelist] addPricelistPage')
    try {
        let message = req.flash('error')
        if (message.length > 0) {
            message = message [0]
        } else {
            message = null
        }

        res.render('../views/pages/price/add-data', { 
            isLoggedIn: true,
            session: req.session.user,
            errors: message
        })
    } catch (error) {
        throw error
    }
}

async function editPricelistPage (req, res) {
    let log = debug('webadmin:pricelist:editPricelistPage')
    let param = req.params
    log('[webadmin][pricelist] editPricelistPage', param)
    try {
        const accessToken = req.session.accessToken
        const id = param.id
        const priceList = await Pricelist.getPricelistData(id, accessToken)
        log('priceList', priceList)

        let message = req.flash('error')
        if (message.length > 0) {
            message = message [0]
        } else {
            message = null
        }

        return res.render('../views/pages/price/edit-data', {
            priceList,
            session: req.session.user,
            errors: message,
        })
    } catch (error) {
        throw error
    }
}

async function addPricelist (req, res) {
    let log = debug('webadmin:pricelist:addPricelist')
    let data = req.body
    log('[webadmin][pricelist] addPricelist', data)
    try {
        const { priceName, jobType, price, unit } = req.body
        const accessToken = req.session.accessToken
        const added = await Pricelist.create({ priceName, jobType, price, unit, accessToken })
        log('added', added)

        if (!_.isEmpty(added.message)) return res.render('../views/pages/price/add-data', { errors: added.message, session: req.session.user })
    } catch (error) {
        throw error
    }
}

async function editPricelist (req, res) {
    let log = debug('webadmin:pricelist:editPricelist')
    let data = req.body
    log('[webadmin][pricelist] editPricelist', data)
    try {
        const { id, priceName, jobType, price, unit } = req.body
        const accessToken = req.session.accessToken
        const edited = await Pricelist.editPricelistData({ id, priceName, jobType, price, unit, accessToken })
        log('edited', edited)
    } catch (error) {
        throw error
    }
}

async function deletePricelist (req, res) {
    let log = debug('webadmin:pricelist:deletePricelist')
    let data = req.body
    log('[webadmin][pricelist] deletePricelist', data)
    try {
        const { id } = req.body
        const accessToken = req.session.accessToken
        const deleted = await Pricelist.deleteById(id, accessToken)
        log('deleted', deleted)
    } catch (error) {
        throw error
    }
}

async function getAllPriceList (req, res) {
    let log = debug('webadmin:pricelist:getAllPriceList')
    let data = req.body
    log('[webadmin][pricelist] getAllPriceList', data)
    try {
        const accessToken = req.session.accessToken
        const result = await Pricelist.getAllPriceList(data, accessToken)
        log('result', result.data)
        
        return res.send(result).data
    } catch (error) {
        throw error
    }
}

module.exports = {
    listPage,
    addPricelistPage,
    editPricelistPage,
    addPricelist,
    editPricelist,
    deletePricelist,
    getAllPriceList
} 