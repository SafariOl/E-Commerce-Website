const uuid = require('uuid')
const bcrypt = require('bcrypt')
const sql = require('../db')
const CustomerDto = require('../dtos/CustomerDto')
const MailService = require('./MailService')
const TokenService = require('./TokenService')
const ApiError = require('../exceptions/api-error')

class CustomerService {
    async custRegister ({user_name, email, password}) {
        const [account] = await sql.query(`
          SELECT * FROM customers WHERE email = ?  
        `, [email])

        if(account[0]) throw ApiError.BadRequest("Customer with this email already exists")

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
        if(!customer[0]) throw ApiError.UnauthorizedError()
        const checkPassword = await bcrypt.compare(password, customer[0].password)
        if(!checkPassword) throw ApiError("Incorrect Password!")
        
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
        if(!customer[0]) throw ApiError.BadRequest("User with this id doesn't exist")
        return customer[0]
    }

    async changeName ({newName, customer_id}) {
        await sql.query(`
            UPDATE customers SET user_name = ? WHERE customer_id = ?
        `, [newName, customer_id])

        const customer = await this.getCustomer(customer_id)

        if(!customer) throw ApiError.BadRequest("User with this id doesn't exist")

        const customerData = new CustomerDto(customer)
        const tokens = await TokenService.generateTokens({...customerData})
        await TokenService.saveToken(customerData.customer_id, tokens.refreshToken)
        
        return {...tokens, customer: customerData}
    }

    async changePassword ({customer_id, password}) {
        const hashPassword = await bcrypt.hash(password, 3)
        return await sql.query(`
            UPDATE customers SET password = ? WHERE customer_id = ?
        `, [hashPassword, customer_id])
    }

    async addAddress ({customer_id, name, surname, company, street, postIndex, region, cityOrVillage, phone, email}){
        const address_id = uuid.v4()
        await sql.query(`
            INSERT INTO customer_address () 
            VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `, [customer_id, address_id, name, surname, company, street, postIndex, region, cityOrVillage, phone, email])
        return await this.getCustomerAddress(customer_id)
    }

    async editAddress ({customer_id, address_id, name, surname, company, street, postIndex, region, cityOrVillage, phone, email}){
        await sql.query(`
            UPDATE customer_address SET 
            name = ?, surname = ?, company = ?, street = ?, postIndex = ?, region = ?, cityOrVillage = ?, phone = ?, email = ?
            WHERE address_id = ?
        `, [name, surname, company, street, postIndex, region, cityOrVillage, phone, email, address_id])
        return await this.getCustomerAddress(customer_id)
    }

    async getCustomerAddress (customer_id) {
        const [address] = await sql.query(`
            SELECT * FROM customer_address WHERE customer_id = ?
        `, [customer_id])
        return address || []
    }

    async removeAddress (customerId, addressId) {
        await sql.query(`
            DELETE FROM customer_address WHERE address_id = ? AND customer_id = ?
        `, [addressId, customerId])
        return await this.getCustomerAddress(customerId)
    }

    async logout (refreshToken) {
        return await TokenService.removeToken(refreshToken)
    }
}

module.exports = new CustomerService()