import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";

mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("server running on port 3000");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
