import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { useState, useEffect } from "react";
import { Search, PenTool, Megaphone } from "lucide-react";

export default function Article() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      text: "Their optimized articles put our brand exactly where it matters most - directly in front of our audience. The visibility we've gained has been incredible, and the trust we've built through valuable content has positioned us as an industry leader.",
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "Google",
      logo: "https://cdn.magicui.design/companies/Google.svg",
    },
    {
      text: "The memorable content they created helped us rise above the noise and truly show what makes our brand unique. They combine creativity with strategy so our articles don't just exist — they perform and deliver real results.",
      name: "Michael Chen",
      role: "Brand Manager",
      company: "Microsoft",
      logo: "https://cdn.magicui.design/companies/Microsoft.svg",
    },
    {
      text: "Strong content truly builds trust, attracts attention, and grows influence. It's not just about words — it's about creating lasting impressions that resonate with our target audience and drive meaningful engagement.",
      name: "Emma Rodriguez",
      role: "Content Strategist",
      company: "Amazon",
      logo: "https://cdn.magicui.design/companies/Amazon.svg",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Heading */}
          <div>
            <h1 className="text-6xl font-extrabold text-blue-700 tracking-tight leading-tight">
              Your Story, <br />
              Our Words
            </h1>
            <p className="mt-6 text-lg text-black max-w-md">
              We craft content that feels human, sharp, and memorable — turning
              your brand into something people want to follow.
            </p>
          </div>

          {/* Right - Illustration */}
          <div className="flex justify-center">
            <img
              src="/images/service_article.png"
              alt="Brand Storytelling"
              className="h-64"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold text-black text-center mb-20">
            How We Bring Ideas to Life
          </h2>
          {/* <p className="text-center text-black max-w-2xl mx-auto mb-16">
            Great content doesn't happen by chance. Here's how we make sure your
            brand voice stands out in a noisy digital world.
          </p> */}

          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-8 transition">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Search className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                Explore
              </h3>
              <p className="text-black text-base leading-relaxed">
                We start by understanding your brand, audience, and competitors.
                Every article begins with clarity and purpose.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-8 transition">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <PenTool className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                Create
              </h3>
              <p className="text-black text-base leading-relaxed">
                Our writers shape stories that connect, inspire, and feel true
                to your brand's personality.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-8 transition">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Megaphone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                Amplify
              </h3>
              <p className="text-black text-base leading-relaxed">
                Once ready, we make sure your content gets seen by the right
                people — with SEO and strategy built in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonial-highlight" className="py-20 px-6">
        <div className="relative container mx-auto px-4 py-16 max-w-7xl">
          <div className="text-center space-y-4 pb-6 mx-auto">
            <h2 className="text-sm text-blue-600 font-mono font-medium tracking-wider uppercase">
              Client Success Stories
            </h2>
            <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
              What our customers are saying
            </h3>
          </div>

          <div
            className="relative"
            role="region"
            aria-roledescription="carousel">
            <div className="max-w-2xl mx-auto relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="min-w-full flex-shrink-0 px-4">
                      <div className="p-2 pb-5">
                        <div className="text-center">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 24 24"
                            className="text-4xl text-gray-400 my-4 mx-auto"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0V0z" />
                            <path d="M18.62 18h-5.24l2-4H13V6h8v7.24L18.62 18zm-2-2h.76L19 12.76V8h-4v4h3.62l-2 4zm-8 2H3.38l2-4H3V6h8v7.24L8.62 18zm-2-2h.76L9 12.76V8H5v4h3.62l-2 4z" />
                          </svg>

                          <h4 className="text-xl font-semibold max-w-lg mx-auto px-10 mb-8 text-gray-800">
                            "{testimonial.text}"
                          </h4>

                          <div className="mt-8">
                            <img
                              alt={`${testimonial.company} Logo`}
                              loading="lazy"
                              width={0}
                              height={40}
                              className="mx-auto w-auto h-[40px] grayscale opacity-30"
                              src={testimonial.logo}
                            />
                          </div>

                          <div className="mt-6">
                            <h4 className="text-lg font-semibold my-2 text-gray-900">
                              {testimonial.name}
                            </h4>
                            <span className="text-sm text-gray-500">
                              {testimonial.role}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-blue-600 w-6" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="hidden md:block">
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 inline-flex items-center justify-center w-8 h-8 rounded-full border bg-white shadow-sm hover:bg-gray-50 transition-all disabled:opacity-50"
                disabled={currentSlide === 0}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6" />
                </svg>
                <span className="sr-only">Previous slide</span>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 inline-flex items-center justify-center w-8 h-8 rounded-full border bg-white shadow-sm hover:bg-gray-50 transition-all disabled:opacity-50"
                disabled={currentSlide === testimonials.length - 1}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
                <span className="sr-only">Next slide</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-blue-600">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Elevate Your Voice?
          </h2>
          <p className="text-lg mb-8">
            Let's create content that speaks louder, shines brighter, and
            actually moves people.
          </p>
          <Button
            asChild
            className="bg-white text-blue-700 font-semibold px-8 py-6 rounded shadow-md hover:bg-blue-100 transition">
            <Link to="/apply">Start Your Journey</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
