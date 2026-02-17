import express from "express";
import connectDB from "./Config/db.js";
import userRouter from "./Routes/user.routes.js";
//This is simply a modify to keep on GitHub 
const app = express();

app.use(express.json());
app.use("/api/", userRouter);

// Connection with DataBase
connectDB();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is Up`);
});
