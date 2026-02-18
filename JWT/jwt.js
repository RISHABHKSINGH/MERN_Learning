import "dotenv/config";   // ← ALWAYS FIRST

import express from "express";
import mongoose from "mongoose";
import authRoutes from "./Routes/auth.routes.js";
import privateRoutes from "./Routes/private.routes.js";

const app = express();

const PORT = process.env.PORT || 4000;
app.use(express.json());

// Connecting MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => {
    console.log("MongoDB Connection Error", err.message);
  });

// Routes
app.use("/auth", authRoutes);
app.use("/private",privateRoutes);

app.listen(PORT, () => {
  console.log(`Server is Running at port ${PORT}`);
});
