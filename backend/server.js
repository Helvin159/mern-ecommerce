import express from "express";
import productRoutes from "./routes/productRoute.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import colors from "colors";

dotenv.config();

// Connect to database
connectDB();

const app = express();

app.get("/", (req, res) => {
	res.send("api is running");
});

app.use("/api/products", productRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`server running ${process.env.NODE_ENV} mode on ${PORT}`.blue.bold
	)
);
