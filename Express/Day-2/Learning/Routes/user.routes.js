import { Router } from "express";
//* or import Router from 'express';  and then  const router = Router(); as we do in express 


const userRouter = Router();

userRouter.get("/",(req,res)=>{
  res.send("User Page");
})

userRouter.get("/getAllUsers",(req,res)=>{
  res.send("Get All Users");
})

userRouter.get("/getUserById",(req,res)=>{
  res.send("Get User by ID");
})

export default userRouter;