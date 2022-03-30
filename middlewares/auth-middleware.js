const ApiError = require('../exeptions/api-error')
const tokenService = require('../services/token-service')


module.exports = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization
        if (!authHeader){
            return next(ApiError.UnauthtorizedError())
        }
        const accessToken = authHeader.split(' ')[1]
        if (!accessToken){
            return next(ApiError.UnauthtorizedError())
        }
        const userData = await tokenService.validateAccessToken(accessToken)
        if (!userData){
            return next(ApiError.UnauthtorizedError())
        }
        req.user = userData
        next()

    } catch (e) {
        return next(ApiError.UnauthtorizedError())
    }
}