const Router = require('express').Router
const CourseController = require('../controllers/course-controller')
const LessonController = require('../controllers/lesson-controller')
const TrainerController = require('../controllers/trainer-controller')
const HomeworkController = require('../controllers/homework-controller')
const coreRouter = Router()
const authMiddleware = require('../middlewares/auth-middleware')
const userService = require("../services/user-service");


coreRouter.get('/course-list', CourseController.getCourses)
coreRouter.post('/course-list', CourseController.addCourse)
coreRouter.get('/course-list/:courseId', CourseController.getOneCourse)

coreRouter.get('/lang', CourseController.getOneLang)
coreRouter.put('/lang', CourseController.editLang)

// LESSON
coreRouter.get('/lesson', CourseController.getOneLesson)
coreRouter.put('/lesson', CourseController.editLesson)
coreRouter.post('/lesson', CourseController.addLesson)
coreRouter.patch('/lesson', CourseController.aproveLesson)

// MESSAGES
coreRouter.post('/lesson/message', LessonController.addMessage)
coreRouter.put('/lesson/message', LessonController.editMessage)
coreRouter.delete('/lesson/message', LessonController.removeMessage)
coreRouter.patch('/lesson/message', LessonController.moveMessage)

// TASKS
coreRouter.post('/lesson/task')
coreRouter.put('/lesson/task')
coreRouter.delete('/lesson/task')

// HOMEWORK

// HOMEWORK
coreRouter.get('/homework', HomeworkController.getExercise)
coreRouter.post('/homework', HomeworkController.addExercise)
coreRouter.put('/homework', HomeworkController.editExercise)

// HOMEWORK BOARD ITEM
coreRouter.get('/homework-board', HomeworkController.getHomeworkBoard)
coreRouter.post('/homework-board', HomeworkController.addHomeworkTask)
coreRouter.put('/homework-board', HomeworkController.editHomeworkTask)
coreRouter.delete('/homework-board', HomeworkController.removeHomeworkTask)

// TRAINER ITEMS
coreRouter.get('/trainer', TrainerController.getTasks)
coreRouter.post('/trainer', TrainerController.addTask)
coreRouter.patch('/trainer', TrainerController.changeView)
coreRouter.delete('/trainer', TrainerController.removeTask)



coreRouter.patch('lesson/block') // swap blocks


coreRouter.post('/upload', async (req, res) => {
    // TODO get lessonId from request & if folder doesn't exist create in static files directory
    const newPatch = __basedir + "/files/";
    const file = req.files.file;
    const filename = file.name;

    await file.mv(`${newPatch}${filename}`, (err) => {
        if (err) {
            res.status(500).send({message: "File upload failed", code: 200});
        }
        res.status(200).send({message: "File Uploaded", url: process.env.STATIC_FILES_URL + filename, code: 200});
    });

})

module.exports = coreRouter