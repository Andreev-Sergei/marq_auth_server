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
            const {courseId} = req.query
            const course = await courseService.getOneCourse(courseId)
            await res.json(course)
        } catch (e) {
            next(e)
        }
    }


    async getOneLang(req, res, next) {
        try {
            const {langId} = req.query
            const lang = await courseService.getOneLang(langId)
            await res.json(lang)
        } catch (e) {
            next(e)
        }
    }

    async getOneLesson(req, res, next) {
        try {
            const {short,lessonId} = req.query
            const lesson = await courseService.getOneLesson(lessonId, short)
            await res.json(lesson)
        } catch (e) {
            next(e)
        }
    }

    async addLesson(req, res, next) {
        try {
            const data = req.body
            const lesson = await courseService.addLesson(data)
            await res.json(lesson)
        } catch (e) {
            next(e)
        }
    }

    async editLesson(req, res, next) {
        try {
            const {lessonId} = req.params
            const data = req.body
            const lesson = await courseService.editLesson(lessonId, data)
            await res.json(lesson)
        } catch (e) {
            next(e)
        }
    }

    async editLang(req, res, next) {
        try {
            const {id, data} = req.params
            const lang = await courseService.editLang(id)
            await res.json(lang)
        } catch (e) {
            next(e)
        }
    }
    async aproveLesson(req, res, next) {
        try {
            const {lessonId} = req.params
            const {approve} = req.body
            //const lang = await courseService.editLang(id)
            await res.json({approve})
        } catch (e) {
            next(e)
        }
    }


}

module.exports = new CourseController()