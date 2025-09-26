import { Router } from "express";
import usersRouter from "../routers/users.js";
import productsRouter from "../routers/products.js";
import authRouter from "../routers/auth.js";
import authentication from "../middlewares/authentication.js";
        
const router = Router();

router.use("/users", authentication, usersRouter);
router.use("/products", authentication, productsRouter);
router.use("/auth", authRouter);
export default router;
