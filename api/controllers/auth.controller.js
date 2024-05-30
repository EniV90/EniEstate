import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  // hashpassword
  const hashpassword = bcryptjs.hashSync(password, 10);
  //to save new user in db
  const newUser = new User({ username, email, password: hashpassword });
  try {
    await newUser.save();
    //response
    res.status(201).json("user created successfully!");
  } catch (error) {
    next(error);
  }
};
