import { model, Schema } from "mongoose";
import mongoose from "mongoose";
const DeleteSchema = new mongoose.Schema({
  title: String,
  status: Boolean,
  team: String,
  Action: String,
  date: String,
});
export const DeletedModel =
  mongoose.models.deleted || mongoose.model("deleted", DeleteSchema);
