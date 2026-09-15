import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import type { Blog } from "@/db/schema";

export function BlogsGridSection({ blogs }: { blogs: Blog[] }) {
  return (
    <AnimatedSection className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-3 lg:px-8">
        {blogs.length === 0 ? (
          <div className="rounded-xl border border-[#e8ecf0] bg-[#fafbfc] px-6 py-16 text-center">
            <p className="text-lg font-semibold text-[#0f2744]">No blog posts yet</p>
            <p className="mt-2 text-sm text-[#64748b]">Check back soon for updates from ELGC.</p>
          </div>
        ) : (
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {blogs.map((blog) => (
              <StaggerItem key={blog.id} interactive>
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="group premium-card flex h-full flex-col overflow-hidden rounded-xl border border-[#e8ecf0] bg-white shadow-sm"
                >
                  <div className="relative h-48 overflow-hidden bg-[#0f2744]">
                    {blog.featuredImage ? (
                      <Image
                        src={blog.featuredImage}
                        alt={blog.title}
                        fill
                        className="premium-image-zoom object-cover"
                        sizes="400px"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-sm text-white/50">
                        ELGC Blog
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    {blog.category && (
                      <p className="mb-2 text-xs font-bold tracking-wide text-[#22c55e] uppercase">
                        {blog.category}
                      </p>
                    )}
                    <h2 className="text-lg font-bold text-[#0f2744] transition-colors group-hover:text-[#16a34a]">
                      {blog.title}
                    </h2>
                    {blog.excerpt && (
                      <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-[#64748b]">
                        {blog.excerpt}
                      </p>
                    )}
                    <div className="mt-4 flex items-center justify-between text-xs text-[#94a3b8]">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {blog.publishedAt
                          ? new Date(blog.publishedAt).toLocaleDateString()
                          : "—"}
                      </span>
                      <span className="flex items-center gap-1 font-semibold text-[#22c55e]">
                        Read more
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}
      </div>
    </AnimatedSection>
  );
}
