import OutLineBg from "../OutLineBg";

const TelecomOffersDetail = () =>{
    return(
        <>
        <OutLineBg>
        <div>
  <div className="telecom-offer-detail">
    <div className="container">
      <h2 className="section-title">
        Ưu đãi viễn thông
      </h2>
      <div className="telecom-offer__content">
        <ul className="telecom-list">
          <li className="telecom-list__item telecom-list__item_custom cuoc-di-dong active" data-param="cuoc-di-dong" data-name="Cước Di Động">
            <a className="telecom-list__link">
              <span className="telecom-list__icon">
                <i className="fa-solid fa-mobile-screen">
                </i>
              </span> <span className="telecom-list__name">Cước Di Động</span>
            </a>
          </li>
          <li className="telecom-list__item telecom-list__item_custom data" data-name="Data" data-param="data"><a className="telecom-list__link"><span className="telecom-list__icon"><i className="fas fa-database" /></span> <span className="telecom-list__name">Data</span></a></li>
          <li className="telecom-list__item telecom-list__item_custom phut-goi" data-name="Phút Gọi" data-param="phut-goi"><a className="telecom-list__link"><span className="telecom-list__icon"><i className="fa-solid fa-phone-volume" style={{transform: 'rotate(-35deg)'}} /></span> <span className="telecom-list__name">Phút Gọi</span></a></li>
          <li className="telecom-list__item telecom-list__item_custom sms" data-name="SMS" data-param="sms"><a className="telecom-list__link"><span className="telecom-list__icon"><i className="fa-solid fa-comment-dots" /></span> <span className="telecom-list__name">SMS</span></a></li>
          <li className="telecom-list__item goi-cuoc" data-param="goi-cuoc"><a className="telecom-list__link"><span className="telecom-list__icon"><i className="fa-solid fa-file-lines" /></span> <span className="telecom-list__name">Gói Cước</span></a></li>
        </ul>
        <div className="telecom-box">
          <div className="cuoc-di-dong item-uu-dai" style={{display: 'none'}}>
            <div className="telecom-box__exchange">
              <p className="telecom-box__exchange-value">
                <span>1.000</span>
                điểm =
                <span>1000</span>
                tiền cước
              </p>
            </div>
            <ul className="telecom-box__list">
              <li className="telecom-box__item">
                <h5 className="telecom-box__sub">Thể lệ</h5>
                <div className="telecom-box__detail">
                  <p className="telecom-box__des">
                  </p><p>
                    <span style={{fontSize: 14}}><span style={{fontFamily: 'arial,helvetica,sans-serif'}}>Điều kiện áp dụng: Khách hàng di động và cố định là hội viên Kim Cương, Vàng, Bạc có số điểm tiêu dùng từ 1.000 điểm trở lên.</span></span>
                  </p>
                  <p>
                    <span style={{fontSize: 14}}><span style={{fontFamily: 'arial,helvetica,sans-serif'}}>Mức điểm đổi tối thiểu: 100 điểm.</span></span>
                  </p>
                  <p>
                    <span style={{fontSize: 14}}><span style={{fontFamily: 'arial,helvetica,sans-serif'}}>Tiền cước sau quy đổi được cộng vào tài khoản khuyến mại với thuê bao trả trước hoặc điều chỉnh vào hóa đơn cước với thuê bao trả sau.</span></span>
                  </p>
                  <p>
                    <span style={{fontSize: 14}}><span style={{fontFamily: 'arial,helvetica,sans-serif'}}>Tiền nạp từ đổi điểm không được hưởng các chương trình khuyến mại thẻ nạp khác (nếu có) và không được sử dụng để tích điểm xét hạng.</span></span>
                  </p>
                  @*<p />*@
                </div>
                {/**/}
              </li>
            </ul>
          </div>
          <div className="data item-uu-dai" style={{display: 'none'}}>
            <div className="telecom-box__exchange">
              <p className="telecom-box__exchange-value">
                <span>1.000</span>
                điểm =
                <span>200</span>
                MB/ngày
              </p>
            </div>
            <ul className="telecom-box__list">
              <li className="telecom-box__item">
                <h5 className="telecom-box__sub">Thể lệ</h5>
                <div className="telecom-box__detail">
                  <p>@*  *@
                  </p><p style={{textAlign: 'justify'}}>
                    <span style={{fontSize: 14}}><span style={{fontFamily: 'arial, helvetica, sans-serif'}}>Điều kiện áp dụng: Khách hàng di động có số điểm tiêu dùng từ 1.000 điểm trở lên.</span></span>
                  </p>
                  <p style={{textAlign: 'justify'}}>
                    <span style={{fontSize: 14}}><span style={{fontFamily: 'arial, helvetica, sans-serif'}}>Mức điểm đổi tối thiểu: 100 điểm.</span></span>
                  </p>
                  <p style={{textAlign: 'justify'}}>
                    <span style={{fontSize: 14}}><span style={{fontFamily: 'arial, helvetica, sans-serif'}}>Thời gian sử dụng: Trong ngày sau khi đổi</span></span>
                  </p>
                  @*<p />*@
                </div>
                {/**/}
              </li>
            </ul>
          </div>
          <div className="phut-goi item-uu-dai" style={{display: 'none'}}>
            <div className="telecom-box__exchange">
              <p className="telecom-box__exchange-value">
                <span>1.000</span>
                điểm =
                <span>10</span>
                phút gọi nội mạng
              </p>
            </div>
            <ul className="telecom-box__list">
              <li className="telecom-box__item">
                <h5 className="telecom-box__sub">Thể lệ</h5>
                <div className="telecom-box__detail">
                  <p className="telecom-box__des">
                  </p><p style={{textAlign: 'justify'}}>
                    <span style={{fontSize: 14}}><span style={{fontFamily: 'arial,helvetica,sans-serif'}}>Điều kiện áp dụng: Khách hàng di động có số điểm tiêu dùng từ 1.000 điểm trở lên.</span></span>
                  </p>
                  <p style={{textAlign: 'justify'}}>
                    <span style={{fontSize: 14}}><span style={{fontFamily: 'arial,helvetica,sans-serif'}}>Mức điểm đổi tối thiểu: 100 điểm.</span></span>
                  </p>
                  <p style={{textAlign: 'justify'}}>
                    <span style={{fontSize: 14}}><span style={{fontFamily: 'arial,helvetica,sans-serif'}}>Thời gian sử dụng: 30 ngày sau khi đổi.</span></span>
                  </p>
                  <p />
                </div>
                {/**/}
              </li>
            </ul>
          </div>
          <div className="sms item-uu-dai" style={{display: 'none'}}>
            <div className="telecom-box__exchange">
              <p className="telecom-box__exchange-value">
                <span>1.000</span>
                điểm =
                <span>100</span>
                SMS nội mạng
              </p>
            </div>
            <ul className="telecom-box__list">
              <li className="telecom-box__item">
                <h5 className="telecom-box__sub">Thể lệ</h5>
                <div className="telecom-box__detail">
                  <p className="telecom-box__des">
                  </p><p>
                    <span style={{fontSize: 14}}><span style={{fontFamily: 'arial,helvetica,sans-serif'}}>Điều kiện áp dụng: Khách hàng di động có số điểm tiêu dùng từ 1.000 điểm trở lên.</span></span>
                  </p>
                  <p>
                    <span style={{fontFamily: 'arial, helvetica, sans-serif', fontSize: 14}}>Mức điểm đổi tối thiểu: 100 điểm.</span>
                  </p>
                  <p>
                    <span style={{fontFamily: 'arial, helvetica, sans-serif', fontSize: 14}}>Thời gian sử dụng: 30 ngày sau khi đổi.</span>
                  </p>
                  <p />
                </div>
                {/**/}
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/**/}
      <div className="exchange-point">
        <h3 className="exchange-point__title">
          Gói điểm quy đổi
        </h3>
        <ul className="exchange-point__list cuoc-di-dong item-goi-quy-doi" style={{display: 'none'}}>
          <li className="exchange-point__item" data-point={50000} data-name={50.000}>
            <span className="exchange-point__action"><i className="icon-check" /></span>
            <div className="exchange-point__images img-hover"><img src="https://vietteltelecom.vn/images-viettel-plus/img-tele-point-1.png" alt="img" /></div>
            <div className="exchange-point__info">
              <span className="exchange-point__icon"><i className="icon-deposit" /></span> <span className="exchange-point__name">
                50.000 điểm
              </span>
            </div>
          </li>
          <li className="exchange-point__item" data-point={100000} data-name={100.000}>
            <span className="exchange-point__action"><i className="icon-check" /></span>
            <div className="exchange-point__images img-hover"><img src="https://vietteltelecom.vn/images-viettel-plus/img-tele-point-2.png" alt="img" /></div>
            <div className="exchange-point__info">
              <span className="exchange-point__icon"><i className="icon-deposit" /></span> <span className="exchange-point__name">
                100.000 điểm
              </span>
            </div>
          </li>
          <li className="exchange-point__item" data-point={150000} data-name={150.000}>
            <span className="exchange-point__action"><i className="icon-check" /></span>
            <div className="exchange-point__images img-hover"><img src="https://vietteltelecom.vn/images-viettel-plus/img-tele-point-3.png" alt="img" /></div>
            <div className="exchange-point__info">
              <span className="exchange-point__icon"><i className="icon-deposit" /></span> <span className="exchange-point__name">
                150.000 điểm
              </span>
            </div>
          </li>
          <li className="exchange-point__item" data-point={200000} data-name={200.000}>
            <span className="exchange-point__action"><i className="icon-check" /></span>
            <div className="exchange-point__images img-hover"><img src="https://vietteltelecom.vn/images-viettel-plus/img-tele-point-4.png" alt="img" /></div>
            <div className="exchange-point__info">
              <span className="exchange-point__icon"><i className="icon-deposit" /></span> <span className="exchange-point__name">
                200.000 điểm
              </span>
            </div>
          </li>
        </ul>
        <ul className="exchange-point__list data item-goi-quy-doi" style={{display: 'none'}}>
          <li className="exchange-point__item" data-point={1000} data-name="200 MB">
            <span className="exchange-point__action"><i className="icon-check" /></span> <div className="exchange-point__images img-hover"><img src="https://vietteltelecom.vn/images-viettel-plus/img-tele-pack-1.png" alt="img" /></div> <div className="exchange-point__info">
              <span className="exchange-point__icon"><i className="icon-deposit" /></span> <span className="exchange-point__name">
                1.000 điểm
              </span>
            </div>
          </li>
          <li className="exchange-point__item" data-point={2000} data-name="400 MB">
            <span className="exchange-point__action"><i className="icon-check" /></span> <div className="exchange-point__images img-hover"><img src="https://vietteltelecom.vn/images-viettel-plus/img-tele-pack-2.png" alt="img" /></div> <div className="exchange-point__info">
              <span className="exchange-point__icon"><i className="icon-deposit" /></span> <span className="exchange-point__name">
                2.000 điểm
              </span>
            </div>
          </li>
          <li className="exchange-point__item" data-point={3000} data-name="600 MB">
            <span className="exchange-point__action"><i className="icon-check" /></span> <div className="exchange-point__images img-hover"><img src="https://vietteltelecom.vn/images-viettel-plus/img-tele-pack-3.png" alt="img" /></div> <div className="exchange-point__info">
              <span className="exchange-point__icon"><i className="icon-deposit" /></span> <span className="exchange-point__name">
                3.000 điểm
              </span>
            </div>
          </li>
          <li className="exchange-point__item" data-point={4000} data-name="600 MB">
            <span className="exchange-point__action"><i className="icon-check" /></span> <div className="exchange-point__images img-hover"><img src="https://vietteltelecom.vn/images-viettel-plus/img-tele-pack-4.png" alt="img" /></div> <div className="exchange-point__info">
              <span className="exchange-point__icon"><i className="icon-deposit" /></span> <span className="exchange-point__name">
                4.000 điểm
              </span>
            </div>
          </li>
        </ul>
        <ul className="exchange-point__list phut-goi item-goi-quy-doi" style={{display: 'none'}}>
          <li className="exchange-point__item" data-point={500} data-name="5 phút">
            <span className="exchange-point__action"><i className="icon-check" /></span> <div className="exchange-point__images img-hover"><img src="https://vietteltelecom.vn/images-viettel-plus/img-tele-time-1.png" alt="img" /></div> <div className="exchange-point__info">
              <span className="exchange-point__icon"><i className="icon-deposit" /></span> <span className="exchange-point__name">
                500 điểm
              </span>
            </div>
          </li>
          <li className="exchange-point__item" data-point={1000} data-name="10 phút">
            <span className="exchange-point__action"><i className="icon-check" /></span> <div className="exchange-point__images img-hover"><img src="https://vietteltelecom.vn/images-viettel-plus/img-tele-time-2.png" alt="img" /></div> <div className="exchange-point__info">
              <span className="exchange-point__icon"><i className="icon-deposit" /></span> <span className="exchange-point__name">
                1.000 điểm
              </span>
            </div>
          </li>
          <li className="exchange-point__item" data-point={1500} data-name="10 phút">
            <span className="exchange-point__action"><i className="icon-check" /></span> <div className="exchange-point__images img-hover"><img src="https://vietteltelecom.vn/images-viettel-plus/img-tele-time-3.png" alt="img" /></div> <div className="exchange-point__info">
              <span className="exchange-point__icon"><i className="icon-deposit" /></span> <span className="exchange-point__name">
                1.500 điểm
              </span>
            </div>
          </li>
          <li className="exchange-point__item" data-point={2000} data-name="15 phút">
            <span className="exchange-point__action"><i className="icon-check" /></span> <div className="exchange-point__images img-hover"><img src="https://vietteltelecom.vn/images-viettel-plus/img-tele-time-4.png" alt="img" /></div> <div className="exchange-point__info">
              <span className="exchange-point__icon"><i className="icon-deposit" /></span> <span className="exchange-point__name">
                2.000 điểm
              </span>
            </div>
          </li>
        </ul>
        <ul className="exchange-point__list sms item-goi-quy-doi" style={{display: 'none'}}>
          <li className="exchange-point__item" data-point={500} data-name="50 sms">
            <span className="exchange-point__action"><i className="icon-check" /></span> <div className="exchange-point__images img-hover"><img src="https://vietteltelecom.vn/images-viettel-plus/img-tele-sms-1.png" alt="img" /></div> <div className="exchange-point__info">
              <span className="exchange-point__icon"><i className="icon-deposit" /></span> <span className="exchange-point__name">
                500 điểm
              </span>
            </div>
          </li>
          <li className="exchange-point__item" data-point={1000} data-name="100 sms">
            <span className="exchange-point__action"><i className="icon-check" /></span> <div className="exchange-point__images img-hover"><img src="https://vietteltelecom.vn/images-viettel-plus/img-tele-sms-2.png" alt="img" /></div> <div className="exchange-point__info">
              <span className="exchange-point__icon"><i className="icon-deposit" /></span> <span className="exchange-point__name">
                1.000 điểm
              </span>
            </div>
          </li>
          <li className="exchange-point__item" data-point={1500} data-name="150 sms">
            <span className="exchange-point__action"><i className="icon-check" /></span> <div className="exchange-point__images img-hover"><img src="https://vietteltelecom.vn/images-viettel-plus/img-tele-sms-3.png" alt="img" /></div> <div className="exchange-point__info">
              <span className="exchange-point__icon"><i className="icon-deposit" /></span> <span className="exchange-point__name">
                1.500 điểm
              </span>
            </div>
          </li>
          <li className="exchange-point__item" data-point={2000} data-name="200 sms">
            <span className="exchange-point__action"><i className="icon-check" /></span> <div className="exchange-point__images img-hover"><img src="https://vietteltelecom.vn/images-viettel-plus/img-tele-sms-4.png" alt="img" /></div> <div className="exchange-point__info">
              <span className="exchange-point__icon"><i className="icon-deposit" /></span> <span className="exchange-point__name">
                2.000 điểm
              </span>
            </div>
          </li>
        </ul>
      </div>
      {/**/}
      <div className="telecom-offer__btn">
        <a href="#" className="button-plus button-plus--primary button-plus--medium btn-xac-nhan-doi-diem">
          Xác Nhận Đổi Điểm
        </a>
      </div>
    </div>
  </div>
  <div className="modal fade" tabIndex={-1} role="dialog" id="exampleModal">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Đổi điểm nhận ưu đãi</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <p className="title-doi">Ưu đãi viễn thông sẽ được chuyển đổi theo điểm của bạn tích lũy.</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary btn-agree">Đồng ý</button>
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Hủy</button>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade" tabIndex={-1} role="dialog" id="loginres">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Đổi điểm nhận ưu đãi viễn thông</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <p className="title-doi">Vui lòng đăng nhập để nhận được ưu đãi viễn thông.</p>
        </div>
        <div className="modal-footer">
          <a className="btn btn-primary" href="/AcountUser/Login">Đồng ý</a>
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Hủy</button>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade" tabIndex={-1} role="dialog" id="exampleModalSussec">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Đổi điểm nhận quà</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <p className="title-doi" style={{textAlign: 'center'}}>Bạn đã đổi điểm thành công.</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary btn-close-sucsses">Đóng</button>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade" tabIndex={-1} role="dialog" id="exampleModalUuDai">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Đổi điểm nhận ưu đãi viễn thông</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <p className="title-doi" style={{textAlign: 'center'}}>Vui lòng chọn ưu đãi</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary btn-close-sucsses">Đóng</button>
        </div>
      </div>
    </div>
  </div>
  @**@
  <style dangerouslySetInnerHTML={{__html: "\n    ul li {\n        list-style-type: none;\n    }\n\n    ul {\n        padding-left: 0px;\n    }\n\n    a {\n        text-decoration: none !important;\n    }\n    .btn-xac-nhan-doi-diem:hover {\n        color: #fff;\n    }\n    .telecom-offer-detail {\n        margin-top: 120px;\n    }\n\n    .section-title {\n        color: #26292b !important;\n        font-family: 'FS Magistral', sans-serif !important;\n        font-size: 44px !important;\n        font-weight: 700 !important;\n        line-height: 64px !important;\n        text-transform: unset !important;\n        margin: 0 0 15px;\n        text-align: center;\n        word-break: break-word;\n        padding-top: 50px;\n    }\n\n    .telecom-list {\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: -ms-flexbox;\n        display: flex;\n        margin: 0 -15px;\n        padding: 20px 90px 0;\n    }\n\n    .telecom-list__item.active, .telecom-list__item:hover {\n        background-color: #007a33;\n        border-color: #007a33;\n    }\n\n    .telecom-list__item {\n        background-color: #f7f7f7;\n        border: 1px solid #e7e7e7;\n        border-radius: 4px;\n        -webkit-box-flex: 0;\n        -webkit-flex: 0 0 calc(100% / 5 - 30px);\n        -ms-flex: 0 0 calc(100% / 5 - 30px);\n        flex: 0 0 calc(100% / 5 - 30px);\n        margin: 0 15px;\n        width: calc(100% / 5 - 30px);\n    }\n\n    .telecom-list__link {\n        -webkit-box-align: center;\n        -webkit-align-items: center;\n        -ms-flex-align: center;\n        align-items: center;\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n        -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n        flex-direction: column;\n        -webkit-box-pack: center;\n        -webkit-justify-content: center;\n        -ms-flex-pack: center;\n        justify-content: center;\n        min-height: 160px;\n        padding: 10px;\n    }\n\n    .telecom-list__item.active .telecom-list__icon, .telecom-list__item:hover .telecom-list__icon {\n        color: #fff;\n    }\n\n    .telecom-list__icon {\n        color: #007a33;\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: -ms-flexbox;\n        display: flex;\n        margin: 0 0 10px;\n    }\n\n    .telecom-list__name {\n        color: #44494d;\n        font-family: 'FS PFBeauSansPro', sans-serif;\n        font-size: 16px;\n        font-weight: 600;\n        line-height: 24px;\n        text-align: center;\n    }\n\n    .telecom-list__icon i {\n        font-size: 40px;\n    }\n\n    .telecom-box {\n        background-color: #f7f7f7;\n        border-radius: 4px;\n        margin: 40px auto;\n        max-width: 790px;\n        padding: 25px;\n        width: 100%;\n    }\n\n    .telecom-box__exchange {\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n        -webkit-justify-content: center;\n        -ms-flex-pack: center;\n        justify-content: center;\n        margin: 0 0 25px;\n    }\n\n    .telecom-box__exchange-value {\n        background-color: #fff;\n        border-radius: 4px;\n        color: #007a33;\n        font-family: 'FS Magistral', sans-serif;\n        font-size: 20px;\n        line-height: 30px;\n        padding: 15px 25px;\n    }\n\n        .telecom-box__exchange-value span {\n            font-size: 24px;\n            font-weight: 600;\n            line-height: 32px;\n        }\n\n    .telecom-box__sub {\n        font-weight: 700 !important;\n    }\n\n    .telecom-box__sub {\n        color: #000;\n        font-family: 'FS PFBeauSansPro', sans-serif;\n        font-size: 18px;\n        font-weight: 600;\n        line-height: 28px;\n        margin: 0 0 8px;\n    }\n\n    .telecom-box__des, .telecom-box__des p, .telecom-box__des span {\n        font-weight: 400 !important;\n    }\n\n    .telecom-box__des {\n        color: #26292b;\n        font-family: 'FS PFBeauSansPro', sans-serif;\n        font-size: 16px;\n        line-height: 24px;\n    }\n\n        .telecom-box__des, .telecom-box__des p, .telecom-box__des span {\n            font-weight: 400 !important;\n        }\n\n    .exchange-point {\n        margin: 40px 0 0;\n    }\n\n    .exchange-point__title {\n        font-weight: 700 !important;\n    }\n\n    .exchange-point__title {\n        color: #26292b;\n        font-family: 'FS Magistral', sans-serif;\n        font-size: 32px;\n        font-weight: 600;\n        line-height: 44px;\n        margin: 0 0 24px;\n        text-align: center;\n    }\n\n    .exchange-point__list {\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-flex-wrap: wrap;\n        -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n        margin: 0 -15px;\n    }\n\n    .exchange-point__item {\n        background-color: #fff;\n        border: 1px solid #e7e7e7;\n        border-radius: 4px;\n        cursor: pointer;\n        -webkit-box-flex: 0;\n        -webkit-flex: 0 0 calc(100% / 4 - 30px);\n        -ms-flex: 0 0 calc(100% / 4 - 30px);\n        flex: 0 0 calc(100% / 4 - 30px);\n        height: 100%;\n        margin: 0 15px;\n        position: relative;\n        width: calc(100% / 4 - 30px);\n    }\n\n    .exchange-point__action {\n        -webkit-box-align: center;\n        -webkit-align-items: center;\n        -ms-flex-align: center;\n        align-items: center;\n        background-color: #007a33;\n        border-radius: 50%;\n        display: none;\n        height: 28px;\n        -webkit-box-pack: center;\n        -webkit-justify-content: center;\n        -ms-flex-pack: center;\n        justify-content: center;\n        position: absolute;\n        right: -15px;\n        top: -15px;\n        width: 28px;\n        z-index: 1;\n    }\n\n        .exchange-point__action i {\n            color: #fff;\n            font-size: 10px;\n        }\n\n    .telecom-offer__btn {\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n        -webkit-justify-content: center;\n        -ms-flex-pack: center;\n        justify-content: center;\n        margin: 40px 0 25px;\n    }\n\n        .telecom-offer__btn .button-plus {\n            width: 445px;\n        }\n\n    .button--disabled {\n        background-color: #e4e4e4;\n        border-color: #e4e4e4;\n        color: #727272;\n        pointer-events: none;\n    }\n\n    .button-plus--medium {\n        font-size: 14px;\n        line-height: 20px;\n        padding: 9px 15px;\n    }\n\n    .button-plus--primary {\n        background-color: #007a33;\n        color: #fff;\n    }\n\n    .button-plus {\n        -webkit-box-align: center;\n        -webkit-align-items: center;\n        -ms-flex-align: center;\n        align-items: center;\n        border: 1px solid transparent;\n        border-radius: 4px;\n        cursor: pointer;\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: -ms-flexbox;\n        display: flex;\n        font-family: 'FS PFBeauSansPro', sans-serif;\n        font-size: 16px;\n        font-weight: 600;\n        -webkit-box-pack: center;\n        -webkit-justify-content: center;\n        -ms-flex-pack: center;\n        justify-content: center;\n        line-height: 24px;\n        padding: 9px 20px;\n        position: relative;\n        text-align: center;\n        -webkit-transition: all 0.3s;\n        transition: all 0.3s;\n        z-index: 1;\n    }\n\n    .telecom-list__item.active .telecom-list__name, .telecom-list__item:hover .telecom-list__name {\n        color: #fff;\n    }\n\n    .exchange-point__info {\n        -webkit-box-align: center;\n        -webkit-align-items: center;\n        -ms-flex-align: center;\n        align-items: center;\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n        -webkit-justify-content: center;\n        -ms-flex-pack: center;\n        justify-content: center;\n        padding: 16px 20px;\n    }\n\n    .exchange-point__name {\n        color: #26292b;\n        font-family: 'FS PFBeauSansPro', sans-serif;\n        font-size: 16px;\n        font-weight: 600;\n        line-height: 24px;\n    }\n\n    .exchange-point__images {\n        border-radius: 4px 4px 0 0;\n        height: 200px;\n    }\n\n    .img-hover img:hover {\n        -webkit-transform: scale(1.05, 1.05);\n        -ms-transform: scale(1.05, 1.05);\n        transform: scale(1.05, 1.05);\n        -webkit-transition: all 0.5s;\n        transition: all 0.5s;\n    }\n\n    .exchange-point__item.active {\n        border: 4px solid #007a33;\n    }\n\n    .exchange-point__item {\n        background-color: #fff;\n        border: 1px solid #e7e7e7;\n        border-radius: 4px;\n        cursor: pointer;\n        -webkit-box-flex: 0;\n        -webkit-flex: 0 0 calc(100% / 4 - 30px);\n        -ms-flex: 0 0 calc(100% / 4 - 30px);\n        flex: 0 0 calc(100% / 4 - 30px);\n        height: 100%;\n        margin: 0 15px;\n        position: relative;\n        width: calc(100% / 4 - 30px);\n    }\n\n    .img-hover {\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: -ms-flexbox;\n        display: flex;\n        overflow: hidden;\n    }\n" }} />
</div>


        </OutLineBg>
        </>
    );
}

export default TelecomOffersDetail;