import { useEffect, useState } from "react";
import axios from "../lib/axios";
import OutLineBg from "../OutLineBg";
import Row from "./Row";

const Buyed = () => {
  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState(0);
  const handleGetAllCart = async () => {
    const items = JSON.parse(localStorage.getItem("items"));
    const res = await axios.post(`/order/order-ispay`, {
      id: item._id,
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
                      <th>Điểm</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr>
                        <td>
                          <a className="ps-product__preview" href="/">
                            <img className="mr-15" src={order.imgProduct} alt />{" "}
                            {order.name}
                          </a>
                        </td>
                        <td>$150</td>
                        <td>
                          <div className="form-group--number">
                            <input
                              className="form-control"
                              type="text"
                              defaultValue={2}
                            />
                          </div>
                        </td>
                        <td>$300</td>
                        <td>
                          <div className="ps-remove" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="ps-cart__actions">
                  <div className="ps-cart__promotion">
                    <div className="form-group">
                      <div className="ps-form--icon">
                        <i className="fa fa-angle-right" />
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Promo Code"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <button className="ps-btn ps-btn--gray">
                        Continue Shopping
                      </button>
                    </div>
                  </div>
                  <div className="ps-cart__total">
                    <h3>
                      Tổng giá: <span> {total} ĐIỂM</span>
                    </h3>
                    <a className="ps-btn" href="">
                      Process to checkout
                      <i className="ps-icon-next" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </OutLineBg>
    </>
  );
};
export default Buyed;
