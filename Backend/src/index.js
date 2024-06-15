import connectDB from './db/index.js'
import {app} from './app.js'
import dotenv from "dotenv"
dotenv.config({
  path: './.env'
})

// console.log(process.env)

connectDB()
.then( ()=> {
  app.listen(process.env.PORT || 8000, ()=>{
    console.log(`Server is running at port ${process.env.PORT}`)
  })
})
.catch((err) => {
  console.log('MongoDb Connection error', err)
})
