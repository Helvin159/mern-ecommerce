import express from "express";

import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import colors from "colors";

import productRoutes from "./routes/productRoute.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

// Connect to database
connectDB();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
	res.send("api is running");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`server running ${process.env.NODE_ENV} mode on ${PORT}`.blue.bold
	)
);
