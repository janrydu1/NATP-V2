import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AdminLayout } from "@/components/AdminLayout";
import { AdminDataTable } from "@/components/AdminDataTable";
import { Button } from "@/components/ui/button";
import BulkTrademarkUpload from "@/components/BulkTrademarkUpload";
import { Plus, Upload } from "lucide-react";

type TableName =
  | "admin_users"
  | "applications"
  | "contacts"
  | "trademarks"
  | "articles"
  | "newsletter_subscriptions";

export default function Admin() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "trademarks";
  const showBulkUpload =
    searchParams.get("bulkUpload") === "true" && activeTab === "trademarks";

  const [trademarks, setTrademarks] = useState<any[]>([]);
  const [applications, setApplications] = useState<any[]>([]);
  const [contacts, setContacts] = useState<any[]>([]);
  const [admins, setAdmins] = useState<any[]>([]);
  const [articles, setArticles] = useState<any[]>([]);
  const [subscriptions, setSubscriptions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubscription, setSelectedSubscription] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const checkAdmin = () => {
      const adminLoggedIn = localStorage.getItem("adminLoggedIn") === "true";
      if (!adminLoggedIn) {
        navigate("/admin-login");
        return;
      }
      fetchData();
    };

    checkAdmin();
  }, [navigate]);

  useEffect(() => {
    // Listen for tab change events from AdminLayout
    const handleTabChange = (event: CustomEvent<string>) => {
      setSearchParams({ tab: event.detail });
    };

    window.addEventListener("adminTabChange", handleTabChange as EventListener);

    // Update tab when URL changes
    const tab = searchParams.get("tab");
    if (tab) {
      setSearchParams({ tab });
    }
    fetchData();

    return () => {
      window.removeEventListener(
        "adminTabChange",
        handleTabChange as EventListener
      );
    };
  }, [setSearchParams]);

  const fetchData = async () => {
    try {
      setLoading(true);

      const tables: { name: TableName; setter: (data: any[]) => void }[] = [
        { name: "trademarks", setter: setTrademarks },
        { name: "applications", setter: setApplications },
        { name: "contacts", setter: setContacts },
        { name: "admin_users", setter: setAdmins },
        { name: "articles", setter: setArticles },
        { name: "newsletter_subscriptions", setter: setSubscriptions },
      ];

      // Only fetch data for the active tab to improve performance
      const activeTable = tables.find(
        (table) =>
          table.name === activeTab ||
          (activeTab === "admins" && table.name === "admin_users")
      );

      if (activeTable) {
        const { data, error } = await supabase
          .from(activeTable.name)
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;
        activeTable.setter(data || []);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  const handleTabChange = (value: string) => {
    setSearchParams({ tab: value });
  };

  const handleCreate = () => {
    navigate(`/admin/create?type=${activeTab}`);
  };

  const handleBulkUpload = () => {
    setSearchParams({ tab: activeTab, bulkUpload: "true" });
  };

  const closeBulkUpload = () => {
    setSearchParams({ tab: activeTab });
  };

  const trademarkFields = [
    {
      name: "owner_name",
      label: "Owner Name",
      type: "text" as const,
      required: true,
    },
    { name: "mark", label: "Mark", type: "text" as const },
    {
      name: "application_number",
      label: "Application Number",
      type: "text" as const,
      required: true,
    },
    {
      name: "national_classes",
      label: "National Classes",
      type: "text" as const,
    },
    { name: "us_classes", label: "US Classes", type: "text" as const },
    { name: "description", label: "Description", type: "textarea" as const },
    {
      name: "application_date",
      label: "Application Date",
      type: "date" as const,
    },
    { name: "keywords", label: "Keywords", type: "text" as const },
    { name: "logo_url", label: "Logo URL", type: "text" as const },
  ];

  const applicationFields = [
    {
      name: "first_name",
      label: "First Name",
      type: "text" as const,
      required: true,
    },
    {
      name: "last_name",
      label: "Last Name",
      type: "text" as const,
      required: true,
    },
    { name: "email", label: "Email", type: "email" as const, required: true },
    { name: "phone", label: "Phone", type: "text" as const, required: true },
    {
      name: "company",
      label: "Company",
      type: "text" as const,
      required: true,
    },
    {
      name: "trademark",
      label: "Trademark",
      type: "text" as const,
      required: true,
    },
    {
      name: "application_date",
      label: "Application Date",
      type: "date" as const,
    },
    {
      name: "application_number",
      label: "Application Date",
      type: "text" as const,
      required: true,
    },
    { name: "role", label: "Role", type: "text" as const, required: true },
    {
      name: "message",
      label: "Message",
      type: "text" as const,
      required: true,
    },
    {
      name: "created_at",
      label: "created At",
      type: "date" as const,
      required: true,
    },
    { name: "agree", label: "Agree", type: "text" as const, required: true },
    { name: "city", label: "City", type: "text" as const, required: true },
    { name: "class", label: "Class", type: "text" as const, required: true },
    {
      name: "country",
      label: "Country",
      type: "text" as const,
      required: true,
    },
    {
      name: "us_class",
      label: "US Class",
      type: "text" as const,
      required: true,
    },
    { name: "zip", label: "Zip", type: "text" as const, required: true },
  ];

  const contactFields = [
    { name: "name", label: "Name", type: "text" as const, required: true },
    { name: "email", label: "Email", type: "email" as const, required: true },
    { name: "phone", label: "Phone", type: "text" as const },
    { name: "subject", label: "Subject", type: "text" as const },
    {
      name: "message",
      label: "Message",
      type: "textarea" as const,
      required: true,
    },
    { name: "status", label: "Status", type: "text" as const },
    { name: "created_at", label: "Date", type: "date" as const },
  ];

  const adminFields = [
    { name: "email", label: "Email", type: "email" as const, required: true },
  ];

  const subscriptionFields = [
    { name: "email", label: "Email", type: "email" as const, required: true },
    { name: "created_at", label: "Subscribed Date", type: "date" as const },
    { name: "id", label: "ID", type: "text" as const },
  ];

  const articleFields = [
    { name: "title", label: "Title", type: "text" as const, required: true },
    {
      name: "content",
      label: "Content",
      type: "textarea" as const,
      required: true,
    },
    { name: "created_at", label: "Date", type: "date" as const },
  ];

  return (
    <AdminLayout title="Admin Dashboard">
      <div className="p-10 bg-blue-50 min-h-screen">
        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          className="w-full">
          <div className="flex justify-between items-center mb-6">
            <TabsList className="bg-white border border-blue-200 p-1 shadow-sm overflow-x-auto flex-wrap rounded-lg">
              <TabsTrigger
                value="trademarks"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-xl font-medium transition-all">
                Marks
              </TabsTrigger>
              <TabsTrigger
                value="applications"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-xl font-medium transition-all">
                Requests
              </TabsTrigger>
              <TabsTrigger
                value="contacts"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-xl font-medium transition-all">
                Inbox
              </TabsTrigger>
              <TabsTrigger
                value="articles"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-xl font-medium transition-all">
                Knowledge Hub
              </TabsTrigger>
              <TabsTrigger
                value="newsletter_subscriptions"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-xl font-medium transition-all">
                Subscriptions
              </TabsTrigger>
            </TabsList>

            <div className="flex gap-2">
              {activeTab === "trademarks" && !showBulkUpload && (
                <Button
                  onClick={handleBulkUpload}
                  className="bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-medium transition-colors shadow-sm">
                  <Upload className="w-4 h-4 mr-2" />
                  Bulk Upload
                </Button>
              )}
              <Button
                onClick={handleCreate}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-sm">
                <Plus className="w-4 h-4 mr-2" />
                Create New
              </Button>
            </div>
          </div>

          {showBulkUpload ? (
            <div className="mb-4">
              <Button
                variant="outline"
                onClick={closeBulkUpload}
                className="mb-4 border-blue-200 text-blue-700 hover:bg-blue-50 rounded-lg font-medium transition-colors bg-transparent">
                &larr; Back to Trademarks
              </Button>
              <BulkTrademarkUpload />
            </div>
          ) : (
            <>
              <TabsContent value="trademarks">
                <AdminDataTable
                  tableName="trademarks"
                  title="Trademarks"
                  data={trademarks}
                  fields={trademarkFields}
                  refreshData={fetchData}
                  loading={loading}
                />
              </TabsContent>

              <TabsContent value="applications">
                <AdminDataTable
                  tableName="applications"
                  title="Applications"
                  data={applications}
                  fields={applicationFields}
                  refreshData={fetchData}
                  loading={loading}
                />
              </TabsContent>

              <TabsContent value="contacts">
                <AdminDataTable
                  tableName="contacts"
                  title="Contact Messages"
                  data={contacts}
                  fields={contactFields}
                  refreshData={fetchData}
                  loading={loading}
                />
              </TabsContent>

              <TabsContent value="articles">
                <AdminDataTable
                  tableName="articles"
                  title="Articles"
                  data={articles}
                  fields={articleFields}
                  refreshData={fetchData}
                  loading={loading}
                />
              </TabsContent>

              <TabsContent value="newsletter_subscriptions">
                <AdminDataTable
                  tableName="newsletter_subscriptions"
                  title="Newsletter Subscriptions"
                  data={subscriptions}
                  fields={subscriptionFields}
                  refreshData={fetchData}
                  loading={loading}
                />
              </TabsContent>

              <TabsContent value="admins">
                <AdminDataTable
                  tableName="admin_users"
                  title="Admin Users"
                  data={admins}
                  fields={adminFields}
                  refreshData={fetchData}
                  loading={loading}
                />
              </TabsContent>
            </>
          )}
        </Tabs>
      </div>
    </AdminLayout>
  );
}
