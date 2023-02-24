import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userModal from "./model/userModal.js";
import userRoute from "./routes/userRoute.js";
const app = express();
app.use(express.json({ extented: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const PORT = process.env.PORT || 4000;
const MongoDB_URL = "mongodb://localhost:27017/DBName";
mongoose.set("strictQuery", false);
mongoose
    .connect(MongoDB_URL, { useNewUrlParser: true })
    .then((result) => {
        app.listen(PORT, () => {
            console.log(`Port is running at ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });

app.use("/user/api", userRoute);