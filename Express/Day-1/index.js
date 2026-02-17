import express from "express";
import {data} from './Data/data.js'
const app = express();

const port = 3000;

app.get("/",(req,res)=>{
  res.status(200).send("Hello World")
});

// Industry Standards 
app.get("/api/v1/users",(req,res)=>{
  res.status(200).send(data);
})

// QUERY PARAMETERS
app.get("/api/v1/users/query_parameter",(req,res)=>{
  const {name} = req.query;
  if(name){
    const user = data.filter((user)=>{
      if(name){
        return user.name ===name;
      }
    })
    res.status(200).send(user)
  }
  res.status(200).send(data);              
})

// ROUTER PARAMETERS
app.get("/api/v1/users/:id",(req,res)=>{
  const {id} = req.params;
  const parsedId = parseInt(id);
  const user = data.find((user)=>user.id == parsedId)
  res.status(200).send(user); 
})

//POST Request


app.listen(3000, (req,res) => {
  console.log("Server is running on port ",port);
}); 