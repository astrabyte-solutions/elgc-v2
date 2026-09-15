import { NextResponse } from "next/server";
import { createSession, verifyLogin } from "@/lib/admin/auth";
import { ensureAdminUser } from "@/lib/admin/auth";

export async function POST(request: Request) {
  try {
    await ensureAdminUser();
    const { email, password } = await request.json();
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password required" }, { status: 400 });
    }

    const user = await verifyLogin(email, password);
    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    await createSession(user);
    return NextResponse.json({ ok: true, user: { name: user.name, email: user.email } });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
