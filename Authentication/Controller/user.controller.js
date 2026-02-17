import { loginUser, registerUser } from "../Services/user.service.js";

export const signup = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Here we are using registerUser in service file
    const user = await registerUser(username, password);
    res.status(201).json({
      success: true,
      message: "User Registered Successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error Signing Up",
      error: error.message,
    });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await loginUser(username, password);

    //* When we create the user it will automatically create an _id which we get in user (here one) that we will store into the session

    req.session.userId = user._id;
    res.status(200).json({
      success: true,
      message: "Login Successful",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error in  Logging In",
      error: error.message,
    });
  }
};

export const logout = () => {};
