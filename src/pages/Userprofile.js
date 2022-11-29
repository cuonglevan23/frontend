import OutLineBg from "../OutLineBg";

const Userprofile = () => {
    return (
        <>
            <OutLineBg>
          
                <div className="container light-style flex-grow-1 container-p-y">
                    <h4 className="font-weight-bold py-3 mb-4">
                        Tài Khoản
                    </h4>
                    <div className="card overflow-hidden">
                        <div className="row no-gutters row-bordered row-border-light">
                            <div className="col-md-3 pt-0">
                                <div className="list-group list-group-flush account-settings-links">
                                    <a className="list-group-item list-group-item-action active" data-toggle="list" href="#account-general">Chung</a>
                                    <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-change-password">Đổi Mật Khẩu</a>

                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="tab-content">
                                    <div className="tab-pane fade active show" id="account-general">
                                        <div className="card-body media align-items-center">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt className="d-block ui-w-80" />
                                            <div className="media-body ml-4">
                                                <label className="btn btn-outline-primary">
                                                  Tải ảnh lên
                                                    <input type="file" className="account-settings-fileinput" />
                                                </label> &nbsp;
                                                <button type="button" className="btn btn-default md-btn-flat">Đặt lại</button>
                                                <div className="text-light small mt-1">tải JPG, GIF or PNG. Max size of 800K</div>
                                            </div>
                                        </div>
                                        <hr className="border-light m-0" />
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label className="form-label">Tên Tài Khoản</label>
                                                <input type="text" className="form-control mb-1" defaultValue="test123" />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Tên</label>
                                                <input type="text" className="form-control" defaultValue="lê văn cường" />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">E-mail</label>
                                                <input type="text" className="form-control mb-1" defaultValue="nmaxwell@mail.com" />
                                              
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Điểm</label>
                                                <div class="value">100.000 điểm</div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="account-change-password">
                                        <div className="card-body pb-2">
                                            <div className="form-group">
                                                <label className="form-label">Mật Khẩu Cũ</label>
                                                <input type="password" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Mật Khẩu Mới</label>
                                                <input type="password" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Nhập Lại Mật Khẩu Mới</label>
                                                <input type="password" className="form-control" />
                                            </div>
                                        </div>
                                    </div>




                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-right mt-3">
                        <button type="button" className="btn btn-primary">Lưu</button>&nbsp;
                        <button type="button" className="btn btn-default">Hủy</button>
                    </div>
                </div>

            </OutLineBg>
        </>
    );
}
export default Userprofile;