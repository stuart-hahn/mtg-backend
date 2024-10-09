import { Request, Response } from "express";
import UserModel from "../models/userModel";

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, avatar } = req.body;

  try {
    // check if user exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // create new user
    const newUser = new UserModel({ name, email, avatar });
    await newUser.save();

    // respond with user data
    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        avatar: newUser.avatar,
      },
    });
  } catch (error: unknown) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: "Server error", error: errorMessage });
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = UserModel.find().select("-__v"); // exclude __v field
    res.status(200).json(users);
  } catch (error: unknown) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: "Server error", error: errorMessage });
  }
};
