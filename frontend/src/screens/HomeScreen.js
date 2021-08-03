import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Spinner from "../components/Loader";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import { listProducts } from "../actions/productActions";
import Meta from "../components/Meta";

const HomeScreen = ({ match }) => {
	const keyword = match.params.keyword;

	const pageNumber = match.params.pageNumber || 1;

	const dispatch = useDispatch();
	const productList = useSelector((state) => state.productList);
	const { loading, error, products, page, pages } = productList;

	useEffect(
		() => {
			dispatch(listProducts(keyword, pageNumber));
		},
		[
			dispatch,
			keyword,
			pageNumber,
		]
	);

	return (
		<div>
			<Meta />
			{!keyword ? (
				<ProductCarousel />
			) : (
				<Link to='/' className='btn btn-light'>
					Go Back
				</Link>
			)}
			<h1 className='py-3'>Latest Products</h1>
			{loading ? (
				<Spinner />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<div>
					<Row>
						{products.map((product) => (
							<Col sm={12} md={6} lg={4} xl={3} key={product._id}>
								<Product product={product} />
							</Col>
						))}
					</Row>
					<Paginate pages={pages} page={page} />
				</div>
			)}
		</div>
	);
};

export default HomeScreen;
