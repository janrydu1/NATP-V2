import type React from "react";
import { useState, useEffect } from "react";
import { AdminLayout } from "@/components/AdminLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Edit, Key } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function AdminSettings() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [adminUsers, setAdminUsers] = useState<any[]>([]);
  const [currentAdminEmail, setCurrentAdminEmail] = useState("");

  // Dialog states
  const [isResetOpen, setIsResetOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState<any>(null);
  const [newEmail, setNewEmail] = useState("");
  const [newAdminPassword, setNewAdminPassword] = useState("");
  const [confirmAdminPassword, setConfirmAdminPassword] = useState("");
  const [createAdminData, setCreateAdminData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const email = localStorage.getItem("adminEmail");
    if (email) setCurrentAdminEmail(email);

    fetchAdminUsers();
  }, []);

  const fetchAdminUsers = async () => {
    try {
      const { data, error } = await supabase
        .from("admin_users")
        .select("*")
        .order("email");

      if (error) throw error;
      setAdminUsers(data || []);
    } catch (error) {
      console.error("Error fetching admin users:", error);
      toast.error("Failed to load admin users");
    }
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error("New passwords don't match");
      return;
    }

    setLoading(true);
    try {
      // Update password in Supabase Auth
      const { error: authError } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (authError) throw authError;

      toast.success("Password updated successfully");
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error("Error updating password:", error);
      toast.error("Failed to update password");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (newAdminPassword !== confirmAdminPassword) {
      toast.error("Passwords don't match");
      return;
    }

    try {
      // Update password in Supabase Auth
      const { error: authError } = await supabase.auth.admin.updateUserById(
        selectedAdmin.id,
        {
          password: newAdminPassword,
        }
      );

      if (authError) throw authError;

      toast.success(`Password reset for ${selectedAdmin.email}`);
      setIsResetOpen(false);
      setNewAdminPassword("");
      setConfirmAdminPassword("");
    } catch (error) {
      console.error("Error resetting password:", error);
      toast.error("Failed to reset password");
    }
  };

  const handleEditAdmin = async () => {
    try {
      // Update email in Supabase Auth
      const { error: authError } = await supabase.auth.admin.updateUserById(
        selectedAdmin.id,
        { email: newEmail }
      );

      if (authError) throw authError;

      // Update email in admin_users table
      const { error: dbError } = await supabase
        .from("admin_users")
        .update({ email: newEmail })
        .eq("id", selectedAdmin.id);

      if (dbError) throw dbError;

      toast.success("Admin user updated");
      setIsEditOpen(false);
      fetchAdminUsers();
    } catch (error) {
      console.error("Error updating admin:", error);
      toast.error("Failed to update admin user");
    }
  };

  const handleDeleteAdmin = async () => {
    try {
      // Delete user from Supabase Auth
      const { error: authError } = await supabase.auth.admin.deleteUser(
        selectedAdmin.id
      );

      if (authError) throw authError;

      // Delete from admin_users table
      const { error: dbError } = await supabase
        .from("admin_users")
        .delete()
        .eq("id", selectedAdmin.id);

      if (dbError) throw dbError;

      toast.success("Admin user deleted");
      setIsDeleteOpen(false);
      fetchAdminUsers();
    } catch (error) {
      console.error("Error deleting admin:", error);
      toast.error("Failed to delete admin user");
    }
  };

  const handleCreateAdmin = async () => {
    if (createAdminData.password !== createAdminData.confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }

    if (createAdminData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    try {
      // Create user in Supabase Auth
      const { data: authData, error: authError } =
        await supabase.auth.admin.createUser({
          email: createAdminData.email,
          password: createAdminData.password,
          email_confirm: true,
        });

      if (authError) throw authError;

      // Add user to admin_users table
      const { error: dbError } = await supabase.from("admin_users").insert([
        {
          id: authData.user.id,
          email: createAdminData.email,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ]);

      if (dbError) throw dbError;

      toast.success("Admin user created successfully!");
      setIsCreateOpen(false);
      setCreateAdminData({
        email: "",
        password: "",
        confirmPassword: "",
      });
      fetchAdminUsers();
    } catch (error: any) {
      console.error("Error creating admin:", error);
      toast.error(error.message || "Failed to create admin user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout title="Settings">
      <div className="p-6 max-w-4xl mx-auto space-y-6">
        <Card className="shadow-lg border-blue-100">
          <CardHeader className="bg-blue-50 border-b border-blue-100">
            <CardTitle className="text-blue-900 font-medium">
              Change Your Password
            </CardTitle>
            <CardDescription className="text-blue-600">
              Update your account password
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6 bg-white">
            <form onSubmit={handlePasswordChange} className="space-y-4">
              <div className="space-y-2">
                <Label
                  htmlFor="currentPassword"
                  className="text-blue-700 font-medium">
                  Current Password
                </Label>
                <Input
                  id="currentPassword"
                  type="password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  required
                  className="bg-white border-blue-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="newPassword"
                  className="text-blue-700 font-medium">
                  New Password
                </Label>
                <Input
                  id="newPassword"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  className="bg-white border-blue-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="confirmPassword"
                  className="text-blue-700 font-medium">
                  Confirm New Password
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="bg-white border-blue-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-all duration-200">
                {loading ? "Updating..." : "Update Password"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-blue-100">
          <CardHeader className="bg-blue-50 border-b border-blue-100">
            <CardTitle className="text-blue-900 font-medium">
              Manage Admin Users
            </CardTitle>
            <CardDescription className="text-blue-600">
              Edit, reset passwords, or remove admin users
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6 bg-white">
            <div className="rounded-lg border border-blue-200 overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-blue-50 border-blue-200">
                    <TableHead className="text-blue-700 font-medium">
                      Email
                    </TableHead>
                    <TableHead className="text-right text-blue-700 font-medium">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {adminUsers.map((admin) => (
                    <TableRow
                      key={admin.id}
                      className="hover:bg-blue-50 transition-colors">
                      <TableCell className="text-blue-900">
                        {admin.email}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              setSelectedAdmin(admin);
                              setNewEmail(admin.email);
                              setIsEditOpen(true);
                            }}
                            className="border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 rounded-lg">
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              setSelectedAdmin(admin);
                              setIsResetOpen(true);
                            }}
                            className="border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 rounded-lg">
                            <Key className="h-4 w-4 mr-1" />
                            Reset Password
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <Dialog open={isResetOpen} onOpenChange={setIsResetOpen}>
          <DialogContent className="sm:max-w-[425px] rounded-lg border-blue-200">
            <DialogHeader>
              <DialogTitle className="text-blue-900 font-medium">
                Reset Password
              </DialogTitle>
              <DialogDescription className="text-blue-600">
                Set a new password for {selectedAdmin?.email}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label
                  htmlFor="newAdminPassword"
                  className="text-blue-700 font-medium">
                  New Password
                </Label>
                <Input
                  id="newAdminPassword"
                  type="password"
                  value={newAdminPassword}
                  onChange={(e) => setNewAdminPassword(e.target.value)}
                  className="bg-white border-blue-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="confirmAdminPassword"
                  className="text-blue-700 font-medium">
                  Confirm Password
                </Label>
                <Input
                  id="confirmAdminPassword"
                  type="password"
                  value={confirmAdminPassword}
                  onChange={(e) => setConfirmAdminPassword(e.target.value)}
                  className="bg-white border-blue-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setIsResetOpen(false)}
                className="border-blue-200 text-blue-600 hover:bg-blue-50 rounded-lg">
                Cancel
              </Button>
              <Button
                onClick={handleResetPassword}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                Reset Password
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
          <DialogContent className="sm:max-w-[425px] rounded-lg border-blue-200">
            <DialogHeader>
              <DialogTitle className="text-blue-900 font-medium">
                Edit Admin User
              </DialogTitle>
              <DialogDescription className="text-blue-600">
                Update details for this admin user
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label
                  htmlFor="adminEmail"
                  className="text-blue-700 font-medium">
                  Email
                </Label>
                <Input
                  id="adminEmail"
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  className="bg-white border-blue-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                />
              </div>
            </div>
            
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setIsEditOpen(false)}
                className="border-blue-200 text-blue-600 hover:bg-blue-50 rounded-lg">
                Cancel
              </Button>
              <Button
                onClick={handleEditAdmin}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                Update
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  );
}
