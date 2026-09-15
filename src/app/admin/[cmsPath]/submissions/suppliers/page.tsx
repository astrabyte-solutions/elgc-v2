import { requireAdminPage } from "@/lib/admin/auth";
import { AdminSuppliersClient } from "@/components/admin/AdminSuppliersClient";

export default async function AdminSuppliersPage() {
  await requireAdminPage();
  return <AdminSuppliersClient />;
}
