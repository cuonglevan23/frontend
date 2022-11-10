import OutLineBg from "../OutLineBg";

const Product = () =>{
    return (
        <>
        <OutLineBg>
        <div className="box-products">  
  <div className="box-image-head">   
    <div className="container">
      <p className="txt-text">SẢN PHẨM</p>
    </div>
  </div>
  <div className="box-content">
    <div className="container">
      <nav className="woocommerce-breadcrumb"><a href="https://green.hap.vn">Trang chủ</a>&nbsp;/&nbsp;Sản phẩm</nav>
      <form className="woocommerce-ordering" method="get">
        <select name="orderby" className="orderby">
          <option value="popularity">Phổ biến nhất</option>
          <option value="date" selected="selected">Mới nhất</option>
          <option value="price">Giá thấp đến cao</option>
          <option value="price-desc">Giá cao xuống thấp</option>
        </select>
        <input type="hidden" name="paged" defaultValue={1} />
        <input type="hidden" name="fbclid" defaultValue="IwAR2Py_aKj8B6yBk9I-I4pK_7PZO0HpzhJO8diAg4cI6wMJwXlXNma-stsdk" />
      </form>
      <div className="box-content-left-top">
        <div className="row">
          <div className="custom-col-left custom-col-sm">
            <div className="box-content-left">
              <div id="woocommerce_product_search-2" className="widget woocommerce widget_product_search">
                <h3 className="widget-title">Tìm kiếm sản phẩm</h3>
                <form role="search" method="get" className="woocommerce-product-search" action="https://green.hap.vn/">
                  <label className="screen-reader-text" htmlFor="woocommerce-product-search-field-0">Tìm kiếm cho:</label>
                  <input type="search" id="woocommerce-product-search-field-0" className="search-field" placeholder="Tìm sản phẩm…" defaultValue name="s" />
                  <button type="submit" value="Tìm kiếm">Tìm kiếm</button>
                  <input type="hidden" name="post_type" defaultValue="product" />
                </form>
              </div>
              <div id="woocommerce_price_filter-2" className="widget woocommerce widget_price_filter">
                <h3 className="widget-title">Lọc theo giá</h3>
                <form method="get" action="https://green.hap.vn/san-pham/">
                  <div className="price_slider_wrapper">
                    <div className="price_slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" style={{}}>
                      <input type="range" min={1} max={100} defaultValue={50} />
                      <span className="range-max" />
                    </div>
                    <div className="price_slider_amount">
                      <input type="text" id="min_price" name="min_price" defaultValue={14500} data-min={14500} placeholder="Giá thấp nhất" style={{display: 'none'}} />
                      <input type="text" id="max_price" name="max_price" defaultValue={499000} data-max={499000} placeholder="Giá cao nhất" style={{display: 'none'}} />
                      <button type="submit" className="button">Lọc</button>
                      <div className="price_label" style={{}}>
                        Giá: <span className="from">14.500&nbsp;₫</span> — <span className="to">499.000&nbsp;₫</span>
                      </div>
                      <input type="hidden" name="fbclid" defaultValue="IwAR2Py_aKj8B6yBk9I-I4pK_7PZO0HpzhJO8diAg4cI6wMJwXlXNma-stsdk" />
                      <div className="clear" />
                    </div>
                  </div>
                </form>
              </div>
              <div id="woocommerce_product_categories-2" className="widget woocommerce widget_product_categories">
                <h3 className="widget-title">Danh mục sản phẩm</h3>
                <ul className="product-categories">
                  <li className="cat-item cat-item-204"><a href="https://green.hap.vn/danh-muc/dac-san-nghe-tinh">Đặc sản Nghệ Tĩnh</a></li>
                  <li className="cat-item cat-item-205"><a href="https://green.hap.vn/danh-muc/dac-san-tay-bac">Đặc sản Tây Bắc</a></li>
                  <li className="cat-item cat-item-192"><a href="https://green.hap.vn/danh-muc/thuc-pham-sach/gia-vi-an-toan">Gia vị an toàn</a></li>
                  <li className="cat-item cat-item-26"><a href="https://green.hap.vn/danh-muc/hat-giong-an-toan">Hạt giống an toàn</a></li>
                  <li className="cat-item cat-item-50"><a href="https://green.hap.vn/danh-muc/hat-giong-an-toan/hat-giong-rau">Hạt giống rau</a></li>
                  <li className="cat-item cat-item-27"><a href="https://green.hap.vn/danh-muc/thuc-pham-sach">Thực phẩm sạch</a></li>
                  <li className="cat-item cat-item-45"><a href="https://green.hap.vn/danh-muc/thuc-pham-sach/rau-sach-da-nang">Rau sạch Đà Nẵng</a></li>
                  <li className="cat-item cat-item-191"><a href="https://green.hap.vn/danh-muc/thuc-pham-sach/thuc-pham-thuc-duong">Thực phẩm thực dưỡng</a></li>
                  <li className="cat-item cat-item-188"><a href="https://green.hap.vn/danh-muc/thuc-pham-sach/trai-cay-sach">Trái cây sạch</a></li>
                  <li className="cat-item cat-item-189"><a href="https://green.hap.vn/danh-muc/thuc-pham-sach/thuc-pham-kho">Thực phẩm khô</a></li>
                </ul>
              </div>
            </div>
          </div> 
          <div className="custom-col-right">
            <div className="box-content-right">
              <div className="item-product"> 
                <div className="item-content">
                  <a href className="custom-box">
                    <div className="thume-img">
                      <span className="onsale" />
                    </div>
                    <div className="box-text-content">
                      <h2 className="woocommerce-loop-product__title">Đường ăn kiêng, đường giảm cân (Nhập khẩu Đức)</h2>
                      <span className="price"><del><span className="woocommerce-Price-amount amount">110.000&nbsp;<span className="woocommerce-Price-currencySymbol">₫</span></span></del> <span className="woocommerce-Price-amount amount giam">85.000&nbsp;<span className="woocommerce-Price-currencySymbol">₫</span></span></span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="item-product"> 
                <div className="item-content">
                  <a href className="custom-box">
                    <div className="thume-img">
                      <span className="onsale" />
                    </div>
                    <div className="box-text-content">
                      <h2 className="woocommerce-loop-product__title">Đường ăn kiêng, đường giảm cân (Nhập khẩu Đức)</h2>
                      <span className="price"><del><span className="woocommerce-Price-amount amount">110.000&nbsp;<span className="woocommerce-Price-currencySymbol">₫</span></span></del> <span className="woocommerce-Price-amount amount giam">85.000&nbsp;<span className="woocommerce-Price-currencySymbol">₫</span></span></span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="item-product"> 
                <div className="item-content">
                  <a href className="custom-box">
                    <div className="thume-img">
                      <span className="onsale" />
                    </div>
                    <div className="box-text-content">
                      <h2 className="woocommerce-loop-product__title">Đường ăn kiêng, đường giảm cân (Nhập khẩu Đức)</h2>
                      <span className="price"><del><span className="woocommerce-Price-amount amount">110.000&nbsp;<span className="woocommerce-Price-currencySymbol">₫</span></span></del> <span className="woocommerce-Price-amount amount giam">85.000&nbsp;<span className="woocommerce-Price-currencySymbol">₫</span></span></span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
</div>

        </OutLineBg>
        </>
    );
}

export default Product;