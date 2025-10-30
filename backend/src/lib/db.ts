// import MongoClient from "mongodb";
import { config } from "../config/config.js";
import mongoose from "mongoose"

mongoose.connect(config.DB_URL);

const catSchema = new mongoose.Schema({
    name:String
    
});

const catModel = mongoose.model("cat", catSchema)

// export const dbClient = new MongoClient(config.DB_URL);