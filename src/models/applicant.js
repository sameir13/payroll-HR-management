import mongoose from "mongoose";

const applicantSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required!"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Last name is required!"],
      trim: true,
    },

    title: {
      type: String,
    },

    email: {
      type: String,
      required: [true, "Email is required!"],
    },

    contact: {
      type: String,
      required: [true, "Contact number is required!"],
    },

    country: {
      type: String,
      required: [true, "Country name is required!"],
    },

    city: {
      type: String,
      required: [true, "City name is required!"],
    },

    resume: {
      type: String,
      required: [true, "Please upload the resume!"],
    },

    dateForInterview: {
      type: String,
    },

    isContacted: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export default mongoose?.models?.applicants ||
  mongoose.model("applicants", applicantSchema);
