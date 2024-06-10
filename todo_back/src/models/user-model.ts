import { model, Schema } from "mongoose";
import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  email: String,
  name: String,
  password: String,
});
export const UserModel =
  mongoose.models.user || mongoose.model("user", UserSchema);
