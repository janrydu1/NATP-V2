import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { FileText, Search, Layout } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { cn } from "@/lib/utils";

export default function SEO() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        className="py-32 px-6 relative overflow-hidden"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center min-h-[600px]">
            {/* Left side - Text content (3/5 width) */}
            <motion.div
              className="lg:col-span-3 space-y-8 text-left"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}>
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-black leading-[0.9] mb-8"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}>
                Be Seen.{" "}
                <span className="text-orange-600">
                  {" "}
                  <br />
                  Be Chosen.
                </span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}>
                We make sure your brand appears at the exact moment people are
                searching for what you do best. No fluff, just visibility that
                gets results.
              </motion.p>
            </motion.div>

            {/* Right side */}
            <motion.div
              className="lg:col-span-2 relative h-full flex items-center justify-center"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}>
              <div className="relative w-full h-[500px] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 rounded-3xl"></div>
                <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"></div>

                <div className="relative grid grid-cols-2 gap-8 z-10">
                  <motion.div
                    className="group relative p-6"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-br from-indigo-500 to-blue-600 p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <svg
                        className="w-12 h-12 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M15.5,14H20.5L22,15.5V20.5L20.5,22H15.5L14,20.5V15.5L15.5,14M18,17.5A1.5,1.5 0 0,0 16.5,16A1.5,1.5 0 0,0 15,17.5A1.5,1.5 0 0,0 16.5,19A1.5,1.5 0 0,0 18,17.5M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                      </svg>
                    </div>
                  </motion.div>

                  <motion.div
                    className="group relative p-6"
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    whileHover={{ scale: 1.1, rotate: -5 }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-br from-emerald-500 to-teal-600 p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <svg
                        className="w-12 h-12 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z" />
                      </svg>
                    </div>
                  </motion.div>

                  <motion.div
                    className="group relative p-6"
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-br from-violet-500 to-purple-600 p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <svg
                        className="w-12 h-12 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8Z" />
                      </svg>
                    </div>
                  </motion.div>

                  <motion.div
                    className="group relative p-6"
                    initial={{ scale: 0, rotate: 90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 1.3 }}
                    whileHover={{ scale: 1.1, rotate: -5 }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-br from-amber-500 to-orange-600 p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <svg
                        className="w-12 h-12 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M9,21C9,22.1 9.9,23 11,23H13C14.1,23 15,22.1 15,21V20H9V21M12,2C8.14,2 5,5.14 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H15A1,1 0 0,0 16,17V14.74C17.81,13.47 19,11.38 19,9C19,5.14 15.86,2 12,2M12,4.5C14.73,4.5 16.86,6.64 16.86,9.36C16.86,11.27 15.9,12.87 14.46,13.7L14,14V16H10V14L9.54,13.7C8.1,12.87 7.14,11.27 7.14,9.36C7.14,6.64 9.27,4.5 12,4.5Z" />
                      </svg>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}>
                  <svg className="w-full h-full" viewBox="0 0 400 400">
                    <defs>
                      <linearGradient
                        id="lineGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%">
                        <stop
                          offset="0%"
                          stopColor="rgb(59, 130, 246)"
                          stopOpacity="0.3"
                        />
                        <stop
                          offset="50%"
                          stopColor="rgb(147, 51, 234)"
                          stopOpacity="0.2"
                        />
                        <stop
                          offset="100%"
                          stopColor="rgb(236, 72, 153)"
                          stopOpacity="0.1"
                        />
                      </linearGradient>
                    </defs>

                    <line
                      x1="120"
                      y1="120"
                      x2="280"
                      y2="120"
                      stroke="url(#lineGradient)"
                      strokeWidth="2"
                      opacity="0.6"
                    />
                    <line
                      x1="200"
                      y1="80"
                      x2="200"
                      y2="320"
                      stroke="url(#lineGradient)"
                      strokeWidth="2"
                      opacity="0.6"
                    />
                    <line
                      x1="120"
                      y1="280"
                      x2="280"
                      y2="280"
                      stroke="url(#lineGradient)"
                      strokeWidth="2"
                      opacity="0.6"
                    />
                    <line
                      x1="140"
                      y1="140"
                      x2="260"
                      y2="260"
                      stroke="url(#lineGradient)"
                      strokeWidth="2"
                      opacity="0.4"
                    />
                    <line
                      x1="260"
                      y1="140"
                      x2="140"
                      y2="260"
                      stroke="url(#lineGradient)"
                      strokeWidth="2"
                      opacity="0.4"
                    />
                  </svg>
                </motion.div>

                <motion.div
                  className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full"
                  animate={{
                    y: [-10, 10, -10],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-20 right-20 w-3 h-3 bg-purple-400 rounded-full"
                  animate={{
                    y: [10, -10, 10],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
                <motion.div
                  className="absolute top-32 right-32 w-1.5 h-1.5 bg-pink-400 rounded-full"
                  animate={{
                    x: [-5, 5, -5],
                    y: [-5, 5, -5],
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* What We Do Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-semibold text-black mb-20">
            SEO Made Simple (And Powerful)
          </h2>
          {/* <p className="text-black max-w-2xl mx-auto text-lg mb-16">
            Forget confusing jargon. We focus on strategies that drive real
            visibility, traffic, and trust — helping you climb rankings without
            the guesswork.
          </p> */}

          <div className="grid md:grid-cols-3 gap-56 justify-items-center">
            {/* Card 1 */}
            <div className="bg-white rounded-full p-8 transition">
              <div className="w-[450px] h-max mb-8 overflow-hidden rounded-3xl shadow-xl ">
                <img
                  src="/images/seo_1.png"
                  alt="Smart Content"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* <h3 className="text-2xl font-semibold text-blue-700 mb-4 text-start">
                Smart Content
              </h3>
              <p className="text-black text-base text-start">
                We make sure your brand appears at the exact moment people are
                searching for what you do best. No fluff, just visibility that
                gets results.
              </p> */}
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 transition">
              <div className="w-[450px] h-max mb-7 overflow-hidden rounded-3xl shadow-xl">
                <img
                  src="/images/seo_2.png"
                  alt="Keyword Intelligence"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* <h3 className="text-2xl font-semibold text-blue-700 mb-4 text-start">
                Keyword Intelligence
              </h3>
              <p className="text-black text-base text-start">
                We identify search terms that bring real customers and blend
                them naturally into your content. Our approach ensures that
                people and search engines understand your brand the same way.
              </p> */}
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 transition">
              <div className="w-[450px] h-max mb-6 overflow-hidden rounded-3xl shadow-xl">
                <img
                  src="/images/seo_3.png"
                  alt="Clear Structure"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* <h3 className="text-2xl font-semibold text-blue-700 mb-4 text-start">
                Clear Structure
              </h3>
              <p className="text-black text-base text-start">
                We build layouts that are intuitive for visitors and optimized
                for search visibility. Simple design, clean navigation, and
                precise metadata make your site easy to find and explore.
              </p> */}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-blue-600">
        <div className="max-w-3xl mx-auto text-center ">
          <h3 className="text-4xl font-bold text-white mb-4">
            Let’s Get You Noticed
          </h3>
          <p className="text-lg text-white mb-8">
            Ready to rise above the competition? We’ll help your brand attract
            the right audience and stay visible where it matters most.
          </p>
          <button className="bg-white text-blue-700 hover:bg-slate-100 px-8 py-3 rounded font-semibold transition">
            <Link to="/contact">Talk SEO With Us</Link>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
