import { requireAdminPage } from "@/lib/admin/auth";
import { ProjectEditor } from "@/components/admin/ProjectEditor";

export default async function AdminEditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await requireAdminPage();
  const { id } = await params;
  return <ProjectEditor projectId={Number(id)} />;
}
