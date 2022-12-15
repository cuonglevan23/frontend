import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "../lib/axios";
import OutLineBg from "../OutLineBg";
import notFound from "../assets/images/NotFound.svg";
import hoivienTiemnang from "../assets/images/hoi-vien-tiem-nang.png";
import hoivienThanThiet from "../assets/images/4535d2ce51a36c361dd7d8208fafc3644fd8b0c7.png";
import hoivienBac from "../assets/images/hoi-vien-bac.png";
import hoivienVang from "../assets/images/hoi-vien-vang.png";
import hoivienKc from "../assets/images/hoi-vien-kim-cuong.png";
import iconTiemnang from "../assets/images/icon-tiem-nang.png";
import iconThanthiet from "../assets/images/icon-than-thiet.png";
import iconBac from "../assets/images/icon-bac.png";
import iconVang from "../assets/images/icon-vang.png";
import iconKc from "../assets/images/icon-kim-cuong.png";
import next from "../assets/images/next.png";
import prev from "../assets/images/prev.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notifyError, notifySuccess } from "../lib/notify";

const slideData = [
  {
    icon: iconTiemnang,
    title: "Hội viên Tiềm năng",
    image: hoivienTiemnang,
  },
  {
    icon: iconThanthiet,
    title: "Hội viên Thân thiết",
    image: hoivienThanThiet,
  },
  {
    icon: iconBac,
    title: "Hội viên Bạc",
    image: hoivienBac,
  },
  {
    icon: iconVang,
    title: "Hội viên Vàng",
    image: hoivienVang,
  },
  {
    icon: iconKc,
    title: "Hội viên Kim Cuơng",
    image: hoivienKc,
  },
];

const questionArray = [
  {
    question: "Chu kỳ đạt hạng của khách hàng là bao lâu?",
    answer:
      "Thông thường chu kỳ đạt hạng của khách hàng là 12 tháng kể từ thời điểm đạt hạng. Tuy nhiên hàng tháng hệ thống đều xét hạng lại cho các thuê bao, nếu thuê bao có phát sinh điểm xét hạng đạt hạng mới cao hơn hạng cũ, khách hàng sẽ được lên hạng ngay mà không cần chờ chu kỳ sau 12 tháng.",
  },
  {
    question:
      "Khách hàng A sử dụng hai thuê bao. Thuê bao 1 đạt hạng Vàng có 100.000 điểm xét hạng và thuê bao 2 đạt hạng Bạc có 60.000 điểm. Sau khi gộp nhóm khách hàng A sẽ đạt hạng gì?",
    answer:
      "Sau khi gộp nhóm thuê bao 1 và 2, khách hàng A có 160.000 điểm xét hạng và sẽ đạt hạng Kim Cương.&nbsp;",
  },
  {
    question:
      "Khách hàng có được giữ nguyên hạng từ chương trình Viettel Privilege sang chương trình Viettel ++ hay không?",
    answer:
      "Khách hàng đang là hội viên Viettel Privilege sẽ giữ nguyên hạng hội viên hiện tại cho đến hết chu kỳ. Hàng tháng hệ thống xét hạng lại, nếu khách hàng đủ điều kiện lên hạng cao hơn sẽ được lên hạng ngay theo đúng thể lệ chương trình. Điểm quy đổi cũ của chương trình Viettel Privilege (nếu có) được quy đổi sang điểm tích lũy của chương trình Viettel++ mới theo tỷ lệ: 1 điểm chương trình Viettel Privilege = 20 điểm chương trình Viettel++.",
  },
  {
    question:
      "Khách hàng sử dụng dịch vụ di động A, đăng ký thêm 1 dịch vụ FTTH B với giá gói cước FTTH là 300.000đ/tháng và khách hàng đóng cước trước 1.000.000đ. Hỏi điểm tiêu dùng sẽ được tính như thế nào?",
    answer:
      "Thuê bao di động A được tích lũy 5% của 300.000đ tương đương với 15.000 điểm. Thuê bao cố định B được tích lũy 0.5% của 1.000.000đ tương đương với 5.000 điểm.&nbsp;",
  },
  {
    question:
      "Trường hợp thuê bao thành viên đã được gộp nhóm trước đó muốn tách khỏi nhóm có được không và phải làm như thế nào?",
    answer:
      "Thuê bao không tự tách ra khỏi nhóm được. Thuê bao chỉ tách nhóm đã gộp trước đó khi chuyển chủ quyền.&nbsp;",
  },
];

