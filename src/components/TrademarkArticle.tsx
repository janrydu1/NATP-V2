import { useState, useEffect } from "react";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import { format } from "date-fns";
import { Save, X, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  getAvailableKeywords,
  toggleKeyword as toggleKeywordUtil,
  updateTrademarkKeywords,
} from "@/utils/keywordUtils";

export type TrademarkDetail = {
  id: string;
  owner_name: string;
  mark?: string;
  application_number: string;
  national_classes?: string;
  us_classes?: string;
  application_date?: string;
  description?: string;
  logo_url?: string;
  read_time?: string;
  keywords?: string[];
  articleContent?: string | null;
  articleTitle?: string | null;
};

interface TrademarkArticleProps {
  trademark: TrademarkDetail;
  searchQuery?: string;
  onBack?: () => void;
}

export function TrademarkArticle({
  trademark,
  searchQuery,
  onBack,
}: TrademarkArticleProps) {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const query = searchQuery || searchParams.get("q") || "";

  // Debug
  useEffect(() => {
    console.log("Current query param:", query);
    console.log("Current location:", location);
  }, [query, location]);

  const getFirstLetter = (name: string) => {
    return name ? name.charAt(0).toUpperCase() : "A";
  };

  const availableKeywords = getAvailableKeywords();
  const [keywords, setKeywords] = useState<string[]>(trademark.keywords || []);
  const [isEditingKeywords, setIsEditingKeywords] = useState(false);

  const toggleKeyword = (keyword: string) => {
    const result = toggleKeywordUtil(keywords, keyword);
    setKeywords(result.keywords);
    if (result.message) toast.error(result.message);
  };

  const saveKeywords = async () => {
    try {
      const loadingToast = toast.loading("Saving your changes...");
      const result = await updateTrademarkKeywords(trademark.id, keywords);
      toast.dismiss(loadingToast);

      if (result.success) {
        trademark.keywords = [...keywords];
        toast.success("Tags updated successfully");
        setIsEditingKeywords(false);
      } else {
        toast.error(result.error || "Failed to update tags");
      }
    } catch (error) {
      console.error("Error updating keywords:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8">
      {/* Back Button */}
      <div className="mb-6">
        {onBack ? (
          <button
            onClick={onBack}
            className="text-blue-700 text-sm flex items-center gap-1 hover:underline">
            <ArrowLeft size={16} /> Return to Search
          </button>
        ) : (
          <Link
            to={query ? `/search?q=${encodeURIComponent(query)}` : "/search"}
            className="text-blue-700 text-sm flex items-center gap-1 hover:underline">
            <ArrowLeft size={16} /> Return to Search
          </Link>
        )}
      </div>

      {/* Title */}
      <h1 className="text-4xl font-semibold text-blue-900 mb-6">
        {trademark.mark || trademark.owner_name}
      </h1>

      {/* Logo Box */}
      <div className="w-full h-[220px] bg-blue-50 border border-blue-100 rounded-lg flex items-center justify-center mb-8 overflow-hidden">
        {trademark.logo_url ? (
          <img
            src={trademark.logo_url}
            alt={`${trademark.mark || trademark.owner_name} logo`}
            className="max-w-full max-h-full object-contain p-4"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              const parent = target.parentElement;
              if (parent) {
                const fallback = document.createElement("div");
                fallback.className = "text-[120px] text-blue-400 font-bold";
                fallback.textContent = trademark.mark
                  ? trademark.mark.charAt(0).toUpperCase()
                  : getFirstLetter(trademark.owner_name);
                parent.appendChild(fallback);
              }
            }}
          />
        ) : (
          <div className="text-[100px] text-blue-400 font-bold">
            {trademark.mark || getFirstLetter(trademark.owner_name)}
          </div>
        )}
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 text-blue-800 border-b border-blue-100 pb-6 mb-8 text-sm">
        <div>
          <span className="font-semibold text-blue-700">Owner: </span>
          {trademark.owner_name}
        </div>
        <div>
          <span className="font-semibold text-blue-700">Class(es): </span>
          {trademark.national_classes || "—"}
        </div>
        <div>
          <span className="font-semibold text-blue-700">US Class(es): </span>
          {trademark.us_classes || "—"}
        </div>
        <div>
          <span className="font-semibold text-blue-700">Application ID: </span>
          {trademark.application_number}
        </div>
        <div>
          <span className="font-semibold text-blue-700">Filed On: </span>
          {trademark.application_date
            ? format(new Date(trademark.application_date), "MMM d, yyyy")
            : "—"}
        </div>
      </div>

      {/* Article Body */}
      <div className="prose max-w-none text-blue-900">
        <h2 className="text-2xl font-semibold text-center mb-6">
          {trademark.articleTitle}
        </h2>
        {trademark.articleContent ? (
          <div dangerouslySetInnerHTML={{ __html: trademark.articleContent }} />
        ) : trademark.description ? (
          <div dangerouslySetInnerHTML={{ __html: trademark.description }} />
        ) : (
          <p className="text-blue-500 italic">
            No description or article available.
          </p>
        )}
      </div>

      {/* Keywords / Tags */}
      <div className="mt-12 pt-6 border-t border-blue-100">
        <div className="flex justify-between items-center mb-4">
          {isEditingKeywords && (
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={saveKeywords}
                className="flex items-center gap-1 text-blue-700 border-blue-300">
                <Save className="h-4 w-4" /> Save
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setKeywords(trademark.keywords || []);
                  setIsEditingKeywords(false);
                }}
                className="flex items-center gap-1 text-blue-700 border-blue-300">
                <X className="h-4 w-4" /> Cancel
              </Button>
            </div>
          )}
        </div>

        {isEditingKeywords ? (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2 mb-2">
              {availableKeywords.map((keyword) => (
                <Button
                  key={keyword}
                  type="button"
                  variant={keywords.includes(keyword) ? "default" : "outline"}
                  className={`rounded-full text-xs px-4 py-1 h-auto ${
                    keywords.includes(keyword)
                      ? "bg-blue-600 text-white"
                      : "text-blue-700 border-blue-300"
                  }`}
                  onClick={() => toggleKeyword(keyword)}>
                  {keyword}
                </Button>
              ))}
            </div>
            <p className="text-xs text-blue-500">
              Selected: {keywords.length}/5
            </p>
          </div>
        ) : (
          <div className="flex flex-wrap gap-2 mb-4">
            {keywords.length > 0 ? (
              keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="rounded-full text-xs px-4 py-1 h-auto bg-blue-600 text-white">
                  {keyword}
                </span>
              ))
            ) : (
              <p className="text-sm text-blue-500 italic">No tags chosen</p>
            )}
          </div>
        )}

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mt-16 text-center text-blue-900">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Strengthen your trademark presence.
          </h3>
          <p className="text-base mb-6">
            Let’s make your brand stand out with tailored solutions.
          </p>
          <Link
            to="/contact"
            className="bg-blue-600 hover:bg-blue-700 transition text-white py-3 px-6 rounded-xl shadow">
            Get in Touch
          </Link>
        </div>
      </div>
    </article>
  );
}
