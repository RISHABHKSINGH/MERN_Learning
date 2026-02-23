import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";



import connectDB from "./Lib/db.js";
import authRoutes from "./Routes/auth.routes.js";


dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(cookieParser());



// * Routes
app.use("/api/auth",authRoutes);



app.use(
  cors({
    origin: ["http://localhost:5137"], //*From where request will going to come could be more
    credentials: true,
  }),
);

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
  connectDB();
});
