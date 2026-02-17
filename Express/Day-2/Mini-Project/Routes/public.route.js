import express from 'express';
import Router  from "express";
import { generateToken } from '../Utilities/token-utilities.js';


const Publicrouter = express.Router();

Publicrouter.get("/generate-token",(req,res)=>{
  const token = generateToken();

  res.status(200).send({
    message:"Token in generated successfully",
    token:token
  })
});

Publicrouter.get("/Home",(req,res)=>{
  res.status(200).send({
    message:"This is Home Route"
  })
})


export default Publicrouter;