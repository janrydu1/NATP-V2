import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
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

    // Simple validation
    if (!email || !password) {
      toast.error("Please enter both email and password");
      setLoading(false);
      return;
    }

    try {
      // Sign in with Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) {
        if (authError.message === "Invalid login credentials") {
          toast.error("Invalid email or password");
        } else {
          toast.error(authError.message);
        }
        return;
      }

      if (!authData.user) {
        toast.error("Login failed. Please try again.");
        return;
      }

      // Check if user is an admin
      const { data: adminData, error: adminError } = await supabase
        .from('admin_users')
        .select('*')
        .eq('id', authData.user.id)
        .single();

      if (adminError || !adminData) {
        // If not an admin, sign them out
        await supabase.auth.signOut();
        toast.error("You are not authorized to access the admin area");
        return;
      }

      // Store admin info in localStorage
      localStorage.setItem("adminEmail", email);
      localStorage.setItem("adminId", adminData.id);
      localStorage.setItem("adminLoggedIn", "true");
      
      toast.success("Login successful!");
      navigate("/admin");
    } catch (error: any) {
      console.error("Login error:", error);
      toast.error(error.message || "An error occurred during login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-4">
          <Button
            variant="ghost"
            className="mb-4"
            onClick={() => navigate("/")}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          
          <Card className="w-full">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Admin Login</CardTitle>
              <p className="text-center text-sm text-muted-foreground">
                Enter your credentials to access the admin dashboard
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="•••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#005ea2] hover:bg-[#004d87]"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </Button>
                <div className="text-center space-y-2">
                  <Link 
                    to="/"
                    className="text-sm text-[#005ea2] hover:underline block"
                  >
                    Return to homepage
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