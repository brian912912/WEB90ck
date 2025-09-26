import { Router } from "express";
import { authLogin, authRegister } from "../controllers/auth.js";
import validBodyRequest from "../middlewares/valid-body.js";
import { authLoginSchema, authRegisterSchema } from "../schemas/auth.schema.js";

const authRouter = Router();

authRouter.post("/register", validBodyRequest(authRegisterSchema), authRegister);
authRouter.post("/login", validBodyRequest(authLoginSchema), authLogin);

export default authRouter;          