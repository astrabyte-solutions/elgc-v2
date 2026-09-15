"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { getAdminUrl } from "@/lib/admin/config";

export function AdminLoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setError(data.error || "Login failed");
      return;
    }

    router.push(getAdminUrl("dashboard"));
    router.refresh();
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-md rounded-xl border border-[#e8ecf0] bg-white p-8 shadow-sm">
        <div className="mb-8 text-center">
          <Logo size="header" showWordmark className="mx-auto justify-center" />
          <p className="mt-3 text-xs font-bold tracking-[0.14em] text-[#22c55e] uppercase">Admin CMS</p>
          <h1 className="mt-4 text-xl font-bold text-[#0f2744]">Sign in to your dashboard</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="admin-label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="admin-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="admin-label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              className="admin-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[#22c55e] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#16a34a] disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
