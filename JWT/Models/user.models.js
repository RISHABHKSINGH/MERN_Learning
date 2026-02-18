import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Hashing Password Before Saving( in different way)
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  //* no need of next in modern js
  // next();
});

// Comparing the password here only 
userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password,this.password)
}


//Exporting the Model
export default mongoose.model("User",userSchema)