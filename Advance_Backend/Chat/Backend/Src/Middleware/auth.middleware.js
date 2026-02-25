//! Here we will Verify our JWT auth Token 

import jwt from "jsonwebtoken"
import User from "../Models/user.model.js"

export const protectRoute = async(req,res)=>{
  try {
    const token = req.cookie.jwt;

    if(!token){
      return res.status(401).json({message:"Unauthorized - No Token Provided"})
    }

    const decoded  = jwt.verify(token,process.env.JWT_SECRET);

    if(!decoded){
      return res.status(401).json({message:"Unauthorized - Invalid Token "});
    }
  } catch (error) {
    
  }
}