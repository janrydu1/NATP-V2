import type React from "react";
import { useState, useEffect, useCallback } from "react";
import { Navbar } from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown } from "lucide-react";
import type { TrademarkResult } from "@/components/TrademarkCard";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { debounce } from "lodash";
import { SearchResults } from "@/components/SearchResults";
import { Footer } from "@/components/footer";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("q") || "";
  const [inputValue, setInputValue] = useState(searchQuery);
  const [results, setResults] = useState<TrademarkResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchSubmitted, setSearchSubmitted] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

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

  const features = [
    {
      title: "Instant Trademark Lookup",
      description:
        "Search by application number or owner name and instantly see published trademarks.",
    },
    {
      title: "Updated Daily",
      description:
        "Our database is refreshed every day to provide the latest trademark information.",
    },
    {
      title: "Detailed Insights",
      description:
        "Each result links to comprehensive articles with full trademark details.",
    },
  ];

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
        className="relative bg-gradient-to-b from-blue-50 to-white py-24 px-4 text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}>
        <motion.h1
          className="text-5xl font-extrabold text-blue-700 mb-6 max-w-3xl mx-auto leading-tight"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}>
          Explore Our Trademark Database
        </motion.h1>
        <motion.p
          className="text-xl text-black mb-12 max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}>
          Instantly find trademarks and discover opportunities to protect and
          grow your brand.
        </motion.p>
        <motion.form
          onSubmit={handleSearch}
          className="flex flex-col sm:flex-row gap-4 justify-center max-w-4xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}>
          <Input
            type="text"
            placeholder="Enter application number, owner, or company name..."
            className="flex-1 h-14 text-blue-900 border-2 border-blue-200 focus:border-blue-500 rounded-xl px-4 shadow-sm"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="submit"
              className="h-14 bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-xl shadow-sm"
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
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-16">
            Why Our Search Stands Out
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md border border-blue-100 transition-all">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">
                  {feature.title}
                </h3>
                <p className="text-black text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 gap-12">
          {/* Intro */}
          <div>
            <h2 className="text-4xl font-bold text-blue-700 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-black mb-8">
              Quick answers to common questions about searching trademarks.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-blue-100 rounded-xl shadow-sm hover:shadow-md transition-all">
                <button
                  className="w-full p-6 flex justify-between items-center text-left hover:bg-blue-50 transition-colors"
                  onClick={() => toggleFAQ(idx)}>
                  <span className="text-lg font-medium text-blue-900">
                    {faq.question}
                  </span>
                  <span className="text-blue-600">
                    {openIndex === idx ? <ChevronUp /> : <ChevronDown />}
                  </span>
                </button>
                {openIndex === idx && (
                  <div className="px-6 pb-6 text-blue-700 text-base">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
