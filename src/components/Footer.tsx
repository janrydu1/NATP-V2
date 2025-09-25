import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-black py-10 px-4">
      <div className="max-w-[85rem] mx-auto flex flex-col space-y-12">
        {/* Main footer content */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Logo and contact section */}
          <div className="flex flex-col">
            <div className="mb-6">
              <img
                src="/images/mainLogo.svg"
                alt="WTP Logo"
                className="w-44 h-auto"
              />
            </div>
            <div>
              <p className="font-medium mb-2">Contact us</p>
              <a
                href="mailto:info@natp-trademark.com"
                className="text-black break-words">
                info@natp-trademark.com
              </a>
            </div>
          </div>

          {/* Services links */}
          <div className="flex gap-40">
            <div>
              <h4 className="font-medium mb-4 text-lg">Capabilities</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/services" className="font-medium hover:underline">
                    Service Index
                  </Link>
                </li>
                <li>
                  <Link to="/services/publication" className="font-medium hover:underline">
                    Editorial Programs
                  </Link>
                </li>
                <li>
                  <Link to="/services/article" className="font-medium hover:underline">
                    Thought Pieces
                  </Link>
                </li>
                <li>
                  <Link to="/services/seo" className="font-medium hover:underline">
                    Findability
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/contact" className="font-medium hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="font-medium hover:underline">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link to="/apply" className="font-medium hover:underline">
                    Request Publication
                  </Link>
                </li>
                <li>
                  <Link to="/#faqs" className="font-medium hover:underline">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="font-medium hover:underline">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Divider and copyright */}
        <div className="border-t border-white/20 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4 text-center md:text-left">
            <p>© {currentYear} NATP. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:underline">
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
