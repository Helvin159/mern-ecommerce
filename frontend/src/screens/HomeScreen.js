import React from "react";
import products from "../products";
import Product from "../components/Product.js";
import { Row, Col } from "react-bootstrap";

const HomeScreen = () => {
	return (
		<div>
			<h1 className='py-3'>Latest Products</h1>
			<Row>
				{products.map((product) => (
					<Col sm={12} md={6} lg={4} xl={3} key={product._id}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</div>
	);
};

export default HomeScreen;
