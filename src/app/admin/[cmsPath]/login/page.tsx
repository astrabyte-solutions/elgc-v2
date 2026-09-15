import { redirect } from "next/navigation";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import { getSession } from "@/lib/admin/auth";
import { getAdminUrl } from "@/lib/admin/config";

export default async function AdminLoginPage() {
  const session = await getSession();
  if (session) redirect(getAdminUrl("dashboard"));

  return <AdminLoginForm />;
}
