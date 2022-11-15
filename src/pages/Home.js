import OutLineBg from "../OutLineBg";

const Home = () => {
  return (
    <>
      <OutLineBg>
        <div className="box-slider-head">
          {/* owl-carousel */}
          <div className="box-owl-carousel ">
            <div className="box-carousel-item active">
              {/* <img src="img/banner/pexels-star-914682.jpg"> */}
              <div className="carousel-caption">
                <h1 className="title-h1">Chuyển đổi nền kinh tế xanh</h1>
                <h3 className="title-h3">TIÊN PHONG TẠI VIỆT NAM</h3>
                <div className="box-buttons">
                  <button type="buttons" className="buttons facebook">
                    <a href="#" className="buttons">
                      <i className="fab fa-facebook"> </i>
                    </a>{" "}
                    CỘNG ĐỒNG XANH
                  </button>
                  <button type="buttons" className="buttons youtube">
                    <a href="#" className="buttons">
                      <i className="fab fa-youtube"> </i>{" "}
                    </a>{" "}
                    HƯỚNG DẪN ĐỔI ĐIỂM
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container-fluid box-content-hands">
            <div className="container">
              <p className="txt-text">
                Hãy chung tay bảo vệ môi trường, bảo vệ trái đất
                vì bạn, vì tôi, vì những
                người thân yêu quanh mình
              </p>
              <a href="#" className="act-now">
                Hành Động Ngay
              </a>
            </div>
          </div>
          <div className="box-alternative-solution">
            <div className="container">
              <div className="row welcome text-center">
                <div className="col-12">
                  <h1 className="display-4">
                    GIẢI PHÁP THAY THẾ NHỰA HOÀN HẢO!
                  </h1>
                </div>
              </div>
              <div className="row text-center padding">
                <div className="col-xs-12 col-sm-6 col-md-4 ">
                  <i className="fas fa-leaf" />
                  <h4 className="txt-title">Hoàn toàn tự nhiên</h4>
                  <p>
                    Lựa chọn giữa những nguyên liệu gần gũi với thiên nhiên Việt
                    Nam
                  </p>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <i className="  far fa-handshake" />
                  <h4 className="txt-title">Sử dụng lâu dài</h4>
                  <p>
                    Các sản phẩm của Recyclable Waste hoàn toàn có thể tái chế
                    nhiều lần{" "}
                  </p>
                </div>
                <div className="col-sm-12 col-md-4">
                  <i className="fas fa-globe" />
                  <h4 className="txt-title">Phân hủy sinh học</h4>
                  <p>Phân hủy hoàn toàn trong môi trường tự nhiên</p>
                </div>
              </div>
              <hr className="my-4 strike-through" />
            </div>
          </div>
        </div>
        <div className="box-area">
          <div className="container">
            <div className="row">
              <div className="single-box single-box-one col-md-4">
                <div className="box-content-item">
                  <div className="img-text">
                    <span className="header-text">
                      <strong>
                        PHỤC VỤ <br /> CỘNG ĐỒNG
                      </strong>
                    </span>
                    <p className="text-content">
                      Nhân viên Recyclable Waste tham gia vào các sự kiện dọn
                      dẹp và thúc đẩy phong bì trong ngành công nghiệp tái chế.
                      Luôn cập nhật các hoạt động và nỗ lực mới nhất của
                      Recyclable Waste.
                    </p>
                  </div>
                  <div className="img-area">
                    <p className="hover-image" />
                  </div>
                </div>
              </div>
              <div className="single-box col-md-4">
                <div className="box-content-item">
                  <div className="img-text">
                    <span className="header-text">
                      <strong>
                        PHỤC HỒI &amp; CHẾ BIẾN <br /> VẬT LIỆU
                      </strong>
                    </span>
                    <p className="text-content">
                      Recyclable Waste đã tự khẳng định mình là nhà xử lý chất
                      thải rắn và chất thải tái chế hàng đầu. Chế biến riêng
                      biệt được thiết kế để phân biệt các loại nguyên liệu khác
                      nhau.
                    </p>
                  </div>
                  <div className="img-area2">
                    <p className="hover-image" />
                  </div>
                </div>
              </div>
              <div className="single-box single-box-two col-md-4">
                <div className="box-content-item">
                  <div className="img-text">
                    <span className="header-text">
                      <strong>
                        SẢN PHẨM <br /> TÁI CHẾ
                      </strong>
                    </span>
                    <p className="text-content">
                      Mỗi tuần, cơ thể con người hấp thụ lượng vi nhựa tương
                      đương với 1 chiếc thẻ tín dụng. Hãy cùng RECYCLABLE WAST
                      hạn chế sản phẩm nhựa sử dụng một lần.
                    </p>
                  </div>
                  <div className="img-area1">
                    <p className="hover-image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <section className="section wrapper-home-newsletter">
            <div className="container-fluid">
              <div className="content-newsletter">
                <h2>Đăng ký</h2>
                <p>
                  Đăng ký nhận bản tin của Recyclable Waste để cập nhật những sản phẩm
                  mới, nhận thông tin ưu đãi đặc biệt và thông tin giảm giá
                  khác.
                </p>
                <div className="form-newsletter">
                  <form action acceptCharset="UTF-8" >
                    <div className="form-group">
                      <input type="hidden" id="contact_tags" />
                      <input
                        required
                        type="email"

                        placeholder="Nhập email của bạn"
                        aria-label="Email Address"

                      />
                      <button type="submit" className>
                        <span>Gửi</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <section className="section section-gallery box-custom">
            <div className="hot_sp">
              <h2 className="txt-title">Khách hàng và Recyclable Waste</h2>
            </div>
            <div className="list-gallery clearfix">
              <ul className="shoes-gp">
                <li>
                  <div className="gallery_item">
                    <img
                      className="img-resize"
                      src="./img/shoes/gallery_item_1.jpg"
                      alt
                    />
                  </div>
                </li>
                <li>
                  <div className="gallery_item">
                    <img
                      className="img-resize"
                      src="./img/shoes/gallery_item_2.jpg"
                      alt
                    />
                  </div>
                </li>
                <li>
                  <div className="gallery_item">
                    <img
                      className="img-resize"
                      src="./img/shoes/gallery_item_3.jpg"
                      alt
                    />
                  </div>
                </li>
                <li>
                  <div className="gallery_item">
                    <img
                      className="img-resize"
                      src="./img/shoes/gallery_item_4.jpg"
                      alt
                    />
                  </div>
                </li>
                <li>
                  <div className="gallery_item">
                    <img
                      className="img-resize"
                      src="./img/shoes/gallery_item_5.jpg"
                      alt
                    />
                  </div>
                </li>
                <li>
                  <div className="gallery_item">
                    <img
                      className="img-resize"
                      src="./img/shoes/gallery_item_6.jpg"
                      alt
                    />
                  </div>
                </li>
              </ul>
            </div>
            {/* <div class="list-gallery clearfix">
          <!-- owl-carousel
          <div class="box-image-custom owl-carousel">
              <div class="item-image">
                  
              </div>
              <div class="item-image">
                  
              </div>
              <div class="item-image">
                  
              </div>
              <div class="item-image">
                  
              </div>
              <div class="item-image">
                  
              </div>
              <div class="item-image">
                  
              </div>
              <div class="item-image">
                  
              </div>
              <div class="item-image">
                  
              </div>
              <div class="item-image">
                  
              </div>
              <div class="item-image">
                  
              </div>
              <div class="item-image">
                  
              </div>
          </div>               
      </div> */}
          </section>
        </div>
      </OutLineBg>
    </>
  );
};

export default Home;
