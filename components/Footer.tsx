const Footer = () => {
  return (
    <footer
      className="section footer-classic context-dark"
      style={{ background: "url(/footer.jpg)" }}
    >
      <div className="footer-classic-content overflow-hidden">
        <div className="container">
          <div className="row row-50 row-lg-0 g-0">
            <div
              className="col-sm-6 col-lg-4"
              data-aos="fade-left"
              data-wow-delay="0s"
            >
              <div className="footer-classic-header">
                <h6
                  className="footer-classic-title"
                  style={{ margin: "0px 0px 0px 57px" }}
                >
                  Quick links
                </h6>
              </div>
              <div className="footer-classic-body">
                <ul
                  className="footer-classic-list d-inline-block d-sm-block"
                  style={{ margin: "0px 0px 0px 55px" }}
                >
                 {/* <li>
                    <a href="about-us.html">Our Product</a>
                  </li>*/}
                  <li>
                    <a href="/faq">FAQ</a>
                  </li>
                  <li>
                    <a href="/project">Project</a>
                  </li>
                  <li>
                    <a href="/about-us">About us</a>
                  </li>
                  <li>
                    <a href="/contact-us">Contact Us</a>
                  </li>
                </ul>
                <ul
                  className="list-inline footer-social-list"
                  style={{ margin: "30px 0px 0px 55px" }}
                >
                  <li>
                    <a className="icon mdi mdi-facebook" href="#"></a>
                  </li>
                  <li>
                    <a className="icon mdi mdi-twitter" href="#"></a>
                  </li>
                  <li>
                    <a className="icon mdi mdi-instagram" href="#"></a>
                  </li>
                  <li>
                    <a className="icon mdi mdi-google-plus" href="#"></a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-sm-6 col-lg-4"
              data-aos="fade-right"
            >
              <div className="footer-classic-header">
                <div className="box-width-230">
                  <h6 className="footer-classic-title">Get in touch</h6>
                </div>
              </div>

              <div className="footer-classic-body">
                <div className="box-width-230">
                  <div className="footer-classic-contacts">
                    <div className="footer-classic-contacts-item">
                      <div className="unit unit-spacing-sm align-items-center">
                        <div className="unit-left">
                          <span className="icon icon-24 mdi mdi-phone"></span>
                        </div>
                        <div className="unit-body">
                          <a className="phone" href="tel:+917080302793">
                            +91 7080302793
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="footer-classic-contacts-item">
                      <div className="unit unit-spacing-sm align-items-center">
                        <div className="unit-left">
                          <span className="icon mdi mdi-email"></span>
                        </div>
                        <div className="unit-body">
                          <a className="mail" href="mailto:info@lookaroma.com">
                          info@lookaroma.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    className="button button-sm button-primary button-winona"
                    href="/contact-us"
                  >
                    Request a quote
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-lg-4"            
               data-aos="fade-right"
            >
              <div className="footer-classic-header">
                <div className="box-width-230">
                  <h6 className="footer-classic-title">Contact Us</h6>
                </div>
              </div>
              <div
                className="box-contacts-wrap"
                style={{ padding: "13px", margin: "11px 0 0 35px" }}
              >
                {/* Box contacts */}
                <form
                  className="rd-form rd-mailform"
                  data-form-output="form-output-global"
                  data-form-type="contact"
                  method="post"
                  action="bat/rd-mailform.php"
                  noValidate
                >
                  <div className="form-wrap">
                    <input
                      className="form-input form-control-has-validation"
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Your Name*"
                      data-constraints="@Required"
                    />
                    <span className="form-validation"></span>
                  
                  </div>

                  <div className="form-wrap">
                    <input
                      className="form-input form-control-has-validation"
                      id="contact-email"
                      type="text"
                      name="number"
                      data-constraints="@Required"
                      placeholder="Your Number*"
                    />
                    <span className="form-validation"></span>
                   
                  </div>

                  <div className="form-wrap">
                    <input
                      className="form-input form-control-has-validation"
                      id="contact-country"
                      type="text"
                      name="country"
                      data-constraints="@Required"
                      placeholder="Your Country*"
                    />
                    <span className="form-validation"></span>
                    
                  </div>

                  <div className="form-wrap">
                    <input
                      className="form-input form-control-has-validation"
                      id="contact-city"
                      type="email"
                      name="city"
                      data-constraints="@Required"
                      placeholder="Your City*"
                    />
                    <span className="form-validation"></span>
                    
                  </div>

                  <div className="form-wrap">
                   
                    <textarea
                      className="form-input form-control-has-validation form-control-last-child"
                      id="contact-message"
                      placeholder="Message*"
                      name="message"
                      data-constraints="@Required"
                      style={{ height: "86px" }}
                    />
                    <span className="form-validation"></span>
                  </div>

                  <button
                    className="button button-secondary button-winona"
                    type="submit"
                    style={{
                      padding: "16px 22px",
                      minWidth: "162px",
                      margin: "11px 0 0",
                    }}
                  >
                    <div className="content-original">Send Message</div>
                    <div className="content-dubbed">Send Message</div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-classic-panel">
        <div className="container">
          <p className="rights">
            <span>&copy;&nbsp;</span>
            <span className="copyright-year"></span>
            <span>&nbsp;</span>
            <span>Blue Energy</span>
            <span>.&nbsp;</span>
            <a href="privacy-policy.html">Privacy policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
