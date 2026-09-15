"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { QuillEditor } from "@/components/admin/QuillEditor";
import { ImageUploadField } from "@/components/admin/ImageUploadField";
import { AdminEditorShell, AdminPanel } from "@/components/admin/AdminEditorShell";
import { getAdminActionUrl } from "@/components/admin/AdminPageHeader";
import { slugify } from "@/lib/admin/seo";

const SCOPE_ICONS = ["Shovel", "Columns3", "Layers", "Home", "BrickWall", "Pipette", "Wrench"];

const emptyForm = {
  title: "",
  slug: "",
  category: "CIVIL ENGINEERING",
  categoryColor: "bg-[#22c55e]",
  location: "",
  year: new Date().getFullYear(),
  industry: "",
  description: "",
  image: "",
  featured: false,
  contractType: "",
  value: "",
  duration: "",
  durationRange: "",
  client: "",
  area: "",
  structureType: "",
  overviewHtml: "",
  scopeJson: JSON.stringify([{ title: "Foundation Works", iconName: "Shovel" }], null, 2),
  highlightsJson: JSON.stringify(["Delivered within the agreed programme", "Method statements and ITPs approved before commencement"], null, 2),
  galleryJson: JSON.stringify([{ image: "/images/projects/placeholder.jpg", caption: "Site view" }], null, 2),
  documentsJson: JSON.stringify([], null, 2),
  status: "published",
};

