const mongoose = require('mongoose')

const messsageModel = mongoose.Schema({
    send: {type : mongoose.Schema.Types.ObjectId, ref: "User"},
    content : {type: String, trim:true},
    chat : {type : mongoose.Schema.Types.ObjectId, ref: "Chat"}
},
{
    timestamps:true,
}
)

const Message = mongoose.model("message",messsageModel)

module.exports = Message