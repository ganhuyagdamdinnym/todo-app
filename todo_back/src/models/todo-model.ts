import { model, Schema } from "mongoose";
import mongoose from "mongoose";
const TodoSchema = new mongoose.Schema({
  title: String,
  status: Boolean,
  team: String,
  Action: String,
  date: String,
});
export const TodoModel =
  mongoose.models.todo || mongoose.model("todo", TodoSchema);
