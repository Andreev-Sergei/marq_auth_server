const mockHomeWorkBoard = [
    {
        id: 32,
        variants: [
            {id: 1, word: 'собака', right: true},
            {id: 2, word: 'кошка', right: false}
        ],
        value: 'Dog - <i>собака</i>'
    },
    {
        id: 22,
        variants: [
            {id: 1, word: 'кошка', right: true},
            {id: 2, word: 'собака', right: false}
        ],
        value: 'Cat - <i>кошка</i>'
    },

    {
        id: 1212,
        variants: [
            {id: 1, word: 'корова', right: true},
            {id: 2, word: 'бивень', right: false}
        ],
        value: 'cow - <i>корова</i>'
    },

]


const exe = {
    name: 'Перевод',
    section: 'Лексика',
    description: 'Помнишь, как это будет по-испански?',
    typeOfTask: 'INPUT',
    keyboardType: 1
}

class HomeworkController {
    async getExercise(req, res, next) {
        try {
            const {lessonId, exerciseId} = req.query
            const exercise = exerciseId == 3 ? null : {...exe, id: exerciseId}
            await res.json(exercise)
        } catch (e) {
            next(e)
        }
    }

    async addExercise(req, res, next) {
        try {
            const {lessonId, exerciseId} = req.query
            const exercise = req.body
            await res.json({...exercise, id: exerciseId})
        } catch (e) {
            next(e)
        }
    }

    async editExercise(req, res, next) {
        try {
            const {lessonId, exerciseId} = req.query
            const exercise = req.body
            await res.json({...exercise, id: exerciseId})
        } catch (e) {
            next(e)
        }
    }


    async addHomeworkTask(req, res, next) {
        try {
            const task = req.body
            const {lessonId, exerciseId} = req.query
            const newTask = {task: {...task, id: Date.now()}}/// db insert task
            res.json({newTask, lessonId, exerciseId})
        } catch (e) {
            next(e)
        }
    }

    async getHomeworkBoard(req, res, next) {
        try {
            const {lessonId, exerciseId} = req.query
            const board = (exerciseId == 1 || exerciseId == 2) ? mockHomeWorkBoard : []
            await res.json(board)
        } catch (e) {
            next(e)
        }
    }

    async editHomeworkTask(req, res, next) {
        try {
            const {lessonId, exerciseId} = req.query
            const task = req.body
            await res.json(task)
        } catch (e) {
            next(e)
        }
    }

    async removeHomeworkTask(req, res, next) {
        try {
            const {lessonId, exerciseId} = req.query
            const {taskId} = req.body
            await res.json({})
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new HomeworkController()