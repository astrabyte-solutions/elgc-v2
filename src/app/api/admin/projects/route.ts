import { NextResponse } from "next/server";
import { desc } from "drizzle-orm";
import { db, isDbConfigured } from "@/db";
import { projects } from "@/db/schema";
import { requireSession } from "@/lib/admin/auth";

export async function GET() {
  try {
    await requireSession();
    if (!isDbConfigured() || !db) return NextResponse.json({ items: [] });
    const items = await db.select().from(projects).orderBy(desc(projects.updatedAt));
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
      .insert(projects)
      .values({
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
      .returning();

    return NextResponse.json({ item });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to create project" }, { status: 500 });
  }
}
