import express from "express";
const router = express.Router();
import {
	getProductById,
	getProducts,
	deleteProduct,
	createProduct,
	updateProduct,
	createProductReview,
	getTopProducts,
} from "../controllers/productController.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";

// @Desc Fetch All Products
// @Route Get /api/products
// @Access Public Route
router.route("/").get(getProducts).post(protect, isAdmin, createProduct);
router.route("/:id/reviews").post(protect, createProductReview);
router.get("/top", getTopProducts);

// @Desc Fetch Single Product
// @Route Get /api/products/:id
// @Access Public Route
router
	.route("/:id")
	.get(getProductById)
	.delete(protect, isAdmin, deleteProduct)
	.put(protect, isAdmin, updateProduct);

export default router;
