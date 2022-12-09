import React, { useState } from "react";
import axios from "../lib/axios";

const Row = ({ order, setStatusClick, deleted, price }) => {
  const [quantity, setQuantity] = useState(order.quantity);

  const handleAddQuantity = () => {
    order;
  };

  return (
    <tr>
      <td>
        <a className="ps-product__preview" href="/">
          <img
            className="mr-15"
            src={order.idProduct.imgProduct}
            alt
            style={{ width: 60 }}
          />
          {order.idProduct.name}
        </a>
      </td>
      <td>
        {order.idProduct.price} {price ? "Đồng" : "ĐIỂM"}
      </td>
      <td>
        <div className="form-group--number">
          {price && (
            <button
              className="minus"
              onClick={() => setQuantity((prev) => prev - 1)}
            >
              <span>-</span>
            </button>
          )}
          <input className="form-control" type="text" value={quantity} />
          {price && (
            <button
              className="plus"
              onClick={() => {
                setStatusClick(true);
                setQuantity((prev) => prev + 1);
              }}
            >
              <span>+</span>
            </button>
          )}
        </div>
      </td>
      <td>
        {quantity * Number(order.idProduct.price)} {price ? "Đồng" : "ĐIỂM"}
      </td>
      <td>
        <div className="ps-remove" onClick={() => deleted(order._id)} />
      </td>
    </tr>
  );
};

export default Row;
