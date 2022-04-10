const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser');
const cowsay = require("cowsay")
const router = require("./router");
const mongoose = require('mongoose')
const errorMiddleware = require('./middlewares/error-middleware')
const coreRouter = require("./router/coreRouter");
require('dotenv').config()

const authMiddleware = require('./middlewares/auth-middleware')

const app = express()
const PORT = process.env.PORT || 5005

app.use(cookieParser());
app.use(express.json())

app.use(cors({credentials: true, origin: 'http://localhost:3000'}))

app.use('/api_v1', router)


app.use('/api_v1/dashboard',  coreRouter)


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