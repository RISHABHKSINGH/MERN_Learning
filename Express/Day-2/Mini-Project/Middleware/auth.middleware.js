import {verifyToken} from '../Utilities/token-utilities.js'
const authMiddleware = (req,res,next)=>{
  const token = req.headers.authorization;

  if(token && verifyToken(token)){
    req.user = {Name:"Rishabh",ID:1}
    next();
  }
  else{
    res.status(401).send("Unauthorized Access or Missing Access Token")
  }
}

export default authMiddleware;