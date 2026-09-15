import { requireAdminPage } from "@/lib/admin/auth";
import { BlogEditor } from "@/components/admin/BlogEditor";

export default async function AdminNewBlogPage() {
  await requireAdminPage();
  return <BlogEditor />;
}