const mongoose = require('mongoose')

const messsageModel = mongoose.Schema({
    send: {tyep : mongoose.Schema.Types.ObjectId, ref: "User"},
    content : {type: String, trime:true},
    chat : {tyep : mongoose.Schema.Types.ObjectId, ref: "Chat"}
},
{
    timeStamps:true,
}
)

const Message = mongoose.model("message",messsageModel)

module.exports = Message