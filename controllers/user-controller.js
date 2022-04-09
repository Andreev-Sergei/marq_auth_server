const userService = require('../services/user-service')

class UserController {

    async registration(req, res, next) {
        try {
            const {email, password, role} = req.body
            const userData = await userService.register(email, password, role)

            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: 10 * 60 * 60 * 1000,
                httpOnly: true
                // if https add secure: true
            })
            res.json(userData)
        } catch (e) {
            next(e)
        }
    }

    async login(req, res, next) {
        try {
            const {email, password} = req.body
            console.log(email, 'is loging')
            const userData = await userService.login(email, password)
            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: 10 * 60 * 60 * 1000,
                httpOnly: true
                // if https add secure: true
            })
            res.json(userData)
        } catch (e) {
            console.log('login filed')
            next(e)
        }
    }

    async refresh(req, res, next) {
        try {
            const {refreshToken} = req.cookies
            const userData = await userService.refresh(refreshToken)
            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: 10 * 60 * 60 * 1000,
                httpOnly: true
                // if https add secure: true
            })
        } catch (e) {
            next(e)
        }
    }

    async logout(req, res, next) {
        try {
            const {refreshToken} = req.cookies
            const token =  await userService.logout(refreshToken)
            res.clearCookie('refreshToken')
            res.json(token)
        } catch (e) {
            next(e)
        }
    }

    async users(req, res, next) {
        try {
            const users = await userService.getAll()
            res.json(users)
        } catch (e) {
            next(e)
        }
    }

}

module.exports = new UserController()