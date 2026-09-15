export function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function stripHtml(html: string) {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function truncate(text: string, max = 160) {
  if (text.length <= max) return text;
  return `${text.slice(0, max - 3).trim()}...`;
}

export function generateExcerpt(content: string, max = 200) {
  return truncate(stripHtml(content), max);
}

export function generateMetaTitle(title: string) {
  const clean = title.trim();
  if (!clean) return "ELGC";
  return clean.includes("|") ? clean : `${clean} | ELGC`;
}

export function generateMetaDescription(excerpt: string, content: string) {
  const source = excerpt.trim() || stripHtml(content);
  return truncate(source, 160);
}

export function buildBlogSeoPayload(form: {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
}) {
  const slug = form.slug.trim() || slugify(form.title);
  const excerpt = form.excerpt.trim() || generateExcerpt(form.content);
  return {
    slug,
    excerpt,
    metaTitle: generateMetaTitle(form.title),
    metaDescription: generateMetaDescription(excerpt, form.content),
  };
}
