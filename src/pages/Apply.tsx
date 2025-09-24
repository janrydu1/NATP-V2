"use client";

import type React from "react";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { handleApplicationSubmit } from "@/lib/form-handlers";
import { motion } from "framer-motion";
import { Footer } from "@/components/footer";

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
        className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-indigo-600/10 to-slate-600/5"></div>
        <div className="text-center max-w-5xl mx-auto px-6 relative z-10">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 text-slate-900 text-balance leading-tight"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}>
            Elevate Your Brand
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}>
            Transform your trademark into a powerful asset with our exclusive
            publication platform
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        className="max-w-7xl mx-auto py-20 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}>
        <div className="mb-24">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-5xl font-light mb-6 text-slate-900 text-balance">
              Why Publication Matters
            </h2>
            <p className="text-slate-600 text-lg font-light leading-relaxed max-w-3xl mx-auto">
              Strategic trademark publication amplifies your brand's market
              presence and establishes unparalleled credibility
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-4">
                Market Visibility
              </h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Maximize your brand's discoverability and establish a commanding
                presence in your industry
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-4">
                Trust & Authority
              </h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Demonstrate professional legitimacy and build confidence with
                potential clients and partners
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-4">
                Client Acquisition
              </h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Attract high-quality prospects through enhanced brand
                recognition and market positioning
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 md:p-16 rounded-3xl border border-slate-200">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-light mb-6 text-slate-900">
              Begin Your Publication Journey
            </h3>
            <p className="text-slate-600 text-lg font-light leading-relaxed max-w-2xl mx-auto">
              Complete our streamlined application to initiate your trademark
              publication process
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label
                  htmlFor="firstName"
                  className="text-slate-700 font-medium">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  value={formData.first_name}
                  className="h-12 text-slate-900 border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl bg-white"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      first_name: e.target.value,
                    }))
                  }
                  required
                />
              </div>
              <div className="space-y-3">
                <Label
                  htmlFor="lastName"
                  className="text-slate-700 font-medium">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  className="h-12 text-slate-900 border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl bg-white"
                  value={formData.last_name}
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

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label htmlFor="email" className="text-slate-700 font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  className="h-12 text-slate-900 border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl bg-white"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  required
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="phone" className="text-slate-700 font-medium">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  className="h-12 text-slate-900 border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl bg-white"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  required
                />
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="company" className="text-slate-700 font-medium">
                Trademark Owner
              </Label>
              <Input
                id="company"
                className="h-12 text-slate-900 border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl bg-white"
                value={formData.company}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, company: e.target.value }))
                }
                required
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="trademark" className="text-slate-700 font-medium">
                Trademark Name
              </Label>
              <Input
                id="trademark"
                className="h-12 text-slate-900 border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl bg-white"
                value={formData.trademark}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    trademark: e.target.value,
                  }))
                }
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label
                  htmlFor="application-number"
                  className="text-slate-700 font-medium">
                  Application Number (Optional)
                </Label>
                <Input
                  id="application-number"
                  className="h-12 text-slate-900 border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl bg-white"
                  value={formData.application_number}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      application_number: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="space-y-3">
                <Label
                  htmlFor="application-date"
                  className="text-slate-700 font-medium">
                  Application Date
                </Label>
                <Input
                  id="application-date"
                  className="h-12 text-slate-900 border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl bg-white"
                  type="date"
                  value={formData.application_date}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      application_date: e.target.value,
                    }))
                  }
                />
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="class" className="text-slate-700 font-medium">
                International Classes (Optional)
              </Label>
              <Input
                id="class"
                className="h-12 text-slate-900 border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl bg-white"
                value={formData.class}
                placeholder="e.g., 35, 42"
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, class: e.target.value }))
                }
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="us_class" className="text-slate-700 font-medium">
                US Classes (Optional)
              </Label>
              <Input
                id="us_class"
                className="h-12 text-slate-900 border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl bg-white"
                placeholder="e.g., 100, 101"
                value={formData.us_class}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, us_class: e.target.value }))
                }
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <Label htmlFor="zip" className="text-slate-700 font-medium">
                  ZIP Code
                </Label>
                <Input
                  id="zip"
                  className="h-12 text-slate-900 border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl bg-white"
                  value={formData.zip}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, zip: e.target.value }))
                  }
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="city" className="text-slate-700 font-medium">
                  City
                </Label>
                <Input
                  id="city"
                  value={formData.city}
                  className="h-12 text-slate-900 border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl bg-white"
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, city: e.target.value }))
                  }
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="country" className="text-slate-700 font-medium">
                  Country
                </Label>
                <Input
                  id="country"
                  value={formData.country}
                  className="h-12 text-slate-900 border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl bg-white"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      country: e.target.value,
                    }))
                  }
                />
              </div>
            </div>

            <div className="space-y-4">
              <Label className="text-slate-700 font-medium">Your Role</Label>
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
                    className="flex items-center space-x-3 text-slate-700 p-4 rounded-xl border border-slate-300 hover:bg-white hover:border-blue-300 transition-colors cursor-pointer bg-white/50">
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
                    <span className="font-light">{role}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="message" className="text-slate-700 font-medium">
                Additional Information (Optional)
              </Label>
              <Textarea
                id="message"
                className="min-h-[120px] text-slate-900 border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl bg-white"
                placeholder="Share any additional details about your trademark or specific requirements..."
                value={formData.message}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, message: e.target.value }))
                }
              />
            </div>

            <div className="flex items-center space-x-3 p-4 bg-white/70 rounded-xl border border-slate-300">
              <input
                type="checkbox"
                id="agree"
                className="text-blue-600 focus:ring-blue-500 rounded"
                checked={formData.agree}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, agree: e.target.checked }))
                }
              />
              <Label htmlFor="terms" className="text-slate-700 font-light">
                I agree to the{" "}
                <a
                  href="/terms"
                  className="underline text-blue-600 hover:text-blue-700 font-medium">
                  Terms of Service
                </a>
              </Label>
            </div>

            <div className="flex justify-center items-center pt-6">
              <Button
                type="submit"
                className="bg-blue-600 text-white hover:bg-blue-700 px-12 py-4 rounded-xl font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Submit Application
              </Button>
            </div>
          </form>
        </div>

        <section className="py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6 text-balance">
              Our Streamlined Process
            </h2>
            <p className="text-slate-600 text-lg font-light leading-relaxed max-w-2xl mx-auto">
              Three simple steps to elevate your trademark's market presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <svg
                  className="w-10 h-10 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h4 className="text-2xl font-medium text-slate-900 mb-6">
                Submit Application
              </h4>
              <p className="text-slate-600 font-light leading-relaxed">
                Complete our comprehensive form with your trademark details and
                business information
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <svg
                  className="w-10 h-10 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              <h4 className="text-2xl font-medium text-slate-900 mb-6">
                Expert Review
              </h4>
              <p className="text-slate-600 font-light leading-relaxed">
                Our specialists verify all information and optimize your
                submission for maximum impact
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <svg
                  className="w-10 h-10 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h4 className="text-2xl font-medium text-slate-900 mb-6">
                Live Publication
              </h4>
              <p className="text-slate-600 font-light leading-relaxed">
                Your trademark goes live in our premium database, instantly
                boosting your brand visibility
              </p>
            </div>
          </div>
        </section>
      </motion.div>
      <Footer />
    </motion.div>
  );
}
