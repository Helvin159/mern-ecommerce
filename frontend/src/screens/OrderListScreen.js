import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { deleteOrder, listOrders } from "../actions/orderActions";
// import { ORDER_DETAILS_RESET } from "../constants/orderConstants";

const UserListScreen = ({ history }) => {
	const dispatch = useDispatch();

	const orderList = useSelector((state) => state.orderList);
	const { loading, error, orders } = orderList;

	const orderDetails = useSelector((state) => state.orderDetails);
	const { success: successOrder } = orderDetails;
	if (successOrder) {
		console.log("True");
	}

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const orderDelete = useSelector((state) => state.orderDelete);
	const { success: successDelete } = orderDelete;

	useEffect(
		() => {
			// if (successOrder) {
			// 	dispatch({ type: ORDER_DETAILS_RESET });
			// 	console.log("Previous order removed from view order state");
			// }

			if (userInfo && userInfo.isAdmin) {
				dispatch(listOrders());
			}
			else {
				history.push("/login");
			}
		},
		[
			dispatch,
			history,
			userInfo,
			successDelete,
			// successOrder,
		]
	);

	const deleteHandler = (id) => {
		if (window.confirm("Are you sure?")) {
			dispatch(deleteOrder(id));
		}
	};

	return (
		<div>
			<h1>Orders</h1>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<Table>
					<thead>
						<tr>
							<th>ID</th>
							<th>User</th>

							<th>Total</th>
							<th>Paid</th>
							<th>Delivered</th>

							<th>Payment Method</th>
						</tr>
					</thead>
					<tbody>
						{orders.map((order) => (
							<tr key={order._id}>
								<td>
									<LinkContainer to={`/order/${order._id}`}>
										<Button>{order._id.substring(0, 7)}...</Button>
									</LinkContainer>
								</td>
								<td>{order.user && order.user.name}</td>

								<td>{order.totalPrice}</td>
								<td>
									{order.isPaid ? "Paid" : "Not Paid"}{" "}
									{order.paidAt && `on ${order.paidAt.substring(0, 10)}`}
								</td>
								<td>
									{order.isDelivered ? (
										`Delivered on ${order.deliveredAt.substring(0, 10)}`
									) : (
										"Not Delivered"
									)}
								</td>
								<td>{order.paymentMethod}</td>

								<td>
									<LinkContainer to={`/admin/user/${order._id}/edit`}>
										<Button variant='light' className='btn-sm'>
											<i className='fas fa-edit' />
										</Button>
									</LinkContainer>

									<Button
										variant='danger'
										className='btn-sm'
										onClick={() => deleteHandler(order._id)}>
										<i className='fas fa-trash' />
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			)}
		</div>
	);
};

export default UserListScreen;
