const {mongoose } = require("mongoose");
mongoose.set('strictQuery', false);
const connectDB = async()=>{
    try {
        const connectionToDb = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }) 

        console.log(`MongoDB connected : ${connectionToDb.connection.host}`)
    } catch (error) {
        console.log(`ERROR : ${error}`)
        process.exit()
    }
}

module.exports = connectDB;