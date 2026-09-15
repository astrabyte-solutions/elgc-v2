import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { COMPANY } from "@/lib/data/company";
import logoImage from "../../public/images/logo.png";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ELGC | Industrial Construction, Shutdowns & EPC Projects UAE",
    template: "%s | ELGC",
  },
  description:
    "Abu Dhabi-based industrial construction contractor specialising in shutdowns, revamps, equipment erection, plant relocation, structural steel, piping, civil works and EPC delivery across live industrial environments in the UAE.",
  icons: {
    icon: [{ url: logoImage.src, type: "image/png", sizes: "any" }],
    apple: [{ url: logoImage.src, type: "image/png" }],
    shortcut: logoImage.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
