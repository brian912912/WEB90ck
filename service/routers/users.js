import { Router } from "express";
import { login, register } from "../controllers/users.js";

const usersRouter = Router();

usersRouter.post("/register", register); // http://localhost:8080/users/register
usersRouter.post("/login", login);

export default usersRouter;
