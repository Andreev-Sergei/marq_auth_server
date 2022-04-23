const Router = require('express').Router
const CourseController = require('../controllers/course-controller')
const LessonController = require('../controllers/lesson-controller')
const coreRouter = Router()
const authMiddleware = require('../middlewares/auth-middleware')
const userService = require("../services/user-service");


coreRouter.get('/course-list', CourseController.getCourses)
coreRouter.post('/course-list', CourseController.addCourse)
coreRouter.get('/course-list/:id', CourseController.getOneCourse)

coreRouter.get('/lang/:id', CourseController.getOneLang)

//get lesson short or full TODO change CourseController to LessonController
coreRouter.get('/lesson/:id', CourseController.getOneLesson)

// LESSON
coreRouter.put('/lesson/:id', CourseController.editLesson)
coreRouter.post('/lesson', CourseController.addLesson)

// MESSAGES
coreRouter.post('/lesson/:id/message')
coreRouter.put('/lesson/:id/message')
coreRouter.delete('/lesson/:id/message')
// TASKS
coreRouter.post('/lesson/:id/task')
coreRouter.put('/lesson/:id/:taskId')
coreRouter.delete('/lesson/:id/:taskId')
// HOMEWORK

// TRAINER
coreRouter.post('/lesson/:id/word')
coreRouter.put('/lesson/:id/:wordId') //change visible
coreRouter.delete('/lesson/:id/:wordId')  //remove
module.exports = coreRouter