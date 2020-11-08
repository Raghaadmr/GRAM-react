import React from "react";
import { connect } from "react-redux";
import OrderCard from "./OrderCard";

const OrderList = ({ orders }) => {
    const orderCards = orders.map(order => (
        <OrderCard key={order.id} order={order} />
    ));

    return (
        <div className="container" style={{ textAlign: "center" }}>
            <div className="mt-2 mb-2">
                <h3> orderCards</h3>
                <div className="row">
                    {orderCards}
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = ({ orders }) => ({
    orders
});

export default connect(mapStateToProps)(OrderList);