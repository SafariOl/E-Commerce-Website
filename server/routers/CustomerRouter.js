const CustomerController = require('../controllers/CustomerController')
const router = require('express').Router()

router.post('/register', CustomerController.custRegister)
router.post('/login', CustomerController.custLogin)
router.get('/activate/:activationLink', CustomerController.custActivateAccount)
router.get('/get-customer/:customerId', CustomerController.getCustomer)
router.get('/refresh', CustomerController.custRefresh)

module.exports = router