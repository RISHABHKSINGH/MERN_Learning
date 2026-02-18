import express from "express";
import jwt from "jsonwebtoken";
import User from "../Models/user.models.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  try {
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ message: "Username already existed" });
    }

    const newUser = new User({ username, password });

    await newUser.save();

    res.status(201).json({ message: "user Registered Successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
});

//* Login Route
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    //? find the user
    const user = await User.findOne({ username });
    //? If not found return the error message
    if (!user) {
      return res.status(401).json({ message: "Invalid Username or Password" });
    }
    //? If found then compare the password
    const isMatch = await user.comparePassword(password);
    //? If not match return the error
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Username or Password" });
    }
    //? Create a token using jwt
    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );

    res.status(200).json({
      message: "Login Successfully ",
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
});
export default router;
