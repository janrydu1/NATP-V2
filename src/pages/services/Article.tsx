import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { useState, useEffect } from "react";
import { Search, PenTool, Megaphone } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export default function Article() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      text: "Their editorial support placed our brand exactly where it mattered most. The visibility and trust we gained through their work helped position us as a leader in our field.",
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "Zenta",
    },
    {
      text: "The content ATP created helped us stand out and communicate what makes our brand unique. Their mix of creative writing and smart positioning gave every article real purpose and impact.",
      name: "Michael Chen",
      role: "Brand Manager",
      company: "G Focal",
    },
    {
      text: "Good content builds trust, great content moves people. ATP understood our audience and created pieces that truly resonated and left a lasting impression.",
      name: "Emma Rodriguez",
      role: "Content Strategist",
      company: "KYND",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

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
                Your Story, <span className="text-purple-600">Our Words</span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}>
                We create content that feels human, sharp and memorable, helping
                your brand stand out and stay relevant in a fast-moving world.
              </motion.p>

              {/* <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <InteractiveHoverButton className="bg-blue-500 text-white shadow-lg rounded-xl px-8 py-4 text-lg font-semibold transition-all duration-300">
                  <Link to="/contact">Contact Us</Link>
                </InteractiveHoverButton>
              </motion.div> */}
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
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-500/20 to-gray-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-br from-slate-500 to-gray-600 p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <svg
                        className="w-12 h-12 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                      </svg>
                    </div>
                  </motion.div>

                  <motion.div
                    className="group relative p-6"
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    whileHover={{ scale: 1.1, rotate: -5 }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-br from-rose-500 to-pink-600 p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <svg
                        className="w-12 h-12 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                      </svg>
                    </div>
                  </motion.div>

                  <motion.div
                    className="group relative p-6"
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-br from-teal-500 to-cyan-600 p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <svg
                        className="w-12 h-12 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M12,8H4A2,2 0 0,0 2,10V14A2,2 0 0,0 4,16H5V20A1,1 0 0,0 6,21H8A1,1 0 0,0 9,20V16H12L17,20V4L12,8M21.5,12C21.5,13.71 20.54,15.26 19,16V8C20.53,8.75 21.5,10.3 21.5,12Z" />
                      </svg>
                    </div>
                  </motion.div>

                  <motion.div
                    className="group relative p-6"
                    initial={{ scale: 0, rotate: 90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 1.3 }}
                    whileHover={{ scale: 1.1, rotate: -5 }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-br from-indigo-500 to-purple-600 p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <svg
                        className="w-12 h-12 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M21.33,12.91C21.42,14.46 20.71,15.95 19.44,16.86L20.21,18.35C20.44,18.8 20.47,19.33 20.27,19.8C20.08,20.27 19.69,20.64 19.21,20.8L18.42,21.05C18.25,21.11 18.06,21.14 17.88,21.14C17.37,21.14 16.89,20.91 16.56,20.5L14.44,18C13.55,17.85 12.71,17.47 12,16.9C11.5,17.05 11,17.13 10.5,17.13C9.62,17.13 8.74,16.86 8,16.35C7.47,15.96 7.05,15.44 6.77,14.85C6.32,14.01 6.1,13.06 6.1,12.1C6.1,11.05 6.32,10 6.77,9.05C7.22,8.1 7.9,7.28 8.77,6.68C9.64,6.08 10.7,5.78 11.77,5.78C12.84,5.78 13.9,6.08 14.77,6.68C15.64,7.28 16.32,8.1 16.77,9.05C17.22,10 17.44,11.05 17.44,12.1C17.44,12.17 17.43,12.25 17.43,12.32L21.33,12.91M15.94,12.1C15.94,10.9 15.56,9.75 14.87,8.8C14.18,7.85 13.24,7.15 12.16,6.8C11.08,6.45 9.92,6.45 8.84,6.8C7.76,7.15 6.82,7.85 6.13,8.8C5.44,9.75 5.06,10.9 5.06,12.1C5.06,13.3 5.44,14.45 6.13,15.4C6.82,16.35 7.76,17.05 8.84,17.4C9.92,17.75 11.08,17.75 12.16,17.4C13.24,17.05 14.18,16.35 14.87,15.4C15.56,14.45 15.94,13.3 15.94,12.1Z" />
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

      {/* Process Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-semibold text-black text-center mb-20">
            How We Bring Ideas to Life
          </h2>
          {/* <p className="text-center text-black max-w-2xl mx-auto mb-16">
            Great content doesn't happen by chance. Here's how we make sure your
            brand voice stands out in a noisy digital world.
          </p> */}

          <div className="grid md:grid-cols-3 gap-20">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl transition">
              <div className="w-[400px] h-full mb-8 overflow-hidden rounded-2xl shadow-lg border-2 border-dashed p-2 border-blue-600">
                <img
                  src="/images/article_1.png"
                  alt="Smart Content"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              {/* <h3 className="text-2xl font-semibold text-blue-700 mb-4 text-start">
                Explore
              </h3>
              <p className="text-black text-base text-start">
                We begin by understanding your brand, audience and goals. Every
                project starts with solid research and a clear creative vision.
              </p> */}
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl transition">
              <div className="w-[400px] h-full mb-8 overflow-hidden rounded-2xl shadow-lg border-2 border-dashed p-2 border-purple-500">
                <img
                  src="/images/article_2.png"
                  alt="Smart Content"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              {/* <h3 className="text-2xl font-semibold text-blue-700 mb-4 text-start">
                Create
              </h3>
              <p className="text-black text-base text-start">
                Our writers craft stories that connect with your audience and
                reflect your brand’s authentic voice. Each  designed to
                inspire, inform and engage.
              </p> */}
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl transition">
              <div className="w-[400px] h-full mb-8 overflow-hidden rounded-2xl shadow-lg border-2 border-dashed p-2 border-green-800">
                <img
                  src="/images/article_3.png"
                  alt="Smart Content"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              {/* <h3 className="text-2xl font-semibold text-blue-700 mb-4 text-start">
                Amplify
              </h3>
              <p className="text-black text-base leading-relaxed text-start">
                When your content is ready, we make sure it reaches the right people through tailored visibility and thoughtful promotion.
              </p> */}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonial-highlight" className="py-20 px-6">
        <div className="relative container mx-auto px-4 py-16 max-w-7xl">
          <div className="text-center space-y-4 pb-6 mx-auto">
            {/* <h2 className="text-sm text-blue-600 font-mono font-medium tracking-wider uppercase">
              Client Success Stories
            </h2> */}
            <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
              What Our Clients Are Saying
            </h3>
          </div>

          <div
            className="relative"
            role="region"
            aria-roledescription="carousel">
            <div className="max-w-2xl mx-auto relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="min-w-full flex-shrink-0 px-4">
                      <div className="p-2 pb-5">
                        <div className="text-center">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 24 24"
                            className="text-4xl text-gray-400 my-4 mx-auto"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0V0z" />
                            <path d="M18.62 18h-5.24l2-4H13V6h8v7.24L18.62 18zm-2-2h.76L19 12.76V8h-4v4h3.62l-2 4zm-8 2H3.38l2-4H3V6h8v7.24L8.62 18zm-2-2h.76L9 12.76V8H5v4h3.62l-2 4z" />
                          </svg>

                          <h4 className="text-xl font-semibold max-w-lg mx-auto px-10 mb-8 text-gray-800">
                            "{testimonial.text}"
                          </h4>

                          <div className="mt-8">
                            <h1 className="text-2xl font-bold text-gray-900">
                              {testimonial.company}
                            </h1>
                          </div>

                          <div className="mt-6">
                            <h4 className="text-lg font-semibold my-2 text-gray-900">
                              {testimonial.name}
                            </h4>
                            <span className="text-sm text-gray-500">
                              {testimonial.role}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-blue-600 w-6" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="hidden md:block">
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 inline-flex items-center justify-center w-8 h-8 rounded-full border bg-white shadow-sm hover:bg-gray-50 transition-all disabled:opacity-50"
                disabled={currentSlide === 0}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6" />
                </svg>
                <span className="sr-only">Previous slide</span>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 inline-flex items-center justify-center w-8 h-8 rounded-full border bg-white shadow-sm hover:bg-gray-50 transition-all disabled:opacity-50"
                disabled={currentSlide === testimonials.length - 1}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
                <span className="sr-only">Next slide</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-blue-600">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Elevate Your Voice?
          </h2>
          <p className="text-lg mb-8">
            Let’s create content that speaks clearly, connects deeply and drives
            recognition that lasts.
          </p>
          <Button
            asChild
            className="bg-white text-blue-700 font-semibold px-8 py-6 rounded shadow-md hover:bg-blue-100 transition">
            <Link to="/apply">Start Now</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
