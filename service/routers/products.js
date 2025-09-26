import { Router } from "express";
import { createProduct } from "../controllers/products.js";
import authentication from "../middlewares/authentication.js";

const productsRouter = Router();

productsRouter.post("/create", authentication, createProduct);
// productsRouter.get("/", authentication, getProducts);
// productsRouter.get("/:id", authentication, getProductById);
// productsRouter.put("/:id", authentication, updateProduct);
// productsRouter.delete("/:id", authentication, deleteProduct);
 // http://localhost:8080/products/register
export default productsRouter;