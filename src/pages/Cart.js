import { useEffect, useState } from "react";
import axios from "../lib/axios";
import OutLineBg from "../OutLineBg";
import Row from "./Row";
import { ToastContainer, toast } from "react-toastify";

const Cart = () => {
  const [orders, setOrders] = useState([]);
  const [statusClick, setStatusClick] = useState(false);
  const [point, setPoint] = useState(0);
  //   const handleGetPrice = async () => {
  //     const items = JSON.parse(localStorage.getItem("items"));
  //     const res = await axios.post("/users/price", {
  //       id: items._id,
  //     });

  //     setPoint(res.data.point);
  //   };
  const items = JSON.parse(localStorage.getItem("items"));
  const handleGetPrice = async () => {
    const res = await axios.post("/users/price", {
      id: items._id,
    });

    setPoint(res.data.point);
  };
  const notifyError = (msg) => toast.error(msg);
  const notifySuccess = (msg) => toast.success(msg);

  const handleGetAllCart = async () => {
    const items = JSON.parse(localStorage.getItem("items"));
    const res = await axios.post(`/order/order-by-point`, {
      id: items._id,
    });
    setOrders(res.data.orders);
    handleGetPrice();
  };

  const handleBuy = async (id) => {
    if (Number(point) < Number(showPoint())) {
      return notifyError("Bạn không đủ điểm để thanh toán!");
    }
    try {
      orders.map(async (order) => {
        await axios.post("/order/isPay", {
          id: order._id,
        });
      });
      await axios.post("/users/decrement-point", {
        id: items._id,
        point: showPoint(),
      });
      handleGetAllCart();
      notifySuccess(
        "Cảm ơn bạn đã góp phần làm thế giới sạch hơn, Vui lòng đợi xác nhận"
      );
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
                BẠN CÓ {point} ĐIỂM
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
                        price={false}
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
                        {showPoint() || (statusClick && showPoint())} Điểm
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
export default Cart;
