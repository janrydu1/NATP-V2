"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  TrendingUp,
  Star,
  Award,
  Zap,
  ArrowRightIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { cn } from "@/lib/utils";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export default function About() {
  const story = [
    {
      year: "2021",
      title: "Our Beginning",
      description:
        "We started with a vision to simplify trademark publishing for new brands.",
      image: "/images/about_beginning.png",
    },
    {
      year: "2022",
      title: "Expanding Reach",
      description:
        "We developed strategies to help brands gain visibility and recognition.",
      image: "/images/about_reach.png",
    },
    {
      year: "2023",
      title: "Innovation First",
      description:
        "We introduced smart content creation and marketing to stay ahead.",
      image: "/images/about_innovation.svg",
    },
  ];

  const principles = [
    {
      title: "Excellence",
      description:
        "Every service we deliver meets the highest standard — no compromises.",
      icon: Award,
    },
    {
      title: "Client Focus",
      description: "We tailor solutions to fit the unique needs of each brand.",
      icon: Users,
    },
    {
      title: "Continuous Growth",
      description: "We constantly innovate to help our clients stay ahead.",
      icon: TrendingUp,
    },
  ];

  const stats = [
    { number: "95%", text: "Satisfied Clients", icon: Star },
    { number: "100+", text: "Trademarks Published", icon: Award },
    { number: "10+", text: "Years of Expertise", icon: Zap },
  ];

  return (
    <motion.div
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}>
      <Navbar />
      {/* Hero Section */}
      <motion.section
        className="py-32 px-6 bg-gradient-to-br from-primary/5 via-background to-secondary/5"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <motion.div
              className="space-y-8"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}>
              <div className="z-10 flex items-center justify-start mb-10">
                <div
                  className={cn(
                    "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200"
                  )}>
                  <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 rounded">
                    <span>About our Company</span>
                  </AnimatedShinyText>
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 text-balance">
                Empowering Brands to <span className="text-primary">Shine</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl text-pretty">
                Simplifying trademark publishing and brand marketing so your
                business can grow with confidence.
              </p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <InteractiveHoverButton className="bg-blue-600 text-white shadow-md rounded">
                  <Link to="/contact">Contact Us</Link>
                </InteractiveHoverButton>
              </motion.div>
            </motion.div>

            {/* Right side - Image */}
            <motion.div
              className="relative"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/about_beginning.png"
                  alt="About our company"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Story Timeline */}
      <motion.section
        className="py-28 px-6 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}>
        <motion.div
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          <div className="z-10 flex items-center justify-center mb-10">
            <div
              className={cn(
                "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
              )}>
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>Our Journey</span>
              </AnimatedShinyText>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Our Story
          </h2>
        </motion.div>

        <div className="space-y-12">
          {story.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ x: idx % 2 === 0 ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}>
              <Card className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/70 backdrop-blur-sm hover:bg-white/90 border border-slate-300">
                <div
                  className={`flex flex-col md:flex-row ${
                    idx % 2 !== 0 ? "md:flex-row-reverse" : ""
                  } items-center min-h-[400px]`}>
                  <motion.div
                    className="md:w-1/2 p-8 relative overflow-hidden"
                    transition={{ duration: 0.5 }}>
                    <div className="relative rounded-xl overflow-hidden">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-72 object-cover transition-transform duration-700 "
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </motion.div>
                  <CardContent className="md:w-1/2 p-10 space-y-6">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}>
                      <Badge
                        variant="secondary"
                        className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary border-primary/20 hover:from-primary/20 hover:to-blue-500/20 transition-all duration-300">
                        {item.year}
                      </Badge>
                    </motion.div>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}>
                      <CardTitle className="text-3xl md:text-4xl mb-6 text-blue-700 font-bold group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                        {item.title}
                      </CardTitle>
                    </motion.div>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}>
                      <CardDescription className="text-lg leading-relaxed text-muted-foreground group-hover:text-gray-700 transition-colors duration-300">
                        {item.description}
                      </CardDescription>
                    </motion.div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-28 px-6 bg-gradient-to-br from-slate-50/80 via-blue-50/30 to-slate-50/80">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="z-10 flex items-center justify-center mb-10">
              <div
                className={cn(
                  "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                )}>
                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                  <span>Our Impact</span>
                </AnimatedShinyText>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              By the Numbers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence speaks through the results we deliver
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {stats.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ scale: 0.8, opacity: 0, y: 50 }}
                  whileInView={{ scale: 1, opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: idx * 0.2,
                    type: "spring",
                    stiffness: 100,
                  }}>
                  <Card className="relative text-center group hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                    {/* Background gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Animated border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-primary/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                    <div className="absolute inset-[1px] bg-white rounded-2xl"></div>

                    <CardContent className="relative p-12 space-y-6">
                      {/* Icon with enhanced styling */}
                      <motion.div
                        className="mx-auto mb-6 relative"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                        <div className="relative p-4 bg-gradient-to-br from-blue-500/10 to-primary/10 rounded-full w-fit mx-auto group-hover:from-blue-500/20 group-hover:to-primary/20 transition-all duration-500 border border-blue-200/50">
                          <IconComponent className="h-10 w-10 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                        </div>
                      </motion.div>

                      {/* Animated number */}
                      <motion.div
                        initial={{ scale: 0.5 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.8, delay: idx * 0.2 + 0.3 }}>
                        <p className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent mb-4 leading-tight">
                          {stat.number}
                        </p>
                      </motion.div>

                      {/* Description with better styling */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.2 + 0.5 }}>
                        <p className="text-muted-foreground text-xl font-semibold group-hover:text-gray-700 transition-colors duration-300">
                          {stat.text}
                        </p>
                      </motion.div>

                      {/* Subtle pulse effect */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: idx * 0.2 + 0.7 }}
                      />

                      {/* Decorative elements */}
                      <div className="absolute top-4 right-4 w-20 h-20 bg-blue-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      <div className="absolute bottom-4 left-4 w-16 h-16 bg-primary/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 px-6 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <div className="z-10 flex items-center justify-center mb-10">
              <div
                className={cn(
                  "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                )}>
                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                  <span>Ready To Start?</span>
                </AnimatedShinyText>
              </div>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6 text-balance">
              Let's Build Your Brand{" "}
              <span className="text-primary">Together</span>
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty">
              Connect with our team and discover how we can help your business
              grow and get noticed.
            </p>
            <InteractiveHoverButton className="bg-blue-600 text-white shadow-md rounded">
              <Link to="/contact">Contact Us</Link>
            </InteractiveHoverButton>
          </motion.div>
        </div>
      </section>
      <Footer />
    </motion.div>
  );
}
