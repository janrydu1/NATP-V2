import { Navbar } from "@/components/Navbar";
import Hero from "@/components/Hero";
import { useState } from "react";
import { Footer } from "@/components/footer";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useHashScroll } from "@/hooks/use-hash-scroll";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

      {/* What We Do / Core Value */}
      <motion.section
        className="py-20 px-6 max-w-6xl mx-auto text-center"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}>
        <motion.h2
          className="text-3xl lg:text-4xl font-bold mb-4 text-blue-700"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}>
          Empowering Brands with Visibility & Protection
        </motion.h2>
        <motion.p
          className="text-lg text-slate-600 mb-12"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}>
          We seamlessly manage trademark publication, brand-focused content, and
          SEO so you can lead your business confidently.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          <Link
            to="/services"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition">
            View Services
          </Link>
        </motion.div>
      </motion.section>

      {/* Services / Features */}
      <motion.section
        className="py-20 px-6 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <motion.div
            className="p-8 border rounded-xl hover:shadow-md transition"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}>
            <motion.img
              src="https://img.icons8.com/?size=100&id=MsrzM5rZvKYs&format=png&color=000000"
              className="w-16 mx-auto mb-6"
              alt="Content"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            />
            <h3 className="text-xl font-bold mb-3">Brand-aware Content</h3>
            <p className="text-slate-600 mb-4">
              Tailored articles and blog pieces that align with your voice and
              audience.
            </p>
            <motion.div whileHover={{ x: 5 }}>
              <Link
                to="/services"
                className="text-blue-600 hover:underline font-medium">
                Learn More →
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="p-8 border rounded-xl hover:shadow-md transition"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5, scale: 1.02 }}>
            <motion.img
              src="https://img.icons8.com/?size=100&id=114214&format=png&color=000000"
              className="w-16 mx-auto mb-6"
              alt="SEO"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            />
            <h3 className="text-xl font-bold mb-3">Strategic SEO Growth</h3>
            <p className="text-slate-600 mb-4">
              We optimize content + structure + outreach so your brand gets
              found.
            </p>
            <motion.div whileHover={{ x: 5 }}>
              <Link
                to="/services/seo"
                className="text-blue-600 hover:underline font-medium">
                Learn More →
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="p-8 border rounded-xl hover:shadow-md transition"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -5, scale: 1.02 }}>
            <motion.img
              src="https://img.icons8.com/?size=100&id=EeRabdM4bHJn&format=png&color=000000"
              className="w-16 mx-auto mb-6"
              alt="Trademark"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            />
            <h3 className="text-xl font-bold mb-3">Trademark Publishing</h3>
            <p className="text-slate-600 mb-4">
              We manage registry publication so your brand gains formal
              visibility.
            </p>
            <motion.div whileHover={{ x: 5 }}>
              <Link
                to="/services/publication"
                className="text-blue-600 hover:underline font-medium">
                Learn More →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* How It Works / Process Flow */}
      <section className="py-20 px-6 bg-blue-50">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-blue-700">How It Works</h2>
          <p className="text-slate-600 text-lg">
            A four-step process to bring your trademark into public view—and
            back it with content.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center">
              1
            </div>
            <h4 className="font-semibold mb-2">Submit Info</h4>
            <p className="text-slate-600 text-sm">
              Send us your trademark and brand details.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center">
              2
            </div>
            <h4 className="font-semibold mb-2">Proposal & Approval</h4>
            <p className="text-slate-600 text-sm">
              We send you a proposal. On approval, we start work.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center">
              3
            </div>
            <h4 className="font-semibold mb-2">Publish + Content</h4>
            <p className="text-slate-600 text-sm">
              We publish your trademark and produce branded content.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center">
              4
            </div>
            <h4 className="font-semibold mb-2">Optimization & Updates</h4>
            <p className="text-slate-600 text-sm">
              Ongoing SEO, edits, and support to keep your brand visible.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials / Stats */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-blue-700">
            Results That Speak
          </h2>
          <p className="text-slate-600 text-lg">
            We believe in measurable impact.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 bg-blue-600 text-white rounded-xl">
            <p className="text-5xl font-bold mb-3">97%</p>
            <p>Client satisfaction</p>
          </div>
          <div className="p-8 bg-blue-600 text-white rounded-xl">
            <p className="text-5xl font-bold mb-3">100%</p>
            <p>Trademarks published with precision</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-700">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border rounded-lg overflow-hidden">
              <div
                className="flex justify-between items-center p-5 cursor-pointer hover:bg-slate-100 transition"
                onClick={() => toggleFAQ(i)}>
                <h3 className="font-medium">{faq.question}</h3>
                <span className="text-blue-600">
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
            className="inline-block bg-white text-blue-700 hover:bg-slate-100 transition px-8 py-3 rounded-xl font-semibold">
            Get In Touch
          </Link>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
