
const mockBoard = [
    {
        id: 1,
        word: 'dog',
        translation: 'Собака',
        inProduction: true
    }, {
        id: 2,
        word: 'cat',
        translation: 'кошка',
        inProduction: false
    }, {
        id: 3,
        word: 'cow',
        translation: 'корова',
        inProduction: true
    }, {
        id: 12,
        word: 'dog',
        translation: 'Собака',
        inProduction: true
    }, {
        id: 22,
        word: 'cat',
        translation: 'кошка',
        inProduction: false
    }, {
        id: 32,
        word: 'cow',
        translation: 'корова',
        inProduction: true
    }, {
        id: 213,
        word: 'dog',
        translation: 'Собака',
        inProduction: true
    }, {
        id: 124412,
        word: 'cat',
        translation: 'кошка',
        inProduction: false
    }, {
        id: 124,
        word: 'cow',
        translation: 'корова',
        inProduction: true
    }, {
        id: 124124,
        word: 'dog',
        translation: 'Собака',
        inProduction: true
    }, {
        id: 4343,
        word: 'cat',
        translation: 'кошка',
        inProduction: false
    }, {
        id: 555,
        word: 'cow',
        translation: 'корова',
        inProduction: true
    },
]

class TrainerController {
    async getTasks(req, res, next) {
        try {
            const {lessonId} = req.query
            const board = mockBoard
            await res.json(board)
        } catch (e) {
            next(e)
        }
    }

    async addTask(req, res, next) {
        try {
            const {lessonId} = req.query
            const task = req.body
            await res.json({...task, id: Date.now()})
        } catch (e) {
            next(e)
        }
    }

    async changeView(req, res, next) {
        try {
            const {lessonId, taskId} = req.query
            const {changeTo} = req.body
            await res.json({changeTo})
        } catch (e) {
            next(e)
        }
    }

    async removeTask(req, res, next) {
        try {
            const {lessonId, taskId} = req.query
            await res.json()
        } catch (e) {
            next(e)
        }
    }

}

module.exports = new TrainerController()