import Logins from '../component/Logins'

const Login = () => {
    return (
        <>
            <Logins>
                <div>
                    <div className="box-contents">
                        <div className="containers">
                            <div className="forms-container">
                                <div className="signin-signup">
                                    <form action="" className="sign-in-form">
                                        <h2 className="title">Đăng nhập</h2>
                                        <div className="input-field">
                                            <i className="fa-solid fa-user" />
                                            <input type="text" placeholder="Tên đăng nhập" />
                                        </div>
                                        <div className="input-field">
                                            <i className="fa-solid fa-lock" />
                                            <input type="password" placeholder="Mật khẩu" />
                                        </div>
                                        <input type="submit" defaultValue="Đăng nhập" className="btn solid" href="doidiem.html" />
                                        <p class="social-text">Hoặc đăng nhập bằng hình thức khác</p>
                                        <div className="social-media">
                                            <a href="#" className="social-icon"><i className="fa-brands fa-facebook" /></a>
                                            <a href="#" className="social-icon"><i className="fa-brands fa-twitter" /></a>
                                            <a href="#" className="social-icon"><i className="fa-brands fa-google" /></a>
                                            <a href="#" className="social-icon"><i className="fa-brands fa-instagram-square" /></a>
                                        </div>

                                        {/* <p class="social-text">Hoặc đăng nhập bằng hình thức khác</p>
                  <div class="social-media">
                      <a href="#" class="social-icon"><i class="fa-brands fa-facebook"></i></a>
                      <a href="#" class="social-icon"><i class="fa-brands fa-twitter"></i></a>
                      <a href="#" class="social-icon"><i class="fa-brands fa-google"></i></a>
                      <a href="#" class="social-icon"><i class="fa-brands fa-instagram-square"></i></a>
                  </div> */}
                                    </form>
                                    <form action="#" className="sign-up-form">
                                        <h2 className="title">Đăng ký</h2>
                                        <div className="input-field">
                                            <i className="fas fa-user" />
                                            <input type="text" placeholder="Tên đăng nhập" />
                                        </div>
                                        <div className="input-field">
                                            <i className="fas fa-envelope" />
                                            <input type="email" placeholder="Email" />
                                        </div>
                                        <div className="input-field">
                                            <i className="fas fa-lock" />
                                            <input type="password" placeholder="Mật khẩu" />
                                        </div>
                                        <input type="submit" className="btn" defaultValue="Đăng ký" />
                                        {/* <p class="social-text">Hoặc đăng nhập bằng hình thức khác</p>
                  <div class="social-media">
                      <a href="#" class="social-icon">
                          <i class="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" class="social-icon">
                          <i class="fab fa-twitter"></i>
                      </a>
                      <a href="#" class="social-icon">
                          <i class="fab fa-google"></i>
                      </a>
                      <a href="#" class="social-icon">
                          <i class="fab fa-linkedin-in"></i>
                      </a>
                  </div> */}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="panels-container">
                        <div className="panel left-panel">
                            <div className="content">
                                <h3>Recyclable Waste</h3>
                                <p>
                                    Hãy trở thành một phần cho cộng đồng, hãy chung tay góp phần bảo vệ môi trường.
                                </p>
                                <button className="btn transparent" id="sign-up-btn">
                                    Đăng ký
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


            </Logins>
        </>

    )

}

export default Login;