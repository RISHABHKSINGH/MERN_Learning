import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

//* Instead of CreatedAt and Updated at Simply Use Timestamp and make it true it will work on the behalf of both

export const  User = mongoose.model("User", userSchema);
