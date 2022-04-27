const BlockService = require("./block-service");

class LessonService {
    async addMessage(lessonId, blockId, message) {
        let responseData = null
        if (blockId) {
            responseData = {
                message: {...message, id: Date.now() },
                blockId
            }
        } else {
            const block = await BlockService.createBlock(lessonId)
            responseData = {
                message: {...message, id: Date.now()},
                blockId: block.blockId
            }
        }
       return responseData
    }
    async editMessage(message) {
        const responseData = {...message} // change messgae by message.id
        return responseData
    }
    async removeMessage(messageId) {
        // remove message by id
        return messageId
    }
    async moveMessage(messageId, fromBlockId, toBlockId) {
        // remove message by id
    }

}

module.exports = new LessonService()