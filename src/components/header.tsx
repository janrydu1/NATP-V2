import { useRef, useEffect } from "react";

const Header = () => {
  const servicesMenuRef = useRef<HTMLAnchorElement | null>(null);
  const dropdownContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent): void => {
      if (
      servicesMenuRef.current &&
      dropdownContentRef.current &&
      !servicesMenuRef.current.contains(event.target as Node) &&
      !dropdownContentRef.current.contains(event.target as Node)
      ) {
      dropdownContentRef.current.classList.remove("show-dropdown");
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const handleMenuClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (dropdownContentRef.current) {
      dropdownContentRef.current.classList.toggle("show-dropdown");
    }
  };


  return (
    <header className="main-header">
      <div className="col-md-12 nav-div">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src="/images/tpm/LOGO-light.png" alt="" />
            </a>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span
                className="navbar-toggler-icon"
                style={{
                  backgroundImage: 'url("../images/tpm/icons/hamburger.svg")',
                }}
              />
            </button>
            <div
              className="navbar-collapse collapse"
              id="navbarSupportedContent"
              style={{}}
            >
              <ul className="navbar-nav mx-auto">
                <li className="nav-item bottom-mobile-line-menu ">
                  <a className="nav-link bold-menu" href="/company">
                    About Us
                  </a>
                </li>
                <li
                  className="nav-item bottom-mobile-line-menu services-dropdown-menu "
                  style={{ position: "relative" }}
                >
                  <a
                    className="services-menu bold-menu"
                    ref={servicesMenuRef}
                    onClick={handleMenuClick}
                  >
                    Services
                  </a>
                  <div
                    className="dropdown-content"
                    ref={dropdownContentRef}
                  >
                    <div className="services-sub-menu">
                      <ul>
                        <li>
                          <a className="" href="/services">
                            Services
                          </a>
                        </li>
                        <li>
                          <a className="" href="/publication">
                            Publication
                          </a>
                        </li>
                        <li>
                          <a className="" href="/article">
                            Article
                          </a>
                        </li>
                        <li>
                          <a className="" href="/seo">
                            SEO
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="nav-item bottom-mobile-line-menu ">
                  <a className="nav-link bold-menu" href="/search">
                    Search
                  </a>
                </li>
                <li className="nav-item bottom-mobile-line-menu ">
                  <a className="nav-link bold-menu" href="/contact">
                    Contact
                  </a>
                </li>
                <li className="nav-item bottom-mobile-line-menu ">
                  <a className="nav-link bold-menu" href="/terms">
                    Terms and Conditions
                  </a>
                </li>
                <li className="nav-item bottom-mobile-line-menu ">
                  <a className="nav-link " href="/register">
                    <button className="header-apply-btn">Apply Now</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;