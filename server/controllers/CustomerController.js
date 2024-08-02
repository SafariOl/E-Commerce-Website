const CustomerService = require("../services/CustomerService")
const {validationResult} = require('express-validator')

class CustomerController {
    async custRegister (req, res, next) {
        try {
            const errors = validationResult(req)
            if(errors.length) next(errors)
            const customerTokens = await CustomerService.custRegister(req.body)
            res.cookie("refreshToken", customer.refreshToken, {maxAge: 30 * 24 * 60 * 1000, httpOnly: true})
            return res.status(200).json(customerTokens)
        } catch (e) {
            next(e)
        }
    }
    async custLogin (req, res, next) {
        try {
            const customerTokens = await CustomerService.custLogin(req.body)
            res.cookie("refreshToken", customerTokens.refreshToken, {maxAge: 30 * 24 * 60 * 1000, httpOnly: true})
            return res.status(200).json(customerTokens)
        } catch (e) {
            next(e)
        }
    }
    async custActivateAccount (req, res, next) {
        try {
            const activationLink = req.params.activationLink
            await CustomerService.custActivateAccount(activationLink)
            return res.redirect(process.env.CLIENT_API_URI)
        } catch (e) {
            next(e)
        }
    }

    async custRefresh (req, res, next) {
        try {
            const {refreshToken} = req.cookies
            if (!refreshToken) return res.status(401).json({ message: 'Refresh token not found' });
            const customer = await CustomerService.custRefresh(refreshToken)
            res.cookie("refreshToken", customer.refreshToken, {maxAge: 30 * 24 * 60 * 1000, httpOnly: true})
            return res.status(200).json(customer);
        } catch (e) {
            next(e)
        }
    }

    async getCustomer (req, res, next) {
        try {
            const customerId = req.params.customerId
            const customer = await CustomerService.getCustomer(customerId)
            return res.status(200).json(customer)
        } catch (e) {
            next(e)
        }
    }

    async changeName (req, res, next) {
        try {
            const customer = await CustomerService.changeName(req.body)
            res.cookie("refreshToken", customer.refreshToken, {maxAge: 30 * 24 * 60 * 1000, httpOnly: true})
            return res.status(200).json(customer)
        } catch (e) {
            next(e)
        }
    }

    async changePassword (req, res, next) {
        try {
            await CustomerService.changePassword(req.body)
            return res.status(200).json({message: 'success'})
        } catch (e) {
            next(e)
        }
    }

    async addAddress (req, res, next) {
        try {
            const errors = validationResult(req)
            if(errors.length) next(errors)
            const address = await CustomerService.addAddress(req.body)
            return res.status(200).json(address)
        } catch (e) {
            next(e)
        }
    }

    async editAddress (req, res, next) {
        try {
            const errors = validationResult(req)
            if(errors.length) next(errors)
            const address = await CustomerService.editAddress(req.body)
            return res.status(200).json(address)
        } catch (e) {
            next(e)
        }
    }

    async removeAddress (req, res, next) {
        try {
            const {customerId, addressId} = req.params
            const address = await CustomerService.removeAddress(customerId, addressId)
            return res.status(200).json(address)
        } catch (e) {
            next(e)
        }
    }

    async getCustomerAddress (req, res, next) {
        try {
            const customerId = req.params.customerId
            const address = await CustomerService.getCustomerAddress(customerId)
            return res.status(200).json(address)
        } catch (e) {
            next(e)
        }
    }

    async logout (req, res, next) {
        try {
            const {refreshToken} = req.cookies
            if (!refreshToken) return res.status(401).json({ message: 'Refresh token not found' });
            await CustomerService.logout(refreshToken)
            res.clearCookie("refreshToken")
            return res.status(200).json()
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new CustomerController()