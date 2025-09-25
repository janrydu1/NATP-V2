import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";

export default function SEO() {
  return (
    <div className="min-h-screen font-inter bg-gradient-to-b from-blue-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Heading */}
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 leading-tight">
              Be Seen. <br />
              Be Chosen.
            </h1>
            <p className="mt-6 text-lg text-blue-700 max-w-md">
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
      <section className="py-20 px-6 bg-gradient-to-r from-blue-100 via-white to-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-blue-900 mb-6">
            SEO Made Simple (And Powerful)
          </h2>
          <p className="text-blue-700 max-w-2xl mx-auto text-lg mb-16">
            Forget confusing jargon. We focus on strategies that drive real
            visibility, traffic, and trust — helping you climb rankings without
            the guesswork.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition flex flex-col items-center text-center">
              <img
                src="/images/service_content.png"
                alt="Content Strategy"
                className="w-20 mb-6"
              />
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                Smart Content
              </h3>
              <p className="text-blue-700 text-base">
                Articles and pages that answer what your audience is actually
                searching for — not just filler words.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition flex flex-col items-center text-center">
              <img
                src="/images/service_keyword.png"
                alt="Keyword Research"
                className="w-20 mb-6"
              />
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                Keyword Intelligence
              </h3>
              <p className="text-blue-700 text-base">
                We find the search phrases that really bring customers in — and
                weave them naturally into your content.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition flex flex-col items-center text-center">
              <img
                src="/images/service_website.png"
                alt="Website Structure"
                className="w-20 mb-6"
              />
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                Clear Structure
              </h3>
              <p className="text-blue-700 text-base">
                Simple, intuitive site layouts that help both people and search
                engines understand your business instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-blue-900 mb-4">
            Let’s Get You Noticed
          </h3>
          <p className="text-lg text-blue-700 mb-8">
            Ready to rise above the competition? We’ll help you attract the
            right audience and keep them coming back.
          </p>
          <button className="bg-blue-700 hover:bg-blue-800 text-white shadow-lg py-4 px-10 rounded-xl transition font-medium">
            <Link to="/contact">Talk SEO With Us</Link>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
