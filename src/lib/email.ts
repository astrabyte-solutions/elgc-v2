import nodemailer from "nodemailer";
import { eq } from "drizzle-orm";
import { db, isDbConfigured } from "@/db";
import { siteSettings } from "@/db/schema";

export interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  fromEmail: string;
  fromName: string;
  notifyTo: string;
}

const EMAIL_KEYS = [
  "smtp_host",
  "smtp_port",
  "smtp_secure",
  "smtp_user",
  "smtp_pass",
  "from_email",
  "from_name",
  "notify_to",
] as const;

export async function getEmailConfig(): Promise<EmailConfig | null> {
  if (!isDbConfigured() || !db) return null;

  const rows = await db.select().from(siteSettings);
  const map = Object.fromEntries(rows.map((r) => [r.key, r.value]));

  if (!map.smtp_host || !map.smtp_user || !map.from_email) return null;

  return {
    host: map.smtp_host,
    port: Number(map.smtp_port || 587),
    secure: map.smtp_secure === "true",
    user: map.smtp_user,
    pass: map.smtp_pass || "",
    fromEmail: map.from_email,
    fromName: map.from_name || "ELGC",
    notifyTo: map.notify_to || map.from_email,
  };
}

export async function saveEmailConfig(config: Partial<EmailConfig>) {
  if (!isDbConfigured() || !db) throw new Error("Database not configured");

  const entries: Record<string, string> = {
    smtp_host: config.host ?? "",
    smtp_port: String(config.port ?? 587),
    smtp_secure: String(config.secure ?? false),
    smtp_user: config.user ?? "",
    smtp_pass: config.pass ?? "",
    from_email: config.fromEmail ?? "",
    from_name: config.fromName ?? "ELGC",
    notify_to: config.notifyTo ?? "",
  };

  for (const [key, value] of Object.entries(entries)) {
    await db
      .insert(siteSettings)
      .values({ key, value, updatedAt: new Date() })
      .onConflictDoUpdate({
        target: siteSettings.key,
        set: { value, updatedAt: new Date() },
      });
  }
}

export async function sendEmail({
  to,
  subject,
  html,
  text,
}: {
  to: string;
  subject: string;
  html: string;
  text?: string;
}) {
  const config = await getEmailConfig();
  if (!config) return { ok: false, error: "Email not configured" };

  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: { user: config.user, pass: config.pass },
  });

  await transporter.sendMail({
    from: `"${config.fromName}" <${config.fromEmail}>`,
    to,
    subject,
    html,
    text,
  });

  return { ok: true };
}

export async function notifyAdmin(subject: string, html: string) {
  const config = await getEmailConfig();
  if (!config?.notifyTo) return { ok: false, error: "No notify email" };
  return sendEmail({ to: config.notifyTo, subject, html });
}

export async function getSetting(key: string) {
  if (!isDbConfigured() || !db) return null;
  const [row] = await db.select().from(siteSettings).where(eq(siteSettings.key, key)).limit(1);
  return row?.value ?? null;
}

export { EMAIL_KEYS };
