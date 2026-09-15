import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";
import { db, isDbConfigured } from "@/db";
import { users } from "@/db/schema";

const COOKIE_NAME = "elgc_admin_session";

function getSecret() {
  const secret = process.env.SESSION_SECRET;
  if (!secret) throw new Error("SESSION_SECRET is not configured");
  return new TextEncoder().encode(secret);
}

export interface AdminSession {
  userId: number;
  email: string;
  name: string;
  role: string;
}

export async function createSession(user: AdminSession) {
  const token = await new SignJWT({ ...user })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(getSecret());

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function destroySession() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export async function getSession(): Promise<AdminSession | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, getSecret());
    return payload as unknown as AdminSession;
  } catch {
    return null;
  }
}

export async function requireSession() {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");
  return session;
}

import { getAdminUrl } from "@/lib/admin/config";

export async function requireAdminPage(): Promise<AdminSession> {
  const session = await getSession();
  if (!session) {
    redirect(getAdminUrl("login"));
  }
  return session;
}

export async function verifyLogin(email: string, password: string) {
  if (!isDbConfigured() || !db) return null;

  const [user] = await db.select().from(users).where(eq(users.email, email)).limit(1);
  if (!user) return null;

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) return null;

  return {
    userId: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
  } satisfies AdminSession;
}

export async function ensureAdminUser() {
  if (!isDbConfigured() || !db) return;

  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  if (!email || !password) return;

  const [existing] = await db.select().from(users).where(eq(users.email, email)).limit(1);
  if (existing) return;

  const passwordHash = await bcrypt.hash(password, 12);
  await db.insert(users).values({
    email,
    passwordHash,
    name: "Site Admin",
    role: "admin",
  });
}
