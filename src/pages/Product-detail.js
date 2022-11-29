import OutLineBg from "../OutLineBg";

const Productdetail = () => {
    return (
        <>
            <OutLineBg>
                <div className="box-products">

                    <div className="box-content">
                        <div className="container">
                            <nav className="woocommerce-breadcrumb"><a href="/">Trang chủ</a>&nbsp;/<a href="/">&nbsp;Sản phẩm&nbsp;/</a>&nbsp;ĐƯỜNG ĂN KIÊNG, ĐƯỜNG GIẢM CÂN (NHẬP KHẨU ĐỨC)</nav>

                        </div>
                    </div>
                </div>

                <main className="ps-main">
                    <div className="test">
                        <div className="container">

                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 ">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ps-product--detail pt-60">
                        <div className="ps-container">
                            <div className="row">
                                <div className="col-lg-10 col-md-12 col-lg-offset-1">
                                    <div className="ps-product__thumbnail">
                                        <div className="ps-product__preview">
                                            <div className="ps-product__variants">
                                                <div className="item"><img src="./img/shoes/gallery_item_1.jpg" alt /></div>

                                            </div>
                                        </div>
                                        <div className="ps-product__image">


                                            <div className="item"><img className="zoom" src="./img/shoes/gallery_item_1.jpg" alt data-zoom-image="./img/shoes/gallery_item_1.jpg" /></div>
                                        </div>
                                    </div>
                                    <div className="ps-product__thumbnail--mobile">
                                        <div className="ps-product__main-img"><img src="./img/shoes/gallery_item_1.jpg" alt /></div>
                                        <div className="ps-product__preview owl-slider" data-owl-auto="true" data-owl-loop="true" data-owl-speed={5000} data-owl-gap={20} data-owl-nav="true" data-owl-dots="false" data-owl-item={3} data-owl-item-xs={3} data-owl-item-sm={3} data-owl-item-md={3} data-owl-item-lg={3} data-owl-duration={1000} data-owl-mousedrag="on"><img src="./img/shoes/gallery_item_1.jpg" alt /><img src="./img/shoes/gallery_item_1.jpg" alt /><img src="./img/shoes/gallery_item_1.jpg" alt /></div>
                                    </div>
                                    <div className="ps-product__info">
                                        <div className="ps-product__rating">
                                            <select className="ps-rating">
                                                <option value={1}>1</option>
                                                <option value={1}>2</option>
                                                <option value={1}>3</option>
                                                <option value={1}>4</option>
                                                <option value={2}>5</option>
                                            </select>
                                        </div>
                                        <h1>ĐƯỜNG ĂN KIÊNG, ĐƯỜNG GIẢM CÂN</h1>
                                        <p className="ps-product__category">(NHẬP KHẨU ĐỨC)</p>
                                        <h3 className="ps-product__price">118.000VNĐ <del>330.000VNĐ</del></h3>
                                        <div className="ps-product__block ps-product__quickview">
                                            <h4>Giới thiệu</h4>
                                            <p>Đường tinh luyện, từ lâu đã được ví như cái chết trắng âm thầm. Thay vào đó, tại các quốc gia phát triển như Châu Âu, người ta đã chuyển qua sử dụng đường ăn kiêng, đường giảm cân.
                                                Sản phẩm được chiết xuất khô từ lá bạch dương và các thành phần khác có trong mía đường giúp kích thích hoạt động của hệ thống bài tiết, đào thải độc ra và ngăn ngừa tích nước dư thừa cho cơ thể</p>
                                        </div>

                                        <div className="ps-product__block ps-product__size">

                                            <div className="form-group">
                                                <input className="form-control" type="number" defaultValue={1} />
                                            </div>
                                        </div>
                                        <div className="ps-product__shopping"><a className="ps-btn mb-10" href="/">Thêm Vào Giỏ<i className="ps-icon-next" /></a>
                                            <div className="ps-product__actions"><a className="mr-10" href="/"><i className="ps-icon-heart" /></a><a href="/"><i className="ps-icon-share" /></a></div>
                                        </div>
                                    </div>
                                    <div className="clearfix" />
                                    <div className="ps-product__content mt-50">
                                        <ul className="tab-list" role="tablist">
                                            <li className="active"><a href="#tab_01" aria-controls="tab_01" role="tab" data-toggle="tab">Mô tả</a></li>
                                            <li><a href="#tab_02" aria-controls="tab_02" role="tab" data-toggle="tab">Đánh Giá</a></li>

                                        </ul>
                                    </div>
                                    <div className="tab-content mb-60">
                                        <div className="tab-pane active" role="tabpanel" id="tab_01">
                                            <p>Thực chất đường ăn kiêng, đường giảm cân sở dĩ là lựa chọn thay thế đường tinh luyện vì tính an toàn cho sức khỏe và những tác dụng hỗ trợ hệ tiêu hóa vượt trội so với đường trắng thông thường.</p>
                                            <p>Khi mà thực phẩm ngày càng trở nên kém an toàn thì đường ăn kiêng, đường giảm cân càng được nhiều gia đình quan tâm sử dụng</p>
                                        </div>
                                        <div className="tab-pane" role="tabpanel" id="tab_02">
                                            <p className="mb-20">Đánh giá cho<strong>ĐƯỜNG ĂN KIÊNG, ĐƯỜNG GIẢM CÂN</strong></p>
                                            <div className="ps-review">
                                                <div className="ps-review__thumbnail"><img src="./img/user/1.jpg" alt /></div>
                                                <div className="ps-review__content">
                                                    <header>
                                                        <select className="ps-rating">
                                                            <option value={1}>1</option>
                                                            <option value={1}>2</option>
                                                            <option value={1}>3</option>
                                                            <option value={1}>4</option>
                                                            <option value={5}>5</option>
                                                        </select>
                                                        <p>By<a href> Alena Studio</a> - November 25, 2017</p>
                                                    </header>
                                                    <p>Soufflé danish gummi bears tart. Pie wafer icing. Gummies jelly beans powder. Chocolate bar pudding macaroon candy canes chocolate apple pie chocolate cake. Sweet caramels sesame snaps halvah bear claw wafer. Sweet roll soufflé muffin topping muffin brownie. Tart bear claw cake tiramisu chocolate bar gummies dragée lemon drops brownie.</p>
                                                </div>
                                            </div>
                                            <form className="ps-product__review" action="_action" method="post">
                                                <h4>ADD YOUR REVIEW</h4>
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                                                        <div className="form-group">
                                                            <label>Name:<span>*</span></label>
                                                            <input className="form-control" type="text" placeholder />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Email:<span>*</span></label>
                                                            <input className="form-control" type="email" placeholder />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Your rating<span /></label>
                                                            <select className="ps-rating">
                                                                <option value={1}>1</option>
                                                                <option value={1}>2</option>
                                                                <option value={1}>3</option>
                                                                <option value={1}>4</option>
                                                                <option value={5}>5</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12 ">
                                                        <div className="form-group">
                                                            <label>Your Review:</label>
                                                            <textarea className="form-control" rows={6} defaultValue={""} />
                                                        </div>
                                                        <div className="form-group">
                                                            <button className="ps-btn ps-btn--sm">Submit<i className="ps-icon-next" /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ps-section ps-section--top-sales ps-owl-root pt-40 pb-80">
                        <div className="ps-container">
                            <div className="ps-section__header mb-50">
                                <div className="row">
                                    <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 ">
                                        <h3 className="ps-section__title" data-mask="Related item">- BẠN CŨNG CÓ THỂ THÍCH</h3>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                                        <div className="ps-owl-actions"><a className="ps-prev" href="#"><i className="ps-icon-arrow-right" />Prev</a><a className="ps-next" href="#">Next<i className="ps-icon-arrow-left" /></a></div>
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
export default Productdetail;