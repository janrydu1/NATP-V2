import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { FileText, CheckCircle, Globe } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Publication() {
  const steps = [
    {
      id: 1,
      title: "Fill Out the Quick Form",
      description:
        "Share your trademark details in just a few clicks — it's fast, simple, and secure.",
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      image:
        "https://plus.unsplash.com/premium_vector-1682301631594-eb2572c47bd5?fm=jpg&q=60&w=1200",
    },
    {
      id: 2,
      title: "We Verify Your Info",
      description:
        "Our team reviews everything carefully to make sure your details are accurate and ready.",
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
      image:
        "https://plus.unsplash.com/premium_vector-1721256358643-00015e00b18d?fm=jpg&q=60&w=1200",
    },
    {
      id: 3,
      title: "Your Trademark Goes Live",
      description:
        "Once approved, your trademark is visible and accessible for clients and partners worldwide.",
      icon: <Globe className="w-6 h-6 text-blue-600" />,
      image:
        "https://plus.unsplash.com/premium_vector-1682310922955-ea5e6f791471?fm=jpg&q=60&w=1200",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 font-inter">
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
              <div
                className={cn(
                  "group rounded-full max-w-[20%] border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                )}>
                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                  <span>Our Publication</span>
                </AnimatedShinyText>
              </div>
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-black leading-[0.9] mb-8"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}>
                Publish Your <span className="text-blue-600">Trademark</span>{" "}
                with Ease
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}>
                Make your brand official, boost visibility, and protect your
                identity with our seamless trademark publication service.
              </motion.p>
            </motion.div>

            {/* Right side  */}
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
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-700/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <svg
                        className="w-12 h-12 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z M9.5,16.5L7.5,14.5L6.08,15.92L9.5,19.33L17.92,10.92L16.5,9.5L9.5,16.5Z" />
                      </svg>
                    </div>
                  </motion.div>

                  <motion.div
                    className="group relative p-6"
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    whileHover={{ scale: 1.1, rotate: -5 }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-teal-700/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-br from-emerald-600 to-teal-700 p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <svg
                        className="w-12 h-12 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                      </svg>
                    </div>
                  </motion.div>

                  <motion.div
                    className="group relative p-6"
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-purple-700/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-br from-violet-600 to-purple-700 p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <svg
                        className="w-12 h-12 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z" />
                      </svg>
                    </div>
                  </motion.div>

                  <motion.div
                    className="group relative p-6"
                    initial={{ scale: 0, rotate: 90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 1.3 }}
                    whileHover={{ scale: 1.1, rotate: -5 }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-orange-700/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-br from-amber-600 to-orange-700 p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <svg
                        className="w-12 h-12 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
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

      {/* Steps Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-20">
            Three Simple Steps
          </h2>
          {/* <p className="text-black text-lg mb-12 max-w-xl mx-auto font-light">
            We’ve simplified the process so you can publish your trademark
            without any hassle.
          </p> */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step) => (
              <div
                key={step.id}
                className=" bg-white p-8 rounded-2xl transition duration-300">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-blue-600 mb-4 text-start">
                  {step.title}
                </h3>
                <p className="text-black text-base font-light leading-relaxed text-start">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Button
              asChild
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-6 rounded shadow-md transition">
              <Link to="/apply">Start Your Application</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-700 leading-snug mb-6">
              Stay Ahead with Accurate, Updated Data
            </h2>
            <p className="text-black text-lg md:text-xl font-light leading-relaxed">
              We refresh trademark records regularly, keeping your brand
              visible, reliable, and competitive in today’s fast-changing
              marketplace.
            </p>
          </div>
          <div className="bg-blue-100 rounded-2xl p-10 shadow-inner">
            <p className="text-blue-800 font-medium text-lg leading-relaxed">
              “Up-to-date trademark information means your brand is always ready
              to be discovered. We make sure nothing slips through the cracks.”
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
