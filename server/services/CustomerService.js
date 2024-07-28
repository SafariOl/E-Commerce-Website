const uuid = require('uuid')
const bcrypt = require('bcrypt')
const sql = require('../db')
const CustomerDto = require('../dtos/CustomerDto')
const MailService = require('./MailService')
const TokenService = require('./TokenService')

class CustomerService {
    async custRegister ({user_name, email, password}) {
        const customerId = uuid.v4()
        const hashPassword = await bcrypt.hash(password, 3)
        const activationLink = uuid.v4()
        await sql.query(`
          INSERT INTO customers (customer_id, user_name, email, password, activationLink) VALUES(?, ?, ?, ?, ?) 
        `, [customerId, user_name, email, hashPassword, activationLink])
        const customer = await this.getCustomer(customerId)
        await MailService.SendMail(email, `${process.env.CLIENT_API_URI}/activation/${activationLink}`)
        const customerData = new CustomerDto(customer[0])
        const tokens = await TokenService.generateTokens({...customerData})
        await TokenService.saveToken(customerData.customer_id, tokens.refreshToken)
        
        return {
            ...tokens,
            customer: customerData
        }
    }

    async custActivateAccount (activationLink) {
        await sql.query(`
            UPDATE customers SET is_activated = TRUE WHERE activationLink = ?
        `, [activationLink])
        return
    }

    async custLogin ({email, password}) {
        const [customer] = await sql.query(`
            SELECT * FROM customers WHERE email = ?
        `, [email])
        const checkPassword = await bcrypt.compare(password, customer[0].password)
        if(!checkPassword) throw new Error("Incorrect Password!")
        
        const customerData = new CustomerDto(customer[0])
        const tokens = await TokenService.generateTokens({...customerData})
        await TokenService.saveToken(customerData.customer_id, tokens.refreshToken)

        return {
            ...tokens,
            customer: customerData
        }
    }

    async custRefresh (refreshToken) {
        const customer = TokenService.validateRefreshToken(refreshToken)
        const tokenFromDb = await TokenService.findToken(refreshToken)
        if(!customer || !tokenFromDb) {
            throw new Error ({message: "Unauthorized"})
        }

        const customerData = new CustomerDto(customer)
        const tokens = await TokenService.generateTokens({...customerData})
        await TokenService.saveToken(customerData.customer_id, tokens.refreshToken)
        return {
            ...tokens,
            customer: customerData
        }
    }

    async getCustomer (customerId) {
        const [customer] = await sql.query(`
            SELECT * FROM customers WHERE customer_id = ?
        `, [customerId])
        return customer[0]
    }
}

module.exports = new CustomerService()