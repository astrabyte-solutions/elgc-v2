import { eq, desc, and } from "drizzle-orm";
import { db, isDbConfigured } from "@/db";
import { blogs } from "@/db/schema";
import type { Blog } from "@/db/schema";

export async function getPublishedBlogs(): Promise<Blog[]> {
  if (!isDbConfigured() || !db) return [];
  return db
    .select()
    .from(blogs)
    .where(eq(blogs.status, "published"))
    .orderBy(desc(blogs.publishedAt));
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  if (!isDbConfigured() || !db) return null;
  const [item] = await db
    .select()
    .from(blogs)
    .where(and(eq(blogs.slug, slug), eq(blogs.status, "published")))
    .limit(1);
  return item ?? null;
}

export async function getRecentBlogs(excludeSlug?: string, limit = 4): Promise<Blog[]> {
  if (!isDbConfigured() || !db) return [];
  const items = await db
    .select()
    .from(blogs)
    .where(eq(blogs.status, "published"))
    .orderBy(desc(blogs.publishedAt))
    .limit(limit + (excludeSlug ? 1 : 0));

  return items.filter((b) => b.slug !== excludeSlug).slice(0, limit);
}

export async function getAllBlogSlugs(): Promise<string[]> {
  if (!isDbConfigured() || !db) return [];
  try {
    const items = await db
      .select({ slug: blogs.slug })
      .from(blogs)
      .where(eq(blogs.status, "published"));
    return items.map((i) => i.slug);
  } catch {
    return [];
  }
}
