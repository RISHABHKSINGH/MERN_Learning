import express from 'express'
import Router  from "express";
import authMiddleware from '../Middleware/auth.middleware.js';

const Privaterouter = express.Router(); 


Privaterouter.get("/dashboard",authMiddleware,(req,res)=>{
  res.status(200).send(`Welcome To the DashBoard ${req.user.Name}`)
})

export default Privaterouter