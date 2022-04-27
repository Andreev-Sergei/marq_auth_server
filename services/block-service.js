

class BlockService {
    async createBlock() {
        const block = {blockId: Date.now()} ///UserModel.find()
        return block
    }
}

module.exports = new BlockService()