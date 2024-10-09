import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String,
});

const UserModel = model("User", userSchema);

export default UserModel;