export function ProjectEditor({ projectId }: { projectId?: number }) {
  const router = useRouter();
  const [form, setForm] = useState(emptyForm);
  const [slugTouched, setSlugTouched] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [loading, setLoading] = useState(Boolean(projectId));
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!projectId) return;
    void fetch(`/api/admin/projects/${projectId}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.item) {
          const item = data.item;
          setForm({
            title: item.title ?? "",
            slug: item.slug ?? "",
            category: item.category ?? "",
            categoryColor: item.categoryColor ?? "",
            location: item.location ?? "",
            year: item.year ?? new Date().getFullYear(),
            industry: item.industry ?? "",
            description: item.description ?? "",
            image: item.image ?? "",
            featured: Boolean(item.featured),
            contractType: item.contractType ?? "",
            value: item.value ?? "",
            duration: item.duration ?? "",
            durationRange: item.durationRange ?? "",
            client: item.client ?? "",
            area: item.area ?? "",
            structureType: item.structureType ?? "",
            overviewHtml: item.overviewHtml ?? "",
            scopeJson: item.scopeJson ?? "[]",
            highlightsJson: item.highlightsJson ?? "[]",
            galleryJson: item.galleryJson ?? "[]",
            documentsJson: item.documentsJson ?? "[]",
            status: item.status ?? "published",
          });
          setSlugTouched(true);
        }
      })
      .finally(() => setLoading(false));
  }, [projectId]);

  function updateField<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((prev) => {
      const next = { ...prev, [key]: value };
      if (key === "title" && !slugTouched) {
        next.slug = slugify(String(value));
      }
      return next;
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");

    if (!form.image) {
      setSaving(false);
      setError("Hero image is required.");
      return;
    }

    try {
      JSON.parse(form.scopeJson);
      JSON.parse(form.highlightsJson);
      JSON.parse(form.galleryJson);
      JSON.parse(form.documentsJson);
    } catch {
      setSaving(false);
      setError("Invalid JSON in advanced fields. Please check scope, highlights, gallery, or documents.");
      return;
    }

    const url = projectId ? `/api/admin/projects/${projectId}` : "/api/admin/projects";
    const method = projectId ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setSaving(false);
    if (!res.ok) {
      setError("Failed to save project.");
      return;
    }

    router.push(getAdminActionUrl("projects"));
    router.refresh();
  }

  if (loading) {
    return (
      <div className="admin-editor-page">
        <p className="px-8 py-16 text-sm text-[#94a3b8]">Loading project...</p>
      </div>
    );
  }

  return (
    <AdminEditorShell
      backHref={getAdminActionUrl("projects")}
      backLabel="All Projects"
      title={projectId ? "Edit Project" : "Add New Project"}
      subtitle="Fields match the public project detail page. Overview uses the rich text editor."
      actions={
        <button
          type="submit"
          form="project-editor-form"
          disabled={saving}
          className="admin-btn-primary"
        >
          {saving ? "Saving..." : "Save Project"}
        </button>
      }
    >
      <form id="project-editor-form" onSubmit={handleSubmit} className="admin-editor-grid">
        <div className="admin-editor-main space-y-6">
          <AdminPanel title="Project Details">
            <div className="space-y-5">
              <div>
                <label className="admin-label" htmlFor="project-title">
                  Title *
                </label>
                <input
                  id="project-title"
                  required
                  className="admin-input admin-input--title"
                  value={form.title}
                  onChange={(e) => updateField("title", e.target.value)}
                  placeholder="Project name"
                />
              </div>
              <div>
                <label className="admin-label" htmlFor="project-description">
                  Short description *
                </label>
                <textarea
                  id="project-description"
                  required
                  rows={3}
                  className="admin-input"
                  value={form.description}
                  onChange={(e) => updateField("description", e.target.value)}
                  placeholder="Used on portfolio cards and SEO"
                />
              </div>
            </div>
          </AdminPanel>

          <AdminPanel title="Project Overview">
            <p className="admin-field-hint mb-4">
              Rich text content for the overview tab on the project detail page.
            </p>
            <QuillEditor
              value={form.overviewHtml}
              onChange={(v) => updateField("overviewHtml", v)}
              placeholder="Describe the project scope, challenges, and outcomes..."
            />
          </AdminPanel>

          <AdminPanel title="Project Metadata">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="admin-label">Contract Type</label>
                <input className="admin-input" value={form.contractType} onChange={(e) => updateField("contractType", e.target.value)} placeholder="Lump Sum" />
              </div>
              <div>
                <label className="admin-label">Project Value</label>
                <input className="admin-input" value={form.value} onChange={(e) => updateField("value", e.target.value)} placeholder="AED 5.5 M" />
              </div>
              <div>
                <label className="admin-label">Duration</label>
                <input className="admin-input" value={form.duration} onChange={(e) => updateField("duration", e.target.value)} />
              </div>
              <div>
                <label className="admin-label">Duration Range</label>
                <input className="admin-input" value={form.durationRange} onChange={(e) => updateField("durationRange", e.target.value)} />
              </div>
              <div className="sm:col-span-2">
                <label className="admin-label">Client</label>
                <input className="admin-input" value={form.client} onChange={(e) => updateField("client", e.target.value)} />
              </div>
              <div>
                <label className="admin-label">Area</label>
                <input className="admin-input" value={form.area} onChange={(e) => updateField("area", e.target.value)} />
              </div>
              <div>
                <label className="admin-label">Structure Type</label>
                <input className="admin-input" value={form.structureType} onChange={(e) => updateField("structureType", e.target.value)} />
              </div>
            </div>
          </AdminPanel>

          <AdminPanel title="Advanced Data">
            <button
              type="button"
              onClick={() => setShowAdvanced((v) => !v)}
              className="admin-btn-secondary mb-4"
            >
              {showAdvanced ? "Hide" : "Show"} scope, highlights & gallery JSON
            </button>
            {showAdvanced && (
              <div className="grid gap-5 lg:grid-cols-2">
                <div>
                  <label className="admin-label">Scope of Work (JSON)</label>
                  <p className="admin-field-hint mb-2">Icons: {SCOPE_ICONS.join(", ")}</p>
                  <textarea rows={8} className="admin-input font-mono text-xs" value={form.scopeJson} onChange={(e) => updateField("scopeJson", e.target.value)} />
                </div>
                <div>
                  <label className="admin-label">Key Highlights (JSON)</label>
                  <textarea rows={8} className="admin-input font-mono text-xs" value={form.highlightsJson} onChange={(e) => updateField("highlightsJson", e.target.value)} />
                </div>
                <div>
                  <label className="admin-label">Gallery (JSON)</label>
                  <textarea rows={8} className="admin-input font-mono text-xs" value={form.galleryJson} onChange={(e) => updateField("galleryJson", e.target.value)} />
                </div>
                <div>
                  <label className="admin-label">Documents (JSON)</label>
                  <textarea rows={8} className="admin-input font-mono text-xs" value={form.documentsJson} onChange={(e) => updateField("documentsJson", e.target.value)} />
                </div>
              </div>
            )}
          </AdminPanel>
        </div>

        <aside className="admin-editor-sidebar space-y-5">
          <AdminPanel title="Publish">
            <div className="space-y-4">
              <div>
                <label className="admin-label">Status</label>
                <select className="admin-input" value={form.status} onChange={(e) => updateField("status", e.target.value)}>
                  <option value="published">Published</option>
                  <option value="draft">Draft</option>
                </select>
              </div>
              <div>
                <label className="admin-label">URL slug</label>
                <input
                  required
                  className="admin-input font-mono text-xs"
                  value={form.slug}
                  onChange={(e) => {
                    setSlugTouched(true);
                    updateField("slug", e.target.value);
                  }}
                />
              </div>
              <label className="flex items-center gap-2 text-sm text-[#374151]">
                <input type="checkbox" checked={form.featured} onChange={(e) => updateField("featured", e.target.checked)} className="accent-[#22c55e]" />
                Featured project
              </label>
            </div>
          </AdminPanel>

          <AdminPanel title="Hero Image *">
            <ImageUploadField label="" value={form.image} onChange={(v) => updateField("image", v)} />
          </AdminPanel>

          <AdminPanel title="Classification">
            <div className="space-y-4">
              <div>
                <label className="admin-label">Category *</label>
                <input required className="admin-input" value={form.category} onChange={(e) => updateField("category", e.target.value)} />
              </div>
              <div>
                <label className="admin-label">Category color class *</label>
                <input required className="admin-input" value={form.categoryColor} onChange={(e) => updateField("categoryColor", e.target.value)} placeholder="bg-[#22c55e]" />
              </div>
              <div>
                <label className="admin-label">Industry *</label>
                <input required className="admin-input" value={form.industry} onChange={(e) => updateField("industry", e.target.value)} />
              </div>
            </div>
          </AdminPanel>

          <AdminPanel title="Location & Year">
            <div className="space-y-4">
              <div>
                <label className="admin-label">Location *</label>
                <input required className="admin-input" value={form.location} onChange={(e) => updateField("location", e.target.value)} />
              </div>
              <div>
                <label className="admin-label">Year *</label>
                <input required type="number" className="admin-input" value={form.year} onChange={(e) => updateField("year", Number(e.target.value))} />
              </div>
            </div>
          </AdminPanel>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <div className="admin-editor-footer-actions">
            <button type="submit" disabled={saving} className="admin-btn-primary w-full">
              {saving ? "Saving..." : "Save Project"}
            </button>
            <button type="button" onClick={() => router.push(getAdminActionUrl("projects"))} className="admin-btn-secondary w-full">
              Cancel
            </button>
          </div>
        </aside>
      </form>
    </AdminEditorShell>
  );
}
