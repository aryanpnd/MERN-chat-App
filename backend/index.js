const express = require("express")
const { chats } = require("./data/dummydata")
const dotenv = require("dotenv")

const app = express()
dotenv.config()

app.get('/',(req,res)=>{
    res.send(`your're on port ${PORT}` )
})

app.get('/api/chats',(req,res)=>{
    res.send(chats)
})

app.get('/api/chats/:id',(req,res)=>{
    const singleChat = chats.find((c) => c._id === req.params.id)
    res.send(singleChat)
})

const PORT = process.env.PORT || 5000 ;
app.listen(PORT,console.log(`app listening on port ${PORT}`))