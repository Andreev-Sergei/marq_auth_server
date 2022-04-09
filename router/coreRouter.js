const Router = require('express').Router
const CourseController = require('../controllers/course-controller')
const coreRouter = Router()
const authMiddleware = require('../middlewares/auth-middleware')
const userService = require("../services/user-service");


coreRouter.get('/course-list', CourseController.getCourses)
coreRouter.post('/course-list', CourseController.addCourse)

coreRouter.get('/course-list/:id', CourseController.getOneCourse)

coreRouter.get('/lang/:id', CourseController.getOneLang)
// coreRouter.post('/lang/:id', CourseController.addOneLang)
// coreRouter.put('/lang/:id', CourseController.editLang)
//
coreRouter.get('/lesson/:id', CourseController.getOneLesson)

module.exports = coreRouter