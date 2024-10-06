import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()
import User from "../models/user.model.js"
 


const protectRoute = async (req, res, next)=>{
    try{
       
       const token = req.cookies.jwt
       
       if(!token)
       {
        
        return res.status(401).json({error:"Unauthoried-No token provided"})
       }

       const decoded = jwt.verify(token,"GJ84s8XLoA1FWwaRLqRRLZrnNfU30/K4ggkiS8lnB1o=" )
       if(!decoded)
       {
        return res.status(401).json({error:"Unauthoried-Invalid Token"})
       }
       const user = await User.findById(decoded.userId).select("-password")
       if(!user)
       {
        return res.status(404).json({error : "User not found"})
       }
       req.user = user;
       next();

    }
    catch(error){
        console.log("Error in protectRoute middleware: ", error.message)
        res.status(500).json({error:"Internal server error"})
    }
}
export default protectRoute