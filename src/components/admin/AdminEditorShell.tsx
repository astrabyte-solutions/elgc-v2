"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  generateMetaTitle,
  generateMetaDescription,
  generateExcerpt,
} from "@/lib/admin/seo";

export function AdminEditorShell({
  backHref,
  backLabel,
  title,
  subtitle,
  actions,
  children,
}: {
  backHref: string;
  backLabel: string;
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="admin-editor-page">
      <div className="admin-editor-topbar">
        <Link href={backHref} className="admin-editor-back">
          <ArrowLeft className="h-4 w-4" />
          {backLabel}
        </Link>
        {actions && <div className="admin-editor-actions">{actions}</div>}
      </div>

      <div className="admin-editor-header">
        <p className="admin-editor-eyebrow">Content</p>
        <h1 className="admin-editor-title">{title}</h1>
        {subtitle && <p className="admin-editor-subtitle">{subtitle}</p>}
      </div>

      <div className="admin-editor-body">{children}</div>
    </div>
  );
}

export function AdminPanel({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`admin-panel ${className}`}>
      <h2 className="admin-panel-title">{title}</h2>
      <div className="admin-panel-body">{children}</div>
    </section>
  );
}

export function SeoPreview({
  title,
  excerpt,
  content,
  slug,
}: {
  title: string;
  excerpt: string;
  content: string;
  slug: string;
}) {
  const metaTitle = generateMetaTitle(title);
  const metaDescription = generateMetaDescription(
    excerpt || generateExcerpt(content),
    content,
  );
  const urlSlug = slug || "your-post-slug";

  return (
    <div className="admin-seo-preview">
      <p className="admin-seo-label">Search preview (auto-generated)</p>
      <p className="admin-seo-url">test-elgc-v2.astrabytesolutions.com/blogs/{urlSlug}</p>
      <p className="admin-seo-title">{metaTitle || "Post title"}</p>
      <p className="admin-seo-desc">
        {metaDescription || "Description will be generated from your content when you save."}
      </p>
    </div>
  );
}
