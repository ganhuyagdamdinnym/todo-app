import { model, Schema } from "mongoose";
import mongoose from "mongoose";
const todoSchema = new Schema({
  title: String,
  status: Boolean,
  team: String,
  date: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
export const TodoModel =
  mongoose.models.todo || mongoose.model("todo", todoSchema);
