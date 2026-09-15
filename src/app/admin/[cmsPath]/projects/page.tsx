import { requireAdminPage } from "@/lib/admin/auth";
import { ProjectsListClient } from "@/components/admin/ProjectsListClient";

export default async function AdminProjectsPage() {
  await requireAdminPage();
  return <ProjectsListClient />;
}
