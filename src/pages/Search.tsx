import type React from "react";
import { useState, useEffect, useCallback } from "react";
import { Navbar } from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  ChevronUp,
  ChevronDown,
  SearchIcon,
  RefreshCw,
  FileText,
} from "lucide-react";
import type { TrademarkResult } from "@/components/TrademarkCard";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { SearchResults } from "@/components/SearchResults";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("q") || "";
  const [inputValue, setInputValue] = useState(searchQuery);
  const [results, setResults] = useState<TrademarkResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchSubmitted, setSearchSubmitted] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  const features = [
    {
      title: "Instant Trademark Lookup",
      description:
        "Search by application number or owner name and instantly see published trademarks.",
      image: "/images/service_trademark.jpg",
    },
    {
      title: "Updated Daily",
      description:
        "Our database is refreshed every day to provide the latest trademark information.",
      image: "/images/service_content.png",
    },
    {
      title: "Detailed Insights",
      description:
        "Each result links to comprehensive articles with full trademark details.",
      image: "/images/service_article.jpg",
    },
  ];

  const toggleFAQ = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  // Auto-cycle through features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeatureIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [features.length]);

  const performSearch = useCallback(
    async (query: string) => {
      if (!query.trim()) {
        setResults([]);
        return;
      }
      setLoading(true);
      try {
        const { data: allTrademarks, error } = await supabase
          .from("trademarks")
          .select("*")
          .order("created_at", { ascending: false });
        if (error) throw error;

        const EXCLUDED_TERMS = [
          "llc",
          "inc",
          "corporation",
          "corp",
          "incorporated",
        ];

        const filteredResults = allTrademarks.filter((trademark) => {
          let matchFound = false;

          const queryLower = query.toLowerCase();

          if (trademark.application_number?.toLowerCase() === queryLower)
            matchFound = true;

          if (!matchFound && trademark.mark) {
            const markWords = trademark.mark.split(/\s+/);
            if (
              !EXCLUDED_TERMS.includes(queryLower) &&
              markWords.some((w) => w.toLowerCase() === queryLower)
            )
              matchFound = true;
          }

          if (!matchFound && trademark.owner_name) {
            const ownerWords = trademark.owner_name.split(/\s+/);
            if (
              !EXCLUDED_TERMS.includes(queryLower) &&
              ownerWords.some(
                (w) =>
                  w.toLowerCase() === queryLower &&
                  !EXCLUDED_TERMS.includes(w.toLowerCase())
              )
            )
              matchFound = true;
          }

          return matchFound;
        });

        setResults(filteredResults);
        if (searchSubmitted) {
          filteredResults.length
            ? toast.success(`Found ${filteredResults.length} results`)
            : toast.info("No results found for your search");
        }
      } catch (error) {
        console.error(error);
        if (searchSubmitted) toast.error("Search failed. Try again.");
        setResults([]);
      } finally {
        setLoading(false);
      }
    },
    [searchSubmitted]
  );

  useEffect(() => {
    setInputValue(searchQuery);
    if (searchQuery) {
      setSearchSubmitted(true);
      performSearch(searchQuery);
    }
  }, [searchQuery, performSearch]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return toast.error("Please enter a search term");
    setSearchParams({ q: inputValue });
    setSearchSubmitted(true);
  };

  const faqs = [
    {
      question: "What info is included?",
      answer:
        "Detailed articles, images, owner info, and filing dates for each trademark.",
    },
    {
      question: "How to search?",
      answer:
        "Enter application number, owner, or company name and select Search. Each result links to more info.",
    },
    {
      question: "Can I search multiple times?",
      answer: "Yes, try different terms to get the latest data anytime.",
    },
    {
      question: "Need help?",
      answer:
        "Click Contact to reach our support team for guidance on trademark searches.",
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}>
      <Navbar />

      {/* Hero Section */}
      <motion.div
        className="relative text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}>
        <motion.div
          className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-300" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 text-blue-800 leading-tight drop-shadow-sm"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}>
              Explore Our Trademark Database
            </motion.h1>
            <motion.p
              className="text-lg md:text-2xl text-slate-700 leading-relaxed max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}>
              Instantly find trademarks and discover opportunities to protect
              and grow your brand.
            </motion.p>
          </div>
        </motion.div>
        <motion.form
          onSubmit={handleSearch}
          className="flex flex-col sm:flex-row gap-4 justify-center max-w-4xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}>
          <Input
            type="text"
            placeholder="Enter application number, owner, or company name..."
            className="flex-1 h-14 text-blue-900 border-2 border-blue-200 focus:border-blue-500 rounded px-4 shadow-sm"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="submit"
              className="h-14 bg-blue-600 hover:bg-blue-700 text-white px-6 rounded shadow-sm"
              disabled={loading}>
              {loading ? "Searching..." : "Search"}
            </Button>
          </motion.div>
        </motion.form>
      </motion.div>

      {/* Search Results */}
      <motion.div
        className="max-w-6xl mx-auto px-4 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}>
        <SearchResults
          results={results}
          loading={loading}
          searchSubmitted={searchSubmitted}
          searchQuery={searchQuery}
        />
      </motion.div>

      {/* Features */}
      <section id="features">
        <div>
          <div className="relative container mx-auto px-4 py-16 max-w-7xl">
            <div className="text-center space-y-4 pb-6 mx-auto">
              <h2 className="text-sm text-primary font-mono font-medium tracking-wider uppercase">
                Features
              </h2>
              <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl text-blue-700">
                Why Our Search Stands Out
              </h3>
            </div>
            <section id="features">
              <div className="container">
                <div className="max-w-6xl mx-auto ">
                  <div className="">
                    <div className="hidden md:flex order-1 md:order-[0]  justify-start">
                      <div
                        className="grid md:grid-cols-3 gap-x-10 py-8"
                        data-orientation="vertical">
                        {features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="mt-px focus-within:relative focus-within:z-10 relative mb-8"
                            data-orientation="vertical"
                            data-state={
                              idx === activeFeatureIndex ? "open" : "closed"
                            }>
                            <div className="absolute left-0 right-0 w-full h-1 overflow-hidden rounded-full bg-gray-200 bottom-0">
                              <div
                                className={`absolute left-0 bottom-0 h-full origin-left bg-gradient-to-r from-blue-500 to-blue-600 transition-all ease-linear rounded-full ${
                                  idx === activeFeatureIndex
                                    ? "w-full"
                                    : idx < activeFeatureIndex
                                    ? "w-full"
                                    : "w-0"
                                }`}
                                style={{
                                  transitionDuration:
                                    idx === activeFeatureIndex
                                      ? "5000ms"
                                      : "300ms",
                                }}
                              />
                            </div>
                            <h3
                              className="text-blue-700"
                              data-orientation="vertical"
                              data-state={
                                idx === activeFeatureIndex ? "open" : "closed"
                              }>
                              <button
                                aria-expanded={
                                  idx === activeFeatureIndex ? "true" : "false"
                                }
                                className=""
                                data-orientation="vertical"
                                data-radix-collection-item=""
                                data-state={
                                  idx === activeFeatureIndex ? "open" : "closed"
                                }
                                type="button"
                                onClick={() => setActiveFeatureIndex(idx)}>
                                <div className="flex items-center relative flex-col">
                                  <div
                                    className={`item-box size-16 rounded-full sm:mx-6 mx-2 shrink-0 flex items-center justify-center transition-colors ${
                                      idx === activeFeatureIndex
                                        ? "bg-primary/20"
                                        : "bg-primary/10"
                                    }`}>
                                    <svg
                                      className={`lucide lucide-search h-6 w-6 transition-colors ${
                                        idx === activeFeatureIndex
                                          ? "text-primary"
                                          : "text-primary/70"
                                      }`}
                                      fill="none"
                                      height="24"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      viewBox="0 0 24 24"
                                      width="24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <circle cx="11" cy="11" r="8" />
                                      <path d="m21 21-4.35-4.35" />
                                    </svg>
                                  </div>
                                  <div
                                    className={`font-bold text-xl my-3 transition-colors ${
                                      idx === activeFeatureIndex
                                        ? "text-primary"
                                        : "text-gray-700"
                                    }`}>
                                    {feature.title}
                                  </div>
                                  <div
                                    className={`justify-center text-center mb-4 transition-colors ${
                                      idx === activeFeatureIndex
                                        ? "text-gray-900"
                                        : "text-gray-600"
                                    }`}>
                                    {feature.description}
                                  </div>
                                </div>
                              </button>
                            </h3>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="w-auto overflow-hidden relative rounded-xl">
                      <img
                        alt="feature"
                        className="aspect-auto h-full w-full object-cover relative border border-zinc-200 rounded-xl shadow-lg transition-opacity duration-500"
                        src={features[activeFeatureIndex].image}
                        style={{
                          opacity: "1",
                          transform: "none",
                        }}
                      />
                      <div
                        className="pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent] ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)] after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]"
                        style={
                          {
                            "--anchor": "90",
                            "--border-width": "1.5",
                            "--color-from": "hsl(var(--primary))",
                            "--color-to": "hsl(var(--primary)/0)",
                            "--delay": "-9s",
                            "--duration": "12",
                            "--size": "400",
                          } as React.CSSProperties
                        }
                      />
                    </div>
                    <ul
                      className="flex h-full snap-x flex-nowrap overflow-x-auto py-10 [-ms-overflow-style:none] [-webkit-mask-image:linear-gradient(90deg,transparent,black_20%,white_80%,transparent)] [mask-image:linear-gradient(90deg,transparent,black_20%,white_80%,transparent)] [scrollbar-width:none] md:hidden [&::-webkit-scrollbar]:hidden snap-mandatory"
                      style={{
                        padding: "50px calc(50%)",
                      }}>
                      {features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="card relative mr-8 grid h-full max-w-60 shrink-0 items-start justify-center py-4 last:mr-0"
                          style={{
                            scrollSnapAlign: "center",
                          }}>
                          <div className="absolute bottom-0 left-0 right-auto top-0 h-1 w-full overflow-hidden rounded-full bg-gray-200">
                            <div
                              className={`absolute left-0 top-0 h-full origin-top bg-gradient-to-r from-blue-500 to-blue-600 transition-all ease-linear rounded-full ${
                                idx === activeFeatureIndex
                                  ? "w-full"
                                  : idx < activeFeatureIndex
                                  ? "w-full"
                                  : "w-0"
                              }`}
                              style={{
                                transitionDuration:
                                  idx === activeFeatureIndex
                                    ? "5000ms"
                                    : "300ms",
                              }}
                            />
                          </div>
                          <h2
                            className={`text-xl font-bold transition-colors ${
                              idx === activeFeatureIndex
                                ? "text-primary"
                                : "text-gray-700"
                            }`}>
                            {feature.title}
                          </h2>
                          <p
                            className={`mx-0 max-w-sm text-balance text-sm transition-colors ${
                              idx === activeFeatureIndex
                                ? "text-gray-900"
                                : "text-gray-600"
                            }`}>
                            {feature.description}
                          </p>
                        </div>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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

      <Footer />
    </motion.div>
  );
}
