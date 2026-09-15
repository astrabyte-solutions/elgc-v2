import { NextResponse } from "next/server";
import { db, isDbConfigured } from "@/db";
import { supplierRegistrations } from "@/db/schema";
import { notifyAdmin } from "@/lib/email";

export async function POST(request: Request) {
  try {
    if (!isDbConfigured() || !db) {
      return NextResponse.json(
        { error: "Registration is temporarily unavailable" },
        { status: 503 }
      );
    }

    const data = await request.json();
    const [item] = await db
      .insert(supplierRegistrations)
      .values({ data: JSON.stringify(data), status: "new" })
      .returning();

    const orgName = data.organizationName || data.trn || "New supplier";
    await notifyAdmin(
      `New Supplier Registration — ${orgName}`,
      `<p>A new supplier registration was submitted.</p><p><strong>Organization:</strong> ${orgName}</p><p><strong>Email:</strong> ${data.salesPersonEmail || "—"}</p><p>View in admin dashboard.</p>`
    );

    return NextResponse.json({ ok: true, id: item.id });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  }
}
