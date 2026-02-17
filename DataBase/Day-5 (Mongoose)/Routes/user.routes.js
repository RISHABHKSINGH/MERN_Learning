import express from "express";
import User from "../Models/user.model.js";

const router = express.Router();

//* CRUD Operations

//* Create
router.post("/users", async (req, res) => {
  try {
    //* Get the data from req.body(Destructuring)
    const { name, age, weight } = req.body;
    //* Import UserModel from user.model.js

    //* create new User by using constructor function
    const newUser = new User({ name, age, weight });
    await newUser.save();

    res.status(201).json({
      success: true,
      data: newUser,
      message: "Successfully User Created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

//* Read( To find all the Users present in the DB not specific to find it we need to use /:id )
router.get("/users", async (req, res) => {
  try {
    const user = await User.find();

    res.status(200).json({
      success: true,
      data: user,
      message: "User Get Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

//* Update
router.put("/update-user/:id", async (req, res) => {
  const { id } = req.params;
  const { name, age, weight } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, age, weight },
      //? Instead of making new:true mongoDB now uses returnDocument:before and after 
      { new: true, runValidators: true },
    );

    if (!updatedUser) {
      //! We are using return here because if we not use we need to also write else statement
      return res.status(401).json({
        success: false,
        message: "User Not found",
      });
    }

    res.json({
      success: true,
      user: updatedUser,
      message: "User Updated Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

//* Delete

export default router;
