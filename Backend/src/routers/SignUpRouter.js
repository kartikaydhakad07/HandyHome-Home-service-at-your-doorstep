import { Router } from "express";
import { registerUser } from "../controllers/SignUpController.js";

const signUpRouter  = Router();
signUpRouter.post("/createUser",registerUser);
export default signUpRouter;

