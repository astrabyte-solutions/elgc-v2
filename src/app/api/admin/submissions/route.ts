import { NextResponse } from "next/server";
import { desc, eq } from "drizzle-orm";
import { db, isDbConfigured } from "@/db";
import { supplierRegistrations, quoteRequests } from "@/db/schema";
import { requireSession } from "@/lib/admin/auth";

export async function GET(request: Request) {
  try {
    await requireSession();
    if (!isDbConfigured() || !db) return NextResponse.json({ items: [] });

    const type = new URL(request.url).searchParams.get("type");
    if (type === "quotes") {
      const items = await db.select().from(quoteRequests).orderBy(desc(quoteRequests.createdAt));
      return NextResponse.json({ items });
    }

    const items = await db
      .select()
      .from(supplierRegistrations)
      .orderBy(desc(supplierRegistrations.createdAt));
    return NextResponse.json({ items });
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}

export async function PATCH(request: Request) {
  try {
    await requireSession();
    if (!isDbConfigured() || !db) {
      return NextResponse.json({ error: "Database not configured" }, { status: 503 });
    }

    const { type, id, status } = await request.json();
    if (!id || !status) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    if (type === "quotes") {
      await db.update(quoteRequests).set({ status }).where(eq(quoteRequests.id, Number(id)));
    } else {
      await db
        .update(supplierRegistrations)
        .set({ status })
        .where(eq(supplierRegistrations.id, Number(id)));
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
