import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @Desc Fetch All Products
// @Route Get /api/products
// @Access Public Route
const getProducts = asyncHandler(async (req, res) => {
	const products = await Product.find();

	res.json(products);
});

// @Desc Fetch Single Product
// @Route Get /api/products/:id
// @Access Public Route
const getProductById = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);

	if (product) {
		res.json(product);
	}
	else {
		res.status(404);
		throw new Error("Product not found");
	}
});

export { getProducts, getProductById };
