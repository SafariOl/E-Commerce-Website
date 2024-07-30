const CustomerController = require('../controllers/CustomerController')
const router = require('express').Router()
const {body} = require('express-validator')

const bodyRegister = [body('user_name').notEmpty(), body('email').isEmail(), body('password').isLength({min: 8})]
const bodyAddress = [
    body("customer_id").notEmpty(), body("name").notEmpty(), body("surname").notEmpty(), body("street").notEmpty(),  body("postIndex").notEmpty(), 
    body("region").notEmpty(), body("cityOrVillage").notEmpty(), body("phone").notEmpty(), body("email").isEmail(),
]

router.post('/register', bodyRegister, CustomerController.custRegister)
router.post('/login', CustomerController.custLogin)
router.get('/activate/:activationLink', CustomerController.custActivateAccount)
router.get('/get-customer/:customerId', CustomerController.getCustomer)
router.get('/refresh', CustomerController.custRefresh)
router.post('/logout', CustomerController.logout)
router.post('/change-name', CustomerController.changeName)
router.post('/change-password', CustomerController.changePassword)
router.post('/add-address', bodyAddress, CustomerController.addAddress)
router.put('/edit-address', [...bodyAddress, body("address_id").notEmpty()], CustomerController.editAddress)
router.delete('/remove-address/:customerId/:addressId', CustomerController.removeAddress)
router.get('/get-address/:customerId', CustomerController.getCustomerAddress)

module.exports = router