const express = require("express")
const { chats } = require("./data/dummydata")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const path = require('path'); 
const userRoutes = require("./routes/userRoutes")
const chatsRoutes = require("./routes/chatsRoutes")
const {errorHandler,notFound} = require("./middlewares/errorMiddleware")

const app = express()
app.use(express.json()) //to accept JSON data

dotenv.config({path: 'config.env'})
connectDB()

app.get('/',(req,res)=>{
    res.send(`your're on port ${PORT}` )
})

app.use('/api/user',userRoutes)

app.use('/api/chats',chatsRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000 ;
app.listen(PORT,console.log(`app listening on port ${PORT}`))