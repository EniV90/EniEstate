import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import userRouter from "./routes/user.routes.js";

mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log("server running on port 3000");
});

app.use("/api/user", userRouter);
