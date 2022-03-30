const UserModel = require('../models/user-model')
const bcrypt = require('bcrypt')
const tokenService = require('../services/token-service')
const UserDto = require("../dtos/user-dto");
const ApiError = require('../exeptions/api-error')

const loginUser = async (user) => {
    const userDto = new UserDto(user)
    const tokens = tokenService.generateTokens({...userDto})
    await tokenService.saveToken(userDto.id, tokens.refreshToken)
    return {
        ...tokens,
        user: userDto
    }
}


class UserService {
    async login(email, password) {
        const user = await UserModel.findOne({email})
        if (!user) {
            throw new ApiError.BadRequest(`Пользователь потчовым адресом "${email}" не существует!`)
        }
        const passwordIsEqual = await bcrypt.compare(password, user.password)
        if (!passwordIsEqual) {
            throw ApiError.BadRequest('Неверный пароль')
        }
        const userData = await loginUser(user)
        return userData
    }

    async register(email, password, role) {
        const condidate = await UserModel.findOne({email})
        if (condidate) {
            throw ApiError.BadRequest('Пользователь с такой почтой уже существует!')
        }
        const hashedPassword = await bcrypt.hash(password, 3)
        const user = await UserModel.create({email, password: hashedPassword, role})
        const userData = await loginUser(user)
        return userData
    }

    async logout(refreshToken) {
        const tokenData = await tokenService.removeToken(refreshToken)
        return tokenData
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthtorizedError()
        }
        const userData = await tokenService.validateRefreshToken(refreshToken)
        const tokenFromDatabase = await tokenService.findRefreshToken(refreshToken)
        if (!userData || !tokenFromDatabase) {
            throw ApiError.UnauthtorizedError()
        }
        const user = await UserModel.findById(userData.id)
        const authUser = await loginUser(user)
        return authUser
    }

    async getAll() {
        const users = await UserModel.find()
        return users
    }
}

module.exports = new UserService()