import express from "express";
import { GetAPI, PostAPI, allUser } from "../controller/userController.js";

const route = express.Router();

route.post("/", PostAPI);
route.get("/v1/alldetails", allUser);
route.get("/:id", GetAPI);

export default route;