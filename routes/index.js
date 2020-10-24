const router = require('express').Router()
const index = require('../controllers/index')
const customer = require('../controllers/customer')
const employee = require('../controllers/employee')
const priceList = require('../controllers/priceList')
const orders = require('../controllers/order')

// INDEX
router.get('/', index.loginPage)
router.get('/dashboard', index.dashboard)

// CUSTOMER
router.get('/customer', customer.listPage)
router.post('/customer/getAll', customer.getAllCustomer)

// EMPLOYEE
router.get('/employee', employee.listPage)
router.post('/employee/getAll', employee.getAllEmployee)

// PRICE LIST
router.get('/pricelist', priceList.listPage)
router.post('/pricelist/getAll', priceList.getAllPriceList)

// ORDERS
router.get('/order', orders.listPage)
router.post('/order/getAll', orders.getAllOrders)

module.exports = router