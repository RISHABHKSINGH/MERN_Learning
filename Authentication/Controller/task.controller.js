import { createTask, getTask } from "../Services/task.service.js";



export const addTask = async(req,res)=>{
  const {title,description} = req.body;

  try {
    const task = await createTask(req.session.userId,title,description)
    res.status(201).json({
      success:true,
      message:"Task created Successfully",
      data:task
    })
  } catch (error) {
    res.status(500).json({
      success:false,
      message:"Error in creating Task",
      error:error.message
    })
  }
}

export const fetchTasks = async(req,res)=>{
  try{
    const tasks= await getTask(req.session.userId);
    res.status(200).json(tasks)

  } catch (error) {
    res.status(500).json({
      success:false,
      message:"Error in Fetching Task",
      error:error.message
    })
  }
}

