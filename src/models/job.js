import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    position: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      trim: true,
    },
    experience: {
      type: String,
      required: true,
    },
    category:{
      type:String,
    },
    company:{
      type:String
    }
  },
  { timestamps: true }
);

export default mongoose?.models?.jobs || mongoose?.model("jobs", jobSchema);
