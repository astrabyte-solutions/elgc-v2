import { requireAdminPage } from "@/lib/admin/auth";
import { BlogEditor } from "@/components/admin/BlogEditor";

export default async function AdminEditBlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await requireAdminPage();
  const { id } = await params;
  return <BlogEditor blogId={Number(id)} />;
}
