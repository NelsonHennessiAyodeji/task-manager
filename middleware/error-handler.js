const {CustomAPIError} = require('../error_handler/custom-error');

const errorHandlerMiddleware = (err, req, res, next) => {
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json(err.message);
    }
    console.log(err);
    return res.status(500).json("Something's wrong please try again... correctly this time");
}

module.exports = errorHandlerMiddleware;