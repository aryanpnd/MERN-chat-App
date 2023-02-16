const mongoose = require('mongoose')
const bcrypt = require("bcryptjs")

const userSchema = mongoose.Schema({
    name: { type: "String", required: true },
    email: { type: "String", required: true, unique: true },
    password: { type: "String", required: true },
    pic: { type: "String", default: "https://icon-library.com/images/user-512_4557.png" }
},
    {
        timeStamps: true,
    }
)

userSchema.methods.matchPassword = async function (EnteredPassword) {
    return await bcrypt.compare(EnteredPassword, this.password)
} //this will compare password with encrypted password

userSchema.pre('save', async function (next) {
    if (!this.isModified) {
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
}) // this will encrypt the password before storing it to the database

const User = mongoose.model("User", userSchema)

module.exports = User