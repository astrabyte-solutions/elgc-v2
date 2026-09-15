import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { BlogShareButtons } from "@/components/blogs/BlogShareButtons";
import type { Blog } from "@/db/schema";

const servicesLink = NAV_LINKS.find((l) => l.label === "Services");

export function BlogDetailSidebar({
  recentPosts,
  shareTitle,
}: {
  recentPosts: Blog[];
  shareTitle: string;
}) {
  return (
    <aside className="blog-detail-sidebar">
      <div className="blog-detail-sidebar-inner space-y-5">
        <BlogShareButtons title={shareTitle} />

        {recentPosts.length > 0 && (
          <div className="blog-sidebar-card">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="blog-sidebar-title">Recent Posts</h3>
              <Link href="/blogs" className="text-xs font-semibold text-[#22c55e] hover:underline">
                View all
              </Link>
            </div>
            <ul className="space-y-4">
              {recentPosts.map((post) => (
                <li key={post.id}>
                  <Link href={`/blogs/${post.slug}`} className="group flex gap-3">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-[#0f2744]">
                      {post.featuredImage ? (
                        <Image
                          src={post.featuredImage}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="64px"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-[10px] font-bold text-white/40">
                          ELGC
                        </div>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="line-clamp-2 text-sm font-semibold leading-snug text-[#0f2744] transition-colors group-hover:text-[#16a34a]">
                        {post.title}
                      </p>
                      {post.publishedAt && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-[#94a3b8]">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {servicesLink?.children && (
          <div className="blog-sidebar-card">
            <h3 className="blog-sidebar-title">Our Services</h3>
            <ul className="space-y-1">
              {servicesLink.children.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="group flex items-center justify-between rounded-lg px-2 py-2.5 text-sm text-[#5a6472] transition-colors hover:bg-[#f0fdf4] hover:text-[#16a34a]"
                  >
                    <span className="pr-2 leading-snug">{service.label}</span>
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#22c55e] hover:gap-2"
            >
              All services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}

        <div className="blog-sidebar-cta">
          <p className="text-sm font-bold text-white">Need engineering support?</p>
          <p className="mt-1 text-xs leading-relaxed text-white/75">
            Talk to our team about your next industrial or construction project.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-1 rounded-lg bg-[#22c55e] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#16a34a]"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
