import jwt from "jsonwebtoken";

// middleware for user auth
const authUser = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.token;
  if (!authHeader) {
    return res
      .status(401)
      .json({ success: false, message: "User not logged in" });
  }

  const token = authHeader.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : authHeader;

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = token_decode.id;
    next();
  } catch (error) {
    console.error(error);
    return res
      .status(401)
      .json({ success: false, message: "Invalid or expired token" });
  }
};

export default authUser;
