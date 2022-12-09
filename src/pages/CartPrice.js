import { useEffect, useState } from "react";
import axios from "../lib/axios";
import OutLineBg from "../OutLineBg";
import Row from "./Row";
import { ToastContainer, toast } from "react-toastify";

const CartPrice = () => {
  const [orders, setOrders] = useState([]);
  const [statusClick, setStatusClick] = useState(false);
  const [point, setPoint] = useState(0);
  const items = JSON.parse(localStorage.getItem("items"));

  const notifyError = (msg) => toast.error(msg);
  const notifySuccess = (msg) => toast.success(msg);

  const handleGetAllCart = async () => {
    const items = JSON.parse(localStorage.getItem("items"));
    const res = await axios.get(`/order/${items._id}`);
    setOrders(res.data.orders);
  };

  const handleBuy = async (id) => {
    try {
      orders.map(async (order) => {
        const res = await axios.post("/order/isPay", {
          id: order._id,
        });
      });
      await axios.post("/users/add-point", {
        id: items._id,
        point: 100,
      });
      notifySuccess("Mua hàng thành công, Vui lòng chờ xác nhận");
      notifySuccess("Bạn được cộng 100 điểm");
      handleGetAllCart();
    } catch (error) {
      notifyError("Mua hàng thất bại");
    }
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
  //   let total = 0;

  useEffect(() => {
    handleGetAllCart();
  }, []);

  useEffect(() => {
    if (statusClick) {
      showPoint();
      setStatusClick(false);
    }
  }, [statusClick]);

  const showPoint = () => {
    // let totalPoint = 0;
    if (orders.length > 0) {
      return orders.reduce(
        (total, item) => total + item.idProduct.price * item.quantity,
        0
      );
    }
    return 0;
  };

  return (
    <>
      <ToastContainer />
      <OutLineBg>
        <main className="ps-main">
          <div className="ps-content pt-80 pb-80">
            <div className="ps-container">
              <div className="ps-cart-listing">
                <table className="table ps-cart__table">
                  <thead>
                    <tr>
                      <th>Sản Phẩm </th>
                      <th>Giá</th>
                      <th>Số Lượng</th>
                      <th>Tổng</th>
                      {/* <th>Điểm Nhận Được</th> */}
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <Row
                        order={order}
                        setStatusClick={() => setStatusClick(true)}
                        deleted={handleDelete}
                        price={true}
                      />
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
                      Tổng giá:{" "}
                      <span>
                        {" "}
                        {showPoint() || (statusClick && showPoint())} Đồng
                      </span>
                    </h3>
                    <a className="ps-btn" onClick={handleBuy}>
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
export default CartPrice;
