import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Home, Calendar, User, Clock } from "lucide-react";
import { BlogDetailSidebar } from "@/components/blogs/BlogDetailSidebar";
import { getBlogBySlug, getAllBlogSlugs, getRecentBlogs } from "@/lib/blogs-repository";
import { IMAGES } from "@/lib/images";
import "@/styles/blog-detail.css";

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) return { title: "Blog Not Found" };
  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription || blog.excerpt || undefined,
    openGraph: blog.featuredImage
      ? { images: [{ url: blog.featuredImage }] }
      : undefined,
  };
}

function estimateReadTime(html: string) {
  const words = html.replace(/<[^>]*>/g, " ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) notFound();

  const recentPosts = await getRecentBlogs(slug, 4);
  const readTime = estimateReadTime(blog.content);
  const featuredImage = blog.featuredImage || IMAGES.hero.quality;

  return (
    <article className="blog-detail-page">
      {/* Top banner */}
      <section className="blog-detail-banner">
        <div className="mx-auto max-w-7xl px-3 py-8 lg:px-8 lg:py-10">
          <nav className="mb-6 flex flex-wrap items-center gap-1 text-sm text-[#5a6472]">
            <Link href="/" className="flex items-center gap-1 hover:text-[#22c55e]">
              <Home className="h-3.5 w-3.5" />
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-[#cbd5e1]" />
            <Link href="/blogs" className="hover:text-[#22c55e]">
              Blogs
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-[#cbd5e1]" />
            <span className="line-clamp-1 text-[#22c55e]">{blog.title}</span>
          </nav>

          {blog.category && (
            <span className="blog-detail-category">{blog.category}</span>
          )}

          <h1 className="blog-detail-title">{blog.title}</h1>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#64748b]">
            {blog.author && (
              <span className="inline-flex items-center gap-1.5">
                <User className="h-4 w-4 text-[#22c55e]" />
                {blog.author}
              </span>
            )}
            {blog.publishedAt && (
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-[#22c55e]" />
                {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            )}
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-[#22c55e]" />
              {readTime} min read
            </span>
          </div>
        </div>
      </section>

      {/* Main layout */}
      <div className="mx-auto max-w-7xl px-3 pb-16 pt-8 lg:px-8 lg:pb-20">
        <div className="blog-detail-grid">
          <div className="blog-detail-main">
            {/* Featured image */}
            <div className="blog-detail-featured-wrap">
              <div className="blog-detail-featured-image">
                <Image
                  src={featuredImage}
                  alt={blog.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 720px"
                />
              </div>
            </div>

            <div className="blog-detail-content">
              {blog.excerpt && (
                <p className="blog-detail-lead">{blog.excerpt}</p>
              )}
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>

            <div className="blog-detail-footer">
              <Link href="/blogs" className="blog-detail-back-link">
                <ChevronRight className="h-4 w-4 rotate-180" />
                Back to all blogs
              </Link>
            </div>
          </div>

          <BlogDetailSidebar recentPosts={recentPosts} shareTitle={blog.title} />
        </div>
      </div>
    </article>
  );
}
