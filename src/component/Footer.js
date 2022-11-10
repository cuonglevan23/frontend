const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>Về Chúng Tôi</h6>
            <ul className="footer-links">
              <li>
                Thế hệ của chúng ta có tác động lớn tới môi trường bằng việc hạn
                chế các sản phẩm nhựa. Cùng Recyclable Waste tham gia hành trình
                kiến tạo thế giới xanh! #GenerationRestoration
              </li>
            </ul>
          </div>
          <div className="col-xs-6 col-md-3">
            <h6>Dịch Vụ</h6>
            <ul className="footer-links">
              <li>
                <a href="#">Tái chế và thu gom rác thải</a>
              </li>
              <li>
                <a href="#">Tích điểm và đổi thưởng</a>
              </li>
              <li>
                <a href="#">Sản phẩm thân thiện với môi trường</a>
              </li>
            </ul>
          </div>
          <div className="col-xs-6 col-md-3">
            <h6>Liên Hệ</h6>
            <ul className="footer-links">
              <li>Hotline: 0976 86 33 35 </li>
              <li>Email: cuonglv.21ad@vku.udn.vn</li>
              <li>
                Địa chỉ: 470 Đường Trần Đại Nghĩa, Hoà Hải, Ngũ Hành Sơn, Đà
                Nẵng
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <div className="text-reserved">
              <p className="copyright-text">
                Copyright © 2022 All Rights Reserved by Recyclable Waste

              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a className="facebook" href="#">
                  <i className="fab fa-facebook" />
                </a>
              </li>
              <li>
                <a className="twitter" href="#">
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li>
                <a className="dribbble" href="#">
                  <i className="fab fa-google-plus-g" />
                </a>
              </li>
              <li>
                <a className="linkedin" href="#">
                  <i className="fab fa-twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
