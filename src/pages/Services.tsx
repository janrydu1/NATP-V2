import Footer from "../components/footer";
import Header from "../components/header";

const Services = () => {
  return (
    <div className="services-page page-wrapper">
      <Header />
      <section className="service-sec-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ">
              <h3 className="sec-title-56">
                Strategies Designed to Showcase Your Brand
              </h3>
            </div>
            <div className="col-lg-6 ">
              <p>
                Our services are designed to elevate new brands, ensuring they
                gain the visibility they deserve in today's competitive market.
                With a dedicated team of marketing experts and professional
                content creators, we are committed to helping you navigate the
                trademark landscape and enhance your brand's presence.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="service-sec-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 ">
              <h4 className="sec-title-40">
                Trademark Publication: Unlock Your Brand's Potential
              </h4>
              <p>
                Our trademark publication process is designed to elevate your
                brand's visibility and credibility. By showcasing your
                trademark, we help you build awareness and trust among your
                target audience.
              </p>
            </div>
            <div className="col-lg-4 ">
              <img src="/images/tpm/Services-TRADEMARK-PUBLICATION.png" />
            </div>
          </div>
          <div className="row-btn">
            {" "}
            <a href="/publication">
              {" "}
              <button className="teal-btn">Learn More</button>
            </a>
          </div>
          <div className="row reverse">
            <div className="col-lg-4 ">
              <img src="/images/tpm/Services-Article-picture.png" />
            </div>
            <div className="col-lg-8 ">
              <h4 className="sec-title-40">
                Article Creation. Enhance Your Brand's Exposure and Recognition.
              </h4>
              <p>
                Our team of professional content creators specializes in
                producing high-quality articles that showcase your brand and
                trademark. By enhancing your visibility, we help you connect
                with your audience and establish a strong market presence.
              </p>
            </div>
          </div>
          <div className="row-btn reverse">
            {" "}
            <a href="/article">
              {" "}
              <button className="teal-btn">Learn More</button>
            </a>
          </div>
          <div className="row">
            <div className="col-lg-8 ">
              <h4 className="sec-title-40">
                Tailored SEO Solutions Designed Specifically for Your Needs.
              </h4>
              <p>
                Our SEO strategies are designed to elevate your search engine
                rankings and enhance brand visibility. With a dedicated team of
                experts, we ensure your trademark and brand receive the
                attention they deserve.
              </p>
            </div>
            <div className="col-lg-4 ">
              <img src="/images/tpm/Services-seo-PICTURE.png" />
            </div>
          </div>
          <div className="row-btn">
            {" "}
            <a href="/seo">
              {" "}
              <button className="teal-btn">Learn More</button>
            </a>
          </div>
        </div>
      </section>
      <section className="service-sec-3">
        <div className="container">
          <div className="row discover-services">
            <div className="col-lg-6">
              <h3 className="subhead">Services</h3>
              <h3 className="sec-title-48">
                Discover the Complete Power of Your Brand
              </h3>
            </div>
            <div className="col-lg-6">
              <p>
                Our services are designed to elevate your brand's visibility in
                the marketplace. With daily updates to our trademark database,
                we ensure that your brand remains relevant and easily
                discoverable. Trust our dedicated team to provide you with the
                support and expertise you need to thrive.
              </p>
            </div>
          </div>
          <div className="box-sec row">
            <div className="col-lg-4 col-md-6">
              <img src="/images/tpm/icons/box.svg" alt="" className="box-img" />
              <h3>Stay Ahead with Daily Database Updates</h3>
              <p className="box-para">
                We update our database every day to keep your brand information
                current.
              </p>
            </div>
            <div className="col-lg-4 col-md-6">
              <img src="/images/tpm/icons/box.svg" alt="" className="box-img" />
              <h3>Experience Exceptional Support Every Step of the Way</h3>
              <p className="box-para">
                Our dedicated customer support team is always available to
                assist you.
              </p>
            </div>
            <div className="col-lg-4 col-md-6">
              <img src="/images/tpm/icons/box.svg" alt="" className="box-img" />
              <h3>Commitment to Continuous Improvement and Quality</h3>
              <p className="box-para">
                We continually enhance our articles and website for better user
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="service-sec-4">
        <div className="container">
          <h3 className="sec-title-48">Start Your Brand Journey Today</h3>
          <p>
            Discover your brand's potential through our professional trademark
            publication services. Together, we can enhance your visibility.
          </p>
          <a href="/register">
            {" "}
            <button className="teal-btn">Apply Now</button>
          </a>
        </div>
      </section>
      <Footer />
      <style>
        {`
        .main-header {
        background-color: #2c5ca4;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
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
export default Services;
