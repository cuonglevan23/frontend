import { useEffect, useState } from "react";
import axios from "../lib/axios";
import { toast, ToastContainer } from "react-toastify";
import { notifyError, notifySuccess } from "../lib/notify";
import "react-toastify/dist/ReactToastify.css";
import OutLineBg from "../OutLineBg";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [user, setUser] = useState({});
  const [orders, setOrders] = useState([]);
  const [byPoint, setByPoint] = useState(false);
  const navigate = useNavigate();
  const items = JSON.parse(localStorage.getItem("items"));
  const handleGetUser = () => {
    setUser(items);
    handleGetOrder(items._id);
  };
  const handleGetOrder = async (id) => {
    const res = await axios.get(`/order/${id}`);
    setOrders(res.data.orders);
  };

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

  if (orders[0]?.idProduct.byPoint) {
    setByPoint(true);
  }
  const bill = `
      <div className="ps-checkout__order" style="margin-bottom: 30px;
      background-color: #000000;
      width: 450px;">
      <header style=" 
       margin-bottom: 10px;
      padding: 20px 30px;
      border-bottom: 1px solid #4d4d4d;">
        <h3 style="margin-bottom: 0;
        font-family: "Archivo Narrow", sans-serif;
        font-size: 20px;
        line-height: 1.8;
        color: #ffffff;
        text-transform: uppercase;">ĐƠN HÀNG CỦA BẠN</h3>
      </header>
      <div className="content" style="padding: 0 30px 20px;">
        <table className="table ps-checkout__products">
          <thead>
            <tr>
              <th className="text-uppercase" style="color: #fff;
              text-transform: uppercase;
              font-size: 16px;
              border-bottom: none;
              font-weight: 600;">Sản Phẩm</th>
              <th style="color: #fff;
              text-transform: uppercase;
              font-size: 16px;
              border-bottom: none;
              font-weight: 600;"className="text-uppercase">Tổng</th>
            </tr>
          </thead>
          <tbody>
    ${orders?.map(
      (order) =>
        `<tr style="color:"white">
        <td style=" border-bottom: none;
        font-family: "Montserrat", sans-serif;
        font-size: 14px;
        color: #fff;
        border-top: none;">
          ${order?.idProduct.name} x${order?.quantity}
        </td>
        <td style=" border-bottom: none;
        font-family: "Montserrat", sans-serif;
        font-size: 14px;
        color: #fff;
        border-top: none;">
          ${Number(order?.idProduct.price * Number(order?.quantity))}
          ${byPoint ? "Điểm" : "Đồng"}
        </td>
      </tr>
      `
    )}
  <tr>
  <td style=" border-bottom: none;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  color: #fff;
  border-top: none;">Tổng giá trị</td>
  <td style=" border-bottom: none;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  color: #fff;
  border-top: none;">
      ${showPoint()} ${byPoint ? "Điểm" : "Đồng"}
    </td>
  </tr>
        </tbody>
      </table>
    </div>
  </div>

  `;

  const handleSendMail = async () => {
    try {
      await axios.post("/order/send-mail", {
        email: items.email,
        content: "Đơn hàng đã được gửi để chờ xác nhận",
        html: bill,
      });
      notifySuccess("Vui lòng truy cập email để xem chi tiết đơn hàng!");
    } catch (error) {
      notifyError("Mời bạn kiểm tra lại email");
    }
  };
  const handleBuy = async () => {
    try {
      orders.map(async (order) => {
        const res = await axios.post("/order/isPay", {
          id: order._id,
        });
      });
      await handleSendMail();
      await axios.post("/users/add-point", {
        id: items._id,
        point: 100,
      });
      notifySuccess("Mua hàng thành công, Vui lòng chờ xác nhận");
      notifySuccess("Bạn được cộng 100 điểm");
      setTimeout(() => {
        navigate(`${byPoint ? "/uu-dai-doi-diem" : "/gio-hang"}`);
      }, 2000);
    } catch (error) {
      notifyError("Mua hàng thất bại");
    }
  };

  useEffect(() => {
    handleGetUser();
  }, []);
  return (
    <>
      <ToastContainer />
      <OutLineBg>
        <main className="ps-main">
          <div className="ps-checkout pt-80 pb-80">
            <div className="ps-container">
              <form
                className="ps-checkout__form"
                action="do_action"
                method="post"
              >
                <div className="row">
                  <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 ">
                    <div className="ps-checkout__billing">
                      <h3>CHI TIẾT THANH TOÁN</h3>
                      <div className="form-group form-group--inline">
                        <label>
                          Họ<span>*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          value={user.firstName}
                        />
                      </div>
                      <div className="form-group form-group--inline">
                        <label>
                          Tên<span>*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          value={user.lastName}
                        />
                      </div>

                      <div className="form-group form-group--inline">
                        <label>
                          Email <span>*</span>
                        </label>
                        <input
                          className="form-control"
                          type="email"
                          value={user.email}
                        />
                      </div>

                      <div className="form-group form-group--inline">
                        <label>
                          Số điện thoại<span>*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          value={user.phone_number}
                        />
                      </div>
                      <div className="form-group form-group--inline">
                        <label>
                          Địa chỉ<span>*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          value={user.address}
                        />
                      </div>

                      <h3 className="mt-40"> THÔNG TIN BỔ SUNG</h3>
                      <div className="form-group form-group--inline textarea">
                        <label>Ghi chú</label>
                        <textarea
                          className="form-control"
                          rows={5}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                    <div className="ps-checkout__order">
                      <header>
                        <h3>ĐƠN HÀNG CỦA BẠN</h3>
                      </header>
                      <div className="content">
                        <table className="table ps-checkout__products">
                          <thead>
                            <tr>
                              <th className="text-uppercase">Sản Phẩm</th>
                              <th className="text-uppercase">Tổng</th>
                            </tr>
                          </thead>
                          <tbody>
                            {orders?.map((order) => (
                              <tr>
                                <td>
                                  {order.idProduct.name} x{order.quantity}
                                </td>
                                <td>
                                  {Number(
                                    order.idProduct.price *
                                      Number(order.quantity)
                                  )}{" "}
                                  {byPoint ? "Điểm" : "Đồng"}
                                </td>
                              </tr>
                            ))}
                            <tr>
                              <td>Tổng giá trị</td>
                              <td>
                                {showPoint()} {byPoint ? "Điểm" : "Đồng"}
                              </td>
                            </tr>
                            <tr>
                              <td>Điểm nhận được</td>
                              <td>100 điểm</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <footer>
                        <h3>Phương thức thanh toán</h3>
                        <div className="form-group cheque">
                          <div className="ps-radio">
                            <input
                              className="form-control"
                              type="radio"
                              id="rdo01"
                              name="payment"
                              defaultChecked
                            />
                            <label htmlFor="rdo01">
                              Giao hàng tận nhà – Trả tiền trực tiếp
                            </label>
                            <p>
                              Trả tiền mặt cho người giao hàng (thu tiền hộ COD)
                            </p>
                          </div>
                        </div>
                        <div className="form-group paypal">
                          <div className="ps-radio ps-radio--inline">
                            <input
                              className="form-control"
                              type="radio"
                              name="payment"
                              id="rdo02"
                            />
                            <label htmlFor="rdo02">Paypal</label>
                          </div>
                          <ul className="ps-payment-method">
                            <li>
                              <a href="#">
                                <img src="./img/payment/1.png" alt />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src="./img/payment/2.png" alt />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src="./img/payment/3.png" alt />
                              </a>
                            </li>
                          </ul>
                          <button
                            className="ps-btn ps-btn--fullwidth"
                            onClick={handleBuy}
                            type="button"
                          >
                            Đặt Hàng
                            <i className="ps-icon-next" />
                          </button>
                        </div>
                      </footer>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>
      </OutLineBg>
    </>
  );
};
export default Checkout;
