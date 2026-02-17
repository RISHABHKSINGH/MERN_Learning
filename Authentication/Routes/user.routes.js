import express from 'express'
import { login, logout, signup } from '../Controller/user.controller.js';

const router = express.Router();

//SIGNUP ROUTE
router.post("/signup",signup)

//LOGIN ROUTE
router.post("/login",login)

//LOGOUT ROUTE
router.post("/logout",logout)


export default router;