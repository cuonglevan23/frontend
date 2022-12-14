import { useEffect, useState } from "react";
import axios from "../lib/axios";
import { notifyError, notifySuccess } from "../lib/notify";
import "react-toastify/dist/ReactToastify.css";
import OutLineBg from "../OutLineBg";
import Row from "./Row";

const Buyed = () => {
  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState(0);
  const handleGetAllCart = async () => {
    const items = JSON.parse(localStorage.getItem("items"));
    const res = await axios.post(`/order/history`, {
      id: items._id,
    });
    setOrders(res.data.orders);
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`/order/${id}`);
      notifySuccess("Xoá sản phẩm ra khỏi giỏ hàng thành công");
      handleGetAllCart();
    } catch (error) {
      notifyError("Xóa sản phẩm ra khỏi giỏ hàng thất bại");
    }
  };

  const checkStatus = (status) => {
    if (status === 0) {
      return (
        <div
          style={{
            backgroundColor: "yellow",
            textAlign: "center",
            width: "70%",
          }}
        >
          Đang chờ xác nhận
        </div>
      );
    } else if (status === 1) {
      return (
        <div
          style={{
            backgroundColor: "green",
            textAlign: "center",
            width: "70%",
            color: "white",
          }}
        >
          Đã xác nhận
        </div>
      );
    } else if (status === 2) {
      return (
        <div
          style={{
            backgroundColor: "red",
            textAlign: "center",
            width: "70%",
            color: "white",
          }}
        >
          Đơn bị hủy
        </div>
      );
    }
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
                      <th>sản phẩm</th>
                      <th>Giá</th>
                      <th>Số Lượng</th>
                      <th>Trạng thái</th>
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
                              className="mr-15"
                              src={order.idProduct.imgProduct}
                              alt
                              style={{ width: 70, height: 70 }}
                            />{" "}
                            {order.idProduct.name}
                          </a>
                        </td>
                        <td>{order.idProduct.price} Đồng</td>
                        <td>
                          <div className="form-group--number">
                            <input
                              className="form-control"
                              type="text"
                              value={order.quantity}
                            />
                          </div>
                        </td>
                        <td>{checkStatus(order.isAccept)}</td>
                        <td>
                          {Number(order.idProduct.price) *
                            Number(order.quantity)}{" "}
                          Đồng
                        </td>
                        <td>
                          <div
                            className="ps-remove"
                            onClick={() => handleDelete(order._id)}
                            style={
                              order.isAccept === 0
                                ? { zIndex: -1, opacity: 0.5 }
                                : { zIndex: 2 }
                            }
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="ps-cart__actions"></div>
              </div>
            </div>
          </div>
        </main>
      </OutLineBg>
    </>
  );
};
export default Buyed;
