import bcrypt from "bcryptjs";

//? Import Created By Our Own
import User from "../Models/user.model.js";
import { generateToken } from "../Utils/utils.js";

export const signup = async (req, res) => {
  const { email, password, fullName } = req.body;
  try {
    if (!email || !password || !fullName) {
      res.status(400).json({
        message: "All fields are required",
      });
    }
    if (password.length < 6) {
      res.status(400).json({
        message: "Password Must be atleast 6 characters long",
      });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User Already Existed",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    if (newUser) {
      //? The generateToken is present inside the Utils folder
      generateToken(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({
        message: "Invalid User data",
      });
    }
  } catch (error) {
    console.log("Error in Signup Controller", error.message);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const login = async (req, res) => {};

export const logout = async (req, res) => {};

export const updateProfile = async (req, res) => {};
