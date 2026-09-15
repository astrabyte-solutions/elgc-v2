import { requireAdminPage } from "@/lib/admin/auth";
import { ProjectEditor } from "@/components/admin/ProjectEditor";

export default async function AdminNewProjectPage() {
  await requireAdminPage();
  return <ProjectEditor />;
}
