import type { Metadata } from "next";
import { BlogsHero } from "@/components/blogs/BlogsHero";
import { BlogsGridSection } from "@/components/blogs/BlogsGridSection";
import { getPublishedBlogs } from "@/lib/blogs-repository";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Insights, project stories, and updates from ELGC.",
};

export default async function BlogsPage() {
  const blogs = await getPublishedBlogs();

  return (
    <div className="overflow-x-hidden">
      <BlogsHero />
      <BlogsGridSection blogs={blogs} />
    </div>
  );
}
