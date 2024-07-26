import user from "@/src/models/user";
import bcrypt from "bcrypt";
import dbConnect from "@/src/config/dbConnect";

export default async function handler(req, res) {
  dbConnect();

  try {
    const { username, password } = req.body;

    if (!username) {
      res.status(400).json({
        success: false,
        message: "Username is required",
      });
      return;
    }

    if (!password) {
      res.status(400).json({
        success: false,
        message: "Password is required",
      });
      return;
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = await user.create({
      ...req.body,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: user,
    });
  } catch (error) {
    console.log(error);

    if (error?.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Username Already in Use",
      });
    }
    return;
  }
}
