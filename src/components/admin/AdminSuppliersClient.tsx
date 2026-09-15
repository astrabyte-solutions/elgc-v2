"use client";

import { useEffect, useState } from "react";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";

interface SubmissionItem {
  id: number;
  data: string;
  status: string;
  createdAt: string;
}

export function AdminSuppliersClient() {
  const [items, setItems] = useState<SubmissionItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    void fetch("/api/admin/submissions?type=suppliers")
      .then((r) => r.json())
      .then((data) => setItems(data.items ?? []))
      .finally(() => setLoading(false));
  }, []);

  async function updateStatus(id: number, status: string) {
    await fetch("/api/admin/submissions", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "suppliers", id, status }),
    });
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, status } : item)));
  }

  return (
    <div>
      <AdminPageHeader
        eyebrow="Submissions"
        title="Supplier Registrations"
        subtitle="Review supplier registration submissions."
      />

      <div className="space-y-4 px-8 pb-10">
        {loading ? (
          <p className="text-sm text-[#94a3b8]">Loading...</p>
        ) : items.length === 0 ? (
          <p className="text-sm text-[#94a3b8]">No submissions yet.</p>
        ) : (
          items.map((item) => {
            const data = JSON.parse(item.data) as Record<string, string>;
            return (
              <div key={item.id} className="admin-card">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold text-[#0f2744]">
                      {data.companyName || data.legalName || `Registration #${item.id}`}
                    </p>
                    <p className="text-xs text-[#94a3b8]">
                      {new Date(item.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <select
                    className="admin-input w-auto"
                    value={item.status}
                    onChange={(e) => updateStatus(item.id, e.target.value)}
                  >
                    <option value="new">New</option>
                    <option value="reviewing">Reviewing</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>
                <pre className="max-h-64 overflow-auto rounded bg-[#f8fafc] p-4 text-xs text-[#475569]">
                  {JSON.stringify(data, null, 2)}
                </pre>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
