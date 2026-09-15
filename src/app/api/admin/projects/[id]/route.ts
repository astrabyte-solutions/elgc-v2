import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db, isDbConfigured } from "@/db";
import { projects } from "@/db/schema";
import { requireSession } from "@/lib/admin/auth";

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    await requireSession();
    const { id } = await params;
    if (!isDbConfigured() || !db) {
      return NextResponse.json({ error: "Database not configured" }, { status: 503 });
    }
    const [item] = await db.select().from(projects).where(eq(projects.id, Number(id))).limit(1);
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
      .update(projects)
      .set({
        slug: body.slug,
        title: body.title,
        category: body.category,
        categoryColor: body.categoryColor,
        location: body.location,
        year: Number(body.year),
        industry: body.industry,
        description: body.description,
        image: body.image,
        featured: Boolean(body.featured),
        contractType: body.contractType ?? null,
        value: body.value ?? null,
        duration: body.duration ?? null,
        durationRange: body.durationRange ?? null,
        client: body.client ?? null,
        area: body.area ?? null,
        structureType: body.structureType ?? null,
        overviewHtml: body.overviewHtml ?? null,
        scopeJson: body.scopeJson ?? null,
        highlightsJson: body.highlightsJson ?? null,
        galleryJson: body.galleryJson ?? null,
        documentsJson: body.documentsJson ?? null,
        status: body.status ?? "published",
        updatedAt: now,
      })
      .where(eq(projects.id, Number(id)))
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
    await db.delete(projects).where(eq(projects.id, Number(id)));
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
