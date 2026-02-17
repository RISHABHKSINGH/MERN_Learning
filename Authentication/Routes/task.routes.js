import express from 'express'
import { addTask, fetchTasks } from '../Controller/task.controller.js';
import { validateSession } from '../Middleware/session.middleware.js';
const router = express.Router();

router.post("/",validateSession,addTask);
router.get("/",validateSession,fetchTasks);


export default router;