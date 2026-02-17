import express from 'express'
import userRouter from './Routes/user.routes.js';
const app = express();

function SayHiMiddleware(req,res,next){
  console.log("This is Global Middleware");
  next();
}


app.use(userRouter);

const Port = 3001;

app.get("/",(req,res)=>{
  res.send("Hello world");
})

app.get("/about",SayHiMiddleware,(req,res)=>{
  res.send("This is about ")
})

app.listen(Port,(req,res)=>{
  console.log("Server is Running at port ",Port);
})