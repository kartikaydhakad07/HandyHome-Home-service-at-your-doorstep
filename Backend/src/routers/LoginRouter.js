import { Router } from "express";

import { loginUser } from "../controllers/LoginController.js";

const loginRouter = Router();
loginRouter.post("/signIn", loginUser);
export default loginRouter;