'use strict'

const debug = require('debug')
const _ = require('lodash')
const Menu = require('../queries/menu')

async function menuPage (req, res) {
    let log = debug('webadmin:menu:menuPage')
    log('[webadmin][menu] menuPage') 
    try {
        res.render('../views/pages/menu/index', { 
            isLoggedIn: true,
            session: req.session.user 
        })
    } catch (error) {
        throw error
    }
}

async function addMenuPage (req, res) {
    let log = debug('webadmin:menu:addMenuPage')
    log('[webadmin][menu] addMenuPage')
    try {
        let message = req.flash('error')
        if (message.length > 0) {
            message = message [0]
        } else {
            message = null
        }

        res.render('../views/pages/menu/add-data', { 
            isLoggedIn: true,
            session: req.session.user,
            errors: message
        })
    } catch (error) {
        throw error
    }
}

async function editMenuPage (req, res) {
    let log = debug('webadmin:menu:editMenuPage')
    let param = req.params
    log('[webadmin][menu] editMenuPage', param)
    try {
        const accessToken = req.session.accessToken
        const id = param.id
        const menu = await Menu.getMenuData(id, accessToken)
        log('menu', menu)

        let message = req.flash('error')
        if (message.length > 0) {
            message = message [0]
        } else {
            message = null
        }

        return res.render('../views/pages/menu/edit-data', {
            menu,
            session: req.session.user,
            errors: message,
        })
    } catch (error) {
        throw error
    }
}

async function addMenu (req, res) {
    let log = debug('webadmin:menu:addMenu')
    let data = req.body
    log('[webadmin][menu] addMenu', data)
    try {
        const { menu } = req.body
        const accessToken = req.session.accessToken
        const added = await Menu.create({ menu })
        log('added', added)

        if (!_.isEmpty(added.message)) return res.render('../views/pages/menu/add-data', { errors: added.message, session: req.session.user })
    } catch (error) {
        throw error
    }
}

async function editMenu (req, res) {
    let log = debug('webadmin:menu:editMenu')
    let data = req.body
    log('[webadmin][menu] editMenu', data)
    try {
        const { id, menu } = req.body
        const accessToken = req.session.accessToken
        const edited = await Menu.editMenuData({ id, menu, accessToken })
        log('edited', edited)
    } catch (error) {
        throw error
    }
}

async function deleteMenu (req, res) {
    let log = debug('webadmin:menu:deleteMenu')
    let data = req.body
    log('[webadmin][menu] deleteMenu', data)
    try {
        const { id } = req.body
        const accessToken = req.session.accessToken
        const deleted = await Menu.deleteById(id, accessToken)
        log('deleted', deleted)
    } catch (error) {
        throw error
    }
}

async function getAllMenu (req, res) {
    let log = debug('webadmin:menu:getAllMenu')
    let data = req.body
    log('[webadmin][menu] getAllMenu', data)
    try {
        const accessToken = req.session.accessToken
        const result = await Menu.getAllMenu(data, accessToken)
        log('result', result.data)
        
        return res.send(result).data
    } catch (error) {
        throw error
    }
}

module.exports = {
    menuPage,
    addMenuPage,
    editMenuPage,
    addMenu,
    editMenu,
    deleteMenu,
    getAllMenu
} 