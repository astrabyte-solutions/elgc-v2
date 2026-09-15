import Link from "next/link";
import { desc, eq, sql } from "drizzle-orm";
import { db, isDbConfigured } from "@/db";
import { blogs, projects, supplierRegistrations, quoteRequests } from "@/db/schema";
import { requireAdminPage } from "@/lib/admin/auth";
import { AdminPageHeader, AdminStatCard, getAdminActionUrl } from "@/components/admin/AdminPageHeader";
import { Pencil, ArrowRight } from "lucide-react";

export default async function AdminDashboardPage() {
  const session = await requireAdminPage();

  let stats = {
    blogs: 0,
    publishedBlogs: 0,
    projects: 0,
    suppliers: 0,
    quotes: 0,
  };
  let recentBlogs: { id: number; title: string; category: string | null; author: string | null; publishedAt: Date | null }[] = [];

  if (isDbConfigured() && db) {
    const [blogCount] = await db.select({ count: sql<number>`count(*)` }).from(blogs);
    const [publishedCount] = await db
      .select({ count: sql<number>`count(*)` })
      .from(blogs)
      .where(eq(blogs.status, "published"));
    const [projectCount] = await db.select({ count: sql<number>`count(*)` }).from(projects);
    const [supplierCount] = await db.select({ count: sql<number>`count(*)` }).from(supplierRegistrations);
    const [quoteCount] = await db.select({ count: sql<number>`count(*)` }).from(quoteRequests);

    stats = {
      blogs: Number(blogCount.count),
      publishedBlogs: Number(publishedCount.count),
      projects: Number(projectCount.count),
      suppliers: Number(supplierCount.count),
      quotes: Number(quoteCount.count),
    };

    recentBlogs = await db
      .select({
        id: blogs.id,
        title: blogs.title,
        category: blogs.category,
        author: blogs.author,
        publishedAt: blogs.publishedAt,
      })
      .from(blogs)
      .orderBy(desc(blogs.updatedAt))
      .limit(5);
  }

  const quickActions = [
    { label: "Write a blog", href: getAdminActionUrl("blogs/new") },
    { label: "Manage blogs", href: getAdminActionUrl("blogs") },
    { label: "Manage projects", href: getAdminActionUrl("projects") },
    { label: "Supplier registrations", href: getAdminActionUrl("submissions/suppliers") },
    { label: "Quote requests", href: getAdminActionUrl("submissions/quotes") },
    { label: "Email settings", href: getAdminActionUrl("settings") },
  ];

  return (
    <div>
      <AdminPageHeader
        eyebrow="Dashboard"
        title={`Welcome back, ${session.name.split(" ")[0]}`}
        subtitle="An overview of your content at a glance."
        action={{ label: "New Blog", href: getAdminActionUrl("blogs/new") }}
      />

      <div className="px-8 pb-10">
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <AdminStatCard label="Total Blogs" value={stats.blogs} color="text-[#22c55e]" />
          <AdminStatCard label="Published" value={stats.publishedBlogs} color="text-[#2563eb]" />
          <AdminStatCard label="Projects" value={stats.projects} color="text-[#8b5cf6]" />
          <AdminStatCard label="Suppliers" value={stats.suppliers} color="text-[#f97316]" />
          <AdminStatCard label="Quotes" value={stats.quotes} color="text-[#ec4899]" />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="admin-card lg:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-bold tracking-[0.12em] text-[#0f2744] uppercase">Recent Posts</p>
              <Link href={getAdminActionUrl("blogs")} className="text-sm font-semibold text-[#22c55e]">
                View all
              </Link>
            </div>
            {recentBlogs.length === 0 ? (
              <p className="text-sm text-[#94a3b8]">No blogs yet. Create your first post.</p>
            ) : (
              <div className="space-y-4">
                {recentBlogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="flex items-start justify-between gap-4 border-b border-[#f1f5f9] pb-4 last:border-0 last:pb-0"
                  >
                    <div>
                      <p className="font-medium text-[#0f2744]">{blog.title}</p>
                      <p className="mt-1 text-xs text-[#94a3b8]">
                        {blog.category || "Uncategorized"} · {blog.author || "ELGC"} ·{" "}
                        {blog.publishedAt
                          ? new Date(blog.publishedAt).toLocaleDateString()
                          : "Draft"}
                      </p>
                    </div>
                    <div className="flex shrink-0 gap-1">
                      <Link
                        href={getAdminActionUrl(`blogs/${blog.id}`)}
                        className="rounded p-2 text-[#94a3b8] hover:bg-[#f8fafc] hover:text-[#0f2744]"
                        title="Edit"
                      >
                        <Pencil className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="admin-card">
            <p className="mb-4 text-sm font-bold tracking-[0.12em] text-[#0f2744] uppercase">Quick Actions</p>
            <div className="space-y-2">
              {quickActions.map((action) => (
                <Link
                  key={action.href}
                  href={action.href}
                  className="flex items-center justify-between rounded-lg border border-[#e8ecf0] px-4 py-3 text-sm font-medium text-[#374151] transition-colors hover:border-[#22c55e] hover:text-[#16a34a]"
                >
                  {action.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
