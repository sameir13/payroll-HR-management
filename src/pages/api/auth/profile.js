import user from "@/src/models/user";
import dbConnect from "@/src/config/dbConnect";

export default async function handler(req, res) {
  dbConnect();

  try {
    var id = JSON.parse(atob(req.cookies.AccessToken.split(".")[1])).id;

    const foundUser = await user.findById(id, { password: false });

    if (!foundUser) {
      res.status(400).json({
        success: false,
        message: "Profile not Found!",
      });
      return;
    }

    res.status(200).json({
      message: foundUser,
      success: true,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
