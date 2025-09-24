import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-12 px-4 shadow-2xl">
      <div className="max-w-[85rem] mx-auto flex flex-col space-y-10">
        {/* Main footer content */}
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* Logo and contact section */}
          <div className="flex flex-col">
            <div className="mb-6 p-4 bg-white/5 rounded-xl backdrop-blur-sm">
              <img
                src=""
                alt="Logo"
                className="w-44 h-auto"
              />
            </div>
            <div>
              <p className="font-light mb-3 text-blue-100">Contact:</p>
              <a
                href="mailto:emailaddress here"
                className="text-white break-words hover:text-blue-300 transition-colors duration-200 font-light">
                email address here
              </a>
            </div>
          </div>

          {/* Services links */}
          <div>
            <Link
              to="/services"
              className="font-light hover:text-blue-300 transition-colors duration-200">
              <h4 className="font-light mb-6 text-xl text-blue-100">
                Our Services
              </h4>
            </Link>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/contact"
                  className="font-light hover:text-blue-300 transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:bg-blue-300 transition-colors duration-200"></span>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/apply"
                  className="font-light hover:text-blue-300 transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:bg-blue-300 transition-colors duration-200"></span>
                  Request Publication
                </Link>
              </li>
              <li>
                <Link
                  to="/#faqs"
                  className="font-light hover:text-blue-300 transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:bg-blue-300 transition-colors duration-200"></span>
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="font-light hover:text-blue-300 transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:bg-blue-300 transition-colors duration-200"></span>
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider and copyright */}
        <div className="border-t border-blue-700/30 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4 text-center md:text-left">
            <p className="text-blue-200 font-light">
              © {currentYear} COMPANY NAME. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link
                to="/privacy"
                className="hover:text-blue-300 transition-colors duration-200 font-light text-blue-200">
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-blue-300 transition-colors duration-200 font-light text-blue-200">
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
