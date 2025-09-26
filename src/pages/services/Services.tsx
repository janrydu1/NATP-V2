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
      <motion.div
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-300" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 text-blue-800 leading-tight drop-shadow-sm"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}>
            Services Built for Growth
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl text-slate-700 leading-relaxed max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}>
            Simple, powerful solutions that help your brand get noticed and stay
            ahead in a crowded market.
          </motion.p>
        </div>
      </motion.div>

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
              description="Put your trademark in the spotlight. We make your brand discoverable and trusted by ensuring it's seen where it matters most."
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
              description="Rise in search rankings and get discovered. Our SEO solutions help you appear where your customers are looking."
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
              description="Strong brands have strong voices. We craft articles that highlight your values, connect with your audience, and spark recognition."
              href="/services/article"
              cta="Learn More"
            />

            <BentoCard
              name="Brand Analytics"
              className="md:col-span-1 bg-gradient-to-br from-orange-50 to-amber-100"
              background={
                <div className="absolute inset-0 bg-gradient-to-br from-orange-200/30 to-amber-200/30" />
              }
              Icon={TrendingUp}
              description="Data-driven insights to track your brand's performance and growth opportunities."
              href="/services/analytics"
              cta="View Details"
            />

            <BentoCard
              name="Global Reach"
              className="md:col-span-1 bg-gradient-to-br from-teal-50 to-cyan-100"
              background={
                <div className="absolute inset-0 bg-gradient-to-br from-teal-200/30 to-cyan-200/30" />
              }
              Icon={Globe}
              description="Expand your trademark protection and brand presence across international markets."
              href="/services/global"
              cta="Get Started"
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
                Your trademark data stays updated daily for accuracy and trust.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-blue-800 mb-3">
                Dedicated Support
              </h3>
              <p className="text-blue-600">
                Our team is here whenever you need help or guidance.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-blue-800 mb-3">
                Continuous Growth
              </h3>
              <p className="text-blue-600">
                We refine strategies and content so your brand keeps improving.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="">
          <div className="text-center py-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-6">
              Let's Build Something Big
            </h2>
            <p className="text-black text-lg max-w-2xl mx-auto mb-10">
              Start making your brand more visible, trusted, and unforgettable.
            </p>
            <Button
              asChild
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-6 rounded shadow-lg">
              <Link to="/apply">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
