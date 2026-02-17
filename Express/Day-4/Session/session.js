import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";


const app = express();
app.use(session({
  secret:"Mysecret",
  saveUninitialized:false,
  resave:false,
  cookie:{
    maxAge:1000*60*60*24
  }
}));

app.use(cookieParser("codesnippet"));


app.get("/", (req, res) => {
  console.log(req.session);
  console.log(req.session.id);
  res.send("Session")
});

app.listen(8080, () => {
  console.log("Server is Running at Port ", 8080);
});
