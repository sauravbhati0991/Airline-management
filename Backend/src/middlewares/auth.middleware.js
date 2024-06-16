import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js";

const verifyJWT = asyncHandler(async(req, _, next) => {
    try {
        const token = (req.cookies?.accessToken) || (req.header("Authorization")?.replace("Bearer ", ""))
        
        console.log("Token: ",req.header("Authorization")?.replace("Bearer ", ""));
        if (!token) {
            throw new ApiError(401, "Unauthorized request")
        }
    
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
    
        if (!user) {
            
            throw new ApiError(401, "Invalid Access Token")
        }
    
        req.user = user;
        next()
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token")
    }
    
})
// const protect = asyncHandler(async (req, res, next) => {
//     //Getting token and check of it's there
//     let token;
//     console.log("Cookies", req.cookies.jwt)
//     if (
//       req.headers.authorization &&
//       req.headers.authorization.startsWith("Bearer")
//     ) {
//       token = req.headers.authorization.split(" ")[1];
//     } else if (req.cookies.jwt) {
//       token = req.cookies.jwt;
//     }
  
//     if (!token) {
//       return next(
//         new ApiError(401, "You are not logged in! Please log in to get access.",)
//       );
//     }

//     const decode = await promisify(jwt.verify)(token, process.env.ACCESS_TOKEN_SECRET);

//     // Check if user still exists
//     const freshUser = await User.findById(decode.id);
//     if (!freshUser) {
//       return next(
//         new ApiError("The user belonging to this token is no longer exists.", 401)
//       );
//     }
  
//     // Check if user changed thier password after the token was issued
//     if (freshUser.changePasswordAfter(decode.iat)) {
//       return next(
//         new ApiError("User recently changed Password! Please log in again.", 401)
//       );
//     }
//     // Grant Access to protected route
//     req.user = freshUser;
//     res.locals.user = freshUser;
//     next();
// })

export {verifyJWT}