"use client";

import type React from "react";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/footer";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Send, ArrowRight } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 text-slate-800">
      <Navbar />

      {/* Hero Section */}
      <section className="relative text-center py-28 px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-blue-700 mb-6">
          Let’s Connect
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Have a project in mind or simply want to chat? Drop us a message and
          we’ll get back to you shortly.
        </p>
      </section>

      {/* Contact + Info */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div className="space-y-10">
            <div className="bg-white shadow-md rounded-2xl p-6 border border-blue-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email us at</p>
                  <p className="text-lg font-semibold text-blue-700">
                    support@yourbrand.com
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Transparency
              </h3>
              <p className="text-slate-600 leading-relaxed">
                We may share external resources for your benefit, but we are not
                responsible for their content. Reach out if you ever find
                something inaccurate or outdated.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Our Work
              </h3>
              <p className="text-slate-600 leading-relaxed">
                All materials, including visuals and content on this site, are
                protected. If you’d like to collaborate or request usage
                permissions, just get in touch.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-blue-100 rounded-2xl shadow-md p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                <div>
                  <Label
                    htmlFor="name"
                    className="text-slate-700 font-medium mb-2 block">
                    Full Name
                  </Label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-50 border border-blue-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="email"
                    className="text-slate-700 font-medium mb-2 block">
                    Email Address
                  </Label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-50 border border-blue-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="message"
                    className="text-slate-700 font-medium mb-2 block">
                    Your Message
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-50 border border-blue-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="terms"
                  checked={formData.agreedToTerms}
                  onCheckedChange={handleCheckboxChange}
                  className="mt-1 border-blue-400"
                />
                <Label
                  htmlFor="terms"
                  className="text-sm text-slate-600 leading-relaxed">
                  I accept the{" "}
                  <a href="/terms" className="text-blue-600 hover:underline">
                    terms & privacy policy
                  </a>
                  .
                </Label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium transition disabled:opacity-50 flex items-center justify-center gap-2">
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
            Stay Updated
          </h2>
          <p className="text-slate-600 mb-10">
            Subscribe for the latest updates, insights, and resources directly
            in your inbox.
          </p>

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
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="flex-1 bg-white border border-blue-200 rounded-xl px-6 py-4 text-slate-700 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button
              type="submit"
              disabled={isNewsletterSubmitting}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium transition disabled:opacity-50 flex items-center justify-center gap-2">
              {isNewsletterSubmitting ? (
                "Subscribing..."
              ) : (
                <>
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <p className="text-xs text-slate-500 mt-6">
            You can unsubscribe anytime. See our{" "}
            <a href="/terms" className="text-blue-600 hover:underline">
              terms & privacy policy
            </a>
            .
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
