const notFound = (req,res,next)=>{
    const error = new Error(`Not found - ${req.orignalUrl}`)
    res.status(404);
    next(error)
}

const errorHandler = (err,req,res,next)=>{
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode)
    res.join({
        message: err.message
    })

}

module.exports = {notFound, errorHandler}