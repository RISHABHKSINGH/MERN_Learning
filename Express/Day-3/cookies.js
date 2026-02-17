import express from "express";
import cookieParser from "cookie-parser";

const app = express();

//* Use Normal Cookie
// app.use(cookieParser());

//* Use of Signned Cookies
app.use(cookieParser("my_Secret_Key"));


app.get("/", (req, res) => {
  res.cookie("name", "Rks", { maxAge: 1000 * 60 * 60 });
  res.send("Hello World");
});

// Setting Up new cookie for signed one 
app.get("/new",(req,res)=>{
  res.cookie("userId","99",{
    maxAge:1000*60*60,
    signed:true
  })
  res.send("Signed cookie set successfully!");

})
// Getting Up New Signned Cookie
app.get("/newCookie",(req,res)=>{
  console.log("Signed Cookie",req.signedCookies);
})

app.get("/product", (req, res) => {
  console.log("Cookies", req.cookies);

  if (req.cookies.name && req.cookies.name === "Rks") {
    res.status(200).send({
      id: "1",
      name: "Item-01",
      price: "1000",
    });
  } else {
    res.status(401).send("Unauthorized");
  }
});

app.listen(8080, () => {
  console.log("Server is Running at", 8080);
});
