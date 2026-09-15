import { notFound } from "next/navigation";
import { SERVICES, getServiceBySlug } from "@/lib/data/services";
import { SERVICE_PAGE_MAP } from "@/components/services/pages";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then((p) => {
    const service = getServiceBySlug(p.slug);
    if (!service) return { title: "Service Not Found" };
    return { title: service.title, description: service.description };
  });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const PageComponent = SERVICE_PAGE_MAP[slug];
  if (!PageComponent) notFound();

  return <PageComponent />;
}
