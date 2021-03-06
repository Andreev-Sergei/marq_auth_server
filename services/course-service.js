const UserModel = require('../models/user-model')
const bcrypt = require('bcrypt')
const ApiError = require('../exeptions/api-error')

const course = {
    courseId: 1,
    title: "Spanish",
    symbol: "๐ช๐ธ",
    languages: [
        {
            id: 1,
            title: "English",
            symbol: "๐ณโ๐",
            lessons: [
                {
                    id: 1,
                    title: "ยกHola, amigo!",
                    symbol: "โ ๏ธ",
                    review: true
                },
                {
                    id: 2,
                    title: "ยกYo hablo espaรฑol!",
                    symbol: "๐"
                },

            ]
        },
        {
            id: 2,
            title: "Spanish",
            symbol: "๐ช๐ธ",
            lessons: [
                {
                    id: 134,
                    title: "ยกHola, amigo!",
                    symbol: "๐ช๐ธ",
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
        FlagsEmoji: '๐ฌ๐ง',
        secretTitle: 'eng-esp',
        FinishedCourse: true
    }, {
        id: 2,
        courseName: 'Spanish',
        langTitle: 'Spanish course',
        descriptionMain: 'Start from scratch',
        descriptionSecondary: 'If you\'re just trying to learn a language',
        FlagsEmoji: '๐ช๐ธ',
        secretTitle: 'eng-esp',
        FinishedCourse: true
    },

]

const courses = [
    {
        symbol: "๐น๐ท",
        title: "Turkish",
        total: 12,
        id: 1
    }, {
        symbol: "๐ช๐ธ",
        title: "Spanish",
        total: 10,
        id: 2
    },
    {
        symbol: "๐ฌ๐ง",
        title: "English",
        total: 23,
        id: 3
    }, {
        symbol: "๐ต๐ฑ",
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

    async getOneShortLesson(id) {
        const lesson = {
            id,
            lessonName: 'Lesson Name',
            descriptionMain: 'Start from scratch',
            descriptionSecondary: 'If you\'re just trying to learn a language',
            emoji: '๐ฌ๐ง',
            review: true,
            secretTitle: 'eng-esp',
        }
        return lesson
    }

    async getOneLesson(id, short) {
        const mockBoardByBlocks = [
            {
                blockId: 1,
                messages: [
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
                ],
                userInput: {
                    id: 4,
                    type: 'TASK',
                    taskType: 'INPUT',
                    typeTitle: 'Input',
                    keyboardType: 1,
                    variants: [
                        {id: 1, word: 'ัะพะฑะฐะบะฐ', right: true},
                        {id: 2, word: 'ะบะพัะบะฐ', right: false}
                    ],
                    value: 'Dog - <i>ัะพะฑะฐะบะฐ</i>'
                },
            },

            // {
            //     blockId: 2,
            //     messages: [
            //         {
            //             id: 1232,
            //             type: 'MESSAGE',
            //             value: '<i>Second test</i> message',
            //             messageType: 'VOCABULARY'
            //         },
            //         {
            //             id: 234432,
            //             type: 'MESSAGE',
            //             value: 'Second <i>test</i> message',
            //             messageType: 'VOCABULARY'
            //         }],
            //     userInput: {
            //         id: 32,
            //         type: 'TASK',
            //         taskType: 'INPUT',
            //         typeTitle: 'Input',
            //         keyboardType: 3,
            //         variants: [
            //             {id: 1, word: 'ัะพะฑะฐะบะฐ', right: true},
            //             {id: 2, word: 'ะบะพัะบะฐ', right: false}
            //         ],
            //         value: 'Dog - <i>ัะพะฑะฐะบะฐ</i>'
            //     },
            // }, {
            //     blockId: 3,
            //     messages: [
            //         {
            //             id: 1323232,
            //             type: 'MESSAGE',
            //             value: '<i>Third test</i> message',
            //             messageType: 'VOCABULARY'
            //         }
            //     ],
            //     userInput: null
            // }
        ]
        const mockBoard = [
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
                    {id: 1, word: 'ัะพะฑะฐะบะฐ', right: true},
                    {id: 2, word: 'ะบะพัะบะฐ', right: false}
                ],
                value: 'Dog - <i>ัะพะฑะฐะบะฐ</i>'
            }

        ]
        const lesson = {
            lessonId: id,
            pCourseTitle: 'English',
            pCourseId: 1,
            pLangTitle: 'Spanish',
            pLangId: 2,
            lessonName: 'ยกYo hablo espaรฑol!',
            reviewed: true,
            board: mockBoardByBlocks.map((b, i) => {
                return {...b, order: i + 1}
            })
        }
        return (short) ? {
            id,
            lessonName: 'Lesson Name',
            descriptionMain: 'Start from scratch',
            descriptionSecondary: 'If you\'re just trying to learn a language',
            emoji: '๐ฌ๐ง',
            review: true,
            secretTitle: 'eng-esp',
        } : lesson
    }

    async editLesson(lessonId, data) {
        const lesson = {lessonId, ...data}
        return lesson
    }

    async addLesson(data) {
        const lesson = {id: Date.now(), ...data}
        return lesson
    }

}

module.exports = new CourseService()