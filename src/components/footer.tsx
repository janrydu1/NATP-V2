const Footer = () => {
  return (
    <footer className="main-footer alternate5 screen">
      <div className="auto-container">
        {/*Widgets Section*/}
        <div className="widgets-section">
          <div className="row">
            <div className="big-column col-md-6 col-lg-8 col-12">
              <div className="row">
                <div className="footer-column about-widget logo-column">
                  <img
                    src="/images/tpm/LOGO-light.png"
                    alt=""
                    width="133px"
                    height="70px"
                    style={{ width: "auto" }}
                  />
                  <h6>Contact:</h6>
                  <a href="mailto:info@wtpregister.com">
                    <p style={{ textDecoration: "underline" }}>
                      info@wtpregister.com
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-2 col-6">
              <div className="footer-column about-widget links-widget">
                {/* <p class="phone-num"><span>Home</span></p> */}
                <a href="/services">
                  <p>Our Services</p>
                </a>
                <a href="/contact">
                  <p>Contact Us</p>
                </a>
                <a href="/seo">
                  <p>Trademark Info</p>
                </a>
                <a href="/contact">
                  <p>FAQs</p>
                </a>
                <a href="/company">
                  <p>About Us</p>
                </a>
                <p>
                  <a href="/company"></a>
                </p>
              </div>
            </div>
            {/* <div class="col-md-3 col-6">
                    <div class="footer-column about-widget">
                        <p class="phone-num"><span>About us </span> </p>
                        <p style="color: white !important">
                            We’re dedicated to simplifying your trademark management, giving you peace of mind while you focus on growing your business. 
                        </p>
  
                    </div>
                </div> */}
            <div className="col-md-3 col-lg-2 col-6">
              <div className="footer-column about-widget links-widget">
                {/* <p class="phone-num"><span>Company Links</span></p> */}
                <a href="/publication">
                  <p>Trademark Publication</p>
                </a>
                <a href="/search">
                  <p>Search</p>
                </a>
                <a href="/register">
                  <p>Request Publication</p>
                </a>
                <a href="/article">
                  <p>General Information</p>
                </a>
              </div>
            </div>
            {/* <div class="big-column col-md-2 mobile-hide"></div> */}
            <div className="col-md-12 footer-bottom-div">
              <hr />
              <div className="row">
                <div className="col-md-6">
                  <p>© 2025 WTP. All rights reserved.</p>
                </div>
                <div className="col-md-6 text-end policy-links">
                  <a href="/policy">
                    <p style={{ textDecoration: "underline" }}>
                      Privacy Policy
                    </p>
                  </a>
                  <a href="/terms">
                    <p style={{ textDecoration: "underline" }}>
                      Terms and Conditions
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll To Top */}
      <div
        style={{
          backgroundColor: "white",
          height: 35,
          width: 100,
          position: "fixed",
        }}
      >
        <div
          className="scroll-to-top scroll-to-target"
          data-target="html"
          style={{ display: "none" }}
        >
          <span className="fa fa-angle-up" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;