const LessonService = require('../services/lesson-service')





class LessonController {

    async addMessage(req, res, next) {
        try {
            const {lessonId, blockId} = req.query
            const message = req.body
            const response = await LessonService.addMessage(lessonId, blockId, message)
            await res.json(response)
        } catch (e) {
            next(e)
        }
    }
    async editMessage(req, res, next) {
        try {
            const message = req.body
            const response = await LessonService.editMessage(message)
            await res.json(response)
        } catch (e) {
            next(e)
        }
    }
    async removeMessage(req, res, next) {
        try {
            const {id: messageId} = req.query
            const removedMessageId = await LessonService.removeMessage(messageId)
            await res.json(removedMessageId)
        } catch (e) {
            next(e)
        }
    }
    async moveMessage(req, res, next) {
            try {
                const {message, fromBlock, toBlock} = req.body
                // move message method
                await res.json()
            } catch (e) {
                next(e)
            }
        }



}

module.exports = new LessonController()