"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageLoader } from "@/components/ui/PageLoader";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin/");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <PageLoader />
      <Header />
      <main className="flex-1 w-full max-w-full overflow-x-visible pt-[76px]">{children}</main>
      <Footer />
    </>
  );
}
