import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export type SearchResult = {
  id: string;
  mark?: string;
  owner_name: string;
  application_number: string;
  national_classes?: string;
  application_date?: string;
  description?: string;
  logo_url?: string;
};

interface SearchResultsProps {
  results: SearchResult[];
  loading: boolean;
  searchSubmitted: boolean;
  searchQuery: string;
}

export function SearchResults({
  results,
  loading,
  searchSubmitted,
  searchQuery,
}: SearchResultsProps) {
  if (!searchSubmitted) {
    return null;
  }

  if (loading) {
    return (
      <motion.div
        className="text-center py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}>
        <div className="animate-pulse grid gap-6">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}>
              <Card className="bg-blue-50 border border-blue-100">
                <CardContent className="flex flex-row p-6 gap-6">
                  <div className="flex-1 space-y-3">
                    <div className="h-7 bg-blue-100 rounded w-2/3" />
                    <div className="h-5 bg-blue-100 rounded w-1/2" />
                    <div className="h-5 bg-blue-100 rounded w-1/3" />
                  </div>
                  <div className="w-[200px] h-[150px] bg-blue-100 rounded" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  }

  if (results.length === 0) {
    return (
      <motion.div
        className="text-center py-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>
        <motion.p
          className="text-blue-800 text-xl font-semibold"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}>
          No matches available
        </motion.p>
        <motion.p
          className="text-blue-600 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}>
          Please refine or adjust your search terms.
        </motion.p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="grid gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}>
      {results.map((result, index) => (
        <motion.div
          key={result.id}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ y: -2, scale: 1.01 }}>
          <Card className="bg-white border border-blue-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Left Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-blue-900 mb-3">
                    {result.mark
                      ? result.mark.length > 30
                        ? `${result.mark.substring(0, 30)}...`
                        : result.mark
                      : "Unnamed Mark"}
                  </h3>

                  <div className="space-y-2 text-blue-800 text-sm">
                    <div className="flex">
                      <span className="w-44 font-medium text-blue-700">
                        Class
                      </span>
                      <span>{result.national_classes || "—"}</span>
                    </div>
                    <div className="flex">
                      <span className="w-44 font-medium text-blue-700">
                        Application #
                      </span>
                      <span>{result.application_number}</span>
                    </div>
                    <div className="flex">
                      <span className="w-44 font-medium text-blue-700">
                        Owners
                      </span>
                      <span>{result.owner_name}</span>
                    </div>
                  </div>

                  <Button
                    asChild
                    className="bg-blue-600 text-white hover:bg-blue-700 rounded-xl px-6 py-2 mt-4">
                    <Link
                      to={`/trademark/${result.id}?q=${encodeURIComponent(
                        searchQuery
                      )}`}>
                      Explore More
                    </Link>
                  </Button>
                </div>

                {/* Logo/Image */}
                <div className="md:w-[240px] h-[180px] bg-blue-50 border border-blue-100 rounded-lg flex items-center justify-center">
                  {result.logo_url ? (
                    <img
                      src={result.logo_url}
                      alt={`${result.mark || result.owner_name} logo`}
                      className="max-w-full max-h-full object-contain p-2"
                    />
                  ) : (
                    <div className="text-5xl text-blue-300 font-bold">Ⓣ</div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
