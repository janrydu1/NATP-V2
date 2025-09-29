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
import { Star, Award, Zap } from "lucide-react";
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
      image:
        "/images/about_start.png",
    },
    {
      year: "2022",
      title: "Expanding Reach",
      description:
        "We developed strategies to help brands gain visibility and recognition.",
      image:
        "/images/about_expanding.png",
    },
    {
      year: "2023",
      title: "Innovation First",
      description:
        "We introduced smart content creation and marketing to stay ahead.",
      image:
        "/images/about_first.png",
    },
  ];

  const stats = [
    { number: "98%+", text: "Satisfied Clients", icon: Star },
    { number: "10K+", text: "Trademarks Published", icon: Award },
    { number: "5+", text: "Years of Expertise", icon: Zap },
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
                  "group rounded-full max-w-[25%] border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                )}>
                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                  <span>About Our Company</span>
                </AnimatedShinyText>
              </div>
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-black leading-[0.9] mb-8"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}>
                Empowering <span className="text-blue-600">Brands</span> to
                Shine
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}>
                Simplifying Trademark Publishing and brand marketing so your
                business can grow with confidence.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileTap={{ scale: 0.95 }}>
                <InteractiveHoverButton className="bg-blue-500 text-white shadow-lg rounded-lg px-8 py-4 text-lg font-semibold transition-all duration-300">
                  <Link to="/contact">Contact Us</Link>
                </InteractiveHoverButton>
              </motion.div>
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
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-br from-blue-500 to-cyan-500 p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <svg
                        className="w-12 h-12 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10.5V11.5C15.4,11.5 16,12.4 16,13V16C16,17.4 15.4,18 14.8,18H9.2C8.6,18 8,17.4 8,16V13C8,12.4 8.6,11.5 9.2,11.5V10.5C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10.5V11.5H13.5V10.5C13.5,8.7 12.8,8.2 12,8.2Z" />
                      </svg>
                    </div>
                  </motion.div>

                  <motion.div
                    className="group relative p-6"
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    whileHover={{ scale: 1.1, rotate: -5 }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <svg
                        className="w-12 h-12 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M2.81,14.12L5.64,11.29L8.17,10.79C11.39,6.41 17.55,5.54 17.55,5.54C17.55,5.54 16.68,11.7 12.3,14.92L11.8,17.45L8.97,20.28C7.58,21.67 5.35,20.28 5.35,20.28C5.35,20.28 3.96,18.05 5.35,16.66L8.17,13.84L7.79,12.82L11.59,9.02L14.83,12.26L11.03,16.06L10.01,15.68L7.19,18.5C7.19,18.5 8.85,19.15 9.33,18.67C9.81,18.19 9.16,16.53 9.16,16.53L11.8,13.89L7.79,9.88L10.43,7.24C10.43,7.24 8.77,6.59 8.29,7.07C7.81,7.55 8.46,9.21 8.46,9.21L5.64,12.03L2.81,14.12Z" />
                      </svg>
                    </div>
                  </motion.div>

                  <motion.div
                    className="group relative p-6"
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-br from-emerald-500 to-teal-500 p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <svg
                        className="w-12 h-12 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z" />
                      </svg>
                    </div>
                  </motion.div>

                  <motion.div
                    className="group relative p-6"
                    initial={{ scale: 0, rotate: 90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 1.3 }}
                    whileHover={{ scale: 1.1, rotate: -5 }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-br from-orange-500 to-red-500 p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <svg
                        className="w-12 h-12 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M6,2L18,2L22,6L12,22L2,6L6,2M12.5,17.5L19,7L17,5L12.5,8.5L8,5L5,7L12.5,17.5Z" />
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

        <div className="relative">
          {/* Central timeline line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block"></div>

          <div className="space-y-16 md:space-y-24">
            {story.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{
                  x: idx % 2 === 0 ? -50 : 50,
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                className="relative">
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full shadow-lg z-10 hidden md:block"
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "spring", stiffness: 300 }}></motion.div>

                <div
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    idx % 2 !== 0 ? "md:flex-row-reverse" : ""
                  }`}>
                  {/* Content */}
                  <motion.div
                    className="md:w-1/2 space-y-4"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 }}>
                      <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-blue-100 text-blue-700 rounded-full">
                        {item.year}
                      </span>
                    </motion.div>

                    <motion.h3
                      className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}>
                      {item.title}
                    </motion.h3>

                    <motion.p
                      className="text-lg text-gray-600 leading-relaxed max-w-md"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}>
                      {item.description}
                    </motion.p>
                  </motion.div>

                  {/* Image */}
                  <motion.div
                    className="md:w-1/2"
                    whileHover={{ scale: 1.02, rotate: idx % 2 === 0 ? 1 : -1 }}
                    transition={{
                      duration: 0.4,
                      type: "spring",
                      stiffness: 200,
                    }}>
                    <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-28 px-6 bg-gradient-to-br from-slate-50/80 via-blue-50/30 to-slate-50/80 relative overflow-hidden">
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
