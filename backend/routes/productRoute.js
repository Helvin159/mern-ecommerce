import express from "express";
const router = express.Router();
import {
	getProductById,
	getProducts,
} from "../controllers/productController.js";

// @Desc Fetch All Products
// @Route Get /api/products
// @Access Public Route
router.route("/").get(getProducts);

// @Desc Fetch Single Product
// @Route Get /api/products/:id
// @Access Public Route
router.route("/:id").get(getProductById);

export default router;
