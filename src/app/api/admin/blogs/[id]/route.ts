import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db, isDbConfigured } from "@/db";
import { blogs } from "@/db/schema";
import { requireSession } from "@/lib/admin/auth";

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    await requireSession();
    const { id } = await params;
    if (!isDbConfigured() || !db) {
      return NextResponse.json({ error: "Database not configured" }, { status: 503 });
    }
    const [item] = await db.select().from(blogs).where(eq(blogs.id, Number(id))).limit(1);
    if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json({ item });
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    await requireSession();
    const { id } = await params;
    if (!isDbConfigured() || !db) {
      return NextResponse.json({ error: "Database not configured" }, { status: 503 });
    }

    const body = await request.json();
    const now = new Date();
    const [item] = await db
      .update(blogs)
      .set({
        slug: body.slug,
        title: body.title,
        excerpt: body.excerpt ?? null,
        content: body.content ?? "",
        featuredImage: body.featuredImage ?? null,
        category: body.category ?? null,
        author: body.author ?? null,
        status: body.status ?? "draft",
        publishedAt: body.status === "published" ? body.publishedAt ?? now : null,
        metaTitle: body.metaTitle ?? null,
        metaDescription: body.metaDescription ?? null,
        updatedAt: now,
      })
      .where(eq(blogs.id, Number(id)))
      .returning();

    return NextResponse.json({ item });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    await requireSession();
    const { id } = await params;
    if (!isDbConfigured() || !db) {
      return NextResponse.json({ error: "Database not configured" }, { status: 503 });
    }
    await db.delete(blogs).where(eq(blogs.id, Number(id)));
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
