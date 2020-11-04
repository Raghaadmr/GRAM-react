import React from "react";
import { connect } from "react-redux";
import { Redirect, useParams } from "react-router";
// import OrderCard from "./OrderCard";

const OrderDetail = ({ orders }) => {
    const { orderID } = useParams();
    const order = orders.find((order) => order.id === +orderID);
    // if (!order) return <Redirect to="/list/" />;

    return (
        <div className="container" style={{ textAlign: "center" }}>
            <div className="mt-2 mb-2">
                <h3> {order.id}</h3>
                <h3> {order.uuid}</h3>
                <h3> {order.created_date}</h3>
                <h3> {order.total}</h3>
            </div>
        </div>
    );
}

const mapStateToProps = ({ orders }) => ({
    orders
});


export default connect(mapStateToProps)(OrderDetail);