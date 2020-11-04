import React from "react";
import { Link } from "react-router-dom";

const OrderCard = ({ order }) => {
    return (
        <div className="col-lg-4 col-md-6">
            <Link to={`/orders/${order.id}/`} className="card m-3" style={{ color: "black", }}>
                <div className="card-body">
                    <h5 className="card-title">
                        {order.uuid}
                    </h5>
                    <small className="card-text">Date :{order.created_date} </small>
                    <small className="card-text">id:{order.total} </small>
                </div>
            </Link>
        </div>
    );
};

export default OrderCard;