import OutLineBg from "../OutLineBg";

const Checkout = () => {
    return (
        <>
            <OutLineBg>
                <main className="ps-main">
                    <div className="ps-checkout pt-80 pb-80">
                        <div className="ps-container">
                            <form className="ps-checkout__form" action="do_action" method="post">
                                <div className="row">
                                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 ">
                                        <div className="ps-checkout__billing">
                                            <h3>CHI TIẾT THANH TOÁN</h3>
                                            <div className="form-group form-group--inline">
                                                <label>Họ<span>*</span>
                                                </label>
                                                <input className="form-control" type="text" />
                                            </div>
                                            <div className="form-group form-group--inline">
                                                <label>Tên<span>*</span>
                                                </label>
                                                <input className="form-control" type="text" />
                                            </div>

                                            <div className="form-group form-group--inline">
                                                <label>Email <span>*</span>
                                                </label>
                                                <input className="form-control" type="email" />
                                            </div>

                                            <div className="form-group form-group--inline">
                                                <label>Số điện thoại<span>*</span>
                                                </label>
                                                <input className="form-control" type="text" />
                                            </div>
                                            <div className="form-group form-group--inline">
                                                <label>Địa chỉ<span>*</span>
                                                </label>
                                                <input className="form-control" type="text" />
                                            </div>

                                            <h3 className="mt-40"> THÔNG TIN BỔ SUNG</h3>
                                            <div className="form-group form-group--inline textarea">
                                                <label>Ghi chú</label>
                                                <textarea className="form-control" rows={5} defaultValue={""} />
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
                                                        <tr>
                                                            <td>HABITANT x1</td>
                                                            <td>$300.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Tổng giá trị</td>
                                                            <td>$300.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Điểm nhận được</td>
                                                            <td>10.000 điểm</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <footer>
                                                <h3>Phương thức thanh toán</h3>
                                                <div className="form-group cheque">
                                                    <div className="ps-radio">
                                                        <input className="form-control" type="radio" id="rdo01" name="payment" defaultChecked />
                                                        <label htmlFor="rdo01">Giao hàng tận nhà – Trả tiền trực tiếp</label>
                                                        <p>Trả tiền mặt cho người giao hàng (thu tiền hộ COD)</p>
                                                    </div>
                                                </div>
                                                <div className="form-group paypal">
                                                    <div className="ps-radio ps-radio--inline">
                                                        <input className="form-control" type="radio" name="payment" id="rdo02" />
                                                        <label htmlFor="rdo02">Paypal</label>
                                                    </div>
                                                    <ul className="ps-payment-method">
                                                        <li><a href="#"><img src="./img/payment/1.png" alt /></a></li>
                                                        <li><a href="#"><img src="./img/payment/2.png" alt /></a></li>
                                                        <li><a href="#"><img src="./img/payment/3.png" alt /></a></li>
                                                    </ul>
                                                    <button className="ps-btn ps-btn--fullwidth">Đặt Hàng<i className="ps-icon-next" /></button>
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
    )
}
export default Checkout;