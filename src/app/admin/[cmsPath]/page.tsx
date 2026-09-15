import { redirect } from "next/navigation";
import { getSession } from "@/lib/admin/auth";
import { getAdminUrl } from "@/lib/admin/config";

export default async function AdminRootPage() {
  const session = await getSession();
  redirect(session ? getAdminUrl("dashboard") : getAdminUrl("login"));
}
