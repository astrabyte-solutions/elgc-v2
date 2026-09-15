"use client";

import { useEffect, useState } from "react";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";

const emptyConfig = {
  host: "",
  port: 587,
  secure: false,
  user: "",
  pass: "",
  fromEmail: "",
  fromName: "ELGC",
  notifyTo: "",
};

export function AdminSettingsClient() {
  const [form, setForm] = useState(emptyConfig);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    void fetch("/api/admin/settings/email")
      .then((r) => r.json())
      .then((data) => {
        if (data.config) setForm({ ...emptyConfig, ...data.config });
      })
      .finally(() => setLoading(false));
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMessage("");

    const res = await fetch("/api/admin/settings/email", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setSaving(false);
    setMessage(res.ok ? "Email settings saved." : "Failed to save settings.");
  }

  if (loading) {
    return <p className="px-8 py-10 text-sm text-[#94a3b8]">Loading...</p>;
  }

  return (
    <div>
      <AdminPageHeader
        eyebrow="Settings"
        title="Email Configuration"
        subtitle="Configure SMTP details for outbound notifications."
      />

      <form onSubmit={handleSubmit} className="max-w-2xl space-y-4 px-8 pb-10">
        <div className="admin-card space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="admin-label">SMTP Host</label>
              <input className="admin-input" value={form.host} onChange={(e) => setForm({ ...form, host: e.target.value })} />
            </div>
            <div>
              <label className="admin-label">SMTP Port</label>
              <input type="number" className="admin-input" value={form.port} onChange={(e) => setForm({ ...form, port: Number(e.target.value) })} />
            </div>
          </div>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={form.secure} onChange={(e) => setForm({ ...form, secure: e.target.checked })} className="accent-[#22c55e]" />
            Use SSL/TLS (secure)
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="admin-label">SMTP Username</label>
              <input className="admin-input" value={form.user} onChange={(e) => setForm({ ...form, user: e.target.value })} />
            </div>
            <div>
              <label className="admin-label">SMTP Password</label>
              <input type="password" className="admin-input" value={form.pass} onChange={(e) => setForm({ ...form, pass: e.target.value })} />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="admin-label">From Email</label>
              <input type="email" className="admin-input" value={form.fromEmail} onChange={(e) => setForm({ ...form, fromEmail: e.target.value })} />
            </div>
            <div>
              <label className="admin-label">From Name</label>
              <input className="admin-input" value={form.fromName} onChange={(e) => setForm({ ...form, fromName: e.target.value })} />
            </div>
          </div>
          <div>
            <label className="admin-label">Notify Admin Email</label>
            <input type="email" className="admin-input" value={form.notifyTo} onChange={(e) => setForm({ ...form, notifyTo: e.target.value })} />
            <p className="mt-1 text-xs text-[#94a3b8]">Receives alerts for new supplier registrations and quote requests.</p>
          </div>
        </div>

        {message && <p className="text-sm text-[#16a34a]">{message}</p>}

        <button type="submit" disabled={saving} className="rounded-lg bg-[#22c55e] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#16a34a] disabled:opacity-60">
          {saving ? "Saving..." : "Save Settings"}
        </button>
      </form>
    </div>
  );
}
