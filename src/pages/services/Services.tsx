import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Eye, PenTool, Search, TrendingUp, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
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
                Services <span className="text-green-600">Built</span> for Growth
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}>
                Clear, effective solutions designed to help your brand gain
                visibility, earn trust, and stay ahead in a competitive market.
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
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-sky-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-br from-blue-600 to-sky-600 p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <svg
                        className="w-12 h-12 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M12,16L19.36,10.27L21,9L12,2L3,9L4.63,10.27M12,18.54L4.62,12.81L3,14.07L12,21.07L21,14.07L19.37,12.8M12,13.54L4.62,7.81L3,9.07L12,16.07L21,9.07L19.37,7.8L12,13.54Z" />
                      </svg>
                    </div>
                  </motion.div>

                  <motion.div
                    className="group relative p-6"
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    whileHover={{ scale: 1.1, rotate: -5 }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-green-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-br from-emerald-600 to-green-600 p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
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
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-violet-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-br from-purple-600 to-violet-600 p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <svg
                        className="w-12 h-12 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
                      </svg>
                    </div>
                  </motion.div>

                  <motion.div
                    className="group relative p-6"
                    initial={{ scale: 0, rotate: 90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 1.3 }}
                    whileHover={{ scale: 1.1, rotate: -5 }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-br from-amber-600 to-yellow-600 p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <svg
                        className="w-12 h-12 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
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

      {/* Main Content */}
      <div className="flex-1 max-w-7xl mx-auto px-6 py-16">
        {/* Services Bento Grid */}
        <div className="mb-28">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-8 text-center">
            Our Premium Services
          </h2>
          <BentoGrid className="max-w-5xl mx-auto md:auto-rows-[18rem] grid-cols-1 md:grid-cols-4 gap-4">
            <BentoCard
              name="Trademark Visibility"
              className="md:col-span-2 bg-gradient-to-br from-blue-50 to-blue-100"
              background={
                <img
                  src="/images/service_trademark.jpg"
                  alt="Trademark Publication"
                  className="absolute inset-0 w-full h-full object-cover opacity-10"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "/images/Trademark Publication.svg";
                  }}
                />
              }
              Icon={Eye}
              description="Put your trademark in front of the right audience. We manage publication across our private registry to ensure your brand gains recognition where it matters most; building visibility and lasting recall."
              href="/services/publication"
              cta="Explore More"
            />

            <BentoCard
              name="Smart SEO Strategies"
              className="md:col-span-2 bg-gradient-to-br from-green-50 to-emerald-100"
              background={
                <img
                  src="/images/service_seo.png"
                  alt="SEO Solutions"
                  className="absolute inset-0 w-full h-full object-cover opacity-10"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "/images/Customized SEO.svg";
                  }}
                />
              }
              Icon={Search}
              description="We optimize your brand’s discoverability through structured content, outreach, and search performance. Our integrated SEO framework connects your trademark with audiences actively looking for brands like yours."
              href="/services/seo"
              cta="Explore More"
            />

            <BentoCard
              name="Content That Converts"
              className="md:col-span-2 bg-gradient-to-br from-purple-50 to-violet-100"
              background={
                <img
                  src="/images/service_story.png"
                  alt="Content Creation"
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "/images/service_content.png";
                  }}
                />
              }
              Icon={PenTool}
              description="Powerful stories build powerful brands.
Our editorial team creates original content that captures your values, speaks your audience’s language and strengthens recognition.
"
              href="/services/article"
              cta="Explore More"
            />

            <BentoCard
              name="Brand Analytics"
              className="md:col-span-1 bg-gradient-to-br from-orange-50 to-amber-100"
              background={
                <img
                  src="/images/service_brand.jpg"
                  alt="Content Creation"
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "/images/service_brand.jpg";
                  }}
                />
              }
              Icon={TrendingUp}
              description="Understand how your brand performs across our publication network.
We deliver data-driven insights that track engagement, visibility and growth opportunities.
"
              href="/services/analytics"
              cta="Explore More"
            />

            <BentoCard
              name="Global Reach"
              className="md:col-span-1 bg-gradient-to-br from-teal-50 to-cyan-100"
              background={
                <img
                  src="/images/service_global.jpg"
                  alt="Content Creation"
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "/images/service_global.jpg";
                  }}
                />
              }
              Icon={Globe}
              description="Expand your visibility beyond borders.
Our platform connects your trademark with international audiences and industry segments; increasing recognition across global markets.
"
              href="/services/global"
              cta="Explore More"
            />
          </BentoGrid>
        </div>

        {/* Features Section */}
        <div className="bg-blue-100 rounded-3xl px-8 py-16 text-center space-y-12 shadow-sm">
          <h2 className="text-4xl font-semibold text-blue-900">
            Why Work With Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-xl font-medium text-blue-800 mb-3">
                Always Fresh
              </h3>
              <p className="text-blue-600">
                Your trademark data and content stay continuously updated for accuracy, trust and long-term relevance.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-blue-800 mb-3">
                Dedicated Support
              </h3>
              <p className="text-blue-600">
                Our team is here whenever you need guidance; from submission to publication and beyond.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-blue-800 mb-3">
                Continuous Growth
              </h3>
              <p className="text-blue-600">
                We refine content and strategy to ensure your brand keeps evolving, adapting, and standing out.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="">
          <div className="text-center py-20">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-6">Ready to Begin?</h1>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
              Let's Build Something Big
            </h2>
            <p className="text-gray-700 text-[16px] max-w-3xl mx-auto mb-10">
              Start growing your brand with a publication strategy that delivers visibility, recognition, and trust.
            </p>
            <Button
              asChild
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-6 rounded shadow-lg">
              <Link to="/apply">Start Now</Link>
            </Button>
            <Button
              asChild
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-6 rounded shadow-lg ml-10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
