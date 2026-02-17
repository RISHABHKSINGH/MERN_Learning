import express from 'express';
import fs from 'fs';
import {fileURLToPath} from 'url'
import path from 'path';


//* Handeling filename and dirname in ES Module

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

//* Middleware to Log all Users

const LogMiddleware = (req,res,next)=>{
  const log = `[${new Date().toISOString()}] ${req.method} ${req.url} \n`;
  const logFile = path.join(__dirname,"../Logs/log.md");
  fs.appendFile(logFile,log,(err)=>{
    if(err){
      console.error("Failed to Log Request",err)
    }
  })

  next();
}

export default LogMiddleware;