const router = require('express').Router()
const index = require('../controllers/index')
const dashboard = require('../controllers/dashboard')
const customer = require('../controllers/customer')
const employee = require('../controllers/employee')
const priceList = require('../controllers/priceList')
const orders = require('../controllers/order')

let isAuthenticated = (req, res, next) => {
    if (!req.session.user) {
        res.redirect('/')
    } else {
        next()
    }
}

// INDEX
router.get('/', index.loginPage)
router.post('/login', index.login)
router.get('/logout', index.logout)

// DASHBOARD
router.get('/dashboard', isAuthenticated, dashboard.dashboardPage)

// CUSTOMER
router.get('/customer', isAuthenticated, customer.listPage)
router.post('/customer/getAll', isAuthenticated, customer.getAllCustomer)

// EMPLOYEE
router.get('/employee', isAuthenticated, employee.listPage)
router.post('/employee/getAll', isAuthenticated, employee.getAllEmployee)

// PRICE LIST
router.get('/pricelist', isAuthenticated, priceList.listPage)
router.post('/pricelist/getAll', isAuthenticated, priceList.getAllPriceList)

// ORDERS
router.get('/order', isAuthenticated, orders.listPage)
router.post('/order/getAll', isAuthenticated, orders.getAllOrders)

module.exports = router