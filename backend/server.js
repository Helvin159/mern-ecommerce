const express = require("express");
const products = require("./data/products");

const app = express();

app.get("/", (req, res) => {
	res.send("api is running");
});

app.get("/api/products", (req, res) => {
	res.json(products);
});

app.get("/api/products/:id", (req, res) => {
	const param = req.params.id;
	// console.log(res, param);

	const product = products.find((p) => p._id === param);
	res.json(product);
	console.log(product);
});

app.listen(5000, console.log("server running on port 5000"));
