import crypto from 'crypto';
export const generateToken = ()=>{
  return crypto.randomBytes(16).toString("hex");
}

export const verifyToken =(token)=>{
  // * Here token is already written into Public route
  return token.length === 32;
}