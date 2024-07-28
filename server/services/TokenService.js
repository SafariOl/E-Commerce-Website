const jwt = require('jsonwebtoken')
const sql = require('../db')

class TokenService {
    async generateTokens (payload) {
        const accessToken = jwt.sign(payload, process.env.SECRET_JWT_KEY, {expiresIn: '1d'})
        const refreshToken = jwt.sign(payload, process.env.SECRET_JWT_REFRESH_KEY, {expiresIn: '30d'})
        return {
            accessToken,
            refreshToken
        }
    }

    validateRefreshToken (refreshToken) {
        try {
            const customerData = jwt.verify(refreshToken, process.env.SECRET_JWT_REFRESH_KEY)
            return customerData
        } catch (e) {
            return null
        }
    }

    validateAccessToken (accessToken) {
        try {
            const customerData = jwt.verify(accessToken, process.env.SECRET_JWT_KEY)
            return customerData
        } catch (e) {
            return null
        }
    }

    async saveToken (customerId, refreshToken) {
        const tokenData = await this.findTokenByCustomerId(customerId)

        if(tokenData){
            await sql.query(`
                UPDATE customer_tokens SET refresh_token = ? WHERE customer_id = ?
            `, [refreshToken, customerId])
            return await this.findTokenByCustomerId(customerId)
        }

        await sql.query(`
            INSERT INTO customer_tokens () VALUES (?, ?)
        `, [customerId, refreshToken])
        return await this.findTokenByCustomerId(customerId)
    }

    async findTokenByCustomerId (customerId) {
        const [token] = await sql.query(`
            SELECT * FROM customer_tokens WHERE customer_id = ?
        `, [customerId])
        return token[0] | null
    }

    async findToken (refreshToken) {
        const [token] = await sql.query(`
            SELECT * FROM customer_tokens WHERE refresh_token = ?
        `, [refreshToken])
        return token
    }
}

module.exports = new TokenService()