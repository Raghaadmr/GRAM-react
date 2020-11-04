import React from "react";
import { connect } from "react-redux";
import OrderCard from "./OrderCard";

const OrderList = ({ orders }) => {
    // let orders = props.order;
    // let orders = [{"id":1,"uuid":"3fed9a87-2488-4c0b-8fbc-691f7d703d48","total":"4500.00","created_date":"2020-11-03T18:11:28.188550Z","tax":"15.00","address":1,"items":[{"id":1,"product_id":1,"name":"iPhone 12","featured_image":"https://www.jarir.com/media//catalog/product/5/5/556831.jpg","is_available":true,"price":4500.0,"qty":1,"line_item_total":"4500.00"},{"id":2,"product_id":2,"name":"Mac Book Pro with Touch bar","featured_image":"https://www.jarir.com/media//catalog/product/5/3/538330_2.jpg","is_available":true,"price":7000.0,"qty":1,"line_item_total":"7000.00"}]}]
    // send one item from list to display in card 
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