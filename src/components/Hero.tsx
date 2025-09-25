import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isIndexPage =
    location.pathname === "/" || location.pathname === "/index";

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setIsScrolled(position > 50);
    };

    if (isIndexPage) {
      window.addEventListener("scroll", handleScroll, { passive: true });
      setIsScrolled(false);
    } else {
      setIsScrolled(true);
    }

    return () => {
      if (isIndexPage) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isIndexPage]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`relative w-full z-0 flex items-center justify-center transition-all duration-500 ${isIndexPage
        ? isScrolled
          ? "h-[70vh]"
          : "h-screen"
        : "h-[70vh] pt-20"
        }`}
    >
      <div className="relative flex w-full flex-col items-center justify-start px-4 pt-0 sm:px-6">
        <a
          href="/blog/introducing-acme-ai"
          className="flex w-auto items-center space-x-2 rounded-full bg-primary/20 px-2 py-1 ring-1 ring-accent whitespace-pre"
          style={{ opacity: 1, transform: "none" }}
        >

          <svg
            width={12}
            height={12}
            className="ml-1"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.78141 5.33312L5.20541 1.75712L6.14808 0.814453L11.3334 5.99979L6.14808 11.1851L5.20541 10.2425L8.78141 6.66645H0.666748V5.33312H8.78141Z"
              fill="hsl(var(--primary))"
            />
          </svg>
        </a>
        <div className="flex w-full max-w-2xl flex-col space-y-4 overflow-hidden pt-20 md:pt-96">
          <h1
            className="text-center text-4xl font-medium leading-tight text-foreground sm:text-5xl md:text-6xl"
            style={{ filter: "blur(0px)", opacity: 1, transform: "none" }}
          >
            <span
              className="inline-block px-1 md:px-2 text-balance font-semibold"
              style={{ opacity: 1, transform: "none" }}
            >
              Initiate Your
            </span>
            <span
              className="inline-block px-1 md:px-2 text-balance font-semibold"
              style={{ opacity: 1, transform: "none" }}
            >
              Trademark
            </span>
            <span
              className="inline-block px-1 md:px-2 text-balance font-semibold"
              style={{ opacity: 1, transform: "none" }}
            >
              Publication Today
            </span>
          </h1>
          <p
            className="mx-auto max-w-xl text-center text-lg leading-7 text-muted-foreground sm:text-xl sm:leading-9 text-balance"
            style={{ opacity: 1, transform: "none" }}
          >
            Apply now to boost visibility and safeguard your brand with expert support.
          </p>
        </div>
        <div
          className="mx-auto mt-6 flex w-full max-w-2xl flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
          style={{ opacity: 1, transform: "none" }}
        >
          <Link
            to={"/apply"}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded flex p-2 pr-4 gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
            Apply Now
          </Link>
          <Link
            to={"/services"}
            className="border-2 border-gray-300 hover:border-gray-400 bg-transparent text-gray-700 hover:bg-gray-50 rounded flex p-2 pr-4 gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <rect width={7} height={7} x={14} y={3} rx={1} />
              <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" />
            </svg>
            Learn More
          </Link>
        </div>
        <div className="relative border rounded-lg shadow-2xl drop-shadow-2xl w-full max-w-7xl sm:max-w-7xl md:max-w-7xl lg:max-w-5xl xl:max-w-5xl mt-8">
          <div className="relative group rounded-md p-1 sm:p-2 ring-1 ring-slate-200/50 backdrop-blur-md shadow-xl">
            <img
              alt="Hero"
              loading="lazy"
              width={1920}
              height={1080}
              decoding="async"
              data-nimg={1}
              className="transition-all duration-200 ease-out rounded-md border w-full h-[500px] sm:h-[400px] md:h-auto object-cover shadow-lg"
              style={{ color: "transparent" }}
              srcSet="/images/hero.avif"
              src="/images/hero.avif"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
