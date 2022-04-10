const courseService = require('../services/course-service')

class CourseController {

    async getCourses(req, res, next) {
        try {
            const courses = await courseService.getCourses()
            await res.json(courses)
        } catch (e) {
            next(e)
        }
    }

    async addCourse(req, res, next) {
        try {
            const {course: reqData} = req.body
            const course = await courseService.addCourse(reqData)
            await res.json(course)
        } catch (e) {
            next(e)
        }
    }

    async getOneCourse(req, res, next) {
        try {
            const {id} = req.params
            const course = await courseService.getOneCourse(id)
            await res.json(course)
        } catch (e) {
            next(e)
        }
    }


    async getOneLang(req, res, next) {
        try {
            const {id} = req.params

            const lang = await courseService.getOneLang(id)
            await res.json(lang)
        } catch (e) {
            next(e)
        }
    }

    async getOneLesson(req, res, next) {
        try {
            const {id} = req.params
            const {short} = req.query
            const lesson = await courseService.getOneLesson(id, short)
            await res.json(lesson)
        } catch (e) {
            next(e)
        }
    }

    async editLang(req, res, next) {
        try {
            const {id, data} = req.params
            console.log(data)
            const lang = await courseService.editLang(id)
            await res.json(lang)
        } catch (e) {
            next(e)
        }
    }


}

module.exports = new CourseController()