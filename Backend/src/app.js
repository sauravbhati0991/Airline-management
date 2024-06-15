import cookieParser from 'cookie-parser';
import express, { urlencoded } from 'express'
import cors from "cors"

const app = express();
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credential: true
}))

app.use(express.json({limit: '16kb'}))
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(cookieParser())

//import router
import userRouter from './routes/user.route.js'

//router declairation
app.use('/api/v1/user', userRouter)


export { app }