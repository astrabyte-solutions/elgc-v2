import { requireAdminPage } from "@/lib/admin/auth";
import { BlogsListClient } from "@/components/admin/BlogsListClient";

export default async function AdminBlogsPage() {
  await requireAdminPage();
  return <BlogsListClient />;
}
