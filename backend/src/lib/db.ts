import { config } from "../config/config.js";
import mongoose from "mongoose";

mongoose.connect(config.DB_URL);

const catSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const catModel = mongoose.model("Cat", catSchema);
