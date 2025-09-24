import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Users,
  FileText,
  MessageSquare,
  LogOut,
  Bookmark,
  Settings,
  PlusCircle,
} from "lucide-react";
import { toast } from "sonner";

type AdminLayoutProps = {
  children: ReactNode;
  title: string;
};

export const AdminLayout = ({ children, title }: AdminLayoutProps) => {
  const navigate = useNavigate();
  const [isAdmin] = useState(localStorage.getItem("adminLoggedIn") === "true");

  if (!isAdmin) {
    navigate("/admin-login");
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    navigate("/admin-login");
    toast.info("You have been signed out");
  };

  const menuItems = [
    { title: "Overview", icon: LayoutDashboard, path: "/admin" },
    { title: "Marks", icon: Bookmark, path: "/admin?tab=trademarks" },
    { title: "Requests", icon: FileText, path: "/admin?tab=applications" },
    { title: "Inbox", icon: MessageSquare, path: "/admin?tab=contacts" },
    { title: "Knowledge Hub", icon: FileText, path: "/admin?tab=articles" },
    {
      title: "Subscribers",
      icon: Users,
      path: "/admin?tab=newsletter_subscriptions",
    },
  ];

  return (
    <SidebarProvider>
      <div className="h-screen w-full flex bg-gradient-to-r from-blue-50 to-blue-100">
        {/* Sidebar */}
        <Sidebar className="border-r border-blue-200 bg-gradient-to-b from-blue-800 to-blue-600 text-white shadow-lg">
          <SidebarHeader className="p-6 border-b border-blue-500/30">
            <div className="flex items-center justify-center">
              <img
                src=""
                alt="Logo"
                className="h-12 object-contain drop-shadow-md"
              />
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel className="text-blue-100 font-semibold px-4 mt-6 mb-3 uppercase text-xs tracking-wider">
                Navigation
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <button
                          onClick={() => {
                            const tabParam = new URLSearchParams(
                              item.path.split("?")[1]
                            );
                            const tab = tabParam.get("tab") || "trademarks";
                            navigate(item.path);
                            window.dispatchEvent(
                              new CustomEvent("adminTabChange", {
                                detail: tab,
                              })
                            );
                          }}
                          className="flex items-center gap-3 text-blue-50 hover:bg-blue-500/30 px-4 py-3 w-full rounded-lg transition-colors">
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium">{item.title}</span>
                        </button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel className="text-blue-100 font-semibold px-4 mt-8 mb-3 uppercase text-xs tracking-wider">
                Quick Actions
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <button
                        onClick={() => navigate("/admin/create")}
                        className="flex items-center gap-3 text-blue-50 hover:bg-blue-500/30 px-4 py-3 w-full rounded-lg transition-colors">
                        <PlusCircle className="w-5 h-5" />
                        <span className="font-medium">Add Record</span>
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <button
                        onClick={() => navigate("/admin/settings")}
                        className="flex items-center gap-3 text-blue-50 hover:bg-blue-500/30 px-4 py-3 w-full rounded-lg transition-colors">
                        <Settings className="w-5 h-5" />
                        <span className="font-medium">Preferences</span>
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="border-t border-blue-500/30 p-6 mt-auto">
            <Button
              variant="ghost"
              className="w-full justify-start text-blue-100 hover:bg-blue-500/30 transition-colors"
              onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </SidebarFooter>
        </Sidebar>

        {/* Main area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="bg-white/90 backdrop-blur border-b border-blue-200 px-6 py-4 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="text-blue-700" />
              <h1 className="text-2xl font-bold text-blue-700">{title}</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                className="border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white transition-colors"
                onClick={() => navigate("/")}>
                Go to Site
              </Button>
            </div>
          </header>

          <main className="flex-1 overflow-auto p-8 bg-gradient-to-b from-blue-50 to-white">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};
