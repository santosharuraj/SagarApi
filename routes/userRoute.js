import express from "express";
import { GetAPI, PostAPI } from "../controller/userController.js";

const route = express.Router();

route.post("/", PostAPI);
route.get("/:id", GetAPI);
export default route;