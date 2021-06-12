import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import { removeOrder } from "../redux/actions/ordersActions";

function Orders() {
  const orders = useSelector((state) => state.ordersReducer.orders);
  const dispatch = useDispatch();

  if (orders.length === 0) {
    return <h1 className="table-no-orders-color">You have no orders</h1>;
  }

  return (
    <div>
      <h2>Orders</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Phone Number</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Time</th>
            <th>Order Type</th>
            <th>Delete Order</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0
            ? orders.map((order, index) => {
                return (
                  <tr key={index}>
                    <th>{order.phoneNumber}</th>
                    <td>{order.name}</td>
                    <td>{order.lastName}</td>
                    <td>{order.address}</td>
                    <td>{order.email}</td>
                    <td>{order.time}</td>
                    <td>{order.type}</td>
                    <td>
                      <button
                        type="button"
                        className="btn-danger"
                        onClick={() => dispatch(removeOrder(order))}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
}

export default withRouter(Orders);
