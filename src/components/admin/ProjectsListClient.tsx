"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";
import { AdminPageHeader, getAdminActionUrl } from "@/components/admin/AdminPageHeader";
import type { DbProject } from "@/db/schema";

export function ProjectsListClient() {
  const [items, setItems] = useState<DbProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    void fetch("/api/admin/projects")
      .then((r) => r.json())
      .then((data) => setItems(data.items ?? []))
      .finally(() => setLoading(false));
  }, []);

  async function handleDelete(id: number) {
    if (!confirm("Delete this project?")) return;
    await fetch(`/api/admin/projects/${id}`, { method: "DELETE" });
    setItems((prev) => prev.filter((p) => p.id !== id));
  }

  return (
    <div>
      <AdminPageHeader
        eyebrow="Content"
        title="Projects"
        subtitle="Manage project portfolio entries."
        action={{ label: "New Project", href: getAdminActionUrl("projects/new") }}
      />

      <div className="px-8 pb-10">
        <div className="admin-card overflow-hidden p-0">
          {loading ? (
            <p className="p-6 text-sm text-[#94a3b8]">Loading...</p>
          ) : items.length === 0 ? (
            <p className="p-6 text-sm text-[#94a3b8]">
              No CMS projects yet. Static projects from the codebase still appear on the site.
            </p>
          ) : (
            <table className="w-full text-left text-sm">
              <thead className="border-b border-[#e8ecf0] bg-[#fafbfc] text-xs font-bold tracking-wide text-[#94a3b8] uppercase">
                <tr>
                  <th className="px-6 py-3">Title</th>
                  <th className="px-6 py-3">Category</th>
                  <th className="px-6 py-3">Location</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((project) => (
                  <tr key={project.id} className="border-b border-[#f1f5f9] last:border-0">
                    <td className="px-6 py-4 font-medium text-[#0f2744]">{project.title}</td>
                    <td className="px-6 py-4 text-[#64748b]">{project.category}</td>
                    <td className="px-6 py-4 text-[#64748b]">{project.location}</td>
                    <td className="px-6 py-4">
                      <span className="rounded-full bg-[#dcfce7] px-2.5 py-1 text-xs font-semibold text-[#16a34a]">
                        {project.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-1">
                        <Link
                          href={getAdminActionUrl(`projects/${project.id}`)}
                          className="rounded p-2 text-[#94a3b8] hover:bg-[#f8fafc] hover:text-[#0f2744]"
                        >
                          <Pencil className="h-4 w-4" />
                        </Link>
                        <button
                          type="button"
                          onClick={() => handleDelete(project.id)}
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
