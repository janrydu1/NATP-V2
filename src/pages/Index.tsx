import Hero from "@/components/Hero";
import HomeBento from "@/components/HomeBento";
import { Navbar } from "@/components/Navbar";
import { useHashScroll } from "@/hooks/use-hash-scroll";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Eye,
  Globe,
  PenTool,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Search from "./Search";

export default function Index() {
  useHashScroll();

  const faqs = [
    {
      question: "What does trademark publication involve?",
      answer:
        "It’s the step where we publicly announce your trademark in a recognized registry so others can see it and raise objections if needed. This builds legal visibility.",
    },
    {
      question: "Who crafts the content / articles?",
      answer:
        "Our content team researches your brand and domain and writes custom pieces that reflect your voice and help your SEO. We don’t reuse templates.",
    },
    {
      question: "What SEO services are included?",
      answer:
        "Keyword planning, on-page optimization, outreach, internal linking, and monitoring. We aim for sustainable organic growth, not just quick wins.",
    },
    {
      question: "How to initiate the process?",
      answer:
        "Fill a simple form with your trademark details. We review and send you a proposal. Once approved, we begin publication + content creation.",
    },
    {
      question: "Can I request edits later?",
      answer:
        "Yes. Brands evolve. You can request updates or new content anytime, and we’ll iterate with you.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-50 text-slate-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}>
      <Navbar />

      {/* Hero / Introduction */}
      <section className="relative overflow-hidden bg-white">
        <Hero />
        {/* You can overlay a subtle pattern or gradient if desired */}
      </section>

      <div className="relative container mx-auto px-4 py-16 max-w-7xl">
        <div className="text-center space-y-4 pb-6 mx-auto">
          <h2 className="text-sm text-blue-600 font-mono font-medium tracking-wider uppercase">
            Problem
          </h2>
          <h3 className="mx-auto mt-4 max-w-xs text-2xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
            Empowering Brands with Visibility & Protection
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div
            style={{
              opacity: 1,
              filter: "blur(0px)",
              transform: "translateY(-6px)",
            }}>
            <div
              data-slot="card"
              className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 bg-background border-none shadow-none">
              <div data-slot="card-content" className="p-6 space-y-4">
                <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center">
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
                    className="lucide lucide-brain w-6 h-6 text-blue-600">
                    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
                    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
                    <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
                    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
                    <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
                    <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
                    <path d="M6 18a4 4 0 0 1-1.967-.516" />
                    <path d="M19.967 17.484A4 4 0 0 1 18 18" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Trademark Publishing</h3>
                <p className="text-muted-foreground">
                  We manage registry publication so your brand gains formal
                  visibility.
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              opacity: 1,
              filter: "blur(0px)",
              transform: "translateY(-6px)",
            }}>
            <div
              data-slot="card"
              className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 bg-background border-none shadow-none">
              <div data-slot="card-content" className="p-6 space-y-4">
                <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center">
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
                    className="lucide lucide-zap w-6 h-6 text-blue-600">
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Strategic SEO Growth</h3>
                <p className="text-muted-foreground">
                  We optimize content + structure + outreach so your brand gets
                  found.
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              opacity: 1,
              filter: "blur(0px)",
              transform: "translateY(-6px)",
            }}>
            <div
              data-slot="card"
              className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 bg-background border-none shadow-none">
              <div data-slot="card-content" className="p-6 space-y-4">
                <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center">
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
                    className="lucide lucide-shield w-6 h-6 text-blue-600">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Brand-aware Content</h3>
                <p className="text-muted-foreground">
                  Tailored articles and blog pieces that align with your voice
                  and audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-slate-100">
        {/* <HomeBento /> */}
        <div className="max-w-7xl mx-auto px-4 relative container py-16">
          <div className="text-center space-y-4 pb-6 mx-auto">
            <h2 className="text-sm text-blue-600 font-mono font-medium tracking-wider uppercase">
              Solution
            </h2>
            <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
              A four-step process to bring your trademark into public view—and
              back it with content.
            </h3>
          </div>
          <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[18rem] grid-cols-1 md:grid-cols-4 gap-4 mt-16">
            <BentoCard
              name="Submit Info"
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
              name="Proposal & Approval"
              className="md:col-span-2 bg-gradient-to-br from-green-50 to-emerald-100"
              background={
                <img
                  src="/images/service_seo.png"
                  alt="SEO Solutions"
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "/images/Customized SEO.svg";
                  }}
                />
              }
              Icon={Globe}
              description="We send you a proposal. On approval, we start work."
              href="/services/seo"
              cta="Explore More"
            />

            <BentoCard
              name="Publish + Content"
              className="md:col-span-3 bg-gradient-to-br from-purple-50 to-violet-100"
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
              description="We publish your trademark and produce branded content."
              href="/services/article"
              cta="Learn More"
            />

            <BentoCard
              name="Optimization & Updates"
              className="md:col-span-1 bg-gradient-to-br from-orange-50 to-amber-100"
              background={
                <img
                  src="https://img.freepik.com/free-photo/female-logo-designer-working-her-tablet-connected-laptop_23-2149119262.jpg?t=st=1758874493~exp=1758878093~hmac=7bae8839f0d76631ca774f9e6b1310706de4a4c16f2b440ae9c89ff51002e577&w=2000"
                  alt="Content Creation"
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "/images/service_content.png";
                  }}
                />
              }
              Icon={TrendingUp}
              description="Ongoing SEO, edits, and support to keep your brand visible."
              href="/services/analytics"
              cta="View Details"
            />
          </BentoGrid>
        </div>
      </section>

      {/* Testimonials / Stats */}
      <section className="bg-white">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-20 px-4 bg-white max-w-5xl mx-auto">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-sm text-blue-600 font-mono font-medium tracking-wider uppercase mb-3">
              Proven Results
            </h2>
            <h2 className="text-2xl sm:text-3xl md:text-[35px] leading-snug font-bold text-[#333747] text-center md:text-left">
              Explore our track record in effective brand visibility and
              registration support.
            </h2>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <p className="text-[#333747] text-base sm:text-lg font-semibold leading-relaxed text-center md:text-left">
              Our services achieve consistently high success rates, securing the
              visibility your brand requires. Numerous clients have relied on
              our expertise to strengthen their market presence.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="text-center sm:text-left">
                <p className="text-4xl sm:text-5xl font-semibold text-[#333747] mb-3">
                  95%
                </p>
                <p className="text-sm sm:text-base text-[#333747]">
                  Client satisfaction remains our core commitment.
                </p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-4xl sm:text-5xl font-semibold text-[#333747] mb-3">
                  100%
                </p>
                <p className="text-sm sm:text-base text-[#333747]">
                  All trademark publications adhere to strict quality standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-sm text-blue-600 font-mono font-medium tracking-wider uppercase">
            FAQ
          </h2>
          <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h3>
        </div>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border"
              style={{
                borderRadius: "0.5rem",
                overflow: "hidden",
                marginTop: "13px",
              }}>
              <div
                className="flex justify-between items-center p-5 cursor-pointer hover:bg-slate-50 transition"
                onClick={() => toggleFAQ(i)}>
                <h3 className="font-medium">{faq.question}</h3>
                <span className="text-gray-600">
                  {openIndex === i ? <ChevronUp /> : <ChevronDown />}
                </span>
              </div>
              {openIndex === i && (
                <div className="p-5 border-t">
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-blue-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Elevate Your Brand?
          </h2>
          <p className="mb-8 text-lg">
            Let’s start your trademark journey and build long-term visibility.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-700 hover:bg-slate-100 transition px-8 py-3 rounded font-semibold">
            Get In Touch
          </Link>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
