const CustomerService = require("../services/CustomerService")

class CustomerController {

    async custRegister (req, res, next) {
        try {
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
            if (!refreshToken) {
                return res.status(401).json({ message: 'Refresh token not found' });
            }
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

}

module.exports = new CustomerController()