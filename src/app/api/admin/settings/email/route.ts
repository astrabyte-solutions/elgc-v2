import { NextResponse } from "next/server";
import { getEmailConfig, saveEmailConfig } from "@/lib/email";
import { requireSession } from "@/lib/admin/auth";

export async function GET() {
  try {
    await requireSession();
    const config = await getEmailConfig();
    return NextResponse.json({
      config: config
        ? { ...config, pass: config.pass ? "********" : "" }
        : null,
    });
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}

export async function PUT(request: Request) {
  try {
    await requireSession();
    const body = await request.json();
    const existing = await getEmailConfig();
    await saveEmailConfig({
      host: body.host,
      port: Number(body.port),
      secure: Boolean(body.secure),
      user: body.user,
      pass: body.pass === "********" ? existing?.pass ?? "" : body.pass,
      fromEmail: body.fromEmail,
      fromName: body.fromName,
      notifyTo: body.notifyTo,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to save settings" }, { status: 500 });
  }
}
