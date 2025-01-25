import mongoose from "mongoose";
import { title } from "process";

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  { 
    timestamps: true
    
  }
);

export const Todo = mongoose.model("Todo", todoSchema);
