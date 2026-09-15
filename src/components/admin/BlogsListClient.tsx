"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";
import { AdminPageHeader, getAdminActionUrl } from "@/components/admin/AdminPageHeader";
import type { Blog } from "@/db/schema";

export function BlogsListClient() {
  const [items, setItems] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    void fetch("/api/admin/blogs")
      .then((r) => r.json())
      .then((data) => setItems(data.items ?? []))
      .finally(() => setLoading(false));
  }, []);

  async function handleDelete(id: number) {
    if (!confirm("Delete this blog post?")) return;
    await fetch(`/api/admin/blogs/${id}`, { method: "DELETE" });
    setItems((prev) => prev.filter((b) => b.id !== id));
  }

  return (
    <div>
      <AdminPageHeader
        eyebrow="Content"
        title="Blogs"
        subtitle="Manage blog posts and publications."
        action={{ label: "New Blog", href: getAdminActionUrl("blogs/new") }}
      />

      <div className="px-8 pb-10">
        <div className="admin-card overflow-hidden p-0">
          {loading ? (
            <p className="p-6 text-sm text-[#94a3b8]">Loading...</p>
          ) : items.length === 0 ? (
            <p className="p-6 text-sm text-[#94a3b8]">No blogs yet.</p>
          ) : (
            <table className="w-full text-left text-sm">
              <thead className="border-b border-[#e8ecf0] bg-[#fafbfc] text-xs font-bold tracking-wide text-[#94a3b8] uppercase">
                <tr>
                  <th className="px-6 py-3">Title</th>
                  <th className="px-6 py-3">Category</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Updated</th>
                  <th className="px-6 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((blog) => (
                  <tr key={blog.id} className="border-b border-[#f1f5f9] last:border-0">
                    <td className="px-6 py-4 font-medium text-[#0f2744]">{blog.title}</td>
                    <td className="px-6 py-4 text-[#64748b]">{blog.category || "—"}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                          blog.status === "published"
                            ? "bg-[#dcfce7] text-[#16a34a]"
                            : "bg-[#f1f5f9] text-[#64748b]"
                        }`}
                      >
                        {blog.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-[#64748b]">
                      {new Date(blog.updatedAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-1">
                        <Link
                          href={getAdminActionUrl(`blogs/${blog.id}`)}
                          className="rounded p-2 text-[#94a3b8] hover:bg-[#f8fafc] hover:text-[#0f2744]"
                        >
                          <Pencil className="h-4 w-4" />
                        </Link>
                        <button
                          type="button"
                          onClick={() => handleDelete(blog.id)}
                          className="rounded p-2 text-[#94a3b8] hover:bg-red-50 hover:text-red-600"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
