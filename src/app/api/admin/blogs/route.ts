import { NextResponse } from "next/server";
import { eq, desc } from "drizzle-orm";
import { db, isDbConfigured } from "@/db";
import { blogs } from "@/db/schema";
import { requireSession } from "@/lib/admin/auth";

export async function GET() {
  try {
    await requireSession();
    if (!isDbConfigured() || !db) {
      return NextResponse.json({ items: [] });
    }
    const items = await db.select().from(blogs).orderBy(desc(blogs.updatedAt));
    return NextResponse.json({ items });
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}

export async function POST(request: Request) {
  try {
    await requireSession();
    if (!isDbConfigured() || !db) {
      return NextResponse.json({ error: "Database not configured" }, { status: 503 });
    }

    const body = await request.json();
    const now = new Date();
    const [item] = await db
      .insert(blogs)
      .values({
        slug: body.slug,
        title: body.title,
        excerpt: body.excerpt ?? null,
        content: body.content ?? "",
        featuredImage: body.featuredImage ?? null,
        category: body.category ?? null,
        author: body.author ?? null,
        status: body.status ?? "draft",
        publishedAt: body.status === "published" ? now : null,
        metaTitle: body.metaTitle ?? null,
        metaDescription: body.metaDescription ?? null,
        updatedAt: now,
      })
      .returning();

    return NextResponse.json({ item });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to create blog" }, { status: 500 });
  }
}
