import { NextResponse } from "next/server";
import { db, isDbConfigured } from "@/db";
import { quoteRequests } from "@/db/schema";
import { notifyAdmin } from "@/lib/email";

export async function POST(request: Request) {
  try {
    if (!isDbConfigured() || !db) {
      return NextResponse.json(
        { error: "Submission is temporarily unavailable" },
        { status: 503 }
      );
    }

    const data = await request.json();
    const [item] = await db
      .insert(quoteRequests)
      .values({ data: JSON.stringify(data), status: "new" })
      .returning();

    const title = data.projectTitle || data.fullName || "New quote request";
    await notifyAdmin(
      `New Quote Request — ${title}`,
      `<p>A new proposal/quote request was submitted.</p><p><strong>Project:</strong> ${title}</p><p><strong>Email:</strong> ${data.email || "—"}</p><p>View in admin dashboard.</p>`
    );

    return NextResponse.json({ ok: true, id: item.id });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  }
}
