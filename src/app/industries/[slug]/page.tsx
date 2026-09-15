import { notFound } from "next/navigation";
import { IndustryPageTemplate } from "@/components/industries/IndustryPageTemplate";
import { INDUSTRIES, getIndustryBySlug } from "@/lib/data/industries";

export function generateStaticParams() {
  return INDUSTRIES.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return { title: "Industry Not Found" };
  return {
    title: `${industry.title} | Industries`,
    description: industry.detail.heroDescription,
  };
}

export default async function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  return <IndustryPageTemplate slug={slug} />;
}
