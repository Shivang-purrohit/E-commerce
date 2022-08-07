import { Jwt } from "jsonwebtoken"
import User from from '../models/userModel.js' ;
import asyncHandler from "express-async-handler";

const protect = asyncHandler(async ( req, res, next) => {
    let token

    if(  
        req.headers.authorization && req.header.authorization.startWith('Bearer')
      )
      {
         
        try {
            token = req.headers.authorization.split(' ') [1]
            const decoded = Jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.id).select('-password')

        } catch (error) {
            
        }

        if (!token) {
            res.status(401)
            throw new Error('Not authorized')
        }

           
      }
}