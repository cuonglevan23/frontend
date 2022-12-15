import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState();
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
    }
  }, []);
  const hanldeSignOut = () => {
    localStorage.removeItem("items");
    // navigate("/dang-nhap")
  };
  return (
    <>
      <nav className="navbar box-menu navbar-expand-md navbar-light bg-light sticky-top">
        <div className="container">
          <div className="container-fluid box-head">
            <a className="navbar-branch logo" href="/">
              {/* <img src="img/banner/Logo2.png" height="50"> */}
            </a>
            <div
              className="desk-menu collapse navbar-collapse justify-content-md-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item ">
                  <Link className="nav-link" to="/">
                    TRANG CHỦ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/gioi-thieu">
                    GIỚI THIỆU
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/lien-he">
                    LIÊN HỆ
                  </Link>
                </li>
                <li className="nav-item lisanpham">
                  <Link className="nav-link" to="/">
                    TÍCH ĐIỂM-ĐỔI THƯỞNG
                    <i className="fa fa-chevron-down" aria-hidden="true" />
                  </Link>
                  <ul className="sub_menu">
                    <li className>
                      <Link to="/doi-diem" title="Đổi Điểm Recyclable waste">
                        ĐỔI ĐIỂM RECYCLABLE WASTE
                      </Link>
                    </li>
                    <li className>
                      <Link to="/cach-thuc-doi-diem" title="CÁCH THỨC ĐỔI ĐIỂM">
                        CÁCH THỨC ĐỔI ĐIỂM
                      </Link>
                    </li>
                    <li className>
                      <Link to="/dia-diem-doi-diem" title=" ĐỊA ĐIỂM ĐỔI ĐIỂM">
                        ĐỊA ĐIỂM ĐỔI ĐIỂM
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item lisanpham">
                  <Link className="nav-link" to="/san-pham">
                    SẢN PHẨM
                  </Link>
                </li>
              </ul>
            </div>
            <div className="box-login-out">
              <Link to="/" className="icon-search">
                <i className="fas fa-search" style={{ color: "#007a33" }} />
              </Link>
              {/* <Link style={{ color: "#007a33" }} to="/dang-nhap" className="login-out"> */}
              <div
                className="desk-menu collapse navbar-collapse justify-content-md-end"
                id="navbarNav"
              >
                <ul className="navbar-nav">
                  <li className="nav-item lisanpham">
                    {items ? (
                      <img
                        src={items.avatar}
                        style={{ width: 30, borderRadius: 50 }}
                      />
                    ) : (
                      <i className="fas fa-user-alt" />
                    )}
                    <ul className="sub_menu" style={{ left: 0 }}>
                      {!items ? (
                        <>
                          <li className>
                            <Link
                              to="/dang-nhap"
                              title="Đổi Điểm Recyclable waste"
                            >
                              Đăng nhập
                            </Link>
                          </li>
                          <li className>
                            <Link to="/dang-nhap" title="CÁCH THỨC ĐỔI ĐIỂM">
                              Đăng ký
                            </Link>
                          </li>
                        </>
                      ) : (
                        <>
                          <li className>
                            <Link to="/gio-hang" title="CÁCH THỨC ĐỔI ĐIỂM">
                              Giỏ hàng
                            </Link>
                          </li>
                          <li className>
                            <Link
                              to="/uu-dai-doi-diem"
                              title="CÁCH THỨC ĐỔI ĐIỂM"
                            >
                              Ưu đãi đổi điểm
                            </Link>
                          </li>
                          <li className>
                            <Link to="/history-buy" title="CÁCH THỨC ĐỔI ĐIỂM">
                              Lịch sử mua hàng
                            </Link>
                          </li>
                          <li className>
                            <Link
                              to="/history-exchange"
                              title="CÁCH THỨC ĐỔI ĐIỂM"
                            >
                              Lịch sử đổi điểm
                            </Link>
                          </li>
                          <li className>
                            <Link
                              to="/dang-nhap"
                              title="CÁCH THỨC ĐỔI ĐIỂM"
                              onClick={hanldeSignOut}
                            >
                              Đăng xuất
                            </Link>
                          </li>
                        </>
                      )}
                    </ul>
                  </li>
                </ul>
              </div>
              {/* </i> */}

              {/* </Link> */}

              <div className="box-menu-mobile">
                <button
                  className="navbar-toggler customm-nav"
                  type="button"
                  data-toggle="collapse"
                  data-target="#boxSearch"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  id="boxSearch"
                  uk-offcanvas="flip: true; overlay: true"
                  className="uk-offcanvas uk-offcanvas-overlay box-items-mobile collapse"
                >
                  <div
                    className="uk-offcanvas-bar uk-offcanvas-bar-animation uk-offcanvas-slide"
                    style={{ background: "white", width: 350 }}
                  >
                    <button
                      className="uk-offcanvas-close uk-icon uk-close"
                      style={{ color: "#272727" }}
                      type="button"
                      data-toggle="collapse"
                      data-target="#boxSearch"
                      aria-controls="collapseExample"
                    >
                      <svg
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                        xmlns="http://www.w3.org/2000/svg"
                        data-svg="close-icon"
                      >
                        <line
                          fill="none"
                          stroke="#000"
                          strokeWidth="1.1"
                          x1={1}
                          y1={1}
                          x2={13}
                          y2={13}
                        />
                        <line
                          fill="none"
                          stroke="#000"
                          strokeWidth="1.1"
                          x1={13}
                          y1={1}
                          x2={1}
                          y2={13}
                        />
                      </svg>
                    </button>
                    <div className="justify-content-md-center">
                      <ul className="navbar-nav lst-items-mobile">
                        <li className="nav-item">
                          <a className="nav-link" href="/">
                            TRANG CHỦ
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/">
                            LIÊN HỆ
                          </a>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            TÍCH ĐIỂM - ĐỔI THƯỞNG
                          </a>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdown"
                            style={{ border: 0 }}
                          >
                            <a
                              className="dropdown-item"
                              href="detailproduct.html"
                              title="Sản phẩm - Style 1"
                            >
                              ĐỔI ĐIỂM RECYCLABLE WASTE
                            </a>
                            <a className="dropdown-item" href="/">
                              CÁCH THỨC ĐỔI ĐIỂM
                            </a>
                            <a className="dropdown-item" href="/">
                              ĐỊA ĐIỂM ĐỔI ĐIỂM
                            </a>
                          </div>
                        </li>
                        {/* <li className="nav-item">
                          <a className="nav-link" href="introduce.html">
                            LIÊN HỆ
                          </a>
                        </li> */}
                        {/* <li className="nav-item">
                          <a className="nav-link" href="blog.html">
                            BLOG
                          </a>
                        </li> */}
                        <li className="nav-item">
                          <a className="nav-link" href="/">
                            SẢN PHẨM
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
