import { requireAdminPage } from "@/lib/admin/auth";
import { AdminQuotesClient } from "@/components/admin/AdminQuotesClient";

export default async function AdminQuotesPage() {
  await requireAdminPage();
  return <AdminQuotesClient />;
}
