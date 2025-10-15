import type React from "react";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Label } from "@/components/ui/label";
import { Mail, Send, ArrowRight, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    agreedToTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      agreedToTerms: checked,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agreedToTerms) {
      toast.error("Please accept our terms to continue");
      return;
    }

    try {
      setIsSubmitting(true);

      const { error } = await supabase.from("contacts").insert({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        agreed_to_terms: formData.agreedToTerms,
      });

      if (error) throw error;

      toast.success("Thanks for reaching out! We'll reply soon.");
      setFormData({
        name: "",
        email: "",
        message: "",
        agreedToTerms: false,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen text-slate-800">
      <Navbar />

      {/* Hero Header Section */}
      <section className="mx-auto py-10 px-6 mt-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6">
            <h1 className="text-3xl md:text-4xl text-blue-700 leading-tight">
              Contact Us
            </h1>
            <p className="text-slate-600 text-lg font-light leading-relaxed max-w-2xl mx-auto">
              Have questions or need assistance? We're here to help you every
              step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact + Info */}
      <section className="py-10 px-6 -mt-8">
        <div className="max-w-3xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white border border-blue-100 shadow-md rounded-2xl p-8 mb-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label
                  htmlFor="name"
                  className="block text-slate-700 font-medium mb-2">
                  Full Name
                </Label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-slate-300 text-black placeholder:text-slate-400 rounded-xl px-4 py-3 focus:border-blue-500 outline-none"
                  placeholder="Jane Doe"
                />
              </div>

              <div>
                <Label
                  htmlFor="email"
                  className="block text-slate-700 font-medium mb-2">
                  Email Address
                </Label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-slate-300 text-black placeholder:text-slate-400 rounded-xl px-4 py-3 focus:border-blue-500 outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <Label
                  htmlFor="message"
                  className="block text-slate-700 font-medium mb-2">
                  Your Message
                </Label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border border-slate-300 text-black placeholder:text-slate-400 rounded-xl px-4 py-3 focus:border-blue-500 outline-none resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-medium transition disabled:opacity-50 flex items-center justify-center gap-2 shadow-sm">
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-xs text-slate-500 text-center">
                We usually reply within 24 hours.
              </p>
            </form>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white border border-blue-100 shadow-sm rounded-2xl p-6 hover:shadow-md transition">
              <Mail className="w-6 h-6 text-blue-600 mb-3" />
              <p className="text-sm text-slate-500">Email</p>
              <p className="text-blue-700 font-semibold">
                help@atpregistry.com
              </p>
            </div>

            {/* <div className="bg-white border border-blue-100 shadow-sm rounded-2xl p-6 hover:shadow-md transition">
              <MapPin className="w-6 h-6 text-blue-600 mb-3" />
              <p className="text-sm text-slate-500">Office</p>
              <p className="text-blue-700 font-semibold">Mumbai, India</p>
            </div> */}

            <div className="bg-white border border-blue-100 shadow-sm rounded-2xl p-6 hover:shadow-md transition">
              <Clock className="w-6 h-6 text-blue-600 mb-3" />
              <p className="text-sm text-slate-500">Support Hours</p>
              <p className="text-blue-700 font-semibold">8am-4pm EST</p>
            </div>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed mt-8 text-center">
            We respect your privacy. Shared details will only be used to respond
            to your inquiry.
            <a href="/terms" className="text-blue-600 hover:underline">
              {" "}
              Learn more
            </a>
            .
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="bg-blue-50 rounded-xl py-16">
          <div className="relative container mx-auto px-4 py-16 max-w-7xl">
            <div className="text-center space-y-4 pb-6 mx-auto">
              {/* <h2 className="text-sm text-blue-600 font-mono font-medium tracking-wider uppercase">
                Ready to get started?
              </h2> */}
              <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl text-blue-700">
                Subscribe for the latest updates today.
              </h3>
            </div>
            <div className="flex flex-col w-full sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <form
                onSubmit={async (e) => {
                  e.preventDefault();

                  if (!newsletterEmail) {
                    toast.error("Please enter your email address");
                    return;
                  }

                  try {
                    setIsNewsletterSubmitting(true);

                    const { error } = await supabase
                      .from("newsletter_subscriptions")
                      .insert([{ email: newsletterEmail }]);

                    if (error) throw error;

                    toast.success("You're subscribed!");
                    setNewsletterEmail("");
                  } catch (error) {
                    console.error("Newsletter subscription failed:", error);
                    toast.error("Something went wrong. Please try again.");
                  } finally {
                    setIsNewsletterSubmitting(false);
                  }
                }}
                className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 bg-white border border-blue-200 rounded px-4 py-2 text-slate-700 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <button
                  type="submit"
                  disabled={isNewsletterSubmitting}
                  className="items-center justify-center whitespace-nowrap rounded text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] bg-blue-600 shadow-xs hover:bg-blue-700 h-9 px-4 py-4 w-full sm:w-auto text-white flex gap-2">
                  {isNewsletterSubmitting ? (
                    "Subscribing..."
                  ) : (
                    <>
                      <ArrowRight className="h-6 w-6" />
                      Subscribe for free
                    </>
                  )}
                </button>
              </form>
            </div>
            <p className="text-xs text-slate-500 mt-6 text-center">
              You can unsubscribe anytime. See our{" "}
              <a href="/terms" className="text-blue-600 hover:underline">
                terms & privacy policy
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
