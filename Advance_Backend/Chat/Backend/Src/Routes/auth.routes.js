import express from  "express"
import { login, logout, signup, updateProfile } from "../Controllers/auth.controller.js";

const router = express.Router();

//? Routes Related to User Will be 

//* 1. SignUp

router.post("/signup",signup);


//* 2. Login

router.post("/login",login);


//* 3. LogOut

router.post("/logout",logout);


//* 4. Update-Profile

router.put("/update-profile",updateProfile)


export default router;