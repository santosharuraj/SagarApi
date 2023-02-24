import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";

dotenv.config();
const app = express();
app.use(express.json({ extented: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const PORT = process.env.PORT || 4000;
const MongoDB_URL =
    "mongodb+srv://santosh:santosh@cluster0.xsonw5h.mongodb.net/Users?retryWrites=true&w=majority";
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