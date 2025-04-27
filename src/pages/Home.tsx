import Footer from "../components/footer";
import Header from "../components/header";

const Home = () => {
  return (
    <div className="page-wrapper">
    <Header/>
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n    .the-p-section h3 {\n        font-size: 52px !important;\n        color: #003366;\n    }\n\n\n\n    .job-search-form form {\n        border-radius: 20px !important;\n    }\n\n\n    .btn-style-one {\n        padding: 0;\n    }\n\n    .job-search-form .form-group input {\n        border-radius: 13px !important;\n    }\n\n    .job-search-form .form-group .theme-btn {\n        border: 2px solid #ffffff;\n    }\n\n\n    .the-p-section {\n        padding: 50px 0 20px;\n    }\n\n    .custom-theme-btn {\n        text-transform: none;\n    }\n\n\n    .the-p-section .title-box span {\n        font-size: 24px;\n    }\n\n\n    @media(max-width:1023px) {\n        .job-search-form .form-group input {\n            height: 50px;\n            border-radius: 13px !important;\n        }\n\n\n\n        .text-underline {\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n        }\n    }\n\n    @media(max-width:768px) {\n\n        .banner-section.main-banner .content-column {\n            margin-top: 20px;\n        }\n\n        .text-underline {\n            padding-left: 0px !important;\n        }\n\n        /* .home-sec-2 h3 {\n            font-size: 40px !important;\n        } */\n\n        .the-p-section h3 {\n            font-size: 40px !important;\n        }\n\n        .home-sec-2 {\n            padding: 40px 0 100px;\n        }\n\n        .the-p-section {\n            padding: 40px 0 20px;\n        }\n\n\n        .home-sec-2 span {\n            font-size: 20px;\n        }\n    }\n\n\n    @media(max-width:480px) {\n        .home-sec-4 h3 {\n            font-size: 24px;\n            line-height: 32px;\n        }\n\n        .home-sec-2 h3 {\n            font-size: 28px;\n            line-height: 35px;\n        }\n    }\n",
      }}
    />
    <section
      className="banner-section main-banner"
      style={{
        backgroundColor: "#2C5CA4",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundImage: 'url("/images/tpm/front-page-image.png")',
        backgroundBlendMode: "overlay",
        alignContent: "center",
      }}
    >
      <div className="auto-container">
        <div className="row">
          <div className="content-column col-lg-12 col-md-12 col-sm-12 text-center">
            <div
              className="inner-column"
              data-wow-delay="1000ms"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                margin: 0,
                padding: 0,
              }}
            >
              <div className="title-box">
                <h1>Publish Your Trademark Today</h1>
                <p>
                  Apply now to enhance your brand visibility and protect
                  your trademark with our expert support.
                </p>
                <div>
                  <a style={{ marginRight: 16 }} href="/register">
                    {" "}
                    <button className="light-btn">Apply Now</button>
                  </a>
                  <a href="/company">
                    {" "}
                    <button className="outline-btn">Learn More</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="home-sec-2">
      <div className="container">
        <div className="row align-items-end">
          <div className="content-column col-lg-6 col-md-6 col-sm-12">
            <div className="inner-column" style={{ padding: 0 }}>
              <div className="title-box">
                {/* <img src="" alt="icon"/> */}
                <h3 className="sec-title-48">
                  Focus on Your Business, We Handle Awareness
                </h3>
                <p>
                  Our dedicated team takes care of your brand's visibility,
                  allowing you to concentrate on what you do best—growing
                  your business. With our expertise in trademark publication
                  and marketing, we ensure your brand stands out in a
                  competitive marketplace.
                </p>
                <a href="/company">
                  {" "}
                  <button className="teal-btn">Learn More</button>
                </a>
              </div>
            </div>
          </div>
          <div className="image-column col-lg-6 col-md-6 col-sm-12 text-center">
            <div className="inner-column" style={{ padding: 0 }}>
              <img src="images/tpm/start-page-2.png" alt="" width="100%" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="custom-call-to-action home-sec-3">
      <div className="container">
        <h3 className="sec-title-40">
          Comprehensive Services to Elevate Your Brand Visibility and
          Trademark Awareness
        </h3>
        <div className="custom-outer-box row">
          {/* Tarjeta 1 */}
          <div className="custom-content-column col-md-4">
            <div className="custom-sec-title">
              <img src="/images/tpm/icons/article-mix.svg" />
              <h2>
                Expert Article Creation to Showcase Your Brand and Trademark
                Effectively
              </h2>
              <div className="custom-text">
                Our services include trademark publication, professional
                article creation, and SEO optimization.
              </div>
            </div>
            <a href="/article" className="teal-btn">
              <span className="btn-title">Learn More</span>
            </a>
          </div>
          {/* Tarjeta 2 */}
          <div className="custom-content-column col-md-4">
            <div className="custom-sec-title">
              <img src="/images/tpm/icons/seo-MIX.svg" />
              <h2>
                SEO Strategies to Enhance Your Brand’s Online Presence and
                Reach
              </h2>
              <div className="custom-text">
                We implement effective SEO techniques to boost your brand's
                visibility in search results.
              </div>
            </div>
            <a href="/seo" className="teal-btn">
              <span className="btn-title">Learn More</span>
            </a>
          </div>
          {/* Tarjeta 3 */}
          <div className="custom-content-column col-md-4">
            <div className="custom-sec-title">
              <img src="/images/tpm/icons/publicartion-MIXCOLOR.svg" />
              <h2>
                Trademark Publication Services to Promote Your Brand
                Identity
              </h2>
              <div className="custom-text">
                Our trademark publication service ensures your brand is
                recognized and protected.
              </div>
            </div>
            <a href="/publication" className="teal-btn">
              <span className="btn-title">Learn More</span>
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* End Call To Action */}
    <section className="home-sec-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3 className="sec-title-40">
              Transforming Brands: Discover Our Unmatched Trademark
              Publication Success Rates
            </h3>
          </div>
          <div className="col-lg-6">
            <p>
              Our trademark publication services boast a remarkable success
              rate, ensuring your brand gains the visibility it deserves.
              Join countless satisfied clients who have trusted us to
              elevate their brand's presence.
            </p>
            <div className="inner-sec row">
              <div className="col-lg-6">
                <h2 className="sec-title-48">95%</h2>
                <span>
                  Client satisfaction is our top priority and commitment.
                </span>
              </div>
              <div className="col-lg-6">
                <h2 className="sec-title-48 title-100">100%</h2>
                <span>
                  Every trademark publication meets our high-quality
                  standards.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* faq section start */}
    <section className="faq home-sec-5">
      <div className="container">
        <h3 className="sec-title-48">FAQs</h3>
        <p>
          Find answers to your questions about trademark publication,
          article creation, and SEO services.
        </p>
        {/* accordion */}
        <button className="accordion">
          {" "}
          What is trademark publication?
        </button>
        <div className="panel">
          <p>
            {" "}
            Trademark publication is the process of making a trademark
            application publicly available. This helps to inform the public
            about new trademarks and allows for opposition if necessary. Our
            service ensures that your brand gains visibility in the
            marketplace.
          </p>
        </div>
        <button className="accordion"> How are articles created?</button>
        <div className="panel">
          <p>
            {" "}
            Our team of professional content creators crafts articles that
            highlight your trademark. Each article is tailored to enhance
            your brand's visibility and engagement. We focus on quality and
            relevance to ensure maximum impact.
          </p>
        </div>
        <button className="accordion"> What SEO services offered?</button>
        <div className="panel">
          <p>
            {" "}
            We provide comprehensive SEO services designed to boost your
            brand's online presence. Our strategies include keyword
            optimization, content marketing, and link building. This ensures
            your trademark is easily discoverable by your target audience.
          </p>
        </div>
        <button className="accordion"> How can I apply?</button>
        <div className="panel">
          <p>
            {" "}
            Applying for trademark publication is simple. You can fill out
            our online application form, providing the necessary details
            about your trademark. Our team will guide you through the
            process to ensure a smooth experience.
          </p>
        </div>
        <button className="accordion"> Can I update my article?</button>
        <div className="panel">
          <p>
            {" "}
            Yes, you can request updates to your article at any time. Our
            team is dedicated to ensuring your content remains accurate and
            relevant. Simply reach out to us with your desired changes.
          </p>
        </div>
        <div className="hr" />
        {/* <hr style="background-color:rgba(44, 92, 164, 1); opacity:1;"> */}
      </div>
    </section>
    <section className="home-sec-6 hiring">
      <div className="container">
        <h3>We're Hiring!</h3>
        <p>Explore exciting career opportunities with us today!</p>
        <a href="/contact" className="teal-btn">
          <span className="btn-title">Contact HR </span>
        </a>
      </div>
    </section>
    <Footer/>
    <style>
      {`
      .main-header {
        background-color: #2c5ca403;
        /* box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); */
      }

      /* .nav-item:hover .dropdown-content {
            display: block;
        } */

      .dropdown-content {
        display: none;
        position: absolute;
        width: 100%;
        padding-top: 30px;
      }

      .services-sub-menu {
        background-color: #2c5ca4;
        text-align: center;
        /* min-width: 200px; */
      }

      .services-sub-menu ul li {
        /* border: 1px solid red; */
        border-bottom: 1px solid white;
        padding: 5px 0;
      }

      .services-sub-menu ul li a {
        color: #fff;
        font-size: 16px;
        line-height: 25px;
        font-weight: 500;
        margin: auto;
      }

      /* .services-menu::after {
            content: " +";
        } */

      @media (min-width: 992px) {
        .services-sub-menu li:hover {
          background-color: #2365c8;
        }
      }

      @media (max-width: 992px) {
        .dropdown-content {
          position: relative;
          padding-top: 5px;
        }

        .services-sub-menu {
          background-color: #2c5ca480;
          padding-right: 35px;
          text-align: end;
        }

        .services-sub-menu ul li {
          /* border: none; */
          border-top: 1px solid #ffffff2e;
          border-bottom: none !important;
        }

        .services-dropdown-menu {
          padding: 10px 0 5px;
        }

        .bottom-mobile-line-menu {
          border-bottom: 1px solid #ffffff2e;
          /* background-color: #ffffff2e; */
        }

        /* .nav-item a{
                margin: 0;
            } */
      }

      .show-dropdown {
        display: block !important;
      }

      `}
    </style>
  </div>
  );
};

export default Home;