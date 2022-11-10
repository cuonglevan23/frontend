import { useState } from "react";
import OutLineBg from "../OutLineBg";

const PoinAddress = () => {
  const [active, setActive] = useState("hcm");

  return (
    <>
      <OutLineBg>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    .box-address {\n        display: inline-block;\n        width: 100%;\n        height: 450px;\n    }\n\n        .box-address ul {\n            background: #f2f2f2;\n            height: 50px;\n            display: flex;\n            width: 100%;\n            align-items: center;\n            padding: 2px;\n            margin-bottom: unset;\n        }\n\n            .box-address ul li {\n                display: flex;\n                padding: 2px 10px;\n                align-items: center;\n                height:100%;\n                cursor:pointer;\n            }\n                .box-address ul li.active {\n                    display: flex;\n                    background: #fff;\n                }\n        .box-address .address-city {\n        }\n\n    .item-city {\n        display: none;\n    }\n    .item-city.active{\n        display:block;\n    }\n",
          }}
        />

        <div className="box-garbage-collection">
          <div className="box-image-head">
            <div className="container">
              <p className="txt-text">
                <a href>Trang chủ </a> <span>&gt; </span>Địa điểm thu hồi{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="box-content">
          <div className="container">
            <h3 className="txt-title">Địa điểm thu hồi</h3>
            <div className="box-address">
              <ul>
                <li
                  className={`item-city-title ${
                    active === "hcm" ? "active" : ""
                  }`}
                  data-city="ho-chi-minh"
                  onClick={() => setActive("hcm")}
                >
                  TP.Hồ Chí Minh
                </li>
                <li
                  className={`item-city-title ${
                    active === "hn" ? "active" : ""
                  }`}
                  data-city="ha-noi"
                  onClick={() => setActive("hn")}
                >
                  Hà Nội
                </li>
                <li
                  className={`item-city-title ${
                    active === "dn" ? "active" : ""
                  }`}
                  data-city="da-nang"
                  onClick={() => setActive("dn")}
                >
                  Đà Nẵng
                </li>
              </ul>
              <div className="address-city">
                {active === "hcm" && (
                  <div className="ho-chi-minh item-city active">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.8481468333957!2d106.68343061411686!3d10.822930661294727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528e4f4014875%3A0x2d84b80670a0c09e!2zTmd1eeG7hW4gVGjDoWkgU8ahbiwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2sus!4v1655478469820!5m2!1sen!2sus"
                      width="100%"
                      height={450}
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                )}
                {active === "hn" && (
                  <div className="ha-noi item-city active">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.2241321399792!2d105.81565411424522!3d21.02371609332788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab420689b517%3A0x9993cd214d1d8c76!2zxJAuIExhIFRow6BuaCwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1655478681947!5m2!1svi!2s"
                      width="100%"
                      height={450}
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                )}
                {active === "dn" && (
                  <div className="da-nang item-city active">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.7326242074155!2d108.18798091416932!3d16.027428244815617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421a2cfe6e5df3%3A0x3075427b463af1d4!2zVHLGsOG7nW5nIENoaW5oLCDEkMOgIE7hurVuZywgVmlldG5hbQ!5e0!3m2!1sen!2sus!4v1655478816587!5m2!1sen!2sus"
                      width="100%"
                      height={450}
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="list-address">
              <div className="row">
                <div className="col-sm-4">
                  <div className="list-address-content">
                    <h3 className="txt-tile">Tại TP. Hồ Chí Minh</h3>
                    <ol>
                      <li>
                        <strong>UBND Phường 9, Quận 3</strong>
                        <br />
                        82 Bà Huyện Thanh Quan, P. 9, Q. 3
                      </li>
                      <li>
                        <strong>UBND Phường 15, Quận 4</strong>
                        <br />
                        132 Tôn Thất Thuyết, P. 15, Q. 4
                      </li>
                      <li>
                        <strong>UBND Phường 17, Quận Phú Nhuận</strong>
                        <br />
                        22 Nguyễn Văn Trỗi, P. 17, Q. Phú Nhuận
                      </li>
                      <li>
                        <strong>UBND Phường 2, Quận Bình Thạnh</strong>
                        <br />
                        14 Phan Bội Châu, P. 2, Q. Bình Thạnh
                      </li>
                      <li>
                        <strong>Siêu thị Metro An Phú – MM Mega Market</strong>
                        <br />
                        Khu B, KĐT Mới An Phú-An Khánh, P. An Phú, Q. 2
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="list-address-content">
                    <h3 className="txt-tile">Tại TP. Hà Nội</h3>
                    <ol>
                      <li>
                        <strong>
                          Nhà Văn Hóa Phường Nghĩa Tân, Quận Cầu Giấy
                        </strong>
                        <br />
                        45 Nghĩa Tân, P. Nghĩa Tây, Q. Cầu Giấy
                      </li>
                      <li>
                        <strong>UBND Phường Tràng Tiền, Quận Hoàn Kiếm</strong>
                        <br />
                        02 Cổ Tân, P. Tràng Tiền, Q. Hoàn Kiếm
                      </li>
                      <li>
                        <strong>UBND Phường Quán Thánh, Quận Ba Đình</strong>
                        <br />
                        12-14 Phan Đình Phùng, P. Quán Thánh, Q. Ba Đình
                      </li>
                      <li>
                        <strong>UBND Phường Thành Công, Quận Ba Đình</strong>
                        <br />
                        09 Thành Công, P. Thành Công, Q. Ba Đình
                      </li>
                      <li>
                        <strong>Chi Cục Bảo Vệ Môi Trường Hà Nội</strong>
                        <br />
                        17 Trung Yên 3, P. Trung Hòa, Q. Cầu Giấy
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="list-address-content">
                    <h3 className="txt-tile">Tại TP. Đà Nẵng</h3>
                    <ol>
                      <li>
                        <strong>
                          Trường Đại Học Công Nghệ Thông Tin Và Truyền Thông
                          Việt Hàn
                        </strong>
                        <br />
                        470 Đường Trần Đại Nghĩa, Hoà Hải, Ngũ Hành Sơn
                      </li>
                      <li>
                        <strong>UBND Phường Hòa Hải, Quận Ngũ Hành Sơn</strong>
                        <br />
                        Lê Văn Hiến, Hoà Hải, Ngũ Hành Sơn
                      </li>
                      <li>
                        <strong>UBND phường Hòa Xuân, Cẩm Lệ</strong>
                        <br />
                        111 Hoàng Ngân, Hoà Xuân, Cẩm Lệ
                      </li>
                      <li>
                        <strong>
                          UBND Phường Hoà Quý, Hòa Quý, Ngũ Hành Sơn
                        </strong>
                        <br />
                        264 Đ. Mai Đăng Chơn, Hoà Quý, Ngũ Hành Sơn
                      </li>
                      <li>
                        <strong>
                          Chi Cục Bảo Vệ Môi Trường, Thạch Thang, Hải Châu
                        </strong>
                        <br />
                        57, Quang Trung, Phường Hải Châu 1, Quận Hải Châu, Thành
                        Phố Đà Nẵng, Thạch Thang, Hải Châu, Đà Nẵng, Việt Nam
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-end">
            <div className="container">
              <div className="text">
                <h2 style={{ textAlign: "center" }}>
                  <span
                    style={{
                      fontSize: "42pt",
                      fontFamily: '"comic sans ms", sans-serif',
                    }}
                  >
                    <strong>
                      <span style={{ color: "#0c9344" }}>
                        Chúng tôi tái chế, Chúng tôi quan tâm.
                      </span>
                    </strong>
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </OutLineBg>
    </>
  );
};

export default PoinAddress;
