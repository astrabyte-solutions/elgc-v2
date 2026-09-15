import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { getSession } from "@/lib/admin/auth";
import { isValidAdminPath } from "@/lib/admin/config";
import "@/styles/admin.css";

export const metadata: Metadata = {
  title: "Admin",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export default async function AdminLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ cmsPath: string }>;
}) {
  const { cmsPath } = await params;
  if (!isValidAdminPath(cmsPath)) {
    redirect("/");
  }

  const session = await getSession();

  if (session) {
    return (
      <div className="flex min-h-screen bg-[#f4f6f8]">
        <AdminSidebar userName={session.name} />
        <main className="min-w-0 flex-1 overflow-auto">{children}</main>
      </div>
    );
  }

  return <div className="min-h-screen bg-[#f4f6f8]">{children}</div>;
}
