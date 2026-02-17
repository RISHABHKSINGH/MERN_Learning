const fs = require("fs");

// 1. Write 
fs.writeFileSync("./test1.txt","Hello This is Sync file");
fs.writeFile("./test2.txt","Hello this is async file ",(err)=>{
  console.log(err);

})

// 2.Read
const read = fs.readFileSync("./test1.txt","utf8");
console.log(read);


//* This err,data is only possible in read because in write there is not need of returning so only err will be present there. 
const asyncread = fs.readFile("./test2.txt","utf8",(err,data)=>{
  if(err){
    console.log(err)
  }
  else{
    console.log(data)
  }
})

//3. Append 
fs.appendFileSync("test3.txt",new Date().toDateString());

fs.appendFile("test3.txt" ,`Hello this is rishabh login at ${new Date().toDateString()}\n`,(err,data)=>{
  if(err){
    console.log(err);
  }
  else{
    console.log(data)
  }
});