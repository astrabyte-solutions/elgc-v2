"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { QuillEditor } from "@/components/admin/QuillEditor";
import { ImageUploadField } from "@/components/admin/ImageUploadField";
import {
  AdminEditorShell,
  AdminPanel,
  SeoPreview,
} from "@/components/admin/AdminEditorShell";
import { getAdminActionUrl } from "@/components/admin/AdminPageHeader";
import { buildBlogSeoPayload, slugify } from "@/lib/admin/seo";

const emptyForm = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  featuredImage: "",
  category: "",
  author: "ELGC",
  status: "draft",
};

export function BlogEditor({ blogId }: { blogId?: number }) {
  const router = useRouter();
  const [form, setForm] = useState(emptyForm);
  const [slugTouched, setSlugTouched] = useState(false);
  const [loading, setLoading] = useState(Boolean(blogId));
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!blogId) return;
    void fetch(`/api/admin/blogs/${blogId}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.item) {
          const item = data.item;
          setForm({
            title: item.title ?? "",
            slug: item.slug ?? "",
            excerpt: item.excerpt ?? "",
            content: item.content ?? "",
            featuredImage: item.featuredImage ?? "",
            category: item.category ?? "",
            author: item.author ?? "ELGC",
            status: item.status ?? "draft",
          });
          setSlugTouched(true);
        }
      })
      .finally(() => setLoading(false));
  }, [blogId]);

  function updateField<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((prev) => {
      const next = { ...prev, [key]: value };
      if (key === "title" && !slugTouched) {
        next.slug = slugify(String(value));
      }
      return next;
    });
  }

  async function save(status?: string) {
    setSaving(true);
    setError("");

    const payload = {
      ...form,
      ...buildBlogSeoPayload(form),
      status: status ?? form.status,
    };

    const url = blogId ? `/api/admin/blogs/${blogId}` : "/api/admin/blogs";
    const method = blogId ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setSaving(false);
    if (!res.ok) {
      setError("Failed to save blog. Please check required fields.");
      return;
    }

    router.push(getAdminActionUrl("blogs"));
    router.refresh();
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await save();
  }

  if (loading) {
    return (
      <div className="admin-editor-page">
        <p className="px-8 py-16 text-sm text-[#94a3b8]">Loading blog...</p>
      </div>
    );
  }

  return (
    <AdminEditorShell
      backHref={getAdminActionUrl("blogs")}
      backLabel="All Blogs"
      title={blogId ? "Edit Blog Post" : "Write New Blog"}
      subtitle="Compose your article. SEO title and description are generated automatically on save."
      actions={
        <>
          <button
            type="button"
            disabled={saving}
            onClick={() => save("draft")}
            className="admin-btn-secondary"
          >
            Save Draft
          </button>
          <button
            type="button"
            disabled={saving}
            onClick={() => save("published")}
            className="admin-btn-primary"
          >
            {saving ? "Saving..." : "Publish"}
          </button>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="admin-editor-grid">
        <div className="admin-editor-main space-y-6">
          <AdminPanel title="Post Details">
            <div className="space-y-5">
              <div>
                <label className="admin-label" htmlFor="blog-title">
                  Title *
                </label>
                <input
                  id="blog-title"
                  required
                  className="admin-input admin-input--title"
                  value={form.title}
                  onChange={(e) => updateField("title", e.target.value)}
                  placeholder="Enter blog title"
                />
              </div>

              <div>
                <label className="admin-label" htmlFor="blog-excerpt">
                  Short excerpt
                  <span className="ml-1 font-normal text-[#94a3b8]">(optional — auto-generated if empty)</span>
                </label>
                <textarea
                  id="blog-excerpt"
                  rows={3}
                  className="admin-input"
                  value={form.excerpt}
                  onChange={(e) => updateField("excerpt", e.target.value)}
                  placeholder="A brief summary for listing cards"
                />
              </div>
            </div>
          </AdminPanel>

          <AdminPanel title="Content *">
            <QuillEditor
              value={form.content}
              onChange={(v) => updateField("content", v)}
              placeholder="Write your blog content..."
            />
          </AdminPanel>
        </div>

        <aside className="admin-editor-sidebar space-y-5">
          <AdminPanel title="Publish">
            <div className="space-y-4">
              <div>
                <label className="admin-label" htmlFor="blog-status">
                  Status
                </label>
                <select
                  id="blog-status"
                  className="admin-input"
                  value={form.status}
                  onChange={(e) => updateField("status", e.target.value)}
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
              <div>
                <label className="admin-label" htmlFor="blog-slug">
                  URL slug
                </label>
                <input
                  id="blog-slug"
                  required
                  className="admin-input font-mono text-xs"
                  value={form.slug}
                  onChange={(e) => {
                    setSlugTouched(true);
                    updateField("slug", e.target.value);
                  }}
                  placeholder="post-url-slug"
                />
              </div>
            </div>
          </AdminPanel>

          <AdminPanel title="Featured Image">
            <ImageUploadField
              label=""
              value={form.featuredImage}
              onChange={(v) => updateField("featuredImage", v)}
              hint="Shown on blog listing and post header"
            />
          </AdminPanel>

          <AdminPanel title="Organization">
            <div className="space-y-4">
              <div>
                <label className="admin-label" htmlFor="blog-category">
                  Category
                </label>
                <input
                  id="blog-category"
                  className="admin-input"
                  value={form.category}
                  onChange={(e) => updateField("category", e.target.value)}
                  placeholder="e.g. Project Stories"
                />
              </div>
              <div>
                <label className="admin-label" htmlFor="blog-author">
                  Author
                </label>
                <input
                  id="blog-author"
                  className="admin-input"
                  value={form.author}
                  onChange={(e) => updateField("author", e.target.value)}
                />
              </div>
            </div>
          </AdminPanel>

          <AdminPanel title="SEO">
            <SeoPreview
              title={form.title}
              excerpt={form.excerpt}
              content={form.content}
              slug={form.slug}
            />
          </AdminPanel>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <div className="admin-editor-footer-actions">
            <button type="submit" disabled={saving} className="admin-btn-primary w-full">
              {saving ? "Saving..." : "Save Blog"}
            </button>
            <button
              type="button"
              onClick={() => router.push(getAdminActionUrl("blogs"))}
              className="admin-btn-secondary w-full"
            >
              Cancel
            </button>
          </div>
        </aside>
      </form>
    </AdminEditorShell>
  );
}
