import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config();

const generateTokenAndSetCookie = async (userId, res)=>{
    const token = jwt.sign({userId}, "GJ84s8XLoA1FWwaRLqRRLZrnNfU30/K4ggkiS8lnB1o=",{
        expiresIn:"15d",
    });

    res.cookie("jwt", token, {
        maxAge:15 * 24 * 60 *60*1000, 
        httpOnly : true,
        sameSite : "strict",
        secure:process.env.NODE_ENV !== "development"
    });

};
export default generateTokenAndSetCookie
