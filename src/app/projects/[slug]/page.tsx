import { notFound } from "next/navigation";
import { getProjectBySlugAsync, getAllProjectSlugs, serializeProjectForClient } from "@/lib/projects-repository";
import ProjectDetailPage from "./ProjectDetailClient";

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { project } = await getProjectBySlugAsync(slug);
  if (!project) return { title: "Project Not Found" };
  return { title: project.title, description: project.description };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { project, overviewHtml } = await getProjectBySlugAsync(slug);
  if (!project) notFound();

  return (
    <ProjectDetailPage
      project={serializeProjectForClient(project)}
      overviewHtml={overviewHtml}
    />
  );
}
