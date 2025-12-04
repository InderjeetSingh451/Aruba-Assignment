import express from "express";
import { userRegistration, userLogin } from "../controllers/userController.js";

const userRoute = express.Router();

// Register
userRoute.post("/user/sign", userRegistration);

// Login
userRoute.post("/user/login", userLogin);

export default userRoute;
