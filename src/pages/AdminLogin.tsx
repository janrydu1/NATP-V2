import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/footer";
import { ChevronLeft } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!email || !password) {
      toast.error("Please provide both email and password");
      setLoading(false);
      return;
    }

    try {
      const { data: authData, error: authError } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      if (authError) {
        toast.error(
          authError.message === "Invalid login credentials"
            ? "Email or password is incorrect"
            : authError.message
        );
        return;
      }

      if (!authData.user) {
        toast.error("Login failed. Try again.");
        return;
      }

      const { data: adminData, error: adminError } = await supabase
        .from("admin_users")
        .select("*")
        .eq("id", authData.user.id)
        .single();

      if (adminError || !adminData) {
        await supabase.auth.signOut();
        toast.error("Access denied: Admins only");
        return;
      }

      localStorage.setItem("adminEmail", email);
      localStorage.setItem("adminId", adminData.id);
      localStorage.setItem("adminLoggedIn", "true");

      toast.success("Welcome back, Admin!");
      navigate("/admin");
    } catch (error: any) {
      console.error("Login error:", error);
      toast.error(error.message || "Unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-blue-50">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          {/* Back button */}
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-6 flex items-center gap-2 text-blue-700 hover:text-blue-800">
            <ChevronLeft size={16} />
            Back to Home
          </Button>

          {/* Login Card */}
          <Card className="w-full rounded-2xl shadow-lg border border-blue-100 bg-white">
            <CardHeader className="space-y-2 text-center">
              <CardTitle className="text-3xl font-bold text-blue-900">
                Admin Portal
              </CardTitle>
              <p className="text-sm text-blue-700">
                Sign in to manage the dashboard and content
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="flex flex-col space-y-1">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-blue-800">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-blue-200 focus:border-blue-400 focus:ring-blue-200"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-blue-800">
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border-blue-200 focus:border-blue-400 focus:ring-blue-200"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 rounded-lg"
                  disabled={loading}>
                  {loading ? "Signing in..." : "Sign In"}
                </Button>

                <div className="text-center mt-2">
                  <Link
                    to="/"
                    className="text-sm text-blue-600 hover:text-blue-700 hover:underline">
                    Go back to homepage
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
