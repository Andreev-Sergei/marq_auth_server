const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser');
const cowsay = require("cowsay")
const router = require("./router");
const mongoose = require('mongoose')
const errorMiddleware = require('./middlewares/error-middleware')
const coreRouter = require("./router/coreRouter");
require('dotenv').config()
const fileupload = require("express-fileupload")
global.__basedir = __dirname;

const authMiddleware = require('./middlewares/auth-middleware')
const bodyParser = require("express");

const app = express()
const PORT = process.env.PORT || 5005

app.use(express.static('files'))
app.use(cookieParser());
app.use(express.json())
app.use(fileupload())
app.use(bodyParser.json({limit: '100mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '100mb', extended: true}))

app.use(cors({credentials: true, origin: 'http://localhost:3000'}))

app.use('/api_v1', router)
app.use('/static', express.static('files'))

app.use('/api_v1/dashboard', coreRouter)


app.use(errorMiddleware) // middleware must be last element

const startApp = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        app.listen(PORT, () =>
            console.log(cowsay.say({text: `Server started at ${PORT} port!`}))
        )
    } catch (e) {
        console.log(e)
    }
}

startApp()