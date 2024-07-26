import mongoose from "mongoose";

export default function dbConnect() {
  try {
    if (mongoose.connection.readyState >= 1) {
      return;
    }

    mongoose.connect(process.env.DB_URL);
  } catch (error) {
    console.log("MongoDB has thrown an error while connection");
  }
}
