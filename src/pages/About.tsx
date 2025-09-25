import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function About() {
  const story = [
    {
      year: "2021",
      title: "Our Beginning",
      description:
        "We started with a vision to simplify trademark publishing for new brands.",
      image:
        "/images/about_beginning.png",
    },
    {
      year: "2022",
      title: "Expanding Reach",
      description:
        "We developed strategies to help brands gain visibility and recognition.",
      image:
        "/images/about_reach.png",
    },
    {
      year: "2023",
      title: "Innovation First",
      description:
        "We introduced smart content creation and marketing to stay ahead.",
      image:
        "/images/about_innovation.svg",
    },
  ];

  const principles = [
    {
      title: "Excellence",
      description:
        "Every service we deliver meets the highest standard — no compromises.",
      icon: "https://img.icons8.com/?size=100&id=GUqqHpQDjGqG&format=png&color=000000",
    },
    {
      title: "Client Focus",
      description: "We tailor solutions to fit the unique needs of each brand.",
      icon: "https://img.icons8.com/?size=100&id=Olnm1m4X1Mdo&format=png&color=000000",
    },
    {
      title: "Continuous Growth",
      description: "We constantly innovate to help our clients stay ahead.",
      icon: "https://img.icons8.com/?size=100&id=YJ8QboytqHQJ&format=png&color=000000",
    },
  ];

  const stats = [
    { number: "95%", text: "Satisfied Clients" },
    { number: "100+", text: "Trademarks Published" },
    { number: "10+", text: "Years of Expertise" },
  ];

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-slate-50 to-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}>
      <Navbar />

      {/* Hero Section */}
      <motion.section
        className="py-32 px-6 text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}>
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}>
          Empowering Brands to Shine
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}>
          Simplifying trademark publishing and brand marketing so your business
          can grow with confidence.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-4 px-10 rounded-xl font-semibold shadow-lg transition-all">
            Get Started
          </Link>
        </motion.div>
      </motion.section>

      {/* Our Story Timeline */}
      <motion.section
        className="py-28 px-6 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}>
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-slate-900 text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          Our Journey
        </motion.h2>
        <div className="space-y-16">
          {story.map((item, idx) => (
            <motion.div
              key={idx}
              className={`flex flex-col md:flex-row ${
                idx % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center gap-8`}
              initial={{ x: idx % 2 === 0 ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}>
              <motion.div
                className="md:w-1/2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-72 h-50 mx-auto md:mx-0 rounded-2xl "
                />
              </motion.div>
              <div className="md:w-1/2">
                <motion.h3
                  className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}>
                  {item.title}
                </motion.h3>
                <motion.p
                  className="text-slate-600 text-lg leading-relaxed"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}>
                  {item.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Principles Section */}
      <section className="py-28 px-6 bg-blue-50/50">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 text-center mb-16">
          Our Principles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {principles.map((p, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition-all text-center">
              <img
                src={p.icon}
                alt={p.title}
                className="w-20 h-20 mx-auto mb-6"
              />
              <h4 className="text-2xl font-semibold mb-3 text-slate-900">
                {p.title}
              </h4>
              <p className="text-slate-600 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="bg-blue-100/50 p-12 rounded-3xl shadow-inner">
              <p className="text-5xl md:text-6xl font-extrabold text-blue-700 mb-4">
                {s.number}
              </p>
              <p className="text-slate-700 text-lg font-medium">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 px-6 text-center">
        <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
          Let’s Build Your Brand Together
        </h3>
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          Connect with our team and discover how we can help your business grow
          and get noticed.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-4 px-10 rounded-xl font-semibold shadow-lg transition-all">
          Contact Us
        </Link>
      </section>

      <Footer />
    </motion.div>
  );
}
