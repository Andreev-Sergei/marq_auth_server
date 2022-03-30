const jwt = require('jsonwebtoken')
require('dotenv').config()
const tokenModel = require('../models/token-model')

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS, {expiresIn: '5m'})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH, {expiresIn: '10m'})
        return {accessToken, refreshToken}
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await tokenModel.findOne({user: userId})
        if (tokenData) {
            tokenData.refreshToken = refreshToken
            return tokenData.save()
        }
        const token = await tokenModel.create({user: userId, refreshToken})
        return token
    }

    async removeToken(refreshToken) {
        const tokenData = await tokenModel.deleteOne({refreshToken})
        return tokenData
    }

    async validateAccessToken(token) {
        try {
            const userData = await jwt.verify(token, process.env.JWT_ACCESS)
            return userData
        } catch (e) {
            return null
        }
    }

    async validateRefreshToken(token) {
        try {
            const userData = await jwt.verify(token, process.env.JWT_REFRESH)
            return userData
        } catch (e) {
            return null
        }
    }

    async findRefreshToken(refreshToken) {
        const tokenData = await tokenModel.findOne({refreshToken})
        return tokenData
    }

}

module.exports = new TokenService()