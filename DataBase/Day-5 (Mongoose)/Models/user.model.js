//! Step-1 Creating User's Schema
import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: 50,
  },
  age: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//! Step-2 Making UserModel for our designed Schema and Exporting it

const UserModel = model("User", userSchema);

export default UserModel;

//! Step-3 Creating Routes
