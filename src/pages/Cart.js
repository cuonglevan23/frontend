import OutLineBg from "../OutLineBg";

const Cart = () => {
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
                                            <th>Sản Phẩm </th>
                                            <th>Giá</th>
                                            <th>Số Lượng</th>
                                            <th>Tổng</th>
                                            <th>Điểm Nhận Được</th>
                                            <th />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><a className="ps-product__preview" href="/"><img className="mr-15" src="/" alt /> air jordan One mid</a></td>
                                            <td>$150</td>
                                            <td>
                                                <div className="form-group--number">
                                                    <button className="minus"><span>-</span></button>
                                                    <input className="form-control" type="text" defaultValue={2} />
                                                    <button className="plus"><span>+</span></button>
                                                </div>
                                            </td>
                                            <td>$300</td>
                                            <td>1.500 điểm</td>
                                            <td>
                                                <div className="ps-remove" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a className="ps-product__preview" href="product-detail.html"><img className="mr-15" src="images/product/cart-preview/2.jpg" alt /> The Crusty Croissant</a></td>
                                            <td>$150</td>
                                            <td>
                                                <div className="form-group--number">
                                                    <button className="minus"><span>-</span></button>
                                                    <input className="form-control" type="text" defaultValue={2} />
                                                    <button className="plus"><span>+</span></button>
                                                </div>
                                            </td>
                                            <td>$300</td>
                                            <td>1.000 điểm</td>
                                            <td>
                                                <div className="ps-remove" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a className="ps-product__preview" href="product-detail.html"><img className="mr-15" src="images/product/cart-preview/3.jpg" alt />The Rolling Pin</a></td>
                                            <td>$150</td>

                                            <td>
                                                <div className="form-group--number">
                                                    <button className="minus"><span>-</span></button>
                                                    <input className="form-control" type="text" defaultValue={2} />
                                                    <button className="plus"><span>+</span></button>
                                                </div>
                                            </td>
                                            <td>$300</td>
                                            <td>1.000 điểm</td>
                                            <td>
                                                <div className="ps-remove" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
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
                                        <tr>
                                            <td><a className="ps-product__preview" href="/"><img className="mr-15" src="/" alt /> air jordan One mid</a></td>
                                            <td>$150</td>
                                            <td>
                                                <div className="form-group--number">
                                                    
                                                    <input className="form-control" type="text" defaultValue={2} />
                                                   
                                                </div>
                                            </td>
                                            <td>$300</td>
                                            <td>
                                                <div className="ps-remove" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a className="ps-product__preview" href="product-detail.html"><img className="mr-15" src="images/product/cart-preview/2.jpg" alt /> The Crusty Croissant</a></td>
                                            <td>$150</td>
                                            <td>
                                                <div className="form-group--number">
                                                   
                                                    <input className="form-control" type="text" defaultValue={2} />
                                                
                                                </div>
                                            </td>
                                            <td>$300</td>
                                            <td>
                                                <div className="ps-remove" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a className="ps-product__preview" href="product-detail.html"><img className="mr-15" src="images/product/cart-preview/3.jpg" alt />The Rolling Pin</a></td>
                                            <td>$150</td>
                                            <td>
                                                <div className="form-group--number">
                                        
                                                    <input className="form-control" type="text" defaultValue={2} />
                                                
                                                </div>
                                            </td>
                                            <td>$300</td>
                                            <td>
                                                <div className="ps-remove" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="ps-cart__actions">
                                    <div className="ps-cart__promotion">
                                        <div className="form-group">
                                            <div className="ps-form--icon"><i className="fa fa-angle-right" />
                                                <input className="form-control" type="text" placeholder="Promo Code" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <button className="ps-btn ps-btn--gray">Continue Shopping</button>
                                        </div>
                                    </div>
                                    <div className="ps-cart__total">
                                        <h3>Total Price: <span> 2599.00 $</span></h3><a className="ps-btn" href="">Process to checkout<i className="ps-icon-next" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </main>


            </OutLineBg>
        </>
    )
}
export default Cart;