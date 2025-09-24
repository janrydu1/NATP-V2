import type React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "./ui/textarea";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export const ArticleForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [trademarks, setTrademarks] = useState<
    { id: string; owner_name: string }[]
  >([]);
  const [filteredTrademarks, setFilteredTrademarks] = useState<
    { id: string; owner_name: string }[]
  >([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    read_time: "",
    trademark_id: "",
  });

  useEffect(() => {
    const fetchTrademarks = async () => {
      const { data, error } = await supabase
        .from("trademarks")
        .select("id, owner_name")
        .order("owner_name");

      if (error) {
        console.error("Error fetching trademarks:", error);
        toast.error("Failed to load trademarks");
        return;
      }

      setTrademarks(data || []);
      setFilteredTrademarks(data || []);
    };

    fetchTrademarks();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredTrademarks(trademarks);
    } else {
      const filtered = trademarks.filter((trademark) =>
        trademark.owner_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredTrademarks(filtered);
    }
  }, [searchQuery, trademarks]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTrademarkChange = (value: string) => {
    setFormData((prev) => ({ ...prev, trademark_id: value }));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from("articles").insert([formData]);

      if (error) throw error;

      toast.success("Article created successfully!");
      navigate("/admin?tab=articles");
    } catch (error) {
      console.error("Error creating article:", error);
      toast.error("Failed to create article");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto shadow-lg">
      <CardHeader className="bg-blue-50">
        <CardTitle className="text-blue-700 font-medium">
          Create New Article
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6 bg-white">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="trademark_id" className="text-blue-900 font-medium">
              Related Trademark
            </Label>
            <Select
              value={formData.trademark_id}
              onValueChange={handleTrademarkChange}>
              <SelectTrigger className="bg-white border border-blue-200 focus:border-blue-500 focus:ring-blue-500/20">
                <SelectValue placeholder="Select a trademark owner" />
              </SelectTrigger>
              <SelectContent className="bg-white max-h-[300px] border-blue-200">
                <div className="sticky top-0 p-2 bg-white z-10 border-b border-blue-100">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-blue-500" />
                    <Input
                      placeholder="Search trademarks..."
                      value={searchQuery}
                      onChange={handleSearchChange}
                      className="pl-8 bg-white border border-blue-200 focus:border-blue-500 focus:ring-blue-500/20"
                    />
                  </div>
                </div>
                {filteredTrademarks.length === 0 ? (
                  <div className="p-2 text-center text-blue-600">
                    No results found
                  </div>
                ) : (
                  filteredTrademarks.map((trademark) => (
                    <SelectItem
                      key={trademark.id}
                      value={trademark.id}
                      className="hover:bg-blue-50">
                      {trademark.owner_name}
                    </SelectItem>
                  ))
                )}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="title" className="text-blue-900 font-medium">
              Title
            </Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="bg-white border border-blue-200 focus:border-blue-500 focus:ring-blue-500/20"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content" className="text-blue-900 font-medium">
              Content
            </Label>
            <Textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows={8}
              required
              className="bg-white border border-blue-200 focus:border-blue-500 focus:ring-blue-500/20 resize-none"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 shadow-sm hover:shadow-md"
            disabled={loading}>
            {loading ? "Creating..." : "Create Article"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
