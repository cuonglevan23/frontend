import OutLineBg from "../OutLineBg";

const Contact = ()=>{
    return(
      <>
      <OutLineBg>
   <div id="slides" className="carousel slide" data-ride="carousel">
  <ul className="carousel-indicators">
    <li data-target="#slides" />
  </ul>
  <div className="carousel-inner">
    <div className="carousel-item carousel-item-custom active">
      <img src="img/test/pexels-min-an-1353938.jpg" />
    </div>
  </div>
</div>

      <section>
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-sm-12 col-xs-12 box-heading-contact">
        <div className="box-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.738711613717!2d108.25104871416863!3d15.975015746200757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421088e365cc75%3A0x6648fdda14970b2c!2zNDcwIMSQxrDhu51uZyBUcuG6p24gxJDhuqFpIE5naMSpYSwgSG_DoCBI4bqjaSwgTmfFqSBIw6BuaCBTxqFuLCDEkMOgIE7hurVuZyA1NTAwMDAsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1653537904559!5m2!1sen!2s" width="100%" height={700} frameBorder={0} style={{border: 0}} allowFullScreen />
        </div>
      </div>
      <div className="col-md-6 col-sm-12 col-xs-12  wrapbox-content-page-contact">
        <div className="header-page-contact clearfix">
          <h1>Liên hệ</h1>
        </div>
        <div className="box-info-contact">
          <ul className="list-info">
            <li>
              <p>Địa chỉ chúng tôi</p>
              <p><strong>470 Đường Trần Đại Nghĩa, Hoà Hải, Ngũ Hành Sơn, Đà Nẵng.</strong></p>
            </li>
            <li>
              <p>Email chúng tôi</p>
              <p><strong>cuonglv.21ad@vku.udn.vn</strong></p>
            </li>
            <li>
              <p>Điện thoại</p>
              <p><strong>+84 978 213 022 </strong></p>
            </li>
            <li>
              <p>Thời gian làm việc</p>
              <p><strong>Thứ 2 đến Thứ 6 từ 8h đến 18h; Thứ 7 và Chủ nhật từ 9h30 đến 17h00 </strong></p>
            </li>
          </ul>
        </div>
        <div className="box-send-contact">
          <h2>Gửi thắc mắc cho chúng tôi</h2>
          <div id="col-left contactFormWrapper menuList-links">
            <form acceptCharset="UTF-8" action="/contact" className="contact-form" method="post">
              <div className="contact-form">
                <div className="row">
                  <div className="col-sm-12 col-xs-12">
                    <div className="input-group">
                      <input required type="text" className="form-control" placeholder="Tên của bạn" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-xs-12">
                    <div className="input-group">
                      <input required type="text" className="form-control" placeholder="Email của bạn" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-xs-12">
                    <div className="input-group">
                      <input required type="text" className="form-control" placeholder="Số điện thoại của bạn" />
                    </div>
                  </div>
                  <div className="col-sm-12 col-xs-12">
                    <div className="input-group">
                      <textarea placeholder="Nội dung" defaultValue={""} />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <button className="button dark">Gửi cho chúng tôi</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      </OutLineBg>
      </>
    );
} 
export default Contact;