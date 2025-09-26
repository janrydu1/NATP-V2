"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { handleApplicationSubmit } from "@/lib/form-handlers";
import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";

export default function Apply() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    company: "",
    trademark: "",
    application_number: "",
    application_date: "",
    class: "",
    us_class: "",
    zip: "",
    city: "",
    country: "",
    role: "",
    message: "",
    agree: false,
  });

  // State for the interactive "How it works" section
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Submit Application",
      description:
        "Complete our comprehensive form with your trademark details and business information",
      icon: (
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
          className="lucide lucide-upload w-6 h-6 text-blue-600">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1={12} x2={12} y1={3} y2={15} />
        </svg>
      ),
      image: "/images/apply_submit.png",
    },
    {
      title: "Expert Review",
      description:
        "Our specialists verify all information and optimize your submission for maximum impact",
      icon: (
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
      ),
      image: "/images/apply_expert.png",
    },
    {
      title: "Live Publication",
      description:
        "Your trademark goes live in our premium database, instantly boosting your brand visibility",
      icon: (
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
          className="lucide lucide-sparkles w-6 h-6 text-blue-600">
          <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
          <path d="M20 3v4" />
          <path d="M22 5h-4" />
          <path d="M4 17v2" />
          <path d="M5 18H3" />
        </svg>
      ),
      image: "/images/apply_visibility.png",
    },
  ];

  // Auto-advance steps every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [steps.length]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (await handleApplicationSubmit(formData)) {
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        company: "",
        trademark: "",
        application_number: "",
        application_date: "",
        class: "",
        us_class: "",
        zip: "",
        city: "",
        country: "",
        role: "",
        message: "",
        agree: false,
      });
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}>
      <Navbar />

      <motion.div
        className="max-w-7xl mx-auto py-10 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}>
        <div className="md:p-16 rounded-3xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl mb-6 text-blue-700">
              Begin Your Publication Journey
            </h3>
            <p className="text-slate-600 text-lg font-light leading-relaxed max-w-2xl mx-auto">
              Complete our streamlined application to initiate your trademark
              publication process
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="max-w-7xl mx-auto p-10 rounded-2xl shadow-xl space-y-10 border border-slate-200">
            {/* Personal Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label
                  htmlFor="firstName"
                  className="text-slate-700 font-semibold">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  value={formData.first_name}
                  placeholder="Enter your first name"
                  className="h-12 rounded-xl bg-white border border-slate-200 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-100 transition placeholder:text-slate-400"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      first_name: e.target.value,
                    }))
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="lastName"
                  className="text-slate-700 font-semibold">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  value={formData.last_name}
                  placeholder="Enter your last name"
                  className="h-12 rounded-xl bg-white border border-slate-200 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-100 transition placeholder:text-slate-400"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      last_name: e.target.value,
                    }))
                  }
                  required
                />
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-700 font-semibold">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  placeholder="john.doe@example.com"
                  className="h-12 rounded-xl bg-white border border-slate-200 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-100 transition placeholder:text-slate-400"
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-slate-700 font-semibold">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  placeholder="+1 (555) 123-4567"
                  className="h-12 rounded-xl bg-white border border-slate-200 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-100 transition placeholder:text-slate-400"
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  required
                />
              </div>
            </div>

            {/* Trademark Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label
                  htmlFor="company"
                  className="text-slate-700 font-semibold">
                  Trademark Owner
                </Label>
                <Input
                  id="company"
                  value={formData.company}
                  placeholder="Your Company Name or Individual Name"
                  className="h-12 rounded-xl bg-white border border-slate-200 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-100 transition placeholder:text-slate-400"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      company: e.target.value,
                    }))
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="trademark"
                  className="text-slate-700 font-semibold">
                  Trademark Name
                </Label>
                <Input
                  id="trademark"
                  value={formData.trademark}
                  placeholder="Enter your trademark name"
                  className="h-12 rounded-xl bg-white border border-slate-200 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-100 transition placeholder:text-slate-400"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      trademark: e.target.value,
                    }))
                  }
                  required
                />
              </div>
            </div>

            {/* Application Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label
                  htmlFor="application-number"
                  className="text-slate-700 font-semibold">
                  Application Number (Optional)
                </Label>
                <Input
                  id="application-number"
                  value={formData.application_number}
                  placeholder="e.g., 88123456"
                  className="h-12 rounded-xl bg-white border border-slate-200 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-100 transition placeholder:text-slate-400"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      application_number: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="application-date"
                  className="text-slate-700 font-semibold">
                  Application Date
                </Label>
                <Input
                  id="application-date"
                  type="date"
                  value={formData.application_date}
                  className="h-12 rounded-xl bg-white border border-slate-200 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-100 transition placeholder:text-slate-400"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      application_date: e.target.value,
                    }))
                  }
                />
              </div>
            </div>

            {/* Classes */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="class" className="text-slate-700 font-semibold">
                  International Classes (Optional)
                </Label>
                <Input
                  id="class"
                  value={formData.class}
                  placeholder="e.g., 35, 42"
                  className="h-12 rounded-xl bg-white border border-slate-200 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-100 transition placeholder:text-slate-400"
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, class: e.target.value }))
                  }
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="us_class"
                  className="text-slate-700 font-semibold">
                  US Classes (Optional)
                </Label>
                <Input
                  id="us_class"
                  placeholder="e.g., 100, 101"
                  value={formData.us_class}
                  className="h-12 rounded-xl bg-white border border-slate-200 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-100 transition placeholder:text-slate-400"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      us_class: e.target.value,
                    }))
                  }
                />
              </div>
            </div>

            {/* Address */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="zip" className="text-slate-700 font-semibold">
                  ZIP Code
                </Label>
                <Input
                  id="zip"
                  value={formData.zip}
                  placeholder="12345 or A1B 2C3"
                  className="h-12 rounded-xl bg-white border border-slate-200 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-100 transition placeholder:text-slate-400"
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, zip: e.target.value }))
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city" className="text-slate-700 font-semibold">
                  City
                </Label>
                <Input
                  id="city"
                  value={formData.city}
                  placeholder="New York, London, Mumbai"
                  className="h-12 rounded-xl bg-white border border-slate-200 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-100 transition placeholder:text-slate-400"
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, city: e.target.value }))
                  }
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="country"
                  className="text-slate-700 font-semibold">
                  Country
                </Label>
                <Input
                  id="country"
                  value={formData.country}
                  placeholder="United States, India, United Kingdom"
                  className="h-12 rounded-xl bg-white border border-slate-200 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-100 transition placeholder:text-slate-400"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      country: e.target.value,
                    }))
                  }
                />
              </div>
            </div>

            {/* Role */}
            <div className="space-y-3">
              <Label className="text-slate-700 font-semibold">Your Role</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Business Owner",
                  "Legal Counsel",
                  "Brand Manager",
                  "Trademark Agent",
                  "Other",
                ].map((role) => (
                  <label
                    key={role}
                    className={`flex items-center space-x-3 p-4 rounded-xl border ${
                      formData.role === role
                        ? "bg-blue-50 border-blue-400"
                        : "bg-white border-slate-200"
                    } cursor-pointer transition hover:border-blue-300 hover:bg-blue-50`}>
                    <input
                      type="radio"
                      name="role"
                      value={role}
                      className="text-blue-600 focus:ring-blue-500"
                      checked={formData.role === role}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          role: e.target.value,
                        }))
                      }
                    />
                    <span className="font-medium text-slate-700">{role}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-slate-700 font-semibold">
                Additional Information (Optional)
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                className="min-h-[140px] rounded-xl bg-white border border-slate-200 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-100 transition placeholder:text-slate-400"
                placeholder="Share any additional details about your trademark..."
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, message: e.target.value }))
                }
              />
            </div>

            {/* Agreement */}
            <div className="flex items-start space-x-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <input
                type="checkbox"
                id="agree"
                className="mt-1 text-blue-600 focus:ring-blue-500 rounded"
                checked={formData.agree}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, agree: e.target.checked }))
                }
              />
              <Label htmlFor="agree" className="text-slate-600 text-sm">
                I agree to the{" "}
                <a
                  href="/terms"
                  className="underline text-blue-600 hover:text-blue-700 font-medium">
                  Terms of Service
                </a>
              </Label>
            </div>

            {/* Submit */}
            <div className="flex justify-center pt-6">
              <Button
                type="submit"
                className="bg-blue-600 text-white px-7 py-6 rounded-xl font-semibold text-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                Submit Application
              </Button>
            </div>
          </form>
        </div>

        <section id="how-it-works">
          <div>
            <div className="relative container mx-auto px-4 py-16 max-w-7xl">
              <div className="text-center space-y-4 pb-6 mx-auto">
                <h2 className="text-sm text-blue-600 font-mono font-medium tracking-wider uppercase">
                  How it works
                </h2>
                <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl text-blue-700">
                  Just 3 steps to get started
                </h3>
              </div>
              <section id="features">
                <div className="container">
                  <div className="max-w-6xl mx-auto">
                    <div className="mx-auto my-12 h-full grid lg:grid-cols-2 gap-10 items-center">
                      {/* Desktop Version - Left Side Steps */}
                      <div className="hidden lg:flex order-1 lg:order-[0] justify-start">
                        <div className="" data-orientation="vertical">
                          {steps.map((step, index) => (
                            <div
                              key={index}
                              data-state={
                                currentStep === index ? "open" : "closed"
                              }
                              data-orientation="vertical"
                              className="mt-px overflow-hidden focus-within:relative focus-within:z-10 relative mb-8 last:mb-0"
                              onClick={() => setCurrentStep(index)}>
                              {/* Vertical Progress Bar */}
                              <div className="absolute bottom-0 top-0 h-full w-0.5 overflow-hidden rounded-lg bg-neutral-300/50 dark:bg-neutral-300/30 left-0 right-auto">
                                <motion.div
                                  className="absolute left-0 top-0 w-full origin-top bg-blue-600 transition-all ease-linear dark:bg-white"
                                  initial={{ height: "0%" }}
                                  animate={{
                                    height:
                                      currentStep > index
                                        ? "100%"
                                        : currentStep === index
                                        ? "100%"
                                        : "0%",
                                  }}
                                  transition={{
                                    duration: 0.8,
                                    ease: "easeInOut",
                                  }}
                                />
                              </div>

                              <div className="flex items-center relative cursor-pointer">
                                {/* Icon */}
                                <motion.div
                                  className="item-box w-12 h-12 bg-blue-600/10 rounded-full sm:mx-6 mx-2 shrink-0 flex items-center justify-center"
                                  animate={{
                                    backgroundColor:
                                      currentStep === index
                                        ? "rgb(37 99 235 / 0.2)"
                                        : "rgb(37 99 235 / 0.1)",
                                    scale: currentStep === index ? 1.1 : 1,
                                  }}
                                  transition={{ duration: 0.3 }}>
                                  {step.icon}
                                </motion.div>

                                <div>
                                  {/* Title */}
                                  <h3
                                    data-orientation="vertical"
                                    data-state={
                                      currentStep === index ? "open" : "closed"
                                    }
                                    className="flex">
                                    <motion.button
                                      type="button"
                                      className="group flex flex-1 cursor-pointer items-center justify-between px-5 outline-none text-xl font-bold pl-0"
                                      animate={{
                                        color:
                                          currentStep === index
                                            ? "rgb(29 78 216)"
                                            : "rgb(51 65 85)",
                                      }}
                                      transition={{ duration: 0.3 }}>
                                      {index + 1}. {step.title}
                                    </motion.button>
                                  </h3>

                                  {/* Description */}
                                  <motion.div
                                    initial={{ opacity: 0.7 }}
                                    animate={{
                                      opacity: currentStep === index ? 1 : 0.7,
                                      scale: currentStep === index ? 1.02 : 1,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="flex">
                                    <p className="group flex flex-1 cursor-pointer items-center px-5 outline-none justify-start text-left text-[16px] pl-0">
                                      {step.description}
                                    </p>
                                  </motion.div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Image Section */}
                      <div className="h-[350px] min-h-[200px] w-auto relative overflow-hidden">
                        <motion.img
                          key={currentStep}
                          alt={steps[currentStep].title}
                          className="aspect-auto h-full w-full rounded-xl border border-neutral-300/50 object-cover object-center p-1 shadow-lg"
                          src={steps[currentStep].image}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                      </div>

                      {/* Mobile Version - Horizontal Scroll */}
                      <ul
                        className="flex h-full snap-x flex-nowrap overflow-x-auto py-10 [-ms-overflow-style:none] [-webkit-mask-image:linear-gradient(90deg,transparent,black_20%,white_80%,transparent)] [mask-image:linear-gradient(90deg,transparent,black_20%,white_80%,transparent)] [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden snap-mandatory"
                        style={{ padding: "50px calc(50%)" }}>
                        {steps.map((step, index) => (
                          <motion.div
                            key={index}
                            className="card relative mr-8 grid h-full max-w-60 shrink-0 items-start justify-center py-4 last:mr-0"
                            style={{ scrollSnapAlign: "center" }}
                            animate={{
                              scale: currentStep === index ? 1.05 : 1,
                              opacity: currentStep === index ? 1 : 0.8,
                            }}
                            transition={{ duration: 0.3 }}>
                            {/* Horizontal Progress Bar */}
                            <div className="absolute bottom-0 left-0 right-auto top-0 h-0.5 w-full overflow-hidden rounded-lg bg-neutral-300/50 dark:bg-neutral-300/30">
                              <motion.div
                                className="absolute left-0 top-0 h-full origin-left bg-blue-600 transition-all ease-linear"
                                initial={{ width: "0%" }}
                                animate={{
                                  width:
                                    currentStep > index
                                      ? "100%"
                                      : currentStep === index
                                      ? "100%"
                                      : "0%",
                                }}
                                transition={{
                                  duration: 0.8,
                                  ease: "easeInOut",
                                }}
                              />
                            </div>

                            <h2 className="text-xl font-bold">
                              {index + 1}. {step.title}
                            </h2>
                            <p className="mx-0 max-w-sm text-balance text-sm">
                              {step.description}
                            </p>
                          </motion.div>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </motion.div>
      <Footer />
    </motion.div>
  );
}
