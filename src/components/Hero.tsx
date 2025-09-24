import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

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
      className={`relative w-full z-0 flex items-center justify-center transition-all duration-500 ${
        isIndexPage
          ? isScrolled
            ? "h-[70vh] pt-20"
            : "h-screen pt-20"
          : "h-[70vh] pt-20"
      }`}
      style={{
        background:
          "linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #60a5fa 100%)",
      }}>
      {/* Decorative blurred blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-72 h-72 bg-blue-400/30 blur-3xl rounded-full -top-10 -left-10"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-blue-700/20 blur-3xl rounded-full bottom-0 right-0"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content wrapper */}
      <div className="relative max-w-6xl w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side: Text */}
        <motion.div
          className="text-center lg:text-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}>
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}>
            Protect What You{" "}
            <motion.span
              className="font-semibold text-blue-100"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}>
              Create
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-blue-100/90 font-light mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}>
            Your ideas deserve recognition. Safeguard your brand and make your
            presence undeniable.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}>
              <Link
                to="/apply"
                className="group bg-white text-blue-700 font-medium px-7 py-3 rounded-full hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 ">
                <span className="group-hover:scale-105 transition-transform duration-300 inline-block">
                  Start Now
                </span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}>
              <Link
                to="/services"
                className="group border border-white/40 backdrop-blur-sm bg-white/10 text-white font-medium px-7 py-3 rounded-full hover:bg-white/20 hover:border-white/60 transition-all duration-300 min-w-[150px]">
                <span className="group-hover:scale-105 transition-transform duration-300 inline-block">
                  View Services
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right side: Decorative graphic */}
        <motion.div
          className="hidden lg:flex items-center justify-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}>
          <motion.div
            className="relative w-72 h-72 bg-gradient-to-tr from-blue-300/40 to-blue-600/40 rounded-3xl backdrop-blur-lg border border-white/20 shadow-2xl flex items-center justify-center"
            animate={{
              rotateY: [0, 10, 0],
              rotateX: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}>
            <span className="text-white text-2xl font-medium tracking-wide">
              Image here
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {isIndexPage && !isScrolled && (
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Hero;
