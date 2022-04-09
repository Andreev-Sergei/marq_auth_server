const UserModel = require('../models/user-model')
const bcrypt = require('bcrypt')
const ApiError = require('../exeptions/api-error')

const course = {
    courseId: 1,
    title: "Spanish",
    symbol: "🇪🇸",
    languages: [
        {
            id: 1,
            title: "English",
            symbol: "🏳‍🌈",
            lessons: [
                {
                    id: 1,
                    title: "¡Hola, amigo!",
                    symbol: "☠️",
                    review: true
                },
                {
                    id: 2,
                    title: "¡Yo hablo español!",
                    symbol: "😇"
                },

            ]
        },
        {
            id: 2,
            title: "Spanish",
            symbol: "🇪🇸",
            lessons: [
                {
                    id: 134,
                    title: "¡Hola, amigo!",
                    symbol: "🇪🇸",
                    review: true
                },
            ]
        },
    ]
}


const langs = [
    {
        id: 1,
        courseName: 'English',
        langTitle: 'English course',
        descriptionMain: 'Start from scratch',
        descriptionSecondary: 'If you\'re just trying to learn a language',
        FlagsEmoji: '🇬🇧',
        secretTitle: 'eng-esp',
        FinishedCourse: true
    }, {
        id: 2,
        courseName: 'Spanish',
        langTitle: 'Spanish course',
        descriptionMain: 'Start from scratch',
        descriptionSecondary: 'If you\'re just trying to learn a language',
        FlagsEmoji: '🇪🇸',
        secretTitle: 'eng-esp',
        FinishedCourse: true
    },

]

const courses = [
    {
        symbol: "🇹🇷",
        title: "Turkish",
        total: 12,
        id: 1
    }, {
        symbol: "🇪🇸",
        title: "Spanish",
        total: 10,
        id: 2
    },
    {
        symbol: "🇬🇧",
        title: "English",
        total: 23,
        id: 3
    }, {
        symbol: "🇵🇱",
        title: "Poland",
        total: 7,
        id: 4
    },
]

class CourseService {
    async getCourses() {
        const courses_data = courses
        return courses_data
    }

    async addCourse(reqData) {
        const newCourse = {...reqData, id: Date.now()}
        courses.push(newCourse) // mock database insertion
        return newCourse
    }

    async getOneCourse(id) {
        course.courseId = id // mock database insertion
        return course
    }

    async getOneLang(id) {
        const lang = langs.find(x => x.id === +id)
        return lang
    }
    async editLang(id) {
        const lang = langs.find(x => x.id === +id)
        return lang
    }
    async getOneShortLesson(id){
        const lesson = {
            id,
            lessonName: 'Lesson Name',
            descriptionMain: 'Start from scratch',
            descriptionSecondary: 'If you\'re just trying to learn a language',
            emoji: '🇬🇧',
            review: true,
            secretTitle: 'eng-esp',
        }
        return lesson
    }
    async getOneFullLesson(id){
        const lesson = {
            id,
            lessonName: 'FULL LESSON',
        }
        return lesson
    }
}

module.exports = new CourseService()