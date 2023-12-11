import Jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import userModel from "../models/userModel.js";

const Protect = asyncHandler(async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            //Get token from header
            //because it is formatted like this: bearer token and we want the "token" so we split them (array) and take the second index from which is token
            token = req.headers.authorization.split(' ')[1]

            //Verify token
            const decoded = Jwt.verify(token, process.env.JWT_SECRET)

            //Get user from the token (because the token has the user id in the data)
            //we assign it to req.user in order to access req.user in any protected route
            req.user = await userModel.findById(decoded.id).select('-password')
            next()
            //-password because i don't want to see the password which is hashed
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('Not authorized')
        }
    }
    if (!token) {
        res.status(401)
        throw new Error('Not authorized no token')
    }
})

export default Protect;