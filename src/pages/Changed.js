import { useEffect, useState } from "react";
import axios from "../lib/axios";
import OutLineBg from "../OutLineBg";
import Row from "./Row";

const Changed = () => {
  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState(0);
  const handleGetAllCart = async () => {
    const items = JSON.parse(localStorage.getItem("items"));
    const res = await axios.post(`/order/order-point-accept`, {
      id: items._id,
    });
    setOrders(res.data.orders);
  };

  useEffect(() => {
    handleGetAllCart();
  }, []);

  return (
    <>
      <OutLineBg>
        <main className="ps-main">
          <div className="ps-content pt-80 pb-80">
            <div className="ps-container">
              <div className="ps-cart-listing">
                <table className="table ps-cart__table">
                  <thead>
                    <tr>
                      <th>Ữu Đãi Đã Đổi</th>
                      <th>Giá</th>
                      <th>Số Lượng</th>
                      <th>Tổng</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr>
                        <td>
                          <a className="ps-product__preview" href="/">
                            <img
                              style={{ width: 70, height: 70 }}
                              className="mr-15"
                              src={order.idProduct.imgProduct}
                              alt
                            />{" "}
                            {order.idProduct.name}
                          </a>
                        </td>
                        <td>{order.idProduct.price} ĐIỂM</td>
                        <td>
                          <div className="form-group--number">
                            <input
                              className="form-control"
                              type="text"
                              value={order.quantity}
                            />
                          </div>
                        </td>
                        <td>
                          {Number(order.idProduct.price) *
                            Number(order.quantity)}{" "}
                          ĐIỂM
                        </td>
                        <td>
                          <div className="ps-remove" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="ps-cart__actions">
                  <div className="ps-cart__promotion"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </OutLineBg>
    </>
  );
};
export default Changed;
