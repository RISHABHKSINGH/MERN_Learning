const EventEmitter = require("events");
const event = new  EventEmitter();

// 1.  .ON ( Used to creating the Events ):- 
event.on("GREET",()=>{
  console.log("Hello");
})

// 2.   .EMIT(Used to Executing EVENT which creating by using .on )
event.emit("GREET");



//* Using Arguments 
event.on("GREET",(username,id)=>{
  console.log(`Hello ${username}and the ID is ${id}`)
});
event.emit("GREET","RISHABH","qa;lga124;adsfb");

//! INSTEAD OF PASSING EVERYTHING SEPARATLY USE ARGS 
event.on("GREET",(args)=>{
  console.log(`Hello ${args.username} and id is ${args.id}`)
});
event.emit("GREET",{
  username:"Rishabh",
  id:"a;sg;ladsgba"
});

