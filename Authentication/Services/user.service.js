import bcrpyt from 'bcrypt';
import {User} from '../Models/user.models.js'

export const registerUser = async(username,password)=>{
  const hashPassword = await bcrpyt.hash(password,10);
  //* Never pass direct password always use hashPassword but in userModel we have given password not hashPassword so pass like this password:hashPassword
  const user = new User ({username,password:hashPassword})

  return await user.save();
}

export const loginUser = async(username,password)=>{
  const user = await User.findOne({username})

  if(!user||!(await bcrpyt.compare(password,user.password))){
    throw new Error("Invalid UserId or Password")
  }
  return user;
}