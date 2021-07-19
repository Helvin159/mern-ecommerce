import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import Product from "../models/productModel.js";

// @Desc Fetch All Products
// @Route Get /api/products
// @Access Public Route
router.get(
	"/",
	asyncHandler(async (req, res) => {
		const products = await Product.find({});
		res.json(products);
	})
);

// @Desc Fetch Single Product
// @Route Get /api/products/:id
// @Access Public Route
router.get(
	"/:id",
	asyncHandler(async (req, res) => {
		const product = await Product.findById(req.params.id);

		if (product) {
			res.json(product);
		}
		else {
			res.status(404);
			throw new Error("Product not found");
		}
	})
);

export default router;