const ExchangePoint = () => {
  const [active, setActive] = useState("steps-custom__item active");
  const [index, setIndex] = useState(0);
  const [categoryActive, setCategoryActive] = useState(0);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState();
  const [teleServices, setTeleServices] = useState([]);
  const [currentTeleservice, setCurrentTeleService] = useState();
  const [teleProduct, setTeleProduct] = useState([]);
  const [teleProductSelected, setTeleProductSelected] = useState();
  const [questionOpen, setQuestionOpen] = useState([]);
  const [mLeft, setMLeft] = useState(0);
  const navigate = useNavigate();
  const items = JSON.parse(localStorage.getItem("items"));
  const handleSetCategory = async (id, index) => {
    setCategoryActive(index);
    const res = await axios.post("/products/get-by-category", {
      categoryId: id,
      byPoint: true,
    });
    setProducts(res.data.products);
  };

  const handleSetOpenTab = (index) => {
    if (!questionOpen.includes(index)) {
      setQuestionOpen((prev) => prev.concat(index));
    } else {
      let aray = [];
      setQuestionOpen((prev) => {
        aray = prev.filter((item) => item !== index);
        return aray;
      });
    }
  };

  const handleTransactionPoint = async () => {
    const point =
      teleProductSelected.price / Number(teleProductSelected.idServices.ratio);
    if (Number(point) > Number(items.point)) {
      return notifyError("Bạn không đủ điểm");
    }
    await axios.post("/users/decrement-point", {
      id: items._id,
      point: point,
    });
    notifySuccess("Đổi điểm thành công");
  };

  const handleGetAllProducts = async () => {
    const res = await axios.get("/categories/get-all");
    setCategories(res.data.categories);
    handleSetCategory(res.data.categories[0]?._id, 0);
  };

  const handleGetServices = async () => {
    try {
      const res = await axios.get("/tele-services/get-all");
      setTeleServices(res.data.teles);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetTeleProductbyServices = async (id) => {
    try {
      const res = await axios.post("tele-product/get-by-id-services", {
        id,
      });

      setTeleProduct(res.data.teles);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectTeleProduct = async (tele) => {
    setTeleProductSelected(tele);
  };
  console.log(questionOpen);
  useEffect(() => {
    handleGetAllProducts();
    handleGetServices();
  }, []);

  return (
    <>
      <ToastContainer />
      <OutLineBg>
        <div>
          <section className="box-baner">
            <div className="container">
              <div className="image-banner" />
            </div>
          </section>
          <div className="section benefit-member">
            <div className="container">
              <h2 className="section-title">Quyền lợi hội viên</h2>
              <div className="benefit-member__content">
                <div className="steps-custom">
                  <ul className="steps-custom__list">
                    {slideData.map((slide, i) => (
                      <li
                        className={`steps-custom__item ${
                          index >= i ? "active" : ""
                        } `}
                        data-image={hoivienTiemnang}
                        onClick={() => setIndex(i)}
                      >
                        <a
                          href="javascript:void(0)"
                          className="steps-custom__link"
                        >
                          <span className="steps-custom__icon">
                            <img src={slide.icon} alt="img" />
                          </span>
                          <p className="steps-custom__name">{slide.title}</p>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="benefit-member__images">
                  {slideData.map(
                    (slide, i) =>
                      index === i && <img src={slide.image} alt="img" />
                  )}
                </div>
              </div>
            </div>
          </div>
          <section className="box-bg-full">
            <div className="bg-full">
              <div className="container">
                <div id="endow-telecom" className="section endow-telecom">
                  <h2 className="section-title">Ưu đãi viễn thông</h2>
                  <div className="endow-telecom__content">
                    <ul className="endow-telecom__list">
                      {teleServices.map((tele) => (
                        <li
                          className="endow-telecom__item"
                          onClick={() => {
                            handleGetTeleProductbyServices(tele?._id);
                            setCurrentTeleService(tele);
                            setTeleProductSelected();
                          }}
                        >
                          <div className="endow-telecom__images img-hover">
                            <img src={tele?.icon} alt="img" />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {currentTeleservice && (
                    <>
                      <div class="telecom-box">
                        <div class="telecom-box__exchange">
                          <p class="telecom-box__exchange-value">
                            <span>1.000</span> điểm =
                            <span> {currentTeleservice?.ratio * 1000}</span>{" "}
                            {currentTeleservice?.valueName}
                          </p>
                        </div>
                        <ul class="telecom-box__list">
                          <li class="telecom-box__item">
                            <h5 class="telecom-box__sub">Thể lệ</h5>
                            <div class="telecom-box__detail">
                              <p class="telecom-box__des">
                                <p>
                                  <span style={{ fontSize: 14 }}>
                                    <span
                                      style={{
                                        fontFamily:
                                          "arial,helvetica,sans-serif",
                                      }}
                                    >
                                      {currentTeleservice?.description}
                                    </span>
                                  </span>
                                </p>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <h2 className="section-title">Gói điểm quy đổi</h2>
                      <div className="endow-telecom__content">
                        <ul className="endow-telecom__list">
                          {teleProduct.map((tele, index) => (
                            <li
                              className="endow-telecom__item"
                              onClick={() => setTeleProductSelected(tele)}
                              style={
                                tele._id === teleProductSelected?._id
                                  ? { border: "5px solid #007a33" }
                                  : { margin: 0 }
                              }
                            >
                              <div className="endow-telecom__images img-hover">
                                <img src={tele.image} alt="img" />
                              </div>
                              <p className="endow-telecom__des">
                                {tele.price / Number(tele.idServices.ratio)}{" "}
                                Điểm
                              </p>
                            </li>
                          ))}
                        </ul>
                        {teleProductSelected && (
                          <div
                            className="endow-link__btn"
                            style={{ margin: 0 }}
                          >
                            <a
                              href="javascript:void(0)"
                              className="button-plus button-plus--primary"
                              style={{ margin: 0 }}
                              onClick={() => handleTransactionPoint()}
                            >
                              <i className="icon-load" />
                              Xác nhận đổi điểm
                            </a>
                          </div>
                        )}
                      </div>
                    </>
                  )}

                  <div className="endow-link">
                    <h2 className="section-title">Ưu đãi liên kết</h2>
                    <div className="endow-link__content">
                      <p className="endow-link__des">
                        Không chỉ dừng lại ở những ưu đãi độc đáo từ Recyclable
                        Waste. Bạn còn có cơ hội để đổi các ưu đãi đặc biệt đến
                        từ các đối tác lớn, với đa dạng danh mục: Ẩm thực, Mua
                        sắm, Giải trí, Làm đẹp – Sức khoẻ...và nhiều ưu đãi hấp
                        dẫn khác để bạn lựa chọn.
                      </p>
                      <div className="tag-custom">
                        <ul className="tag-custom__list">
                          {categories.map((category, index) => (
                            <li
                              className={`tag-custom__item ${
                                categoryActive === index ? "active" : ""
                              }`}
                              onClick={() =>
                                handleSetCategory(category._id, index)
                              }
                            >
                              <a
                                href="javascript:void(0)"
                                className="tag-custom__link"
                              >
                                <span className="tag-custom__name">
                                  {category.name}
                                </span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* <div class="tag-custom tag-custom--sp">
                     <div class="form-select-plus">
                        <select class="form-control-plus custom-control-plus">
                           <option value="751">Siêu Voucher Sinh Nhật</option>
                           <option value="9">VIP</option>
                           <option value="541">Đặt Chỗ</option>
                           <option value="2">Mua sắm</option>
                           <option value="1">Ẩm thực</option>
                           <option value="483">Thời Trang</option>
                           <option value="4">Du lịch - Khách sạn</option>
                           <option value="613">Giao thông</option>
                           <option value="5">Thể thao - Làm đẹp</option>
                           <option value="8">Giáo dục</option>
                           <option value="634">Giải trí</option>
                           <option value="3">Y tế - Bảo hiểm</option>
                        </select>
                     </div>
                  </div> */}
                      {/* <div className="sort-custom">
                        <div className="sort-custom__info">
                          <span className="sort-custom__icon">
                            <i className="icon-sort" />
                          </span>{" "}
                          <span className="sort-custom__name">
                            Sắp xếp theo:
                          </span>
                        </div>
                        <div className="sort-custom__form">
                          <div className="form-select-plus">
                            <select className="form-control-plus">
                              <option value={1}>Mới nhất</option>
                              <option value={2}>Hot nhất</option>
                              <option value={3}>Từ thấp đến cao</option>
                              <option value={4}>Từ cao đến thấp</option>
                            </select>
                          </div>
                          <div className="form-select-plus">
                            <select className="form-control-plus">
                              <option value={0}>Toàn quốc</option>
                              <option value={1}>Hà Nội</option>
                              <option value={2}>Hà Giang</option>
                              <option value={4}>Cao Bằng</option>
                              <option value={6}>Bắc Kạn</option>
                              <option value={8}>Tuyên Quang</option>
                              <option value={10}>Lào Cai</option>
                              <option value={11}>Điện Biên</option>
                              <option value={12}>Lai Châu</option>
                              <option value={14}>Sơn La</option>
                              <option value={15}>Yên Bái</option>
                              <option value={17}>Hoà Bình</option>
                              <option value={19}>Thái Nguyên</option>
                              <option value={20}>Lạng Sơn</option>
                              <option value={22}>Quảng Ninh</option>
                              <option value={24}>Bắc Giang</option>
                              <option value={25}>Phú Thọ</option>
                              <option value={26}>Vĩnh Phúc</option>
                              <option value={27}>Bắc Ninh</option>
                              <option value={30}>Hải Dương</option>
                              <option value={31}>Hải Phòng</option>
                              <option value={33}>Hưng Yên</option>
                              <option value={34}>Thái Bình</option>
                              <option value={35}>Hà Nam</option>
                              <option value={36}>Nam Định</option>
                              <option value={37}>Ninh Bình</option>
                              <option value={38}>Thanh Hóa</option>
                              <option value={40}>Nghệ An</option>
                              <option value={42}>Hà Tĩnh</option>
                              <option value={44}>Quảng Bình</option>
                              <option value={45}>Quảng Trị</option>
                              <option value={46}>Thừa Thiên Huế</option>
                              <option value={48}>Đà Nẵng</option>
                              <option value={49}>Quảng Nam</option>
                              <option value={51}>Quảng Ngãi</option>
                              <option value={52}>Bình Định</option>
                              <option value={54}>Phú Yên</option>
                              <option value={56}>Khánh Hòa</option>
                              <option value={58}>Ninh Thuận</option>
                              <option value={60}>Bình Thuận</option>
                              <option value={62}>Kon Tum</option>
                              <option value={64}>Gia Lai</option>
                              <option value={66}>Đắk Lắk</option>
                              <option value={67}>Đắk Nông</option>
                              <option value={68}>Lâm Đồng</option>
                              <option value={70}>Bình Phước</option>
                              <option value={72}>Tây Ninh</option>
                              <option value={74}>Bình Dương</option>
                              <option value={75}>Đồng Nai</option>
                              <option value={77}>Bà Rịa - Vũng Tàu</option>
                              <option value={79}>Hồ Chí Minh</option>
                              <option value={80}>Long An</option>
                              <option value={82}>Tiền Giang</option>
                              <option value={83}>Bến Tre</option>
                              <option value={84}>Trà Vinh</option>
                              <option value={86}>Vĩnh Long</option>
                              <option value={87}>Đồng Tháp</option>
                              <option value={89}>An Giang</option>
                              <option value={91}>Kiên Giang</option>
                              <option value={92}>Cần Thơ</option>
                              <option value={93}>Hậu Giang</option>
                              <option value={94}>Sóc Trăng</option>
                              <option value={95}>Bạc Liêu</option>
                              <option value={96}>Cà Mau</option>
                              <option value={100}>Toàn quốc</option>
                            </select>
                          </div>
                          <div className="form-select-plus">
                            <select className="form-control-plus">
                              <option value={0}>Tất cả</option>
                              <option value={1}>Miễn phí</option>
                              <option value={2}>Dưới 3000 điểm</option>
                              <option value={3}>Từ 3000 - 5000 điểm</option>
                              <option value={4}>Từ 5000 - 10.000 điểm</option>
                              <option value={5}>
                                Từ 10.000 - 100.000 điểm
                              </option>
                              <option value={6}>Trên 100.000 điểm</option>
                            </select>
                          </div>
                        </div>
                      </div> */}
                      <ul className="endow-link__list">
                        {products.length > 0 ? (
                          products.map((product) => (
                            <li
                              className="endow-link__item"
                              onClick={() => navigate(`/${product._id}`)}
                            >
                              <span className="endow-link__label">5%</span>
                              <div className="endow-link__images img-hover">
                                <img src={product.imgProduct} alt="img" />
                              </div>
                              <div className="endow-link__detail">
                                {/* <div className="endow-link__thumb">
                                <img
                                  src="https://quanlydoitac.viettel.vn/files/qldt/public/partner/logo/2022/6/7/4b94dcd8-928b-460a-b194-1908565f5b2e.jpg"
                                  alt="img"
                                />
                              </div> */}
                                <h5 className="endow-link__name">
                                  <a href="#" className="endow-link__name-href">
                                    {product.name}
                                  </a>
                                </h5>
                                <div className="endow-link__date">
                                  <span className="endow-link__date-icon">
                                    <i className="icon-time" />
                                  </span>
                                  {/* <span className="endow-link__date-value">
                                  31/12/2024
                                </span> */}
                                </div>
                                <div className="endow-link__point">
                                  <span className="endow-link__point-icon">
                                    <i className="icon-ticket" />
                                  </span>
                                  <span className="endow-link__point-value">
                                    {product.price} điểm
                                  </span>
                                </div>
                              </div>
                              <div className="action-hover">
                                <div className="action-hover__btn">
                                  <a
                                    className="button-plus button-plus--transparent button-plus--small"
                                    href="#"
                                  >
                                    Đổi Điểm Ngay
                                  </a>
                                </div>
                              </div>
                            </li>
                          ))
                        ) : (
                          <div>
                            <img src={notFound} />
                            <div style={{ textAlign: "center", fontSize: 40 }}>
                              Không tìm thấy sản phẩm
                            </div>
                          </div>
                        )}
                      </ul>
                      <div className="endow-link__btn">
                        <a
                          href="javascript:void(0)"
                          className="button-plus button-plus--primary"
                        >
                          <i className="icon-load" />
                          Xem Thêm
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="partners-viettel partners-viettel">
            <div className="container">
              <h2 className="section-title">
                Các đối tác của RECYCLABLE WASTE
              </h2>
              <div className="partners-viettel__content">
                <div className="partners-viettel__detail">
                  <div
                    className="lists-slider slider"
                    style={{ position: "relative" }}
                  >
                    <img
                      src={prev}
                      style={{
                        zIndex: 3,
                        position: "absolute",
                        top: "50%",
                        left: 0,
                        width: 30,
                        height: 30,
                        cursor: "pointer",
                      }}
                      onClick={() => setMLeft((prev) => prev + 200)}
                    />
                    <ul
                      class="partners-viettel__list owl-carousel"
                      style={{ overflow: "hidden" }}
                    >
                      <li
                        class="partners-viettel__item"
                        style={{ marginLeft: mLeft, transition: "0.5s" }}
                      >
                        <div class="partners-viettel__thumb">
                          <img
                            src="https://quanlydoitac.viettel.vn/files/qldt/public/partner/logo/2022/4/14/a9c7b828-648d-421f-aed6-2a3d3eae35ef.jpg"
                            alt="img"
                          />
                        </div>
                      </li>
                      <li class="partners-viettel__item">
                        <div class="partners-viettel__thumb">
                          <img
                            src="https://quanlydoitac.viettel.vn/files/qldt/legacy/7dedb40f-f669-4ed3-814a-7ea2c757bc9c.jpg"
                            alt="img"
                          />
                        </div>
                      </li>
                      <li class="partners-viettel__item">
                        <div class="partners-viettel__thumb">
                          <img
                            src="https://quanlydoitac.viettel.vn/files/qldt/legacy/e2414d93-a8c5-4ac2-b3c2-59e1908642e1.jpg"
                            alt="img"
                          />
                        </div>
                      </li>
                      <li class="partners-viettel__item">
                        <div class="partners-viettel__thumb">
                          <img
                            src="https://quanlydoitac.viettel.vn/files/qldt/public/partner/logo/2020/9/15/bcc79fda-bdde-40dc-b99c-e3bbf2d841dd.jpg"
                            alt="img"
                          />
                        </div>
                      </li>
                      <li class="partners-viettel__item">
                        <div class="partners-viettel__thumb">
                          <img
                            src="https://quanlydoitac.viettel.vn/files/qldt/public/partner/logo/2021/11/24/2d07f787-ec88-4b74-b15b-f00c10ed4537.jpg"
                            alt="img"
                          />
                        </div>
                      </li>
                      <li class="partners-viettel__item">
                        <div class="partners-viettel__thumb">
                          <img
                            src="https://quanlydoitac.viettel.vn/files/qldt/public/partner/logo/2022/4/14/a9c7b828-648d-421f-aed6-2a3d3eae35ef.jpg"
                            alt="img"
                          />
                        </div>
                      </li>
                      <li class="partners-viettel__item">
                        <div class="partners-viettel__thumb">
                          <img
                            src="https://quanlydoitac.viettel.vn/files/qldt/legacy/7dedb40f-f669-4ed3-814a-7ea2c757bc9c.jpg"
                            alt="img"
                          />
                        </div>
                      </li>
                      <li class="partners-viettel__item">
                        <div class="partners-viettel__thumb">
                          <img
                            src="https://quanlydoitac.viettel.vn/files/qldt/legacy/e2414d93-a8c5-4ac2-b3c2-59e1908642e1.jpg"
                            alt="img"
                          />
                        </div>
                      </li>
                      <li class="partners-viettel__item">
                        <div class="partners-viettel__thumb">
                          <img
                            src="https://quanlydoitac.viettel.vn/files/qldt/public/partner/logo/2020/9/15/bcc79fda-bdde-40dc-b99c-e3bbf2d841dd.jpg"
                            alt="img"
                          />
                        </div>
                      </li>
                      <li class="partners-viettel__item">
                        <div class="partners-viettel__thumb">
                          <img
                            src="https://quanlydoitac.viettel.vn/files/qldt/public/partner/logo/2021/11/24/2d07f787-ec88-4b74-b15b-f00c10ed4537.jpg"
                            alt="img"
                          />
                        </div>
                      </li>
                    </ul>
                    <img
                      src={next}
                      style={{
                        zIndex: 3,
                        position: "absolute",
                        top: "50%",
                        right: 0,
                        width: 30,
                        height: 30,
                        cursor: "pointer",
                      }}
                      onClick={() => setMLeft((prev) => prev - 200)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="partners-viettel__images">
              <img
                src="./img/doidiem/283977649_579896560237748_6110866617575693626_n.png"
                alt="img"
              />
            </div>
          </section>
          <section className="box-faq-plus">
            <div className="faq-plus">
              <div className="container">
                <h2 className="section-title">Câu hỏi thường gặp Viettel++</h2>
                <div className="faq-plus__content">
                  <ul className="faq-plus__list">
                    {questionArray.map((arr, index) => (
                      <li
                        id="colapse-custom0"
                        className="faq-plus__item"
                        onClick={() => {
                          handleSetOpenTab(index);
                        }}
                      >
                        <div className="faq-plus__top">
                          <h4 className="faq-plus__name">{arr.question}</h4>
                          <span className="faq-plus__icon" />
                        </div>
                        <div
                          id="colapse-result0"
                          className="faq-plus__info"
                          style={
                            questionOpen.includes(index)
                              ? { display: "block" }
                              : { display: "none" }
                          }
                        >
                          <p className="faq-plus__des"></p>
                          <p>
                            <span style={{ fontSize: 14 }}>
                              <span
                                style={{
                                  fontFamily: "arial,helvetica,sans-serif",
                                }}
                              >
                                {arr.answer}
                              </span>
                            </span>
                          </p>
                          <p />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </OutLineBg>
    </>
  );
};

export default ExchangePoint;
