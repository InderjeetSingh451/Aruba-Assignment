import express from "express";
import cors from "cors";
import "dotenv/config";
import dbConnect from "./connections/db.js";
import userRouter from "./routes/userRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConnect();

app.use("/api", userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
