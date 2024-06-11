import { model, Schema } from "mongoose";
import mongoose from "mongoose";
const todoType = new Schema({
  title: String,
  status: Boolean,
  team: String,
  Action: String,
  date: String,
});
const UserSchema = new mongoose.Schema({
  email: { type: String, require: true, unique: true },
  name: String,
  password: String,
  todos: todoType,
});
export const UserModel =
  mongoose.models.user || mongoose.model("user", UserSchema);
