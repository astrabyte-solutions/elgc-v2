import { requireAdminPage } from "@/lib/admin/auth";
import { AdminSettingsClient } from "@/components/admin/AdminSettingsClient";

export default async function AdminSettingsPage() {
  await requireAdminPage();
  return <AdminSettingsClient />;
}
