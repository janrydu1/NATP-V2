import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { FileText, Search, Layout } from "lucide-react";

export default function SEO() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Heading */}
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 leading-tight">
              Be Seen. <br />
              Be Chosen.
            </h1>
            <p className="mt-6 text-lg text-black max-w-md">
              We make sure your business shows up at the exact moment people are
              searching for what you do best. No fluff — just results that
              matter.
            </p>
          </div>

          {/* Right - Illustration */}
          <div className="flex justify-center">
            <img
              src="/images/service_seo.png"
              alt="SEO Visibility"
              className="h-64"
            />
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-black mb-20">
            SEO Made Simple (And Powerful)
          </h2>
          {/* <p className="text-black max-w-2xl mx-auto text-lg mb-16">
            Forget confusing jargon. We focus on strategies that drive real
            visibility, traffic, and trust — helping you climb rankings without
            the guesswork.
          </p> */}

          <div className="grid md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 transition">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-4 text-start">
                Smart Content
              </h3>
              <p className="text-black text-base text-start">
                Articles and pages that answer what your audience is actually
                searching for — not just filler words.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 transition">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Search className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-4 text-start">
                Keyword Intelligence
              </h3>
              <p className="text-black text-base text-start">
                We find the search phrases that really bring customers in — and
                weave them naturally into your content.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 transition">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Layout className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-4 text-start">
                Clear Structure
              </h3>
              <p className="text-black text-base text-start">
                Simple, intuitive site layouts that help both people and search
                engines understand your business instantly.
              </p>
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
            Ready to rise above the competition? We’ll help you attract the
            right audience and keep them coming back.
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
