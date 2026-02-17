const EventEmitter = require("events");
const event = new EventEmitter();
const fs = require("fs")

// COUNTING
const count = {
  Login:0,
  Logout:0,
  ProfileUPdate:0,
  Purchased:0
}

const logFile = "Event.json";
if(fs.existsSync(logFile)){
  const data = fs.readFileSync(logFile,"utf-8");
  Object.assign(count,JSON.parse(data))
}


function saveCounts(){
  fs.writeFileSync(logFile,JSON.stringify(count,null,2))
}

// 1. LOGIN 
const loginevent = event.on("LOGIN", (username)=>{
  count.Login++;
  console.log( `This is the LOGIN Event ${username}` );
  saveCounts();
});

// 2. LOGOUT
const logoutEvent = event.on("LOGOUT",(username)=>{
  count.Logout++;
  console.log(`This is the LOGOUT Event ${username}`);
  saveCounts();
});

// 3. Profile Update
const profileUpdateEvent = event.on("PROFILE_UPDATE",(username, field)=>{
  count.ProfileUPdate++;
  console.log(`This is the ${username} and has updated ${field}`);
  saveCounts();
});

// 4. Purchased Item
const PurchasedEvent = event.on("PURCHASED",(username,item_purchased)=>{
  count.Purchased++;
  console.log(`This is the  ${username} and has purchased ${item_purchased}`);
  saveCounts();
});





// Setting On Counts
event.on("SUMMARY",()=>{
  console.log(`Logins : ${count.Login}`)
  console.log(`Logout : ${count.Logout}`)
  console.log(`ProfileUpdate : ${count.ProfileUPdate}`)
  console.log(`Purchased : ${count.Purchased}`)
})

// Calling of EVENT 
event.emit("LOGIN","RISHABH");
event.emit("LOGOUT","RISHABH");
event.emit("PROFILE_UPDATE","RISHAB","Email");
event.emit("PURCHASED","RISHABH","LAPTOP");
event.emit("SUMMARY");