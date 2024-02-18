import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const mongoDB = process.env.MONGODB_URL;
mongoose
  .connect(mongoDB)
  .then(() => {
    console.log("Connected to MOngoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000!!! no light");
});
