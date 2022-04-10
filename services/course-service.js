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
    async getOneLesson(id, short){
        const mockBoard = [
            //{ blockId: 1, messages: ['hi how are u?', 'give a answer'], userInput: { id: 2 } }
            //{ blockId: 2, messages: ['hi how are u?', 'give a answer'], userInput: { id: 2 } }
            {
                id: 1,
                type: 'MESSAGE',
                value: 'Middle! <i>It is test</i> message',
                messageType: 'USUAL'
            }, {
                id: 11,
                type: 'MESSAGE',
                value: 'Hello! It <i>is test message</i> ',
                messageType: 'USUAL'
            },
            {
                id: 2,
                type: 'MESSAGE',
                value: '<i>Second test</i> message',
                messageType: 'VOCABULARY'
            },
            {
                id: 33,
                type: 'MESSAGE',
                value: 'Second <i>test</i> message',
                messageType: 'VOCABULARY'
            },
            {
                id: 4,
                type: 'TASK',
                taskType: 'INPUT',
                typeTitle: 'Input',
                keyboardType: 1,
                variants: [
                    {id: 1, word: 'собака', right: true},
                    {id: 2, word: 'кошка', right: false}
                ],
                value: 'Dog - <i>собака</i>'
            }

        ]
        const lesson = {
            lessonId: id,
            pCourseTitle: 'English',
            pCourseId: 1,
            pLangTitle: 'Spanish',
            pLangId: 2,
            lessonName: '¡Yo hablo español!',
            reviewed: true,
            board: mockBoard
        }

        return  (short) ? {
            id,
            lessonName: 'Lesson Name',
            descriptionMain: 'Start from scratch',
            descriptionSecondary: 'If you\'re just trying to learn a language',
            emoji: '🇬🇧',
            review: true,
            secretTitle: 'eng-esp',
        } : lesson
    }
}

module.exports = new CourseService()