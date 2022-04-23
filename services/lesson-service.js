const UserModel = require("../models/user-model");
const ApiError = require("../exeptions/api-error");
const bcrypt = require("bcrypt");
const tokenService = require("./token-service");

class LessonService {
    async getOneLesson() {
        const lesson = await UserModel.find()
        return lesson
    }
}

module.exports = new LessonService()