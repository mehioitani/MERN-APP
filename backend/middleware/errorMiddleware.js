//we use it instead of the default error handler so if an error occurs while testing on postman it will give us more infos about the error
export const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500

    res.status(statusCode)

    res.json({
        message:err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack 
    })
}