import bcrypt from "bcrypt";
import { serialize } from "cookie";
import user from "@/src/models/user";
import dbConnect from "@/src/config/dbConnect";
import { GenAccessToken } from "@/src/helpers/jwt";

export default async function handler(req, res) {
  dbConnect();

  try {
    const { username, password } = req.body;

    if (!username || !password) {
      res.status(400).json({
        success: false,
        message: "Username & Password is required",
      });
      return;
    }

    const foundUser = await user.findOne({ username });

    if (!foundUser) {
      res.status(400).json({
        success: false,
        message: "Invalid username or password",
      });
      return;
    }

    const IsPasswordValid = await bcrypt.compare(password, foundUser?.password);

    if (!IsPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid Password",
      });
    }

    const AccessToken = await GenAccessToken({
      id: foundUser._id,
    });

    res.setHeader(
      "Set-Cookie",
      serialize("AccessToken", AccessToken, {
        path: "/",
        httpOnly: true,
        secure: true,
      })
    );

    var user = {
      id: foundUser._id,
      username: foundUser.username,
    };

    res.status(201).json({
      user,
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
